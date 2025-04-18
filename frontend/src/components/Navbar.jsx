"use client"

import { useState } from "react"
import "./Navbar.css"
import navbarlogo from './../assets/Achievers_Logo.jpeg';

function Navbar() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false)

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={navbarlogo || '/placeholder.svg'} alt="navbar Logo" className="navbarlogo" />
        <h1>Achievers Sports Academy</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/about.jsx">About</a>
        </li>
        <li>
          <a href="/contact.jsx">Contact</a>
        </li>
        <li className="login-dropdown">
          <button onClick={toggleLoginDropdown} className="login-btn">
            Login <span className="dropdown-arrow">▼</span>
          </button>
          {showLoginDropdown && (
            <div className="dropdown-content">
              <a href="/teacher-login">Sensei Login</a>
              <a href="/student-login">Student Login</a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
