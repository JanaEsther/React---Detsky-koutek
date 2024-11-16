import React from 'react'
import { useState, useEffect } from 'react';
import {Link, Outlet} from 'react-router-dom'

export const CentersPage = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCenters(data);
      console.log(data);
    };

    fetchCenters();
  }, []);

  if (centers.length === null) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="all-centers">
      {' '}
      <h1>Pobočky</h1>{' '}
      <ul>
        {' '}
        {centers.map((center) => (
          <li key={center.id}>
            {' '}
            <Link to={`/pobocky/${center.id}`}>
              {' '}
              <h2>{center.name}</h2> <p>{center.address}</p>{' '}
            </Link>{' '}
          </li>
        ))}{' '}
      </ul>{' '}
      <Outlet />{' '}
    </div>
  );
};
