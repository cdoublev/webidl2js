
import * as utils from "../output/utils.js";

export default class URLListImpl {
  static init(impl) {
    impl.wrapperSeenDuringInit = utils.wrapperForImpl(impl);
  }

  constructor(globalObject, constructorArgs, { values = [] }) {
    this._values = values;
  }

  get length() {
    return this._values.length;
  }

  [utils.supportsPropertyIndex](index) {
    return index < this.length;
  }

  item(index) {
    return this._values[index];
  }
};
