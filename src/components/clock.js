import React from 'react';
import Time from './time';

const { Component } = React;

class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date(),
        }
    }
        componentDidMount() {
            setInterval(() => this.tick(), 1000);
        }

        tick() {
            this.setState({
              time: new Date()
            });
          }
    
    render() {
        return (
            <div>
                {/* <h1>The time is: {this.state.time.toLocaleTimeString()}</h1> */}
                <h1>The time is: <Time time={this.state.time}/> </h1>
            </div>
        )
    }
}

export default Clock;