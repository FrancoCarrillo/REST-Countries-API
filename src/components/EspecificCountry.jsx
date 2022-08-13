import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { getCountrieByName } from '../services/CountryService';
import BorderCountry from './BorderCountry';

function EspecificCountry() {


    let navigate = useNavigate();
    const countryName = useParams().countryName;

    const [country, setCountry] = useState([]);

    
    useEffect( () => {
        getCountrieByName(countryName)
            .then((response) => {
                if(response.status === 200){
                    setCountry( response.data[0]);
                } 
            })
    }, [countryName]);


    

    return (
        <div className='especific-information-country-section'>
            <div className='action-section'>
                <div className="btn-back" onClick={ ()=> { navigate(`../}`, { replace: true }); }}> 
                    <FontAwesomeIcon className='arrow-icon' icon={ faArrowLeft }></FontAwesomeIcon>
                    <p>Back</p>
                </div>
            </div>
            <div className='especific-information-section'>
                <div className='country-image'>
                    <img src={ country?.flags?.svg } alt={ country[0]?.name }/>
                </div>
                <div className='right-section'>
                    <div className='country-information'>
                        <h2>{ country[0]?.name }</h2>
                        <div className='information-country'>
                            <div>
                                <li>Native Name: { country?.nativeName }
                                </li>
                                <li>Population: <span>{ country?.population }</span></li>
                                <li>Region: <span>{ country?.region }</span></li>
                                <li>Sub Region: <span>{ country?.subregion }</span></li>
                                <li>Capital: <span>{ country?.capital }</span></li>
                            </div>
                            <div>
                                <li>Top Level Domain: <span>{ country?.topLevelDomain }</span></li>
                                <li>Currencies: <span>{ country?.currencies && country?.currencies[0].name }</span></li>
                                <li>Languages: {
                                    country?.languages && country?.languages.map((language) => {
                                        return <span>{language.name}{ country.languages.length === 1 ? " " : ", " }</span>
                                    })
                                }</li>
                            </div>
                        </div>
                    </div>
                    <div className='border-countries-section'>
                        <li>Border Countries: </li>
                        {
                            country?.borders && country?.borders.map((border, index)=>{
                                return (
                                        <BorderCountry key={ index } border={ border }></BorderCountry>
                                    )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EspecificCountry
