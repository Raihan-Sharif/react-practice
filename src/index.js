import React from 'react';
import reactDom from 'react-dom';
import reportWebVitals from './reportWebVitals';


setInterval(() => {
  const element = (
    <h1>
      <span>Hello World, Now time is {new Date().toLocaleTimeString()}</span>
    </h1>
  );
  reactDom.render(element,document.getElementById("root"));
},1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
