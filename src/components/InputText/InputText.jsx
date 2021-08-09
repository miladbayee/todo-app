import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "redux/actions/todoAction";

import { ToastContainer } from "react-toastify";
import { successToast } from "utils/toast";

const InputText = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChangeText = ({ target }) => {
    setText(target.value);
  };

  const handleAddNewTodo = (e) => {
    if (e.keyCode === 13 && text.trim() !== "") {
      dispatch(addTodoAction(text));
      setText("");
      successToast();
    }
  };

  return (
    <>
      <div className="col-12">
        <input
          className="form-control p-2"
          placeholder="Add task and press enter key..."
          value={text}
          ref={inputRef}
          onChange={handleChangeText}
          onKeyDown={handleAddNewTodo}
          type="text"
        />
        <ToastContainer />
      </div>
    </>
  );
};

export default InputText;
