import React from 'react';
import sun from '../sun.png';
import snowflake from '../snowflake.png';

class Seasons extends React.Component {
  constructor() {
    super();
    this.state = {
      isWinter: null,
      errorMessage: ''
    };
    this.getPosition();
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const currentMonth = new Date().getMonth();
        const isFromMarchToOctober = currentMonth >= 2 && currentMonth <= 9;
        const latitude = pos.coords.latitude;
        const isNorthernHemisphere = latitude > 0 && latitude < 90;
        const isWinterNow = isNorthernHemisphere && !isFromMarchToOctober || !isNorthernHemisphere && isFromMarchToOctober;
        this.setState({isWinter: isWinterNow});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    )
  }

  styles = {
    image: {
      width: '150px',
    },
    errorMessage: {
      color: 'red'
    }
  }

  render() {
    const successHTML = (
      <div>
        <img src={this.isWinter ? snowflake : sun} style={this.styles.image}/>
        <h5>Probably it's a {this.isWinter ? 'winter' : 'summer'} now :)</h5>
      </div>
    );

    const errorHTML = (
      <h5 style={this.styles.errorMessage}>
        Hoops :(<br />
        {this.state.errorMessage}
      </h5>
    );

    const loadingHTML = (
      <p>Finding a current location...</p>
    );

    if (this.state.isWinter !== null && this.state.errorMessage === '') {
      return successHTML;
    } else if (this.state.isWinter === null && this.state.errorMessage !== '') {
      return errorHTML;
    } else {
      return loadingHTML;
    }
  }
}

export default Seasons;