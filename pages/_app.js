import base from '../styles/base.scss'
import navbarstyle from "../styles/navbarstyle.scss"



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
