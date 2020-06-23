import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './containers/game';
import Games from './containers/games';
import NotFound from './containers/not-found';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Games} />
        <Route path="/game" component={Game} />
        <Route path="/games" component={Games} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
