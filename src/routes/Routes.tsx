import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import Game from './Game/Game';
import NewGame from './Game/NewGame';
import Home from './Home/Home';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/home" exact>
      <Home />
    </Route>
    <Route path="/loading" exact component={Loading} />
    <Route path="/game" exact component={Game}></Route>
    <Route path="/new-game" exact component={NewGame} />
    <Route path="/*" exact>
      <Redirect to="/new-game" />
    </Route>
  </Switch>
);

export default Routes;
