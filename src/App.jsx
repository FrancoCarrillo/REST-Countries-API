//Todo: Add Router Communication
//Todo: Filter by region
//Todo: Search country 

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import "./styles/App.scss";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon} from "@fortawesome/free-solid-svg-icons";
import ListCountries from "./components/ListCountries";
import { getCountries } from './services/CountryService';

function App() {

  const [listCountriesName, setListCountriesName] = useState([]);

    useEffect(() => {
        getAllCountries();
    });

    const getAllCountries = () => {
        getCountries()
            .then((response) => {
                if(response.status === 200) setListCountriesName(response.data);
            })
    }

  return (
    <div>
      <header>
        <h1>Where in the world?</h1>
        <a href="/">
          <FontAwesomeIcon className="header_icon" icon={ faMoon } />
          Dark Mode
        </a>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={ <ListCountries/> }></Route>
          <Route path="*" element={ <Navigate to='/'/> }></Route>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
