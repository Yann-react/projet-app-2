import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = ({title}) => {
  
  const navigate = useNavigate()
  return (
    <div>


    <div className='header'>

<span>{title}</span>

        <ul>
            <li onClick={()=> navigate('/')}> Accueil </li>
            <li onClick={()=> navigate('/Site')}> Sites </li>
            <li onClick={()=> navigate('/Reservation')}> <button  className='btn'>Réserver</button> </li>
        </ul>
    </div>

    </div>
  )
}

Header.defaultProps = {
    title: 'TwoMap'
}
export default Header