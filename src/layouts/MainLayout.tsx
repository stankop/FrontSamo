import { Outlet } from 'react-router-dom'
import { SiteFooter } from '../components/shared/SiteFooter'
import { SiteHeader } from '../components/shared/SiteHeader'

export function MainLayout() {
  return (
    <div className="app-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />
      <SiteHeader />
      <main className="page-content">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
