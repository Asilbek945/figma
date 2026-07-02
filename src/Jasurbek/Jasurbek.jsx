import React from 'react'
import rasm1 from './Salom.png'
// import Samandar from './Samandar.jsx'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    
    < div>
    <div className="navhed">

      <div className="navbar">
        <div className="navbarr">
        <img src={rasm1} alt="" />
        </div>
        <div className="navbarrr">
<ul>
            <li>
              <a href="./Abdurahmon.jsx">HOME</a>
              <a href="./App.jsx">SERVICES</a>
              <a href="./Firdavs.jsx">Kitchen Showroom</a>
              <a href="./Mumar.jsx">Gallery</a>
              <a href="./Mrizo.jsx">Testimonials</a>
              <a href="./Umar.jsx">Trades</a>
              <  select className='a' >
                <option className='a1' value="">Contact us</option>
                <option className='a1' value="">Contact us1</option>
                <option className='a1' value="">Contact us2</option>
              </select>
              <a href="./Samanadar.jsx">Coverage areas</a>
              <a href="">(805) 323-9515</a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
          </ul>
      </div>
        </div>

      <div className="header">
        <div className="header1">
        <h1>Projects</h1>
        </div>
        <div className="header2">
        <h3>Quality and affordability are an integral part of Focil’s design and <br /> construction. Whether we are building a custom residence.</h3>
        </div>
      </div>
   </div>














    </div>
    </BrowserRouter>
  )
}

export default App