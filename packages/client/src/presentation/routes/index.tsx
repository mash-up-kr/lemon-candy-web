import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

import ErrorBoundary from '@/presentation/components/ErrorBoundary';
import MainView from '@/presentation/views/main';
import NotFound from '@/presentation/views/NotFound';
import Loading from '@/presentation/components/Lodaing';

const EntryRoute: React.FC = () => (
  <Router>
    <ErrorBoundary>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ MainView } />
          <Route exact path="/main" component={ MainView } />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Route exact path="/not-found" component={ NotFound } />
    </ErrorBoundary>
  </Router>
);

export default EntryRoute;
