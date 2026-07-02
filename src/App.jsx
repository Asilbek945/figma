import React from 'react'
import img1 from './Salom.png'
const App = () => {
  return (
    <div className='sayt'>
      <div className="ikki">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>

  <label className="label">numer</label>
  <input type="number" className="input" placeholder="numer" />

    <label className="label">tugilgan yil oy kun</label>
  <input type="date" className="input" placeholder="t  y, o" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>

      <div className="tepa_A">
        <div className="chap">
        <div className="img">
        <img className='w-[50px]' src={img1} alt="" />
        </div>
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
