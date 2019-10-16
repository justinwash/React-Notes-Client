import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import NewNote from './containers/NewNote/NewNote';
import Notes from './containers/Notes/Notes';
import Settings from './containers/Settings/Settings';

import AppliedRoute from './components/Routes/AppliedRoute';
import AuthenticatedRoute from './components/Routes/AuthenticatedRoute';
import UnauthenticatedRoute from './components/Routes/UnauthenticatedRoute';

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path='/' exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute
        path='/login'
        exact
        component={Login}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path='/signup'
        exact
        component={Signup}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path='/settings'
        exact
        component={Settings}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path='/notes/new'
        exact
        component={NewNote}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path='/notes/:id'
        exact
        component={Notes}
        appProps={appProps}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
