import { useState } from "react";
import classes from "./App.module.css";
import Nav from "./components/Nav/Nav";
import News from "./components/News Section/News";
import NewsList from "./components/News Section/NewsList";
import InputSection from "./components/Search/InputSection";
import Card from "./components/UI/Card";

function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const setDataHandler = (data) => {
    setData(data);
  };

  const searchDataHandler = (data) => {
    setSearchData(data);
  };

  return (
    <div className="App">
      <Nav />
      <InputSection onSearch={searchDataHandler} />
      <div className={classes.card}>
        <Card>
          <div className={classes["news-section"]}>
            <NewsList searchData={searchData} onClick={setDataHandler} />
            <News data={data} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
