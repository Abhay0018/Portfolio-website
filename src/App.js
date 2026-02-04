import React from 'react';
import { Github, Linkedin, Code2, Mail, Phone, MapPin, Award, Briefcase, Sparkles, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@700;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          --gradient-5: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          --gradient-6: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
          --gradient-7: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          --gradient-8: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
          --dark: #0a0a0f;
          --dark-2: #1a1a2e;
          --text: #ffffff;
          --text-muted: #b8b8d1;
        }

        body {
          font-family: 'Outfit', sans-serif;
          background: var(--dark);
          color: var(--text);
          overflow-x: hidden;
          line-height: 1.6;
        }

        .portfolio-container {
          position: relative;
        }

        /* Animated Background */
        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: var(--dark);
          overflow: hidden;
        }

        .animated-bg::before,
        .animated-bg::after {
          content: '';
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          animation: float 20s infinite ease-in-out;
        }

        .animated-bg::before {
          background: linear-gradient(135deg, #667eea, #764ba2);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }

        .animated-bg::after {
          background: linear-gradient(135deg, #f093fb, #f5576c);
          bottom: -200px;
          right: -200px;
          animation-delay: -10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, 100px) scale(1.1); }
          50% { transform: translate(-50px, 150px) scale(0.9); }
          75% { transform: translate(150px, -100px) scale(1.05); }
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
          background: var(--gradient-3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }

        .nav-links button {
          color: var(--text-muted);
          background: none;
          border: none;
          font-weight: 500;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
        }

        .nav-links button::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-3);
          transition: width 0.3s ease;
        }

        .nav-links button:hover {
          color: var(--text);
        }

        .nav-links button:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-text h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 6rem;
          line-height: 1;
          margin-bottom: 1rem;
          background: var(--gradient-5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
          animation: slideInLeft 0.8s ease;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--text);
          animation: slideInLeft 0.8s ease 0.2s both;
        }

        .hero-text p {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.8;
          animation: slideInLeft 0.8s ease 0.4s both;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          animation: slideInLeft 0.8s ease 0.6s both;
        }

        .btn {
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Outfit', sans-serif;
        }

        .btn-primary {
          background: var(--gradient-2);
          color: var(--text);
          box-shadow: 0 10px 30px rgba(245, 87, 108, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(245, 87, 108, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-3px);
        }

        .hero-visual {
          position: relative;
          animation: fadeIn 1s ease 0.5s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .floating-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: floatCard 6s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.5rem;
          background: var(--gradient-4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--gradient-3);
          border-color: transparent;
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(79, 172, 254, 0.3);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        /* Section Styles */
        section {
          padding: 8rem 4rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          animation: fadeInUp 0.8s ease;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          background: var(--gradient-3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 3px;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--text-muted);
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-content {
          animation: slideInLeft 0.8s ease;
        }

        .about-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          background: var(--gradient-5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-content p {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .education-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: slideInRight 0.8s ease;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .education-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--gradient-4);
        }

        .education-card:hover {
          transform: translateX(10px);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .education-card h4 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        .education-card .institution {
          color: #4facfe;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .education-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        /* Skills Section */
        #skills {
          background: rgba(255, 255, 255, 0.01);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-1);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .skill-card:hover::before {
          transform: scaleX(1);
        }

        .skill-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .skill-card:nth-child(1)::before { background: var(--gradient-1); }
        .skill-card:nth-child(2)::before { background: var(--gradient-2); }
        .skill-card:nth-child(3)::before { background: var(--gradient-4); }
        .skill-card:nth-child(4)::before { background: var(--gradient-5); }

        .skill-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          background: var(--gradient-3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
        }

        .skill-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(255, 255, 255, 0.15);
          color: var(--text);
          transform: translateY(-2px);
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          gap: 3rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          overflow: hidden;
          transition: all 0.4s ease;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 400px;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .project-visual {
          background: var(--gradient-1);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
        }

        .project-card:nth-child(1) .project-visual { background: var(--gradient-4); }
        .project-card:nth-child(2) .project-visual { background: var(--gradient-2); }

        .project-visual::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .project-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .project-role {
          color: #4facfe;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }

        .project-content p {
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .project-content ul {
          list-style: none;
          margin-bottom: 2rem;
        }

        .project-content li {
          color: var(--text-muted);
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.8rem;
        }

        .project-content li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #43e97b;
          font-weight: bold;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .tech-badge {
          background: var(--gradient-3);
          padding: 0.5rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
        }

        /* Leadership Section */
        #leadership {
          background: rgba(255, 255, 255, 0.01);
        }

        .leadership-grid {
          display: grid;
          gap: 2rem;
        }

        .leadership-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 2rem;
          align-items: center;
          transition: all 0.3s ease;
        }

        .leadership-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateX(10px);
        }

        .leadership-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: var(--gradient-5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }

        .leadership-card:nth-child(2) .leadership-icon { background: var(--gradient-2); }
        .leadership-card:nth-child(3) .leadership-icon { background: var(--gradient-4); }

        .leadership-content h3 {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        .leadership-content p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        .leadership-year {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          background: var(--gradient-3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Certificates Section */
        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
        }

        .certificate-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .certificate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: var(--gradient-4);
        }

        .certificate-card:nth-child(2)::before {
          background: var(--gradient-2);
        }

        .certificate-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
        }

        .certificate-badge {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--gradient-5);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
          font-size: 2rem;
        }

        .certificate-card h3 {
          font-size: 1.8rem;
          margin-bottom: 0.8rem;
          color: var(--text);
        }

        .certificate-venue {
          color: #43e97b;
          font-weight: 600;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .certificate-card ul {
          list-style: none;
        }

        .certificate-card li {
          color: var(--text-muted);
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.8rem;
          line-height: 1.6;
        }

        .certificate-card li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: #43e97b;
        }

        /* Contact Section */
        #contact {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border-radius: 50px;
          padding: 6rem 4rem;
        }

        .contact-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .contact-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--gradient-3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
        }

        .contact-item h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        .contact-item a,
        .contact-item p {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #4facfe;
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 3rem;
          color: var(--text-muted);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        footer p {
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content,
          .about-grid,
          .project-card {
            grid-template-columns: 1fr;
          }

          .hero-text h1 {
            font-size: 4rem;
          }

          .project-visual {
            min-height: 300px;
          }

          nav {
            padding: 1.5rem 2rem;
          }

          section {
            padding: 6rem 2rem;
          }

          .leadership-card {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .leadership-icon {
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 1.5rem;
            font-size: 0.85rem;
          }

          .hero-text h1 {
            font-size: 3rem;
          }

          .hero-text h2 {
            font-size: 1.8rem;
          }

          .section-title {
            font-size: 3rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .certificates-grid {
            grid-template-columns: 1fr;
          }

          .logo {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Animated Background */}
      <div className="animated-bg" />

      {/* Navigation */}
      <nav>
        <div className="logo" onClick={() => scrollToSection('hero')}>AS</div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>ABHAY SHUKLA</h1>
            <h2>Web Developer & UI/UX Enthusiast</h2>
            <p>
              Crafting beautiful, responsive web experiences with cutting-edge technologies. 
              Passionate about sustainable solutions and innovative digital design that makes a difference.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work <Sparkles size={18} />
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years Learning</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Hackathons</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">87.8</div>
                  <div className="stat-label">JEE Percentile</div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/abhay-shukla-8ba30529a/" target="_blank" rel="noreferrer" className="social-link">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/abhayshukla" target="_blank" rel="noreferrer" className="social-link">
                  <Github size={20} />
                </a>
                <a href="https://leetcode.com/u/Abhay0018/" target="_blank" rel="noreferrer" className="social-link">
                  <Code2 size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={32} color="#4facfe" />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-header">
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-subtitle">
            Passionate developer on a mission to create impactful digital experiences
          </p>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <h3>Hello! I'm Abhay 👋</h3>
            <p>
              I'm a Computer Science student at K.I.E.T with an insatiable passion for frontend 
              development and creating web applications that make a real difference in people's lives.
            </p>
            <p>
              My journey in tech is fueled by curiosity and a deep commitment to building sustainable, 
              user-centered solutions. I specialize in crafting responsive interfaces that blend 
              aesthetics with functionality, particularly focusing on environmental sustainability projects.
            </p>
            <p>
              With hands-on experience in React, JavaScript, and modern web technologies, I'm constantly 
              exploring new design trends and participating in hackathons to push the boundaries of what's possible.
            </p>
          </div>
          <div className="education-cards">
            <div className="education-card">
              <h4>B.Tech in Computer Science</h4>
              <p className="institution">K.I.E.T, Ghaziabad</p>
              <p>CPI: 7.5/10 | 2023 - Present</p>
              <p>JEE-MAINS: 87.8 percentile</p>
            </div>
            <div className="education-card">
              <h4>Senior Secondary (CBSE)</h4>
              <p className="institution">Children's Academy, Lakhimpur Kheri</p>
              <p>76.8%</p>
            </div>
            <div className="education-card">
              <h4>Coursework Highlights</h4>
              <p>Data Structures • Algorithms • Frontend Development • UI/UX Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-header">
          <h2 className="section-title">SKILLS & EXPERTISE</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <Code2 size={28} />
            </div>
            <h3>Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">C/C++</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <Sparkles size={28} />
            </div>
            <h3>Frameworks</h3>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Tailwind CSS</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <Briefcase size={28} />
            </div>
            <h3>Tools & Platforms</h3>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <Award size={28} />
            </div>
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Team Leadership</span>
              <span className="skill-tag">Creativity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-header">
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <p className="section-subtitle">
            Building solutions that matter
          </p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-visual">🌱</div>
            <div className="project-content">
              <h3>Evergreen Footprints</h3>
              <p className="project-role">Frontend Developer • 2024</p>
              <p>
                A comprehensive web application designed to calculate daily carbon footprints 
                using user-provided data, offering personalized sustainability recommendations.
              </p>
              <ul>
                <li>Accurate carbon footprint tracking system</li>
                <li>Real-time sustainability recommendations</li>
                <li>Engaging, user-friendly interface</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">UI/UX</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-visual">🔊</div>
            <div className="project-content">
              <h3>BOLO</h3>
              <p className="project-role">Developer • 2024</p>
              <p>
                A text-to-speech converter providing real-time voice output, utilizing 
                Windows Speech API for seamless compatibility and enhanced accessibility.
              </p>
              <ul>
                <li>Real-time voice synthesis</li>
                <li>Cross-application compatibility</li>
                <li>Accessibility-focused design</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">Speech API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership">
        <div className="section-header">
          <h2 className="section-title">LEADERSHIP</h2>
          <p className="section-subtitle">
            Leading teams and driving positive change
          </p>
        </div>
        <div className="leadership-grid">
          <div className="leadership-card">
            <div className="leadership-icon">👥</div>
            <div className="leadership-content">
              <h3>Team Lead - Environmental Projects</h3>
              <p>
                Led two teams of 4 members each for Water Footprints and Carbon Footprints 
                projects, ensuring successful delivery through effective coordination and collaboration.
              </p>
            </div>
            <div className="leadership-year">2024</div>
          </div>

          <div className="leadership-card">
            <div className="leadership-icon">🏆</div>
            <div className="leadership-content">
              <h3>House Captain</h3>
              <p>
                Organized and managed events for 200+ participants across two consecutive academic 
                sessions, fostering teamwork and school spirit.
              </p>
            </div>
            <div className="leadership-year">2019-21</div>
          </div>

          <div className="leadership-card">
            <div className="leadership-icon">🎯</div>
            <div className="leadership-content">
              <h3>District English Competition</h3>
              <p>
                Led a team of 4 students to secure 2nd place in the district-level English 
                competition, demonstrating leadership and collaborative excellence.
              </p>
            </div>
            <div className="leadership-year">2018</div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates">
        <div className="section-header">
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <p className="section-subtitle">
            Recognition for innovation and excellence
          </p>
        </div>
        <div className="certificates-grid">
          <div className="certificate-card">
            <div className="certificate-badge">
              <Award size={32} />
            </div>
            <h3>Nature's First Hackathon</h3>
            <p className="certificate-venue">G.L Bajaj, Delhi - Finalist</p>
            <ul>
              <li>Responsive web design with HTML5</li>
              <li>Tailwind CSS & React.js implementation</li>
              <li>UI/UX design principles</li>
              <li>Semantic structures for accessibility</li>
            </ul>
          </div>

          <div className="certificate-card">
            <div className="certificate-badge">
              <Award size={32} />
            </div>
            <h3>Hackspire 2024</h3>
            <p className="certificate-venue">Indraprastha Engineering College - Finalist</p>
            <ul>
              <li>Advanced React.js development</li>
              <li>Modern CSS frameworks</li>
              <li>Interactive web applications</li>
              <li>Team collaboration in hackathon environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-content">
          <div className="section-header">
            <h2 className="section-title">LET'S CONNECT</h2>
            <p className="section-subtitle">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <h4>Email</h4>
              <a href="mailto:abhayshuklaworks@gmail.com">abhayshuklaworks@gmail.com</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <h4>Phone</h4>
              <a href="tel:+917007639007">+91 7007639007</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <h4>Location</h4>
              <p>Modinagar, Ghaziabad, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Abhay Shukla. Designed & Built with passion and code ✨</p>
      </footer>
    </div>
  );
};

export default Portfolio;