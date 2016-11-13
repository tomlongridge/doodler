import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import MethodPage from './components/methods/MethodPage';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={MethodPage}/>
    <Route path="/:method" component={MethodPage} />
  </Route>
);
