import './MyTicketsPage.css'
import { useNavigate } from 'react-router-dom'

function MyTicketsPage() {

      // Permet de naviguer vers une autre page sans recharger l'application
  const navigate = useNavigate()

  // Données temporaires utilisées pour afficher les demandes de l'utilisateur.
  // Plus tard, ces données viendront de notre API.
  const tickets = [
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

  return (
    <div className="my-tickets-page">
      {/* En-tête de la page */}
      <header className="my-tickets-header">
        <div>
          <h1>Mes demandes</h1>
          <p>Consultez et suivez vos demandes de support informatique.</p>
        </div>

        {/* Bouton permettant de créer une nouvelle demande */}
        <button
  type="button"
  onClick={() => navigate('/tickets/new')}
>
  + Nouvelle demande
</button>
      </header>

      {/* Zone de recherche et de filtres */}
      <section className="tickets-filters">
        <input
          type="search"
          placeholder="Rechercher une demande..."
          aria-label="Rechercher une demande"
        />

        <select defaultValue="">
          <option value="">Tous les statuts</option>
          <option value="open">Ouvert</option>
          <option value="in-progress">En cours</option>
          <option value="resolved">Résolu</option>
          <option value="closed">Fermé</option>
        </select>

        <select defaultValue="">
          <option value="">Toutes les priorités</option>
          <option value="low">Faible</option>
          <option value="medium">Moyenne</option>
          <option value="high">Haute</option>
          <option value="critical">Critique</option>
        </select>

        <select defaultValue="">
          <option value="">Toutes les catégories</option>
          <option value="hardware">Matériel</option>
          <option value="software">Logiciel</option>
          <option value="network">Réseau</option>
          <option value="account">Compte</option>
          <option value="printer">Imprimante</option>
          <option value="other">Autre</option>
        </select>
      </section>

      {/* Tableau contenant les demandes */}
      <section className="tickets-list">
        <div className="section-header">
          <div>
            <h2>Mes demandes</h2>
            <p>{tickets.length} demande(s) au total</p>
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
              {tickets.map((ticket) => (
                <tr
  key={ticket.id}
  onClick={() => navigate(`/tickets/${ticket.id}`)}
>
                  <td>#{ticket.id}</td>
                  <td>{ticket.title}</td>
                  <td>{ticket.category}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.status}</td>
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

export default MyTicketsPage