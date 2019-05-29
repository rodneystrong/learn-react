import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    increaseCount = (num) => num+1;
    
    render() {
            
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increaseCount(this.state.count)}>Change!</button>
            </div>
        )
    }
}

export default App
