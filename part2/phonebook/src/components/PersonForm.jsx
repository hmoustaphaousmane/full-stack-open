import { useState } from 'react'

import Input from './Input'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {
  console.log('Persons list in PersonForm', persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    console.log(event.target)

    if ((newName === '') || (newNumber === ''))
      console.log('A name and a phone number are required.')
    else {
      const names = persons.map(person => person.name)
      const numbers = persons.map(person => person.number)
      if (names.includes(newName)) {
        const confirmation = confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)
        if (confirmation) {
          const person = persons.find(p => p.name === newName)
          console.log('existing', person)
          const changedPerson = { ...person, number: newNumber }

          personService
            .updatePerson(person.id, changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
            })
            .catch(error => {
              alert(error)
              setPersons(persons.filter(p => p.id != person.id))
            })
        }
      }
      else if (numbers.includes(newNumber)) {
        alert(`${newNumber} is already added to the phonebook`)
      }
      else {
        const newObject = {
          name: newName,
          number: newNumber,
          id: String(persons.length + 1)
        }

        personService
          .createPerson(newObject)
          .then(returnedPerson => {
            console.log('added:', returnedPerson)
            setPersons(persons.concat(returnedPerson))

            setNewName('')
            setNewNumber('')
          })
      }
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (

    <div>
      <form onSubmit={addNewPerson}>
        <div>
          name: <Input value={newName} handler={handleNameChange} />
        </div>
        <div>
          number: <Input value={newNumber} handler={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
