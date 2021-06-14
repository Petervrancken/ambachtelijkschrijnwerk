import Link from "next/link";
import DownArrow from "../public/downarrow.svg";

export default function Comment() {
  return (
    <>
      <div className="shop-container">
        <div className="profiel-tabs-wide">
          <Link href="/profiel">
            <a title="ga naar profiel">
              <button className="profiel-tab-button">Profiel</button>
            </a>
          </Link>
          <Link href="/history">
            <a title="ga naar history">
              <button className="profiel-tab-button">History aankopen</button>
            </a>
          </Link>
          <Link href="/comment">
            <a title="ga naar comment">
              <button className="profiel-tab-button-actief">
                Geef een comment
              </button>
            </a>
          </Link>
        </div>

        <div className="profiel-tabs-small">
          <div className="dropdown">
            <Link href="/comment">
              <a title="ga naar comment">
                <button className="profiel-tab-button-actief">
                  Geef een comment
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
              <Link href="/profiel">
                <a title="ga naar profiel">
                  <p className="textdropdown">Profiel</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div className="sloganTheme">
            <p className="profile-title">wij horen het graag van u:</p>
            <form className="login-form" onSubmit={""}>
              <input
                className="comment-rating"
                type="number"
                id="rating"
                name="rating"
                min="0"
                max="10"
              />
              <p className="score">/10</p>
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
              <textarea
                className="login-input"
                id="question"
                placeholder="zet hier uw commentaar..."
              ></textarea>
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
