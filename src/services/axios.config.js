import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://restcountries.com/v2/all',
        responseType: 'json',
        timeout: 6000
    }

)