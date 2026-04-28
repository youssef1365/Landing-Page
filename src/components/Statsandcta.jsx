import React, { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/siteConfig';

function useVisible(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function StatsAndCta({ userType, onApply }) {
  const { stats, colors } = siteConfig;
  const d = userType === 'seller'
    ? siteConfig.sellerJourney.finalCta
    : siteConfig.buyerJourney.finalCta;

  const [ref, visible] = useVisible();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="stats-cta-section" ref={ref}>
      <div className="stats-cta-bg">
        <div className="stats-cta-grid-overlay" />
      </div>

      <div className={`stats-cta-inner ${visible ? 'visible' : ''}`}>
        <div className="stats-cta-label-row">
          <span className="stats-cta-label-line" />
          <span className="stats-cta-label-text">
            {stats.label}
          </span>
        </div>

        <div className="stats-cta-block">
          <p className="stats-cta-tagline">TRUSTED BY EXPORTERS WORLDWIDE</p>
          <h2 className="stats-cta-heading">
            {d.headline}
          </h2>
          <p className="stats-cta-copy">
            {d.copy}
          </p>
          <p className="stats-cta-copy">
            {d.copy2}
          </p>
        </div>

        <div className="stats-cta-grid">
          {stats.items.map((item, i) => (
            <div
              key={i}
              className="stats-cta-cell"
            >
              <div className="stats-cta-value">
                {item.value}
                <span className="stats-cta-suffix">
                  {item.suffix}
                </span>
              </div>
              <div className="stats-cta-sublabel">
                {item.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        /* ===== SECTION CONTAINER ===== */
        .stats-cta-section {
          position: relative;
          background: ${colors.surfaceLight};
          padding: clamp(60px, 12vw, 120px) clamp(16px, 8vw, 80px);
          width: 100%;
          overflow: hidden;
        }

        .stats-cta-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .stats-cta-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
          background-size: clamp(40px, 10vw, 60px) clamp(40px, 10vw, 60px);
          pointer-events: none;
        }

        /* ===== INNER CONTAINER ===== */
        .stats-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .stats-cta-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ===== LABEL ROW ===== */
        .stats-cta-label-row {
          display: flex;
          align-items: center;
          gap: clamp(8px, 3vw, 12px);
          margin-bottom: clamp(32px, 6vw, 48px);
          justify-content: center;
        }

        .stats-cta-label-line {
          width: clamp(24px, 5vw, 32px);
          height: 2px;
          background: ${colors.primary};
          box-shadow: 0 0 10px ${colors.primary};
          flex-shrink: 0;
        }

        .stats-cta-label-text {
          font-size: clamp(0.65rem, 2vw, 0.75rem);
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${colors.primary};
          white-space: nowrap;
        }

        /* ===== CTA BLOCK ===== */
        .stats-cta-block {
          text-align: center;
          max-width: 640px;
          margin: 0 auto clamp(50px, 10vw, 100px);
          padding: 0 clamp(16px, 4vw, 40px);
        }

        .stats-cta-tagline {
          font-size: clamp(0.75rem, 2vw, 0.85rem);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${colors.primary};
          margin: 0 0 clamp(12px, 3vw, 16px) 0;
        }

        .stats-cta-heading {
          font-size: clamp(1.6rem, 6vw, 2.5rem);
          font-weight: 900;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 clamp(16px, 3vw, 20px) 0;
          color: ${colors.winkblue || colors.textDark};
        }

        .stats-cta-copy {
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          line-height: 1.6;
          margin: 0 0 clamp(12px, 2vw, 16px) 0;
          color: ${colors.textSecondary || colors.textMuted};
        }

        .stats-cta-copy:last-of-type {
          margin-bottom: 0;
        }

        /* ===== STATS GRID ===== */
        .stats-cta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          border: 1px solid ${colors.borderLight};
          border-radius: clamp(8px, 2vw, 12px);
          overflow: hidden;
          background: ${colors.surfaceWhite};
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
          width: 100%;
        }

        .stats-cta-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(30px, 6vw, 60px) clamp(16px, 4vw, 40px);
          border-right: 1px solid ${colors.borderLight};
          text-align: center;
          transition: all 0.3s ease;
          gap: clamp(8px, 2vw, 12px);
        }

        .stats-cta-cell:last-child {
          border-right: none;
        }

        .stats-cta-cell:hover {
          background: rgba(0, 0, 0, 0.02);
        }

        /* ===== STAT VALUE ===== */
        .stats-cta-value {
          font-size: clamp(2rem, 8vw, 4rem);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.02em;
          color: ${colors.textDark};
          display: flex;
          align-items: baseline;
          gap: clamp(4px, 1vw, 8px);
          justify-content: center;
        }

        .stats-cta-suffix {
          font-size: clamp(0.5rem, 2vw, 0.65em);
          font-weight: 700;
          letter-spacing: 0.05em;
          color: ${colors.primary};
        }

        /* ===== STAT LABEL ===== */
        .stats-cta-sublabel {
          font-size: clamp(0.65rem, 1.8vw, 0.8rem);
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${colors.textMuted};
        }

        /* ===== SMALL DEVICES (Mobile) ===== */
        @media (max-width: 480px) {
          .stats-cta-section {
            padding: 50px 16px;
          }

          .stats-cta-grid {
            grid-template-columns: 1fr;
          }

          .stats-cta-cell {
            padding: 24px 20px;
            border-right: none;
            border-bottom: 1px solid ${colors.borderLight};
          }

          .stats-cta-cell:last-child {
            border-bottom: none;
          }

          .stats-cta-label-row {
            margin-bottom: 24px;
          }

          .stats-cta-block {
            margin-bottom: 40px;
            padding: 0 12px;
          }
        }

        /* ===== SMALL-MEDIUM DEVICES (Large Mobile / Small Tablet) ===== */
        @media (min-width: 481px) and (max-width: 640px) {
          .stats-cta-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-cta-cell {
            border-bottom: 1px solid ${colors.borderLight};
            padding: 36px 24px;
          }

          .stats-cta-cell:nth-child(odd):last-child {
            border-right: none;
          }

          .stats-cta-cell:nth-child(2n) {
            border-right: none;
          }

          .stats-cta-cell:nth-last-child(-n + 2) {
            border-bottom: none;
          }
        }

        /* ===== MEDIUM DEVICES (Tablet) ===== */
        @media (min-width: 641px) and (max-width: 1024px) {
          .stats-cta-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-cta-section {
            padding: 80px 32px;
          }

          .stats-cta-cell {
            border-right: none;
            border-bottom: 1px solid ${colors.borderLight};
            padding: 48px 32px;
          }

          .stats-cta-cell:nth-last-child(-n + 2) {
            border-bottom: none;
          }
        }

        /* ===== LARGE DEVICES (Desktop) ===== */
        @media (min-width: 1025px) {
          .stats-cta-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .stats-cta-section {
            padding: 120px 80px;
          }

          .stats-cta-cell {
            border-right: 1px solid ${colors.borderLight};
          }

          .stats-cta-cell:last-child {
            border-right: none;
          }
        }

        /* ===== EXTRA LARGE DEVICES ===== */
        @media (min-width: 1440px) {
          .stats-cta-section {
            padding: 120px 120px;
          }
        }
      `}</style>
    </section>
  );
}