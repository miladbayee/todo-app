import "./todo-items.css";
import { useSelector } from "react-redux";
import TodoItem from "components/TodoItem";
import selectFilterTodosSilce from "redux/slice/todoSlice";
import FilterTodo from "components/FilterTodo/FilterTodo";

const TodoItems = () => {
  const selectTodos = useSelector((state) => selectFilterTodosSilce(state));

  const renderTodos = selectTodos.map((todo) => (
    <TodoItem key={todo.id} {...todo} />
  ));
  return (
    <div>
      <div className="d-flex align-items-center mt-4">
        <h3 className='col-md-9'>Task List</h3>
        <FilterTodo />
      </div>
      <ul className="p-0 mt-3">{renderTodos}</ul>
    </div>
  );
};

export default TodoItems;
