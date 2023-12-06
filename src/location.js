
import React from 'react'
import axios from 'axios'

const API_endpoint =`https://api.openweathermap.org/data/2.5/weather?`
const API_key =`44f2ac4c19aac0619be1e030f1629f1d`

const App = () => {
  const [latitude, setLatitude]= React.useState('')
  const [longitude, setLongitude]= React.useState('')
  const [responseData,setResponseData] = React.useState({})
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((Position) => {
      setLatitude(Position.coords.latitude)
      setLongitude(Position.coords.longitude)

    })

    axios.get(`${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`)
    .then((response)=>{
      setResponseData(response.data)
    })
    
  }, [latitude,longitude])
  
  return (
    <div className="App">
      <hi>{responseData.name}</hi>

    </div>
  )
}

export default App