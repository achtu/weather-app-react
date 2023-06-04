import "./App.css";
import React from "react";
import Form from "./components/Form";
import Info from "./components/Info";
import Weather from "./components/Weather";
import Header from "./components/Header";

const API_KEY = "f1cb380c1c026f0fa6c4898675e1a3ca";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date =
        date.getHours() + ":" + date.getMinutes();
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunset: sunset_date,
        error: "",
      });
    }else{
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunset: undefined,
        error: "Enter city name",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Form weatherMethod={this.gettingweather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunset={this.state.sunset}
          error={this.state.error}
        />
        <Info />
      </div>
    );
  }
}

export default App;
