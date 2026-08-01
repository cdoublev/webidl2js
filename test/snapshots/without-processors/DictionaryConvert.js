import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/DictionaryConvert.js";

import Dictionary from "./Dictionary.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "DictionaryConvert";

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
  throw new globalObject.TypeError(`${context} is not of type 'DictionaryConvert'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["DictionaryConvert"].prototype;
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
  class DictionaryConvert {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    op() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "op");
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: `Failed to execute 'op' on 'DictionaryConvert': parameter 1`,
            globals: globalObject,
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = Dictionary.convert(globalObject, curArg, {
          context: `Failed to execute 'op' on 'DictionaryConvert': parameter 2`,
        });
        args.push(curArg);
      }
      return $impl.op(...args);
    }
  }
  Object.defineProperties(DictionaryConvert.prototype, {
    op: { enumerable: true },
    [Symbol.toStringTag]: { value: "DictionaryConvert", configurable: true },
  });
  ctorRegistry[interfaceName] = DictionaryConvert;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: DictionaryConvert,
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
