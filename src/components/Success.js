import React, { Component } from 'react';

class Success extends Component {
    render() {
        return (
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
                <span>Time: {Date.now()}</span>
            </div>
        );
    }
}

export default Success;
