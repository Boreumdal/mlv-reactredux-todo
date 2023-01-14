import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            return [...state, action.payload]
        },
        deleteTask: (state, action) => {
            return state.filter(data => data.id !== action.payload.id)
        },
        editTask: (state, action) => {
            let idx = state.findIndex(item => item.id === action.payload.id)
            state[idx].editing = !state[idx].editing
            return state
        },
        editWholeTask: (state, action) => {
            let idx = state.findIndex(item => item.id === action.payload.id)
            state[idx].name = action.payload.name
            state[idx].editing = action.payload.editing
            return state
        }
    }
})

export const { addTask, deleteTask, editTask, editWholeTask } = todoSlice.actions

export default todoSlice.reducer