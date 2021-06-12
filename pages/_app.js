process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
import base from '../styles/base.scss'
import navbarstyle from "../styles/navbarstyle.scss"
import indexstyle from "../styles/indexstyle.scss"
import swiper from "../styles/swiper.scss"
import restauratiestyle from "../styles/restauratiestyle.scss"
import media from "../styles/mediastyle.scss"
import treecyclestyle from "../styles/treecyclestyle.scss"
import loginstyle from "../styles/loginstyle.scss"
import contactstyle from "../styles/contactstyle.scss"
import shopstyle from "../styles/shopstyle.scss"
import winkelkarstyle from "../styles/winkelkarstyle.scss"
import profilestyle from "../styles/profilestyle.scss"
import commentstyle from "../styles/commentstyle.scss"
import { CartProvider } from 'react-use-cart';


//components
import Navbar from "../comps/navbar"


// includes Navbar + dropdown.
function MyApp({ Component, pageProps }) {

  return(
    <div className="bg">
    <CartProvider>
    <Navbar/>
    <Component {...pageProps} />
    </CartProvider>
    </div>
  ) 
}
export default MyApp
