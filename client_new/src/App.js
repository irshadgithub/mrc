import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import MakePayment from './pages/MakePayment';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project-detail" element={<ProjectDetail />} />
        <Route path="/make-payment" element={<MakePayment />} />
      </Routes>
    </Router>
  );
};

export default App;