import personService from '../services/personPromise'

const deleteEntry = (person,deletePersonFromFrontend,setInteractionState)=>{
    if(window.confirm(`Delete ${person.name} ?`)){
        personService.deletePerson(person).then(()=>{
            setInteractionState(true,`${person.name} has been deleted from the server`)
        }).catch(error=>{
            setInteractionState(false,`${person.name} has already been deleted from the server`)
        })
        deletePersonFromFrontend(person)
    }
}

const Persons = ({visible,deletePerson,setInteractionState})=>{
    return(
        <div>
         {visible.map(person=>{
                return(
                    <li key={person.id}>{person.name} {person.number}
                    <button onClick={()=>{deleteEntry(person,deletePerson,setInteractionState)}}>Delete</button></li>
                )
            }
        )}
        </div>
    )
}

export default Persons