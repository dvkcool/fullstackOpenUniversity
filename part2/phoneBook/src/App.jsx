import { useState } from 'react'

const Numbers = ({persons, searchName}) => {
  return (
    <>
    <h3>Numbers</h3>
    <ul>
    {persons
      .filter(person => 
          person.name.toLocaleLowerCase()
            .includes(searchName.toLocaleLowerCase()))
      .map(person =>
        <li key = {person.id}>
          Name: {person.name} <br/> 
          Number: {person.number}</li>)}
    </ul>
    </>
  )
}

const FilterNumbers = ({name, changeName}) => {
  return (
    <>
    <h3>Filter phone numbers</h3>
    <p>Filter names starting with : 
      <input value={name} onChange={changeName}/>
    </p>
    </>
  )
}

const PersonForm = (
  {addPersons, newName, newNumber, changeNewName, changeNumber}) => {
  return(
    <>
    <h3>Add a number</h3>
      <form onSubmit={addPersons}>
        <div>
          name: 
          <input value={newName} onChange={changeNewName}required />
          <br/><br/>
          number: 
          <input value={newNumber} onChange={changeNumber} type="number" required />
        </div>
        <div>
          <button type="submit" onClick={addPersons}>add</button>
        </div>
      </form>
    </>
  );
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)
  const [name, setName] = useState('')

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
      alert(`${newName} is already present`);
    }
    else{
      setPersons(persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1}));
      setNewName("");
      setNewNumber(0);
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterNumbers name={name} changeName={changeName}/>
      <PersonForm newName={newName} newNumber={newNumber} changeNewName={changeNewName} 
                  changeNumber={changeNumber} addPersons={addPersons}/>
      <Numbers searchName={name} persons={persons} />
    </div>
  )
}

export default App