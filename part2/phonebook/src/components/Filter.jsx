import { useState } from 'react'
import Input from './Input'

const Filter = ({ filter, setFilter, persons, setFilteredPersons }) => {
  console.log('Filter component\'s props:', { filter, setFilter, setFilteredPersons })
  // const [filter, setFilter] = useState('')

  const filterPersons = (filter, persons) =>
    persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )

  const handleFilterChange = (event) => {
    const filter = event.target.value
    console.log(filter)
    setFilter(filter)
    setFilteredPersons(filterPersons(filter, persons))
  }

  return (
    <div>
      Filter
        filter shown with <Input value={filter} handler={handleFilterChange} />
      </div>
  )
}

export default Filter
