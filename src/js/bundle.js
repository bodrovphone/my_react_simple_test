import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddTask from './components/add_task';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    this.updateTasks = this.updateTasks.bind(this);
    }

    updateTasks(task) {
        this.setState({...this.state.tasks.push(task)});
    }

    render() {
        console.log(this.state.tasks);
        return (
            <div>
                <AddTask newTask={this.updateTasks} />
            </div>
            );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);