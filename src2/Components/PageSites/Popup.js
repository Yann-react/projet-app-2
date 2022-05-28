import React from 'react'
import '../styles/sites.css'
import Iframe from 'react-iframe'
import { useState } from 'react'

const Popup = (props) => {
// const [show, setShow] = useState(true);

  if(props.show) {
      return (
    <div className='popup-main' >


        <div className={ 'popup-box'  }>
                 
                 <div className='main-content' >

                 <h3>Basilique Notre-Dame de la Paix</h3>


           <div className='popup-blocs-content' >

           <img className='boxes-img' src={require('../../noimage.jpg')} />

            <img className='boxes-img' src={require('../../noimage.jpg')} />

           </div>

              <button className='d-btn-plus' >Faire une réservation </button>

           </div>

    </div>
    </div>
    )

    }


    return null;
}

export default Popup