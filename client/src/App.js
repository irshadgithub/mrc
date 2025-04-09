import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Reports from './pages/Reports';
import Upload from './pages/Upload';

const originalError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('ResizeObserver loop completed with undelivered notifications')
  ) {
    return;
  }
  originalError(...args);
};

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/reports" component={Reports} />
        <PrivateRoute path="/upload" component={Upload} />
        <Route path="/" exact component={() => <h2>Home</h2>} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;