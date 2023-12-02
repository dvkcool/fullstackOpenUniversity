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

export default PersonForm