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
import PrivateRoute from '@/presentation/containers/PrivateRoute';
import SettingView from '@/presentation/views/Setting';
import MonthList from '@/presentation/views/MonthList';
import Daily from '../views/Daily';
import EditEmotion from '../views/EditEmotion';

const EntryRoute: React.FC = () => (
  <Router>
    <ErrorBoundary>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={ MainView } />
          <PrivateRoute exact path="/main" component={ MainView } />
          <PrivateRoute exact path="/setting" component={ SettingView } />
          <PrivateRoute exact path="/reminds" component={ RemindListView } />
          <PrivateRoute exact path="/reminds/:remindId" component={ RemindDetailView } />
          <PrivateRoute exact path="/reminds/:remindId/write" component={ RemindWriteView } />
          <PrivateRoute exact path="/write" component={ WriteEmotion } />
          <Route exact path="/login" component={ LoginView } />
          <Route path="/daily/:year/:month/:day" component={ Daily }/>
          <Route exact path="/monthlist" component={ MonthList }/>
          <Route exact path="/edit/:year/:month/:day" component={ EditEmotion}/>
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Route exact path="/not-found" component={ NotFound } />
    </ErrorBoundary>
  </Router>
);

export default EntryRoute;
