import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/Enum.js";

import RequestDestination from "./RequestDestination.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Enum";

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
  throw new globalObject.TypeError(`${context} is not of type 'Enum'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Enum"].prototype;
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
  class Enum {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    op(destination) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "op");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'op' on 'Enum': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = RequestDestination.convert(globalObject, curArg, {
          context: `Failed to execute 'op' on 'Enum': parameter 1`,
        });
        args.push(curArg);
      }
      return $impl.op(...args);
    }

    get attr() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get attr");
      return utils.tryWrapperForImpl($impl["attr"]);
    }

    set attr(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set attr");

      V = `${V}`;
      if (!RequestDestination.enumerationValues.has(V)) {
        return;
      }

      $impl["attr"] = V;
    }
  }
  Object.defineProperties(Enum.prototype, {
    op: { enumerable: true },
    attr: { enumerable: true },
    [Symbol.toStringTag]: { value: "Enum", configurable: true },
  });
  ctorRegistry[interfaceName] = Enum;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Enum,
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
