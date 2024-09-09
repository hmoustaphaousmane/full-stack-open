import { useState } from 'react'

import Display from './Display'

// import Country from './Country'
const Country = ({ country, countries, setFilter, setFilteredCountries }) => {
  const name = country.name.common

  const displayCountry = () => {
    setFilter(name)
    setFilteredCountries(countries.filter(country => country.name.common === name))
    console.log(countries.filter(country => country.name.common === name))
  }

  return (
    <div>
      {name} <button onClick={displayCountry}>show</button>
    </div>
  )
}

const Countries = ({ countries, setFilter, setFilteredCountries }) => {
  return (
    <div>
      {
      countries.map(country =>
        <Country
        key={country.cca2}
        country={country}
        countries={countries}
        setFilter={setFilter}
        setFilteredCountries={setFilteredCountries}
        />)
        }
    </div>
  )
}

export default Countries
