import React from 'react'
import '../styles/Reservation.css'
import img1 from '../assets/img1.jpg'
export default function Reservation() {
  return (
    <>
      <div className="box-grand">
            <div className="box-form">
           
                <img src={img1} className="img2" width="380px" />
            
                <div className="form">
                    <h3>RESERVEZ MAINTENANT</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <div className="name">
                        <div className="nom">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" />
                        </div>
                        <div className="prnom">
                            <label htmlFor="prnom">Prenom</label>
                            <input type="text" />
                        </div>
                    </div>   
                    <div className="mail">
                        <label htmlFor="mail">Adresse Mail</label>
                        <input type="text" />
                    </div> 
                    <div className="originSex">
                        <div className="origin">
                            <label htmlFor="origin">Origine</label>
                            <input type="text" />
                        </div>
                    <div className="sx">
                            <label htmlFor="origin">Sexe</label>
                            <input type="text" />
                    </div>
                </div>
                    <button className="but">Suivant</button>
                    </div>
            </div>
  
        </div> 
    </>
  )
}
