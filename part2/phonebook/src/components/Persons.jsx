import { useState, useEffect } from 'react'

import Person from './Person'
import personService from '../services/persons'


const Persons = ({ persons, setPersons }) => {

  return (
    <div>{
      persons.map(person => <Person
        key={person.id}
        person={person}
        persons={persons}
        setPersons={setPersons}
      />)
    }
    </div>
  )
}

export default Persons
