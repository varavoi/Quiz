import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mainmenu from "./Components/Menu";
import Game from "./Components/Game";
import Result from "./Components/Result";
import { QuizContext } from "./Helpers/Contexts.js"; 
import { questions } from './Helpers/Questions_DB_Local.js';

function App() {
  //let count =0;
 const [step, setStep] = React.useState(0)
 const [correct, setCorrect] = React.useState(0)
 let question = questions[step]
 const onClickVariant =(index)=>{
  console.log(step, index)
  setStep(step+1)
  if(index===question.correct){
    setCorrect(correct+1)
  }
 }
  return (
    <div className="App">
      {step !== questions.length?
      <Game step ={step} question={question} onClickVariant ={onClickVariant}/>:
       <Result correct ={correct}/> 
      }
    </div>
  );
}

export default App;
