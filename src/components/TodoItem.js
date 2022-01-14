import React from "react";
import "./todoitemcss.css";
import { useDispatch } from "react-redux";
import { deleteTodo, setCheck } from "../reducer/todoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handlecheck = () => {
    dispatch(setCheck(id));
  };
  const deleteTodoitem=()=>{
    dispatch(deleteTodo(id));
  }
  return (
    <div className="item ">
      <div className="form-check item-content">
        <input
          className="form-check-input checkbox-done"
          type="checkbox"
          value=""
          onClick={handlecheck}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
          className="trashlogo"
          onClick={()=>deleteTodoitem()}
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
        <label className="form-check-label task">
          {!done ? (
            <p>{name}</p>
          ) : (
            <p>
              <strike>{name}</strike>
            </p>
          )}
        </label>
      </div>
    </div>
    // </div>
  );
};

export default TodoItem;
