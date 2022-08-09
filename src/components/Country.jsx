import React from 'react'
import PropTypes from 'prop-types'

function Country(props) {
    return (
        <div className="card col-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" className="card-img-top" alt="favicon"/>
                <div className="card-body">
                    <h5>Peru</h5>
                    <li>Population: <span>81.770.900</span></li>
                    <li>Region: <span>Europa</span></li>
                    <li>Capital: <span>Lima</span></li>
                </div>
            </div>
    )
}

Country.propTypes = {}

export default Country
