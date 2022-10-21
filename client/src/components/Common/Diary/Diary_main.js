import React, { useState } from "react";
import "./Diary_main.scss";
import Diary_content from "../../Common/Diary/Diary_content/Diary_content";
import Planet_name from "../../Common/Diary/Planet_name/Planet_name";
import Category from "./Category/Category";
import MemberBox from "./MemberBox/MemberBox";
import Selector from "./Selector/Selector";
import IconButton from "@mui/material/IconButton";
import { FaPen } from "react-icons/fa";

import usePagination from "./Pagination";
import Pagination from "@mui/material/Pagination";

// MOCK 데이터
import DATA from "./data.js";

const Diary_main = ({ planetTitle }) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(DATA.length / PER_PAGE);
  const _DATA = usePagination(DATA, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div className="mainBackWrapper">
      <div className="Main_wrapper">
        <div className="mainArrow" />
        <div className="Main_container_top">
          <div className="Planet_name_box">
            <Planet_name title={planetTitle} />
          </div>
          <div className="Modify_title_box">
            <Planet_name title={"2022"} />
            <IconButton>
              <FaPen />
            </IconButton>
          </div>
        </div>
        <div className="Main_container">
          <div className="Categorybar_box">
            <div>
              <Category />
            </div>
            <div>
              <MemberBox />
            </div>
          </div>
          <div className="Main_box">
            <div className="Diary_selector_box">
              <Selector />
            </div>
            <div className="Diary_main_box">
              {_DATA.currentData().map((e) => {
                console.log(e);
                return <Diary_content title={e.title} />;
              })}
              <div className="dairyPaginationWrapper">
                <Pagination
                  count={count}
                  size="large"
                  page={page}
                  color="secondary"
                  shape="rounded"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diary_main;
