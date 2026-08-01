import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/Unscopable.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Unscopable";

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
  throw new globalObject.TypeError(`${context} is not of type 'Unscopable'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Unscopable"].prototype;
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
  class Unscopable {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    unscopableOperation() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "unscopableOperation");
      return $impl.unscopableOperation();
    }

    get unscopableTest() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get unscopableTest");
      return $impl["unscopableTest"];
    }

    set unscopableTest(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set unscopableTest");

      V = conversions["boolean"](V, {
        context: `Failed to set the 'unscopableTest' property on 'Unscopable': The provided value`,
        globals: globalObject,
      });

      $impl["unscopableTest"] = V;
    }

    get unscopableMixin() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get unscopableMixin");
      return $impl["unscopableMixin"];
    }

    set unscopableMixin(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set unscopableMixin");

      V = conversions["boolean"](V, {
        context: `Failed to set the 'unscopableMixin' property on 'Unscopable': The provided value`,
        globals: globalObject,
      });

      $impl["unscopableMixin"] = V;
    }
  }
  Object.defineProperties(Unscopable.prototype, {
    unscopableOperation: { enumerable: true },
    unscopableTest: { enumerable: true },
    unscopableMixin: { enumerable: true },
    [Symbol.toStringTag]: { value: "Unscopable", configurable: true },
    [Symbol.unscopables]: {
      value: {
        unscopableTest: true,
        unscopableOperation: true,
        unscopableMixin: true,
        __proto__: null,
      },
      configurable: true,
    },
  });
  ctorRegistry[interfaceName] = Unscopable;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Unscopable,
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
