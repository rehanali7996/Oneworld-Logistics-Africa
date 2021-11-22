import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import FooterComponent from './components/footer';
import NavbarComponent from './components/navbar';

ReactDOM.render(
      [<NavbarComponent key="1"/>,<FooterComponent key="2"/>],
  document.getElementById('root')
);

reportWebVitals();
