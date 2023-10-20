import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList : []
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (todo, action) => {  // here the state is 'todo' and inside the todo i.e state there is list of todo
            let todoText = action.payload.todoText;
            todo.todoList.push({
                id: todo.todoList.length + 1,
                todoData: todoText, 
                finished:false})
        },
        editTodo : (todo,action) => {
            let payloadTodo = action.payload.todo; 
    let todoText = action.payload.todoText; 
   todo.todoList = todo.todoList.map((t) => {
        if (t.id === payloadTodo.id) {
          t.todoData = todoText;
        }
        return t;
      });
        },
        todoFinished : (todo,action) => {
            let isFinished = action.payload.isFinished;
            let payloadTodo = action.payload.todo;
            todo.todoList = todo.todoList.map((t) => {
                if (t.id === payloadTodo.id) {
                    payloadTodo.finished = isFinished;
                }
                return t;
              });
        },
        deleteTodo : (todo,action) => {
            let payloadTodo = action.payload.todo;
            todo.todoList = todo.todoList.filter((t) => t.id !== payloadTodo.id);
        }
    }
})

export const  {addTodo,editTodo,deleteTodo,todoFinished} = todoSlice.actions; // to make changes in state actions are needed 
export default todoSlice.reducer; // to make store reducers is needed