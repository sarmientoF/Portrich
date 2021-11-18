import React from "react";
import classes from "../../dist/css/progress.module.css";
import Accordion from "./progress/Accordion";
import {
  Content0,
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
  Content6,
} from "./progress/DetailComponent";

const detail = [
  { id: 0, place: "倉庫 - 輸出会社名", detail: <Content0 /> },
  { id: 1, place: "通関", detail: <Content1 /> },
  { id: 2, place: "出発港 - Haneda Airport/Japan", detail: <Content2 /> },
  { id: 3, place: "経由港 - Haneda Airport/Japan", detail: <Content3 /> },
  { id: 4, place: "最終港", detail: <Content4 /> },
  { id: 5, place: "国外通関", detail: <Content5 /> },
  { id: 6, place: "国外倉庫", detail: <Content6 /> },
];

const Progress = () => {
  return (
    <div className={classes.progress}>
      <div className={classes.progress_title}>進捗状況</div>
      <div className={classes.mb_30}></div>
      {detail.map((value) => (
        <Accordion place={value.place} detail={value.detail} key={value.id} />
      ))}
    </div>
  );
};

export default Progress;
