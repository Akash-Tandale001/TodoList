// import { configureStore } from '@reduxjs/toolkit'
// export default configureStore({
//     reducer:{
//         todos:todoReducer
//     }

import todoReducer from "./reducer/todoSlice";
import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
  todos: todoReducer,
});
const initialState = {};
const store = createStore(reducer, initialState);
export default store;
