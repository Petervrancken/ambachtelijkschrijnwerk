process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
import base from "../styles/base.scss";
import navbarstyle from "../styles/navbarstyle.scss";
import indexstyle from "../styles/indexstyle.scss";
import swiper from "../styles/swiper.scss";
import restauratiestyle from "../styles/restauratiestyle.scss";
import media from "../styles/mediastyle.scss";
import contactstyle from "../styles/contactstyle.scss";
import footerstyle from "../styles/footerstyle.scss";
import { CartProvider } from "react-use-cart";

//components
import Navbar from "../comps/navbar";
import Footer from "../comps/footer";

// includes Navbar + dropdown.
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg">
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </div>
  );
}
export default MyApp;
