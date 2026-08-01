import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/URL.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "URL";

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
  throw new globalObject.TypeError(`${context} is not of type 'URL'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["URL"].prototype;
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
  class URL {
    constructor(url) {
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to construct 'URL': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, {
          context: `Failed to construct 'URL': parameter 1`,
          globals: globalObject,
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["USVString"](curArg, {
            context: `Failed to construct 'URL': parameter 2`,
            globals: globalObject,
          });
        }
        args.push(curArg);
      }
      return setup(Object.create(new.target.prototype), globalObject, args);
    }

    toJSON() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "toJSON");
      return $impl.toJSON();
    }

    get href() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get href");
      return $impl["href"];
    }

    set href(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set href");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'href' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["href"] = V;
    }

    toString() {
      const $impl = $requireImpl(this, globalObject, "toString");

      return $impl["href"];
    }

    get origin() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get origin");
      return $impl["origin"];
    }

    get protocol() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get protocol");
      return $impl["protocol"];
    }

    set protocol(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set protocol");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'protocol' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["protocol"] = V;
    }

    get username() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get username");
      return $impl["username"];
    }

    set username(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set username");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'username' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["username"] = V;
    }

    get password() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get password");
      return $impl["password"];
    }

    set password(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set password");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'password' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["password"] = V;
    }

    get host() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get host");
      return $impl["host"];
    }

    set host(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set host");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'host' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["host"] = V;
    }

    get hostname() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get hostname");
      return $impl["hostname"];
    }

    set hostname(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set hostname");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'hostname' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["hostname"] = V;
    }

    get port() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get port");
      return $impl["port"];
    }

    set port(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set port");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'port' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["port"] = V;
    }

    get pathname() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get pathname");
      return $impl["pathname"];
    }

    set pathname(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set pathname");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'pathname' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["pathname"] = V;
    }

    get search() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get search");
      return $impl["search"];
    }

    set search(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set search");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'search' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["search"] = V;
    }

    get searchParams() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get searchParams");
      return utils.getSameObject(this, "searchParams", () => {
        return utils.tryWrapperForImpl($impl["searchParams"]);
      });
    }

    get hash() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get hash");
      return $impl["hash"];
    }

    set hash(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set hash");

      V = conversions["USVString"](V, {
        context: `Failed to set the 'hash' property on 'URL': The provided value`,
        globals: globalObject,
      });

      $impl["hash"] = V;
    }
  }
  Object.defineProperties(URL.prototype, {
    toJSON: { enumerable: true },
    href: { enumerable: true },
    toString: { enumerable: true },
    origin: { enumerable: true },
    protocol: { enumerable: true },
    username: { enumerable: true },
    password: { enumerable: true },
    host: { enumerable: true },
    hostname: { enumerable: true },
    port: { enumerable: true },
    pathname: { enumerable: true },
    search: { enumerable: true },
    searchParams: { enumerable: true },
    hash: { enumerable: true },
    [Symbol.toStringTag]: { value: "URL", configurable: true },
  });
  ctorRegistry[interfaceName] = URL;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: URL,
  });

  if (globalNames.includes("Window")) {
    Object.defineProperty(globalObject, "webkitURL", {
      configurable: true,
      writable: true,
      value: URL,
    });
  }
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
