import React from 'react';
import reactDom from 'react-dom';

// functional component
function ClockComponent({locale}){
 return (
    <h1>
      <span>Hello World, Now time is {new Date().toLocaleTimeString(locale)}</span>
    </h1>
  )
}


// class component
class ClockComponentNew extends React.Component{
  render() {
    return(
      <h1>
        <span>Hello World, Now time is {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    )
  };
}

reactDom.render(<ClockComponentNew locale="en-US"></ClockComponentNew>,document.getElementById("root"));


