function DashboardPage() {
  // Page principale affichée après la connexion de l'utilisateur
  return (
    <div className="dashboard-page">
  {/* En-tête du tableau de bord */}
  <header className="dashboard-header">
    <div>
      <h1>Tableau de bord</h1>
      <p>Bonjour 👋 Voici un aperçu de votre support.</p>
    </div>
  </header>
  {/* Indicateurs principaux du support */}
<section className="dashboard-kpis">
  <article className="kpi-card">
    <span>🎫</span>
    <div>
      <p>Tickets ouverts</p>
      <strong>12</strong>
    </div>
  </article>

  <article className="kpi-card">
    <span>⚙️</span>
    <div>
      <p>En cours</p>
      <strong>8</strong>
    </div>
  </article>

  <article className="kpi-card">
    <span>✓</span>
    <div>
      <p>Résolus</p>
      <strong>24</strong>
    </div>
  </article>

  <article className="kpi-card">
    <span>⚠️</span>
    <div>
      <p>Urgents</p>
      <strong>3</strong>
    </div>
  </article>
</section>
{/* Zone réservée au graphique de suivi hebdomadaire */}
<section className="dashboard-section">
  <div className="section-header">
    <div>
      <h2>Activité des tickets</h2>
      <p>Évolution des demandes au cours de la semaine.</p>
    </div>
  </div>

  <div className="chart-placeholder">
    <p>Graphique des tickets de la semaine</p>
  </div>
</section>
{/* Liste des demandes les plus récentes */}
<section className="dashboard-section">
  <div className="section-header">
    <div>
      <h2>Dernières demandes</h2>
      <p>Les tickets récemment créés ou mis à jour.</p>
    </div>
  </div>

  <div className="tickets-table-placeholder">
    <p>Tableau des dernières demandes</p>
  </div>
</section>
</div>
  )
}

export default DashboardPage