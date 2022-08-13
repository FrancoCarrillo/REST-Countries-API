import React from 'react'
import { useNavigate } from "react-router-dom";

function Country({ country }) {

    let navigate = useNavigate();

    return (
        <div className="card col-card" onClick={ ()=> { navigate(`../country/${country.name.common}`, { replace: true }); } } >
            <div className='hover-opacity'></div>
            <div className='img-contain'>
                <img src={ country.flags.svg } className="card-img-top" alt={ country.name }/>
            </div>
            <div className="card-body">
                <h5>{ country.name.common }</h5>
                <li>Population: <span>{ country.population }</span></li>
                <li>Region: <span>{ country.region }</span></li>
                <li>Capital: <span>{ country.capital }</span></li>
            </div>
        </div>
    )
}

export default Country
