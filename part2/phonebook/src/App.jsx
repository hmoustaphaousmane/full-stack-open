import { useState } from 'react'
import Input from './components/Input'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
      filter={filter}
      setFilter={setFilter}
      persons={persons}
      setFilteredPersons={setFilteredPersons}
      />

      <h2>Add a new</h2>

      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>

      <Persons persons={
        filter === '' ? persons : filteredPersons
      } />
    </div>
  )
}

export default App
