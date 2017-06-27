import React from 'react'

class TodoItem extends React.Component{
    render(){
        return(
            <li>{this.props.todo.priority}: {this.props.todo.text}<button onClick={()=>{
                this.props.deleteTodo(this.props.todo.id)
            }}>X</button></li>
        )
    }
}

export default TodoItem