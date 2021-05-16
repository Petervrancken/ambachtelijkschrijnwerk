
import Wijmaken from "../public/wijmaken.svg"
import Geschiedenis from "../public/geschiedenis.svg"
import Vanonze  from "../public/vanonze.svg"
import Toekomst from "../public/toekomst.svg"


export default function Home() {
  return (
    <div className="backgroundTable">
      <div className="slogan">
        <Wijmaken className="sloganText"/>
        <Geschiedenis className="sloganText"/>
        <Vanonze className="sloganTextVanOnze"/>
        <Toekomst className="sloganTextToekomst"/>
      </div>
    </div>
  )
}
