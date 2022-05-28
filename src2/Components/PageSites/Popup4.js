import React from 'react'
import '../styles/sites.css'
import Iframe from 'react-iframe'
import { useState } from 'react'

const Popup4 = (props) => {
// const [show, setShow] = useState(true);

  if(props.show) {
      return (
    <div className='popup-main' >


        <div className={ 'popup-box'  }>
                 
                 <div className='main-content' >

                 <h3>Palais de la culture Treichville</h3>


           <div className='popup-blocs-content' >

        <Iframe
        url='https://www.google.com/maps/embed?pb=!4v1653586375206!6m8!1m7!1sCAoSLEFGMVFpcE02ZnpPRERrcXVvYUc0Y1JxOXJQZzBVU3ZIVTI0bGpzMjVJNHpw!2m2!1d5.3122367!2d-4.0131195!3f221.63594301065953!4f-25.202622840372243!5f0.7820865974627469'
        width='400'
        height='400'
        display='initial'
        position='relative'
        frameBorder={0}
        allowFullScreen/>

<Iframe
        url='https://www.google.com/maps/embed?pb=!4v1653587250241!6m8!1m7!1sCAoSLEFGMVFpcE9WajVjZUFYbjhBNjQ2cVVQVktqZVdoVnRqSXZLQWhkempOckN1!2m2!1d5.311792561852707!2d-4.012368097901344!3f355.2451792624704!4f-12.43715142450587!5f0.7820865974627469'
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

export default Popup4