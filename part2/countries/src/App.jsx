import {useState, useEffect} from 'react'
import countriServices from "./services/countriServices.js";


const CountriList = ({search, countries}) => {
    //Mas de 10 paises mensaje Too many matches, specify another filter
    // Menos de 10 paises mostrar los paises mas de uno mostrar los paises en una lista
    // Si hay un solo pais mostrar los datos del pais(nombre, capital, area, bandera, poblacion, lenguajes)
    if (!search) {
        return (
            <div>
                <p>Ingrese un pais para iniciar la busqueda.</p>
            </div>
        )
    } else {
        const filterdCounties = countries.filter(e => e.name.common.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        if (filterdCounties.length > 10) {
            console.log('filteredCounties', filterdCounties);
            return (
                <div>
                    <p>Too many matches, specify another filter.</p>
                    <p>Cantidad de paises total {filterdCounties.length}</p>
                </div>
            )
        } else if (filterdCounties.length > 1 && filterdCounties.length <= 10) {
            return (
                <div>
                    <ul>
                        {filterdCounties.map((country) => (
                            <li key={country.cca3}>
                                {country.name.common}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else if (filterdCounties.length === 1) {
            const country = filterdCounties[0];
            console.log('country', country);
            return(
                <div>
                    <h1>{country.name.common}</h1>
                    <p>Oficial Name: <strong>{country.name.official}</strong></p>
                    <p>capital: {country.capital[0]}</p>
                    <p>area: {country.area} Km</p>
                    <h2>Languages</h2>
                    <ul>
                        {Object.values(country.languages).map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                    <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="200"/>

                </div>
            )
        }
    }
}

function App() {
    const [countriList, setcountriList] = useState(null)
    const [search, setSearch] = useState('')


    useEffect(() => {
        //consultar la API de Rest Countries
        countriServices.getAll()
            .then(coutri => {
                    setcountriList(coutri)
                }
            )
    }, [])

    const handleChangue = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
            <div>
                <h1>Countri Info</h1>
                <label htmlFor="countri">find countries: </label>
                <input id="countri" type="text" onChange={handleChangue}/>
            </div>
            <div>
                <CountriList search={search} countries={countriList}/>
            </div>
        </>
    )
}

export default App
