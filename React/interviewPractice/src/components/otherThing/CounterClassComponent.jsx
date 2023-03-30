import React, { Component } from "react";

export default class CounterClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    getDates = () => {

    }
    render() {
        return (
            <>
                <div>
                    {this.state.count}
                </div>
                <input type={"date"} onChange={(e) => console.log(e.target.value)} />
                <input type={"date"} />
                <button onClick={this.getDates}></button>
                <button onClick={this.handleClick} >Click</button>
            </>
        )
    }
}