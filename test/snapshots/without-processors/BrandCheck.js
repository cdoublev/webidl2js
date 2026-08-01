import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/BrandCheck.js";

import BrandCheckParent from "./BrandCheckParent.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const inheritance = "BrandCheckParent";

const interfaceName = "BrandCheck";

const $interfaceDescriptor = utils.createInterfaceDescriptor(
  () => BrandCheckParent.interfaceDescriptor,
);
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
  throw new globalObject.TypeError(`${context} is not of type 'BrandCheck'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["BrandCheck"].prototype;
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
  BrandCheckParent._internalSetup(wrapper, globalObject);
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

const exposed = new Set(["Window"]);

const install = (globalObject, globalNames) => {
  if (!globalNames.some((globalName) => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class BrandCheck extends globalObject.BrandCheckParent {
    constructor() {
      return setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    childMethod() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "childMethod");
      return $impl.childMethod();
    }

    shadow(interfaceDescriptor) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "shadow");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'shadow' on 'BrandCheck': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["any"](curArg, {
          context: `Failed to execute 'shadow' on 'BrandCheck': parameter 1`,
          globals: globalObject,
        });
        args.push(curArg);
      }
      return $impl.shadow(...args);
    }

    objectUnion(value) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "objectUnion");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'objectUnion' on 'BrandCheck': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (utils.isObject(curArg)) {
          curArg = utils.tryImplForWrapper(curArg);
        } else if (typeof curArg === "number") {
          curArg = conversions["double"](curArg, {
            context: `Failed to execute 'objectUnion' on 'BrandCheck': parameter 1`,
            globals: globalObject,
          });
        } else {
          curArg = conversions["double"](curArg, {
            context: `Failed to execute 'objectUnion' on 'BrandCheck': parameter 1`,
            globals: globalObject,
          });
        }
        args.push(curArg);
      }
      return $impl.objectUnion(...args);
    }
  }
  Object.defineProperties(BrandCheck.prototype, {
    childMethod: { enumerable: true },
    shadow: { enumerable: true },
    objectUnion: { enumerable: true },
    [Symbol.toStringTag]: { value: "BrandCheck", configurable: true },
  });
  ctorRegistry[interfaceName] = BrandCheck;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: BrandCheck,
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
  inheritance,
};
