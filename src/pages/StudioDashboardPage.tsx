import { useLanguage } from '../features/i18n/useLanguage'

export function StudioDashboardPage() {
  const { t } = useLanguage()

  return (
    <section className="content-page">
      <p className="eyebrow">{t.dashboard.eyebrow}</p>
      <h1>{t.dashboard.title}</h1>
      <p className="page-lead">{t.dashboard.lead}</p>

      <section className="story-section">
        <article className="story-card">
          <h2>{t.dashboard.currentTitle}</h2>
          <p>{t.dashboard.currentText}</p>
        </article>
        <article className="story-card">
          <h2>{t.dashboard.nextTitle}</h2>
          <p>{t.dashboard.nextText}</p>
        </article>
      </section>
    </section>
  )
}
