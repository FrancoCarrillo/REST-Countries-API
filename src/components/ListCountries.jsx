import React, { useEffect, useState } from 'react'
import { getCountries } from '../services/CountryService';
import Country from './Country'

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
