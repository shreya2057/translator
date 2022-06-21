import './App.css';
import React from 'react';
import TextField from './components/textbox';

function App() {
  return (
    <div className="App">
      <TextField title={"Enter your text"} type={"text"} className={"textfield"}/>
    </div>
  );
}

export default App;
