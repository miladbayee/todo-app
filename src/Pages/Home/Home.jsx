import { useSelector } from "react-redux";
import InputText from "components/InputText";
import TodoItem from "components/TodoItem";
import TodoItems from "components/TodoItems";

import selectFilterTodosSilce from "redux/slice/todoSlice";

const Home = () => {
  const selectTodos = useSelector((state) => selectFilterTodosSilce(state));
  const renderTodos = selectTodos.map((todo) => (
    <TodoItem key={todo.id} {...todo} />
  ));

  return (
    <div className="container">
      <div className="row">
        <InputText />
      </div>
      <div className="row">
        <TodoItems />
      </div>
      <div className="row">
        <ul className="p-0 mt-3">{renderTodos}</ul>
      </div>
    </div>
  );
};

export default Home;
