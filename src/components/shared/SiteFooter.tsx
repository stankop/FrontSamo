import { useLanguage } from '../../features/i18n/useLanguage'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <p>{t.footer.line1}</p>
      <p className="footer-note">{t.footer.line2}</p>
    </footer>
  )
}
