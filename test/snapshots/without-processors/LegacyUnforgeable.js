import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/LegacyUnforgeable.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "LegacyUnforgeable";

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
  throw new globalObject.TypeError(`${context} is not of type 'LegacyUnforgeable'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["LegacyUnforgeable"].prototype;
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
      assign(url) {
        const $impl = $requireImpl(this ?? globalObject, globalObject, "assign");
        if (arguments.length < 1) {
          throw new globalObject.TypeError(
            `Failed to execute 'assign' on 'LegacyUnforgeable': 1 argument required, but only ${arguments.length} present.`,
          );
        }
        const args = [];
        {
          let curArg = arguments[0];
          curArg = conversions["USVString"](curArg, {
            context: `Failed to execute 'assign' on 'LegacyUnforgeable': parameter 1`,
            globals: globalObject,
          });
          args.push(curArg);
        }
        return $impl.assign(...args);
      },
      get href() {
        const $impl = $requireImpl(this ?? globalObject, globalObject, "get href");
        return $impl["href"];
      },
      set href(V) {
        const $impl = $requireImpl(this ?? globalObject, globalObject, "set href");

        V = conversions["USVString"](V, {
          context: `Failed to set the 'href' property on 'LegacyUnforgeable': The provided value`,
          globals: globalObject,
        });

        $impl["href"] = V;
      },
      toString() {
        const $impl = $requireImpl(this, globalObject, "toString");

        return $impl["href"];
      },
      get origin() {
        const $impl = $requireImpl(this ?? globalObject, globalObject, "get origin");
        return $impl["origin"];
      },
      get protocol() {
        const $impl = $requireImpl(this ?? globalObject, globalObject, "get protocol");
        return $impl["protocol"];
      },
      set protocol(V) {
        const $impl = $requireImpl(this ?? globalObject, globalObject, "set protocol");

        V = conversions["USVString"](V, {
          context: `Failed to set the 'protocol' property on 'LegacyUnforgeable': The provided value`,
          globals: globalObject,
        });

        $impl["protocol"] = V;
      },
    });
    Object.defineProperties(unforgeables, {
      assign: { configurable: false, writable: false },
      href: { configurable: false },
      toString: { configurable: false, writable: false },
      origin: { configurable: false },
      protocol: { configurable: false },
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
  class LegacyUnforgeable {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }
  }
  Object.defineProperties(LegacyUnforgeable.prototype, {
    [Symbol.toStringTag]: { value: "LegacyUnforgeable", configurable: true },
  });
  ctorRegistry[interfaceName] = LegacyUnforgeable;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: LegacyUnforgeable,
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
