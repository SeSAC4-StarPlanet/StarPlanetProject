import React from "react";

// fullpage library 설치
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import $ from "jquery";
// scss import
import "./landingPage.scss";

// first, second page
import FirstPage from "../../components/LandingPage/FirstPage/FirstPage";
import SecondPage from "../../components/LandingPage/SecondPage/SecondPage";

export const LandingPage = () => {
  $(() => {
    // 여기서 에러 발생할 수 있음. 해결방법 하단에 적어놨음.
    $("#fullpage").fullpage({
      scrollOverflow: true,
      navigation: true,
      scrollHorizontally: true,
      showActiveTooltip: true,
      scrollingSpeed: 800,
      fitToSection: true,
      fitToSectionDelay: 1200,
      // 화면별 전환
      afterLoad: function(index, anchorLink) {
        if (anchorLink === 1) {
          // 화면별 넣고 싶은 이벤트
        } else if (anchorLink === 2) {
          // 화면별 넣고 싶은 이벤트
        } else if (anchorLink === 3) {
          // 화면별 넣고 싶은 이벤트
        }
      }
    });
  });

  return (
    <div id="fullpage">
      <div className="section">
        <FirstPage />
      </div>
      <div className="section">
        <SecondPage />
      </div>
    </div>
  );
};
