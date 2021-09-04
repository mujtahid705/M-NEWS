import React from "react";
import classes from "./NewsListRender.module.css";

const NewsListRender = (props) => {
  const clickHandler = () => {
    props.onClickData(props.news);
  };
  return (
    <div className={classes.card} onClick={clickHandler}>
      <h3>{props.news.title}</h3>
      <p>{props.news.author === null ? "" : `Author: ${props.news.author}`}</p>
      <p>
        {props.news.country === null || props.news.country === "NA"
          ? ""
          : `Country: ${props.news.country}`}
      </p>
      <p>{props.news.topic === "NA" ? "" : `Topic: ${props.news.topic}`}</p>
    </div>
  );
};

export default NewsListRender;
