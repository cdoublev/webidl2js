import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/PromiseTypes.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "PromiseTypes";

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
  throw new globalObject.TypeError(`${context} is not of type 'PromiseTypes'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["PromiseTypes"].prototype;
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

function getUnforgeables(globalObject) {
  let unforgeables = unforgeablesMap.get(globalObject);
  if (unforgeables === undefined) {
    unforgeables = Object.create(null);
    utils.define(unforgeables, {
      unforgeablePromiseOperation() {
        try {
          const $impl = $requireImpl(
            this ?? globalObject,
            globalObject,
            "unforgeablePromiseOperation",
          );
          return utils.tryWrapperForImpl($impl.unforgeablePromiseOperation());
        } catch (e) {
          return globalObject.Promise.reject(e);
        }
      },
      get unforgeablePromiseAttribute() {
        try {
          const $impl = $requireImpl(
            this ?? globalObject,
            globalObject,
            "get unforgeablePromiseAttribute",
          );
          return utils.tryWrapperForImpl($impl["unforgeablePromiseAttribute"]);
        } catch (e) {
          return globalObject.Promise.reject(e);
        }
      },
    });
    Object.defineProperties(unforgeables, {
      unforgeablePromiseOperation: { configurable: false, writable: false },
      unforgeablePromiseAttribute: { configurable: false },
    });
    unforgeablesMap.set(globalObject, unforgeables);
  }
  return unforgeables;
}

const _internalSetup = (wrapper, globalObject) => {
  utils.define(wrapper, getUnforgeables(globalObject));
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

const unforgeablesMap = new WeakMap();
const exposed = new Set(["Window"]);

const install = (globalObject, globalNames) => {
  if (!globalNames.some((globalName) => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class PromiseTypes {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    voidPromiseConsumer(p) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "voidPromiseConsumer");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'voidPromiseConsumer' on 'PromiseTypes': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = new globalObject.Promise((resolve) => resolve(curArg));
        args.push(curArg);
      }
      return $impl.voidPromiseConsumer(...args);
    }

    promiseConsumer(p) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "promiseConsumer");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'promiseConsumer' on 'PromiseTypes': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = new globalObject.Promise((resolve) => resolve(curArg));
        args.push(curArg);
      }
      return $impl.promiseConsumer(...args);
    }

    promiseOperation() {
      try {
        const $impl = $requireImpl(this ?? globalObject, globalObject, "promiseOperation");
        return utils.tryWrapperForImpl($impl.promiseOperation());
      } catch (e) {
        return globalObject.Promise.reject(e);
      }
    }

    get promiseAttribute() {
      try {
        const $impl = $requireImpl(this ?? globalObject, globalObject, "get promiseAttribute");
        return utils.tryWrapperForImpl($impl["promiseAttribute"]);
      } catch (e) {
        return globalObject.Promise.reject(e);
      }
    }

    static staticPromiseOperation() {
      try {
        return utils.tryWrapperForImpl(Impl.staticPromiseOperation());
      } catch (e) {
        return globalObject.Promise.reject(e);
      }
    }

    static get staticPromiseAttribute() {
      try {
        return utils.tryWrapperForImpl(Impl["staticPromiseAttribute"]);
      } catch (e) {
        return globalObject.Promise.reject(e);
      }
    }
  }
  Object.defineProperties(PromiseTypes.prototype, {
    voidPromiseConsumer: { enumerable: true },
    promiseConsumer: { enumerable: true },
    promiseOperation: { enumerable: true },
    promiseAttribute: { enumerable: true },
    [Symbol.toStringTag]: { value: "PromiseTypes", configurable: true },
  });
  Object.defineProperties(PromiseTypes, {
    staticPromiseOperation: { enumerable: true },
    staticPromiseAttribute: { enumerable: true },
  });
  ctorRegistry[interfaceName] = PromiseTypes;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: PromiseTypes,
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
