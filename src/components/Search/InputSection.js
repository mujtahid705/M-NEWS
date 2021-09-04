import Card from "../UI/Card";
import Search from "./Search";
import classes from "./InputSection.module.css";

const InputSection = (props) => {
  const onSearchHandler = (data) => {
    props.onSearch(data);
  };
  return (
    <div className={classes.card}>
      <Card>
        <Search onSearch={onSearchHandler} />
      </Card>
    </div>
  );
};

export default InputSection;
