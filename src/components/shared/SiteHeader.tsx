import { NavLink } from 'react-router-dom'
import { useAuth } from '../../features/auth/useAuth'

const navItems = [
  { to: '/', label: 'Pocetna' },
  { to: '/o-projektu', label: 'O nama' },
  { to: '/kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
  const { isAuthenticated, logout, session } = useAuth()

  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        <span className="brand-mark">FS</span>
        <span className="brand-copy">
          <strong>FrontSamo</strong>
          <small>Two-dev studio za .NET, Azure i frontend</small>
        </span>
      </NavLink>

      <nav className="site-nav" aria-label="Glavna navigacija">
        {isAuthenticated ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            to="/dashboard"
          >
            Dashboard
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
              Logout
            </button>
          </>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            to="/prijava"
          >
            Prijava
          </NavLink>
        )}
      </nav>
    </header>
  )
}
