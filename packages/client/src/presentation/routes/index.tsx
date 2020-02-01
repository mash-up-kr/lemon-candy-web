import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

import ErrorBoundary from '@/presentation/components/ErrorBoundary';
import MainView from '@/presentation/views/main';
import NotFound from '@/presentation/views/NotFound';
import WriteEmotion from '@/presentation/views/WriteEmotion';
import MonthList from '@/presentation/views/MonthList';
import Daily from '../views/Daily';
import EditEmotion from '../views/EditEmotion';

const EntryRoute: React.FC = () => (
  <Router>
    <ErrorBoundary>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ MainView } />
          <Route exact path="/main" component={ MainView } />
          <Route exact path="/setting" component={ MainView } />
          <Route exact path="/remind" component={ MainView } />
          <Route exact path="/write" component={ WriteEmotion } />
          <Route exact path="/monthlist" component={ MonthList }/>
          <Route path="/daily/:year/:month/:day" component={ Daily }/>
          <Route exact path="/edit/:year/:month/:day" component={ EditEmotion}/>
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Route exact path="/not-found" component={ NotFound } />
    </ErrorBoundary>
  </Router>
);

export default EntryRoute;
