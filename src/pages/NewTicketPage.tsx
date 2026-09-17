import './NewTicketPage.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { FormEvent } from 'react'

function NewTicketPage() {
      // Permet de revenir à la page précédente
  const navigate = useNavigate()
    // Stocke le titre saisi dans le formulaire
  const [title, setTitle] = useState('')

  // Stocke la description du problème
  const [description, setDescription] = useState('')

  // Stocke la catégorie sélectionnée
  const [category, setCategory] = useState('')

  // Stocke la priorité sélectionnée
  const [priority, setPriority] = useState('medium')
    // Gère l'envoi du formulaire de création d'une demande
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Vérifie que les informations essentielles sont présentes
    if (!title || !description || !category) {
      alert('Veuillez remplir tous les champs obligatoires.')
      return
    }

    // Génère temporairement un numéro pour la nouvelle demande.
    // Plus tard, ce numéro sera généré automatiquement par notre API.
    const newTicketId = 103

    console.log('Nouvelle demande créée :', {
      id: newTicketId,
      title,
      description,
      category,
      priority,
    })

    alert(`Votre demande #${newTicketId} a été créée.`)

    // Redirige vers la page de détail du nouveau ticket
    navigate(`/tickets/${newTicketId}`)
  }

  return (
    <div className="new-ticket-page">
      {/* En-tête de la page de création d'une demande */}
      <header className="new-ticket-header">
        <h1>Nouvelle demande</h1>
        <p>
          Décrivez votre problème afin que notre équipe de support puisse
          vous aider.
        </p>
      </header>

      {/* Formulaire de création du ticket */}
      <section className="new-ticket-card">
        <form onSubmit={handleSubmit}>
          {/* Titre court permettant d'identifier facilement la demande */}
          <div className="form-group">
            <label htmlFor="title">Titre de la demande</label>
            <input
  type="text"
  id="title"
  placeholder="Ex. Mon ordinateur ne démarre plus"
  value={title}
  onChange={(event) => setTitle(event.target.value)}
/>
          </div>

          {/* Description détaillée du problème rencontré */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
  id="description"
  rows={6}
  placeholder="Décrivez le problème rencontré..."
  value={description}
  onChange={(event) => setDescription(event.target.value)}
/>
          </div>

          {/* Catégorie permettant de classer la demande */}
          <div className="form-group">
            <label htmlFor="category">Catégorie</label>
            <select
  id="category"
  value={category}
  onChange={(event) => setCategory(event.target.value)}
>
              <option value="" disabled>
                Sélectionnez une catégorie
              </option>
              <option value="hardware">Matériel</option>
              <option value="software">Logiciel</option>
              <option value="network">Réseau</option>
              <option value="account">Compte</option>
              <option value="printer">Imprimante</option>
              <option value="other">Autre</option>
            </select>
          </div>

          {/* Priorité permettant d'indiquer l'urgence du problème */}
          <div className="form-group">
            <label htmlFor="priority">Priorité</label>
            <select
  id="priority"
  value={priority}
  onChange={(event) => setPriority(event.target.value)}
>
              <option value="low">Faible</option>
              <option value="medium">Moyenne</option>
              <option value="high">Haute</option>
              <option value="critical">Critique</option>
            </select>
          </div>

          {/* Actions du formulaire */}
          <div className="form-actions">
            <button
  type="button"
  className="cancel-button"
  onClick={() => navigate('/tickets')}
>
  Annuler
</button>

            <button type="submit" className="submit-button">
              Créer la demande
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default NewTicketPage