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

export default function Journey({ userType }) {
  const d = userType === 'seller' ? siteConfig.sellerJourney : siteConfig.buyerJourney;
  const [ref, visible] = useVisible();

  return (
    <>
      <section className="journey-section" ref={ref} id="Journey">
        <div className="journey-wrap">
          <div className="journey-header">
            <p className="section-labell">{d.whyJoin.label?.toUpperCase()}</p>
            <h2>{d.whyJoin.headline}</h2>
          </div>

          <div className="content-row">
            <div className={`why-image ${visible ? 'visible' : ''}`}>
              <img src={d.whyJoin.image} alt={d.whyJoin.imageAlt} />
            </div>

            <div className="reasons-container">
              {Array.isArray(d.whyJoin.reasons) && d.whyJoin.reasons.length > 0 ? (
                d.whyJoin.reasons.map((reason, i) => (
                  <div key={i} className={`reason-card ${visible ? 'visible' : ''}`}>
                    <div className="reason-number">{String(i + 1).padStart(2, '0')}</div>
                    <div className="reason-content">
                      {typeof reason === 'object' ? (
                        <>
                          <h3>{reason.title}</h3>
                          <p>{reason.desc}</p>
                        </>
                      ) : (
                        <h3>{reason}</h3>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p>No reasons available</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .journey-section {
          padding: 80px 48px;
          background: #0d1b2e;
        }

        .journey-wrap {
          max-width: 1200px;
          margin: 0 auto;
        }

        .journey-header {
          margin-bottom: 48px;
          max-width: 650px;
        }

        .section-labell {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #4dd9ac;
          margin: 0 0 12px 0;
          text-transform: uppercase;
        }

        h2 {
          font-size: 2.2rem;
          font-weight: 300;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .content-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .reasons-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .reason-card {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          padding: 24px;
          border: 1px solid rgba(77, 217, 172, 0.15);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          transition: opacity 0.5s ease, transform 0.5s ease, background 0.3s ease, border-color 0.3s ease;
          opacity: 0;
          transform: translateX(-30px);
        }

        .reason-card.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .reason-card:hover {
          background: rgba(77, 217, 172, 0.08);
          border-color: rgba(77, 217, 172, 0.3);
        }

        .reason-number {
          font-size: 28px;
          font-weight: 700;
          color: #4dd9ac;
          min-width: 50px;
          flex-shrink: 0;
        }

        .reason-content h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .reason-content p {
          font-size: 0.95rem;
          color: #94aec4;
          margin: 0;
          line-height: 1.6;
        }

        .image-col {
          position: sticky;
          top: 80px;
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
          border-radius: 12px;
          overflow: hidden;
        }

        .image-col.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .image-col img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          border: 1px solid rgba(77, 217, 172, 0.15);
        }

        @media (max-width: 900px) {
          .journey-section {
            padding: 64px 24px;
          }

          .content-row {
            grid-template-columns: 1fr;
          }

          .image-col {
            position: static;
            order: -1;
          }

          .image-col img {
            height: 260px;
          }

          h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}