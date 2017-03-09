import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

 render () {
    const items = this.props.activeTasks.length;
    return (
        <footer className="container-row">
            <div className="flex-item">{items > 1 ? `${items} items` : `${items} item`} left</div>
            <div className="flex-item middle container-row">
                <button onClick={this.props.enableFilter} id="all" className={`flex-item filter ${this.props.activeFilter === 'all' ? 'enabled' : ''}`} >All</button>
                <button onClick={this.props.enableFilter} id="active" className={`flex-item filter ${this.props.activeFilter === 'active' ? 'enabled' : ''}`} >Active</button>
                <button onClick={this.props.enableFilter} id="completed" className={`flex-item filter ${this.props.activeFilter === 'completed' ? 'enabled' : ''}`} >Completed</button>
            </div>
            <button className="flex-item clear-items" onClick={this.props.clearCompleted}>
                Clear completed
            </button>
        </footer>
    );
 }   
}