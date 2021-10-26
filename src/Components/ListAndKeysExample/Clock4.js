import React from "react";

class Clock4 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            locale:this.props.locale,
            counter:0
        }
    }
// Click Event: Arrow function resolved the "this" error in this callback function.  
handleClick = () => {
    this.setState({
        locale: 'en-US',
    })
}

// componentDidMount life cycle call after component render in real dom.
componentDidMount(){
    this.clockTimer = setInterval(() => {
        this.tick();
    }, 1000);
} 

// this componentWillUnmount Called before component change. Here we can remove any running 
// thing in this life cycle event from our component.
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
    // Here I am demonstrate conditional rendering 
    // example : 1
    render(){
        const {locale,date,counter} = this.state;
        let customButton;
        if(locale === 'en-US'){
            customButton = (<button type="button" onClick={this.handleClick}>ঘড়ি পরিবর্তন করুন</button>)
        }
        else{
            customButton = (<button type="button" onClick={this.handleClick}>Change The Clock</button>)
        }
        return(
                <div>
                    <h1 className="heading">
                        <span className="text">{date.toLocaleTimeString(locale)}</span>
                        <br/>
                        <span className="text">Count = {counter}</span>
                    </h1>
                    {customButton}
                </div>
                )
    }
}

export default Clock4;