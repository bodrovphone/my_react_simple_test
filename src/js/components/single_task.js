import React, { Component } from 'react';

export default class SingleTask extends Component {
    render() {
    return (
        <div className="row">
            <input type="checkbox" name="isDone"/>
            <label htmlFor="isDone">{this.props.name}</label>
        </div>
    );   }
}