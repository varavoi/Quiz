import "./../App.css";
import * as React from 'react'
import { QuizContext } from "../Helpers/Contexts.js"; 
import { questions } from "../Helpers/Questions_DB_Local"; 

// 1 импортируем контекст
export default function Mainmenu() {
const { gameState, setGameState} = React.useContext(QuizContext)
    return (
      <div className="Mainmenu">
        <h1>Главное меню</h1>
        <button onClick={()=>{setGameState("game")}} className="buttonMenu"> Поехали </button >       
      </div>
    );
  }