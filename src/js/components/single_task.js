import React, { Component } from 'react';

export default class SingleTask extends Component {
    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    // this.setState({
    //   [name]: value
    // });
    // }
    render() {
    return (
        <div className="row single-task">
            <input className="checkbox" type="checkbox" id={this.props.index} name={this.props.name} onChange={this.props.handleInputChange} />
            <label>{this.props.name}</label>
        </div>
    );   }
}