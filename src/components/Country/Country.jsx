
import { useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    console.log(country);
    const { name, flags, population, area } = country
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <h3>name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>population : {population} </p>
            <p>area : {area}</p>
            <p> <small>code : {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>markup visit </button>
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'} </button>
            {
                visited ? ' i have visited this country ' : ' i want visit this country'
            }
        </div>
    );
    };

    


    export default Country;