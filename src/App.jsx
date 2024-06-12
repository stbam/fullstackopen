import Content from './Content'
import Header from './Header'
import Exercises from './Total'
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header name={course} />
      {/* <Content name={parts[0].name} value={parts[0].exercises}/> */}
      <Content parts={parts}/>

      <Exercises parts={parts}/>

      
      {/* <Exercises  value={exercises1+exercises2+exercises3}/> */}

      
    </div>

  
  )
}

export default App