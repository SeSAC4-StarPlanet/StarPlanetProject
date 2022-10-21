import React, { useState } from "react";
import "./diaryMain.scss";
import usePagination from "./Pagination";
import Pagination from "@mui/material/Pagination";

// MOCK 데이터
import DATA from "./data.js";
// 컴포넌트
import Diary_content from "../../../components/Common/Diary/Diary_content/Diary_content";

const DiaryMain = ({}) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(DATA.length / PER_PAGE);
  const _DATA = usePagination(DATA, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  // console.log(DATA);
  return (
    <div>
      {_DATA.currentData().map((e) => {
        console.log(e);
        return <Diary_content title={e.title} />;
      })}
      <Pagination
        count={count}
        size="large"
        page={page}
        color="secondary"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default DiaryMain;
