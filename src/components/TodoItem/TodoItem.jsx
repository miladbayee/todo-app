import "./todo-item.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodoAction, toggleTodoAction } from "redux/actions/todoAction";

import { ToastContainer } from "react-toastify";
import { errorToast, infoToast } from "utils/toast";
import { Link } from "react-router-dom";

const TodoItem = ({ ...props }) => {
  const { id, text, completed } = props;
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodoAction(id));
    if (!completed) return infoToast("Task Completed!");
    infoToast("Task Actived!");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
    errorToast("Todo Delete Done!");
  };

  return (
    <>
      <li
        className={`mb-3 border border-info rounded-3 p-3 d-flex align-items-center justify-content-between ${
          completed && "completed"
        }`}
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="round">
            <input
              type="checkbox"
              id={id}
              defaultChecked={completed}
              onClick={() => handleToggleTodo(id)}
            />
            <label htmlFor={id}></label>
          </div>
          <p className="todo__text m-0 ms-4">{text}</p>
        </div>
        <div className="todo__btn me-2">
          <span className="me-3">
            <Link to={`edit/${id}`}>
              <AiOutlineEdit />
            </Link>
          </span>
          <span onClick={() => handleDeleteTodo(id)}>
            <AiOutlineDelete />
          </span>
        </div>
      </li>
      <ToastContainer />
    </>
  );
};

export default TodoItem;
