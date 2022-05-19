import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {TestComponent} from "./components/MainPage/Repo/TestComponentWithApi";
import {MainPage} from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <TestComponent/>

    </div>
  );
}

export default App;
