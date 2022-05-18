import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {StartPage} from "./components/StartPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <StartPage/>
    </div>
  );
}

export default App;
