import { useDispatch, useSelector } from "react-redux";
import statusFilterAction from "redux/actions/filterAction";

const FilterTodo = () => {
  const status = useSelector((state) => state.filters.status);
  const dispatch = useDispatch();

  const handleChangeStatus = ({ target }) => {
    dispatch(statusFilterAction(target.value));
  };
  return (
    <div className="col col-md-4">
      <div className="d-flex justify-content-end">
        <label htmlFor="filter" className="col-form-label fw-bold">
          Filter Task
        </label>
        <div className="ms-3">
          <select
            defaultValue={status}
            className="form-select"
            name="filter"
            id="filter"
            onChange={handleChangeStatus}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterTodo;
