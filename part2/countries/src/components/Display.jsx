import axios from 'axios'
import { useState } from 'react'

const Display = ({ country }) => {
  const name = country.name.common
  const area = country.area
  const capital = country.capital[0]
  const languages = Object.entries(country.languages)

  const api_key = import.meta.env.VITE_WEATHER_API_KEY
  const [lat, lon] = country.capitalInfo.latlng
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
  // const url = `https://api.openweathermap.org/data/2.5/find?q=${capital}&appid=${api_key}`
  const [temperature, setTemperature ] = useState(0)
  const [icon, setIcon ] = useState(0)
  const [wind, setwind ] = useState(0)

  const weather = axios
    .get(url)
    .then(response => {
      setTemperature((response.data.main.temp - 272.15).toFixed(2))
      setIcon('https://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@2x.png')
      setwind(response.data.wind.speed)
})

  return (
    <div>
      <h2>{name}</h2>
      capital {capital} <br />
      area {area}
      <h3>languages</h3>
      <ul>
        {languages.map(language => <li key={language[0]}>{language[1]}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Weather in {name}</h2>
      temperature {temperature} Celcius <br />
      <img src={icon} alt="weather-icon" /> <br />
      wind {wind} m/s
    </div>
  )
}

export default Display
