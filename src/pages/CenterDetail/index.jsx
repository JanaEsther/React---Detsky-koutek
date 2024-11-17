import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import './style.css';

export const CenterDetail = () => {
  const {id} = useParams();
  
  const [center] = useOutletContext();
  let pobocka = center[id]


  if (!center[id]) {
    return <p>Pobočka nenalezena!</p>;
  }

  const {capacity, open, info } = pobocka;
  console.log(pobocka)

  return (
    <section className="one-center-more">
      <p>Kapacita: {pobocka.capacity}</p>
      <p className="open">Otevírací hodiny: {pobocka.open.mon}</p>
      <p className="open">Otevírací hodiny: {pobocka.open.tue}</p>
      <p className="open">Otevírací hodiny: {pobocka.open.wed}</p>
      <p className="open">Otevírací hodiny: {pobocka.open.thu}</p>
      <p className="open">Otevírací hodiny: {pobocka.open.fri}</p>
      <p className="open">Otevírací hodiny: {pobocka.open.sat}</p>
      <p className="open">Otevírací hodiny: {pobocka.open.sun !==null ? pobocka.open : 'Closed'}</p>
      <p>Informace: {pobocka.info}</p>
      <Link to="/center">Zpět na všechny pobočky</Link>
    </section>
  );
};
