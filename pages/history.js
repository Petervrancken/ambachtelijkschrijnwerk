
import Link from "next/link"




export default function History() {
  return (
    <>
    <div className="shop-container">
      <div className="profiel-container">
        <Link href="/profiel"><a title="ga naar profiel"><button className="profiel-tab-button">Profiel</button></a></Link>
        <Link href="/history"><a title="ga naar history"><button className="profiel-tab-button-actief">History aankopen</button></a></Link>
        <Link href="/comment"><a title="ga naar comment"><button className="profiel-tab-button">Geef een comment</button></a></Link>
        
        
      </div>
    </div>
  
    </>
  )
}
