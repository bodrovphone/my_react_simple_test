import React, { Component } from 'react';

export default class AddTask extends Component {
    render() {
        return <input className="add-task" type="text" placeholder="What needs to be done?" />
    }
}