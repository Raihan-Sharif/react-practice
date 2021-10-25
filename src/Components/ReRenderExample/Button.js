import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
   

// shouldComponentUpdate life cycle method take decison wheter component should update or not

shouldComponentUpdate(nextProps){
    if(nextProps.btnParam === this.props.btnParam)
        return false;
    else
        return true;
    
}
    render(){
        console.log("Button Rendered.");

        const {btnName, btnFunction, btnParam} = this.props;
        return(
            <button type="button" onClick={() => btnFunction(btnParam)}>{btnName}</button>
        );
    }
}
export default Button;