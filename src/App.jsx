
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './components/Context/TodoContext'
import { useReducer } from 'react'
import TodoDispatchContext from './components/Context/TodoDispatchContext'
import todoReducer from './Reducer/todoReducer'

function App() {
const [list, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoContext.Provider value={{list}}>  
    <TodoDispatchContext.Provider value={{dispatch}}>   
  <AddTodo />
  <TodoList />
  </TodoDispatchContext.Provider>
  </TodoContext.Provider>

  )
}

export default App
