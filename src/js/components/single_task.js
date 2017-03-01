import React, { Component } from 'react';

export default class SingleTask extends Component {
    render() {
    return (
        <div className="row single-task">
            <input className="checkbox" type="checkbox" id={this.props.index} name={this.props.name} onChange={this.props.handleInputChange} />
            <label className={this.props.isDone ? 'task-is-done' : ''}>{this.props.name}</label>
        </div>
    );   }
}