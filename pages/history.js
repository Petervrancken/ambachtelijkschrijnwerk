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
              <button className="profiel-tab-button-actief">
                history aankopen
              </button>
            </a>
          </Link>
          <Link href="/comment">
            <a title="ga naar comment">
              <button className="profiel-tab-button">geef een comment</button>
            </a>
          </Link>
        </div>

        <div className="profiel-tabs-small">
          <div className="dropdown">
            <Link href="/history">
              <a title="ga naar aankopen">
                <button className="profiel-tab-button-actief">
                  history aankopen
                  <DownArrow className="profiel-tab-icoon" />
                </button>
              </a>
            </Link>
            <div className="dropdown-content">
              <Link href="/comment">
                <a title="ga naar comment">
                  <p className="textdropdown">geef comment</p>
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
            <p className="profile-title">een overzicht van uw aankopen:</p>
          </div>
        </div>
      </div>
    </>
  );
}
