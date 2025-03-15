/* Counter Component */
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice'; 
import { useState } from 'react';

const Counter = () => {
  // Get the current count from the Redux store
  const count = useSelector((state) => state.counter.count);

  // Dispatch actions 
  const dispatch = useDispatch();

  // Store the user's input value for custom increments
  const [incrementAmount, setIncrementAmount] = useState(0);

  // Convert input to a number
  const addValue = Number(incrementAmount) || 0; // default to 0 if empty or invalid

  /* Reset the counter values to zero */
  const resetAll = () => {
    setIncrementAmount(0); // Reset incrementAmount state to 0.
    dispatch(reset()); //  Dispatch reset(), reset global state
  }

  /* Displays the count and two buttons to increase or decrease the count 
     The component re-renders whenever the Redux state updates.*/
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input 
        type="text" 
        value={incrementAmount} // Allow the user to enter a number
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>
          Reset
        </button>
      </div>
    </section>
  )
}

export default Counter