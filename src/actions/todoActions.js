
import {CHECK_TODO,ADD_TODO,EDIT_TODO,DEL_TODO} from '../constatns/actions'
export const todoFinished = (todo,isFinished) => ({type : CHECK_TODO, payload : {isFinished, todo}})
export const addTodo = (inputText) => ({ type : ADD_TODO, payload : {todoText : inputText}})
export const updateTodo = (todo,todoText) => ({type : EDIT_TODO, payload : {todo,todoText}})
export const delTodo = (todo) => ({type : DEL_TODO, payload : {todo}})