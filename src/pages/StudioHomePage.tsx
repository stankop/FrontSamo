import { Link } from 'react-router-dom'
import { useLanguage } from '../features/i18n/useLanguage'

export function StudioHomePage() {
  const { t } = useLanguage()
  const { services, differentiators, teamMembers, processSteps, trustPoints } = t.content

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="hero-text">{t.home.description}</p>
          <div className="hero-actions">
            <Link className="primary-button" to={t.routes.about}>
              {t.home.primaryCta}
            </Link>
            <Link className="secondary-button" to={t.routes.contact}>
              {t.home.secondaryCta}
            </Link>
          </div>
        </div>

        <aside className="hero-panel" aria-label={t.home.heroPanelAriaLabel}>
          <p className="panel-label">{t.home.heroPanelLabel}</p>
          <ul className="stack-list">
            {t.home.heroPanelItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="code-card">
            <span>{t.home.targetLabel}</span>
            <strong>{t.home.targetText}</strong>
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
          <p className="eyebrow">{t.home.teamEyebrow}</p>
          <h2>{t.home.teamTitle}</h2>
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
          <p className="eyebrow">{t.home.differentiatorsEyebrow}</p>
          <h2>{t.home.differentiatorsTitle}</h2>
        </div>
        <ul className="roadmap-list">
          {differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">{t.home.processEyebrow}</p>
          <h2>{t.home.processTitle}</h2>
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

      <section className="trust-strip" aria-label={t.home.trustStripAriaLabel}>
        {trustPoints.map((point) => (
          <div key={point} className="trust-pill">
            {point}
          </div>
        ))}
      </section>

      <section className="cta-section">
        <div>
          <p className="eyebrow">{t.home.ctaEyebrow}</p>
          <h2>{t.home.ctaTitle}</h2>
        </div>
        <Link className="primary-button" to={t.routes.contact}>
          {t.home.ctaButton}
        </Link>
      </section>
    </div>
  )
}
