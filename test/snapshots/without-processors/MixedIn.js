import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/MixedIn.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "MixedIn";

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
  throw new globalObject.TypeError(`${context} is not of type 'MixedIn'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["MixedIn"].prototype;
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
  class MixedIn {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    mixedInOp() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "mixedInOp");
      return $impl.mixedInOp();
    }

    ifaceMixinOp() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "ifaceMixinOp");
      return $impl.ifaceMixinOp();
    }

    get mixedInAttr() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get mixedInAttr");
      return $impl["mixedInAttr"];
    }

    set mixedInAttr(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set mixedInAttr");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'mixedInAttr' property on 'MixedIn': The provided value`,
        globals: globalObject,
      });

      $impl["mixedInAttr"] = V;
    }

    get ifaceMixinAttr() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get ifaceMixinAttr");
      return $impl["ifaceMixinAttr"];
    }

    set ifaceMixinAttr(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set ifaceMixinAttr");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'ifaceMixinAttr' property on 'MixedIn': The provided value`,
        globals: globalObject,
      });

      $impl["ifaceMixinAttr"] = V;
    }
  }
  Object.defineProperties(MixedIn.prototype, {
    mixedInOp: { enumerable: true },
    ifaceMixinOp: { enumerable: true },
    mixedInAttr: { enumerable: true },
    ifaceMixinAttr: { enumerable: true },
    [Symbol.toStringTag]: { value: "MixedIn", configurable: true },
    mixedInConst: { value: 43, enumerable: true },
    ifaceMixinConst: { value: 42, enumerable: true },
  });
  Object.defineProperties(MixedIn, {
    mixedInConst: { value: 43, enumerable: true },
    ifaceMixinConst: { value: 42, enumerable: true },
  });
  ctorRegistry[interfaceName] = MixedIn;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: MixedIn,
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
