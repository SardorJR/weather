function Weather_ID({ data, city }) {
  return (
    <>
      <div className="wrap">
        <div className="left">
          <img src="/images/up.png" alt="" />
        </div>
        <div className="betwen">
          <p>Today</p>
          <p>{currentDate}</p>
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
