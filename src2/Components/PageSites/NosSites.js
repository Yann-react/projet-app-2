import React from 'react'
import "../styles/page2.css"
import Popup from './Popup'
import Popup1 from '../Sites-sub/Popup1'
import Popup2 from './Popup2'
import Popup4 from './Popup4'
import Popup3 from './Popup3'
import { useState } from 'react'




const NosSites = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const [close, setClose] = useState(true);
  const [isActive, setIsActive] = useState(false);
const handleToggle = () => setIsActive(!isActive);
  return (
    <div className='main'>

          <div className='cadre' >
            <hr></hr>
            <h3>Nos Sites</h3>
            <div className='boxes' >

            <Popup show={show} />
            <Popup1 show={show1} />
            <Popup2 show={show2} />
            <Popup3 show={show3} />
            <Popup4 show={show4} />
            
            { !close? <button onClick={ ()=>{setShow(false); setShow1(false); setShow2(false); setShow3(false); setShow4(false); setClose(true)} }   className='popup-btn'>Fermer</button> :null}

                <div className='img__wrap' >
            <img className='boxes-img' src={require('../../bas4.jpg')} />
            <div onClick={ ()=> {setShow1(true); setClose(false)}}  className="img__description_layer">
                <p className="img__description">Basilique Notre Dame de la Paix</p>
                </div>
            </div>


            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../jbotanik.jpg')} />
            <div onClick={ ()=> {setShow2(true); setClose(false)}} className="img__description_layer">
                <p className="img__description">Jardin Botanique de Bingerville
                </p>
                </div>
            </div>

            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../stpaul.jpg')} />
            <div onClick={ ()=> {setShow3(true); setClose(false)}} className="img__description_layer">
                <p className="img__description">Cathedrale Saint Paul Abidjan </p>
                </div>
            </div>


            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../palais.jpg')} />
            <div onClick={ ()=> {setShow4(true); setClose(false)}} className="img__description_layer">
                <p className="img__description">Palais de la culture de Treichville</p>
                </div>
            </div>

            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../banco.jpg')} />
            <div onClick={ ()=> {setShow(true); setClose(false)}} className="img__description_layer">
                <p className="img__description">Parc National du Banco</p>
                </div>
            </div>

            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../liane.jpg')} />
            <div onClick={ ()=> {setShow(true); setClose(false)}} className="img__description_layer">
                <p className="img__description">Pont de Liane de Man</p>
                </div>
            </div>

           

            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../cascades.jpg')} />
            <div onClick={ ()=> {setShow(true); setClose(false)}} className="img__description_layer">
                <p className="img__description">Cascades de Man</p>
                </div>
            </div>



          


            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../noimage.jpg')} />
            <div onClick={ ()=> {setShow(true); setClose(false)}} className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>

            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../noimage.jpg')} />
            <div onClick={ ()=> {setShow(true); setClose(false)}} className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>


        
            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../noimage.jpg')} />
            <div onClick={ ()=> {setShow(true); setClose(false)}} className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>

            


            </div>

          </div>

    </div>
  )
}

export default NosSites