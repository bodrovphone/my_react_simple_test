import React, { Component } from 'react';

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
      this.props.newTask(e.target.value);
      e.target.value = '';
    }

    }
    render() {
        return (<div className="container-row">
                    <input className="flex-item select-all" type="checkbox"/>
                    <input className="add-task flex-item" type="text" placeholder="What needs to be done?" onKeyPress={this.handleKeyPress} />
                </div>
                );
    }
}