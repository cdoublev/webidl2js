import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/Reflect.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Reflect";

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
  throw new globalObject.TypeError(`${context} is not of type 'Reflect'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Reflect"].prototype;
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
  class Reflect {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    get reflectedBoolean() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get reflectedBoolean");
      return $impl["reflectedBoolean"];
    }

    set reflectedBoolean(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set reflectedBoolean");

      V = conversions["boolean"](V, {
        context: `Failed to set the 'reflectedBoolean' property on 'Reflect': The provided value`,
        globals: globalObject,
      });

      $impl["reflectedBoolean"] = V;
    }

    get reflectedDOMString() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get reflectedDOMString");
      return $impl["reflectedDOMString"];
    }

    set reflectedDOMString(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set reflectedDOMString");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'reflectedDOMString' property on 'Reflect': The provided value`,
        globals: globalObject,
      });

      $impl["reflectedDOMString"] = V;
    }

    get reflectedLong() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get reflectedLong");
      return $impl["reflectedLong"];
    }

    set reflectedLong(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set reflectedLong");

      V = conversions["long"](V, {
        context: `Failed to set the 'reflectedLong' property on 'Reflect': The provided value`,
        globals: globalObject,
      });

      $impl["reflectedLong"] = V;
    }

    get reflectedUnsignedLong() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get reflectedUnsignedLong");
      return $impl["reflectedUnsignedLong"];
    }

    set reflectedUnsignedLong(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set reflectedUnsignedLong");

      V = conversions["unsigned long"](V, {
        context: `Failed to set the 'reflectedUnsignedLong' property on 'Reflect': The provided value`,
        globals: globalObject,
      });

      $impl["reflectedUnsignedLong"] = V;
    }

    get reflectedUSVStringURL() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get reflectedUSVStringURL");
      return $impl["reflectedUSVStringURL"];
    }

    set reflectedUSVStringURL(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set reflectedUSVStringURL");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'reflectedUSVStringURL' property on 'Reflect': The provided value`,
        globals: globalObject,
      });

      $impl["reflectedUSVStringURL"] = V;
    }

    get reflectionTest() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get reflectionTest");
      return $impl["reflectionTest"];
    }

    set reflectionTest(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set reflectionTest");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'reflectionTest' property on 'Reflect': The provided value`,
        globals: globalObject,
      });

      $impl["reflectionTest"] = V;
    }

    get withUnderscore() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get withUnderscore");
      return $impl["withUnderscore"];
    }

    set withUnderscore(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set withUnderscore");

      V = conversions["DOMString"](V, {
        context: `Failed to set the 'withUnderscore' property on 'Reflect': The provided value`,
        globals: globalObject,
      });

      $impl["withUnderscore"] = V;
    }
  }
  Object.defineProperties(Reflect.prototype, {
    reflectedBoolean: { enumerable: true },
    reflectedDOMString: { enumerable: true },
    reflectedLong: { enumerable: true },
    reflectedUnsignedLong: { enumerable: true },
    reflectedUSVStringURL: { enumerable: true },
    reflectionTest: { enumerable: true },
    withUnderscore: { enumerable: true },
    [Symbol.toStringTag]: { value: "Reflect", configurable: true },
  });
  ctorRegistry[interfaceName] = Reflect;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Reflect,
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
