import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import { createHistory } from 'history';


// Import Components
import App from './components/App';
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';

// Routes

var routes = (
  <Router history={createHistory()}>
    <Route path='/' component={StorePicker} />
    <Route path='/store/:storeId' component={App} />
    <Route path='*' component={NotFound} />
  </Router>
)


// Binding to DOM
ReactDOM.render(routes, document.getElementById('main'));