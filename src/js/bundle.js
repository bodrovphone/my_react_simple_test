import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

import AddTask from './components/add_task';
import CurrentTasks from './components/current_tasks';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            activeFilter: "all"
        }
    this.addTask = this.addTask.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.enableFilter = this.enableFilter.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
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

    toggleAll(event) {
        const tasks = this.state.tasks;
        const toggle = event.target.checked ? true : false;
        const newData = tasks.map(function(task) {  task.done = toggle; return task; });
        this.setState( {...newData} );
    }

    deleteTask(event) {
        const index = +event.target.dataset.index;
        const state = this.state.tasks;
        state.length ? state.splice(index, 1) : [];
        this.setState( {tasks: state} );
    }

    enableFilter(event) {
        this.setState( {activeFilter: event.target.id} );
    }

    clearCompleted() {
        const tasks = this.state.tasks;
        const newData = tasks.filter(task => !task.done);
        this.setState( {tasks: newData} );
    }

    render() {
        return (
            <div>
                <AddTask newTask={this.addTask} toggleAll={this.toggleAll} />
                <CurrentTasks allTasks={this.state.tasks} updateTasks={this.updateTasks} 
                              deleteTask={this.deleteTask}
                              enableFilter={this.enableFilter}
                              activeFilter={this.state.activeFilter}
                              clearCompleted={this.clearCompleted}
                />
            </div>
            );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);