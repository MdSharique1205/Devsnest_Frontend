import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [place, setPlace] = useState("Bhilai");
  const [data, setData] = useState({});
  const fetchAPI = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=eb56638403994750a7f203334211108&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                fetchAPI();
              }}
            >
              Submit{" "}
            </button>
          </div>
          <div className="weather offset-md-4 col-12 col-md-4">
            <div className="card">
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
        </div>
      </div>
    </div>
  );
}

export default App;
