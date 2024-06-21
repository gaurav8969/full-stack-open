import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'
const weatherBaseUrl = `http://api.weatherapi.com/v1/current.json?key=`

const getAll = ()=>{
    return axios.get(`${baseUrl}/api/all`)
    .then(response=> {
        return response.data;
    })
    .catch((error)=>{
        console.error('Error fetching countries:', error);
        return [];
    })
}

const getCountry = (country) =>{
    if(!country)return;

    const data = axios.get(`${baseUrl}/api/name/${country}`).
    then(response=> {
        return response.data
    });
    
    return data;
}

const getWeather = (country,apikey)=>{
    return axios.get(`${weatherBaseUrl}${apikey}&q=${country.capital}&aqi=no`)
    .then((response)=>response.data)
}

export default {
    getAll,
    getCountry,
    getWeather
}