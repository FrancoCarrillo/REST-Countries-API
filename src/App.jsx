import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';

import "./styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import ListCountries from "./components/ListCountries";
import EspecificCountry from "./components/EspecificCountry";

function App() {

  const [mode, setMode] = useState("light");

  const changeMode = (e) => {
    switch (mode) {
      case 'light':
        setMode('dark')
        break;
    
      case 'dark':
        setMode('light')
        break;
      
      default:
        break;
    }
  }

  return (
    <div id={ mode }>
      <header>
        <h1>Where in the world?</h1>
        <span  onClick={ changeMode }>
          <FontAwesomeIcon className="header_icon" icon={ mode==='dark' ? faMoon : faSun } />
          { mode[0].toUpperCase() + mode.substring(1)} Theme
        </span>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={ <ListCountries/> }></Route>
          <Route path="*" element={ <Navigate to='/'/> }></Route>
          <Route path="/country/:countryName" element={ <EspecificCountry/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
