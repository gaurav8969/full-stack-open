import { useState, useEffect} from 'react'
import CountryInfoService from '../services/countryInfo'

const Country = ({country})=>{
    const [expanded, setExpanded] = useState(false)
    const [weather, setWeather] = useState(null)

    const toggleExpanded = ()=>{
        setExpanded(!expanded);
    }

    //fetch latest data on every expand/collapse
    useEffect(()=>{
        if(expanded){
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY
            CountryInfoService.getWeather(country,apiKey)
            .then((response)=> setWeather(response))
            .catch((error)=>console.log('Error fetching weather: ', error));
        }
    },[expanded])

    if(expanded){
        const languages = Object.values(country.languages);
        
        return (
            <>
                <h2>{country.name.common}</h2>
                <button onClick={toggleExpanded}>{expanded ? 'Collapse' : 'Expand'}</button>
                <p>Capital- {country.capital}</p>
                <p>Area- {country.area}</p>
                <h3>languages:</h3>
                <ul>{
                    languages.map((language)=>{
                        return(<li key={language}>{language}</li>)
                    })
                }
                </ul>
                <br/>
                <img src={country.flags.png} style={{width:'200px',height:'200px'}}/>

                {weather?(
                    <>
                        <h3>Weather in {country.capital}</h3>
                        <p>Wind {weather.current.wind_kph} KM/H</p>
                        <div>Temperature {weather.current.temp_c}℃</div>
                        <img src={weather.current.condition.icon}></img>
                    </>
                ):(
                    <p>Loading weather...</p>
                )}
                

            </>
        )
    }else{
        return (
            <li key={country.name.official}>
                {country.name.common} <button onClick={toggleExpanded}>{expanded ? 'Collapse' : 'Expand'}</button>
            </li>
        )
    }
    
}

export default Country