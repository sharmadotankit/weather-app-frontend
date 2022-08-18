import './FetchWeather.css';

export default function FetchWeather(props) {
    const { data } = props;
    return (
        <div className="container">
            <div className='city-card'>
                <div>
                    {data.current.temp_c ? (<h1 className="temp">{data.current.temp_c}&#8451;</h1>) : null}
                    {data.current.condition.icon ? (<img alt='weather-icon' src={data.current.condition.icon} />) : null}
                    <br />
                    {data.current.condition.text}


                </div>
                <div>
                    <h2 id='city-name'>{data.location.name}</h2>
                    <h3>State : {data.location.region}</h3>
                    <h3>Country : {data.location.country}</h3>
                    <h3>Timezone: {data.location.tz_id}</h3>
                </div>
            </div>

            <div>
                <table className="detailTable" >
                    <tbody>
                        <tr>
                            <td>
                                <h3>Humidity</h3>
                            </td>
                            <td>
                                <span>{data.current.humidity} %</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 >Visibility</h3>
                            </td>
                            <td>
                                <span>{data.current.vis_km} km</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 >Pressure</h3>
                            </td>
                            <td>
                                <span>{data.current.pressure_mb} mb</span>
                            </td>
                        </tr>
                        <tr>
                            <td ><h3>Wind</h3></td>
                            <td>
                                <span>{data.current.wind_kph} km/hr
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 >Wind-Direction</h3>
                            </td>
                            <td>
                                <span>{data.current.wind_dir} </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
