import React from 'react'
import Footer from '../Footer'
import HearderAll from '../HearderAll'
import "../styles/page2.css"
const NosSites = () => {
  return (
  
    <div className='main'>
          <HearderAll name='Site' />
          <div className='cadre' >
            
            <h3>Nos Sites</h3>
            <div className='boxes' >
            <img src={require('../../bas5.jpeg')} />
            <img src={require('../../assets/bas2.jpg')} />
            <img src={require('../../assets/bas3.jpg')} />
            <img src={require('../../noimage.webp')} />
            <img src={require('../../noimage.webp')} />
            <img src={require('../../noimage.webp')} />

                <div className='img__wrap' >
            <img className='boxes-img' src={require('../../assets/bas4.jpg')} />
            <div className="img__description_layer">
                <p className="img__description">Basilique Notre Dame de la Paix</p>
                </div>
            </div>


            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../jbotanik.jpg')} />
            <div className="img__description_layer">
                <p className="img__description">Jardin Botanique de Bingerville
                </p>
                </div>
            </div>


            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../banco.jpg')} />
            <div className="img__description_layer">
                <p className="img__description">Parc National du Banco</p>
                </div>
            </div>

            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../assets/bas2.jpg')} />
            <div className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>

            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../noimage.webp')} />
            <div className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>

            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../noimage.webp')} />
            <div className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>



            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../noimage.jpg')} />
            <div className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>


            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../noimage.jpg')} />
            <div className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>

            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../noimage.jpg')} />
            <div className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>


        
            <div className='img__wrap' >
            <img className='boxes-img' src={require('../../noimage.jpg')} />
            <div className="img__description_layer">
                <p className="img__description">Site</p>
                </div>
            </div>
            </div>
          <Footer />
          </div>
    </div>
  
  )
}

export default NosSites