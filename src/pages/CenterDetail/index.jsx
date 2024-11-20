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

  const { address, phone, email, capacity, open, info, mapy } = pobocka;
  console.log(pobocka)

  return (
    <section className="one-center-more">
      <p>
        <strong>Adresa:</strong> {address}
      </p>
      <p>
        <strong>Telefon:</strong> {phone}
      </p>
      <p>
        <strong>E-mail:</strong> {email}
      </p>
      <p>
        <strong>Kapacita:</strong> {capacity}
      </p>
      <p>
        <strong>Otevírací doba:</strong>
      </p>
      <p className="open">Pondělí: {open.mon ? open.mon : 'Closed'}</p>
      <p className="open">Úterý: {open.tue ? open.tue : 'Closed'}</p>
      <p className="open">Středa: {open.wed ? open.wed : 'Closed'}</p>
      <p className="open">Čtvrtek: {open.thu ? open.thu : 'Closed'}</p>
      <p className="open">Pátek: {open.fri ? open.fri : 'Closed'}</p>
      <p className="open">Sobota: {open.sat ? open.sat : 'Closed'}</p>
      <p className="open">Neděle: {open.sun ? open.sun : 'Closed'}</p>
      <p>Informace: {info}</p>
      <iframe
        src={`https://frame.mapy.cz/s/${mapy}`}
        width="100%"
        height="280"
        frame="0"
      ></iframe>
      <Link to="/center">Zpět na všechny pobočky</Link>
    </section>
  );
};
