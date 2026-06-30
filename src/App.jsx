import React from 'react'
import img1 from './Salom.png'
const App = () => {
  return (
    <div className='sayt'>
      <div className="ikki">

      <div className="tepa_A">
        <div className="img">
        <img className='w-[50px]' src={img1} alt="" />
        </div>
        <div className="chap">
          <ul>
            <li>
              <a href="">HOME</a>
              <a href="">SERVICES</a>
              <a href="">Kitchen Showroom</a>
              <a href="">Gallery</a>
              <a href="">Testimonials</a>
              <a href="">Trades</a>
              <select>
                <option value="">Contact us</option>
                <option value="">Contact us1</option>
                <option value="">Contact us2</option>
              </select>
              <a href="">Coverage areas</a>
              <a href="">(805) 323-9515</a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>

      </div>



    </div>
  )
}

export default App
