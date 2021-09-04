import classes from "./News.module.css";

const News = (props) => {
  return (
    <div className={classes.news}>
      <div>
        <div className={classes["img-div"]}>
          <img src={props.data.media} />
        </div>
        <h1>{props.data.title}</h1>
        <h3>{props.data.author}</h3>
        <p>{props.data.summary}</p>
        <p>{props.data.rights === "NULL" ? "" : props.data.rights}</p>
        <p>
          {props.data.link ? `News Link:` : ""}{" "}
          {props.data.link ? <a href={props.data.link}>Click Here!</a> : ""}
        </p>
      </div>
    </div>
  );
};

export default News;
