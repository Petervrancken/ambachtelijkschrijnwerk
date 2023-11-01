process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
import base from "../styles/base.scss";
import navbarstyle from "../styles/navbarstyle.scss";
import indexstyle from "../styles/indexstyle.scss";
import swiper from "../styles/swiper.scss";
import restauratiestyle from "../styles/restauratiestyle.scss";
import media from "../styles/mediastyle.scss";
import contactstyle from "../styles/contactstyle.scss";
import footerstyle from "../styles/footerstyle.scss";
import timmerwerk from "../styles/timmerwerkStyle.scss";
import { motion } from "framer-motion";
//import Breadcrumbs from 'nextjs-breadcrumbs';



//components
import Navbar from "../comps/navbar";
import Footer from "../comps/footer";
import ContactFooter from "../comps/contactFooter";

// includes Navbar + dropdown.
function MyApp({ Component, pageProps, router }) {
  return (
    <>
    <div className="bg">
        <Navbar />
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
        <ContactFooter/>
        <Footer />
      <div className="redline diagonal-box"><div className="content"></div></div>
    </div>
    </>
  );
}
export default MyApp;
