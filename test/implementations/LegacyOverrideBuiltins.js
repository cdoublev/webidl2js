
import * as utils from "../output/utils.js";

export default class LegacyOverrideBuiltinsImpl {
  constructor(globalObject, constructorArgs, { entries = {} }) {
    this._entries = entries;
  }

  [utils.supportsPropertyName](name) {
    return Object.hasOwn(this._entries, name);
  }

  [utils.namedGet](name) {
    return this._entries[name];
  }
};
