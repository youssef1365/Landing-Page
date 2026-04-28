import React, { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Users, Building2, Truck, TrendingUp } from 'lucide-react';

export default function ParticipantProfiles({ userType }) {
  const data = siteConfig.participantProfiles[userType];
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const icons = [Users, Building2, Truck, TrendingUp];

  return (
    <>
      <section
        ref={ref}
        id="ParticipantProfiles"
        className="participant-section"
      >
        <div className="participant-wrap">
          {/* Eyebrow Label */}
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span className="eyebrow-text">Who attends</span>
          </div>

          {/* Header */}
          <div className="participant-header">
            <h1>{data.headline}</h1>
            <p>{data.subheadline}</p>
          </div>

          {/* Who You Will Meet Section */}
          <div className="meet-section">
            <p className="section-label">Who you will meet</p>

            <div className="meet-grid">
              {data.whoYouWillMeet.map((item, i) => {
                const IconComponent = icons[i % icons.length];
                return (
                  <div key={i} className="meet-card">
                    <div className="meet-icon">
                      <IconComponent size={24} />
                    </div>
                    <span className="meet-text">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sectors Covered Section */}
          <div className="sectors-section">
            <p className="section-label">Sectors covered</p>

            <div className="sectors-container">
              <div className="sectors-wrapper">
                {data.sectorsCovered.map((s, i) => (
                  <div key={i} className="sector-capsule">
                    <span className="sector-dot" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .participant-section {
          background: #f8fafc;
          padding: 100px 80px;
          border-top: 1px solid #e2e8f0;
          width: 100%;
          box-sizing: border-box;
        }

        .participant-wrap {
          max-width: 1400px;
          margin: 0 auto;
          opacity: ${visible ? 1 : 0};
          transform: ${visible ? 'translateY(0)' : 'translateY(24px)'};
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
          justify-content: flex-start;
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1a6e4a;
          flex-shrink: 0;
        }

        .eyebrow-text {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #94aec4;
        }

        .participant-header {
          margin-bottom: 72px;
          text-align: left;
          max-width: 900px;
        }

        .participant-header h1 {
          font-size: 3rem;
          font-weight: 400;
          color: #0b1220;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 16px 0;
        }

        .participant-header p {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.7;
          margin: 0;
        }

        .meet-section {
          margin-bottom: 80px;
        }

        .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4dd9ac;
          margin: 0 0 28px 0;
          text-align: left;
        }

        .meet-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1300px;
        }

        .meet-card {
          background: white;
          border: 1px solid #e8edf2;
          border-radius: 12px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .meet-card:hover {
          border-color: #4dd9ac;
          box-shadow: 0 8px 24px rgba(77, 217, 172, 0.12);
          transform: translateY(-4px);
        }

        .meet-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(77, 217, 172, 0.1);
          border-radius: 8px;
          color: #1a6e4a;
        }

        .meet-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: #0b1220;
          line-height: 1.5;
        }

        .sectors-section {
          margin-top: 60px;
        }

        .sectors-container {
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
          padding: 20px 0;
        }

        .sectors-wrapper {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          max-width: 1300px;
          padding: 0 20px;
        }

        .sector-capsule {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(77, 217, 172, 0.08);
          border: 1px solid rgba(77, 217, 172, 0.2);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #1a6e4a;
          white-space: nowrap;
        }

        .sector-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1a6e4a;
          flex-shrink: 0;
        }

        @media (max-width: 1200px) {
          .participant-section {
            padding: 80px 60px;
          }
        }

        @media (max-width: 900px) {
          .meet-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .participant-header h1 {
            font-size: 2.2rem;
          }

          .sectors-wrapper {
            padding: 0 10px;
          }
        }

        @media (max-width: 768px) {
          .participant-section {
            padding: 60px 24px;
          }

          .meet-grid {
            grid-template-columns: 1fr;
          }

          .participant-header h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}