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
    this.EditTask = this.EditTask.bind(this);
    }

    addTask(task) {
        this.setState({...this.state.tasks.push({name: task, done: false, edit: false})});
    }

    updateTasks(event) {
        const id = Number(event.target.id);
        const state = this.state;
        const newData  = update(state.tasks, {[id]: {done: {$set: !state.tasks[id].done}}});
        this.setState( {tasks: newData} ); 
    }

    toggleAll(event) {
        if (!this.state.tasks.length) return;
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

    EditTask(event) {
        const id = event.currentTarget.dataset.index;
        const value = (event.key === 'Enter' || event.type === 'blur') ? event.target.value : event.currentTarget.childNodes[1].innerHTML;
        const state = this.state;
        const newData  = update(state.tasks, {[id]: {edit: {$set: !state.tasks[id].edit}}});
        const differentData = update(newData, {[id]: {name: {$set: value}}});
        this.setState( {tasks: differentData} );
        }

    render() {
        // console.log(this.state.tasks);
        return (
            <div>
                <AddTask newTask={this.addTask} toggleAll={this.toggleAll} />
                <CurrentTasks allTasks={this.state.tasks} updateTasks={this.updateTasks} 
                              deleteTask={this.deleteTask}
                              enableFilter={this.enableFilter}
                              activeFilter={this.state.activeFilter}
                              clearCompleted={this.clearCompleted}
                              EditTask={this.EditTask}
                />
            </div>
            );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);