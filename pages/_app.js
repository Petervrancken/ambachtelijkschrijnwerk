import base from '../styles/base.scss'
import navbarstyle from "../styles/navbarstyle.scss"
import indexstyle from "../styles/indexstyle.scss"



//components
import Navbar from "../comps/navbar"


// includes Navbar + dropdown.
function MyApp({ Component, pageProps }) {

  return(
    <div className="bg">
    <Navbar/>
    <Component {...pageProps} />
    </div>
  ) 
}
export default MyApp
