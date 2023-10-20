import { useDispatch } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import {todoFinished,addTodo,delTodo,updateTodo} from './actions/todoActions'
import { bindActionCreators } from "redux";

function App() {

  const dispatch = useDispatch()
  const actions = bindActionCreators({todoFinished,addTodo,delTodo,updateTodo},dispatch)
  console.log('action',actions)
  return (
    <>
      <AddTodo addTodo = {actions.addTodo} />
      <TodoList todoFinished = {actions.todoFinished} delTodo={actions.delTodo} updateTodo={actions.updateTodo}/>
    </>
  );
}

export default App;
