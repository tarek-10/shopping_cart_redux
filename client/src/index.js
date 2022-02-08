import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

//install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js"

ReactDOM.render( <
  React.StrictMode >
  <
  App / >
  <
  /React.StrictMode>,
  document.getElementById('root')
);