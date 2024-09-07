import { useState, useEffect } from 'react'
import axios from 'axios'

import Input from './components/Input'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fullfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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
