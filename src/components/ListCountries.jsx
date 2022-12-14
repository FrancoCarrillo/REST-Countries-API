import React, { useEffect, useState, useRef,} from 'react'
import { getAllCountries, getCountriesByRegion } from '../services/CountryService';
import Country from './Country'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function ListCountries() {

    const [listCountries, setListCountries] = useState([]);
    const refSelect = useRef(null)
    const refInput = useRef(null)
    let navigate = useNavigate();

    useEffect(() => {
        getAllCountries_();
    }, []);

    function  getAllCountries_() {
        getAllCountries()
            .then((response) => {
                if(response.status === 200) 
                setListCountries(response.data);
            })
    }

    const filterCountriesByRegion = () => {
        getCountriesByRegion(refSelect.current.value)
            .then((response)=>{
                if(response.status === 200) setListCountries(response.data)
            })
    }

    const goCountry = (e) => {
        if(e.key === 'Enter') {
            navigate(`../country/${refInput.current.value}`, { replace: true });
        }
    }

    return (
        <div className='list-countries'>

            <div className="action-inputs">
                <div className="input_search">
                    <input onKeyDown={ goCountry } ref={ refInput } list="conutries_list"  type={ "search" } className="form-control" placeholder="Search for a country..."></input>
                    <FontAwesomeIcon className="search_icon" icon={ faSearch } />
                </div>
                <select className="custom-select" ref={ refSelect } onChange={ filterCountriesByRegion }>
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
                        <option value={ country.name.common }></option>
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
