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

export default FilterNumbers