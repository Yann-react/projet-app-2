import React , {useEffect} from 'react'
import '../styles/HearderAll.css'
import { useNavigate } from 'react-router-dom'
export default function HearderAll({name}) {
  const navigate = useNavigate()
  function choose (){
 
  }
  function color (){
    if (name=="Site"){
      document.querySelector('.site').classList.add('colorSite')
     }else if(name=="Rsv"){
       document.querySelector('.rsv').classList.add('colorRsv1')
     }
  }
  useEffect(()=>{
 color()
},[])
 
  return (
    <>
   <div className='herd-all'>
    <h1 className='herd-titl' onClick={()=>navigate('/')}>TWOMAP</h1>
    <ul className='herd-mn'>
        <li onClick={()=> navigate('/')}>Accueil</li>
        <li className='site' onClick={()=>navigate('/Site')}>Site</li>
        <li className='color-rvs rsv' onClick={()=>navigate('Reservation')}>Reservez</li>
    </ul>
   </div>
    </>
  )
}
