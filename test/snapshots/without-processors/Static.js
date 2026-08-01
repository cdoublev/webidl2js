import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/Static.js";

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Static";

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
  throw new globalObject.TypeError(`${context} is not of type 'Static'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Static"].prototype;
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

const _internalSetup = (wrapper, globalObject) => {};

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

const exposed = new Set(["Window"]);

const install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class Static {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    def() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!is(esValue)) {
        throw new globalObject.TypeError("'def' called on an object that is not a valid instance of Static.");
      }

      return esValue[implSymbol].def();
    }

    get abc() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!is(esValue)) {
        throw new globalObject.TypeError("'get abc' called on an object that is not a valid instance of Static.");
      }

      return esValue[implSymbol]["abc"];
    }

    set abc(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!is(esValue)) {
        throw new globalObject.TypeError("'set abc' called on an object that is not a valid instance of Static.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'abc' property on 'Static': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["abc"] = V;
    }

    static def() {
      return Impl.def();
    }

    static get abc() {
      return Impl["abc"];
    }

    static set abc(V) {
      V = conversions["DOMString"](V, {
        context: "Failed to set the 'abc' property on 'Static': The provided value",
        globals: globalObject
      });

      Impl["abc"] = V;
    }
  }
  Object.defineProperties(Static.prototype, {
    def: { enumerable: true },
    abc: { enumerable: true },
    [Symbol.toStringTag]: { value: "Static", configurable: true }
  });
  Object.defineProperties(Static, { def: { enumerable: true }, abc: { enumerable: true } });
  ctorRegistry[interfaceName] = Static;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Static
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
