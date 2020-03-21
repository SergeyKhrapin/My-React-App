import React from 'react';
import sun from '../sun.png';
import snowflake from '../snowflake.png';

const styles = {
  image: {
    width: '150px',
  },
};

const Seasons = () => {
  const currentMonth = new Date().getMonth();
  const isBetweenMarchAndOctober = currentMonth >= 2 && currentMonth <= 9;
  let isNorthernHemisphere, isWinter;

  const [seasonState, setSeasonState] = React.useState(isWinter);
  console.log('seasonState ', seasonState);

  navigator.geolocation.getCurrentPosition(pos => {
    const latitude = pos.coords.latitude;
    isNorthernHemisphere = latitude > 0 && latitude < 90;
    isWinter = isNorthernHemisphere && !isBetweenMarchAndOctober || !isNorthernHemisphere && isBetweenMarchAndOctober;
    setSeasonState(isWinter);
  });

  const src = seasonState ? snowflake : sun;
  const season = seasonState ? 'winter' : 'summer';

  return (
    <div>
      <img src={src} style={styles.image}/>
      <h5>Probably it's a {season} now :)</h5>
    </div>
  );
};

export default Seasons;