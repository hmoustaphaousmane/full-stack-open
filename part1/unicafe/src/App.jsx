import { useState } from 'react'

const Display = ({ text }) => (<h2>{text}</h2>)

const Button = ({ handleClick, text }) =>
  <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  if (text === 'positive')
    return (
      <>
        <td>{text}</td>
        <td>{value} %</td>
      </>)
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )

}

const Statistics = ({ clicks }) => {
  const all = clicks[0] + clicks[1] + clicks[2]
  if (all === 0) {
    return <p>No feedback given</p>
  }

  const average = (clicks[0] - clicks[2]) / all
  const positive = clicks[0] * 100 / all
  return (
    <div>
      <table>
        <tbody>
          <tr><StatisticLine text='good' value={clicks[0]} /></tr>
          <tr><StatisticLine text='neutral' value={clicks[1]} /></tr>
          <tr><StatisticLine text='bad' value={clicks[2]} /></tr>
          <tr><StatisticLine text='all' value={all} /></tr>
          <tr><StatisticLine text='average' value={average} /></tr>
          <tr><StatisticLine text='positive' value={positive} /></tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [ total, setTotal ] = useState(0)

  const handleClickGood = () => {
    console.log('good is clicked')
    const updatedGood = good + 1
    setGood(updatedGood)
    // setTotal(updatedGood + neutral + bad)
  }

  const handleClickNeutral = () => {
    console.log('neutral is clicked')
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    // setTotal(good + updatedNeutral + bad)
  }

  const handleClickBad = () => {
    console.log('bad is clicked')
    const updatedBad = bad + 1
    setBad(updatedBad)
    // setTotal(good + neutral + updatedBad)
  }

  return (
    <div>
      <Display text='give feedback' />

      <Button handleClick={handleClickGood} text='good' />
      <Button handleClick={handleClickNeutral} text='neutral' />
      <Button handleClick={handleClickBad} text='bad' />

      <Display text='statistics' />

      <Statistics clicks={[good, neutral, bad]} />
    </div>
  )
}

export default App
