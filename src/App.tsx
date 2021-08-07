import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import './App.css';

import 'antd/dist/antd.css';

const ListFeedback = React.lazy(() => import('./components/ListFeedback'));
const ShowFeedback = React.lazy(() => import('./components/ShowFeedback'));
const CreateFeedback = React.lazy(() => import('./components/CreateFeedback'));
const EditFeedback = React.lazy(() => import('./components/EditFeedback'));

const App: React.FC = () => {
  return (
    <Router>
      <React.Suspense
        fallback={
          <div className="centered">
            <Spin size="large" />
          </div>
        }
      >
        <Switch>
          <Route path="/" component={ListFeedback} exact />
          <Route path="/feedbacks" component={ListFeedback} exact />
          <Route path="/feedbacks/new" component={CreateFeedback} exact />
          <Route path="/feedbacks/:id" component={ShowFeedback} exact />
          <Route path="/feedbacks/edit/:id" component={EditFeedback} exact />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
