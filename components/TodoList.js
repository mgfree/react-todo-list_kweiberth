import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{

    handleClick() {
        this.props.deleteLetter();        
    }

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo}/>
                    })                    
                }
            </ul>
        )
    }
}

export default TodoList;