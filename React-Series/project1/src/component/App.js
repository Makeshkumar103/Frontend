import React from "react"
import './App.css';
function Task() {
  return <h1>This is my first task</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
          <h1>I am a insdustry!.</h1>
          <Task />
      </header>
    </div>
  );
}

export default App;
