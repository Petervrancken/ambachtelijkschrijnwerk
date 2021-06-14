import Logo from "../public/logo.svg";

export default function Registreer() {
  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">registreer</p>
          <form className="login-form" onSubmit={""}>
            <input
              className="login-input"
              id="voornaam"
              type="text"
              placeholder="voornaam"
              required
            />
            <input
              className="login-input"
              id="naam"
              type="text"
              placeholder="naam"
              required
            />
            <input
              className="login-input"
              id="email"
              type="email"
              placeholder="email"
              required
            />
            <input
              className="login-input"
              id="password"
              type="password"
              placeholder="wachtwoord"
              required
            />
            <input
              className="login-input"
              id="adres"
              type="text"
              placeholder="adres"
              required
            />
            <button className="button-submit" type="submit">
              verzenden
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
