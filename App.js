import './App.css'
import Question from './question.js'
import React,{useState,useEffect}  from 'react';
import Axios from 'axios'
function App() {
  const api_url='https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'
  const [question,setquestion]=useState([]);
  const [currentIndex,setIndex]=useState(0);
  const [score,setscore]=useState(0)
  useEffect(()=>{
    Axios.get(api_url)
    .then((res)=>res.data)
    .then(data=>{
      const questions=data.results.map((question)=>({
        ...question,
        answers:[question.correct_answer,...question.incorrect_answers].sort(()=>Math.random()-0.5)
      }
      )
    )
    setquestion(questions)
  })
}
  ,[])
  const Hand=(answers)=>{
    if(answers===question[currentIndex].correct_answer)
    {
      setscore(score+1)
    }
    setIndex(currentIndex+1)

  }
  
  return(
    question.length > 0 ? (<div className="container"> {currentIndex >= question.length ? (<h1> game end score os {score}</h1>):(<Question Hand={Hand} data={question[currentIndex]}/>)}</div>)
  :(<div className="container">...loading</div>)

  );
}

export default App;
