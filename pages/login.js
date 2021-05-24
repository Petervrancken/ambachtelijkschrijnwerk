

import Logo from '../public/logo.svg'

export default function Login() {
  return (
    <>
  
  <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">login</p>
          <form className="login-form" onSubmit={""}>
            <input className="login-input" id="name" name="name" type="text" autoComplete="name" placeholder="email" required />
            <input className="login-input" id="password" name="name" type="password" autoComplete="name" placeholder="wachtwoord" required />
            <p className="infoRestauratie">Nog geen lid? Registreer <a href="#">hier!</a></p>
            <button className="button-submit" type="submit">verzenden</button>
          </form>
        </div>
    </div>
    </>
    )
  }
  