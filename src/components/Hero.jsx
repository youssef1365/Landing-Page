import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig.js';

export default function Hero({ userType }) {
  const [activeModal, setActiveModal] = useState(null);
  const [mounted, setMounted] = useState(false);

  const heroData = siteConfig.hero[userType];
  const { colors } = siteConfig;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          {heroData.useBackgroundImage && (
            <img src={heroData.backgroundImage} alt="bg" className="hero-bg-img" />
          )}
          <div className="hex-grid" />
          <div className="vignette" />
        </div>

        <div className={`hero-content ${mounted ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-line" />
            {heroData.badge.items.map((item, i) => (
              <React.Fragment key={i}>
                <span className="badge-text">{item}</span>
                {i < heroData.badge.items.length - 1 && <span className="badge-dot">·</span>}
              </React.Fragment>
            ))}
          </div>

          <h1 className="hero-headline">
            {heroData.headlinePlain}
            <br />
            <span className="headline-accent"> {heroData.headlineAccent} </span>
          </h1>

          <p className="hero-subheadline">{heroData.subheadline}</p>

         <div className="hero-ctas">
           <a href={`#${heroData.ctaPrimary.target}`} className="cta-primary">
             {heroData.ctaPrimary.text}
           </a>
           <a href={`#${heroData.ctaSecondary.target}`} className="cta-secondary">
             {heroData.ctaSecondary.text}
           </a>
         </div>
        </div>
      </section>

      <div className="stats-bar">
        {heroData.stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{stat.value}</span><br/>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: calc(100vh - 152px);
          background: ${colors.background};
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 120px 80px 80px;
          overflow: hidden;
        }

        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.22;
        }

        .hex-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.07;
          background-image:
            radial-gradient(circle, ${colors.primary} 1px, transparent 1px),
            linear-gradient(${colors.primary} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.primary} 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .vignette {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, ${colors.background} 100%);
        }

        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 680px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }

        .hero-content.visible { opacity: 1; transform: translateY(0); }

        .badge-line {
          width: 28px;
          height: 2px;
          background: ${colors.primary};
        }

        .badge-text {
          font-size: 0.7rem;
          font-weight: 600;
          color: ${colors.secondary};
          text-transform: uppercase;
        }

        .hero-headline {
          font-size: 3rem;
          font-weight: 300;
          color: ${colors.text};
        }

        .headline-accent {
          color: ${colors.primary};
          font-weight: 700;
        }

        .hero-subheadline {
          font-size: 1rem;
          color: ${colors.textMuted};
          line-height: 1.75;
        }

        .hero-ctas { display: flex; gap: 14px; padding-top: 6px; }

        .cta-primary, .cta-secondary {
          padding: 13px 26px;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .cta-primary {
          background: ${colors.primary};
          color: ${colors.background};
          border: 2px solid ${colors.primary};
        }

        .cta-primary:hover {
          background: ${colors.accent};
          border-color: ${colors.accent};
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(77, 217, 172, 0.35);
        }

        .cta-secondary {
          background: transparent;
          color: #e2eaf3;
          border: 2px solid rgba(180, 210, 235, 0.3);
        }

        .stats-bar {
          display: grid;
          height: 150px;
          grid-template-columns: repeat(4, 1fr);
          background: ${colors.surface};
          border-top: 1px solid ${colors.border};
        }

        .stat-item {
          padding: 30px 50px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }

        .stat-value { font-size: 1.5rem; color: #e2eaf3; font-weight: 600; }

        .stat-label {
          font-size: 1rem;
          text-transform: uppercase;
          color: ${colors.primary};
        }

        @media (max-width: 768px) {
          .hero { padding: 100px 24px 60px; text-align: center; justify-content: center; }
          .hero-headline { font-size: 2.4rem; }
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}