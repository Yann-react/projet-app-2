import React from 'react'
import '../styles/sites.css'
import Iframe from 'react-iframe'
import { useState } from 'react'

const Popup3 = (props) => {
// const [show, setShow] = useState(true);

  if(props.show) {
      return (
    <div className='popup-main' >


        <div className={ 'popup-box'  }>
                 
                 <div className='main-content' >

                 <h3>Cathédrale Saint-Paul d'Abidjan</h3>


           <div className='popup-blocs-content' >

        <Iframe
        url='https://www.google.com/maps/embed?pb=!4v1653770155824!6m8!1m7!1sCAoSLEFGMVFpcE0zb3FRZzEzM0RBeDQ5TWxNd1dIVDI2Vnktb1JrcmpzNHdwRHJx!2m2!1d5.3332595!2d-4.020308099999999!3f24.215585556077897!4f5.991010128272407!5f0.7820865974627469'
        width='400'
        height='400'
        display='initial'
        position='relative'
        frameBorder={0}
        allowFullScreen/>

<Iframe
        url='https://www.google.com/maps/embed?pb=!4v1653769927151!6m8!1m7!1sCAoSK0FGMVFpcFAxWjVmNFgyZG1XUThPQllwYmVTTDVKWWRhSGMtSVVjYnVXLUk.!2m2!1d5.3334936!2d-4.0208846!3f312.6099926562912!4f17.527205920479744!5f0.7820865974627469'
        width='400'
        height='400'
        display='initial'
        position='relative'
        frameBorder={0}
        allowFullScreen/>

           </div>

              <button className='btn-plus' >Faire une réservation</button>

           </div>

    </div>
    </div>
    )

    }


    return null;
}

export default Popup3