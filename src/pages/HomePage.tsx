import './LoginPage.css'

function LoginPage() {
  // Page de connexion de NexaDesk.
  // Les styles spécifiques à cette page sont définis dans LoginPage.css.
  return (
    <div >
      <h1>Bienvenue sur NexaDesk</h1>
      <p>Connectez-vous à votre compte</p>

      {/* Formulaire de connexion */}
      <form>
        {/* Champ de saisie de l'adresse e-mail */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="votre@email.com"
          />
        </div>

        {/* Champ de saisie du mot de passe */}
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Votre mot de passe"
          />
        </div>

        {/* Option permettant de mémoriser la session utilisateur */}
        <div>
          <label>
            <input type="checkbox" />
            Se souvenir de moi
          </label>
        </div>

        <button type="submit">Se connecter</button>

        <p>
          <a href="#">Mot de passe oublié ?</a>
        </p>

        <p>
          Pas encore de compte ? <a href="#">Créer un compte</a>
        </p>
      </form>
    </div>
  )
}

export default LoginPage