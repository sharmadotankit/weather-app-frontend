import { useNavigate } from 'react-router-dom';
import FetchWeather from '../../component/FetchWeather/FetchWeather';
import { useState, useEffect } from 'react';
import API_KEY from './API_KEY';
import './weather.css';
import { connect } from 'react-redux';
import { updateCount } from '../../actions';
import Cookies from 'universal-cookie';

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.loadUserOnSignIn.loggedInUser,
        isSignedIn: state.loadUserOnSignIn.isSignedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStateOnCountChange: (user) => dispatch(updateCount(user))
    }
}


function Weather(props) {
    const { isSignedIn, loggedInUser, updateStateOnCountChange } = props;
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');
    const [callCount, setCallCount] = useState(0);
    const navigate = useNavigate();
    const cookies = new Cookies();


    // const weatherData = fetchWeatherCall(city);

    // const weatherData = useMemo(() => {
    //     return fetchWeatherCall(city)
    // }, [city]);

    // const fetchWeatherCall = (city) => {
    //     return fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    //         .then(response => response.json())
    // }

    //  Referential Equality is second use case of use Memo



    // const getWeather =() => {
    //     return [a,a+1,a+2];
    // }

    // <DisplayNumber getWeather={getWeather} />


    // const getWeather = useCallBack(() => {
    //     return [a, a + 1, a + 2];
    // }, [a]);





    useEffect(() => {
        if (!isSignedIn) {
            navigate("/signin");
        }
        setCallCount(0);

    }, [isSignedIn, navigate])


    const fetchWeather = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setWeather(data)
                setCallCount(callCount + 1);
            })
    };


    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleFindWeather = (e) => {
        e.preventDefault();
        const authToken = cookies.get('authToken');

        fetch("http://localhost:5000/counter", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: JSON.stringify({
                id: loggedInUser.id
            })
        })
            .then(response => response.json())
            .then(count => {
                if (count === 'Forbidden') {
                    alert('You are not authorized to make this request!');
                } else {
                    fetchWeather();
                    const newState = Object.assign({}, loggedInUser);
                    newState.count = count;
                    updateStateOnCountChange(newState);
                }
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
                        <input type="submit" value="Find Weather " onClick={handleFindWeather} />
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


export default connect(mapStateToProps, mapDispatchToProps)(Weather);