import React, { Component } from 'react';

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
      this.props.newTask(e.target.value);
    }

    }
    render() {
        return <input className="add-task" type="text" placeholder="What needs to be done?" onKeyPress={this.handleKeyPress} />
    }
}