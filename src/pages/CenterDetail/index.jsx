import React from "react";
import { useParams, Link } from 'react-router-dom';
import './style.css'



const CenterDetail = () => {
  const { CenterId } = useParams();
  const center =movies.find((oneCenter)=>{
return oneCenter.id === parseInt(CenterId)
  })

  const {name, address, capacity, open, info} = center

  return (
    <section className="one-center-more">
      <p>{name}</p>
      <p>Adresa:{address}</p>
      <p>Kapacita:{capacity}</p>
      <p className="open">Otevírací hodiny:{open}</p>
      <p>Informace: {info}</p>
      <Link to="/centers">Zpět na všechny pobočky</Link>
    </section>
  );
}

export default CenterDetail;
