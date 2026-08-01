import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/Global.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Global";

const $interfaceDescriptor = utils.createInterfaceDescriptor();
const interfaceDescriptor = $interfaceDescriptor;

function $requireImpl(wrapper, globalObject, context) {
  return utils.requireImplForWrapper(
    wrapper,
    interfaceDescriptor,
    globalObject,
    interfaceName,
    context,
  );
}

const is = (value) => {
  return utils.implForWrapperWithInterface(value, interfaceDescriptor) !== null;
};
const isImpl = (value) => {
  return utils.isObject(value) && value instanceof Impl;
};
const convert = (globalObject, value, { context = "The provided value" } = {}) => {
  const impl = utils.implForWrapperWithInterface(value, interfaceDescriptor);
  if (impl !== null) {
    return impl;
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
      const $impl = $requireImpl(this ?? globalObject, globalObject, "op");
      return $impl.op();
    },
    unforgeableOp() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "unforgeableOp");
      return $impl.unforgeableOp();
    },
    get attr() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get attr");
      return $impl["attr"];
    },
    set attr(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set attr");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'attr' property on 'Global': The provided value`,
        globals: globalObject,
      });

      $impl["attr"] = V;
    },
    get unforgeableAttr() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get unforgeableAttr");
      return $impl["unforgeableAttr"];
    },
    set unforgeableAttr(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set unforgeableAttr");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'unforgeableAttr' property on 'Global': The provided value`,
        globals: globalObject,
      });

      $impl["unforgeableAttr"] = V;
    },
    get length() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get length");
      return $impl["length"];
    },
    set length(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set length");

      V = conversions["unsigned long"](V, {
        context: `Failed to set the 'length' property on 'Global': The provided value`,
        globals: globalObject,
      });

      $impl["length"] = V;
    },
    [Symbol.iterator]: globalObject.Array.prototype[Symbol.iterator],
    keys: globalObject.Array.prototype.keys,
    values: globalObject.Array.prototype.values,
    entries: globalObject.Array.prototype.entries,
    forEach: globalObject.Array.prototype.forEach,
  });

  Object.defineProperties(wrapper, {
    unforgeableOp: { configurable: false, writable: false },
    unforgeableAttr: { configurable: false },
    [Symbol.iterator]: { enumerable: false },
  });
};

const setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  _internalSetup(wrapper, globalObject);
  const impl = new Impl(globalObject, constructorArgs, privateData);

  utils.registerWrapper(wrapper, impl, interfaceDescriptor);
  impl[utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(impl);
  }
  return wrapper;
};

const createNew = (globalObject, newTarget) => {
  const wrapper = makeWrapper(globalObject, newTarget);

  _internalSetup(wrapper, globalObject);
  const impl = Object.create(Impl.prototype);

  utils.registerWrapper(wrapper, impl, interfaceDescriptor);
  impl[utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(impl);
  }
  return impl;
};

const exposed = new Set(["Global"]);

const install = (globalObject, globalNames) => {
  if (!globalNames.some((globalName) => exposed.has(globalName))) {
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
        context: `Failed to set the 'staticAttr' property on 'Global': The provided value`,
        globals: globalObject,
      });

      Impl["staticAttr"] = V;
    }
  }
  Object.defineProperties(Global.prototype, {
    [Symbol.toStringTag]: { value: "Global", configurable: true },
  });
  Object.defineProperties(Global, {
    staticOp: { enumerable: true },
    staticAttr: { enumerable: true },
  });
  ctorRegistry[interfaceName] = Global;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Global,
  });
};

export default {
  _internalSetup,
  convert,
  create,
  new: createNew,
  createImpl,
  install,
  interfaceDescriptor,
  is,
  isImpl,
  setup,
};
