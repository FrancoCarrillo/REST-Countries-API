import React, { useEffect, useState } from 'react'
import { getCountries } from '../services/CountryService';
import Country from './Country'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";

function ListCountries(props) {

    const [listCountries, setListCountries] = useState([]);

    useEffect(() => {
        getAllCountries();
    });

    const getAllCountries = () => {
        getCountries()
            .then((response) => {
                if(response.status === 200) 
                setListCountries(response.data);
            })
    }

    return (
        <div className='list-countries'>

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
                    listCountries.map(( country )=>{
                    return (
                        <option value={ country.name }></option>
                    )
                        
                })
                }
                </datalist>
            </div>
            {
                listCountries.map((country, index) => {
                    return (
                        <Country key={ index } country={ country }></Country>
                    )
                })
            }
        </div>
    )
}


export default ListCountries
