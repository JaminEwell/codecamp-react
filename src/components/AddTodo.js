import React from 'react'
import uuid from 'uuid'

class AddTodo extends React.Component{
    initialState = {text:'',priority:'priority'}
    constructor(){
        super()
        this.state = this.initialState
    }
    render(){
        return(
            <div>
            <input type="text" value={this.state.text} onChange={(event)=> {
                this.setState({text:event.target.value})
            }}/>
                <select value={this.state.priority} onChange={(event)=> {
                    this.setState({priority:event.target.value})
                }}>
                    <option value="priority" disabled>priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button onClick={()=>{
                    this.props.addTodo({
                        id:uuid.v4(),
                        text:this.state.text,
                        priority:this.state.priority
                    })
                    this.setState(this.initialState)
                }}>Add Todo</button>
            </div>
        )
    }
}

export default AddTodo