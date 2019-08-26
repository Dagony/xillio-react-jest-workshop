import React, { Component } from 'react';
import moment from 'moment';

class Success extends Component {
    render() {
        return (
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
                <span>Time: {moment().format("MMM Do YYY hh:mm:ss.sss a")}</span>
            </div>
        );
    }
}

export default Success;
