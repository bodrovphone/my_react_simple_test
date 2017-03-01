import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

import AddTask from './components/add_task';
import CurrentTasks from './components/current_tasks';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    this.addTask = this.addTask.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    }

    addTask(task) {
        this.setState({...this.state.tasks.push({name: task, done: false})});
    }

    updateTasks(event) {
        const id = Number(event.target.id);
        const state = this.state;
        const newData  = update(state.tasks, {[id]: {done: {$set: !state.tasks[id].done}}});
        this.setState( {tasks: newData} );
    }

    render() {
        return (
            <div>
                <AddTask newTask={this.addTask} />
                <CurrentTasks allTasks={this.state.tasks} updateTasks={this.updateTasks} />
            </div>
            );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);