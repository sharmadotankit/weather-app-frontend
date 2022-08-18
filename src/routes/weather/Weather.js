import { Link } from 'react-router-dom';
import FetchWeather from '../../component/FetchWeather/FetchWeather';
import { useState, useEffect } from 'react';
import API_KEY from '../../API_KEY';
import './weather.css';

export default function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');
    const [callCount, setCallCount] = useState(0);
    const userid = 2;

    useEffect(() => {
        setCallCount(0);
    }, [])


    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleFindWeather = () => {

        fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                setWeather(data)
                setCallCount(callCount + 1);
            })

        fetch("http://localhost:5000/counter", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: userid
            })
        })
            .then(response => response.json())
            .then(count => {
                console.log(count);
            }).catch(err => console.log(err));
    }

    return (
        <div className="weather-form">
            <div className="title">Weather</div>
            <div className="form">
                <form >
                    <div className="input-container">
                        <input
                            type="text"
                            name="city"
                            required
                            placeholder='Enter city '
                            onChange={handleCityChange}
                        />
                    </div>

                    <div className="button-container">
                        <Link to='/weather'>
                            <input type="submit" value="Find Weather " onClick={handleFindWeather} />
                        </Link>
                    </div>
                </form>
            </div>

            {
                !weather.error && weather.length !== 0 ?
                    <FetchWeather data={weather} />
                    : callCount > 0 ? <div className='errorDiv'>
                        Enter valid city
                    </div> : null
            }


        </div>
    )
}
