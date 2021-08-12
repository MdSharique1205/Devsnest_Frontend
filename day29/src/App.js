import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import Form from "./components/Form";
import ThemeButton from "./components/ThemeButton";
import { useSelector } from "react-redux";

function App() {
  // const [place, setPlace] = useState("Bhilai");
  // const [data, setData] = useState({});
  // const fetchAPI = () => {
  //   fetch(
  //     `http://api.weatherapi.com/v1/current.json?key=eb56638403994750a7f203334211108&q=${place}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // };
  const darkMode = useSelector((state) => state.theme);
  return (
    <div className={darkMode ? "App-dark" : "App"}>
      <div className="container">
        <div className="row">
          <ThemeButton />
          <Form />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}

export default App;
