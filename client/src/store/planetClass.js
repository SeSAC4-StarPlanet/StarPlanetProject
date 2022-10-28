import { makeAutoObservable, toJS } from "mobx";
import axios from "axios";

class Planet {
  number = 0;
  arr = [
    { name: "sion", age: 25, gender: "man" },
    { name: "yujin", age: 25, gender: "woman" }
  ];
  planet = [];

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
  setUser = newUser => {
    this.user = newUser;
  };

  getPlanetData = (user, planet) => {
    axios.get(`/planet/${user}/${planet}`).then(res => {
      console.log(res.data);
    });
    // .then(data => {
    //   this.user = data;
    //   console.log(toJS(this.user));
    // });
  };
}

const planetStore = new Planet();
export default planetStore;
