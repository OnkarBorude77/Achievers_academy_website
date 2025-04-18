import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />

      <div className="hero-section">
        <div className="hero-content">
          <h1>Master the Art of Karate</h1>
          <p>Discipline. Respect. Excellence.</p>
          <button className="cta-button">Join Now</button>
        </div>
      </div>

      <div className="features-section">
        <h2>Our Karate Programs</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🥋</div>
            <h3>Traditional Karate</h3>
            <p>Learn authentic techniques passed down through generations of masters.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Competition Training</h3>
            <p>Prepare for tournaments with specialized coaching and sparring sessions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👶</div>
            <h3>Kids Karate</h3>
            <p>Age-appropriate training that builds confidence and discipline in children.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
