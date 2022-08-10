import React from 'react'
import PropTypes from 'prop-types'
import {CountryClass} from '../data/country'

function Country({ country }) {
    return (
        <div className="card col-card">
                <img src={ country.flag } className="card-img-top" alt={ country.name }/>
                <div className="card-body">
                    <h5>{ country.name }</h5>
                    <li>Population: <span>{ country.population }</span></li>
                    <li>Region: <span>{ country.region }</span></li>
                    <li>Capital: <span>{ country.capital }</span></li>
                </div>
            </div>
    )
}

Country.propTypes = {
    country: PropTypes.instanceOf(CountryClass)
}

export default Country
