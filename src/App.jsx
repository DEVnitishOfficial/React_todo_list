
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './components/Context/TodoContext'
import { useState } from 'react'

function App() {
  const [list, setList] = useState( [  
    {id:1, todoData : 'todo 1',finished:false},
    {id:2, todoData : 'todo 2',finished:false},
  ])
 
console.log('list',list)
  return (
    <TodoContext.Provider value={{list, setList}}>  
  <AddTodo updateList={(todo) => setList([
    ...list, 
    {
    id: list.length+1,
    todoData: todo, 
    finished:false
  }])}
     />
  <TodoList list={list} updateList={setList}/>
  </TodoContext.Provider>

  )
}

export default App
