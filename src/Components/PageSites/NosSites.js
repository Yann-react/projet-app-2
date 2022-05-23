import React from 'react'
import "../styles/page2.css"
const NosSites = () => {
  return (
    <div className='main'>

          <div className='cadre' >
            <hr></hr>
            <h3>Nos Sites</h3>
            <div className='boxes' >
            <img src={require('../../bas4.jpg')} />
            <img src={require('../../bas2.jpg')} />
            <img src={require('../../bas3.jpg')} />
            <img src={require('../../noimage.webp')} />
            <img src={require('../../noimage.webp')} />
            <img src={require('../../noimage.webp')} />

            <img src={require('../../noimage.jpg')} />
            <img src={require('../../noimage.jpg')} />
            <img src={require('../../noimage.jpg')} />


            </div>

          </div>

    </div>
  )
}

export default NosSites