"use strict";

class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check() {
    this.isDone = true;
  }

  unCheck() {
    this.isDone = false;
  }

  render(i) {
    var test= `<li class = "completed_${this.isDone}"> <input type='checkbox' onchange= 'changeCheckedStatus(${i}, this)'/><span>${
      this.name
    }</span> <span>${this.description}</span> <button onclick= 'removeItemButtonClicked(${i})'>X</button></li>`;
    return test
  }
}
