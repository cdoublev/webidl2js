import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/Global.js";

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Global";

const is = value => {
  return utils.isObject(value) && Object.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl;
};
const isImpl = value => {
  return utils.isObject(value) && value instanceof Impl;
};
const convert = (globalObject, value, { context = "The provided value" } = {}) => {
  if (is(value)) {
    return utils.implForWrapper(value);
  }
  throw new globalObject.TypeError(`${context} is not of type 'Global'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Global"].prototype;
  }

  return Object.create(proto);
}

const create = (globalObject, constructorArgs, privateData) => {
  const wrapper = makeWrapper(globalObject);
  return setup(wrapper, globalObject, constructorArgs, privateData);
};

const createImpl = (globalObject, constructorArgs, privateData) => {
  const wrapper = create(globalObject, constructorArgs, privateData);
  return utils.implForWrapper(wrapper);
};

const _internalSetup = (wrapper, globalObject) => {
  utils.define(wrapper, {
    op() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!is(esValue)) {
        throw new globalObject.TypeError("'op' called on an object that is not a valid instance of Global.");
      }

      return esValue[implSymbol].op();
    },
    unforgeableOp() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!is(esValue)) {
        throw new globalObject.TypeError("'unforgeableOp' called on an object that is not a valid instance of Global.");
      }

      return esValue[implSymbol].unforgeableOp();
    },
    get attr() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!is(esValue)) {
        throw new globalObject.TypeError("'get attr' called on an object that is not a valid instance of Global.");
      }

      return esValue[implSymbol]["attr"];
    },
    set attr(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!is(esValue)) {
        throw new globalObject.TypeError("'set attr' called on an object that is not a valid instance of Global.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'attr' property on 'Global': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["attr"] = V;
    },
    get unforgeableAttr() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!is(esValue)) {
        throw new globalObject.TypeError(
          "'get unforgeableAttr' called on an object that is not a valid instance of Global."
        );
      }

      return esValue[implSymbol]["unforgeableAttr"];
    },
    set unforgeableAttr(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!is(esValue)) {
        throw new globalObject.TypeError(
          "'set unforgeableAttr' called on an object that is not a valid instance of Global."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'unforgeableAttr' property on 'Global': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["unforgeableAttr"] = V;
    },
    get length() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!is(esValue)) {
        throw new globalObject.TypeError("'get length' called on an object that is not a valid instance of Global.");
      }

      return esValue[implSymbol]["length"];
    },
    set length(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!is(esValue)) {
        throw new globalObject.TypeError("'set length' called on an object that is not a valid instance of Global.");
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'length' property on 'Global': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["length"] = V;
    },
    [Symbol.iterator]: globalObject.Array.prototype[Symbol.iterator],
    keys: globalObject.Array.prototype.keys,
    values: globalObject.Array.prototype.values,
    entries: globalObject.Array.prototype.entries,
    forEach: globalObject.Array.prototype.forEach
  });

  Object.defineProperties(wrapper, {
    unforgeableOp: { configurable: false, writable: false },
    unforgeableAttr: { configurable: false },
    [Symbol.iterator]: { enumerable: false }
  });
};

const setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  _internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: new Impl(globalObject, constructorArgs, privateData),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper;
};

const createNew = (globalObject, newTarget) => {
  const wrapper = makeWrapper(globalObject, newTarget);

  _internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: Object.create(Impl.prototype),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper[implSymbol];
};

const exposed = new Set(["Global"]);

const install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class Global {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    static staticOp() {
      return Impl.staticOp();
    }

    static get staticAttr() {
      return Impl["staticAttr"];
    }

    static set staticAttr(V) {
      V = conversions["DOMString"](V, {
        context: "Failed to set the 'staticAttr' property on 'Global': The provided value",
        globals: globalObject
      });

      Impl["staticAttr"] = V;
    }
  }
  Object.defineProperties(Global.prototype, { [Symbol.toStringTag]: { value: "Global", configurable: true } });
  Object.defineProperties(Global, { staticOp: { enumerable: true }, staticAttr: { enumerable: true } });
  ctorRegistry[interfaceName] = Global;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Global
  });
};

export default {
  _internalSetup,
  convert,
  create,
  new: createNew,
  createImpl,
  install,
  is,
  isImpl,
  setup
};
