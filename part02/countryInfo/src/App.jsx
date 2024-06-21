import { useState, useEffect } from 'react'
import CountryInfo from './services/countryInfo'
import CountryBoard from './components/CountryBoard'

function App() {
    const [allCountries, setCountries] = useState([])
    const[countryName, setCountryName] = useState('')
    const[matching, setMatching] = useState([])
    
    useEffect(()=>{
        CountryInfo.getAll().then(data =>{
            setCountries(data)
        })
    },[])
    
    const queryCountry = ()=>{
        const matches = allCountries.filter
        ((country)=>country.name.common.toLowerCase().includes(countryName.toLowerCase()))
        setMatching(matches)
    }

    useEffect(() => {
        if(countryName){
            queryCountry()
        }else{
            setMatching(allCountries)
        }
    }, [countryName, allCountries])

    return (
    <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
                Find countries: <input value={countryName} onChange={(e)=>{
                    setCountryName(e.target.value)
                }}/>
            </div>
        </form>
        <CountryBoard countries={matching}/>
    </>
    )
}

export default App