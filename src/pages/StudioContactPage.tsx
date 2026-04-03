import { useLanguage } from '../features/i18n/useLanguage'

export function StudioContactPage() {
  const { t } = useLanguage()
  const { contactCards } = t.content

  return (
    <section className="content-page">
      <p className="eyebrow">{t.contact.eyebrow}</p>
      <h1>{t.contact.title}</h1>
      <p className="page-lead">{t.contact.lead}</p>

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
          <h2>{t.contact.usefulTitle}</h2>
          <p>{t.contact.usefulText}</p>
        </article>
        <article className="story-card">
          <h2>{t.contact.outcomeTitle}</h2>
          <p>{t.contact.outcomeText}</p>
        </article>
      </section>
    </section>
  )
}
