import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodoAction } from "redux/actions/todoAction";

import { ToastContainer } from "react-toastify";
import { successToast } from "utils/toast";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();
  const todos = useSelector((state) => state.todos.todos);

  const todo=todos[id]

  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChangeText = ({ target }) => {
    setText(target.value);
  };

  const handleClickEditTodo = (id, text) => {
    if (text.trim() !== "") {
      dispatch(editTodoAction(id, text));
      setText("");
      successToast("Edit Todo Done!");
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  };

  return (
    <>
      <div className="row d-flex">
        <div className="col-md-10 col-sm-12">
          <input
            type="text"
            className="form-control p-2"
            placeholder="Edit task..."
            value={text}
            ref={inputRef}
            onChange={handleChangeText}
          />
        </div>
        <div className="col-md-2 col-sm-12">
          <button
            onClick={() => handleClickEditTodo(id, text)}
            className={`btn btn-info py-2 px-4 ${!text.trim() && "disabled"}`}
          >
            Edit
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Edit;
