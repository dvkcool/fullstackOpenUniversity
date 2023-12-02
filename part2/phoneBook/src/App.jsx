import { useState, useEffect } from 'react'
import FilterNumbers from './components/FilterNumbers'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import Notification from './components/Notification'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)
  const [name, setName] = useState('')
  const [msg, setMsg] = useState(null)
  const [msgType, setMsgType] = useState(null)
  const successType = 'Success'
  const errorType = 'Error'

  const getPersons = () => {
    personService.getAll()
    .then(personData => setPersons(personData))
  }

  useEffect(getPersons, [])


  const changeName = (event) => {
    setName(event.target.value);
  }

  const changeNewName = (event) => {
    setNewName(event.target.value);
  }

  const changeNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const addPersons = (event) => {
    event.preventDefault();
    if(persons.some(person => person.name === newName)){
      if (window.confirm(`${newName} is already present, Do you want to update number`)){
        const oldPerson = persons.find(person => person.name === newName);
        personService.update(oldPerson.id, {
          ...oldPerson,
          number: newNumber
        })
        .then(() => {
          let newPerson = persons;
          newPerson.find(person => person.id === oldPerson.id).number = newNumber
          console.log(newPerson)
          setPersons(newPerson)
        }).then(() => {
          setMsg(`${newName} details are updated `);
          setMsgType(successType)
          setNewName("");
          setNewNumber(0);
          setTimeout(() => {setMsg(null)}, 5000)
        })
        .catch(error => { 
        console.log(error)
        setMsgType(errorType)     
        setMsg(`the person '${oldPerson.name}' was already deleted from server`)     
        setPersons(persons.filter(person => person.id !== oldPerson.id))})
        setTimeout(() => {setMsg(null)}, 6000)
      }  
    }
    else{
      personService.create({
        name: newName,
        number: newNumber,
        id: persons[persons.length -1].id + 1})
        .then(
          setPersons(persons.concat({
            name: newName,
            number: newNumber,
            id: persons[persons.length -1].id + 1}))
        ).then(() => {
          setMsg(`${newName} details are saved `);
          setMsgType(successType);
          setNewName("");
          setNewNumber(0);
          setTimeout(() => {setMsg(null)}, 5000)
        })
      
    }
    
  }

  const deletePersonState = (id, pName) => {
    if (window.confirm(`Are you sure you wish to delete ${pName}`)){
      personService.deletePerson(id)
      .then(() => {
        setMsg(`${pName} details are deleted `);
        setPersons(persons.filter(person => person.id !== id))
        setTimeout(() => {setMsg(null)}, 5000)
        setMsgType(successType)
      })
      .catch(error => { 
        console.log(error)     
        setMsgType(errorType)
        alert(`the person '${pName}' was already deleted from server`)     
        setPersons(persons.filter(person => person.id !== id))})
    }  
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={msg} type={msgType} />
      <FilterNumbers name={name} changeName={changeName}/>
      <PersonForm newName={newName} newNumber={newNumber} changeNewName={changeNewName} 
                  changeNumber={changeNumber} addPersons={addPersons} />
      <Numbers searchName={name} persons={persons} deletePersonState={deletePersonState} />
    </div>
  )
}

export default App