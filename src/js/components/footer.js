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
                <button onClick={this.props.enableFilter} id="all" className={`flex-item ${this.props.activeFilter === 'all' ? 'enabled' : ''}`} >All</button>
                <button onClick={this.props.enableFilter} id="active" className={`flex-item ${this.props.activeFilter === 'active' ? 'enabled' : ''}`} >Active</button>
                <button onClick={this.props.enableFilter} id="completed" className={`flex-item ${this.props.activeFilter === 'completed' ? 'enabled' : ''}`} >Completed</button>
            </div>
            <button className="flex-item">
                Clear completed
            </button>
        </footer>
    );
 }   
}