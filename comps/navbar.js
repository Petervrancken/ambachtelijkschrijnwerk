// SVG imports!
import Logo from "../public/logo.svg";
import Winkelkar from "../public/winkelkar.svg";
import Profiel from "../public/profielicoon.svg";
import Menu from "../public/menu.svg";
import { useCart } from "react-use-cart";
import Cookies from "js-cookie";

import Link from "next/link";

export default function Navbar() {
  const { totalItems } = useCart();
  const countItems = { totalItems };
  //console.log(countItems.totalItems);

  return (
    <>
      <nav className="navfullscreen">
        <ul className="navbar">
          <li className="marginLogo">
            <Link href="/">
              <a title="ga naar home">
                <Logo className="logo" />
              </a>
            </Link>
          </li>
          <li className="linkrestauratie">
            <Link href="/restauratie">
              <a title="ga naar restauratie">
                <p>restauratie</p>
              </a>
            </Link>
          </li>
          <li className="linkschrijnentimmerwerken">
            <Link href="/schrijnentimmerwerken">
              <a title="ga naar schrijn en timmerwerken">
                <p>schrijn en timmerwerken</p>
              </a>
            </Link>
          </li>
          <li className="linktreecycle">
            <Link href="/treecycle">
              <a title="ga naar treecyleshop">
                <p>treecycle</p>
              </a>
            </Link>
          </li>
          <li className="linkcontact">
            <Link href="/contact">
              <a title="ga naar contact">
                <p>contact</p>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="navsmallscreen">
        <ul className="navbar">
          <li className="marginLogo">
            <Link href="/">
              <a title="ga naar home">
                <Logo className="logo" />
              </a>
            </Link>
          </li>
          <div className="iphonesize">
            <div className="dropdown">
              <div className="linkmenu">
                <Menu className="menuicoon" height={25} />
              </div>
              <div className="dropdown-content">
                <Link href="/restauratie">
                  <a title="ga naar restauratie">
                    <p className="textdropdown">restauratie</p>
                  </a>
                </Link>
                <Link href="/schrijnentimmerwerken">
                  <a title="ga naar schrijn en timmerwerken">
                    <p className="textdropdown">schrijn en timmerwerken</p>
                  </a>
                </Link>
                <Link href="/treecycle">
                  <a title="ga naar treecyleshop">
                    <p className="textdropdown">treecycle</p>
                  </a>
                </Link>
                <Link href="/contact">
                  <a title="ga naar contact">
                    <p className="textdropdown">contact</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
}
