import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/DefaultToJSONChild.js";

import DefaultToJSONMiddle from "./DefaultToJSONMiddle.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "DefaultToJSONChild";

const $interfaceDescriptor = utils.createInterfaceDescriptor(
  () => DefaultToJSONMiddle.interfaceDescriptor,
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
  throw new globalObject.TypeError(`${context} is not of type 'DefaultToJSONChild'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["DefaultToJSONChild"].prototype;
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
  DefaultToJSONMiddle._internalSetup(wrapper, globalObject);
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

const exposed = new Set(["Window", "Worker"]);

const install = (globalObject, globalNames) => {
  if (!globalNames.some((globalName) => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class DefaultToJSONChild extends globalObject.DefaultToJSONMiddle {
    constructor() {
      return setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    toJSON() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "toJSON");
      return utils.newObjectInRealm(globalObject, {
        x: utils.tryWrapperForImpl($impl["x"]),
        enabled: $impl["enabled"],
        label: $impl["label"],
        payload: $impl["payload"],
        nested: utils.tryWrapperForImpl($impl["nested"]),
        choice: utils.tryWrapperForImpl($impl["choice"]),
        names: utils.tryWrapperForImpl($impl["names"]),
        ...(globalNames.includes("Worker") ? { workerOnly: $impl["workerOnly"] } : {}),
        x: utils.tryWrapperForImpl($impl["x"]),
        child: $impl["child"],
        partialValue: $impl["partialValue"],
        mixedIn: $impl["mixedIn"],
      });
    }

    get x() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get x");
      return utils.tryWrapperForImpl($impl["x"]);
    }

    set x(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set x");

      V = conversions["unrestricted double"](V, {
        context: `Failed to set the 'x' property on 'DefaultToJSONChild': The provided value`,
        globals: globalObject,
      });

      $impl["x"] = V;
    }

    get child() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get child");
      return $impl["child"];
    }

    get partialValue() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get partialValue");
      return $impl["partialValue"];
    }

    get mixedIn() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get mixedIn");
      return $impl["mixedIn"];
    }
  }
  Object.defineProperties(DefaultToJSONChild.prototype, {
    toJSON: { enumerable: true },
    x: { enumerable: true },
    child: { enumerable: true },
    partialValue: { enumerable: true },
    mixedIn: { enumerable: true },
    [Symbol.toStringTag]: { value: "DefaultToJSONChild", configurable: true },
  });
  ctorRegistry[interfaceName] = DefaultToJSONChild;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: DefaultToJSONChild,
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
