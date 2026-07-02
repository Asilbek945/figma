import React from 'react'

const pas = () => {
  return (
    <div>
        <footer className="footer-section">
    <div className="footer-container">
        <div className="footer-left">
            <h2>Let's work together</h2>
            <p className="footer-desc">
                Call or fill out the form to learn more about ICAL Construction's expert remodeling services.
                You're also welcome to visit our showroom by appointment and explore our premium materials in person!
            </p>

            <div className="footer-company-info">
                <p>Fical Construction Inc.</p>
                <p>LIC: #1022033</p>
                <p className="copyright">© 2026 Winter Showroom & Design Studio</p>
            </div>
        </div>
        <div className="footer-right">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group-row">
                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="tel" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label>Full name</label>
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Describe Your Project</label>
                    <textarea rows="3"></textarea>
                </div>
                <button type="submit" className="submit-btn">SUBMIT</button>
            </form>

            <div className="footer-contacts">
                <div className="contact-col">
                    <h4>ADDRESS</h4>
                    <p>3636 Conejo Center Drive<br />Thousand Oaks, CA 91320</p>
                </div>
                <div className="contact-col">
                    <h4>CALL US</h4>
                    <p>(805) 405-9225</p>
                </div>
                <div className="contact-col">
                    <h4>FOLLOW US</h4>
                    <div className="social-icons">
  
                        <span>f</span>
                        <span>t</span>
                        <span>in</span>
                        <span>g+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
  )
}

export default pas