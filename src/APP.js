import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '397100af4387af1846972ec6d0c3ab52';
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  fetchWeather = async (e) => {
    const CITY = e.target.elements.city.value;
    const COUNTRY = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }
  render() {
    const { temperature, city, country, description, error, humidity } = this.state
    return(
      <React.Fragment>
        <Title />
        <Form fetchWeather={ this.fetchWeather }/>
        <Weather
        temperature={ temperature }
        city={ city }
        country={ country }
        description={ description }
        error={ error }
        humidity={ humidity }
        />
      </React.Fragment>
    )
  }
}

export default App;
