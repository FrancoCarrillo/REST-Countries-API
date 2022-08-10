import React from 'react'

function Country({ country }) {
    return (
        <div className="card col-card">
                <div className='img-contain'>
                    <img src={ country.flags.svg } className="card-img-top" alt={ country.name }/>
                </div>
                <div className="card-body">
                    <h5>{ country.name }</h5>
                    <li>Population: <span>{ country.population }</span></li>
                    <li>Region: <span>{ country.region }</span></li>
                    <li>Capital: <span>{ country.capital }</span></li>
                </div>
            </div>
    )
}

export default Country
