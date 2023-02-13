import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: [
            
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter((obj) => obj.todoName !== action.payload.todoName)
        },
        updateTodo: (state, action) => {
            state.value.map((obj) => {
                if(obj.todoName === action.payload.id){
                    obj.todoName = action.payload.todoName
                }
            })
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer