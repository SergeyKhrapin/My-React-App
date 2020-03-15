import React from 'react';
import sun from '../sun.png';
import snowflake from '../snowflake.png';

const styles = {
  image: {
    width: '150px',
  },
};

const Seasons = props => {
  console.log('isWinter ', props.isWinter);
  const src = props.isWinter ? snowflake : sun;
  const season = props.isWinter ? 'winter' : 'summer';
  return (
    <div>
      <img src={src} style={styles.image}/>
      <h5>Probably it's a {season} now :)</h5>
    </div>
  );
};

export default Seasons;