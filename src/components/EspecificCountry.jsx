import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { getCountrieByName } from '../services/CountryService';

function EspecificCountry() {


    let navigate = useNavigate();
    let countryName = useParams().countryName;

    const [country, setCountry] = useState(null);

    useEffect(() => {
        getCountry()
    },[]);


    function  getCountry() {
        getCountrieByName(countryName)
            .then((response) => {
                if(response.status === 200){
                    setCountry(response.data);
                } 
            })
    }

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
                    <img src='https://flagcdn.com/be.svg' alt=''/>
                </div>
                <div className='right-section'>
                    <div className='country-information'>
                        <h2>Belgica</h2>
                        <div className='information-country'>
                            <div>
                                <li>Native Name: <span>Belgium</span></li>
                                <li>Population: <span>11,35789</span></li>
                                <li>Region: <span>Europe</span></li>
                                <li>Sub Region: <span>Western Europe</span></li>
                                <li>Capital: <span>Brussels</span></li>
                            </div>
                            <div>
                                <li>Top Level Domain: <span>.be</span></li>
                                <li>Currencies: <span>Euro</span></li>
                                <li>Languages: <span>Dutch, French</span></li>
                            </div>
                        </div>
                    </div>
                    <div className='border-countries-section'>
                        <li>Border Countries: </li>
                        <div>France</div>
                        <div>Germany</div>
                        <div>Nertherlands</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EspecificCountry
