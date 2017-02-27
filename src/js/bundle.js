import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddTask from './components/add_task';
import CurrentTasks from './components/current_tasks';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    this.updateTasks = this.updateTasks.bind(this);
    }

    updateTasks(task) {
        this.setState({...this.state.tasks.push({name: task, done: 'false'})});
    }

    render() {
        return (
            <div>
                <AddTask newTask={this.updateTasks} />
                <CurrentTasks allTasks={this.state.tasks}/>
            </div>
            );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);