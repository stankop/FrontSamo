import { Link } from 'react-router-dom'
import { useLanguage } from '../features/i18n/useLanguage'

export function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <section className="content-page not-found-page">
      <p className="eyebrow">{t.notFound.eyebrow}</p>
      <h1>{t.notFound.title}</h1>
      <p className="page-lead">{t.notFound.lead}</p>
      <Link className="primary-button" to={t.routes.home}>
        {t.notFound.backHome}
      </Link>
    </section>
  )
}
