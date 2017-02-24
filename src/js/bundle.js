import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddTask from './components/add_task';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }
    render() {
        return (
            <div>
                <AddTask />
            </div>
            );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);