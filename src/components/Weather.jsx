import React, { Component } from 'react';

class Weather extends Component {

  render() {
    const { temperature, city, humidity, description, country } = this.props
    return(
      <div>
        Temperature: { temperature },
        Humidity: { humidity },
        City: { city },
        Country: { country },
        Description: { description },

      </div>
    )
  }
}

export default Weather;
