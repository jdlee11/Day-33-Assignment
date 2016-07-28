import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import MenuPage from './components/pages/menupage';
import BoardPage from './components/pages/boardpage';

let router = (
  <Router history={hashHistory}>
    <Route path="/" component={MenuPage}/>
    <Route path="/board" component={BoardPage}/>
  </Router>
);

ReactDOM.render(router,
  document.getElementById('container'));
