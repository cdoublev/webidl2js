import conversions from "webidl-conversions";
import * as utils from "./utils.js";

import Function from "./Function.js";
import URLCallback from "./URLCallback.js";
import URLHandlerNonNull from "./URLHandlerNonNull.js";
import VoidFunction from "./VoidFunction.js";

export const _convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  {
    const key = "function";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = Function.convert(globalObject, value, { context: context + " has member 'function' that" });

      ret[key] = value;
    }
  }

  {
    const key = "urlCallback";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = URLCallback.convert(globalObject, value, { context: context + " has member 'urlCallback' that" });

      ret[key] = value;
    }
  }

  {
    const key = "urlHandler";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (!utils.isObject(value)) {
        value = null;
      } else {
        value = URLHandlerNonNull.convert(globalObject, value, { context: context + " has member 'urlHandler' that" });
      }
      ret[key] = value;
    }
  }

  {
    const key = "urlHandlerNonNull";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = URLHandlerNonNull.convert(globalObject, value, {
        context: context + " has member 'urlHandlerNonNull' that"
      });

      ret[key] = value;
    }
  }

  {
    const key = "voidFunction";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = VoidFunction.convert(globalObject, value, { context: context + " has member 'voidFunction' that" });

      ret[key] = value;
    }
  }
};

export const convert = (globalObject, obj, { context = "The provided value" } = {}) => {
  if (obj !== undefined && typeof obj !== "object" && typeof obj !== "function") {
    throw new globalObject.TypeError(`${context} is not an object.`);
  }

  const ret = Object.create(null);
  _convertInherit(globalObject, obj, ret, { context });
  return ret;
};

export default { _convertInherit, convert };
