import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCountrieByCode } from '../services/CountryService';

const BorderCountry = ({ border }) => {

    const navigate = useNavigate();
    const [countryName, setCountryName] = useState("");

    useEffect(() => {
        getCountrieByCode(border)
            .then((response)=>{
                setCountryName(response.data[0])
            })

    }, [border]);

    return (
        <div onClick={ ()=> { navigate(`../country/${countryName.name}`, { replace: false }); } }>
            { countryName?.translations?.es }
        </div>
    );
}

export default BorderCountry;
