import React from 'react'
import '../styles/Footer.css'
import twi from '../assets/twi.svg'
import insta from '../assets/insta.svg'
import envelop from '../assets/envelop.svg'
import novo from '../assets/images.png'
import esatic from '../assets/esatic.jpg'
import tourism from '../assets/logo_2.png'
import aza from '../assets/file.webp'
const Footer = () => {
  return (
    <>
    <div className="foot-all">
      <div className="foot-part">
        <h2 className='titl-footpart'>NOS PARTENAIRE</h2>
       <div className="partnai">
        <div><img src={novo}  /></div>
        <div><img src={tourism} height="60px" width="60px" /></div>
        <div><img src={aza} height="80px" width="80px" /></div>
        <div><img src={esatic} height="50px" width="100px" /></div>
       </div>
      </div>
      <div className="a-propos">
        <h3 className='logo-ti'>TWOMAP</h3>
        <div className="truc">
        <ul>
        <h3>Logo</h3>
          <li>Logo</li>
          <li>1</li>
          <li>2</li>
        </ul>
        </div>
        <div className="apropos">
        <ul> 
        <h3>A propos</h3>
          <li>Tourism</li>
          <li>Ministère Du Tourism</li>
          <li>Côte d'Ivoire</li>
          </ul>
        </div>
          <div className="contacts">
          <h3>Contact</h3>
        <ul className='contact'>
           <li><img src={envelop} height="33px" /></li>
          <li><img src={insta} height="30px" /></li>
          <li><img src={twi} height="25px" /></li>
          </ul>
          </div>
      </div>
    </div>
    </>
  )
}

export default Footer