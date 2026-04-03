import { useLanguage } from '../features/i18n/useLanguage'

export function StudioAboutPage() {
  const { t } = useLanguage()
  const { teamMembers } = t.content

  return (
    <section className="content-page">
      <p className="eyebrow">{t.about.eyebrow}</p>
      <h1>{t.about.title}</h1>
      <p className="page-lead">{t.about.lead}</p>

      <div className="folder-grid">
        {teamMembers.map((member) => (
          <article key={member.role} className="folder-card">
            <p className="member-role">{member.role}</p>
            <h2>{member.focus}</h2>
            <p>{member.bio}</p>
          </article>
        ))}
      </div>

      <section className="story-section">
        <article className="story-card">
          <h2>{t.about.expectationsTitle}</h2>
          <p>{t.about.expectationsText}</p>
        </article>
        <article className="story-card">
          <h2>{t.about.projectsTitle}</h2>
          <p>{t.about.projectsText}</p>
        </article>
      </section>
    </section>
  )
}
