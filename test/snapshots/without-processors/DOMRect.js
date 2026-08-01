import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/DOMRect.js";

import Dictionary from "./Dictionary.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "DOMRect";

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
  throw new globalObject.TypeError(`${context} is not of type 'DOMRect'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["DOMRect"].prototype;
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
  class DOMRect {
    constructor() {
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["unrestricted double"](curArg, {
            context: `Failed to construct 'DOMRect': parameter 1`,
            globals: globalObject,
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["unrestricted double"](curArg, {
            context: `Failed to construct 'DOMRect': parameter 2`,
            globals: globalObject,
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          curArg = conversions["unrestricted double"](curArg, {
            context: `Failed to construct 'DOMRect': parameter 3`,
            globals: globalObject,
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[3];
        if (curArg !== undefined) {
          curArg = conversions["unrestricted double"](curArg, {
            context: `Failed to construct 'DOMRect': parameter 4`,
            globals: globalObject,
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      return setup(Object.create(new.target.prototype), globalObject, args);
    }

    get x() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get x");
      return $impl["x"];
    }

    set x(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set x");

      V = conversions["unrestricted double"](V, {
        context: `Failed to set the 'x' property on 'DOMRect': The provided value`,
        globals: globalObject,
      });

      $impl["x"] = V;
    }

    get y() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get y");
      return $impl["y"];
    }

    set y(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set y");

      V = conversions["unrestricted double"](V, {
        context: `Failed to set the 'y' property on 'DOMRect': The provided value`,
        globals: globalObject,
      });

      $impl["y"] = V;
    }

    get width() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get width");
      return $impl["width"];
    }

    set width(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set width");

      V = conversions["unrestricted double"](V, {
        context: `Failed to set the 'width' property on 'DOMRect': The provided value`,
        globals: globalObject,
      });

      $impl["width"] = V;
    }

    get height() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "get height");
      return $impl["height"];
    }

    set height(V) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "set height");

      V = conversions["unrestricted double"](V, {
        context: `Failed to set the 'height' property on 'DOMRect': The provided value`,
        globals: globalObject,
      });

      $impl["height"] = V;
    }

    static fromRect() {
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Dictionary.convert(globalObject, curArg, {
          context: `Failed to execute 'fromRect' on 'DOMRect': parameter 1`,
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(Impl.fromRect(globalObject, ...args));
    }
  }
  Object.defineProperties(DOMRect.prototype, {
    x: { enumerable: true },
    y: { enumerable: true },
    width: { enumerable: true },
    height: { enumerable: true },
    [Symbol.toStringTag]: { value: "DOMRect", configurable: true },
  });
  Object.defineProperties(DOMRect, { fromRect: { enumerable: true } });
  ctorRegistry[interfaceName] = DOMRect;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: DOMRect,
  });

  if (globalNames.includes("Window")) {
    Object.defineProperty(globalObject, "SVGRect", {
      configurable: true,
      writable: true,
      value: DOMRect,
    });

    Object.defineProperty(globalObject, "LegacyRect", {
      configurable: true,
      writable: true,
      value: DOMRect,
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
