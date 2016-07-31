import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import BoardPage from './components/pages/boardpage';
import QuestionModal from './components/questionmodal';

let router = (
  <Router history={hashHistory}>
    <Route path="/board" component={BoardPage}>
      <Route path=":id" component={QuestionModal}/>
    </Route>
  </Router>
);

ReactDOM.render(router,
  document.getElementById('container'));
hashHistory.push('board');
