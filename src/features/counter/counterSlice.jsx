/* Counter Slice  */
import { createSlice } from "@reduxjs/toolkit";

// Default state with a count value
const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter', // Define Redux slice
    initialState,
    reducers: { 
        // Functions to update state
        increment: (state) => {
            state.count += 1; // Increases count by 1.
        },
        decrement: (state) => {
            state.count -= 1; // Decreases count by 1.
        }
    }
});

// increment and decrement actions are exported so components can dispatch them
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;