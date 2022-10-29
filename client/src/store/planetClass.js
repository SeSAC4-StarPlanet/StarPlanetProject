import { observable, action, computed, configure, makeObservable } from "mobx";

import axios from "axios";

configure({ enforceActions: true });

class Planet {
  planets = [];
  diaryCategory = [];
  albumCategory = [];

  constructor() {
    makeObservable(this, {
      planets: observable,
      diaryCategory: observable,
      albumCategory: observable,
      setPlanet: action,
      getPlanet: action,
    });
  }

  setPlanet = (planets) => {
    this.planets = [...planets];
  };
  setDiaryCategory = (diaryCategory) => {
    this.diaryCategory = [...diaryCategory];
  };
  setAlbumCategory = (albumCategory) => {
    this.albumCategory = [...albumCategory];
  };

  getPlanets = async (user) => {
    await axios.get(`/planet/workspace/${user}`).then((res) => {
      this.setPlanet(res.data.planets);
    });
  };

  getPlanet = async (user, planet) => {
    await axios.get(`/planet/${user}/${planet}`).then((res) => {
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
