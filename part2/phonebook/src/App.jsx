import { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    personService
      .getAllPersons()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
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

      <Persons
        persons={filter === '' ? persons : filteredPersons}
        setPersons={setPersons}
      />
    </div>
  )
}

export default App
