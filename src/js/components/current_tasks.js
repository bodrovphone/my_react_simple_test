import React, { Component } from 'react';

import SingleTask from './single_task';
import Footer from './footer';

export default class CurrentTasks extends Component {
    constructor(props) {
         super(props);
         this.conditionalRender = this.conditionalRender.bind(this);
    }

    conditionalRender(allTasks,filter) {
        if (filter === 'all') {
            return (
                    allTasks.map((task,index) => {
                        return <SingleTask {...this.props}
                                           isDone={task.done} 
                                           key={index} index={index}
                                           name={task.name}
                                           edit={task.edit}
                                           >{task.name}</SingleTask>;
                    }
                ));
        } else if (filter === 'active') {
             return (
                    allTasks.filter(task => !task.done).map((task,index) => {
                        return <SingleTask {...this.props}
                                           isDone={task.done} 
                                           key={index} index={index}
                                           name={task.name}
                                           edit={task.edit}
                                           >{task.name}</SingleTask>;
                    }
                ));
        } else if (filter === 'completed') {
             return (
                    allTasks.filter(task => task.done).map((task,index) => {
                        return <SingleTask {...this.props}
                                           isDone={task.done} 
                                           key={index} index={index}
                                           name={task.name}
                                           edit={task.edit}
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
                    <Footer activeTasks={activeTasks} {...this.props}
                    ></Footer>
                    <div className="visual"></div>
                </div>
            );
    }
}