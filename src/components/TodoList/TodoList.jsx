import { useContext } from 'react';
import Todo from '../Todo/Todo'
import TodoContext from '../Context/TodoContext';
import TodoDispatchContext from '../Context/TodoDispatchContext';

function TodoList() {
  const {list} = useContext(TodoContext);

  const {dispatch} = useContext(TodoDispatchContext);

  function onFinished(isFinished, todo) {
    dispatch({type : 'check_todo', payload : {isFinished, todo}})
    console.log('isFinished',isFinished)
  }

  function onDelete(todo) {
    dispatch({type : 'delete_todo', payload : {todo}})
  }

  function onEdit(todo, todoText) {
   dispatch({type : 'edit_todo', payload : {todo,todoText}})
  }
  
  return (
    <div>
 {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            TodoData={todo.todoData}
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  )
}

export default TodoList;