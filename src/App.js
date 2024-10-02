import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Result(){
  return(
      <div className='result'>
        <img src="https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D0%B8-%D0%BD%D0%B0-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%BF%D0%B8%D1%81%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BD%D0%B5%D1%86-%D0%B8%D0%B7%D0%BE%D0%BB%D1%8F%D1%86%D0%B8%D0%B8-208123151.jpg"/>
        <h2>Вы отгадали 3 ответа из 10</h2>
        <button>Попробовать снова</button>
      </div>
  )
}

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
      {/* <Game/> */}
      <Result/>
    </div>
  );
}

export default App;
