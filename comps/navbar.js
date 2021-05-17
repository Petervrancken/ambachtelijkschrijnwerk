// SVG imports!
import Logo from '../public/logo.svg'
import Winkelkar from "../public/winkelkar.svg"
import Profiel from "../public/profielicoon.svg"
import Menu from "../public/menu.svg"


import Link from 'next/link'


export default function Navbar() {
  return (
    <>
    <nav className="navfullscreen">
      <ul className="navbar">
        <li className="marginLogo"><Link href="/"><a title="ga naar home"><Logo className="logo" /></a></Link></li>
        <li className="linkrestauratie"><Link href="/restauratie"><a title="ga naar restauratie"><p>restauratie</p></a></Link></li>
        <li className="linkschrijnentimmerwerken"><Link href="/schrijnentimmerwerken"><a title="ga naar schrijn en timmerwerken"><p>schrijn en timmerwerken</p></a></Link></li>
        <li className="linktreecycle"><Link href="/treecycle"><a title="ga naar treecyleshop"><p>treecycleshop</p></a></Link></li>
        <li className="linkcontact"><Link href="/contact"><a title="ga naar contact"><p>contact</p></a></Link></li>
        <li className="linklogin"><Link href="/login"><a title="ga naar login"><p>login</p></a></Link></li>
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
        <div className="dropdown">
          <div className="linkmenu"><Menu className="menuicoon" height={25} /></div>
          <div className="dropdown-content">
            <Link href="/restauratie"><a title="ga naar restauratie"><p className="textdropdown">restauratie</p></a></Link>
            <Link href="/schrijnentimmerwerken"><a title="ga naar schrijn en timmerwerken"><p className="textdropdown">schrijn en timmerwerken</p></a></Link>
            <Link href="/treecycle"><a title="ga naar treecyleshop"><p className="textdropdown">treecycleshop</p></a></Link>
            <Link href="/contact"><a title="ga naar contact"><p className="textdropdown">contact</p></a></Link>
            <Link href="/login"><a title="ga naar login"><p className="textdropdown">login</p></a></Link>
          </div>
        </div>
        </div>
      </ul>
    </nav>
    </>
  )
}
