import React, { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function ParticipantProfiles({ userType }) {
  const { colors } = siteConfig;
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

  const sectors = [...data.sectorsCovered, ...data.sectorsCovered];

  return (
    <section
      ref={ref}
      id="ParticipantProfiles"
      style={{
        background: colors.surfaceWhite,
        padding: '100px 80px',
        borderTop: `1px solid ${colors.borderLight}`,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="profiles-inner"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >

        {/* Eyebrow Label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: colors.primaryDark,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: colors.textMuted,
            }}
          >
            Who attends
          </span>
        </div>

        {/* Header - Centered */}
        <div
          style={{
            marginBottom: '72px',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 72px',
          }}
        >
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 400,
              color: colors.textDark,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            {data.headline}
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: colors.textSecondary,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {data.subheadline}
          </p>
        </div>

        {/* Who You Will Meet Section */}
        <div style={{ marginBottom: '80px' }}>
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: colors.primary,
              marginBottom: '28px',
              textAlign: 'center',
            }}
          >
            Who you will meet
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              maxWidth: '1300px',
              margin: '0 auto',
            }}
          >
            {data.whoYouWillMeet.map((item, i) => (
              <div
                key={i}
                style={{
                  background: colors.surfaceWhite,
                  border: `1px solid ${colors.borderDarker}`,
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(77, 217, 172, 0.12)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.borderDarker;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: colors.primaryDark,
                    marginTop: '6px',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: colors.textDark,
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors Covered Section */}
        <div>
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: colors.primary,
              marginBottom: '28px',
              textAlign: 'center',
            }}
          >
            Sectors covered
          </p>

          <div
            style={{
              overflow: 'hidden',
              borderTop: `1px solid ${colors.borderLight}`,
              borderBottom: `1px solid ${colors.borderLight}`,
              position: 'relative',
              maxWidth: '100%',
            }}
          >
            {/* Left Fade */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '60px',
                background: `linear-gradient(to right, ${colors.surfaceWhite}, transparent)`,
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            {/* Right Fade */}
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '60px',
                background: `linear-gradient(to left, ${colors.surfaceWhite}, transparent)`,
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            {/* Ticker Track */}
            <div
              style={{
                display: 'flex',
                width: 'max-content',
                animation: 'ticker 45s linear infinite',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = 'paused';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = 'running';
              }}
            >
              {sectors.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '18px 28px',
                    whiteSpace: 'nowrap',
                    borderRight: `1px solid ${colors.borderLight}`,
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: colors.primaryDark,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: colors.primaryDark,
                      opacity: 0.6,
                      flexShrink: 0,
                    }}
                  />
                  {s}
                </div>
              ))}
            </div>

            <style>{`
              @keyframes ticker {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        </div>

      </div>

      {/* Responsive Media Queries */}
      <style>{`
        @media (max-width: 1200px) {
          section { padding: 80px 60px; }
        }

        @media (max-width: 768px) {
          section { padding: 60px 24px; }
          h2 { font-size: 2.2rem !important; }
        }

        @media (max-width: 480px) {
          section { padding: 48px 16px; }
          h2 { font-size: 1.8rem !important; }
          .grid-item { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}