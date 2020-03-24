import React from 'react';
import sun from '../sun.png';
import snowflake from '../snowflake.png';

class Seasons extends React.Component {
  styles = {
    image: {
      width: '150px',
    },
  }
  
  currentMonth = new Date().getMonth();
  isBetweenMarchAndOctober = this.currentMonth >= 2 && this.currentMonth <= 9;
  isNorthernHemisphere;
  isWinter;
  
  // const [seasonState, setSeasonState] = React.useState(isWinter);
  
  src = this.isWinter ? snowflake : sun;
  season = this.isWinter ? 'winter' : 'summer';
  
  render() {
    // console.log('seasonState ', this.isWinter);

    navigator.geolocation.getCurrentPosition(pos => {
      const latitude = pos.coords.latitude;
      this.isNorthernHemisphere = latitude > 0 && latitude < 90;
      this.isWinter = this.isNorthernHemisphere && !this.isBetweenMarchAndOctober || !this.isNorthernHemisphere && this.isBetweenMarchAndOctober;
      this.setState({isWinter: this.isWinter});
    })
    
    return (
      <div>
        <img src={this.src} style={this.styles.image}/>
        <h5>Probably it's a {this.season} now :)</h5>
      </div>
    );
  }
}

export default Seasons;