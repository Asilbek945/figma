import React from 'react';
import rasm1 from './Salom.png'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Asilbek from './Asilbek/Asilbek';
import Mumar from './Mumar/Mumar';
const App = () => {
  return (
    <BrowserRouter>

      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, color: '#111', width: '100%', overflowX: 'hidden' }}>

        <header style={{
          backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.7), rgba(17, 17, 17, 0.7)), url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '940px',
          display: 'flex',
          flexDirection: 'column',
          color: 'white'
        }}>

          <div className="navbar">
            <div className="navbarr">
              <img src={rasm1} alt="" />
            </div>
            <div className="navbarrr">
              <ul>
                <li><Link to="Asilbek">HOME</Link></li>
                <li><Link to="Mumar">SERVICES</Link></li>
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

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px' }}>
            <h1 style={{ fontSize: '72px', margin: '0 0 20px 0', fontWeight: '300', lineHeight: '1.1' }}>
              Transforming spaces into <br />
              <span style={{ color: '#FFCC00', fontWeight: 'bold' }}>customized masterpieces.</span>
            </h1>
            <p style={{ maxWidth: '600px', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', color: '#ddd' }}>
              We create stunning, functional interiors tailored to your lifestyle. Discover the art of modern design with our expert team.
            </p>
            <button style={{ padding: '15px 35px', background: '#FFCC00', color: '#000', border: 'none', fontWeight: 'bold', cursor: 'pointer', width: 'max-content', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Explore Our Work
            </button>
          </div>
        </header>

        <section style={{ padding: '100px 80px', background: '#fff' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px', marginBottom: '10px', fontWeight: 'bold' }}>Our Services</h2>
            <p style={{ color: '#666', fontSize: '16px' }}>Providing comprehensive design solutions tailored to your specific needs.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {[
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
              "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=500",
              "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
              "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=500"
            ].map((img, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={img} alt="Service" style={{ width: '100%', height: '240px', objectFit: 'cover', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '20px', marginBottom: '15px', textTransform: 'uppercase' }}>Service Name {i + 1}</h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>Detailed description of the interior design service provided in this category goes here.</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ padding: '100px 80px', background: '#FDFBF7' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px', textAlign: 'center' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#FFCC00', marginBottom: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ fontSize: '30px' }}>✦</span>
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: 'bold' }}>Feature Title {i}</h3>
                <p style={{ color: '#555', lineHeight: '1.6', padding: '0 20px', marginBottom: '30px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <button style={{
                  background: '#FFB700',
                  color: 'white',
                  border: 'none',
                  padding: '12px 35px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}>
                  Learn More
                </button>

              </div>
            ))}
          </div>
        </section>

        <section style={{ height: '700px', width: '100%' }}>
          <img src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1920&q=80" alt="Modern Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </section>

        <section style={{ padding: '120px 80px', display: 'flex', gap: '80px', background: '#fff' }}>
          <div style={{ flex: '1' }}>
            <h2 style={{ fontSize: '48px', lineHeight: '1.2', margin: 0, fontWeight: 'bold' }}>Transforming <br /> spaces with <br /> precision.</h2>
          </div>
          <div style={{ flex: '2', display: 'flex', gap: '40px', color: '#555', lineHeight: '1.8', fontSize: '16px' }}>
            <div style={{ flex: '1' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque dolor id nunc dictum.
            </div>
            <div style={{ flex: '1' }}>
              Donec scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus. Aliquam at erat in purus aliquet mollis. Fusce elementum velit vel dolor iaculis egestas.
            </div>
          </div>
        </section>
        <footer style={{ background: '#FFB700', padding: '100px 80px', display: 'flex', justifyContent: 'space-between', color: '#000' }}>
          <div style={{ maxWidth: '500px' }}>
            <h2 style={{ fontSize: '64px', margin: '0 0 20px 0', lineHeight: '1', fontWeight: 'bold' }}>Let's work <br /> together.</h2>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '40px' }}>Ready to start your next project? Get in touch with us.</p>

            <div style={{ display: 'flex', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
              <input
                type="email"
                placeholder="Email address"
                style={{ background: 'transparent', border: 'none', outline: 'none', flex: 1, fontSize: '18px', color: '#000', fontWeight: 'bold' }}
              />
              <span style={{ fontSize: '24px', cursor: 'pointer', fontWeight: 'bold' }}>➔</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '100px', fontWeight: 'bold', fontSize: '16px', marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span style={{ cursor: 'pointer' }}>Instagram</span>
              <span style={{ cursor: 'pointer' }}>Twitter</span>
              <span style={{ cursor: 'pointer' }}>Facebook</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span style={{ cursor: 'pointer' }}>Contact</span>
              <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
              <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            </div>
          </div>
        </footer>

      </div>

      <Routes>
        <Route path='Asilbek' element={<Asilbek />} />
        <Route path='Mumar' element={<Mumar />} />

      </Routes>

{/* <Mumar /> */}

    </BrowserRouter>
  );
}

export default App;