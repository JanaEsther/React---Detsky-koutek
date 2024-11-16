import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './style.css';

export const CenterDetail = ({center}) => {
  const {id} = useParams();
  
  
  if (!center) {
    return <p>Pobočka nenalezena!</p>;
  }

  const {  capacity, open, info } = center;

  return (
    <section className="one-center-more">

      <p>Kapacita: {capacity}</p>
      <p className="open">Otevírací hodiny: {open}</p>
      <p>Informace: {info}</p>
      <Link to="/centers">Zpět na všechny pobočky</Link>
    </section>
  );
};
