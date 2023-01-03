import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector(({ counter }) => counter);

  return (
    <div className="App">
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>React</h1>
      <h2>{counter}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          incrementByAmount 2
        </button>
      </div>
    </div>
  );
}

export default App;
