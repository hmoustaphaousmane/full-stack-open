import { useState, useEffect } from 'react'
import axios from 'axios'

import getAll from './services/country'
import Countries from './components/Countries'
import Display from './components/Display'

const Filter = ({ filter, heandleFilter }) =>
  <div>
    find countries <input value={filter} onChange={heandleFilter} />
  </div>

const App = () => {
  // const api_key = process.env.REACT_APP_WEATHER_API_KEY
  // const api_key = import.meta.env.OPEN_WEATHER_API_KEY

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    console.log('fetching countries...')
    getAll()
      .then(initialCountries => {
        console.log('promise fulfilled')
        setCountries(initialCountries)
      })
  }, [])

  const filterCountries = (filter, countries) =>
    countries.filter(country =>
      country.name.common.toLowerCase().includes(filter.toLowerCase()))

  const heandleFilterChange = (event) => {
    const filter = event.target.value
    setFilter(filter)
    setFilteredCountries(filterCountries(filter, countries))
  }

  if (filteredCountries.length > 10)
    return (
      <div>
        <Filter filter={filter} heandleFilter={heandleFilterChange} />
        Too many matches, specify another filter
      </div>
    )
  else if (filteredCountries.length > 1 && filteredCountries.length < 10)
    return (
      <div>
        <Filter filter={filter} heandleFilter={heandleFilterChange} />
        <Countries
          countries={filteredCountries}
          setFilter={setFilter}
          setFilteredCountries={setFilteredCountries}
          // filterCountries={filterCountries}
        />
      </div>
    )
  else if (filteredCountries.length === 1)
    return (
      <div>
        <Filter filter={filter} heandleFilter={heandleFilterChange} />
        <Display country={filteredCountries[0]} />
      </div>
    )

  return (
    <div>
      find countries <input value={filter} onChange={heandleFilterChange} />
    </div>
  )
}

export default App