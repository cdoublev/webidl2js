import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/ObservableArraysChild.js";

import ObservableArrays from "./ObservableArrays.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "ObservableArraysChild";

const $interfaceDescriptor = utils.createInterfaceDescriptor(
  () => ObservableArrays.interfaceDescriptor,
);
const interfaceDescriptor = $interfaceDescriptor;

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
  throw new globalObject.TypeError(`${context} is not of type 'ObservableArraysChild'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["ObservableArraysChild"].prototype;
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
  ObservableArrays._internalSetup(wrapper, globalObject);
};
const _initializeObservableArrays = (impl, globalObject) => {
  ObservableArrays._initializeObservableArrays(impl, globalObject);
};
const setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  _internalSetup(wrapper, globalObject);
  const impl = new Impl(globalObject, constructorArgs, privateData);

  utils.registerWrapper(wrapper, impl, interfaceDescriptor);
  impl[utils.wrapperSymbol] = wrapper;
  _initializeObservableArrays(impl, globalObject);
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
  _initializeObservableArrays(impl, globalObject);
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
  class ObservableArraysChild extends globalObject.ObservableArrays {
    constructor() {
      return setup(Object.create(new.target.prototype), globalObject, undefined);
    }
  }
  Object.defineProperties(ObservableArraysChild.prototype, {
    [Symbol.toStringTag]: { value: "ObservableArraysChild", configurable: true },
  });
  ctorRegistry[interfaceName] = ObservableArraysChild;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: ObservableArraysChild,
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
  _initializeObservableArrays,
};
