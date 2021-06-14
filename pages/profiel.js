import Link from "next/link";
import DownArrow from "../public/downarrow.svg";

export default function Profiel() {
  return (
    <>
      <div className="shop-container">
        <div className="profiel-tabs-wide">
          <Link href="/profiel">
            <a title="ga naar profiel">
              <button className="profiel-tab-button-actief">Profiel</button>
            </a>
          </Link>
          <Link href="/history">
            <a title="ga naar history">
              <button className="profiel-tab-button">History aankopen</button>
            </a>
          </Link>
          <Link href="/comment">
            <a title="ga naar comment">
              <button className="profiel-tab-button">Geef een comment</button>
            </a>
          </Link>
        </div>

        <div className="profiel-tabs-small">
          <div className="dropdown">
            <Link href="/profiel">
              <a title="ga naar profiel">
                <button className="profiel-tab-button-actief">
                  Profiel
                  <DownArrow className="profiel-tab-icoon" />
                </button>
              </a>
            </Link>
            <div className="dropdown-content">
              <Link href="/history">
                <a title="ga naar history">
                  <p className="textdropdown">History aankopen</p>
                </a>
              </Link>
              <Link href="/comment">
                <a title="ga naar comment">
                  <p className="textdropdown">Geef een comment</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div className="sloganTheme">
            <p className="profile-title">persoonlijke gegevens</p>
            <p className="profile-title">aanpassen:</p>
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
      </div>
    </>
  );
}
