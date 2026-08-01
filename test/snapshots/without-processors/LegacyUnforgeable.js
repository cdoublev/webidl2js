import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/LegacyUnforgeable.js";

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "LegacyUnforgeable";

const is = value => {
  return utils.isObject(value) && Object.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl;
};
const isImpl = value => {
  return utils.isObject(value) && value instanceof Impl;
};
const convert = (globalObject, value, { context = "The provided value" } = {}) => {
  if (is(value)) {
    return utils.implForWrapper(value);
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
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!is(esValue)) {
          throw new globalObject.TypeError(
            "'assign' called on an object that is not a valid instance of LegacyUnforgeable."
          );
        }

        if (arguments.length < 1) {
          throw new globalObject.TypeError(
            `Failed to execute 'assign' on 'LegacyUnforgeable': 1 argument required, but only ${arguments.length} present.`
          );
        }
        const args = [];
        {
          let curArg = arguments[0];
          curArg = conversions["USVString"](curArg, {
            context: "Failed to execute 'assign' on 'LegacyUnforgeable': parameter 1",
            globals: globalObject
          });
          args.push(curArg);
        }
        return esValue[implSymbol].assign(...args);
      },
      get href() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!is(esValue)) {
          throw new globalObject.TypeError(
            "'get href' called on an object that is not a valid instance of LegacyUnforgeable."
          );
        }

        return esValue[implSymbol]["href"];
      },
      set href(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!is(esValue)) {
          throw new globalObject.TypeError(
            "'set href' called on an object that is not a valid instance of LegacyUnforgeable."
          );
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'href' property on 'LegacyUnforgeable': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["href"] = V;
      },
      toString() {
        const esValue = this;
        if (!is(esValue)) {
          throw new globalObject.TypeError(
            "'toString' called on an object that is not a valid instance of LegacyUnforgeable."
          );
        }

        return esValue[implSymbol]["href"];
      },
      get origin() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!is(esValue)) {
          throw new globalObject.TypeError(
            "'get origin' called on an object that is not a valid instance of LegacyUnforgeable."
          );
        }

        return esValue[implSymbol]["origin"];
      },
      get protocol() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!is(esValue)) {
          throw new globalObject.TypeError(
            "'get protocol' called on an object that is not a valid instance of LegacyUnforgeable."
          );
        }

        return esValue[implSymbol]["protocol"];
      },
      set protocol(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!is(esValue)) {
          throw new globalObject.TypeError(
            "'set protocol' called on an object that is not a valid instance of LegacyUnforgeable."
          );
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'protocol' property on 'LegacyUnforgeable': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["protocol"] = V;
      }
    });
    Object.defineProperties(unforgeables, {
      assign: { configurable: false, writable: false },
      href: { configurable: false },
      toString: { configurable: false, writable: false },
      origin: { configurable: false },
      protocol: { configurable: false }
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
  Object.defineProperty(wrapper, implSymbol, {
    value: new Impl(globalObject, constructorArgs, privateData),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper;
};

const createNew = (globalObject, newTarget) => {
  const wrapper = makeWrapper(globalObject, newTarget);

  _internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: Object.create(Impl.prototype),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper[implSymbol];
};

const unforgeablesMap = new WeakMap();
const exposed = new Set(["Window"]);

const install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class LegacyUnforgeable {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }
  }
  Object.defineProperties(LegacyUnforgeable.prototype, {
    [Symbol.toStringTag]: { value: "LegacyUnforgeable", configurable: true }
  });
  ctorRegistry[interfaceName] = LegacyUnforgeable;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: LegacyUnforgeable
  });
};

export default {
  _internalSetup,
  convert,
  create,
  new: createNew,
  createImpl,
  install,
  is,
  isImpl,
  setup
};
