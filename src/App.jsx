import React from 'react'
import img1 from './Salom.png'
import Samandar from './Samandar'
const App = () => {
  return (
    <div className='sayt'>
      <div className="ikki">
        <div className="tepa_A">
          <div className="chap">
              <img className='w-[50px] h-[50px]' src={img1} alt="" />
            <ul>
              <li>
                <a href="./Abdurahmon.jsx">HOME</a>
                <a href="./App.jsx">SERVICES</a>
                <a href="./Firdavs.jsx">Kitchen Showroom</a>
                <a href="./Mumar.jsx">Gallery</a>
                <a href="./Mrizo.jsx">Testimonials</a>
                <a href="./Umar.jsx">Trades</a>
                <select>
                  <option value="">Contact us</option>
                  <option value="">Contact us1</option>
                  <option value="">Contact us2</option>
                </select>
                <a href="./Samanadar.jsx">Coverage areas</a>
                <a href="">(805) 323-9515</a>
                <a href="https://instagramm.com"><i class="fa-brands fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      <div className="ss">
        
      </div>
      </div>

      <Samandar />


    </div>
  )
}

export default App
