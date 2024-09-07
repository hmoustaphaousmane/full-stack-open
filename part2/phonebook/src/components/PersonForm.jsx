import { useState } from 'react'
import Input from './Input'

const PersonForm = ({ persons, setPersons }) => {
  console.log('Persons list in PersonForm', persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  // const filteredPersons = []

  const addNewPerson = (event) => {
    event.preventDefault()
    console.log(event.target)

    if ((newName === '') || (newNumber === ''))
      console.log('A name and a phone number are required.')
    else {
      const names = persons.map(person => person.name)
      const numbers = persons.map(person => person.number)
      if (names.includes(newName))
        alert(`${newName} is already added to the phonebook`)
      else if (numbers.includes(newNumber))
        alert(`${newNumber} is already added to the phonebook`)
      else {
        const copy = [...persons]
        console.log('Copy of persons:', copy)
        copy[copy.length] = { name: newName, number: newNumber, id: copy.length + 1 }
        console.log('Copy of persons updated:', copy)
        setPersons(copy)
        setNewName('')
        setNewNumber('')
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
