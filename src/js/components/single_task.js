import React, { Component } from 'react';

export default class SingleTask extends Component {
    constructor(props) {
        super(props);
        this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
        this.handleOffMouseOver = this.handleOffMouseOver.bind(this);
    }
    handleOnMouseOver(event) {
        event.currentTarget.lastChild.className = "delete delete-hover";
    }
    handleOffMouseOver(event) {
        event.currentTarget.lastChild.className = "delete";
    }
    render() {
        return (
            <div onMouseEnter={this.handleOnMouseOver} onMouseLeave={this.handleOffMouseOver} className="row single-task">
                <input className="checkbox" type="checkbox" id={this.props.index} name={this.props.name} onChange={this.props.handleInputChange} checked={this.props.isDone} />
                <label className={this.props.isDone ? 'task-is-done' : ''}>{this.props.name}</label>
                <button className="delete" data-index={this.props.index} onClick={this.props.deleteTask}></button>
            </div>
        );   
    }
}
