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
        },
        /* reset reducer */
        reset: (state) => { 
            state.count = 0; // Resets count to 0 when dispatched
        },
        /* incrementByAmount reducer */
        incrementByAmount: (state, action) => {
            state.count += action.payload; // Increments count by the payload value received from the action
        }
    }
});

// Actions are exported so components can dispatch them
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;