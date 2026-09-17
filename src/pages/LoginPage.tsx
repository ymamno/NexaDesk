function LoginPage() {
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

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Votre mot de passe"
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