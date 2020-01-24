import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

import MainView from '@/presentation/views/main';
import NotFound from '@/presentation/views/NotFound';
import WriteEmotion from '@/presentation/views/WriteEmotion';

const EntryRoute: React.FC = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={ MainView } />
        <Route exact path="/main" component={ MainView } />
        <Route exact path="/write" component={ WriteEmotion }/>
        <Redirect to="/not-found" />
      </Switch>
    </div>
    <Route exact path="/not-found" component={ NotFound } />
  </Router>
);

export default EntryRoute;
