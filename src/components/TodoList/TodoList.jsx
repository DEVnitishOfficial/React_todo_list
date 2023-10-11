import Todo from '../Todo/Todo'

function TodoList({list,updateList}) {
    
  return (
    <div>
{list.length > 0 &&
                list.map(todo => <Todo
                 key={todo.id} 
                 id={todo.id}
                 isFinished={todo.finished} 
                 TodoData={todo.todoData}
                 changeFinished={(isFinished) => {
                  console.log('isfinished',isFinished)
                  const updatedList = list.map(t => {
                    if(t.id == todo.id){
                      todo.finished = isFinished
                    }
                    return t;
                  });
                  updateList(updatedList);

                 }}

                 />)}
    </div>
  )
}

export default TodoList