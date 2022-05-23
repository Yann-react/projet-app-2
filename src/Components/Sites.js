import React from 'react'
import Header from './Sites-sub/Header'
import Footer from "./Footer";

// import Blocs from './Sites-sub/Blocs'

const Sites = () => {
  return (
    <div>

    <div className='sites' >

    <div className='sites-content' >
    <Header />

    <div className='blocs'>
<div className='nosites'  >
<h3 className='' > Nos Sites </h3>
<hr></hr>
</div>

<div className='blocs-content' >
        <img src={require('../assets/bas4.jpg')} />
        <img src={require('../assets/bas2.jpg')} />
        <img src={require('../assets/bas3.jpg')} />
</div>


<div className='BlueBloc' >

      <h3>Nos Partenaires</h3>

      <div className='sponsors' >
      <img src={require('../sponsors/sponsor0.png')} />
      <img src={require('../sponsors/sponsor1.png')} />
      <img src={require('../sponsors/sponsor2.png')} />
      <img src={require('../sponsors/sponsor3.png')} />
      </div>
</div>

<div className="GreyBloc">

      <div>
 
            <ul>
              
              <li>Logo</li>
              <li>A Propos</li>
              <li>Contact</li>

            </ul>
        
      </div>

</div>

</div>
    </div>



    </div>



    </div>
  )
}

export default Sites