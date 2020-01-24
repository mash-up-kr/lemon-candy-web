import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import MainView from '@/presentation/views/main';

const EntryRoute: React.FC = () => (
  <Router>
    <Route exact path={ ['/', '/main', '/ping'] }>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ MainView } />
          <Route exact path="/main" component={ MainView } />
        </Switch>
      </div>
    </Route>
  </Router>
);

export default EntryRoute;
