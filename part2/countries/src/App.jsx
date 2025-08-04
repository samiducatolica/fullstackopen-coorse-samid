import {useState, useEffect} from 'react'
import countriServices from "./services/countriServices.js";
import weatherServices from "./services/weatherServices.js";


const CountriList = ({search, countries, handleButton}) => {
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
            // console.log('filteredCounties', filterdCounties);
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
                                <button onClick={() => handleButton(country)}>Show</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else if (filterdCounties.length === 1) {
            const country = filterdCounties[0];
            return (
                <div>
                    <CountriInfo country={country}/>
                </div>
            )
        }
    }
}

const CountriInfo = ({country}) => {
    // console.log(country)
    return (
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
            <h2>Weather in {country.capital[0]}</h2>
            <WeatherInfo city={country.capital[0]}/>
        </div>
    )
}

const WeatherInfo = ({city}) => {
    const [temperature, setTemperature] = useState(null);
    const [wind, setWind] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        if(!city) return;
        weatherServices.getWeatherCity(city)
            .then(weather => {
                console.log('Weather data:', weather);
                setTemperature((weather.main.temp- 273.15).toFixed(2)); // Convert Kelvin to Celsius
                setWind(weather.wind.speed);
                setIcon(weather.weather[0].icon);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, [city]);

    return (
        <div>
            {temperature !== null
                ? <p>Temperatura: {temperature} °C</p>
                : <p>Cargando temperatura...</p>
            }
            {icon &&
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                     alt={`weather icon for ${city} city`}
                />
            }
            {wind !== null
                ? <p>Viento: {wind} m/s</p>
                : <p>Cargando viento...</p>
            }
        </div>
    );


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
    const handleButton = (country) => {
        setSearch(country.name.common);
        document.getElementById('countri').value = country.name.common;
    }

    return (
        <>
            <div>
                <h1>Countri Info</h1>
                <label htmlFor="countri">find countries: </label>
                <input id="countri" type="text" onChange={handleChangue}/>
            </div>
            <div>
                <CountriList search={search} countries={countriList} handleButton={handleButton}/>
            </div>
        </>
    )
}

export default App
