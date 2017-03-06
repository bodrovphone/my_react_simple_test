import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
 render () {
    return (
        <footer className="container-row">
            <div className="flex-item">{this.props.activeTasks.length} items left</div>
            <div className="flex-item middle container-row">
                <button className="flex-item">All</button>
                <button className="flex-item">Active</button>
                <button className="flex-item">Completed</button>
            </div>
            <button className="flex-item">
                Clear completed
            </button>
        </footer>
    );
 }   
}