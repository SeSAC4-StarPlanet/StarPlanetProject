import React, { useState, useEffect } from "react";
import "./main.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
// 컴포넌트
import Planet from "../../../../assets/img/WorkSpace/Planets/planet_2.png";
import NewPlanetBtn from "../NewPlanetBtn/NewPlanetBtn";
// 라우팅
import { Link } from "react-router-dom";
// 스토어
import store from "../../../../store/index";
import { observer } from "mobx-react";
import { toJS } from "mobx";

const Main = observer(() => {
  const { planetClass } = store;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await planetClass.getPlanets("test");
      let arr = planetClass.planets;
      setData(toJS(arr));
    }
    fetchAndSetUser();
  }, []);

  return (
    <div className="PlanetSelector">
      <Link to={"/workspace/create"}>
        <NewPlanetBtn />
      </Link>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: false
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.length != 0
          ? data.map(e => {
              let date = new Date(e.createdAt);
              return (
                <SwiperSlide>
                  <div className="planetWrapper">
                    <div id="circle-orbit-container">
                      <div id="inner-orbit">
                        <div className="inner-orbit-cirlces" />
                      </div>
                    </div>
                    <div className="planet" />
                    <div className="textWrapper">
                      <div className="planetName">
                        {e.name}
                      </div>
                      <div className="planetCreatedDate">
                        {`${date.getFullYear()}-${date.getMonth()}-${date.getDate() +
                          1} ~`}
                      </div>
                    </div>
                    <img className="planet" src={Planet} />
                  </div>
                </SwiperSlide>
              );
            })
          : <SwiperSlide>
              <div className="planetWrapper">
                <div id="circle-orbit-container">
                  <div id="inner-orbit">
                    <div className="inner-orbit-cirlces" />
                  </div>
                </div>
                <div className="planet" />
                <div className="textWrapper">
                  <div className="planetName" />
                  <div className="planetCreatedDate">행성이 없습니다. 생성해주세요</div>
                </div>
                <img className="planet" src={Planet} />
              </div>
            </SwiperSlide>}
      </Swiper>
    </div>
  );
});

export default Main;
