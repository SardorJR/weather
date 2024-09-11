import axios from 'axios';

const apiKey = "882ed5c0d4edb9d485e60c8cb9caf319";

export async function getServerSideProps(context) {
    const { id } = context.query
    let data = null;

    try {
        const res = await axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${id}`);
        data = res.data.current;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

    return {
        props: { data, id }
    };
}

function Weather_ID({ data, id }) {
    return (
        <>
            <div className="wrap">
                <div className="left">
                    <img src="/images/up.png" alt="" />
                </div>
                <div className="betwen">
                    <p>Today</p>
                    <p>{new Date().toLocaleDateString()}</p>
                </div>
                <div className="flex-box">
                    {data.hourly.map((item, index) => (
                        <div className="item-flex" key={index}>
                            <span>{item.temperature}°C</span>
                            <img src={item.weather_icon} alt="" />
                            <p>{item.time}</p>
                        </div>
                    ))}
                </div>
                <div className="betwen" style={{ paddingBlock: "70px 0" }}>
                    <p>Next Forecast</p>
                    <p>Forecast</p>
                </div>
                <div className="flex-t">
                    {data.next_days.map((item, index) => (
                        <div className="elem" key={index}>
                            <span>{item.date}</span>
                            <img src={item.weather_icon} alt="" />
                            <p>{item.temperature}°</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Weather_ID;