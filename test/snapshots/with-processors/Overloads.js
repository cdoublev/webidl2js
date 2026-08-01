import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/Overloads.js";

import URL from "./URL.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Overloads";

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
  throw new globalObject.TypeError(`${context} is not of type 'Overloads'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Overloads"].prototype;
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
  class Overloads {
    constructor() {
      const args = [];
      switch (arguments.length) {
        case 0:
          break;
        default: {
          let curArg = arguments[0];
          if (URL.is(curArg)) {
            {
              let curArg = arguments[0];
              curArg = URL.convert(globalObject, curArg, {
                context: `Failed to construct 'Overloads': parameter 1`,
              });
              args.push(curArg);
            }
          } else {
            {
              let curArg = arguments[0];
              curArg = conversions["DOMString"](curArg, {
                context: `Failed to construct 'Overloads': parameter 1`,
                globals: globalObject,
              });
              args.push(curArg);
            }
          }
        }
      }
      return setup(Object.create(new.target.prototype), globalObject, args);
    }

    compatible(arg1) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "compatible");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'compatible' on 'Overloads': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      switch (arguments.length) {
        case 1:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'compatible' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          break;
        case 2:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'compatible' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'compatible' on 'Overloads': parameter 2`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          break;
        default:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'compatible' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'compatible' on 'Overloads': parameter 2`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            if (curArg !== undefined) {
              curArg = conversions["long"](curArg, {
                context: `Failed to execute 'compatible' on 'Overloads': parameter 3`,
                globals: globalObject,
              });
            } else {
              curArg = 0;
            }
            args.push(curArg);
          }
      }
      return utils.tryWrapperForImpl($impl.compatible(...args));
    }

    incompatible1(arg1) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "incompatible1");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'incompatible1' on 'Overloads': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (typeof curArg === "number") {
          {
            let curArg = arguments[0];
            curArg = conversions["long"](curArg, {
              context: `Failed to execute 'incompatible1' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
        } else {
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'incompatible1' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
        }
      }
      return $impl.incompatible1(...args);
    }

    incompatible2(arg1) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "incompatible2");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'incompatible2' on 'Overloads': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      switch (arguments.length) {
        case 1:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'incompatible2' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          break;
        default:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'incompatible2' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'incompatible2' on 'Overloads': parameter 2`,
              globals: globalObject,
            });
            args.push(curArg);
          }
      }
      return $impl.incompatible2(...args);
    }

    incompatible3(arg1) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "incompatible3");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'incompatible3' on 'Overloads': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      switch (arguments.length) {
        case 1:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'incompatible3' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          break;
        case 2:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'incompatible3' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            if (curArg === undefined) {
              {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                  curArg = URL.convert(globalObject, curArg, {
                    context: `Failed to execute 'incompatible3' on 'Overloads': parameter 2`,
                  });
                }
                args.push(curArg);
              }
            } else if (URL.is(curArg)) {
              {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                  curArg = URL.convert(globalObject, curArg, {
                    context: `Failed to execute 'incompatible3' on 'Overloads': parameter 2`,
                  });
                }
                args.push(curArg);
              }
            } else if (utils.isArrayBuffer(curArg)) {
              {
                let curArg = arguments[1];
                if (utils.isArrayBuffer(curArg)) {
                  curArg = conversions["ArrayBuffer"](curArg, {
                    context: `Failed to execute 'incompatible3' on 'Overloads': parameter 2`,
                    globals: globalObject,
                  });
                } else if (ArrayBuffer.isView(curArg)) {
                  curArg = conversions["ArrayBufferView"](curArg, {
                    context: `Failed to execute 'incompatible3' on 'Overloads': parameter 2`,
                    globals: globalObject,
                  });
                } else {
                  throw new globalObject.TypeError(
                    `Failed to execute 'incompatible3' on 'Overloads': parameter 2 is not of any supported type.`,
                  );
                }
                args.push(curArg);
              }
            } else if (ArrayBuffer.isView(curArg)) {
              {
                let curArg = arguments[1];
                if (utils.isArrayBuffer(curArg)) {
                  curArg = conversions["ArrayBuffer"](curArg, {
                    context: `Failed to execute 'incompatible3' on 'Overloads': parameter 2`,
                    globals: globalObject,
                  });
                } else if (ArrayBuffer.isView(curArg)) {
                  curArg = conversions["ArrayBufferView"](curArg, {
                    context: `Failed to execute 'incompatible3' on 'Overloads': parameter 2`,
                    globals: globalObject,
                  });
                } else {
                  throw new globalObject.TypeError(
                    `Failed to execute 'incompatible3' on 'Overloads': parameter 2 is not of any supported type.`,
                  );
                }
                args.push(curArg);
              }
            } else {
              {
                let curArg = arguments[1];
                curArg = conversions["DOMString"](curArg, {
                  context: `Failed to execute 'incompatible3' on 'Overloads': parameter 2`,
                  globals: globalObject,
                });
                args.push(curArg);
              }
            }
          }
          break;
        case 3:
          throw new globalObject.TypeError(
            `Failed to execute 'incompatible3' on 'Overloads': only ${arguments.length} arguments present.`,
          );
          break;
        default:
          {
            let curArg = arguments[0];
            curArg = conversions["DOMString"](curArg, {
              context: `Failed to execute 'incompatible3' on 'Overloads': parameter 1`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["long"](curArg, {
              context: `Failed to execute 'incompatible3' on 'Overloads': parameter 2`,
              globals: globalObject,
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            if (utils.isArrayBuffer(curArg)) {
              curArg = conversions["ArrayBuffer"](curArg, {
                context: `Failed to execute 'incompatible3' on 'Overloads': parameter 3`,
                globals: globalObject,
              });
            } else if (ArrayBuffer.isView(curArg)) {
              curArg = conversions["ArrayBufferView"](curArg, {
                context: `Failed to execute 'incompatible3' on 'Overloads': parameter 3`,
                globals: globalObject,
              });
            } else {
              throw new globalObject.TypeError(
                `Failed to execute 'incompatible3' on 'Overloads': parameter 3 is not of any supported type.`,
              );
            }
            args.push(curArg);
          }
          {
            let curArg = arguments[3];
            if (utils.isArrayBuffer(curArg)) {
              curArg = conversions["ArrayBuffer"](curArg, {
                context: `Failed to execute 'incompatible3' on 'Overloads': parameter 4`,
                globals: globalObject,
              });
            } else if (ArrayBuffer.isView(curArg)) {
              curArg = conversions["ArrayBufferView"](curArg, {
                context: `Failed to execute 'incompatible3' on 'Overloads': parameter 4`,
                globals: globalObject,
              });
            } else {
              throw new globalObject.TypeError(
                `Failed to execute 'incompatible3' on 'Overloads': parameter 4 is not of any supported type.`,
              );
            }
            args.push(curArg);
          }
      }
      return $impl.incompatible3(...args);
    }
  }
  Object.defineProperties(Overloads.prototype, {
    compatible: { enumerable: true },
    incompatible1: { enumerable: true },
    incompatible2: { enumerable: true },
    incompatible3: { enumerable: true },
    [Symbol.toStringTag]: { value: "Overloads", configurable: true },
  });
  ctorRegistry[interfaceName] = Overloads;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Overloads,
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
