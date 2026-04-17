import { useState } from 'react';

const DASHBOARD_URLS = {
  dash1: 'https://app.powerbi.com/reportEmbed?reportId=2eb454a2-4356-414c-9caa-c9332e548ff2&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
  dash2: 'https://app.powerbi.com/reportEmbed?reportId=18bcabd2-8f46-4ef1-9fc6-e14c565a4324&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
};

export default function Page1Overview() {
  const [activeDash, setActiveDash] = useState('dash1');
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="page-container">
      {/* HERO */}
      <section className="hero" id="overview-hero">
        <h1 className="hero__heading">MMARAS</h1>
        <p className="hero__subtitle">
          Spatiotemporal Analysis and Predictive Modeling of Road Traffic Incidents in Metro Manila: A Machine Learning and GIS Approach Using MMARAS &amp; AADT Data (2015-2024)
        </p>
      </section>

      {/* KPI CARDS */}
      <section className="kpi-row" id="overview-kpis">
        <div className="kpi-card">
          <div className="kpi-card__label">Annual Incident Volume</div>
          <div className="kpi-card__value">88,101</div>
          <div className="kpi-card__desc">incidents in 2024</div>
        </div>
        <div className="kpi-card" style={{ borderLeftColor: '#FF6B6B' }}>
          <div className="kpi-card__label">Critical Severity</div>
          <div className="kpi-card__value">427</div>
          <div className="kpi-card__desc kpi-card__desc--red">Fatal Incidents in 2024</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-card__label">Geospatial Scope</div>
          <div className="kpi-card__value">17</div>
          <div className="kpi-card__desc">Cities Monitored</div>
        </div>
      </section>

      {/* SCIENTIFIC OBJECTIVE */}
      <section className="objective-section" id="overview-objective">
        <div className="objective-text">
          <h2>Scientific Objective</h2>
          <p>
            The Metro Manila Road Traffic Incident Analysis System (MMARAS) leverages
            longitudinal data from 2015 to 2024 to decode the complex dynamics of
            urban mobility safety. By integrating heterogeneous data sources, the project
            provides a granular view of risk factors contributing to incident severity and
            frequency across the National Capital Region's 17 administrative units.
          </p>
          <p>
            Our framework utilizes advanced econometric models and spatial statistics
            to bridge the gap between raw traffic data and actionable policy
            interventions. The goal is to move beyond reactionary measures toward a
            predictive and prescriptive paradigm for urban safety management.
          </p>
          <a className="btn-cta" href="https://drive.google.com/drive/folders/1vBFQNu34H9UYX8JOoPBcMZMQJEHv1PG7" target="_blank" rel="noopener noreferrer">
            Access Research Data 🗄
          </a>
        </div>

        <div className="layer-grid">
          <div className="layer-card" style={{ boxShadow: '0 0 20px rgba(30,144,255,0.08)' }}>
            <div className="layer-card__icon" style={{ background: 'rgba(30,144,255,0.15)', color: '#1E90FF' }}>
              📊
            </div>
            <div className="layer-card__name" style={{ color: '#1E90FF' }}>Descriptive</div>
            <div className="layer-card__desc">
              Summarizes 10 years of incident trends across 17 cities, 5 districts, vehicle types, collision patterns, and demographic profiles using historical MMARAS data.
            </div>
          </div>
          <div className="layer-card" style={{ boxShadow: '0 0 20px rgba(255,159,67,0.08)' }}>
            <div className="layer-card__icon" style={{ background: 'rgba(255,159,67,0.15)', color: '#FF9F43' }}>
              🔍
            </div>
            <div className="layer-card__name" style={{ color: '#FF9F43' }}>Diagnostic</div>
            <div className="layer-card__desc">
              Identifies key risk factors driving fatal incidents — including time-of-day danger windows, motorcycle exposure, and district-level severity patterns.
            </div>
          </div>
          <div className="layer-card" style={{ boxShadow: '0 0 20px rgba(155,89,182,0.08)' }}>
            <div className="layer-card__icon" style={{ background: 'rgba(155,89,182,0.15)', color: '#9B59B6' }}>
              📈
            </div>
            <div className="layer-card__name" style={{ color: '#9B59B6' }}>Predictive</div>
            <div className="layer-card__desc">
              Forecasts 2025 incident volumes using Prophet time series and classifies district and demographic fatal risk using Random Forest and Logistic Regression.
            </div>
          </div>
          <div className="layer-card" style={{ boxShadow: '0 0 20px rgba(46,204,113,0.08)' }}>
            <div className="layer-card__icon" style={{ background: 'rgba(46,204,113,0.15)', color: '#2ECC71' }}>
              🎯
            </div>
            <div className="layer-card__name" style={{ color: '#2ECC71' }}>Prescriptive</div>
            <div className="layer-card__desc">
              Translates model outputs into 5 data-driven policy interventions including enforcement zones, patrol windows, and motorcycle safety campaigns.
            </div>
          </div>
        </div>
      </section>

      {/* NEW STAT CARDS — COVERAGE */}
      <section style={{ display: 'flex', justifyContent: 'center', gap: 24, margin: '0 0 20px 0', flexWrap: 'wrap' }}>
        <div className="kpi-card" style={{ flex: '0 1 340px' }}>
          <div className="kpi-card__label">Coverage Period</div>
          <div className="kpi-card__value" style={{ fontSize: '2.2rem' }}>2015–2024</div>
          <div className="kpi-card__desc">10 Years of Data</div>
        </div>
        <div className="kpi-card" style={{ flex: '0 1 340px' }}>
          <div className="kpi-card__label">Coverage Zone</div>
          <div className="kpi-card__value" style={{ fontSize: '2.2rem' }}>Metro Manila</div>
          <div className="kpi-card__desc">National Capital Region</div>
        </div>
      </section>

      {/* INTERACTIVE POWER BI DASHBOARD */}
      <section className="chart-section" id="overview-dashboard">
        <div className="chart-container">
          <div className="chart-container__title">Interactive Dashboard</div>
          <div className="chart-container__subtitle">
            Live analytics powered by Power BI
          </div>

          {/* Dashboard Switcher */}
          <div style={{
            display: 'flex',
            gap: 8,
            marginBottom: 20,
          }}>
            <button
              onClick={() => setActiveDash('dash1')}
              style={{
                padding: '10px 24px',
                borderRadius: '999px',
                border: activeDash === 'dash1' ? '2px solid #00C9A7' : '2px solid rgba(140,155,181,0.3)',
                background: activeDash === 'dash1' ? '#00C9A7' : 'transparent',
                color: activeDash === 'dash1' ? '#0B1437' : '#8C9BB5',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              Overview District
            </button>
            <button
              onClick={() => setActiveDash('dash2')}
              style={{
                padding: '10px 24px',
                borderRadius: '999px',
                border: activeDash === 'dash2' ? '2px solid #00C9A7' : '2px solid rgba(140,155,181,0.3)',
                background: activeDash === 'dash2' ? '#00C9A7' : 'transparent',
                color: activeDash === 'dash2' ? '#0B1437' : '#8C9BB5',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              Overview Incidents
            </button>
          </div>

          {/* Iframe container with fullscreen button */}
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
              onClick={() => setIsFullscreen(true)}
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
              title="MMARAS Interactive Dashboard"
              width="100%"
              height="600"
              src={DASHBOARD_URLS[activeDash]}
              frameBorder="0"
              allowFullScreen={true}
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* FULLSCREEN OVERLAY */}
      {isFullscreen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          background: 'rgba(0,0,0,0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button
            onClick={() => setIsFullscreen(false)}
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
            title="MMARAS Dashboard Fullscreen"
            width="100%"
            height="100%"
            src={DASHBOARD_URLS[activeDash]}
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

      {/* FOOTER */}
      <footer className="footer" id="overview-footer">
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
