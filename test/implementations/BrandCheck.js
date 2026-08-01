
import * as utils from "../output/utils.js";

export default class BrandCheckImpl {
  static init(impl) {
    impl.wrapperSeenDuringInit = utils.wrapperForImpl(impl);
  }

  constructor() {
    this.value = "initial";
  }

  parentMethod() {
    return `parent:${this.value}`;
  }

  childMethod() {
    return `child:${this.value}`;
  }

  shadow(value) {
    return `shadow:${value}`;
  }

  objectUnion(value) {
    this.lastObjectUnionValue = value;
  }
};
