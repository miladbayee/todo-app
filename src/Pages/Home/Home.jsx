import InputText from "components/InputText";
import TodoItems from "components/TodoItems";


const Home = () => {
  
  return (
    <div className="container">
      <div className="row">
        <InputText />
      </div>
      <div className="row">
        <TodoItems />
      </div>
    </div>
  );
};

export default Home;
