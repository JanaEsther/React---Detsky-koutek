import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
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
      <p>
        V koutku dominují pastelové barvy, přednost dostaly dřevěné edukativní
        hračky a celkový prostor tak působí klidně a útulně. Kromě dřevěných
        hraček můžeme nabídnout pracovní stůl na ruční práce, ponk s nářadím pro
        kluky, kočárky a panenky pro holčičky, dále TV box, oblíbený bazének s
        kuličkami a skluzavkou. Pro malé i velké tablet zónu. Pro děti máme
        připraven každodenní program formou výtvarných, pohybových, hudebních či
        soutěžních aktivit. Dětem je v koutku poskytováno základní hygienické
        ošetření dle potřeby. Pro maminky nejmenších je připraven přebalovací
        pult a veškeré hygienické potřeby.
      </p>
      <p>
        <b>
          Pobyt v dětském koutku je z hygienických důvodů možný pouze v
          ponožkách. Platba pouze v hotovosti. Platební karty nepřijímáme.
        </b>
      </p>
      <h3>Jak to u nás vypadá</h3>
      <Container className="photo-container">
        <Image className="image" src="images/koutek1.jpeg" />

        <Image className="image" src="images/koutek2.jpg" />

        <Image className="image" src="images/koutek3.jpg" />
      </Container>
   
    </div>
  );
};
