import React from 'react'
import '../styles/FormReservation.css'
import Footer from './Footer'
import HearderAll from './HearderAll'
import { useNavigate } from 'react-router-dom'

export default function FormReservation() {
  const navigate = useNavigate()

  return (
    <>
    <HearderAll name='Rsv' />
        <div className="FormRsv">
            <div className="sithotl">
                <div className="sitvisi">
                <label htmlFor="">Site a visité</label>
                <input type="text"/>
                </div>
                <div className="hotl">
                <label htmlFor="">Type d’hôtel</label>
                <input type="text"/>    
                </div>
            </div>
            <div className="yourslf">
            <div className="dur">
                <label htmlFor="">Duréé du sejour</label>
                <input type="text"/>
                </div>
                <div className="allrgi">
                <label htmlFor="">Vos allergies</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>   
                </div>
            </div>
            <button className="but3" >Valider</button>
        </div>
        <Footer />
    </>
  )
}
