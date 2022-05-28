import React from 'react'

const Header = ({title}) => {
  return (
    <div>


    <div className='header'>

<span>{title}</span>

        <ul>
            <li> Accueil </li>
            <li> Sites </li>
            <li> <button  className='btn'>Réserver</button> </li>
        </ul>
    </div>

    </div>
  )
}

Header.defaultProps = {
    title: 'TwoMap'
}
export default Header