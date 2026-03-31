import { contactCards } from '../data/siteContent'

export function ContactPage() {
  return (
    <section className="content-page">
      <p className="eyebrow">Kontakt</p>
      <h1>Najbolji prvi korak je kratak razgovor o vasem proizvodu, timu i prioritetima.</h1>
      <p className="page-lead">
        Ovde kasnije mozemo da dodamo pravu formu, email adresu, `Calendly`
        link ili direktan poziv na konsultacije. Za sada je stranica postavljena
        kao jasan CTA ekran.
      </p>

      <div className="contact-panel">
        {contactCards.map((card) => (
          <div key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <section className="story-section">
        <article className="story-card">
          <h2>Sta nam je korisno da znamo</h2>
          <p>
            Faza projekta, rokovi, postojeći stack, glavni poslovni cilj i gde
            vam trenutno treba najveca pomoc.
          </p>
        </article>
        <article className="story-card">
          <h2>Sta vi dobijate</h2>
          <p>
            Realan predlog saradnje, tehnicki smer i procenu kako da naredni
            koraci budu sto jednostavniji i isplativiji.
          </p>
        </article>
      </section>
    </section>
  )
}
