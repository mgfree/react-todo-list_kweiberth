import React, { Component } from 'react';

class TodoList extends Component{

    handleClick() {
        this.props.deleteLetter();        
    }

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo) => {
                        return <li key={todo.id}>{todo.text}</li>
                    })                    
                }
            </ul>
        )
    }
}

export default TodoList;