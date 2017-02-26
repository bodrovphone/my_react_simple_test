import React, { Component } from 'react';

export default class SingleTask extends Component {
    render() {
    return (
        <div>
            <input type="checkbox"/>
            <label htmlFor="">{this.props.name}</label>
        </div>
    );   }
}