
import { createStore, combineReducers } from "redux";

// importing todoreducers
import todoReducer from "./Reducer/todoReducer";

const reducers = combineReducers({todo : todoReducer});


const store = createStore(reducers);

export default store;