import { useRouter } from "next/router";

function Weather_One({ data, city }) {
    const router = useRouter()
    const currentDate = new Date().toLocaleDateString()
    const handleClick = () => {
        router.push(`/weather/${city}`);
    }
  return (
    <>
      <center>
        <img className="icon" src={data.weather_icons} alt="" />
      </center>
      <center>
        <h2>{city}</h2>
        <div onClick={handleClick} className="box-weather">
          <span>Today, {currentDate}</span>
          <div className="gradus">
            <h2>{data.temperature}°</h2>
          </div>
          <div className="flex">
            <div className="item">
              <img src="/images/windy.png" alt="Wind Icon" />
              <span>Wind</span>
              <span>|</span>
              <h4>{data.wind_speed} km/h</h4>
            </div>
            <div className="item">
              <img src="/images/hum.png" alt="Humidity Icon" />
              <span>Hum</span>
              <span>|</span>
              <h4>{data.humidity} %</h4>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Weather_One;
