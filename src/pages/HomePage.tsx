import { Link } from 'react-router-dom'
import {
  differentiators,
  processSteps,
  services,
  teamMembers,
  trustPoints,
} from '../data/siteContent'

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">.NET, Azure i frontend studio</p>
          <h1>Gradimo moderne poslovne aplikacije kao mali tim od dva developera.</h1>
          <p className="hero-text">
            Pomazemo klijentima da od ideje ili postojećeg proizvoda dodju do
            stabilnog softvera, jasne cloud arhitekture i frontend iskustva koje
            izgleda profesionalno i radi brzo.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/o-projektu">
              Upoznajte nas bolje
            </Link>
            <Link className="secondary-button" to="/kontakt">
              Pokrenimo razgovor
            </Link>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Pregled usluga">
          <p className="panel-label">Glavne oblasti</p>
          <ul className="stack-list">
            <li>.NET backend</li>
            <li>Azure infrastruktura</li>
            <li>Web aplikacije i frontend</li>
            <li>Direktna saradnja sa klijentom</li>
          </ul>
          <div className="code-card">
            <span>Za koga radimo</span>
            <strong>Startupi, SaaS proizvodi, interni alati i firme koje zele pouzdan razvojni tim.</strong>
          </div>
        </aside>
      </section>

      <section className="feature-grid">
        {services.map((item) => (
          <article key={item.title} className="feature-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="team-section">
        <div>
          <p className="eyebrow">Ko stoji iza projekta</p>
          <h2>Dvojica developera koja pokrivaju ceo put od API-ja do korisnickog interfejsa.</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.role} className="team-card">
              <p className="member-role">{member.role}</p>
              <h3>{member.focus}</h3>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="roadmap-section">
        <div>
          <p className="eyebrow">Zasto klijenti biraju mali tim</p>
          <h2>Dobijate fokus, brzinu i direktan kontakt sa ljudima koji stvarno rade na proizvodu.</h2>
        </div>
        <ul className="roadmap-list">
          {differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">Kako radimo</p>
          <h2>Proces je jednostavan, pregledan i usmeren na rezultat.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.title} className="process-card">
              <span className="process-badge">{step.title}</span>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-strip" aria-label="Klijentske vrednosti">
        {trustPoints.map((point) => (
          <div key={point} className="trust-pill">
            {point}
          </div>
        ))}
      </section>

      <section className="cta-section">
        <div>
          <p className="eyebrow">Imate ideju ili postojeci proizvod</p>
          <h2>Hajde da vidimo kako mozemo da pomognemo na backendu, cloudu ili frontendu.</h2>
        </div>
        <Link className="primary-button" to="/kontakt">
          Kontakt strana
        </Link>
      </section>
    </div>
  )
}
