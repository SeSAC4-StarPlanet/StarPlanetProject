import { makeAutoObservable } from "mobx";

class Count {
  number = 0;
  arr = [
    { name: "sion", age: 25, gender: "man" },
    { name: "yujin", age: 25, gender: "woman" },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
}

const countStore = new Count();
export default countStore;
