import React, {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  // ------------------------------
  // Getting data from MongoDB test
  // ------------------------------
  useEffect(() => {
		axios
			.get("/api/items")
			.then((items) => console.log(items))
			.catch((err) => console.log(err));
	}, []);
  // ----

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DZ TODO LIST.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
