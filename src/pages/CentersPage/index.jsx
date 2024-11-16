import React from 'react'
import { useState, useEffect } from 'react';

export const CentersPage = () => {
  const [centers, setCenters] = useState([]);
  
  useEffect(() => {
    const fetchCenters = async () => {
     
        const response = await fetch('http://localhost:4000/api/centers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setCenters(json.data);
        console.log(data)
  
    };

    fetchCenters();
  }, []);

  if (centers.length === null){
    return <p>Loading ...</p>
  }

  return (
      <div className="all-centers">
        <h1>Pobočky</h1>
        {centers.map((center) => {
          const { id, name, address} = center;

          return (
            <div className="one-center" key={id}>
              <h2>{name}</h2>
              <p>{address}</p>
            </div>
          );
        })}
      </div>
   
  );
}
