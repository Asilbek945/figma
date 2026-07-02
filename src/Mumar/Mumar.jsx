import React from 'react'
import rasm1 from './Salom.png'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Asilbek from '../Asilbek/Asilbek'
const App = () => {
  return (
    
    < div>
    <div className="navhed">

      <div className="navbar">
        <div className="navbarr">
        <img src={rasm1} alt="" />
        </div>
        <div className="navbarrr">
        <ul>
                <li><Link to="asilbek">HOME</Link></li>
                <li>SERVICES</li>
                <li>Kitchen Showroom </li>
                <li>Gallery </li>
                <li>Testimonials </li>
                <li>Trades </li>
                <  select className='a' >
                  <option className='a1' value="">Contact us</option>
                  <option className='a1' value="">Contact us1</option>
                  <option className='a1' value="">Contact us2</option>
                </select>
                <li>Coverage areas </li>
                <li> (805) 323-9515</li>
              

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
   {/* /xecrtvugybihu */}


    <>

      <section className="hero">
        <div className="overlay">
          <h1>Services</h1>
          <p>
            Home / <span>Services</span>
          </p>
        </div>
      </section>

      <section className="services">
        <div className="container">

          <div className="service-card">
            {/* <img src="/images/service1.jpg" alt="Service 1" /> */}

            <div className="text">
              <h2>Web Development</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam necessitatibus sint fugiat.
              </p>

              <a href="#">Read More</a>
            </div>
          </div>

          <div className="service-card reverse">
            {/* <img src="/images/service2.jpg" alt="Service 2" /> */}

            <div className="text">
              <h2>Graphic Design</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam necessitatibus sint fugiat.
              </p>

              <a href="#">Read More</a>
            </div>
          </div>

          <div className="service-card">
            {/* <img src="/images/service3.jpg" alt="Service 3" /> */}

            <div className="text">
              <h2>Digital Marketing</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam necessitatibus sint fugiat.
              </p>

              <a href="#">Read More</a>
            </div>
          </div>

        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Let's Work Together</h2>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">

          <div className="footer-box">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>

            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-box">
            <h3>Contact</h3>

            <p>+998 90 123 45 67</p>
            <p>info@example.com</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 All Rights Reserved.
        </div>
      </footer>
    </>
  










    </div>
    
  )
}

export default App


