import React from 'react';
import sun from '../sun.png';
import snowflake from '../snowflake.png';

const styles = {
  image: {
    width: '150px',
  },
};

const Seasons = props => {
  return (
    <div>
      <img src={props.isWinter ? snowflake : sun} style={styles.image}/>
      <h5>Probably it's a summer now :)</h5>
    </div>
  );
};

export default Seasons;