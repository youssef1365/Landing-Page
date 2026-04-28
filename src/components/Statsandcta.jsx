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
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        /* ===== HERO SECTION ===== */
        .hero {
          position: relative;
          min-height: calc(100vh - 152px);
          background: ${colors.background};
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: clamp(80px, 12vw, 120px) clamp(24px, 8vw, 80px) clamp(60px, 10vw, 80px);
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
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 4vw, 28px);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ===== BADGE ===== */
        .hero-badge {
          display: flex;
          align-items: center;
          gap: clamp(8px, 2vw, 12px);
          flex-wrap: wrap;
        }

        .badge-line {
          width: clamp(24px, 5vw, 28px);
          height: 2px;
          background: ${colors.primary};
          flex-shrink: 0;
        }

        .badge-text {
          font-size: clamp(0.6rem, 2vw, 0.7rem);
          font-weight: 600;
          color: ${colors.secondary};
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .badge-dot {
          font-size: clamp(0.6rem, 2vw, 0.7rem);
          color: ${colors.secondary};
          opacity: 0.6;
        }

        /* ===== HEADLINE ===== */
        .hero-headline {
          font-size: clamp(1.8rem, 8vw, 3rem);
          font-weight: 300;
          color: ${colors.text};
          line-height: 1.15;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .headline-accent {
          color: ${colors.primary};
          font-weight: 700;
          display: inline;
        }

        /* ===== SUBHEADLINE ===== */
        .hero-subheadline {
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          color: ${colors.textMuted};
          line-height: 1.75;
          margin: 0;
          max-width: 95%;
        }

        /* ===== CTAs ===== */
        .hero-ctas {
          display: flex;
          gap: clamp(10px, 3vw, 14px);
          padding-top: clamp(4px, 2vw, 6px);
          flex-wrap: wrap;
        }

        .cta-primary,
        .cta-secondary {
          padding: clamp(11px, 2.5vw, 13px) clamp(20px, 4vw, 26px);
          border-radius: 5px;
          font-size: clamp(0.8rem, 2vw, 1rem);
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          border: 2px solid;
          display: inline-block;
          white-space: nowrap;
        }

        .cta-primary {
          background: ${colors.primary};
          color: ${colors.background};
          border-color: ${colors.primary};
        }

        .cta-primary:hover,
        .cta-primary:focus {
          background: ${colors.accent};
          border-color: ${colors.accent};
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(77, 217, 172, 0.35);
        }

        .cta-secondary {
          background: transparent;
          color: #e2eaf3;
          border-color: rgba(180, 210, 235, 0.3);
        }

        .cta-secondary:hover,
        .cta-secondary:focus {
          border-color: rgba(180, 210, 235, 0.6);
          transform: translateY(-2px);
        }

        /* ===== STATS BAR ===== */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          background: ${colors.surface};
          border-top: 1px solid ${colors.border};
          min-height: 120px;
        }

        .stat-item {
          padding: clamp(20px, 5vw, 30px) clamp(16px, 4vw, 50px);
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: clamp(8px, 2vw, 12px);
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-value {
          font-size: clamp(1.2rem, 4vw, 1.5rem);
          color: #e2eaf3;
          font-weight: 600;
          line-height: 1;
        }

        .stat-label {
          font-size: clamp(0.75rem, 2vw, 1rem);
          text-transform: uppercase;
          color: ${colors.primary};
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        /* ===== SMALL DEVICES (Mobile) ===== */
        @media (max-width: 480px) {
          .hero {
            padding: 60px 16px 50px;
            justify-content: center;
          }

          .hero-content {
            align-items: center;
            text-align: center;
          }

          .hero-badge {
            justify-content: center;
            width: 100%;
          }

          .hero-subheadline {
            max-width: 100%;
          }

          .hero-ctas {
            justify-content: center;
            width: 100%;
          }

          .cta-primary,
          .cta-secondary {
            flex: 1;
            min-width: 120px;
            max-width: 100%;
            text-align: center;
          }

          .stats-bar {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ===== MEDIUM DEVICES (Tablet) ===== */
        @media (min-width: 481px) and (max-width: 768px) {
          .hero {
            justify-content: center;
            text-align: center;
          }

          .hero-content {
            align-items: center;
            text-align: center;
          }

          .hero-badge {
            justify-content: center;
          }

          .hero-ctas {
            justify-content: center;
          }

          .stats-bar {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ===== LARGE DEVICES (Desktop) ===== */
        @media (min-width: 769px) {
          .hero {
            justify-content: flex-start;
          }

          .hero-content {
            align-items: flex-start;
            text-align: left;
          }

          .hero-ctas {
            justify-content: flex-start;
          }

          .stats-bar {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ===== EXTRA LARGE DEVICES ===== */
        @media (min-width: 1440px) {
          .hero {
            padding: 120px 120px 80px;
          }
        }
      `}</style>
    </>
  );
}