import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './TicketDetailsPage.css'

function TicketDetailsPage() {
  // Récupère l'identifiant du ticket directement depuis l'URL.
  // Exemple : /tickets/103 → ticketId contient "103".
  const { id } = useParams()
  // Stocke le texte saisi dans la zone de commentaire
const [comment, setComment] = useState('')

// Contient les commentaires ajoutés à la conversation
const [comments, setComments] = useState<string[]>([])
// Gère l'envoi d'un nouveau commentaire
const handleCommentSubmit = () => {
  // Empêche l'envoi d'un commentaire vide
  if (!comment.trim()) {
    alert('Veuillez écrire un commentaire.')
    return
  }

// Ajoute le nouveau commentaire à la conversation
setComments((currentComments) => [...currentComments, comment])

// Vide la zone de texte après l'envoi
setComment('')
}

  // Données temporaires du ticket.
  // Plus tard, ces informations viendront de notre API.
  const ticket = {
    id: id ?? '103',
    title: 'Mon écran ne fonctionne plus',
    description:
      "L'écran reste noir lorsque j'allume mon ordinateur.",
    category: 'Matériel',
    priority: 'Haute',
    status: 'En cours',
    createdAt: '17 sept. 2026',
    technician: 'À assigner',
  }

  return (
    <div className="ticket-details-page">
      {/* En-tête contenant le numéro et le statut du ticket */}
      <header className="ticket-details-header">
        <div>
          <p className="ticket-number">Ticket #{ticket.id}</p>
          <h1>{ticket.title}</h1>
        </div>

        <span className="status-badge">
          {ticket.status}
        </span>
      </header>

      {/* Informations générales du ticket */}
      <section className="ticket-info-card">
        <div className="ticket-info-grid">
          <div>
            <span>Catégorie</span>
            <strong>{ticket.category}</strong>
          </div>

          <div>
            <span>Priorité</span>
            <strong>{ticket.priority}</strong>
          </div>

          <div>
            <span>Date de création</span>
            <strong>{ticket.createdAt}</strong>
          </div>

          <div>
            <span>Technicien</span>
            <strong>{ticket.technician}</strong>
          </div>
        </div>
      </section>

      {/* Description du problème */}
      <section className="ticket-description-card">
        <h2>Description du problème</h2>
        <p>{ticket.description}</p>
      </section>

      {/* Historique des échanges */}
      <section className="ticket-conversation-card">
        <h2>Conversation</h2>

        <div className="conversation-list">
  {comments.length === 0 ? (
    <p>Aucun échange pour le moment.</p>
  ) : (
    comments.map((message, index) => (
      <div className="conversation-message" key={index}>
        <strong>Vous</strong>
        <p>{message}</p>
      </div>
    ))
  )}
</div>
      </section>

      {/* Zone permettant d'ajouter un commentaire */}
      <section className="ticket-comment-card">
        <h2>Ajouter un commentaire</h2>

        <textarea
  rows={5}
  placeholder="Écrivez votre message..."
  value={comment}
  onChange={(event) => setComment(event.target.value)}
/>

        <button type="button" onClick={handleCommentSubmit}>
  Envoyer le commentaire
</button>
      </section>
    </div>
  )
}

export default TicketDetailsPage