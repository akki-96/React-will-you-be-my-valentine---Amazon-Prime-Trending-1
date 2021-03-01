import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  
  let {slides}=prop
  let [index,updateIndex]=useState(0);
  let [{title,text},upDateInfo]=useState({title:slides[index].title,text:slides[index].text})
  
  const IncreaseIndex=()=>{
    index++
    updateIndex(index)
    upDateInfo({title:slides[index].title,text:slides[index].text})
  }

  const DecreseIndex=()=>{
    index--
    updateIndex(index)
    upDateInfo({title:slides[index].title,text:slides[index].text})
  }

  const RestartIndex=()=>{
    index=0
    updateIndex(index)
    upDateInfo({title:slides[index].title,text:slides[index].text})
  }



  return(
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
      <button data-testid="button-prev" onClick={DecreseIndex}>Prev</button>
      <button data-testid="button-restart" onClick={RestartIndex} >Restart</button>
      <button data-testid="button-next" onClick={IncreaseIndex}>Next</button>
    </>
  )
}


export default App;
