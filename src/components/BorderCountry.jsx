import React, { useEffect, useState } from 'react';
import { getCountrieByCode } from '../services/CountryService';

const BorderCountry = ({ border }) => {

    const [countryName, setCountryName] = useState("");

    useEffect(() => {
        getCountrieByCode(border)
            .then((response)=>{
                setCountryName(response.data[0].nativeName)
            })

    }, [border]);

    return (
        <div>
            { countryName }
        </div>
    );
}

export default BorderCountry;
