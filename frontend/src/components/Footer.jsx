import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Karate Academy</h3>
          <p>Empowering students through the art of Karate since 1995.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Dojo Street, Martial Arts City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@karateacademy.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Karate Academy. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
