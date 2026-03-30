import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="content-page not-found-page">
      <p className="eyebrow">404</p>
      <h1>Ova ruta jos ne postoji.</h1>
      <p className="page-lead">
        Nema problema, vracamo te na pocetnu da nastavimo odatle.
      </p>
      <Link className="primary-button" to="/">
        Nazad na pocetnu
      </Link>
    </section>
  )
}
