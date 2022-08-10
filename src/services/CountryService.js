import CountryService from "./axios.config"

export function getCountries(){
    return CountryService.get('/', {
        validateStatus: function (status) {
            return status < 500; 
        }
    });
}