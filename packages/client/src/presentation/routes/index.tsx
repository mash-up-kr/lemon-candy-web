import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

import ErrorBoundary from '@/presentation/components/ErrorBoundary';
import MainView from '@/presentation/views/main';
import NotFound from '@/presentation/views/NotFound';
import WriteEmotion from '@/presentation/views/WriteEmotion';
import RemindListView from '@/presentation/views/RemindList';
import RemindDetailView from '@/presentation/views/RemindDetail';

const EntryRoute: React.FC = () => (
  <Router>
    <ErrorBoundary>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ MainView } />
          <Route exact path="/main" component={ MainView } />
          <Route exact path="/setting" component={ MainView } />
          <Route exact path="/reminds" component={ RemindListView } />
          <Route exact path="/reminds/:remindId" component={ RemindDetailView } />
          <Route exact path="/write" component={ WriteEmotion } />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Route exact path="/not-found" component={ NotFound } />
    </ErrorBoundary>
  </Router>
);

export default EntryRoute;
