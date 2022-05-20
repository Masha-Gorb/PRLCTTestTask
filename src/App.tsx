import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {MainPage2} from "./components/MainPage/MainPage2";
import {MainPage} from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      {/*<MainPage2/>*/}
    </div>
  );
}

export default App;
