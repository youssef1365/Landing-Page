import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import EventOverview from './EventOverview';
import ParticipantProfiles from './ParticipantProfiles';
import ApplicationForms from './ApplicationForms';
import { siteConfig } from '../config/siteConfig.js';
import Journey from './Journey.jsx'
import StatsAndCta from './Statsandcta.jsx';
import WhyJoin from './WhyJoin.jsx'

export default function WinkLandingPage({userType}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


   const { colors } = siteConfig;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="landing-page">

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
         <div className="logo">
           <img src={siteConfig.header.logoImage} alt="WINK Logo" className="logo-img" />
         </div>

          <nav className="nav">
            {siteConfig.header.nav.map((link, i) => (
              <a key={i} href={link.href} className="nav-link">
                {link.text}
              </a>
            ))}
            <a href="#ApplicationForms" className="nav-cta">Apply Now</a>
          </nav>

          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {siteConfig.header.nav.map((link, i) => (
              <a key={i} href={link.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
                {link.text}
              </a>
            ))}
            <a href="#ApplicationForms" className="mobile-cta" onClick={() => setMenuOpen(false)}>
              Apply Now
            </a>
          </div>
        )}
      </header>

      <Hero userType={userType}/>
      <div id="EventOverview"><EventOverview userType={userType}/></div>
      <div id="ParticipantProfiles"><ParticipantProfiles userType={userType}/></div>
      <div id="Journey"><Journey userType={userType}/></div>
      <div id="WhyJoin"><WhyJoin userType={userType}/></div>
      <div id="StatsAndCta"><StatsAndCta userType={userType}  /></div>
      <div id="ApplicationForms"><ApplicationForms userType={userType}/></div>


      <footer className="footer">
        <div className="footer-glow" />
        <div className="footer-grid-overlay" />

        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <img src={siteConfig.header.logoImage} alt="WINK Logo" className="logo-img" />
              </div>
              <p className="footer-brand-desc">{siteConfig.footer.sections[0].description}</p>
              <div className="footer-badge">
                <span>Accra</span>
                <span className="badge-sep">·</span>
                <span>June 2026</span>
                <span className="badge-sep">·</span>
                <span>West Africa</span>
              </div>
            </div>

            <div className="footer-links-col">
              <p className="footer-col-title">{siteConfig.footer.sections[1].title}</p>
              <ul className="footer-links">
                {siteConfig.footer.sections[1].links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>
                      <span className="link-arrow">→</span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-col">
              <p className="footer-col-title">{siteConfig.footer.sections[2].title}</p>
              <ul className="footer-links">
                {siteConfig.footer.sections[2].links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <span className="link-arrow">→</span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact-col">
              <p className="footer-col-title">{siteConfig.footer.sections[3].title}</p>
              <div className="footer-contact-items">
                {siteConfig.footer.sections[3].contactInfo.map((info, i) => (
                  <div key={i} className="contact-item">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">{siteConfig.footer.copyright}</p>
            <div className="footer-bottom-badge">
              <span className="bottom-dot green" />
              <span>Program currently accepting applications</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .landing-page {
          width: 100%;
          overflow-x: hidden;
        }

        /* ===== HEADER ===== */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          background: transparent;
          padding: 0 40px;
        }

        .header.scrolled {
          background: rgba(11, 18, 32, 0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 4px 32px rgba(0,0,0,0.3);
        }

        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 72px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .logo:hover {
          opacity: 0.8;
        }

        .logo-img {
          height: 60px;
          width: auto;
          object-fit: contain;
        }

        .logo-mark {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1a6e4a;
          box-shadow: 0 0 10px rgba(26,110,74,0.6);
        }

        .logo-text {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: white;
          max-width: 220px;
          line-height: 1.2;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .nav-link {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 1px;
          background: #c8a84b;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-cta {
          padding: 9px 22px;
          background: ${colors.primary};
          color: white;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nav-cta:hover {
          background: #15593c;
          box-shadow: 0 4px 16px rgba(26,110,74,0.4);
          transform: translateY(-1px);
        }

        .burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .burger-line {
          display: block;
          width: 24px;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-menu {
          background: rgba(11,18,32,0.98);
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 20px 40px 28px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-link {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.3s ease;
        }

        .mobile-link:hover { color: white; }

        .mobile-cta {
          margin-top: 16px;
          padding: 12px;
          background: #1a6e4a;
          color: white;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
        }

        /* ===== FOOTER ===== */
        .footer {
          background: #080e1a;
          position: relative;
          overflow: hidden;
          padding: 80px 80px 0;
        }

        .footer-glow {
          position: absolute;
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(26,110,74,0.12), transparent 70%);
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .footer-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .footer-logo-mark {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1a6e4a;
          box-shadow: 0 0 10px rgba(26,110,74,0.6);
        }

        .footer-logo-text {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: white;
          max-width: 200px;
          line-height: 1.2;
        }

        .footer-brand-desc {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.7;
          margin: 0 0 24px 0;
          max-width: 300px;
        }

        .footer-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c8a84b;
        }

        .badge-sep {
          color: #334155;
        }

        .footer-col-title {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #475569;
          margin: 0 0 24px 0;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-links a {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #64748b;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
          gap: 12px;
        }

        .link-arrow {
          font-size: 0.75rem;
          color: #1a6e4a;
          transition: transform 0.3s ease;
        }

        .footer-links a:hover .link-arrow {
          transform: translateX(3px);
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #334155;
        }

        .contact-value {
          font-size: 0.88rem;
          color: #94a3b8;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0 32px;
        }

        .footer-copy {
          font-size: 0.78rem;
          color: #334155;
          margin: 0;
        }

        .footer-bottom-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          color: #475569;
          letter-spacing: 0.04em;
        }

        .bottom-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .bottom-dot.green {
          background: #1a6e4a;
          box-shadow: 0 0 8px rgba(26,110,74,0.7);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 768px) {
          .header { padding: 0 24px; }

          .nav { display: none; }

          .burger { display: flex; }

          .mobile-menu { padding: 20px 24px 28px; }

          .footer { padding: 60px 24px 0; }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .logo {
            gap: 8px;
          }

          .logo-img {
            height: 32px;
          }

          .logo-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}