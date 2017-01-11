import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: ''
        }
    }

    handleChange(event) {
        this.setState({
           inputText: event.target.value 
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submit button clicked');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input 
                        type="text"
                        placeholder="Type in your todo"
                        value={this.state.initialText}
                        onChange={this.handleChange.bind(this)}
                    />
                    <input type="submit" text="Submit"/>
                </form>
            </div>
        )
    }

}

export default TodoInput;