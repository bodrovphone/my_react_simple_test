import React, { Component } from 'react';

export default class SingleTask extends Component {
    constructor(props) {
        super(props);
        this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
        this.handleOffMouseOver = this.handleOffMouseOver.bind(this);
    }
    handleOnMouseOver(event) {
        // getElementByid(event.target);
        // event.target.lastChild.className = "delete delete-hover";
        console.log(event.target);
    }
    handleOffMouseOver(event) {
        // getElementByid(event.target);
        // event.target.lastChild.className = "delete";
        console.log(event.target);
    }
    render() {
    return (
        <div onMouseEnter={this.handleOnMouseOver} onMouseLeave={this.handleOffMouseOver} className="row single-task">
            <input className="checkbox" type="checkbox" id={this.props.index} name={this.props.name} onChange={this.props.handleInputChange} checked={this.props.isDone} />
            <label className={this.props.isDone ? 'task-is-done' : ''}>{this.props.name}</label>
            <button className="delete"></button>
        </div>
    );   }
}
