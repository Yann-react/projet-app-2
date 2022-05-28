import React from 'react'
import Header from './Sites-sub/Header'
import Footer from "./Footer";
import './styles/sites.css'
import Popup1 from './Sites-sub/Popup1';
import Popup2 from './Sites-sub/Popup2';
import Popup3 from './Sites-sub/Popup3';
import { useState } from 'react';

// import Blocs from './Sites-sub/Blocs'

const Sites = () => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [close, setClose] = useState(true);
  const [isActive, setIsActive] = useState(false);
const handleToggle = () => setIsActive(!isActive);

  return (
    <div>

    <div className='sites' > 

    <div className='sites-content'>
    <Header />

    <Popup1 show={show1} />
    <Popup2 show={show2} />
    <Popup3 show={show3} />
    <div className='blocs'>
<div className='nosites'  >
<h3 className='' > Nos Sites </h3>
<hr></hr>
</div>
{ !close? <button onClick={ ()=>{ setShow1(false); setShow2(false); setShow3(false); setClose(true)} }   className='popup-btn'>Fermer</button> :null}


<div className='blocs-content' >

        <img onClick={ ()=> {setShow1(true); setClose(false)}}  src={require('../bas4.jpg')} />
        <img onClick={ ()=> {setShow2(true); setClose(false)}}  src={require('../jbotanik.jpg')} />
        <img onClick={ ()=> {setShow3(true); setClose(false)}} src={require('../palais.jpg')} />

</div>


<div className='BlueBloc' >

      <h3>Nos Partenaires</h3>

      <div className='sponsors' >
      <img src={require('../sponsors/sponsor0.png')} />
      <img src={require('../sponsors/sponsor1.png')} />
      {/* <img src={require('../sponsors/sponsor2.png')} /> */}
      <img src={require('../sponsors/sponsor3.png')} />
      </div>
</div>

<div className="GreyBloc">

      <div>

           
            <ul>
              
              <li> <strong>Logo</strong> </li>
              <li> <strong>A Propos</strong> </li>
              <li> <strong>Contact</strong> </li>

            </ul>

            <ul>
              
              <li>Logo</li>
              <li>A Propos</li>
              <li>sologo &nbsp; sologo &nbsp; sologo &nbsp;  </li>

            </ul>

            <ul>
              
              <li>Lorem</li>
              <li>Lorem</li>
              <li></li>

            </ul>

            <ul>
              
              <li>Lorem</li>
              <li></li>
              <li></li>

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