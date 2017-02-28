import React, { Component } from 'react';

import SingleTask from './single_task';

export default class CurrentTasks extends Component {
 constructor(props) {
     super(props);
     this.toggleTask = this.toggleTask.bind(this);
 }
 toggleTask(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(target, value);
    // this.setState({
    //   [name]: value
    // });
    this.props.updateTasks(event);
 }
 render () {
    const allTasks = this.props.allTasks;
    if (!allTasks.length) return null;
        return (
            <div className="container task-list">
                {allTasks.map((task,index) => {
                    return <SingleTask isDone={task.done} key={index} index={index} name={task.name} handleInputChange={this.toggleTask}>{task.name}</SingleTask>;
                })}
                <footer></footer>
            </div>
        );
 }   
}