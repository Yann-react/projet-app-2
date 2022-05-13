import Header from './Landind-sub/Header'
import Welco from './Landind-sub/Welco'
import React from 'react'

// import '../bas4.jpg'

const Landing = () => {
  return (
    <div >
        <div className='landing' >
            <div className='huey' ></div>
            <Header title='TWOMAP' />
            <div className='landing-content' >
                <img src={require('../bas4.jpg')} />
                <img src={require('../bas2.jpg')} />
                <img src={require('../bas3.jpg')} />
            </div>

            <Welco />
        </div>
    </div>
  )
}

export default Landing