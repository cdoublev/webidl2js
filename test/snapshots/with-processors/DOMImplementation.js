import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/DOMImplementation.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "DOMImplementation";

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
  throw new globalObject.TypeError(`${context} is not of type 'DOMImplementation'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["DOMImplementation"].prototype;
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
  class DOMImplementation {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    createDocumentType(qualifiedName, publicId, systemId) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "createDocumentType");
      if (arguments.length < 3) {
        throw new globalObject.TypeError(
          `Failed to execute 'createDocumentType' on 'DOMImplementation': 3 arguments required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: `Failed to execute 'createDocumentType' on 'DOMImplementation': parameter 1`,
          globals: globalObject,
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: `Failed to execute 'createDocumentType' on 'DOMImplementation': parameter 2`,
          globals: globalObject,
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = conversions["DOMString"](curArg, {
          context: `Failed to execute 'createDocumentType' on 'DOMImplementation': parameter 3`,
          globals: globalObject,
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl($impl.createDocumentType(...args));
    }

    createDocument(namespace, qualifiedName) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "createDocument");
      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'createDocument' on 'DOMImplementation': 2 arguments required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: `Failed to execute 'createDocument' on 'DOMImplementation': parameter 1`,
            globals: globalObject,
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: `Failed to execute 'createDocument' on 'DOMImplementation': parameter 2`,
          globals: globalObject,
          treatNullAsEmptyString: true,
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = null;
          } else {
            curArg = utils.tryImplForWrapper(curArg);
          }
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      return utils.tryWrapperForImpl($impl.createDocument(...args));
    }

    createHTMLDocument() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "createHTMLDocument");
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: `Failed to execute 'createHTMLDocument' on 'DOMImplementation': parameter 1`,
            globals: globalObject,
          });
        }
        args.push(curArg);
      }
      return utils.tryWrapperForImpl($impl.createHTMLDocument(...args));
    }

    hasFeature() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "hasFeature");
      return $impl.hasFeature();
    }
  }
  Object.defineProperties(DOMImplementation.prototype, {
    createDocumentType: { enumerable: true },
    createDocument: { enumerable: true },
    createHTMLDocument: { enumerable: true },
    hasFeature: { enumerable: true },
    [Symbol.toStringTag]: { value: "DOMImplementation", configurable: true },
  });
  ctorRegistry[interfaceName] = DOMImplementation;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: DOMImplementation,
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
