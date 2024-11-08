import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    clickHandler = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    addFiveHandler = () => {
        for(let i = 0; i < 5; i++){
            this.setState((prev) => ({
                count: prev.count + 1
            }));
        }
    };
    
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandler}>Add One</button>
                <button onClick={this.addFiveHandler}>Add Five</button>
            </>
        );
    }
}

export default Child;
