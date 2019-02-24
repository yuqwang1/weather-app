import React, { Component } from 'react';

class Form extends Component {

  render() {
    return(
      <form onSubmit={ this.props.fetchWeather }>
        <input type='text' placeholder="city..." name='city'/>
        <input type='text' placeholder="country" name='country'/>
        <button>Get Weather</button>
      </form>
    )
  }
}

export default Form;
