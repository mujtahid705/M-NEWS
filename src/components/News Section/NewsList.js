import { useEffect, useState } from "react";
import classes from "./NewsList.module.css";
import NewsListRender from "./NewsListRender";

const NewsList = (props) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    setSearchData(props.searchData);
  }, [props.searchData]);

  const url = `https://newscatcher.p.rapidapi.com/v1/search_free?q=${
    searchData ? searchData : "international"
  }&lang=en&media=True`;

  const encodeURL = encodeURI(url);
  const apiGet = () => {
    fetch(encodeURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
        "x-rapidapi-key": "ed348657f5msh059e167d3311fb9p1b5d53jsn6026fbd22714",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.articles);
        setHasLoaded(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    apiGet();
  }, [searchData]);

  const clickHandler = (data) => {
    props.onClick(data);
  };

  return (
    <div className={classes.list}>
      <div className={classes["news-list"]}>
        {hasLoaded ? (
          <div>
            {apiData?.map((news) => (
              <NewsListRender
                key={news._id}
                news={news}
                onClickData={clickHandler}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NewsList;
