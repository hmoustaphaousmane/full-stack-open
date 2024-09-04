// Header component that renders the name of the course
const Header = (props) => {
  console.log('Header component props', props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log('Part component props', props)
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

// Content component that renders the parts and their number of exercises
const Content = (props) => {
  console.log('Content component props', props)
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

// Total component renders the total number of exercises
const Total = (props) => {
  console.log('Total component props', props)
  const totalExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;

  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}

export default App
