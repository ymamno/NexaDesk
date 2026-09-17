import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { FormEvent } from 'react'
import './LoginPage.css'
function LoginPage() {

     // Stocke l'adresse email saisie par l'utilisateur
  const [email, setEmail] = useState('')

  // Stocke le mot de passe saisi par l'utilisateur
const [password, setPassword] = useState('')

// Permet de naviguer vers une autre page après la connexion
const navigate = useNavigate()

 // Gère la soumission du formulaire de connexion
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  // Vérifie que les deux champs sont remplis
  if (!email || !password) {
    alert('Veuillez remplir tous les champs.')
    return
  }

  navigate('/dashboard')
}

  return (
    <div className="login-page">
         {/* Carte contenant le formulaire de connexion */}
    <div className="login-card">
        {/* Logo de la plateforme */}
<div className="login-logo">
  <span>🔷</span>
  <strong>NEXADESK</strong>
</div>
      <h1>Bienvenue sur NexaDesk</h1>
      <p>Connectez-vous à votre compte</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="votre@email.com"
            value={email}
  onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Votre mot de passe"
            value={password}
  onChange={(event) => setPassword(event.target.value)}

          />
        </div>
                {/* Permet à l'utilisateur de demander à rester connecté */}
        <label className="remember-me">
          <input type="checkbox" />
          <span>Se souvenir de moi</span>
        </label>
         {/* Bouton permettant d'envoyer le formulaire de connexion */}
         <button type="submit">Se connecter</button>

                 {/* Lien permettant de récupérer un mot de passe oublié */}
        <a href="#" className="forgot-password">
          Mot de passe oublié ?
        </a>
                {/* Invitation à créer un compte pour les nouveaux utilisateurs */}
        <p className="create-account">
          Pas encore de compte ?{' '}
          <a href="#">Créer un compte</a>
        </p>
      </form>
      </div>
    </div>
  )
}
export default LoginPage