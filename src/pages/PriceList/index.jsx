import Table from 'react-bootstrap/Table';
import './style.css'

import React from 'react'

const PriceList = () => {
  return (
    <div>
      <Table striped="columns" className="table">
        <thead>
          <tr>
            <th className="table__header">DĚTI OD 6 MĚSÍCŮ DO 3 LET</th>
            <th className="table__header">DĚTI OD 3 LET</th>
            <th className="table__header">SOUROZENEC</th>
            <th className="table__header">PERMANENTKA 10 VSTUPŮ</th>
            <th className="table__header">KLUBOVÉ ČLENSTVÍ 1 MĚSÍC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table__cell">159,- Kč</td>
            <td className="table__cell">239,- Kč</td>
            <td className="table__cell">199,- Kč</td>
            <td className="table__cell">1990,- Kč</td>
            <td className="table__cell">1390,- Kč</td>
          </tr>
        </tbody>
      </Table>
      <p class="text">
        Vstupné je časově neomezené a během daného dne je možné koutek navštívit
        opakovaně.
      </p>
    </div>
  );
}

export default PriceList
