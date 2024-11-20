import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './style.css';

export const About = () => {
  return (
    <div>
      <h2 className="title-about">O nás</h2>

      <p className="onas__p">
        Jsme tým mladých nadšenců do vzdělávání a zábavy pro děti. Naše poslání
        je vytvářet podnětné a zábavné aktivity pro děti, které podporují jejich
        rozvoj a učení nových dovedností. Vytvořili jsme dětský koutek jako
        místo, kde se děti cítí v bezpečí, mohou objevovat a zároveň se něco
        nového naučit. Doufáme, že se k nám vydáte a budete s námi sdílet své
        zážitky a nápady na další aktivity!
      </p>
      <h3>Jak to u nás vypadá</h3>
      <Container>
        <Row>
          <Col xs={3} md={2}>
            <Image src="images/" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
          </Col>
        </Row>
      </Container>
      <h3>Náš tým</h3>
    </div>
  );
};
