import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Pocetna' },
  { to: '/o-projektu', label: 'O nama' },
  { to: '/kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
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
      </nav>
    </header>
  )
}
