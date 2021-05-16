import styles from '../styles/styles.scss'
import Link from 'next/link'

// SVG imports!
import Logo from '../public/logo.svg'
import Restauratie from '../public/restauratie.svg'
import Schrijnentimmerwerken from "../public/schrijnentimmerwerken.svg"
import Treecycleshop from "../public/treecycleshop.svg"
import Contact from "../public/contact.svg"
import Login from "../public/login.svg"
import Winkelkar from "../public/winkelkar.svg"
import Profiel from "../public/profielicoon.svg"
import Menu from "../public/menu.svg"





// includes Navbar + dropdown.
function MyApp({ Component, pageProps }) {

  return(
    <div className="bg">
    <nav className="navfullscreen">
      <ul className="navbar">
        <li className="marginLogo"><Link href="/"><a title="ga naar home"><Logo className="logo" /></a></Link></li>
        <li className="linkrestauratie"><Link href="/restauratie"><a title="ga naar restauratie"><Restauratie className="navText"  /></a></Link></li>
        <li className="linkschrijnentimmerwerken"><Link href="/schrijnentimmerwerken"><a title="ga naar schrijn en timmerwerken"><Schrijnentimmerwerken className="navText" /></a></Link></li>
        <li className="linktreecycle"><Link href="/treecycle"><a title="ga naar treecyleshop"><Treecycleshop className="navText"  /></a></Link></li>
        <li className="linkcontact"><Link href="/contact"><a title="ga naar contact"><Contact className="navText" /></a></Link></li>
        <li className="linklogin"><Link href="/login"><a title="ga naar login"><Login className="navText" /></a></Link></li>
        <li className="linkwinkelkar"><Link href="/winkelkar"><a title="ga naar winkelkar"><Winkelkar className="icoon" /></a></Link></li>
        <li className="linkprofiel"><Link href="/profiel"><a title="ga naar profiel"><Profiel className="icoon"  /></a></Link></li>
      </ul>
    </nav>
    <nav className="navsmallscreen">
      <ul className="navbar">
        <li className="marginLogo"><Link href="/"><a title="ga naar home"><Logo className="logo" /></a></Link></li>
        <div className="iphonesize">
        <li className="linkwinkelkar"><Link href="/winkelkar"><a title="ga naar winkelkar"><Winkelkar className="icoon" /></a></Link></li>
        <li className="linkprofiel">
          <Link href="/profiel">
            <a title="ga naar profiel">
              <Profiel className="icoon"  />
            </a>
          </Link>
        </li>
        <div class="dropdown">
          <div className="linkmenu"><Menu className="menuicoon" height={25} /></div>
          <div class="dropdown-content">
            <Link href="/restauratie"><a title="ga naar restauratie"><Restauratie className="navText"  /></a></Link>
            <Link href="/schrijnentimmerwerken"><a title="ga naar schrijn en timmerwerken"><Schrijnentimmerwerken className="navText" /></a></Link>
            <Link href="/treecycle"><a title="ga naar treecyleshop"><Treecycleshop className="navText"  /></a></Link>
            <Link href="/contact"><a title="ga naar contact"><Contact className="navText" /></a></Link>
            <Link href="/login"><a title="ga naar login"><Login className="navText" /></a></Link>
          </div>
        </div>
        </div>
      </ul>
    </nav>
    <Component {...pageProps} />
    </div>
  ) 
}
export default MyApp
