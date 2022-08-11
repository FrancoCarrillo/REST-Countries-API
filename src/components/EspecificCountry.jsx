import React from 'react'
import { useParams } from 'react-router-dom'

function EspecificCountry(props) {

    let countryName = useParams().countryName;

    return (
        <div>{ countryName }</div>
    )
}

EspecificCountry.propTypes = {}

export default EspecificCountry
