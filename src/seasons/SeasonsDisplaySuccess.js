import React from 'react';
import sun from '../sun.png';
import snowflake from '../snowflake.png';

class SeasonsDisplaySuccess extends React.Component {
    styles = {
		image: {
			width: '150px',
		}
    }

    render() {
        return (
            <div>
                <img src={this.props.season === 'winter' ? snowflake : sun} style={this.styles.image}/>
                <h5>Probably it's a {this.props.season} now :)</h5>
            </div>
        );
    }
}

export default SeasonsDisplaySuccess;