import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TicketManagementPage.css'


function TicketManagementPage() {

// Permet de naviguer vers le détail d'un ticket
const navigate = useNavigate()

// Stocke le texte saisi dans la recherche
const [searchTerm, setSearchTerm] = useState('')

// Stocke le statut sélectionné dans le filtre
const [statusFilter, setStatusFilter] = useState('')
// Stocke la priorité sélectionnée dans le filtre
const [priorityFilter, setPriorityFilter] = useState('')

// Stocke la catégorie sélectionnée dans le filtre
const [categoryFilter, setCategoryFilter] = useState('')


    // Données temporaires utilisées pour construire le tableau.
// Plus tard, ces informations viendront de notre API.
const tickets = [
  {
    id: 102,
    title: 'Mon ordinateur ne fonctionne plus',
    category: 'Matériel',
    priority: 'Haute',
    status: 'En cours',
    technician: 'À assigner',
  },
  {
    id: 101,
    title: 'Problème avec Outlook',
    category: 'Logiciel',
    priority: 'Moyenne',
    status: 'Résolu',
    technician: 'Marc Tremblay',
  },
  {
    id: 100,
    title: 'Accès au réseau impossible',
    category: 'Réseau',
    priority: 'Critique',
    status: 'En cours',
    technician: 'Sophie Martin',
  },
]

// Filtre les tickets selon la recherche et le statut sélectionné.
const filteredTickets = tickets.filter((ticket) => {
  const search = searchTerm.toLowerCase().trim()

  const matchesSearch =
    ticket.id.toString().includes(search) ||
    ticket.title.toLowerCase().includes(search)

  const matchesStatus =
    statusFilter === '' ||
    ticket.status ===
      {
        open: 'Ouvert',
        'in-progress': 'En cours',
        resolved: 'Résolu',
        closed: 'Fermé',
      }[statusFilter]

      // Vérifie si le ticket correspond à la priorité sélectionnée
const matchesPriority =
  priorityFilter === '' ||
  ticket.priority ===
    {
      low: 'Faible',
      medium: 'Moyenne',
      high: 'Haute',
      critical: 'Critique',
    }[priorityFilter]

    // Vérifie si le ticket correspond à la catégorie sélectionnée
const matchesCategory =
  categoryFilter === '' ||
  ticket.category ===
    {
      hardware: 'Matériel',
      software: 'Logiciel',
      network: 'Réseau',
      account: 'Compte',
      printer: 'Imprimante',
      other: 'Autre',
    }[categoryFilter]

  return (
  matchesSearch &&
  matchesStatus &&
  matchesPriority &&
  matchesCategory
)
})
  return (
    <div className="ticket-management-page">
      <header className="ticket-management-header">
        <div>
          <h1>Gestion des tickets</h1>
          <p>
            Consultez et gérez les demandes de support informatique.
          </p>
        </div>
      </header>
      <section className="ticket-management-card">
  <div className="section-header">
    <div>
      <h2>Tous les tickets</h2>
      <p>{filteredTickets.length} ticket(s) affiché(s)</p>
    </div>
  </div>
<div className="management-filters">

  {/* Barre de recherche des tickets */}
<div className="management-search">
  <label htmlFor="ticket-search">Rechercher un ticket</label>

  <input
    type="search"
    id="ticket-search"
    placeholder="Rechercher par numéro ou titre..."
    value={searchTerm}
    onChange={(event) => setSearchTerm(event.target.value)}
  />
</div>
{/* Filtre permettant de sélectionner un statut */}
<div className="management-filter">
  <label htmlFor="status-filter">Statut</label>

  <select
  id="status-filter"
  value={statusFilter}
  onChange={(event) => setStatusFilter(event.target.value)}
>
    <option value="">Tous les statuts</option>
    <option value="open">Ouvert</option>
    <option value="in-progress">En cours</option>
    <option value="resolved">Résolu</option>
    <option value="closed">Fermé</option>
  </select>
</div>

{/* Filtre permettant de sélectionner une priorité */}
<div className="management-filter">
  <label htmlFor="priority-filter">Priorité</label>

  <select
  id="priority-filter"
  value={priorityFilter}
  onChange={(event) => setPriorityFilter(event.target.value)}
>
    <option value="">Toutes les priorités</option>
    <option value="low">Faible</option>
    <option value="medium">Moyenne</option>
    <option value="high">Haute</option>
    <option value="critical">Critique</option>
  </select>
</div>

{/* Filtre permettant de sélectionner une catégorie */}
<div className="management-filter">
  <label htmlFor="category-filter">Catégorie</label>

  <select
  id="category-filter"
  value={categoryFilter}
  onChange={(event) => setCategoryFilter(event.target.value)}
>
    <option value="">Toutes les catégories</option>
    <option value="hardware">Matériel</option>
    <option value="software">Logiciel</option>
    <option value="network">Réseau</option>
    <option value="account">Compte</option>
    <option value="printer">Imprimante</option>
    <option value="other">Autre</option>
  </select>
</div>

</div>
  <div className="management-table">
  <table>
    <thead>
      <tr>
        <th>Ticket</th>
        <th>Demande</th>
        <th>Catégorie</th>
        <th>Priorité</th>
        <th>Statut</th>
        <th>Technicien</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
  {filteredTickets.length > 0 ? (
    filteredTickets.map((ticket) => (
      <tr
        key={ticket.id}
        onClick={() => navigate(`/tickets/${ticket.id}`)}
      >
        <td>#{ticket.id}</td>
        <td>{ticket.title}</td>
        <td>{ticket.category}</td>
        <td>
  <span
    className={`priority-badge priority-${ticket.priority
      .toLowerCase()
      .replace('é', 'e')}`}
  >
    {ticket.priority}
  </span>
</td>
        <td>
  <span
    className={`status-badge status-${ticket.status
      .toLowerCase()
      .replace(' ', '-')}`}
  >
    {ticket.status}
  </span>
</td>
        <td>{ticket.technician}</td>
        <td>
  <button
    type="button"
    className="view-ticket-button"
    onClick={(event) => {
      // Empêche le clic sur le bouton de déclencher aussi le clic de la ligne.
      event.stopPropagation()

      // Ouvre la page de détail du ticket sélectionné.
      navigate(`/tickets/${ticket.id}`)
    }}
  >
    Voir
  </button>
</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={7} className="empty-state">
        <strong>Aucun ticket trouvé</strong>
        <span>
          Aucun ticket ne correspond à vos critères de recherche.
        </span>
      </td>
    </tr>
  )}
</tbody>
  </table>
</div>
</section>
    </div>
  )
}

export default TicketManagementPage