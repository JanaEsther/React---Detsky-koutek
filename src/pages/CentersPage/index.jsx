import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const CentersPage = () => {
  const [center, setCenter] = useState([]);

  useEffect(() => {
    const fetchCenter = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const json = await response.json();
      const data = json.data
      setCenter(data.data);
      console.log(data.data)
      
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
        {center.map(center => (
          <div key={center.id} className="center">
            <h2> <Link to={`${center.id}`}>{center.name}</Link></h2>
            <p>{center.address}</p>
          </div>
        ))}
        <Outlet context={[center]} />
      </div>
    </section>
  );
};
