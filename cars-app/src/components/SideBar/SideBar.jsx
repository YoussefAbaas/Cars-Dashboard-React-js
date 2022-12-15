import React from 'react';
import logo from '../../img/Vector_1.png';
import wheel from '../../img/driving_wheel.png';
import './SideBar.scss'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
export default function Sidebar() {
  return (
    
    <div className="side-bar">
       
            <div className="header_name">
                <img src={logo} className="logo"/>
                <h1>Motiv.</h1>
            </div>

            <div className="side-list d-flex flex-column">
                <ul className="list-group pt-4">
                    <li className="list-group-item py-2 border-0"><Link className="text-decoration-none" to='/'><i
                                className="bi bi-grid me-2"></i>Dashboard</Link></li>
                    <li className="list-group-item py-2 border-0"><a className="text-decoration-none" href="#"><img
                                src={wheel} style={{width:'16px',height:'16px'}} className="me-2"/>Assets</a></li>
                    <li className="list-group-item py-2 border-0"><Link className="text-decoration-none" to='/booking'><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-car-front-fill me-2" viewBox="0 0 16 16">
                                <path
                                    d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                            </svg>Booking</Link></li>
                    <li className="list-group-item py-2 border-0"><a className="text-decoration-none" href="#"><i
                                className="bi bi-bag me-2"></i>Sell Cars</a></li>
                    <li className="list-group-item py-2 border-0"><a className="text-decoration-none" href="#"><i
                                className="bi bi-cart2 me-2"></i>Buy Cars</a></li>
                    <li className="list-group-item py-2 border-0"><a className="text-decoration-none" href="#"><i
                                className="bi bi-scissors me-2"></i>Services</a></li>
                    <li className="list-group-item py-2 border-0"><a className="text-decoration-none" href="#"><i
                                className="bi bi-calendar4-range me-2"></i>Calender</a></li>
                    <li className="list-group-item py-2 border-0"><a className="text-decoration-none" href="#"><i
                                className="bi bi-chat-square-text me-2"></i>Messages</a></li>
                </ul>
                
                <ul className="list-group position-absolute bottom-0">
                    <li className="list-group-item border-0"><button className="border-0 bg-white"><i
                                className="bi bi-gear me-2"></i>Settings</button></li>
                    <li className="list-group-item border-0"><button className="border-0 bg-white"><i
                                className="bi bi-box-arrow-left me-2"></i>Log Out</button></li>
                </ul>
            </div>
        </div>
        
        
  )
}
