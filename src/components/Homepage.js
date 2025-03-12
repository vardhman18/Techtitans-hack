import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Chatbot from "./Chatbot";
import "./HomePage.css";
import InfoSection from "./InfoSection";

const Homepage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    createShapes();
  }, []);

  const createShapes = () => {
    const shapes = document.getElementById('shapes');
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('div');
      shape.className = 'shape';
      shape.style.width = Math.random() * 50 + 20 + 'px';
      shape.style.height = Math.random() * 50 + 20 + 'px';
      shape.style.left = Math.random() * 100 + '%';
      shape.style.top = Math.random() * 100 + '%';
      shape.style.transform = `rotate(${Math.random() * 360}deg)`;
      shapes.appendChild(shape);

      // Animate shape
      setInterval(() => {
        shape.style.transform = `rotate(${Math.random() * 360}deg) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 text-white homepage">
      {/* Hero Section */}
      <section className="hero flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to Campus Buzz</h1>
        <p className="text-lg text-gray-300 max-w-xl animate-slide-up">
          Stay updated with the latest campus news, events, internship opportunities, and tech trends – all in one place.
        </p>
      </section>

      <div>
        <InfoSection />
        {/* Other sections here */}
      </div>

      {/* Externship Section */}
      <section className="externship-section">
        <h2 className="section-title">
          Delivering Externships from startups<br />
          to Fortune 1000 brands
        </h2>
        <div className="brand-logos">
          <img src="./logos/microsoft.png" alt="Anytune" className="brand-logo" />
          <img src="./logos/microsoft.png" alt="HSBC" className="brand-logo" />
          <img src="./logos/microsoft.png" alt="Snapchat" className="brand-logo" />
          <img src="./logos/microsoft.png" alt="Expedia" className="brand-logo" />
          <img src="./logos/microsoft.png" alt="Macquarie" className="brand-logo" />
          <img src="./logos/microsoft.png" alt="Delivery Hero" className="brand-logo" />
        </div>
      </section>

   

      {/* Features Section */}
      <section className="features grid grid-cols-2 md:grid-cols-3 gap-6 px-8 py-16 text-center animate-slide-up">
        <a href="/technews" className="feature">
          <img src="./home/technews.png" alt="Tech News" />
          <p>TechNews</p>
        </a>
        <a href="#" className="feature">
          <img src="./home/counsellor.png" alt="Counsellor" />
          <p>Counsellor</p>
        </a>
        <a href="/Internship" className="feature">
          <img src="./home/internships.png" alt="Internships" />
          <p>Internships</p>
        </a>
        <a href="#" className="feature">
          <img src="./home/schedules.png" alt="Events" />
          <p>Events</p>
        </a>
        <a href="/Resources" className="feature">
          <img src="./home/resources.png" alt="Resources" />
          <p>Resources</p>
        </a>
      </section>

      {/* Floating Chatbot Icon */}
      <div 
        className="chatbot-icon" 
        onClick={() => setShowChatbot(!showChatbot)}
      >
        <img src="./home/chatbot.png" alt="Chatbot" />
      </div>

      {/* Show Chatbot When Clicked */}
      {showChatbot && <Chatbot />}

   

      {/* Stats Section */}
      <section className="stats-section">
        <div className="background-shapes" id="shapes"></div>
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-number" data-value="500">500+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-box">
            <div className="stat-number" data-value="1000">1,000+</div>
            <div className="stat-label">Students Trained</div>
          </div>
          <div className="stat-box">
            <div className="stat-number" data-value="20">20+</div>
            <div className="stat-label">Domain Experts</div>
          </div>
          <div className="stat-box">
            <div className="stat-number" data-value="100">100%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">About Us</h4>
            <p>
              We are committed to providing the best resources, news, and
              opportunities for developers and learners around the globe.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="/technews">Tech News</a></li>
              <li><a href="/internship">Internships</a></li>
              <li><a href="/resources">Resources</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="./home/facebook.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="./home/twitter.png" alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="./home/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Campus Buzz. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;