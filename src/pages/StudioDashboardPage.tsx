export function StudioDashboardPage() {
  return (
    <section className="content-page">
      <p className="eyebrow">Dashboard</p>
      <h1>Ovo je zasticena stranica dostupna samo prijavljenim korisnicima.</h1>
      <p className="page-lead">
        Ovde kasnije mozemo da prikazemo pregled naloga, internih zadataka,
        dokumenata ili bilo kog sadrzaja koji treba da bude iza prijave.
      </p>

      <section className="story-section">
        <article className="story-card">
          <h2>Sta sada radi</h2>
          <p>
            Ako korisnik nije prijavljen, protected route ga salje na login
            stranicu. Ako jeste, moze normalno da otvori dashboard.
          </p>
        </article>
        <article className="story-card">
          <h2>Sledeci korak</h2>
          <p>
            Sledece ovde mozemo da povucemo korisnicke podatke sa API-ja i
            prikazemo pravi privatni sadrzaj.
          </p>
        </article>
      </section>
    </section>
  )
}
