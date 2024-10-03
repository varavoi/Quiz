import "./../App.css";
import * as React from "react";
import { QuizContext } from "../Helpers/Contexts";
import { questions } from "../Helpers/Questions_DB_Local"; 

function Game(){
  const { gameState, setGameState, step, setStep, correct, setCorrect} = React.useContext(QuizContext);
  let question = questions[step]
  const onClickVariant =(index)=>{
      console.log(step, index)
      setStep(step+1)
      if(index===question.correct){
        setCorrect(correct+1)
      }
  }
  const finishGame = (index) => {
    if(index===question.correct){
      setCorrect(correct+1)
    }
    setGameState("result");
  };
 
    const percentage = Math.round(step/questions.length *100);
    console.log(step!==questions.length)
    return (
          <div>
            <div className='progress'>
              <div style={{width:`${percentage}%`}} className='progressFill'></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
              {question.variants.map((text, index)=>(<li onClick={
                ()=>step===questions.length-1?finishGame(index):onClickVariant(index)
                } key={text}>{text}</li>))}
            </ul>
         </div>
        )
  }
  export default Game;
 