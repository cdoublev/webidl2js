import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/LegacyLenientAttributes.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "LegacyLenientAttributes";

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
  throw new globalObject.TypeError(`${context} is not of type 'LegacyLenientAttributes'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["LegacyLenientAttributes"].prototype;
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
  class LegacyLenientAttributes {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    get lenientSetter() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get lenientSetter");
      return $impl["lenientSetter"];
    }

    set lenientSetter(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set lenientSetter");
    }

    get lenientThisSetter() {
      const $impl = utils.implForWrapperWithInterface(this ?? globalObject, $interfaceDescriptor);
      if ($impl === null) {
        return;
      }

      return $impl["lenientThisSetter"];
    }

    set lenientThisSetter(V) {}

    get lenientThis() {
      const $impl = utils.implForWrapperWithInterface(this ?? globalObject, $interfaceDescriptor);
      if ($impl === null) {
        return;
      }

      return $impl["lenientThis"];
    }

    set lenientThis(V) {
      const $impl = utils.implForWrapperWithInterface(this ?? globalObject, $interfaceDescriptor);
      if ($impl === null) {
        return;
      }

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'lenientThis' property on 'LegacyLenientAttributes': The provided value`,
        globals: globalObject,
      });

      $impl["lenientThis"] = V;
    }

    get readonlyLenientThis() {
      const $impl = utils.implForWrapperWithInterface(this ?? globalObject, $interfaceDescriptor);
      if ($impl === null) {
        return;
      }

      return $impl["readonlyLenientThis"];
    }

    get replaceableLenientThis() {
      const $impl = utils.implForWrapperWithInterface(this ?? globalObject, $interfaceDescriptor);
      if ($impl === null) {
        return;
      }

      return $impl["replaceableLenientThis"];
    }

    set replaceableLenientThis(V) {
      const esValue = this ?? globalObject;

      Object.defineProperty(esValue, "replaceableLenientThis", {
        configurable: true,
        enumerable: true,
        value: V,
        writable: true,
      });
    }
  }
  Object.defineProperties(LegacyLenientAttributes.prototype, {
    lenientSetter: { enumerable: true },
    lenientThisSetter: { enumerable: true },
    lenientThis: { enumerable: true },
    readonlyLenientThis: { enumerable: true },
    replaceableLenientThis: { enumerable: true },
    [Symbol.toStringTag]: { value: "LegacyLenientAttributes", configurable: true },
  });
  ctorRegistry[interfaceName] = LegacyLenientAttributes;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: LegacyLenientAttributes,
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
