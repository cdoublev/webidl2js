import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/UnderscoredProperties.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "UnderscoredProperties";

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
  throw new globalObject.TypeError(`${context} is not of type 'UnderscoredProperties'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["UnderscoredProperties"].prototype;
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
  class UnderscoredProperties {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    operation(sequence) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "operation");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'operation' on 'UnderscoredProperties': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (!utils.isObject(curArg)) {
          throw new globalObject.TypeError(
            `Failed to execute 'operation' on 'UnderscoredProperties': parameter 1 is not an iterable object.`,
          );
        } else {
          const V = [];
          const tmp = curArg;
          for (let nextItem of tmp) {
            nextItem = conversions["DOMString"](nextItem, {
              context: `Failed to execute 'operation' on 'UnderscoredProperties': parameter 1's element`,
              globals: globalObject,
            });

            V.push(nextItem);
          }
          curArg = V;
        }
        args.push(curArg);
      }
      return $impl.operation(...args);
    }

    get attribute() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get attribute");
      return $impl["attribute"];
    }

    set attribute(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set attribute");

      V = conversions["byte"](V, {
        context: `Failed to set the 'attribute' property on 'UnderscoredProperties': The provided value`,
        globals: globalObject,
      });

      $impl["attribute"] = V;
    }

    static static(void_) {
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'static' on 'UnderscoredProperties': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: `Failed to execute 'static' on 'UnderscoredProperties': parameter 1`,
          globals: globalObject,
        });
        args.push(curArg);
      }
      return Impl.static(...args);
    }
  }
  Object.defineProperties(UnderscoredProperties.prototype, {
    operation: { enumerable: true },
    attribute: { enumerable: true },
    [Symbol.toStringTag]: { value: "UnderscoredProperties", configurable: true },
    const: { value: 42, enumerable: true },
  });
  Object.defineProperties(UnderscoredProperties, {
    static: { enumerable: true },
    const: { value: 42, enumerable: true },
  });
  ctorRegistry[interfaceName] = UnderscoredProperties;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: UnderscoredProperties,
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
