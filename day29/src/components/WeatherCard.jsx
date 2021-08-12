import { useSelector } from "react-redux";

export default function WeatherCard() {
  const data = useSelector((state) => state.data);
  const darkMode = useSelector((state) => state.theme);
  return (
    <div className="weather offset-md-4 col-12 col-md-4">
      <div className={darkMode ? "card card-dark" : "card"}>
        {data.location ? (
          <div>
            <img src={data.current.condition.icon} alt="" />
            <div className="temp">{data.current.temp_c}°</div>
            <div className="place">{data.location.name}</div>
            <div className="condition">{data.current.condition.text}</div>
            <div className="container more_details">
              <div className="row">
                <div className="col">
                  <div className="title">Wind Speed</div>
                  <div className="data">
                    {data.current.wind_kph}
                    <span className="unit">kmph</span>
                  </div>
                </div>
                <div className="col">
                  <div className="title">Humidity</div>
                  <div className="data">
                    {data.current.humidity}
                    <span className="unit">%</span>
                  </div>
                </div>
                <div className="col">
                  <div className="title">Precipitation</div>
                  <div className="data">
                    {data.current.precip_mm}
                    <span className="unit">mm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </div>
  );
}
