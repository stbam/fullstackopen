
import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/person'
import person from './services/person'
const App = () => {

  const [notes, setNotes] = useState([])
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
const [newNumber,setNewNumber]=useState('')
const [filter, setFilter]= useState('')

useEffect(()=>{
  personService.getAll()
.then(data=>{
   // console.log(response.data);
    setPersons(data)
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
      window.confirm( `${newName} is already added to the phonebook, replace the old number with a new one?`)
    const existingPerson = persons.find(person => person.name === newName)

    const updatedPerson = { ...existingPerson, number: newNumber } /*This creates a new object based on existingPerson (which is an object from your persons state).
                                                                     The spread operator ...existingPerson copies all properties from the existing person (like id, name, number).
                                                                     Then, you're overwriting the number property with newNumber. */
    personService.update(existingPerson.id, updatedPerson)//chat gpt implemetation
      
      console.log(updatedPerson.name)
      console.log(updatedPerson.number)
      
      personService.update(updatedPerson.id,updatedPerson)


      return
    }
    const newPerson = { name: newName, number:newNumber }
    personService.create(newPerson)
    .then(addedPerson => {
      setPersons(persons.concat(addedPerson))
      setNewName('')
      setNewNumber('')
    })
    setNewName('')
  }
const handleInputChange =(event)=>{
  setNewName(event.target.value)
  //console.log(newName)
}
const handleInputNumberChange=(event)=>{
  setNewNumber(event.target.value)
  console.log(newNumber)
}
const handleDelete = (name,id)=>{
  console.log(id)
  if (window.confirm(`Delete ${name}?`)) {
    personService.deleteObj(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        alert(`Failed to delete ${name}`)
        console.error(error)
      })
  }
}
const handleUpdate=(id)=>{
  console.log(id);



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
          <li key={person.id}>
            {person.name}   {person.number} <button onClick={()=>handleDelete(person.name,person.id)}>delete</button>
          </li>
        ))}
      </ul>

      <div>debug: {newName}</div>
    </div>
  )
}

export default App