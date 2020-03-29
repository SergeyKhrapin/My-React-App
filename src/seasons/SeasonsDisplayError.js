import React from 'react';

class SeasonsDisplayError extends React.Component {
    styles = {
		errorMessage: {
			color: 'red'
		}
    }

    render() {
        return (
            <h5 style={this.styles.errorMessage}>
                Hoops :(<br />
                {this.props.errorMessage}
            </h5>
        );
    }
}

export default SeasonsDisplayError;