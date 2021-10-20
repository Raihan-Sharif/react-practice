import React from "react";

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            counter:0
        }
    }
    // componentDidMount call after component render to the real dom.
    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(),1000);
    }

    // this componentWillUnmount call before component unmount from dom. Actually when go this component to another component.
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }
    tick(){
        this.setState({
            date: new Date(),
        })

        // we use setState like this when we use previous state or props value
        this.setState((state, props)=>({
            counter: state.counter + 1,
        }))
    }
    render(){
        return(
            <h1 className="heading">
                <span className="text">{this.state.date.toLocaleTimeString(this.props.locale)}</span>
                <br/>
                <span className="text">Count = {this.state.counter}</span>
            </h1>
        )
    }
}

export default Clock;