import Todo from '../Todo/Todo'
import { useSelector } from 'react-redux';

function TodoList({todoFinished,delTodo,updateTodo}) {

  const list = useSelector((state) => state.todo.todoList); // useSelector hook takes a function parameter and it has direct access of the redux-store
  console.log('list',list)

  function onFinished(isFinished, todo) {
    todoFinished({isFinished,todo})
  }

  function onDelete(todo) {
    delTodo({todo})
  }

  function onEdit(todo, todoText) {
    updateTodo({todo,todoText})
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