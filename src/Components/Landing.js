import Header from './Landind-sub/Header'
import Welco from './Landind-sub/Welco'
import React from 'react'
import './styles/landing.css'
import Sites from './Sites'

// import '../bas4.jpg'

const Landing = () => {
  return (
    <div >
        <div className='landing' >
            <div className='huey' ></div>
            <Header title='TWOMAP' />
            <div className='landing-content' >


                <div className='img__wrap' >
                <img className='l-images l-images-1' src={require('../banco.jpg')} />
                <div className="img__description_layer">
                <p className="img__description">Parc National du Banco</p>
              </div>
                </div>

                <div className='img__wrap2' >
                <img className='l-images l-images-2' src={require('../bas4.jpg')} />
                <div className="img__description_layer2">
                <p className="img__description2">Basilique Notre Dame de la Paix</p>
                </div>
                </div>

                <div className='img__wrap3' >
                <img className='l-images l-images-3' src={require('../jbotanik.jpg')} />
                <div className="img__description_layer3">
                <p className="img__description3">Jardin Botanique de Bingerville</p>
                </div>
                </div>

                <img src={require('../assets/bas4.jpg')} />
                <img src={require('../assets/bas2.jpg')} />
                <img src={require('../assets/bas3.jpg')} />
            </div>

            <Welco />
        </div>
        <Sites />
    </div>
  )
}

export default Landing