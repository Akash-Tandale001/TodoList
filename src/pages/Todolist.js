import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../reducer/todoSlice";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "../reducer/todoSlice";

const Todolist = ({ isLoggedIn }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
    
  };
  const todoList = useSelector(selectTodoList);



  return (
    <>
      {!isLoggedIn ? (
        <div className="loginerror hometitle">Please Login</div>
      ) : (
        <div className="container-fluid">
          <div className="hometitle">Add TODO</div>
          <div className="addItem">
            <input
              type="text"
              className="inputTodo"
              placeholder="Task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="addbutton" onClick={addTodo}>
              Add
            </button>
          </div>
          <div className="container-fluid d-flex justify-content-center flex-wrap  mt-4">
            {todoList.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  name={item.item}
                  done={item.done}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Todolist;
