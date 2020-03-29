import React from 'react';
import sun from '../sun.png';
import snowflake from '../snowflake.png';
import Spinner from '../utilities/Spinner';

class Seasons extends React.Component {
	constructor() {
        console.log('constructor');
		super();
		this.state = {
			season: null,
			errorMessage: ''
        };
	}

	styles = {
		image: {
			width: '150px',
		},
		errorMessage: {
			color: 'red'
		}
    }
    
    getSeason(latitude, month) {
        const isFromMarchToOctober = month >= 2 && month <= 9;
        const isNorthernHemisphere = latitude > 0 && latitude < 90;
        const isWinter = isNorthernHemisphere && !isFromMarchToOctober || !isNorthernHemisphere && isFromMarchToOctober;
        return isWinter ? 'winter' : 'summer';
    }

	componentWillMount() {
		console.log('componentWillMount');

		navigator.geolocation.getCurrentPosition(
			pos => {
				const season = this.getSeason(pos.coords.latitude, new Date().getMonth());
				this.setState({season: season});
			},
			err => {
				this.setState({errorMessage: err.message});
			}
		)
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentWillUpdate() {
		console.log('componentWillUpdate');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render() {
		console.log('render');

		if (this.state.season !== null && this.state.errorMessage === '') {
			return (
                <div>
                    <img src={this.state.season === 'winter' ? snowflake : sun} style={this.styles.image}/>
                    <h5>Probably it's a {this.state.season} now :)</h5>
                </div>
            );
		}

		if (this.state.season === null && this.state.errorMessage !== '') {
			return (
                <h5 style={this.styles.errorMessage}>
                    Hoops :(<br />
                    {this.state.errorMessage}
                </h5>
            );
		}

		return <Spinner message='Finding a current location...' />;
	}
}

export default Seasons;

/*
constructor
componentWillMount
render
componentDidMount
componentWillUpdate
render
componentDidUpdate
*/