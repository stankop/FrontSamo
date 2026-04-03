import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import { useLanguage } from '../features/i18n/useLanguage'

export function StudioHomePage() {
  const { t } = useLanguage()
  const { services, differentiators, teamMembers, processSteps, trustPoints } = t.content

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="hero-copy-topline" />
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="hero-text">{t.home.description}</p>
          <div className="hero-signal-row" aria-hidden="true">
            <span className="hero-signal-dot" />
            <span className="hero-signal-line" />
            <span className="hero-signal-dot" />
          </div>
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
          <div className="hero-panel-frame">
            <div className="hero-panel-glow hero-panel-glow-top" />
            <div className="hero-panel-glow hero-panel-glow-bottom" />
            <div className="hero-panel-head">
              <p className="panel-label">{t.home.heroPanelLabel}</p>
              <div className="hero-panel-pills">
                <span>01</span>
                <span>02</span>
                <span>03</span>
              </div>
            </div>

            <div className="hero-showcase">
              <div className="hero-screen hero-screen-left">
                {t.home.heroPanelItems.slice(0, 2).map((item) => (
                  <div key={item} className="hero-mini-card">
                    <span className="hero-mini-label">{item}</span>
                    <div className="hero-mini-line" />
                    <div className="hero-mini-line hero-mini-line-short" />
                  </div>
                ))}
              </div>

              <div className="hero-screen hero-screen-center">
                <div className="hero-screen-badge">{t.home.targetLabel}</div>
                <div className="hero-image-shell">
                  <img
                    alt="Remotum showcase preview"
                    className="hero-image"
                    src={heroImage}
                  />
                </div>
                <div className="hero-screen-grid">
                  {services.map((item) => (
                    <div key={item.title} className="hero-screen-grid-card">
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-screen hero-screen-right">
                {t.home.heroPanelItems.slice(2).map((item) => (
                  <div key={item} className="hero-mini-card hero-mini-card-dark">
                    <span className="hero-mini-label">{item}</span>
                    <div className="hero-mini-line" />
                    <div className="hero-mini-line hero-mini-line-short" />
                  </div>
                ))}
              </div>
            </div>

            <div className="code-card">
              <span>{t.home.targetLabel}</span>
              <strong>{t.home.targetText}</strong>
            </div>
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
