import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <div>

    <div className='sitesHeader' >

        <h3>QUELQUES SITES</h3>

<div className='secGroup' >


        <span>
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>

        <button onClick={()=> navigate('/Site')}> VOIR PLUS </button>
        </div>
    </div>

    </div>
  )
}

export default Header