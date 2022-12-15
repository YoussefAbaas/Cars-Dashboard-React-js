import React, { useState } from 'react'
import './BookingCarCard.scss'

function BookingCar_Card(props) {
  const [heartClicked,setheartClicked]=useState(false);
  return (
    <div className="car_card col-4 bg-white pt-3 px-3">
                    <div className="d-flex justify-content-between">
                    <h3>{props.name}</h3>
                    <i onClick={()=>{setheartClicked(!heartClicked)}} className="heart_icon bi bi-suit-heart-fill mt-0" style={{color:heartClicked?'red':'#A4A5A6'}}></i>
                    </div>
                    <p>{props.origin_country}</p>
                    <img className="ps-4"src={props.img}/>
                    <div className="d-flex justify-content-between mt-3">
                    <div className="d-flex">
                    <div className="d-flex justify-content-center align-items-center">
                    <i className="bi bi-person mb-3" style={{color:'#A162F7'}}></i>
                    <p>{props.users_num}</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                    <i className="bi bi-repeat ms-2 mb-3" style={{color:'#A162F7'}}></i>
                    <p>{props.type}</p>
                    </div>
                    </div>
                    <p><strong>{props.price}$</strong>/d</p>
                    </div>
                </div>
  )
}

export default BookingCar_Card