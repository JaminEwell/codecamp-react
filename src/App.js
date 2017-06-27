import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo'

class App extends React.Component{
    constructor(){
        super()
        this.state = {todos:[]}
    }

    deleteTodo = (todoId) =>{
        let todos = this.state.todos
        let index = todos.findIndex(todo=>todo.id===todoId)
        todos.splice(index,1)
        this.setState({todos:todos})
    }

    addTodo = (todo)=>{
        let todos = this.state.todos
        todos.push(todo)
        this.setState({todos:todos})

    }

  render() {

    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
