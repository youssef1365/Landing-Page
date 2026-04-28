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

export default function Journey({ userType, onApply }) {
  const d = userType === 'seller' ? siteConfig.sellerJourney : siteConfig.buyerJourney;
  const [ref, visible] = useVisible();

  const steps = d.process.steps.map(s => ({
    number: s.number.toString().padStart(2, '0'),
    title: s.title,
    description: s.description,
  }));

  const sectionId = userType === 'seller' ? 'SellerJourney' : 'BuyerJourney';

  return (
    <>
      <section className="journey" ref={ref} id={sectionId}>
        <div className={`wrap ${visible ? 'visible' : ''}`}>

          <div className="top-intro">
            <span className="dot" />
            <div className="accent-bar" />
            <h2>{d.cta.headline}</h2>
            <p className="desc">{d.cta.copy}</p>
          </div>

          <div className="two-col">
            <div className="col-left">
              <p className="section-label">{d.cta.processLabel.toUpperCase()}</p>
              <h3>How it works</h3>
            </div>
          </div>

          <div className="two-col two-col-content">
            <div className="col-left">
              <div className="steps-card">
                {steps.map((step, i) => (
                  <div key={i} className={`step-row ${i < steps.length - 1 ? 'bordered' : ''}`}>
                    <div className="step-num">{step.number}</div>
                    <div className="step-body">
                      <span className="step-title">{step.title}</span>
                      {step.description && <span className="step-desc">{step.description}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`process-image ${visible ? 'visible' : ''}`}>
              <img src={d.process.image} alt={d.process.imageAlt} />
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        .journey {
          background: #0d1b2e;
          border-top: 1px solid rgba(77, 217, 172, 0.1);
          padding: 100px 64px;
          width: 100%;
          box-sizing: border-box;
        }

        .wrap {
          width: 100%;
          max-width: 100%;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .wrap.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .top-intro {
          width: 50%;
          padding-right: 40px;
          margin-bottom: 48px;
          box-sizing: border-box;
        }

        .dot {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4dd9ac;
          flex-shrink: 0;
          margin-bottom: 16px;
        }

        .accent-bar {
          width: 48px;
          height: 3px;
          background: #4dd9ac;
          border-radius: 2px;
          margin: 0 0 24px 0;
        }

        h2 {
          font-size: 2.8rem;
          font-weight: 300;
          color: #fff;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 16px 0;
        }

        .desc {
          font-size: 1.05rem;
          color: #94aec4;
          line-height: 1.75;
          margin: 0;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .two-col-content {
          margin-top: 20px;
          align-items: start;
        }

        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #4dd9ac;
          margin: 0 0 12px 0;
          text-transform: uppercase;
        }

        h3 {
          font-size: 1.8rem;
          font-weight: 300;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .steps-card {
          border: 1px solid rgba(77, 217, 172, 0.15);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 32px;
        }

        .step-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 18px 24px;
          background: rgba(255, 255, 255, 0.02);
          transition: background 0.2s;
        }

        .step-row:hover { background: rgba(77, 217, 172, 0.05); }

        .step-row.bordered { border-bottom: 1px solid rgba(77, 217, 172, 0.1); }

        .step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #1a2d45;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-body {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .step-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: #fff;
        }

        .step-desc {
          font-size: 0.82rem;
          font-weight: 400;
          color: #94aec4;
          line-height: 1.5;
        }

        .process-image {
          position: sticky;
          top: 80px;
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s;
        }

        .process-image.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .process-image img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          border: 1px solid rgba(77, 217, 172, 0.15);
          object-position: center bottom;
        }

        @media (max-width: 900px) {
          .journey { padding: 64px 24px; }
          .top-intro { width: 100%; padding-right: 0; }
          .two-col { grid-template-columns: 1fr; gap: 32px; }
          h2 { font-size: 2.2rem; }
          .process-image { position: static; transform: none; }
          .process-image img { height: 240px; }
        }

        @media (max-width: 480px) {
          .journey { padding: 48px 16px; }
          h2 { font-size: 1.8rem; }
          h3 { font-size: 1.4rem; }
          .desc { font-size: 0.95rem; }
          .step-row { padding: 14px 16px; gap: 14px; }
        }
      `}</style>
    </>
  );
}