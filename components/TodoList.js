import React, { Component } from 'react';

class TodoList extends Component{

    handleClick() {
        this.props.deleteLetter();
    }

    render() {
        return (
            <div>This is the dodo list</div>                
        )
    }
}

export default TodoList;