// Header component that renders the name of the course
const Header = ({ courseName }) => {
  console.log('Header component props:', courseName)
  return (
    <div>
      <h2>{courseName}</h2>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  console.log('Part component props:', { name, exercises })
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

// Content component that renders the parts and their number of exercises
const Content = ({ parts }) => {
  console.log('Content component props:', parts)
  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

// Total component renders the total number of exercises
const Total = ({ parts }) => {
  console.log('Total component props:', parts)

  const totalExercises =
    parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log('Total exercises:', totalExercises)

  return (
    <div>
      <p>
        <strong>total of {totalExercises} exercises</strong>
      </p>
    </div>
  )
}

const Course = ({ courses }) => {
  console.log(courses)
  return (
    courses.map(course => 
    <div key={course.id}>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    )
  )
}

export default Course
