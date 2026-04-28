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

  const sectionStyle = {
    position: 'relative',
    background: colors.surfaceLight,
    padding: '120px 80px',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  const bgStyle = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  };

  const gridOverlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    pointerEvents: 'none',
  };

  const innerStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 0.9s ease, transform 0.9s ease',
  };

  const labelRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '48px',
    justifyContent: 'center',
  };

  const labelLineStyle = {
    width: '32px',
    background: colors.primary,
    boxShadow: `0 0 10px ${colors.primary}`,
  };

  const labelTextStyle = {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: colors.primary,
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    border: `1px solid ${colors.borderLight}`,
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '100px',
    background: colors.surfaceWhite,
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
  };

  const statCellStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 40px',
    borderRight: `1px solid ${colors.borderLight}`,
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  const statCellLastStyle = {
    ...statCellStyle,
    borderRight: 'none',
  };

  const statValueStyle = {
    fontSize: '4rem',
    fontWeight: 300,
    lineHeight: 1,
    marginBottom: '20px',
    letterSpacing: '-0.02em',
    color: colors.textDark,
  };

  const suffixStyle = {
    fontSize: '0.65em',
    fontWeight: 700,
    letterSpacing: '0.05em',
    color: colors.primary,
  };

  const statSublabelStyle = {
    fontSize: '11px',
    fontWeight: 900,
    letterSpacing: '0.16em',
    color: colors.textMuted,
  };

  const ctaBlockStyle = {
    textAlign: 'center',
    maxWidth: '640px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '2.2rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    margin: '0 0 20px 0',
    color: colors.textDark,
  };

  const headingStylee = {
      fontSize: '2.5rem',
      fontWeight: 900,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      margin: '0 0 20px 0',
      color: colors.winkblue,
  };

  const ctaCopyStyle = {
    fontSize: '1rem',
    lineHeight: 0,
    margin: '0 0 40px 0',
    color: colors.textSecondary,
  };

  const buttonStyle = {
    padding: '16px 44px',
    fontSize: '0.82rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    border: `2px solid ${isHovering ? colors.primary : colors.textDark}`,
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    background: isHovering ? colors.primary : colors.textDark,
    color: isHovering ? colors.textDark : colors.text,
    transform: isHovering ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isHovering ? '0 8px 24px rgba(0, 0, 0, 0.12)' : 'none',
  };

  return (
    <>
      <section style={sectionStyle} ref={ref}>
        <div style={bgStyle}>
          <div style={gridOverlayStyle} />
        </div>

        <div style={innerStyle}>
          <div style={labelRowStyle}>
            <span style={labelLineStyle} />
            <span style={labelTextStyle}>
              {stats.label}
            </span>
          </div>

          <div style={ctaBlockStyle}>
              <p style={headingStylee} > TRUSTED BY EXPORTERS WORLDWIDE </p>
            <h2 style={headingStyle}>
              {d.headline}
            </h2>
            <p style={ctaCopyStyle}>
              {d.copy}
            </p>
            <p style={ctaCopyStyle}>
              {d.copy2}
            </p>
          </div>

          <div style={statsGridStyle}>
              {stats.items.map((item, i) => (
                  <div
                     key={i}
                     style={i === stats.items.length - 1 ? statCellLastStyle : statCellStyle}
                  >
                  <div style={statValueStyle}>
                     {item.value}
                     <span style={suffixStyle}>
                         {item.suffix}
                     </span>
                  </div>
                    <div style={statSublabelStyle}>
                     {item.label.toUpperCase()}
                    </div>
                  </div>
              ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding: 80px 32px !important;
          }

          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          div[style*="padding: 60px 40px"] {
            padding: 40px 32px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          }

          div[style*="borderRight: none"] {
            border-bottom: none !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 24px !important;
          }

          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }

          div[style*="padding: 60px 40px"],
          div[style*="padding: 40px 32px"] {
            padding: 30px 20px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 50px 16px !important;
          }

          div[style*="fontSize: 2.5rem"] {
            font-size: 1.4rem !important;
          }

          div[style*="fontSize: 2.2rem"] {
            font-size: 1.6rem !important;
          }

          div[style*="fontSize: 4rem"] {
            font-size: 2rem !important;
          }

          div[style*="fontSize: 1rem"] {
            font-size: 0.9rem !important;
          }

          div[style*="padding: 60px 40px"],
          div[style*="padding: 40px 32px"],
          div[style*="padding: 30px 20px"] {
            padding: 24px 16px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
        }
      `}</style>
    </>
  );
}