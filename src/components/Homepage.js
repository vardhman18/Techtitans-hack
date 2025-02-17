import React, { useState } from "react";
import { Search } from "lucide-react";
import Chatbot from "./Chatbot";
import "./HomePage.css";

const Homepage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 text-white homepage">
      {/* Hero Section */}
      <section className="hero flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to Campus Buzz</h1>
        <p className="text-lg text-gray-300 max-w-xl animate-slide-up">
          Stay updated with the latest campus news, events, internship opportunities, and tech trends – all in one place.
        </p>
        <div className="relative max-w-2xl mx-auto mt-6 animate-fade-in">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm"
            placeholder="Search campus news, internships, resources..."
          />
          <Search className="absolute right-4 top-3 text-gray-300 hover:text-white" />
        </div>
      </section>

      {/* Agenda Section */}
      <section className="agenda px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in">
          Campus Buzz is your one-stop platform for staying informed about university news, tech advancements, and career opportunities. 
          Our goal is to create a bridge between students and valuable resources that enhance their academic and professional journey.
        </p>
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

      {/* Motion Graphics Section */}
      <section className="motion-graphics py-16 text-center animate-fade-in">
        <h2 className="text-3xl font-semibold mb-6">Explore, Learn & Grow</h2>
        <div className="flex justify-center">
          <img src="./home/motion-graphic.gif" alt="Engaging Motion" className="w-3/4 md:w-1/2" />
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
          <p>&copy; 2025 YourWebsite. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
