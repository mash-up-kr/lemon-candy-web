import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

import ErrorBoundary from '@/presentation/components/ErrorBoundary';
import MainView from '@/presentation/views/main';
import NotFound from '@/presentation/views/NotFound';
import RemindDetailView from '@/presentation/views/RemindDetail';
import RemindListView from '@/presentation/views/RemindList';
import RemindWriteView from '@/presentation/views/RemindWrite';
import WriteEmotion from '@/presentation/views/WriteEmotion';
import LoginView from '@/presentation/views/login';

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
          <Route exact path="/reminds/:remindId/write" component={ RemindWriteView } />
          <Route exact path="/write" component={ WriteEmotion } />
          <Route exact path="/login" component= { LoginView } />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Route exact path="/not-found" component={ NotFound } />
    </ErrorBoundary>
  </Router>
);

export default EntryRoute;
