const PersonForm = ({handleAddEntry, newName, newNumber, setNewName, setNumber})=>{
    return(
        <form onSubmit= {handleAddEntry}>
            <div>
            name: <input value={newName} onChange= {(e)=>{setNewName(e.target.value)}}/>
            </div>
            <div>
            number: <input value={newNumber} onChange= {(e)=>{setNumber(e.target.value)}}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm