import React, { Component } from 'react';

class Weather extends Component {

  render() {
    const { temperature, city, humidity, description, country } = this.props
    return(
      temperature === undefined ?
      <h1>please enter a valid city and country</h1> :
      <div>
        Temperature: { temperature } Degree,
        <br></br>
        Humidity: { humidity },
        <br></br>
        City: { city },
        <br></br>
        Country: { country },
        <br></br>
        Condition: { description },

      </div>
    )
  }
}

export default Weather;
