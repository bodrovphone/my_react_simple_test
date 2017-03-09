import React, { Component } from 'react';

import SingleTask from './single_task';
import Footer from './footer';

export default class CurrentTasks extends Component {
    constructor(props) {
         super(props);
         this.toggleTask = this.toggleTask.bind(this);
         this.conditionalRender = this.conditionalRender.bind(this);
         const activeTasks = [];
    }

    toggleTask(event) {
        this.props.updateTasks(event);
    }

    conditionalRender(allTasks,filter) {
        if (filter === 'all') {
            return (
                    allTasks.map((task,index) => {
                        return <SingleTask isDone={task.done} 
                                           key={index} index={index}
                                           name={task.name}
                                           handleInputChange={this.toggleTask}
                                           deleteTask={this.props.deleteTask}
                                           >{task.name}</SingleTask>;
                    }
                ));
        } else if (filter === 'active') {
             return (
                    allTasks.filter(task => !task.done).map((task,index) => {
                        return <SingleTask isDone={task.done} 
                                           key={index} index={index}
                                           name={task.name}
                                           handleInputChange={this.toggleTask}
                                           deleteTask={this.props.deleteTask}
                                           >{task.name}</SingleTask>;
                    }
                ));
        } else if (filter === 'completed') {
             return (
                    allTasks.filter(task => task.done).map((task,index) => {
                        return <SingleTask isDone={task.done} 
                                           key={index} index={index}
                                           name={task.name}
                                           handleInputChange={this.toggleTask}
                                           deleteTask={this.props.deleteTask}
                                           >{task.name}</SingleTask>;
                    }
                ));
        }
    }

    render () {
        const allTasks = this.props.allTasks;
        const activeTasks = allTasks.filter(task => !task.done);

        if (!allTasks.length) return null;
            return (
                <div>
                    <div className="container task-list">
                        {this.conditionalRender(allTasks,this.props.activeFilter)}
                    </div>
                    <Footer activeTasks={activeTasks} activeFilter={this.props.activeFilter} enableFilter={this.props.enableFilter}
                            clearCompleted={this.props.clearCompleted}
                    ></Footer>
                    <div className="visual"></div>
                </div>
            );
    }
}