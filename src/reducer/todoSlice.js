import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList:[]

}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo:(state , action)=>{
            state.todoList.push(action.payload)
        },

        setCheck:(state , action)=>{
            state.todoList.map((item)=>{
                if(action.payload === item.id){
                    if(item.done===true){
                        item.done = false;
                    }
                    else{
                        item.done = true;
                    }
                }
            })
        },

        deleteTodo:(state ,action)=>{
            const index=state.todoList.findIndex((item)=> item.id === action.payload);
            if (index > -1) {
                state.todoList.splice(index, 1);
              }
        }

    
    }
});

export const {saveTodo , setCheck ,deleteTodo} = todoSlice.actions
export const selectTodoList = state => state.todos.todoList
export default todoSlice.reducer