import React from "react"
import TodoItem from './components/TodoItem/TodoItem'
import todosData from './dataApi/todosData'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    render() {
        let todos = this.state.todos
        const todoItems = todos.map((item)=><TodoItem key={item.id} item={item}/>)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App