import CountryService from "./axios.config"

export function getAllCountries(){
    return CountryService.get('/all', {
        validateStatus: function (status) {
            return status < 500; 
        }
    });
}

export function getCountriesByRegion(region){
    return  CountryService.get(`/region/${region}`)
}

export function getCountrieByName(country){
    return CountryService.get(`https://restcountries.com/v2/name/${country}`)
}

export function getCountrieByCode(code){
    return CountryService.get(`https://restcountries.com/v2/alpha?codes=${code}`)
}