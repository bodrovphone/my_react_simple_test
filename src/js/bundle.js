import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
    render() {
        return (
            <h1>It works blala!</h1>
            );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);