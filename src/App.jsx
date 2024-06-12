import Content from './Content'
import Header from './Header'
import Exercises from './Total'
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
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Exercises parts={course.parts}/>
      {/* <Content name={parts[0].name} value={parts[0].exercises}/> */}
      {/*<Content parts={parts}/>

  <Exercises parts={parts}/> */}

      
      {/* <Exercises  value={exercises1+exercises2+exercises3}/> */}

      
    </div>

  
  )
}

export default App