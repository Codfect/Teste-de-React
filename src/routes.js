import React from 'react';
import Content from './components/Content'
import Error from './components/Error'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/error" component={Error} />
        <Redirect to="/error"/> 
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;