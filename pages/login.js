import Link from "next/link";
import Logo from "../public/logo.svg";

export default function Login() {
  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">login</p>
          <form className="login-form" onSubmit={""}>
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
            <p className="infoRestauratie">
              Nog geen lid? Registreer{" "}
              <Link href="/registreer">
                <a className="login-register-link" href="#">
                  hier!
                </a>
              </Link>
            </p>
            <button className="button-submit" type="submit">
              verzenden
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
