import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/personPromise'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [visible, setVisible] = useState([])
  
  useEffect(() => {
      personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        setVisible(response.data)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [search, setSearch ] = useState('')
  const [interactionMessage, setInteractionMessage] = useState('')
  const [success,setSuccess] = useState(true)

  const updateEntries = (updated)=>{
    setPersons(updated)
    setVisible(updated)
    setNewName("")
    setNumber("")
  }

  const deletePerson = (person) =>{
        const updated = persons.filter((entry)=>entry.name !== person.name)
        setPersons(updated)
        setVisible(updated)
  }

  const setInteractionState = (success,message)=>{
    setSuccess(success)
    setInteractionMessage(message)
    setTimeout(() => {
    setInteractionMessage(null)
    }, 5000)
  }

  const handleAddEntry = (event)=>{
    event.preventDefault()
    console.log(visible)

    if(newName === "" || newNumber === ""){
        if(newNumber === ""){
            alert("Fill in the number field!")
        }

        if(newName === ""){
            alert("Fill in the name field!")
        }
    }else{
        let alreadyRegisteredName = persons.find((element)=>element.name === newName)
        let alreadyRegisteredNum = persons.find((element)=>element.number === newNumber)

        if(alreadyRegisteredName){
            if(alreadyRegisteredNum){
                alert(`${newName} is already added to phonebook`)
            }else{
                if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)){
                    let updatedArray = persons.map((person)=> (person.name === 
                        newName)? {...person,number:newNumber}:person)
                    updateEntries(updatedArray)   
                    let newEntry = updatedArray.find((person)=>{return person.name === newName})
                    //update the db.json
                    personService.update(newEntry)
                    setInteractionState(true,`${newEntry.name} has been updated`)
                } 
            }
        }else if(alreadyRegisteredNum){
            alert(`${newNumber} is already taken`)
        }else{
            const person = {
                name: newName,
                number: newNumber,
            }

            personService.create(person)
            .then(response=>{
                updateEntries(persons.concat(response.data))
                setInteractionState(true,`${response.data.name} has been added to server`)
            })
        }
    }
  }

  const handleSearch = (event) =>{
    event.preventDefault()
    if(search === ""){
        persons.forEach((element)=>element.show = true)
    }else{
        persons.forEach((element)=>{
            if(element.name.toLowerCase().includes(search.toLowerCase())){
                element.show = true;
            }else{
                element.show = false;
            }
        })
    }
    setVisible(persons.filter((element)=>element.show))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} search={search} setSearch={setSearch}/>
      <h2>add a new</h2>
      <Notification message={interactionMessage} success={success}/>
      <PersonForm handleAddEntry={handleAddEntry} newName={newName} newNumber={newNumber}
      setNewName={setNewName} setNumber={setNumber}/>
      <h2>Numbers</h2>
      <Persons visible={visible} deletePerson={deletePerson} setInteractionState={setInteractionState}/>
    </div>
  )
}

export default App