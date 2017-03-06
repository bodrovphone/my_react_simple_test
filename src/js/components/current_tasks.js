import React, { Component } from 'react';

import SingleTask from './single_task';
import Footer from './footer';

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
                <div>
                <div className="container task-list">
                    {allTasks.map((task,index) => {
                        return <SingleTask isDone={task.done} 
                                           key={index} index={index}
                                           name={task.name}
                                           handleInputChange={this.toggleTask}
                                           deleteTask={this.props.deleteTask}
                                           >{task.name}</SingleTask>;
                    })}
                    
                </div>
                <Footer activeTasks={activeTasks}></Footer>
                <div className="visual"></div>
                </div>
            );
    }
}