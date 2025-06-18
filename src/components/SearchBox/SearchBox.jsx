import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ filterValue, handleFilter }) => {
  const id = useId();
  const handleChange = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.input}
        id={id}
        value={filterValue}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
