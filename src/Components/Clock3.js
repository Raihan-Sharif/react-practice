import React from "react";
// in this clock 3 i am mitigate "this" problem in another way.
// Here i pass "this" in onClick event by bind "this" 
// Here i also pass params in onclick event
class Clock3 extends React.Component{

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

handleClick(locale){
    const changeLocale = this.state.locale === 'bn-BD'?locale:'bn-BD';
    console.log(changeLocale);
    this.setState({
        locale:changeLocale
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
        return(
                <div>
                    <h1 className="heading">
                        <span className="text">{date.toLocaleTimeString(locale)}</span>
                        <br/>
                        <span className="text">Count = {counter}</span>
                    </h1>
                    <button type="button" onClick={this.handleClick.bind(this,'en-US')}>Toggle Locale</button>
                </div>
                )
    }
}

export default Clock3;