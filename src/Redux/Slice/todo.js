import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    todoList: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: INITIAL_STATE,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        updateTodo: (state, action) => {
            console.log(action.payload);
            state.todoList.forEach((item) => {
                if (item._id === action.payload._id) {
                    item.title = action.payload.title;
                    item.priority = action.payload.priority;
                    item.endDate = action.payload.endDate;
                    item.startDate = action.payload.startDate;
                    item.status = action.payload.status;
                }
            });
        },
        updateStatus: (state, action) => {
            let temp = [...state.todoList];
            temp.splice(temp.findIndex(e => e._id === action.payload._id), 1, action.payload)
            return {
                ...state,
                todoList: [...temp]
            }
        },
        setIncompeleteAfterEndDate: (state, action) => {
            return {
                ...state,
                todoList: action.payload
            }
        }

    },
});

export const { addTodo, updateTodo, updateStatus, setIncompeleteAfterEndDate } = todoSlice.actions;
