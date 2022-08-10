//Todo: Add Router Communication
//Todo: Filter by region
//Todo: Search country 

import "./styles/App.scss";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSearch} from "@fortawesome/free-solid-svg-icons";
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
      <div className="action-inputs">
        <div className="input_search">
          <input  list="conutries_list"  type={ "search" } className="form-control" placeholder="Search for a country..."></input>
          <FontAwesomeIcon className="search_icon" icon={ faSearch } />
        </div>
        <select className="custom-select">
          <option>Filter by Region</option>
          <option value={ "Africa" }>Africa</option>
          <option value={ "Americas" }>Americas</option>
          <option value={ "Asia" }>Asia</option>
          <option value={ "Europe" }>Europe</option>
          <option value={ "Oceania" }>Oceania</option>
        </select>
        <datalist id="conutries_list">
        {
          listCountriesName.map(( country )=>{
            return (
              <option value={ country.name }></option>
            )
            
          })
        }
        </datalist>
      </div>
      <ListCountries></ListCountries>
    </div>
  );
}

export default App;
