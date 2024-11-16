import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CenterDetail } from '../CenterDetail/index';

export const CentersPage = () => {
  const [center, setCenter] = useState([]);

  useEffect(() => {
    const fetchCenter = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const data = await response.json();
      setCenter(data);
      console.log(data)
      
    };

    fetchCenter();
  }, []);

  if (center === null) {
    return <p>Loading ...</p>;
  }

  return (
    <section>
      <div className="all-centers">
        <h1>Pobočky</h1>
        {center.map((center) => (
          <div key={center.id} className="center">
            <h2> <Link to={`/pobočky/${center.id}`}>{center.name}</Link></h2>
            <p>{center.address}</p>
          </div>
        ))}
        <Outlet />
      </div>
    </section>
  );
};
