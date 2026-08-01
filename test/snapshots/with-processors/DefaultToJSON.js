import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/DefaultToJSON.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "DefaultToJSON";

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
  throw new globalObject.TypeError(`${context} is not of type 'DefaultToJSON'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["DefaultToJSON"].prototype;
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

const exposed = new Set(["Window", "Worker"]);

const install = (globalObject, globalNames) => {
  if (!globalNames.some((globalName) => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class DefaultToJSON {
    constructor() {
      return setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    toJSON() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "toJSON");
      return utils.newObjectInRealm(globalObject, {
        x: utils.tryWrapperForImpl($impl["x"]),
        enabled: $impl["enabled"],
        label: (() => {
          const value = $impl.getAttributeNS(null, "label");
          return value === null ? "" : value;
        })(),
        payload: $impl["payload"],
        nested: utils.tryWrapperForImpl($impl["nested"]),
        choice: utils.tryWrapperForImpl($impl["choice"]),
        names: utils.tryWrapperForImpl($impl["names"]),
        ...(globalNames.includes("Worker") ? { workerOnly: $impl["workerOnly"] } : {}),
      });
    }

    get x() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get x");
      return utils.tryWrapperForImpl($impl["x"]);
    }

    set x(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set x");

      V = conversions["unrestricted double"](V, {
        context: `Failed to set the 'x' property on 'DefaultToJSON': The provided value`,
        globals: globalObject,
      });

      $impl["x"] = V;
    }

    get enabled() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get enabled");
      return $impl["enabled"];
    }

    get label() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get label");

      const value = $impl.getAttributeNS(null, "label");
      return value === null ? "" : value;
    }

    get payload() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get payload");
      return $impl["payload"];
    }

    get nested() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get nested");
      return utils.tryWrapperForImpl($impl["nested"]);
    }

    get choice() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get choice");
      return utils.tryWrapperForImpl($impl["choice"]);
    }

    get names() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get names");
      return utils.tryWrapperForImpl($impl["names"]);
    }

    get ignored() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get ignored");
      return $impl["ignored"];
    }

    get promise() {
      try {
        const $impl = $requireImpl(this ?? globalObject, globalObject, "get promise");
        return utils.tryWrapperForImpl($impl["promise"]);
      } catch (e) {
        return globalObject.Promise.reject(e);
      }
    }

    get handler() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get handler");
      return utils.tryWrapperForImpl($impl["handler"]);
    }

    get nonJSONUnion() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get nonJSONUnion");
      return utils.tryWrapperForImpl($impl["nonJSONUnion"]);
    }

    get workerOnly() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get workerOnly");
      return $impl["workerOnly"];
    }

    static get staticValue() {
      return Impl["staticValue"];
    }
  }
  Object.defineProperties(DefaultToJSON.prototype, {
    toJSON: { enumerable: true },
    x: { enumerable: true },
    enabled: { enumerable: true },
    label: { enumerable: true },
    payload: { enumerable: true },
    nested: { enumerable: true },
    choice: { enumerable: true },
    names: { enumerable: true },
    ignored: { enumerable: true },
    promise: { enumerable: true },
    handler: { enumerable: true },
    nonJSONUnion: { enumerable: true },
    workerOnly: { enumerable: true },
    [Symbol.toStringTag]: { value: "DefaultToJSON", configurable: true },
    CONSTANT: { value: 1, enumerable: true },
  });
  Object.defineProperties(DefaultToJSON, {
    staticValue: { enumerable: true },
    CONSTANT: { value: 1, enumerable: true },
  });
  ctorRegistry[interfaceName] = DefaultToJSON;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: DefaultToJSON,
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
