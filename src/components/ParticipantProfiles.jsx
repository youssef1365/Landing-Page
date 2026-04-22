import React, { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function ParticipantProfiles() {
  const { participantProfiles } = siteConfig;
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const { colors } = siteConfig;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="profiles" ref={ref} id="ParticipantProfiles">
        <div className={`profiles-inner ${visible ? 'visible' : ''}`}>

          <div className="profiles-label">
            <span className="label-line" />
            <span className="label-text">{participantProfiles.headline}</span>
          </div>

          <div className="profiles-header">
            <h2>{participantProfiles.headline}</h2>
            <p>{participantProfiles.subheadline}</p>
          </div>


          <div className="profiles-grid">

            <div className="sectors-col">
              <p className="col-title">Who You Will Meet</p>
              <div className="sectors-list">
                {participantProfiles.whoYouWillMeet.map((item, i) => (
                  <div key={i} className="sector-row" style={{ transitionDelay: `${i * 0.07}s` }}>
                    <span className="sector-icon">•</span>
                    <span className="sector-name">{item}</span>
                  </div>
                ))}
              </div>


            </div>

            <div className="criteria-col">
              <div className="sectors-bar">
                <p className="col-title">Sectors Covered</p>
                <div className="sector-tags">
                  {participantProfiles.sectorsCovered.map((item, i) => (
                    <span key={i} className="sector-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <style jsx>{`
        .profiles {
          background: #ffffff;
          padding: 120px 80px;
          position: relative;
        }

        .profiles::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1a6e4a, #c8a84b, #2a5298);
        }

        .profiles-inner {
          max-width: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .profiles-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .profiles-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px;
          color: ${colors.primary};
        }

        .label-line {
          display: inline-block;
          width: 32px;
          height: 2px;
          background: #1a6e4a;
          flex-shrink: 0;
        }

        .label-text {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: #94a3b8;
          text-transform: uppercase;
        }

        .profiles-header {
          margin-bottom: 60px;
          max-width: 640px;

        }

        .profiles-header h2 {
          font-size: 2.8rem;
          font-weight: 300;
          color: ${colors.background};
          margin: 0 0 16px 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .profiles-header p {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        .stats-row {
          display: flex;
          gap: 0;
          margin-bottom: 70px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .stat-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 20px;
          border-right: 1px solid #e2e8f0;
          background: #fafafa;
          gap: 6px;
        }

        .stat-block:last-child {
          border-right: none;
        }

        .stat-num {
          font-size: 2rem;
          font-weight: 700;
          color: #0b1220;
          letter-spacing: -0.03em;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
        }

        .profiles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .col-title {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #94a3b8;
          margin: 0 0 24px 0;
        }

        .sectors-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sector-row {
          display: grid;
          grid-template-columns: 28px 1fr;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #f1f5f9;
          transition: transform 0.3s ease;
        }

        .sector-row:hover {
          transform: translateX(4px);
        }

        .sector-icon {
          font-size: 1.1rem;
        }

        .sector-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0b1220;
        }

        .sectors-bar {
          margin-top: 40px;
          padding: 22px 24px;
          border: 1px solid #dbe4e8;
          border-radius: 6px;
          background: #f8fafb;
        }

        .sector-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 14px;
        }

        .sector-pill {
          padding: 8px 16px;
          border: 1px solid #bfd3db;
          border-radius: 3px;
          font-size: 0.85rem;
          color: #1a6e4a;
          background: #ffffff;
          white-space: nowrap;
        }

        .criteria-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .criteria-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 24px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #fafafa;
          transition: all 0.3s ease;
        }

        .criteria-card:hover {
          border-color: #1a6e4a30;
          background: #f0faf5;
          transform: translateX(4px);
        }

        .criteria-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .criteria-text {
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.5;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .profiles {
            padding: 80px 24px;
          }

          .profiles-header h2 {
            font-size: 2rem;
          }

          .stats-row {
            flex-direction: column;
          }

          .stat-block {
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
          }

          .profiles-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .sector-row {
            grid-template-columns: 28px 1fr;
          }
        }
      `}</style>
    </>
  );
}