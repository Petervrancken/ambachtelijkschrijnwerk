// SVG imports!
import Logo from "../public/logo.svg";
import Menu from "../public/menu.svg";
import Link from "next/link";
import Instagram from "../public/phone.svg";
import Mail from "../public/mail.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navfullscreen">
        <ul className="navbar">
          <li className="marginLogo">
            <Link href="/">
              <div title="ga naar home">
                <Logo className="logo" />
              </div>
            </Link>
          </li>
          <li className="linkrestauratie">
            <Link href="/restauratie">
              <div title="ga naar restauratie">
                <p>restauratie</p>
              </div>
            </Link>
          </li>
          <li className="linkschrijnentimmerwerken">
            <Link href="/schrijn-en-timmerwerken">
              <div title="ga naar schrijn en timmerwerken">
                <p>schrijn en timmerwerken</p>
              </div>
            </Link>
          </li>
          <li className="linktreecycle">
            <Link href="/treecycle">
              <div title="ga naar treecyleshop">
                <p>treecycle</p>
              </div>
            </Link>
          </li>
          <li className="linkcontact">
            <Link href="/contact">
              <div title="ga naar contact">
                <p>contact</p>
              </div>
            </Link>
          </li>
          <li className="linkcontact phone-contact">
            <Link href="tel:0032494364587">
              <div title="Telefoneer ons!">
                <Instagram className="instagram-logo phone-logo" />
              </div>
            </Link>
          </li>
          <li className="linkcontact">
            <Link href="mailto:info@ambachtelijkschrijnwerk.be">
              <div title="Mail ons!">
                <Mail className="instagram-logo phone-logo" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="navsmallscreen">
        <ul className="navbar">
          <li className="marginLogo">
            <Link href="/">
              <div title="ga naar home">
                <Logo className="logo" />
              </div>
            </Link>
          </li>
          <div className="iphonesize">
            <div className="dropdown">
              <div className="linkmenu">
                <Menu className="menuicoon" height={25} />
              </div>
              <div className="dropdown-content">
                <Link href="/restauratie">
                  <div title="ga naar restauratie">
                    <p className="textdropdown">restauratie</p>
                  </div>
                </Link>
                <Link href="/schrijn-en-timmerwerken">
                  <div title="ga naar schrijn en timmerwerken">
                    <p className="textdropdown">schrijn en timmerwerken</p>
                  </div>
                </Link>
                <Link href="/treecycle">
                  <div title="ga naar treecyleshop">
                    <p className="textdropdown">treecycle</p>
                  </div>
                </Link>
                <Link href="/contact">
                  <div title="ga naar contact">
                    <p className="textdropdown">contact</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
}
