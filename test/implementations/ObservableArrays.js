
import * as utils from "../output/utils.js";

export default class ObservableArraysImpl {
  constructor() {
    this.names = [];
    this.readonlyNames = [];
    this.employees = [];
    this.callbacks = [];
    this.groups = [];
    this.numbers = [];
    this.events = [];
  }

  [utils.observableArraySet("names")](value, index) {
    this.events.push(["set", value, index, [...this.names]]);
    this.onSet?.(value, index);
  }

  [utils.observableArrayDelete("names")](value, index) {
    this.events.push(["delete", value, index, [...this.names]]);
    this.onDelete?.(value, index);
  }

  [utils.observableArraySet("employees")](value, index) {
    this.events.push(["employee set", value, index]);
  }

  [utils.observableArrayDelete("employees")](value, index) {
    this.events.push(["employee delete", value, index]);
  }
};
