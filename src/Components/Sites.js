import React from 'react'
import Header from './Sites-sub/Header'
import Footer from "./Footer";
import './styles/sites.css'
import twi from '../assets/twi.svg'
import insta from '../assets/insta.svg'
import envelop from '../assets/envelop.svg'

// import Blocs from './Sites-sub/Blocs'

const Sites = () => {
  return (
    <div>

    <div className='sites' >

    <div className='sites-content' >
    <Header />

    <div className='blocs'>
<div className='nosites'  >
<h3 className='' > Nos Sites </h3>
<hr></hr>
</div>

<div className='blocs-content' >
        <img src={require('../assets/bas4.jpg')} />
        <img src={require('../assets/bas2.jpg')} />
        <img src={require('../assets/bas3.jpg')} />
</div>


<div className='BlueBloc' >

      <h3>Nos Partenaires</h3>

      <div className='sponsors' >
      <img src={require('../assets/images.png')} />
      <img src={require('../assets/logo_2.png')} />
      <img src={require('../assets/file.webp')} />
      <img src={require('../assets/esatic.jpg')} />
      </div>
</div>

<div className="GreyBloc">

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
    </div>



    </div>



    </div>
  )
}

export default Sites