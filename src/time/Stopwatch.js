import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    componentWillMount() {
        this.startButton = 'Start';
        this.stopButton = 'Stop';
        this.handleStopwatch = () => {
            if (!this.state.count) {
                this.intervalID = setInterval(() => {
                    this.setState({count: ++this.state.count});
                }, 1000);
            } else {
                clearInterval(this.intervalID);
                this.setState({count: 0});
            }
        };
    }

    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleStopwatch}>{this.state.count ? this.stopButton : this.startButton}</button>
            </div>
        );
    }
}

export default Timer;