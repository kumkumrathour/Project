import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import WeatherMain from './WeatherMain'
// import AppMain from './AppMain'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppMain/> */}
    <WeatherMain/>
  </React.StrictMode>,
)
