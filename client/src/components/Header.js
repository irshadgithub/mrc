import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../styles.css'; // Import the new CSS file

const Header = () => {
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    console.log('Logout clicked');
    // Clear the token from localStorage
    localStorage.removeItem('token');
    console.log('Token removed');
    // Redirect to the login page
    history.push('/login');
    console.log('Redirected to login');
  };

  return (
    <header>
      <h1>MRC Report Management System</h1>
      <nav>
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/reports" activeClassName="active">Reports</NavLink>
        <NavLink to="/upload" activeClassName="active">Upload</NavLink>
        <NavLink to="/login" activeClassName="active">Login</NavLink>
        <NavLink to="/logout" onClick={handleLogout}>Logout</NavLink>
      </nav>
    </header>
  );
};

export default Header;