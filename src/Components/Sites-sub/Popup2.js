import React from 'react'
import '../styles/sites.css'
import Iframe from 'react-iframe'
import { useState } from 'react'

const Popup2 = (props) => {
// const [show, setShow] = useState(true);

  if(props.show) {
      return (
    <div className='popup-main' >


        <div className={ 'popup-box'  }>
                 
                 <div className='main-content' >

                 <h3>Jardin Botanique de Bingerville</h3>


           <div className='popup-blocs-content' >

        <Iframe
        url='https://www.google.com/maps/embed?pb=!4v1653586576876!6m8!1m7!1sCAoSLEFGMVFpcE9CTzBXNFg5eThRTDJoRjRkUnBURG53WjQzSEtVSjVLUFdqUjRk!2m2!1d5.3611517!2d-3.8894325!3f292.59608767913295!4f6.204390145143307!5f0.7820865974627469'
        width='400'
        height='400'
        display='initial'
        position='relative'
        frameBorder={0}
        allowFullScreen/>

<Iframe
        url='https://www.google.com/maps/embed?pb=!4v1652304867895!6m8!1m7!1sCAoSLEFGMVFpcFBQbTc2VU1pVnQ4dkVhVWZxcHpJRTlKaXk3WXVMRUdpTVM3MEFp!2m2!1d5.3611517!2d-3.8894325!3f164.09273919802192!4f-4.229078653433589!5f0.7820865974627469'
        width='400'
        height='400'
        display='initial'
        position='relative'
        frameBorder={0}
        allowFullScreen/>

           </div>

              <button className='btn-plus' >Voir plus </button>

           </div>

    </div>
    </div>
    )

    }


    return null;
}

export default Popup2