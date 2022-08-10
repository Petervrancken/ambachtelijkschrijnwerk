
import Link from "next/link";

export default function ContactFooter() {
  return (
    <>
      <div className="contactFooter">
        <div className="contactBlok">
          <h5>Contact info</h5>
          <div className="blokInfo">
            <a href="tel:0032495364587">0494 36 45 87</a>
            <a href="mailto:info@ambachtelijkschrijnwerk.be">
              info@ambachtelijkschrijnwerk.be
            </a>
          </div>
        </div>
        <div className="contactBlok">
          <h5>Diensten</h5>
          <div className="blokInfo">
            <Link href="/restauratie">Restauratie</Link>
            <Link href="/schrijnentimmerwerken">
              Schrijn en timmerwerken
            </Link>
            <a href="/treecyle">Treecycle</a>
          </div>
        </div>
        <div className="contactBlok">
          <h5>Extra</h5>
          <div className="blokInfo">
          <Link href="/restauratie/restauratieschrijnwerk">Restauratie van schrijnwerk</Link>
          <Link href="/restauratie/restauratietimmerwerk">Restauratie van timmerwerk</Link>
          <Link href="/restauratie/veiligheid">Bereikbaarheid en veiligheid</Link>
          </div>
        </div>
        <div className="contactBlok">
          <h5>Information</h5>
          <div className="blokInfo">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/disclaimer">
              Disclaimer
            </Link>
          </div>
          <p>Copyright © 2022</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
