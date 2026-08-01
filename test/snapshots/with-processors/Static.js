import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/Static.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Static";

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

const exposed = new Set(["Window"]);

const install = (globalObject, globalNames) => {
  if (!globalNames.some((globalName) => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class Static {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    def() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "def");
      return $impl.def();
    }

    get abc() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get abc");
      return $impl["abc"];
    }

    set abc(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set abc");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'abc' property on 'Static': The provided value`,
        globals: globalObject,
      });

      $impl["abc"] = V;
    }

    static def() {
      return Impl.def();
    }

    static get abc() {
      return Impl["abc"];
    }

    static set abc(V) {
      V = conversions["DOMString"](V, {
        context: `Failed to set the 'abc' property on 'Static': The provided value`,
        globals: globalObject,
      });

      Impl["abc"] = V;
    }
  }
  Object.defineProperties(Static.prototype, {
    def: { enumerable: true },
    abc: { enumerable: true },
    [Symbol.toStringTag]: { value: "Static", configurable: true },
  });
  Object.defineProperties(Static, { def: { enumerable: true }, abc: { enumerable: true } });
  ctorRegistry[interfaceName] = Static;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Static,
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
