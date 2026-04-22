import React, { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function EventOverview({ userType }) {
  const { eventOverview, colors } = siteConfig;
  const data = eventOverview[userType];
  console.log('EventOverview userType:', userType);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="overview" ref={ref} id="EventOverview">
        <div className="overview-bg">
          <div className="overview-grid-overlay" />
        </div>

        <div className={`overview-inner ${visible ? 'visible' : ''}`}>
          <div className="overview-label">
            <span className="label-line" />
            <span className="label-text">{data.label}</span>
          </div>

          <div className="overview-layout">
            <div className="overview-left">
              <h2 className="overview-headline">{data.headline}</h2>
              <div className="headline-underline" />
              <p className="overview-sub">{data.subheadline}</p>
            </div>

            <div className="overview-right">
              {/* Feature label now matches the main overview label style */}
              <div className="feature-layout">
                  <span className="label-line" />
                  <span className="label-text">{data.featuretitle}</span>
              </div>

              <div className="feature-card">
                <ul className="feature-list">
                  {data.features.map((item, i) => (
                    <li key={i} className="feature-item">
                      <span className="feature-dot" />
                      <span className="feature-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="targets-row">
                {data.targetMarkets.map((market, i) => (
                  <div key={i} className="target-chip">{market}</div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .overview {
          position: relative;
          background: radial-gradient(circle at 20% 30%, rgba(0,255,200,0.05), transparent 40%),
                      ${colors.background};
          padding: 120px 80px;
          overflow: hidden;
        }

        .overview-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .overview-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .overview-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .overview-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .overview-label, .feature-layout {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .label-line {
          width: 32px;
          height: 2px;
          background: ${colors.primary};
          box-shadow: 0 0 10px ${colors.primary};
        }

        .label-text {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: ${colors.primary};
          text-transform: uppercase;
        }

        .overview-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
        }

        .overview-headline {
          font-size: 3.2rem;
          font-weight: 500;
          color: ${colors.text};
          margin: 0 0 24px 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .headline-underline {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, ${colors.primary}, transparent);
          margin-bottom: 48px;
        }

        .overview-sub {
          font-size: 1.1rem;
          color: ${colors.text};
          line-height: 1.8;
          max-width: 500px;
          opacity: 0.85;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 32px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.25);
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }

        .feature-item:last-child {
          border-bottom: none;
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateX(6px);
        }

        .feature-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${colors.primary};
          box-shadow: 0 0 8px ${colors.primary};
          flex-shrink: 0;
        }

        .feature-text {
          color: ${colors.text};
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.9;
        }

        .targets-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .target-chip {
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          color: ${colors.text};
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.04);
          transition: all 0.3s ease;
        }

        .target-chip:hover {
          background: ${colors.primary};
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,255,200,0.3);
        }

        @media (max-width: 1024px) {
          .overview-layout { grid-template-columns: 1fr; gap: 40px; }
          .overview { padding: 80px 40px; }
        }

        @media (max-width: 768px) {
          .overview { padding: 60px 24px; }
          .overview-headline { font-size: 2.2rem; }
          .feature-item { padding: 20px; }
        }
      `}</style>
    </>
  );
}