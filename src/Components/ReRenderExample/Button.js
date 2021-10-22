import React from "react";

class Button extends React.Component{
   /* constructor(props){
        super(props);
    }
    */

// shouldComponentUpdate life cycle method take decison wheter component should update or not

shouldComponentUpdate(nextProps){
    if(nextProps === this.props)
        return false;
    else
        return true;
    
}
    render(){
        console.log("Button Rendered.");

        const {btnName, btnFunction, btnParam} = this.props;
        return(
            <button type="button" onClick={btnFunction(btnParam)}>{btnName}</button>
        );
    }
}
export default Button;