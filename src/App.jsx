import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className=" w-3/4 m-auto">
      <h1 className="text-center bg-black text-xl font-bold text-white p-3 transform translate-y-4">
        Todo using redux
      </h1>
      <div className="flex justify-center">
        <AddTodo />
      </div>
      <Todo />
    </div>
  );
}

export default App;
