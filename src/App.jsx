
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([])
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
const [newNumber,setNewNumber]=useState('')
const [filter, setFilter]= useState('')

useEffect(()=>{
  axios.get('http://localhost:3002/persons')
  .then(response=>{
    console.log(response.data);
    setPersons(response.data)
  })
},[])



const handleFilterChange = (event) => {
  setFilter(event.target.value)
}

const personsToShow = filter === ''
  ? persons
  : persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
    

  const handleSubmit = (event)=>{
    event.preventDefault();
    if (persons.some(person=>person.name===newName)){
      alert(`${newName} is already there`)
      return
    }


    const newPerson = { name: newName, number:newNumber }
    setPersons(persons.concat(newPerson))
    setNewName('')
    
  }
const handleInputChange =(event)=>{
  setNewName(event.target.value)
  console.log(newName)
}
const handleInputNumberChange=(event)=>{
  setNewNumber(event.target.value)
  console.log(newNumber)
}



  return (
    <div>
      <h2>Phonebook</h2>

      <div>Filter shown with: <input value={filter} onChange={handleFilterChange} /></div>


      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>number:<input value={newNumber} onChange={handleInputNumberChange}/></div>

        <div>
          <button type="submit" >add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person,index)=>{
          return <li key={index}>{person.name}{person.number}</li>;
        })}

      </ul>

      <ul>
        {personsToShow.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>

      <div>debug: {newName}</div>
    </div>
  )
}

export default App