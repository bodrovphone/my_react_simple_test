import React, { Component } from 'react';

export default class SingleTask extends Component {
    constructor(props) {
        super(props);
        this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
        this.handleOffMouseOver = this.handleOffMouseOver.bind(this);
        this.isEditable = this.isEditable.bind(this);
    }

    handleOnMouseOver(event) {
        event.currentTarget.lastChild.className = "delete delete-hover";
    }

    handleOffMouseOver(event) {
        event.currentTarget.lastChild.className = "delete";
    }

    isEditable(edit) {
        if (edit) {
            return <input 
                        autoFocus 
                        className="editable row single-task" 
                        data-index={this.props.index} 
                        type="text" 
                        defaultValue={this.props.name} 
                        onKeyPress={this.props.EditTask} 
                        onBlur={this.props.EditTask}/>
        } else {
            return (
                <div 
                    onMouseEnter={this.handleOnMouseOver} 
                    onMouseLeave={this.handleOffMouseOver} 
                    className="row single-task" 
                    onDoubleClick={this.props.EditTask} 
                    data-index={this.props.index}>
                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            id={this.props.index} 
                            name={this.props.name} 
                            onChange={this.props.updateTasks} 
                            checked={this.props.isDone} />
                        <label 
                            className={this.props.isDone ? 'task-is-done' : ''}>{this.props.name}</label>
                        <button 
                            className="delete" 
                            data-index={this.props.index} 
                            onClick={this.props.deleteTask}>
                        </button>
                </div>
                );
        }
    }

    render() {
        return this.isEditable(this.props.edit);
    }
}
