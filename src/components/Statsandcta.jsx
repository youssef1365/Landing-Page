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

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}

export default function StatsAndCta({ userType, onApply }) {
  const { stats, colors } = siteConfig;
  const d = userType === 'seller'
    ? siteConfig.sellerJourney.finalCta
    : siteConfig.buyerJourney.finalCta;

  const [ref, visible] = useVisible();
  const [isHovering, setIsHovering] = useState(false);
  const width = useWindowWidth();

  const isMobile = width <= 768;
  const isSmall  = width <= 480;
  const isTablet = width <= 1024;

  const sectionStyle = {
    position: 'relative',
    background: colors.surfaceLight,
    padding: isSmall
      ? '50px 16px'
      : isMobile
      ? '60px 24px'
      : isTablet
      ? '80px 32px'
      : '120px 80px',
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
    height: '1px',
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
    gridTemplateColumns: isMobile
      ? '1fr'
      : isTablet
      ? 'repeat(2, 1fr)'
      : 'repeat(3, 1fr)',
    border: `1px solid ${colors.borderLight}`,
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '100px',
    background: colors.surfaceWhite,
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
  };

  const getStatCellStyle = (i, isLast) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isSmall
      ? '24px 16px'
      : isMobile
      ? '30px 20px'
      : isTablet
      ? '40px 32px'
      : '60px 40px',
    borderRight: isMobile || isTablet
      ? 'none'
      : isLast
      ? 'none'
      : `1px solid ${colors.borderLight}`,
    borderBottom: isMobile || isTablet
      ? isLast ? 'none' : `1px solid ${colors.borderLight}`
      : 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  });

  const statValueStyle = {
    fontSize: isSmall ? '2rem' : '4rem',
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
    fontSize: isSmall ? '1.6rem' : '2.2rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    margin: '0 0 20px 0',
    color: colors.textDark,
  };

  const headingStylee = {
    fontSize: isSmall ? '1.4rem' : '2.5rem',
    fontWeight: 900,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    margin: '0 0 20px 0',
    color: colors.winkblue,
  };

  const ctaCopyStyle = {
    fontSize: isSmall ? '0.9rem' : '1rem',
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
          <p style={headingStylee}>TRUSTED BY EXPORTERS WORLDWIDE</p>
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
              style={getStatCellStyle(i, i === stats.items.length - 1)}
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
  );
}