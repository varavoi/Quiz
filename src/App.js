import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Game(){
  return (
    <div>
      <div className='progress'>
        <div style={{width:'50%'}} className='progressFill'></div>
      </div>
      <h1>Что такое useState?</h1>
      <ul>
        <li>Это функция для хранения данных компонента</li>
        <li>Это глобальный стейт</li>
        <li>Это стилизация объекта</li>
      </ul>
    </div>
  )
}
function App() {
  //let count =0;
 
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
