import React from "react";
import Button from "./Button";
// in this clock 4 i am mitigate "this" problem in another way.
// Here i create another component names "button" and if clock4 reRender then button also
// rerender but if we want to stop rerender then we should us shouldComponentUpdate
// Life Cycle method to take decision to re-render or not.
class Clock4 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            locale:this.props.locale,
            counter:0
        }
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

    handleClick = (locale) => {
        console.log(locale);
       // const changeLocale = this.state.locale === 'bn-BD' ? 'en-US' : 'bn-BD';
       // console.log('changeLocale: ',changeLocale);
        this.setState({
            locale:locale
        })
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
        const {locale,date,counter} = this.state;
        console.log("Clock 4 Rendered.");

        return(
                <div>
                    <h1 className="heading">
                        <span className="text">{date.toLocaleTimeString(locale)}</span>
                        <br/>
                        <span className="text">Count = {counter}</span>
                    </h1>
                    <Button btnName="Click Me!" btnFunction={this.handleClick} btnParam={locale}></Button>
                </div>
                )
    }
}

export default Clock4;