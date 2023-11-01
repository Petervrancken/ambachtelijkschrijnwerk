// SVG imports!
import Instagram from "../public/instagram.svg";
import Facebook from "../public/facebook2.svg";
import Link from "next/link";

export default function Footer() {
  return <>
    <div className="footer">
      <Link href="https://www.instagram.com/destrooperwoodworks/" legacyBehavior>
        <div className="add-pointer" title="onze instagram">
          <Instagram className="instagram-logo" />
        </div>
      </Link>
      <p className="footer-text">Volg ons</p>
      <Link href="https://m.facebook.com/destrooperwoodworks/" legacyBehavior>
        <div className="add-pointer" title="onze facebook">
          <Facebook className="instagram-logo" />
        </div>
      </Link>
    </div>
  </>;
}
