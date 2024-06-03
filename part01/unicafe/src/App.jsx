import { useState } from 'react'

const Heading = ({title})=>{
  return(
    <h1>{title}</h1>
  )
}

const Button = ({feedback, eventListener}) => {
  return(
      <button onClick={eventListener}>
        {feedback}
      </button>
  )
}

const Count = ({type, count}) => {
  return(
    <>
      <tr>
        <td>{type}</td>
        <td>{count}</td>
      </tr>
    </>
  )
}

const Statistics = ({good,neutral,bad}) =>{
  const total = good + neutral + bad;

  if(total == 0){
    return (
      <>
        <Heading title="Statistics"/>
        <div>No feedback given</div>
      </>
    )
  }

  return(
    <>
      <Heading title="Statistics"/>
      <table>
        <tbody>
          <Count type="good" count={good}/>
          <Count type="neutral" count={neutral}/>
          <Count type="bad" count={bad}/>
          <Count type="all" count={total}/>
          <Count type="average" count={(good-neutral)*1/total}/>
          <Count type="positive" count={((good)/total*100) + "%"}/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Heading title="Give Feedback"/>
      <Button feedback="good" eventListener={()=>setGood(good+1)}/>
      <Button feedback="neutral" eventListener={()=>setNeutral(neutral+1)}/>
      <Button feedback="bad" eventListener={()=>setBad(bad+1)}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App