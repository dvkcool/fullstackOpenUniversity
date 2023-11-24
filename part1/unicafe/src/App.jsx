import { useState } from 'react'
const Statistics = ({good, bad, neutral}) => {
  if(good+bad+neutral === 0){
    return (
      <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good+bad+neutral} </p>
      <p>Average: {(good - bad)/3} </p>
      <p>Positive: {good / (good+bad+neutral) * 100} %</p>
    </>
  );
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={()=> setGood(good + 1)}>good</button>
      <button onClick={()=> setNeutral(neutral + 1)}>neutral</button>
      <button onClick={()=> setBad(bad + 1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App