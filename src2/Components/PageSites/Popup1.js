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

        <Iframe
        url='https://www.google.com/maps/embed?pb=!4v1653401006339!6m8!1m7!1sCAoSLEFGMVFpcE9NYkE2SWlzTFpOR2xrSm1PWEdjdVJSdnQ5WjFwZ2Ruem5JRl9B!2m2!1d6.8112673!2d-5.296421!3f311.0032!4f6.077169999999995!5f0.7820865974627469'
        width='400'
        height='400'
        display='initial'
        position='relative'
        frameBorder={0}
        allowFullScreen/>

<Iframe
        url='https://www.google.com/maps/embed?pb=!4v1653401553421!6m8!1m7!1sCAoSLEFGMVFpcE52QkVBRU9aSmxKVHJQMHcydmYxQThZOXo4UWE5b0pHeW0tQUp4!2m2!1d6.8101992!2d-5.2975666!3f172.49196!4f12.717039999999997!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
        width='400'
        height='400'
        display='initial'
        position='relative'
        frameBorder={0}
        allowFullScreen/>

           </div>

              <button className='btn-plus' >Faire une réservation </button>

           </div>

    </div>
    </div>
    )

    }


    return null;
}

export default Popup