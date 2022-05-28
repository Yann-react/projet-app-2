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

            <img src={require('../../noimage.jpg')} />
            <img src={require('../../noimage.jpg')} />
            <img src={require('../../noimage.jpg')} />


            </div>

          <Footer />
          </div>
    </div>
  
  )
}

export default NosSites