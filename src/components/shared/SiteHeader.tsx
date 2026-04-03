import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../features/auth/useAuth'
import { localizePathname } from '../../features/i18n/routes'
import { useLanguage } from '../../features/i18n/useLanguage'

export function SiteHeader() {
  const { isAuthenticated, logout, session } = useAuth()
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { to: t.routes.home, label: t.header.nav.home },
    { to: t.routes.about, label: t.header.nav.about },
    { to: t.routes.contact, label: t.header.nav.contact },
  ]

  function handleLanguageChange(nextLanguage: 'sr' | 'en') {
    if (nextLanguage === language) {
      return
    }

    setLanguage(nextLanguage)

    const nextPathname = localizePathname(location.pathname, nextLanguage)
    navigate(
      {
        pathname: nextPathname,
        search: location.search,
        hash: location.hash,
      },
      { replace: true },
    )
  }

  return (
    <header className="site-header">
      <NavLink className="brand" to={t.routes.home}>
        <span className="brand-mark">FS</span>
        <span className="brand-copy">
          <strong>FrontSamo</strong>
          <small>{t.header.brandTagline}</small>
        </span>
      </NavLink>

      <div className="site-header-actions">
        <div className="language-switcher" aria-label={t.header.languageSwitcherLabel} role="group">
          <button
            aria-pressed={language === 'sr'}
            className={
              language === 'sr'
                ? 'language-button language-button-sr language-button-active'
                : 'language-button language-button-sr'
            }
            onClick={() => handleLanguageChange('sr')}
            title={t.header.languages.sr}
            type="button"
          >
            <span className="language-button-label">SR</span>
          </button>
          <button
            aria-pressed={language === 'en'}
            className={
              language === 'en'
                ? 'language-button language-button-en language-button-active'
                : 'language-button language-button-en'
            }
            onClick={() => handleLanguageChange('en')}
            title={t.header.languages.en}
            type="button"
          >
            <span className="language-button-label">EN</span>
          </button>
        </div>

        <nav className="site-nav" aria-label={t.header.navAriaLabel}>
        {isAuthenticated ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            to={t.routes.dashboard}
          >
            {t.header.nav.dashboard}
          </NavLink>
        ) : null}

        {navItems.map((item) => (
          <NavLink
            key={item.to}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}

        {isAuthenticated ? (
          <>
            <span className="nav-user-pill">{session?.user.displayName}</span>
            <button className="nav-link nav-button" onClick={logout} type="button">
              {t.header.nav.logout}
            </button>
          </>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            to={t.routes.login}
          >
            {t.header.nav.login}
          </NavLink>
        )}
        </nav>
      </div>
    </header>
  )
}

