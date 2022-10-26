import React from "react";
import "./main.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import Planet from "../../../../assets/img/WorkSpace/Planets/planet_2.png";

const Main = () => {
  return (
    <div className="PlanetSelector">
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
        <SwiperSlide>
          <div className="planetWrapper">
            <div id="circle-orbit-container">
              <div id="inner-orbit">
                <div class="inner-orbit-cirlces" />
              </div>
            </div>
            <div className="planet" />

            <div className="textWrapper">
              <div className="planetName">NAME</div>
              <div className="planetCreatedDate">SINCE 22.10.23</div>
            </div>
            <img className="planet" src={Planet} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="planetWrapper">
            <div id="circle-orbit-container">
              <div id="inner-orbit">
                <div class="inner-orbit-cirlces" />
              </div>
            </div>
            <div className="planet" />

            <div className="textWrapper">
              <div className="planetName">NAME</div>
              <div className="planetCreatedDate">SINCE 22.10.23</div>
            </div>
            <img className="planet" src={Planet} />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="planetWrapper">
            <div id="circle-orbit-container">
              <div id="inner-orbit">
                <div class="inner-orbit-cirlces" />
              </div>
            </div>
            <div className="planet" />

            <div className="textWrapper">
              <div className="planetName">NAME</div>
              <div className="planetCreatedDate">SINCE 22.10.23</div>
            </div>
            <img className="planet" src={Planet} />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="planetWrapper">
            <div id="circle-orbit-container">
              <div id="inner-orbit">
                <div class="inner-orbit-cirlces" />
              </div>
            </div>
            <div className="planet" />

            <div className="textWrapper">
              <div className="planetName">NAME</div>
              <div className="planetCreatedDate">SINCE 22.10.23</div>
            </div>
            <img className="planet" src={Planet} />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="planetWrapper">
            <div id="circle-orbit-container">
              <div id="inner-orbit">
                <div class="inner-orbit-cirlces" />
              </div>
            </div>
            <div className="planet" />

            <div className="textWrapper">
              <div className="planetName">NAME</div>
              <div className="planetCreatedDate">SINCE 22.10.23</div>
            </div>
            <img className="planet" src={Planet} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="planetWrapper">
            <div id="circle-orbit-container">
              <div id="inner-orbit">
                <div class="inner-orbit-cirlces" />
              </div>
            </div>
            <div className="planet" />

            <div className="textWrapper">
              <div className="planetName">NAME</div>
              <div className="planetCreatedDate">SINCE 22.10.23</div>
            </div>
            <img className="planet" src={Planet} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="planetWrapper">
            <div id="circle-orbit-container">
              <div id="inner-orbit">
                <div class="inner-orbit-cirlces" />
              </div>
            </div>
            <div className="planet" />

            <div className="textWrapper">
              <div className="planetName">NAME</div>
              <div className="planetCreatedDate">SINCE 22.10.23</div>
            </div>
            <img className="planet" src={Planet} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Main;
