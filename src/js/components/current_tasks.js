import React, { Component } from 'react';

import SingleTask from './single_task';

export default class CurrentTasks extends Component {
 
 render () {
    const allTasks = this.props.allTasks;
    if (!allTasks.length) return null;
        return (
            <div>
                {allTasks.map((task,index) => {
                    return <SingleTask key={index} name={task.name}>{task.name}</SingleTask>;
                })}
            </div>
        );
 }   
}