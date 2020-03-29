import React from 'react';
import sun from '../sun.png';
import snowflake from '../snowflake.png';

class Seasons extends React.Component {
	constructor() {
        console.log('constructor');
		super();
		this.state = {
			isWinter: null,
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

	componentWillMount() {
		console.log('componentWillMount');

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

		if (this.state.isWinter !== null && this.state.errorMessage === '') {
			return (
                <div>
                    <img src={this.state.isWinter ? snowflake : sun} style={this.styles.image}/>
                    <h5>Probably it's a {this.state.isWinter ? 'winter' : 'summer'} now :)</h5>
                </div>
            );
		}

		if (this.state.isWinter === null && this.state.errorMessage !== '') {
			return (
                <h5 style={this.styles.errorMessage}>
                    Hoops :(<br />
                    {this.state.errorMessage}
                </h5>
            );
		}

		return <p>Finding a current location...</p>;
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