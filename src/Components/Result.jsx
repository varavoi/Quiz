import "./../App.css";
import * as React from "react";
import { questions } from "../Helpers/Questions_DB_Local"; 

function Result({correct}){
    return(
        <div className='result'>
          <img src="https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D0%B8-%D0%BD%D0%B0-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%BF%D0%B8%D1%81%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BD%D0%B5%D1%86-%D0%B8%D0%B7%D0%BE%D0%BB%D1%8F%D1%86%D0%B8%D0%B8-208123151.jpg"/>
          <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
          <button>Попробовать снова</button>
        </div>
    )
  }
  export default Result;