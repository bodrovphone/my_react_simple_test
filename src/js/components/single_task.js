import React, { Component } from 'react';

export default class SingleTask extends Component {
    render() {
    return (
        <div className="row single-task">
            <input className="checkbox" type="checkbox" name="isDone" id="checkbox" />
            <label htmlFor="checkbox">{this.props.name}</label>
        </div>
    );   }
}