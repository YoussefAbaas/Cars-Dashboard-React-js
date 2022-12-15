import React from 'react'
import bill from '../../img/bill.png'
import person from '../../img/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumperperson.png'
import './Header.scss';
function Header() {
  return (
    <header>
        <div className="header_search mt-2">
            <i class="bi bi-search"></i>
            <input className="mb-4" type="text" placeholder="Search or type"/>
            </div>
      
            <div className="header_photo mt-4">
            <img src={bill} className="bill me-1"/>
            <img src={person} className="person_img"/>
            </div>
    </header>
  )
}

export default Header;