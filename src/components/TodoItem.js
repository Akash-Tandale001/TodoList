import React from "react";
import "./todoitemcss.css";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";


const TodoItem = ({ name, done, id }) => {
    const dispatch = useDispatch();

    const handlecheck=()=>{
        dispatch(setCheck(id))
        

    }
  return (
    <div className="item ">
      <div className="form-check item-content">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onClick={handlecheck}
        />
        <label className="form-check-label" >
          <p className={done && 'todoitem--done'}>{name}</p>
        </label>
      </div>
    </div>
    // </div>
  );
};

export default TodoItem;
