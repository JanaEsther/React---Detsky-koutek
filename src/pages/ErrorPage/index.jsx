import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const ErrorPage = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Stránka nenalezena</p>
      <Link to="/">Home</Link>
    </div>
  );
};
