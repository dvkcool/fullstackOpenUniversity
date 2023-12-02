const Numbers = ({persons, searchName, deletePersonState}) => {
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
          Number: {person.number} <br/>
          <button onClick={() => deletePersonState(person.id, person.name)}>
            Delete person
          </button></li>)}
    </ul>
    </>
  )
}

export default Numbers