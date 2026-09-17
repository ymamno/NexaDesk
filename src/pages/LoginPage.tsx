function LoginPage() {
  return (
    <div>
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
      </form>
    </div>
  )
}
export default LoginPage