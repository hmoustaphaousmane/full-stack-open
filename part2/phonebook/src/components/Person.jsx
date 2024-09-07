import { useState, useEffect } from 'react'

import personService from '../services/persons'

const Person = ({ person, persons, setPersons }) => {

  const [personIdToDelete, setPersonIdToDelete] = useState(null)

  const handleDelete = (personId) => {
    setPersonIdToDelete(personId)
    personService
      .deletePerson(personId)
  }

  useEffect(() => {
    if (personIdToDelete) {
      // Remove the persion from the local state
      setPersons(persons.filter((persion) => persion.id !== personIdToDelete))
      setPersonIdToDelete(null)
    }
  }, [personIdToDelete, persons])

  const confirmDeletion = (id) => {
    personService
      .getPerson(id)
      .then(response => {
        const confirmation = confirm(`Delete ${response.name} ?`)
        if (confirmation)
          handleDelete(id)
        else
        console.log('Deletion aborted')
      })
  }

  return (
    <div>
      {person.name} {person.number}
      <button onClick={() => confirmDeletion(person.id)}>delete</button>
    </div>
  )
}
export default Person
