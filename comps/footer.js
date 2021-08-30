// SVG imports!
import Instagram from "../public/instagram.svg";
import Facebook from "../public/facebook2.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Link href="https://www.instagram.com/destrooperwoodworks/">
          <a title="onze instagram">
            <Instagram className="instagram-logo" />
          </a>
        </Link>
        <p className="footer-text">Volg ons test</p>
        <Link href="https://m.facebook.com/destrooperwoodworks/">
          <a title="onze facebook">
            <Facebook className="instagram-logo" />
          </a>
        </Link>
      </div>
    </>
  );
}
