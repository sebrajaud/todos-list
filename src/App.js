import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

// import Todos from './features/todos';
const LazyTodos = lazy(() => import("./features/todos"));

class App extends Component {
  render() {
    return (      
      <div className="container p-5">
        <Suspense fallback={ <h1>Loading...</h1> }>
          <Switch>
            <Route path="/todos" component={LazyTodos} />
            <Redirect to="/todos" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
