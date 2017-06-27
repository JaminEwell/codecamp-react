import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
    render(){

        const todos = this.props.todos.map((todo)=>{
            return(<TodoItem key={todo.text} todo={todo} deleteTodo={this.props.deleteTodo}/>)
        })

        return(
            <div>
                <ul>{todos}</ul>
            </div>
        )
    }
}

export default TodoList