import React from "react";
import "./internship.css";

const internshipWebsites = [
  {
    name: "Internshala",
    url: "https://internshala.com",
    description:
      "A platform offering internships across diverse fields with training courses to boost your skills.",
    logo: "./logos/internshala.png",
  },
  {
    name: "LinkedIn Internships",
    url: "https://www.linkedin.com/internships",
    description:
      "A global platform to showcase your professional profile and find internships matching your goals.",
    logo: "./logos/linkedin.png",
  },
  {
    name: "AngelList",
    url: "https://angel.co",
    description:
      "Connects you with innovative startups offering exciting opportunities, sometimes with stock options.",
    logo: "./logos/angellist.jpg",
  },
  {
    name: "Glassdoor Internships",
    url: "https://www.glassdoor.com/Internships",
    description:
      "Find internships with detailed company reviews and salary insights for informed decisions.",
    logo: "./logos/glassdoor.jpg",
  },
  {
    name: "Indeed Internships",
    url: "https://www.indeed.com/q-Internships-jobs.html",
    description:
      "Search engine with powerful filters and insights to help you find the perfect internship.",
    logo: "./logos/indeed.png",
  },
  {
    name: "WayUp",
    url: "https://www.wayup.com",
    description:
      "A platform designed for students and recent grads, offering internships and entry-level jobs.",
    logo: "./logos/wayup.png",
  },
  {
    name: "Handshake",
    url: "https://joinhandshake.com",
    description:
      "Built for college students, discover internships aligned with your major and goals.",
    logo: "./logos/handshake.png",
  },
  {
    name: "Google Internships",
    url: "https://careers.google.com/internships/",
    description:
      "Work on cutting-edge technologies like AI and cloud computing with access to world-class mentorship.",
    logo: "./logos/google.png",
  },
  {
    name: "Microsoft Internships",
    url: "https://careers.microsoft.com/students/us/en/us-internship",
    description:
      "Internships across software, research, and business fields with impactful projects.",
    logo: "./logos/microsoft.png",
  },
  {
    name: "IBM Internships",
    url: "https://www.ibm.com/employment/internships/",
    description:
      "Focuses on emerging tech like AI and quantum computing, offering mentorship and hackathons.",
    logo: "./logos/ibm.png",
  },
];

const Internship = () => {
  return (
    <div className="internship-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">The Top 10 Best Websites To Find Internships</h1>
        <p className="hero-description">
          Explore the best platforms to kickstart your career with meaningful internships.
        </p>
      </div>

  

      {/* Internship Websites Section */}
      <div className="internship-websites">
      <div className="website-portal-heading">
        Explore Internship Portals
        </div>
        <div className="internship-grid">
          {internshipWebsites.map((website, index) => (
            <a
              key={index}
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="internship-card"
              title={website.description} 
            >
              <img src={website.logo} alt={`${website.name} Logo`} className="internship-logo" />
              <div className="internship-details">
                <h3>{website.name}</h3>
                <p>{website.description}</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            </a>
          ))}
        </div>
      </div>
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

export default Internship;
