// Header component that renders the name of the course
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

// Content component that renders the parts and their number of exercises
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0][0]} exercises={props.parts[0][1]} />
      <Part part={props.parts[1][0]} exercises={props.parts[1][1]} />
      <Part part={props.parts[2][0]} exercises={props.parts[2][1]} />
    </div>
  )
}

// Total component renders the total number of exercises
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { part1: exercises1 },
    { part2: exercises2 },
    { part3: exercises3 },
  ]

  return (
    <div>
      <Header course={course} />

      <Content parts={
        [
          [part1, exercises1],
          [part2, exercises2],
          [part3, exercises3],
        ]
      }
      />

      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
