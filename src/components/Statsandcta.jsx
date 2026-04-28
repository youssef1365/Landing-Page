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
    <>
      <section className="sac-section" ref={ref}>
        <div className="sac-bg">
          <div className="sac-grid-overlay" />
        </div>

        <div className={`sac-inner ${visible ? 'sac-inner--visible' : ''}`}>
          <div className="sac-label-row">
            <span className="sac-label-line" />
            <span className="sac-label-text">{stats.label}</span>
          </div>

          <div className="sac-cta-block">
            <p className="sac-heading-bold">TRUSTED BY EXPORTERS WORLDWIDE</p>
            <h2 className="sac-heading">{d.headline}</h2>
            <p className="sac-copy">{d.copy}</p>
            <p className="sac-copy">{d.copy2}</p>
          </div>

          <div className="sac-stats-grid">
            {stats.items.map((item, i) => (
              <div
                key={i}
                className={`sac-stat-cell ${i === stats.items.length - 1 ? 'sac-stat-cell--last' : ''}`}
              >
                <div className="sac-stat-value">
                  {item.value}
                  <span className="sac-stat-suffix">{item.suffix}</span>
                </div>
                <div className="sac-stat-label">{item.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .sac-section {
          position: relative;
          background: ${colors.surfaceLight};
          padding: 120px 80px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .sac-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .sac-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .sac-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .sac-inner--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sac-label-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 48px;
          justify-content: center;
        }

        .sac-label-line {
          width: 32px;
          height: 1px;
          background: ${colors.primary};
          box-shadow: 0 0 10px ${colors.primary};
          flex-shrink: 0;
        }

        .sac-label-text {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${colors.primary};
        }

        .sac-cta-block {
          text-align: center;
          max-width: 640px;
          width: 100%;
          margin: 0 auto 60px;
          box-sizing: border-box;
        }

        .sac-heading-bold {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 20px 0;
          color: ${colors.winkblue};
        }

        .sac-heading {
          font-size: 2.2rem;
          font-weight: 300;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 20px 0;
          color: ${colors.textDark};
        }

        .sac-copy {
          font-size: 1rem;
          line-height: 1.6;
          margin: 0 0 16px 0;
          color: ${colors.textSecondary};
        }

        .sac-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid ${colors.borderLight};
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 100px;
          background: ${colors.surfaceWhite};
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
        }

        .sac-stat-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 40px;
          border-right: 1px solid ${colors.borderLight};
          text-align: center;
          transition: all 0.3s ease;
        }

        .sac-stat-cell--last {
          border-right: none;
        }

        .sac-stat-value {
          font-size: 4rem;
          font-weight: 300;
          line-height: 1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          color: ${colors.textDark};
        }

        .sac-stat-suffix {
          font-size: 0.65em;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: ${colors.primary};
        }

        .sac-stat-label {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
          color: ${colors.textMuted};
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .sac-section {
            padding: 80px 32px;
          }

          .sac-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sac-stat-cell {
            padding: 40px 32px;
            border-right: none;
            border-bottom: 1px solid ${colors.borderLight};
          }

          .sac-stat-cell--last {
            border-bottom: none;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .sac-section {
            padding: 60px 24px;
          }

          .sac-label-row {
            margin-bottom: 28px;
          }

          .sac-cta-block {
            max-width: 100%;
            margin-bottom: 32px;
          }

          .sac-heading-bold {
            font-size: 1.5rem;
          }

          .sac-heading {
            font-size: 1.6rem;
          }

          .sac-copy {
            font-size: 0.95rem;
          }

          .sac-stats-grid {
            grid-template-columns: 1fr;
            margin-bottom: 40px;
            margin-top: 32px;
          }

          .sac-stat-cell {
            padding: 30px 20px;
            border-right: none;
            border-bottom: 1px solid ${colors.borderLight};
          }

          .sac-stat-cell--last {
            border-bottom: none;
          }

          .sac-stat-value {
            font-size: 2.8rem;
          }
        }

        /* ── Small mobile ── */
        @media (max-width: 480px) {
          .sac-section {
            padding: 50px 16px;
          }

          .sac-heading-bold {
            font-size: 1.2rem;
          }

          .sac-heading {
            font-size: 1.3rem;
          }

          .sac-copy {
            font-size: 0.85rem;
          }

          .sac-stat-cell {
            padding: 24px 16px;
          }

          .sac-stat-value {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  );
}