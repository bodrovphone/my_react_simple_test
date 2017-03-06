import React, { Component } from 'react';

import SingleTask from './single_task';

export default class CurrentTasks extends Component {
    constructor(props) {
         super(props);
         this.toggleTask = this.toggleTask.bind(this);
         const activeTasks = [];
    }

    toggleTask(event) {
        this.props.updateTasks(event);
    }

    render () {
        const allTasks = this.props.allTasks;
        const activeTasks = allTasks.filter(task => !task.done);

        if (!allTasks.length) return null;

            return (
                <div className="container task-list">
                    {allTasks.map((task,index) => {
                        return <SingleTask isDone={task.done} 
                                           key={index} index={index}
                                           name={task.name}
                                           handleInputChange={this.toggleTask}
                                           deleteTask={this.props.deleteTask}
                                           >{task.name}</SingleTask>;
                    })}
                    <footer className="container-row">
                        <div className="flex-item items-left">{activeTasks.length} items left</div>
                        <div className="flex-item">All</div>
                        <div className="flex-item">Active</div>
                        <div className="flex-item">Completed</div>
                        <div className="flex-item">Clear Completed</div>
                    </footer>
                </div>
            );
    }
}