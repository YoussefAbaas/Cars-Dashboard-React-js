import React from 'react'
import Sidebar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import BookingCar_Card from '../../components/BookingCarCard/BookingCarCard'
import { useState } from 'react'
import car1 from '../../img/booking_car1.png'
import car2 from '../../img/booking_car2.png'
import car3 from '../../img/booking_car3.png'
import car4 from '../../img/booking_car4.png'
import car5 from '../../img/booking_car5.png'
import car6 from '../../img/booking_car6.png'
import car7 from '../../img/booking_car7.png'
import car8 from '../../img/booking_car8.png'
import car9 from '../../img/booking_car9.png'
import './Booking.scss'
function Booking() {
  const [bookingCars,setbookingCars]=useState([
    {name:'Porshe 718 Cayman S',origin_country:'Coupe',img:car1,users_num:4,type:'Manual',price:400},
    {name:'Porshe 718 Cayman S',origin_country:'Coupe',img:car2,users_num:4,type:'Manual',price:400},
    {name:'Porshe 718 Cayman S',origin_country:'Coupe',img:car3,users_num:4,type:'Manual',price:400},
    {name:'Porshe 718 Cayman S',origin_country:'Coupe',img:car4,users_num:4,type:'Manual',price:400},
    {name:'Porshe 718 Cayman S',origin_country:'Coupe',img:car5,users_num:4,type:'Manual',price:400},
    {name:'Porshe 718 Cayman S',origin_country:'Coupe',img:car6,users_num:4,type:'Manual',price:400},
    {name:'Porshe 718 Cayman S',origin_country:'Coupe',img:car7,users_num:4,type:'Manual',price:400},
    {name:'Porshe 718 Cayman S',origin_country:'Coupe',img:car8,users_num:4,type:'Manual',price:400},
    {name:'Porshe 718 Cayman S',origin_country:'Coupe',img:car9,users_num:4,type:'Manual',price:400},
  ])
  const cards=bookingCars.map((car)=>{
   return <BookingCar_Card name={car.name} origin_country={car.origin_country} img={car.img} users_num={car.users_num}
   type={car.type} price={car.price}/>
  })
  const [filterGrid,setfilterGrid]=useState(false);
  return (
    <div>
        <body>
            <Header/>
            <main>
             <Sidebar/>
             <section className="booking container pt-4">
            <h2 className="ms-2">Booking</h2>
            <div className="d-flex justify-content-between mt-4 align-items-center">
                <div id="droplists" className="d-flex">
                    <div className="dropdown ms-2">
                        <button className="btn btn-white bg-white rounded-pill dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            New
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">New</a>
                        </div>
                    </div>
                    <div className="dropdown ms-2">
                        <button className="btn btn-white bg-white rounded-pill dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Toyota
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Toyota</a>
                        </div>
                    </div>
                </div>
                <div>
                    <button id="filter-grid" className='me-1' style={{backgroundColor:filterGrid?'#A162F7':'white'}} onClick={()=>setfilterGrid(true)}><i className="bi bi-grid"></i></button>
                    <button id="filter-spin" style={{backgroundColor:filterGrid?'white':'#A162F7'}} onClick={()=>setfilterGrid(false)}><i className="bi bi-sliders"></i></button>
                </div>
            </div>
            <div className="cars container mt-4">
                <div className="row justify-content-between g-4">
                {cards}
                </div>
                </div>
            </section>
            </main>
        </body>
    </div>
  )
}

export default Booking