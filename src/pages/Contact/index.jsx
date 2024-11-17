import React from 'react'
import './style.css'

export const Contact = () => {
  return (
    <section>
      <h2>Kontakt</h2>
      <p>
        Pokud máte jakékoliv otázky, nápady nebo nám chcete prostě jen napsat,
        zanechte nám zprávu přes náš kontaktní formulář a my se vám co nejdříve
        ozveme.
        <br />
        Můžete nám také napsat e-mail na adresu: info@detskykoutek.cz nebo nás kontaktovat přes naše sociální
        sítě. <br />
        Děkujeme vám za vaši zpětnou vazbu a těšíme se na vaše zprávy!
      </p>

      <h2>Zanechte nám zprávu</h2>
      <form action="" method="get" className="form-example">
        <div className="form-example">
          <label htmlFor="name">Vaše křestní jméno : </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-example">
          <label htmlFor="surname">Vaše příjmení : </label>
          <input type="text" name="surname" id="surname" required />
        </div>
        <label htmlFor="story">Vaše zpráva</label>
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
          <label htmlFor="surname">Zavolejte mi </label>
          <input type="text" name="surname" id="surname" />
        </div>
        <div className="form-example">
          <button className="button" type="submit" value="Odeslat">Odeslat</button>
          </div>
      </form>
    </section>
  );
}


