import React from 'react'
import Country from './Country'

function ListCountries(props) {

    const listCountries = [ 
        { name: "Peru", capital: "Lima", region: "Americas", population: 80000, flag: 'https://flagcdn.com/pe.svg'  },
        { name: "Peru", capital: "Lima", region: "Americas", population: 80000, flag: 'https://flagcdn.com/pe.svg'  },
        { name: "Peru", capital: "Lima", region: "Americas", population: 80000, flag: 'https://flagcdn.com/pe.svg'  },
        { name: "Peru", capital: "Lima", region: "Americas", population: 80000, flag: 'https://flagcdn.com/pe.svg'  },
        { name: "Peru", capital: "Lima", region: "Americas", population: 80000, flag: 'https://flagcdn.com/pe.svg'  },
    ]

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
