import "./todo-items.css";

import FilterTodo from "components/FilterTodo/FilterTodo";

const TodoItems = () => {
  
  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mt-4 mb-4 p-0">
        <h3 className='col col-md-8'>Task List</h3>
        <FilterTodo />
      </div>
      <hr/>
      
    </>
  );
};

export default TodoItems;
