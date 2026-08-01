import conversions from "webidl-conversions";
import * as utils from "./utils.js";
import Impl from "../implementations/SeqAndRec.js";

import URL from "./URL.js";

const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "SeqAndRec";

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
  throw new globalObject.TypeError(`${context} is not of type 'SeqAndRec'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["SeqAndRec"].prototype;
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
  class SeqAndRec {
    constructor() {
      return setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    recordConsumer(rec) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "recordConsumer");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'recordConsumer' on 'SeqAndRec': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (!utils.isObject(curArg)) {
          throw new globalObject.TypeError(
            `Failed to execute 'recordConsumer' on 'SeqAndRec': parameter 1 is not an object.`,
          );
        } else {
          const result = Object.create(null);
          for (const key of Reflect.ownKeys(curArg)) {
            const desc = Object.getOwnPropertyDescriptor(curArg, key);
            if (desc && desc.enumerable) {
              let typedKey = key;

              typedKey = conversions["USVString"](typedKey, {
                context: `Failed to execute 'recordConsumer' on 'SeqAndRec': parameter 1's key`,
                globals: globalObject,
              });

              let typedValue = curArg[key];

              typedValue = conversions["double"](typedValue, {
                context: `Failed to execute 'recordConsumer' on 'SeqAndRec': parameter 1's value`,
                globals: globalObject,
              });

              result[typedKey] = typedValue;
            }
          }
          curArg = result;
        }
        args.push(curArg);
      }
      return $impl.recordConsumer(...args);
    }

    recordConsumer2(rec) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "recordConsumer2");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'recordConsumer2' on 'SeqAndRec': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (!utils.isObject(curArg)) {
          throw new globalObject.TypeError(
            `Failed to execute 'recordConsumer2' on 'SeqAndRec': parameter 1 is not an object.`,
          );
        } else {
          const result = Object.create(null);
          for (const key of Reflect.ownKeys(curArg)) {
            const desc = Object.getOwnPropertyDescriptor(curArg, key);
            if (desc && desc.enumerable) {
              let typedKey = key;

              typedKey = conversions["USVString"](typedKey, {
                context: `Failed to execute 'recordConsumer2' on 'SeqAndRec': parameter 1's key`,
                globals: globalObject,
              });

              let typedValue = curArg[key];

              typedValue = URL.convert(globalObject, typedValue, {
                context: `Failed to execute 'recordConsumer2' on 'SeqAndRec': parameter 1's value`,
              });

              result[typedKey] = typedValue;
            }
          }
          curArg = result;
        }
        args.push(curArg);
      }
      return $impl.recordConsumer2(...args);
    }

    sequenceConsumer(seq) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "sequenceConsumer");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'sequenceConsumer' on 'SeqAndRec': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (!utils.isObject(curArg)) {
          throw new globalObject.TypeError(
            `Failed to execute 'sequenceConsumer' on 'SeqAndRec': parameter 1 is not an iterable object.`,
          );
        } else {
          const V = [];
          const tmp = curArg;
          for (let nextItem of tmp) {
            nextItem = conversions["USVString"](nextItem, {
              context: `Failed to execute 'sequenceConsumer' on 'SeqAndRec': parameter 1's element`,
              globals: globalObject,
            });

            V.push(nextItem);
          }
          curArg = V;
        }
        args.push(curArg);
      }
      return $impl.sequenceConsumer(...args);
    }

    sequenceConsumer2(seq) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "sequenceConsumer2");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'sequenceConsumer2' on 'SeqAndRec': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (!utils.isObject(curArg)) {
          throw new globalObject.TypeError(
            `Failed to execute 'sequenceConsumer2' on 'SeqAndRec': parameter 1 is not an iterable object.`,
          );
        } else {
          const V = [];
          const tmp = curArg;
          for (let nextItem of tmp) {
            nextItem = utils.tryImplForWrapper(nextItem);

            V.push(nextItem);
          }
          curArg = V;
        }
        args.push(curArg);
      }
      return $impl.sequenceConsumer2(...args);
    }

    asyncSequenceConsumer(async_seq) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "asyncSequenceConsumer");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'asyncSequenceConsumer' on 'SeqAndRec': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = utils.convertAsyncSequence(
          curArg,
          function (item) {
            item = conversions["USVString"](item, {
              context: `Failed to execute 'asyncSequenceConsumer' on 'SeqAndRec': parameter 1's element`,
              globals: globalObject,
            });
            return item;
          },
          `Failed to execute 'asyncSequenceConsumer' on 'SeqAndRec': parameter 1`,
        );
        args.push(curArg);
      }
      return $impl.asyncSequenceConsumer(...args);
    }

    asyncSequenceConsumer2(async_seq) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "asyncSequenceConsumer2");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'asyncSequenceConsumer2' on 'SeqAndRec': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = utils.convertAsyncSequence(
          curArg,
          function (item) {
            item = utils.tryImplForWrapper(item);
            return item;
          },
          `Failed to execute 'asyncSequenceConsumer2' on 'SeqAndRec': parameter 1`,
        );
        args.push(curArg);
      }
      return $impl.asyncSequenceConsumer2(...args);
    }

    frozenArrayConsumer(arr) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "frozenArrayConsumer");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'frozenArrayConsumer' on 'SeqAndRec': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (!utils.isObject(curArg)) {
          throw new globalObject.TypeError(
            `Failed to execute 'frozenArrayConsumer' on 'SeqAndRec': parameter 1 is not an iterable object.`,
          );
        } else {
          const V = [];
          const tmp = curArg;
          for (let nextItem of tmp) {
            nextItem = conversions["double"](nextItem, {
              context: `Failed to execute 'frozenArrayConsumer' on 'SeqAndRec': parameter 1's element`,
              globals: globalObject,
            });

            V.push(nextItem);
          }
          curArg = V;
        }
        curArg = Object.freeze(curArg);
        args.push(curArg);
      }
      return $impl.frozenArrayConsumer(...args);
    }

    defaultSequenceConsumer() {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "defaultSequenceConsumer");
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          if (!utils.isObject(curArg)) {
            throw new globalObject.TypeError(
              `Failed to execute 'defaultSequenceConsumer' on 'SeqAndRec': parameter 1 is not an iterable object.`,
            );
          } else {
            const V = [];
            const tmp = curArg;
            for (let nextItem of tmp) {
              nextItem = conversions["DOMString"](nextItem, {
                context: `Failed to execute 'defaultSequenceConsumer' on 'SeqAndRec': parameter 1's element`,
                globals: globalObject,
              });

              V.push(nextItem);
            }
            curArg = V;
          }
        } else {
          curArg = [];
        }
        args.push(curArg);
      }
      return $impl.defaultSequenceConsumer(...args);
    }

    asyncSequencePassthrough(async_seq) {
      const $impl = $requireImpl(this ?? globalObject, globalObject, "asyncSequencePassthrough");
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'asyncSequencePassthrough' on 'SeqAndRec': 1 argument required, but only ${arguments.length} present.`,
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = utils.convertAsyncSequence(
          curArg,
          function (item) {
            item = conversions["double"](item, {
              context: `Failed to execute 'asyncSequencePassthrough' on 'SeqAndRec': parameter 1's element`,
              globals: globalObject,
            });
            return item;
          },
          `Failed to execute 'asyncSequencePassthrough' on 'SeqAndRec': parameter 1`,
        );
        args.push(curArg);
      }
      return utils.tryWrapperForImpl($impl.asyncSequencePassthrough(...args));
    }
  }
  Object.defineProperties(SeqAndRec.prototype, {
    recordConsumer: { enumerable: true },
    recordConsumer2: { enumerable: true },
    sequenceConsumer: { enumerable: true },
    sequenceConsumer2: { enumerable: true },
    asyncSequenceConsumer: { enumerable: true },
    asyncSequenceConsumer2: { enumerable: true },
    frozenArrayConsumer: { enumerable: true },
    defaultSequenceConsumer: { enumerable: true },
    asyncSequencePassthrough: { enumerable: true },
    [Symbol.toStringTag]: { value: "SeqAndRec", configurable: true },
  });
  ctorRegistry[interfaceName] = SeqAndRec;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: SeqAndRec,
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
