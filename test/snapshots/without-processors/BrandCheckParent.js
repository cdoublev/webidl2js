import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/BrandCheckParent.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "BrandCheckParent";

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
  throw new globalObject.TypeError(`${context} is not of type 'BrandCheckParent'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["BrandCheckParent"].prototype;
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
  class BrandCheckParent {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    parentMethod() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "parentMethod");
      return $impl.parentMethod();
    }

    get value() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get value");
      return $impl["value"];
    }

    set value(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set value");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'value' property on 'BrandCheckParent': The provided value`,
        globals: globalObject,
      });

      $impl["value"] = V;
    }

    toString() {
      const $impl = $requireImpl(this, globalObject, "toString");

      return $impl["value"];
    }
  }
  Object.defineProperties(BrandCheckParent.prototype, {
    parentMethod: { enumerable: true },
    value: { enumerable: true },
    toString: { enumerable: true },
    [Symbol.toStringTag]: { value: "BrandCheckParent", configurable: true },
  });
  ctorRegistry[interfaceName] = BrandCheckParent;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: BrandCheckParent,
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
