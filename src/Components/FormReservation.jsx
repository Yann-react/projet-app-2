import React from 'react'
import '../styles/FormReservation.css'
export default function FormReservation() {
  return (
    <>
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
            <button className="but3">Valider</button>
        </div>
    </>
  )
}
