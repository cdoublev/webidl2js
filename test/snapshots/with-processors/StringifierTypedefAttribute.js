import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/StringifierTypedefAttribute.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "StringifierTypedefAttribute";

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
  throw new globalObject.TypeError(`${context} is not of type 'StringifierTypedefAttribute'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["StringifierTypedefAttribute"].prototype;
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
  class StringifierTypedefAttribute {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    get mediaText() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get mediaText");
      return utils.tryWrapperForImpl($impl["mediaText"]);
    }

    set mediaText(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set mediaText");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'mediaText' property on 'StringifierTypedefAttribute': The provided value`,
        globals: globalObject,
        treatNullAsEmptyString: true,
      });

      $impl["mediaText"] = V;
    }

    toString() {
      const $impl = $requireImpl(this, globalObject, "toString");

      return utils.tryWrapperForImpl($impl["mediaText"]);
    }
  }
  Object.defineProperties(StringifierTypedefAttribute.prototype, {
    mediaText: { enumerable: true },
    toString: { enumerable: true },
    [Symbol.toStringTag]: { value: "StringifierTypedefAttribute", configurable: true },
  });
  ctorRegistry[interfaceName] = StringifierTypedefAttribute;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: StringifierTypedefAttribute,
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
