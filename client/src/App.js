import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Header2 from './components/Header2'; // Import the alternate header
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Login1 from './pages/Login1';
import Reports from './pages/Reports';
import ProjectList from './pages/ProjectList';
import Upload from './pages/Upload';

// Suppress ResizeObserver warning
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

const AppLayout = () => {
  const location = useLocation();
  const hideLayoutRoutes = ['/login1'];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  const isProjectListRoute = location.pathname === '/project-list';


  return (
    <>
      {!shouldHideLayout && (
        isProjectListRoute ? <Header2 /> : <Header />
      )}

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/login1" component={Login1} />
        <PrivateRoute path="/reports" component={Reports} />
        <Route path="/project-list" component={ProjectList} />
        <PrivateRoute path="/upload" component={Upload} />
        <Route path="/" exact component={() => <h2>Home</h2>} />
      </Switch>

      {!shouldHideLayout && (
        isProjectListRoute ? <Footer2 /> : <Footer />
      )}

      
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
