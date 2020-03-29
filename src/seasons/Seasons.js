import React from 'react';
import Spinner from '../utilities/Spinner';
import SeasonsDisplaySuccess from './SeasonsDisplaySuccess';
import SeasonsDisplayError from './SeasonsDisplayError';
import Border from '../utilities/Border';

class Seasons extends React.Component {
	constructor() {
        console.log('constructor');
		super();
		this.state = {
			season: null,
			errorMessage: ''
        };
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

        let seasonHTML = <Spinner message='Finding a current location...' />;
        let borderColor = 'white';

		if (this.state.season !== null && this.state.errorMessage === '') {
			seasonHTML = <SeasonsDisplaySuccess season={this.state.season} />;
            borderColor = this.state.season === 'winter' ? 'blue' : 'yellow';
		} else if (this.state.season === null && this.state.errorMessage !== '') {
            seasonHTML = <SeasonsDisplayError errorMessage={this.state.errorMessage} />;
            borderColor = 'red';
		}

		return (
            <Border color={borderColor}>
                {seasonHTML}
            </Border>
        );
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