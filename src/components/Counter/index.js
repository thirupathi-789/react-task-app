import React,{Component} from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    onIncrement = () => {
        this.setState((prevState) => ({count : prevState.count + 1}))
    }

    onDecrement = () => {
        const {count} = this.state;
        if (count > 0) {
            this.setState((prevState) => ({count : prevState.count - 1}))
        }
    }

    render() {

        const {count} = this.state;

        return(
            <div style={{textAlign: "center"}}>
                <h1>Count : <span style={{color:"green"}}>{count}</span></h1>
                <button style={{marginRight: "10px"}}  onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;