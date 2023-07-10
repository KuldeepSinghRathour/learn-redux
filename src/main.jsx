import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main_Horse_Profile from './Equi5/profileHorse/Main_Horse_Profile.jsx'
import ToggleButton from './Equi5/profileHorse/ToggleButton.jsx'
// import Form1 from './components/Form1.jsx'
// import Display_profile from './Equi5/profileHorse/Display_profile.jsx'
// import Horse_Details from './Equi5/profileHorse/Horse_Details.jsx'
// import HorseProfile from './Equi5/Horse_Profile.jsx'
import { Provider } from 'react-redux'
import store from './reducer/Store.js'
// import Togler from './components/Togler.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Form1 /> */}
    {/* <HorseProfile /> */}
    {/* <Display_profile />
    <Horse_Details/> */}
    {/* <ToggleButton /> */}
   <Main_Horse_Profile  />
   {/* <Provider store={store}>
   </Provider> */}
    {/* <App /> */}
   {/* <Togler/> */}
  </React.StrictMode>,
)
