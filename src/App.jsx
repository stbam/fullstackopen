import Display from './Display'
import { useState } from 'react'

// a proper place to define a component
const Statistics = (props) => {
if(props.total!==0){
  return(
    <>
     <div> good: {props.good}</div>
     <div> neutral: {props.neutral}</div>
     <div> bad:{props.bad}</div>
    </>
   )
}else{
  return(
    <h2>No feedback given</h2>
  )
}
  
  
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = bad+ good  + neutral;



  const handleGoodClick =()=>{
    setGood(good+1)
    
  }
const handleBadClick=()=>{
  setBad(bad+1);
}
const handleNeutralClick=()=>{
  setNeutral(neutral+1);
}
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
     <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>


      <div>
        <h1>Statistics</h1>
       <Statistics good={good} bad={bad} neutral={neutral} total={total}></Statistics>
    {/*  <p>Good  {good}</p>
      <p>Neutral {neutral}</p>
  <p>Bad  {bad} </p> */}
      </div>
    
    <div>
      {/* <Display value={good+bad+neutral}></Display>*/}
      <Display good={good} neutral={neutral} bad={bad} total={total} ></Display>
    </div>
    </div>
  )
}

export default App