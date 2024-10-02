import "./../App.css";
import * as React from "react";
import { questions } from "../Helpers/Questions_DB_Local"; 

function Game({step, question, onClickVariant}){
    const percentage = Math.round(step/questions.length *100);
    return (
      <div>
        <div className='progress'>
          <div style={{width:`${percentage}%`}} className='progressFill'></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index)=>(<li onClick={()=>onClickVariant(index)} key={text}>{text}</li>)) }
        </ul>
      </div>
    )
  }
  export default Game;