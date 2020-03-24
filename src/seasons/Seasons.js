import React from 'react';
import sun from '../sun.png';
import snowflake from '../snowflake.png';

class Seasons extends React.Component {
  constructor() {
    super();
    this.state = {isWinter: true};
  }

  render() {
    const styles = {
      image: {
        width: '150px',
      },
    };
    
    const currentMonth = new Date().getMonth();
    const isFromMarchToOctober = currentMonth >= 2 && currentMonth <= 9;
    
    navigator.geolocation.getCurrentPosition(pos => {
      const latitude = pos.coords.latitude;
      const isNorthernHemisphere = latitude > 0 && latitude < 90;
      const isWinterNow = isNorthernHemisphere && !isFromMarchToOctober || !isNorthernHemisphere && isFromMarchToOctober;
      this.setState({isWinter: isWinterNow});
    })
    
    console.log('isWinter ', this.state.isWinter);

    return (
      <div>
        <img src={this.state.isWinter ? snowflake : sun} style={styles.image}/>
        <h5>Probably it's a {this.state.isWinter ? 'winter' : 'summer'} now :)</h5>
      </div>
    );
  }
}

export default Seasons;