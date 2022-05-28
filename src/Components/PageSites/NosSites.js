import React from 'react'
import "../styles/page2.css"
const NosSites = () => {
  return (
    <div className='main'>

          <div className='cadre' >
            <hr></hr>
            <h3>Nos Sites</h3>
            <div className='boxes' >

                <div className='img__wrap' >
            <img className='boxes-img' src={require('../../bas4.jpg')} />
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
            <img className='boxes-img' src={require('../../bas2.jpg')} />
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

          </div>

    </div>
  )
}

export default NosSites