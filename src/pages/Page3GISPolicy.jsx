import { useState } from 'react';

const GIS_URLS = {
  map12: 'https://rawcdn.githack.com/Yezez9/Metro-manila-crash-analysis/main/gis/GIS_RF_Classification.html',
  map3: 'https://rawcdn.githack.com/Yezez9/Metro-manila-crash-analysis/main/gis/GIS_Map3_Predictive_2025.html',
};

const DASHBOARD_URL = 'https://app.powerbi.com/reportEmbed?reportId=3ebd5ec3-7966-4b37-a0d6-d4c0f15812c3&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4';

export default function Page3GISPolicy() {
  const [activeMap, setActiveMap] = useState('map12');
  const [mapFullscreen, setMapFullscreen] = useState(false);
  const [dashFullscreen, setDashFullscreen] = useState(false);

  return (
    <div className="page-container">

      {/* ===== SECTION HEADER ===== */}
      <section className="section" id="gis-header" style={{ paddingBottom: 0 }}>
        <h1 className="section__title" style={{ fontSize: '1.8rem' }}>
          Spatial Analysis &amp; Predictive Mapping
        </h1>
        <div style={{
          width: 120,
          height: 3,
          background: 'var(--accent-teal)',
          marginTop: 12,
          borderRadius: 2,
          marginBottom: 40,
        }} />
      </section>

      {/* ===== GIS MAP VIEWER ===== */}
      <section id="gis-maps">
        {/* Map Tab Switcher — Predictive purple color */}
        <div style={{
          display: 'flex',
          gap: 8,
          marginBottom: 20,
        }}>
          <button
            onClick={() => setActiveMap('map12')}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: activeMap === 'map12' ? '2px solid #a855f7' : '2px solid rgba(140,155,181,0.3)',
              background: activeMap === 'map12' ? 'rgba(168,85,247,0.15)' : 'transparent',
              color: activeMap === 'map12' ? '#a855f7' : '#8C9BB5',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: activeMap === 'map12' ? '0 0 12px rgba(168,85,247,0.4)' : 'none',
            }}
          >
            GIS Map 1+2
          </button>
          <button
            onClick={() => setActiveMap('map3')}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: activeMap === 'map3' ? '2px solid #a855f7' : '2px solid rgba(140,155,181,0.3)',
              background: activeMap === 'map3' ? 'rgba(168,85,247,0.15)' : 'transparent',
              color: activeMap === 'map3' ? '#a855f7' : '#8C9BB5',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: activeMap === 'map3' ? '0 0 12px rgba(168,85,247,0.4)' : 'none',
            }}
          >
            GIS Map 3
          </button>
        </div>

        {/* Map Container */}
        <div style={{
          width: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(0,201,167,0.15)',
          boxShadow: '0 0 24px rgba(0,201,167,0.06)',
          position: 'relative',
        }}>
          {/* Fullscreen toggle */}
          <button
            onClick={() => setMapFullscreen(true)}
            title="Enter fullscreen"
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 10,
              width: 36,
              height: 36,
              borderRadius: 8,
              border: '1px solid rgba(0,201,167,0.3)',
              background: 'rgba(11,20,55,0.85)',
              color: '#00C9A7',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>

          <iframe
            title="GIS Map Viewer"
            width="100%"
            height="600"
            src={GIS_URLS[activeMap]}
            frameBorder="0"
            allowFullScreen={true}
            style={{ display: 'block' }}
          />
        </div>
      </section>

      {/* GIS MAP FULLSCREEN OVERLAY */}
      {mapFullscreen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          background: 'rgba(0,0,0,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button
            onClick={() => setMapFullscreen(false)}
            title="Exit fullscreen"
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              zIndex: 10000,
              width: 44,
              height: 44,
              borderRadius: 10,
              border: '1px solid rgba(0,201,167,0.4)',
              background: 'rgba(20,28,56,0.9)',
              color: '#00C9A7',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 700,
              transition: 'all 0.25s ease',
            }}
          >
            ✕
          </button>
          <iframe
            title="GIS Map Fullscreen"
            width="100%"
            height="100%"
            src={GIS_URLS[activeMap]}
            frameBorder="0"
            allowFullScreen={true}
            style={{
              display: 'block',
              border: 'none',
              width: '100vw',
              height: '100vh',
            }}
          />
        </div>
      )}

      {/* ===== POWER BI DASHBOARD ===== */}
      <section className="section" id="gis-powerbi">
        <h2 className="section__title" style={{ fontSize: '1.5rem', marginBottom: 20 }}>Explore the Live Dashboard</h2>

        <div style={{
          width: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(0,201,167,0.15)',
          boxShadow: '0 0 24px rgba(0,201,167,0.06)',
          position: 'relative',
        }}>
          {/* Fullscreen toggle */}
          <button
            onClick={() => setDashFullscreen(true)}
            title="Enter fullscreen"
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 10,
              width: 36,
              height: 36,
              borderRadius: 8,
              border: '1px solid rgba(0,201,167,0.3)',
              background: 'rgba(11,20,55,0.85)',
              color: '#00C9A7',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>

          <iframe
            title="MMARAS Live Dashboard"
            width="100%"
            height="541"
            src={DASHBOARD_URL}
            frameBorder="0"
            allowFullScreen={true}
            style={{ display: 'block' }}
          />
        </div>
      </section>

      {/* DASHBOARD FULLSCREEN OVERLAY */}
      {dashFullscreen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          background: 'rgba(0,0,0,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button
            onClick={() => setDashFullscreen(false)}
            title="Exit fullscreen"
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              zIndex: 10000,
              width: 44,
              height: 44,
              borderRadius: 10,
              border: '1px solid rgba(0,201,167,0.4)',
              background: 'rgba(20,28,56,0.9)',
              color: '#00C9A7',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 700,
              transition: 'all 0.25s ease',
            }}
          >
            ✕
          </button>
          <iframe
            title="Dashboard Fullscreen"
            width="100%"
            height="100%"
            src={DASHBOARD_URL}
            frameBorder="0"
            allowFullScreen={true}
            style={{
              display: 'block',
              border: 'none',
              width: '100vw',
              height: '100vh',
            }}
          />
        </div>
      )}

      {/* ===== PRESCRIPTIVE INSIGHTS ===== */}
      <section className="section" id="gis-prescriptive">
        <h2 className="section__title" style={{ fontSize: '1.5rem' }}>Prescriptive Insights</h2>
        <div style={{
          width: 120,
          height: 3,
          background: 'var(--layer-prescriptive)',
          marginTop: 8,
          borderRadius: 2,
          marginBottom: 36,
        }} />

        <div className="policy-grid">
          <div className="policy-card">
            <div className="policy-card__icon">🚨</div>
            <div className="policy-card__title">Enforce District Zones</div>
            <div className="policy-card__desc">
              Central and Southern districts need priority enforcement based on current risk mapping density.
            </div>
          </div>
          <div className="policy-card">
            <div className="policy-card__icon">🌙</div>
            <div className="policy-card__title">Deploy Night Patrols</div>
            <div className="policy-card__desc">
              10 PM to 3 AM fatal danger window identified as the critical intervention period for patrol dispatch.
            </div>
          </div>
          <div className="policy-card">
            <div className="policy-card__icon">🏍️</div>
            <div className="policy-card__title">Motorcycle Safety Campaign</div>
            <div className="policy-card__desc">
              33,639 cases, highest fatal rate of all vehicle types. Specific protective gear mandates recommended.
            </div>
          </div>
          <div className="policy-card">
            <div className="policy-card__icon">🎓</div>
            <div className="policy-card__title">Youth Intervention Program</div>
            <div className="policy-card__desc">
              Age 18–34 highest fatal crash bracket every year. Targeted awareness at universities and workplaces.
            </div>
          </div>
          <div className="policy-card policy-card--centered">
            <div className="policy-card__icon">🛣️</div>
            <div className="policy-card__title">EDSA Corridor Priority</div>
            <div className="policy-card__desc">
              419,952 vehicles/day, highest traffic exposure in Metro Manila. Dedicated rapid response units required.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="gis-footer">
        <div className="footer__inner">
          <div className="footer__left">
            <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem' }}>
              MMARAS Project · © 2024 · Bulacan State University · BS Data Science
            </p>
          </div>
          <div className="footer__right">
            <span className="names">LANCE · MEIJA · HANNAH · ORTEGA · JHAMIACA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
