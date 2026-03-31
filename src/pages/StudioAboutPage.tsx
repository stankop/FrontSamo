import { teamMembers } from '../data/companyContent'

export function StudioAboutPage() {
  return (
    <section className="content-page">
      <p className="eyebrow">O nama</p>
      <h1>Ne predstavljamo agenciju sa velikim timom, vec malu partnersku ekipu koja licno vodi razvoj.</h1>
      <p className="page-lead">
        To je nasa prednost. Klijenti dobijaju direktnu komunikaciju, brze
        odluke i ljude koji istovremeno razumeju .NET, Azure i frontend
        deo proizvoda.
      </p>

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
          <h2>Sta klijenti mogu da ocekuju</h2>
          <p>
            Jasno definisan opseg rada, redovne isporuke, tehnicke odluke koje
            imaju smisla i kod koji moze dalje da se odrzava i razvija.
          </p>
        </article>
        <article className="story-card">
          <h2>Kakve projekte volimo</h2>
          <p>
            SaaS proizvode, interne platforme, B2B alate, modernizaciju starih
            sistema i sve situacije gde backend, cloud i frontend moraju da
            rade kao jedna celina.
          </p>
        </article>
      </section>
    </section>
  )
}
