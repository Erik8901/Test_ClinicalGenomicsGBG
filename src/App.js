import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Note app</h1>
      <div>
        <input type="text" placeholder="Add your note" />
        <div>
          <button>Submit</button>
        </div>
      </div>
      <ul>
        <li>
          <span>Buy butter</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Change a lamp</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Buy milk</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
