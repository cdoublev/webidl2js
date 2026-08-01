import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/PartialInterface.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "PartialInterface";

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
  throw new globalObject.TypeError(`${context} is not of type 'PartialInterface'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["PartialInterface"].prototype;
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
  class PartialInterface {
    constructor() {
      return setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    operation(value) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "operation");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'operation' on 'PartialInterface': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["long"](curArg, {
          context: `Failed to execute 'operation' on 'PartialInterface': parameter 1`,
          globals: globalObject,
        });
        args.push(curArg);
      }
      return $impl.operation(...args);
    }

    partialOperation(value) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "partialOperation");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'partialOperation' on 'PartialInterface': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: `Failed to execute 'partialOperation' on 'PartialInterface': parameter 1`,
          globals: globalObject,
        });
        args.push(curArg);
      }
      return $impl.partialOperation(...args);
    }

    get value() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get value");
      return $impl["value"];
    }

    set value(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set value");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'value' property on 'PartialInterface': The provided value`,
        globals: globalObject,
      });

      $impl["value"] = V;
    }
  }
  Object.defineProperties(PartialInterface.prototype, {
    operation: { enumerable: true },
    partialOperation: { enumerable: true },
    value: { enumerable: true },
    [Symbol.toStringTag]: { value: "PartialInterface", configurable: true },
    ENABLED: { value: true, enumerable: true },
    NOT_A_NUMBER: { value: NaN, enumerable: true },
    POSITIVE_INFINITY: { value: Infinity, enumerable: true },
    NEGATIVE_INFINITY: { value: -Infinity, enumerable: true },
  });
  Object.defineProperties(PartialInterface, {
    ENABLED: { value: true, enumerable: true },
    NOT_A_NUMBER: { value: NaN, enumerable: true },
    POSITIVE_INFINITY: { value: Infinity, enumerable: true },
    NEGATIVE_INFINITY: { value: -Infinity, enumerable: true },
  });
  ctorRegistry[interfaceName] = PartialInterface;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: PartialInterface,
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
