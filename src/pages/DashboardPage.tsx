import './DashboardPage.css'
function DashboardPage() {
      // Données temporaires utilisées pour afficher les dernières demandes.
  // Elles seront remplacées plus tard par les données provenant de notre API.
  const recentTickets = [
    {
      id: 102,
      title: 'Mon ordinateur ne démarre plus',
      category: 'Matériel',
      priority: 'Haute',
      status: 'En cours',
      date: '16 sept. 2026',
    },
    {
      id: 101,
      title: 'Problème avec Outlook',
      category: 'Logiciel',
      priority: 'Moyenne',
      status: 'Résolu',
      date: '15 sept. 2026',
    },
    {
      id: 100,
      title: 'Accès au réseau impossible',
      category: 'Réseau',
      priority: 'Critique',
      status: 'En cours',
      date: '15 sept. 2026',
    },
  ]
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

  {/* Graphique simple de l'activité des tickets */}
<div className="ticket-chart">
  <svg
    viewBox="0 0 700 250"
    role="img"
    aria-label="Évolution des tickets au cours de la semaine"
  >
    {/* Ligne horizontale de référence */}
    <line
      x1="40"
      y1="200"
      x2="680"
      y2="200"
      stroke="#d5dce5"
      strokeWidth="1"
    />

    {/* Courbe représentant l'activité des tickets */}
    <polyline
      points="40,170 140,130 240,150 340,90 440,120 540,70 640,100"
      fill="none"
      stroke="#1769aa"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Points représentant chaque jour */}
    <circle cx="40" cy="170" r="5" fill="#1769aa" />
    <circle cx="140" cy="130" r="5" fill="#1769aa" />
    <circle cx="240" cy="150" r="5" fill="#1769aa" />
    <circle cx="340" cy="90" r="5" fill="#1769aa" />
    <circle cx="440" cy="120" r="5" fill="#1769aa" />
    <circle cx="540" cy="70" r="5" fill="#1769aa" />
    <circle cx="640" cy="100" r="5" fill="#1769aa" />

    {/* Jours de la semaine */}
    <text x="40" y="230" textAnchor="middle">Lun</text>
    <text x="140" y="230" textAnchor="middle">Mar</text>
    <text x="240" y="230" textAnchor="middle">Mer</text>
    <text x="340" y="230" textAnchor="middle">Jeu</text>
    <text x="440" y="230" textAnchor="middle">Ven</text>
    <text x="540" y="230" textAnchor="middle">Sam</text>
    <text x="640" y="230" textAnchor="middle">Dim</text>
  </svg>
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

 <div className="tickets-table">
  <table>
    <thead>
      <tr>
        <th>Ticket</th>
        <th>Demande</th>
        <th>Catégorie</th>
        <th>Priorité</th>
        <th>Statut</th>
        <th>Date</th>
      </tr>
    </thead>

    <tbody>
      {recentTickets.map((ticket) => (
        <tr key={ticket.id}>
          <td>#{ticket.id}</td>
          <td>{ticket.title}</td>
          <td>{ticket.category}</td>
          <td>
  <span className={`priority-badge priority-${ticket.priority.toLowerCase()}`}>
    {ticket.priority}
  </span>
</td>
          <td>
  <span className={`status-badge status-${ticket.status.toLowerCase().replace(' ', '-')}`}>
    {ticket.status}
  </span>
</td>
          <td>{ticket.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</section>
</div>
  )
}

export default DashboardPage