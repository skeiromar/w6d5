import React from "react";
import ReactDOM from "react-dom";
import Root from './root';

function callback(){

  const root = document.getElementById('root');
  const name = "Donald";

  ReactDOM.render(<Root />, root);
  // ReactDOM.render(<Tabs name={name} />, root);

}

document.addEventListener('DOMContentLoaded', callback);