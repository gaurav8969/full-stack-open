import Country from './Country'

const CountryBoard = ({countries})=>{
    if (!Array.isArray(countries) || countries.length === 0) {
        return null;
    }

    return(
        <ul>
            {
              countries.map((country)=>{
                return(<Country key={country.cca3} country={country}/>)
              })
            }
        </ul>
    )
}

export default CountryBoard