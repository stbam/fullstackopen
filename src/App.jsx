import Content from './Content'
import Header from './Header'
import Exercises from './Total'
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      <Header name={course} />
      <Content name={part1} value={exercises1}/>
      <Content name={part2} value={exercises2}/>
      <Content name={part3} value={exercises3}/>
      
      <Exercises  value={exercises1+exercises2+exercises3}/>
    </div>

  
  )
}

export default App