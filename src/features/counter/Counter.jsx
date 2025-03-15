/* Counter Component */
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  // Get the current count from the Redux store
  const count = useSelector((state) => state.counter.count);
  // Dispatch actions (increment and decrement).
  const dispatch = useDispatch();

  /* Displays the count and two buttons to increase or decrease the count 
     The component re-renders whenever the Redux state updates.*/
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  )
}

export default Counter