import React from 'react'
import './style.css'

export const Contact = () => {
  return (
    <section>
      <h2>Kontakt</h2>
      <p>
        Pokud máte jakékoliv otázky, nápady nebo nám chcete prostě jen napsat,
        <br />
        zanechte nám zprávu přes náš kontaktní formulář a my se vám co nejdříve
        ozveme.
      </p>
      <p>
        Můžete nám také napsat e-mail na adresu: info@detskykoutek.cz
        <br />
        nebo nás kontaktovat přes naše sociální sítě. <br />
        Děkujeme vám za vaši zpětnou vazbu a těšíme se na vaše zprávy!
      </p>

      <h2>Zanechte nám zprávu</h2>
      <form action="" method="get" className="form-example">
        <div className="form-example">
          <label htmlFor="name">
            Vaše křestní jméno :<b>*</b>
          </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-example">
          <label htmlFor="surname">
            Vaše příjmení :<b>*</b>
          </label>
          <input type="text" name="surname" id="surname" required />
        </div>
        <label htmlFor="story">
          Vaše zpráva <b>*</b>
        </label>
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          required
        ></textarea>

        <h2>Děkujeme. Jak si přejete abychom vás kontaktovali?</h2>
        <div className="form-example">
          <label htmlFor="email">E-mailem </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-example">
          <label htmlFor="phone">Zavolejte mi </label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+420 xxx xxx xxx" required/>
        </div>
        <div className="form-example">
          <button className="button" type="submit" value="Odeslat">
            Odeslat
          </button>
        </div>
      </form>
    </section>
  );
}


