import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <input
      className={css.input}
      value={value}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Find contacts by name"
    />
  );
}
