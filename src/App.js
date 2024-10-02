import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const questions = [
  {
    title: 'React - это ...?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct:0,
  },
  {
    title: 'Какое из этих чисел делится на 3?',
    variants: ['12', '15', '18'],
    correct: 2,
   },
   {
    title: 'Какой город является столицей США?',
    variants: ['Нью-Йорк', 'Лос-Анджелес', 'Вашингтон'],
    correct: 2,
   },
   {
    title: 'Кто написал "Гамлета"?',
    variants: ['Шекспир', 'Пушкин', 'Гете'],
    correct: 0,
   },
   {
    title: 'Какой цвет у неба?',
    variants: ['Синий', 'Зеленый', 'Красный'],
    correct: 0,
   },
   {
    title: 'Какое из этих слов - глагол?',
    variants: ['Стол', 'Бежать', 'Книга'],
    correct: 1,
   },
   {
    title: 'Сколько дней в неделе?',
    variants: ['6', '7', '8'],
    correct: 1,
   },
   {
    title: 'Какое из этих слов - антоним слова "холодный"?',
    variants: ['Теплый', 'Горячий', 'Мокрый'],
    correct: 0,
   }
]

function Result(){
  return(
      <div className='result'>
        <img src="https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D0%B8-%D0%BD%D0%B0-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%BF%D0%B8%D1%81%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BD%D0%B5%D1%86-%D0%B8%D0%B7%D0%BE%D0%BB%D1%8F%D1%86%D0%B8%D0%B8-208123151.jpg"/>
        <h2>Вы отгадали 3 ответа из 10</h2>
        <button>Попробовать снова</button>
      </div>
  )
}

function Game({question}){
  return (
    <div>
      <div className='progress'>
        <div style={{width:'50%'}} className='progressFill'></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text)=>{
          <li key={text}>{text}</li>
        })}
      </ul>
    </div>
  )
}

function App() {
  //let count =0;
 const [step, setStep] = React.useState(0)
 let question = questions[step]
 
  return (
    <div className="App">
      <Game question={question}/>
      {/* <Result/> */}
    </div>
  );
}

export default App;
