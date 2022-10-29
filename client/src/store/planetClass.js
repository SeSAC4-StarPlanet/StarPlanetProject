import { observable, action, computed, configure, makeObservable } from "mobx";

import axios from "axios";

configure({ enforceActions: true });

class Planet {
  planet = [];
  diaryCategory = [];
  albumCategory = [];

  constructor() {
    makeObservable(this, {
      planet: observable,
      diaryCategory: observable,
      albumCategory: observable,
      setPlanet: action,
      getPlanet: action,
    });
  }

  setPlanet = (planet) => {
    this.planet = [...planet];
  };
  setDiaryCategory = (diaryCategory) => {
    this.diaryCategory = [...diaryCategory];
  };
  setAlbumCategory = (albumCategory) => {
    this.albumCategory = [...albumCategory];
  };

  getPlanet = (user, planet) => {
    axios.get(`/planet/${user}/${planet}`).then((res) => {
      this.setPlanet(res.data.planet);
      this.setDiaryCategory(res.data.diary);
      this.setAlbumCategory(res.data.album);
    });
  };

  getPlanetData = () => {
    return this.planet;
  };
}

const planetStore = new Planet();
export default planetStore;
