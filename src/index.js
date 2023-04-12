import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/global.css';
import App from './App';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/experience" component={Experience} />
      <Route path="/education" component={Education} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
