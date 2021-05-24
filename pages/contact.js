

import Avatar from "../public/avatar.svg"

export default function Contact() {
  return (
    <>
    <div className="backgroundTableTheme">
      <div className="sloganTheme">
        <p className="sloganText">wie zijn wij</p>
        <p className="infoRestauratie">Ambachtelijkschrijnwerk.be is ontstaan uit de samenwerking van twee gepassioneerde restauratieschrijnwerkers.
            Samen Hebben we meer dan 20 jaar ervaring in restauratieschrijnwerk en algemeen massief schrijnwerk.
            In ons atelier zijn we goed uitgerust voor iedere job met massief hout.</p>
      </div>
        <div className="onderwerp-contact">
            <div className="box">
              <Avatar className="onderwerp-icoon"/>
              <p className="onderwerp-titel">anton destrooper</p>
            </div>
            <div className="box">
              <Avatar className="onderwerp-icoon"/>
              <p className="onderwerp-titel">kristof van dooren</p>
            </div>
        </div>
        <div className="sloganTheme">
        <p className="sloganText">contact</p>
          <form className="login-form" onSubmit={""}>
            <input className="login-input" id="name" name="name" type="text" autoComplete="name" placeholder="email" required />
            <input className="login-input" id="password" name="wachtwoord" type="password" autoComplete="name" placeholder="wachtwoord" required />
            <textarea className="login-input" id="question" placeholder="stel hier uw vraag..."></textarea>
            <button className="button-submit" type="submit">verzenden</button>
          </form>
        </div>
    </div>
    </>
    )
}
