import { useDispatch } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { bindActionCreators } from "redux";
import {addTodo,editTodo,todoFinished,deleteTodo} from "./slices/todoSlice";

function App() {

  const dispatch = useDispatch()
  const actions = bindActionCreators({todoFinished,addTodo,editTodo,deleteTodo},dispatch)
  console.log('action',actions.addTodo)
  return (
    <>
      <AddTodo addTodo = {actions.addTodo} />
      <TodoList todoFinished = {actions.todoFinished} delTodo={actions.deleteTodo} updateTodo={actions.editTodo}/>
    </>
  );
}

export default App;
