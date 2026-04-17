import { useState } from 'react';

const BASE = import.meta.env.BASE_URL;

const DESC_URLS = {
  vehicle: 'https://app.powerbi.com/reportEmbed?reportId=f016420f-bfd5-4659-a5b0-c51932bab9b4&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
  collision: 'https://app.powerbi.com/reportEmbed?reportId=52e1faf9-2cdb-41d0-b9da-fbe72b8a5006&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
  age: 'https://app.powerbi.com/reportEmbed?reportId=1c074f20-9a1f-4baa-a695-1dc5904b6afa&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
  time: 'https://app.powerbi.com/reportEmbed?reportId=0a78610e-350b-423b-925c-d93f78fec777&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
};

export default function Page2Analysis() {
  const [descTab, setDescTab] = useState('vehicle');
  const [descFullscreen, setDescFullscreen] = useState(false);

  return (
    <div className="page-container">

      {/* ===== SECTION 1: DIAGNOSTIC — WHAT DRIVES CRASHES ===== */}
      <section className="section" id="analysis-diagnostic-drivers">
        <h2 className="section-header section-header--orange">
          Diagnostic: What Drives Crashes?
        </h2>

        <div className="two-col">
          {/* Card A: RF Feature Importance — Real Image */}
          <div className="card card--orange card--glow-orange">
            <div className="chart-container__title" style={{ fontSize: '1rem' }}>
              RF Feature Importance — Top 3 Predictors
            </div>
            <div style={{ marginTop: 20 }}>
              <img
                src={`${BASE}images/rf_feature_importance.png`}
                alt="Random Forest Feature Importance"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="chart-caption">
              NON-FATAL INJURY = 0.530 · DAMAGE TO PROPERTY = 0.367 · YEAR = 0.103
            </div>
          </div>

          {/* Card B: AADT vs Crash Volume — Placeholder */}
          <div className="card card--orange card--glow-orange">
            <div className="chart-container__title" style={{ fontSize: '1rem' }}>
              AADT vs Crash Volume (2017–2024)
            </div>
            <div className="placeholder-slot" style={{
              marginTop: 20,
              minHeight: '220px',
              borderColor: 'rgba(255,159,67,0.4)',
            }}>
              <div className="placeholder-slot__icon">📊</div>
              <div className="placeholder-slot__label">
                AADT SCATTER PLOT — DROP IMAGE HERE
              </div>
            </div>
            <div className="chart-caption">
              PRE-COVID: R = +0.94 (BLUE) · COVID/POST: R = −0.36 (RED) · TWO-REGIME ANALYSIS
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: PREDICTIVE — MACHINE LEARNING (2x2 GRID) ===== */}
      <section className="section" id="analysis-predictive">
        <h2 className="section-header section-header--purple">
          Predictive: Machine Learning Models
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}>
          {/* Card A: District Hotspot Classifier — RF Confusion Matrix */}
          <div className="card card--purple card--glow-purple">
            <div className="chart-container__title" style={{ fontSize: '0.95rem' }}>
              District Hotspot Classifier
            </div>
            <div className="metric-display" style={{ color: '#9B59B6', marginTop: 12 }}>
              CV ACCURACY: 0.782 · F1: 0.776
            </div>
            <div style={{ marginTop: 16 }}>
              <img
                src={`${BASE}images/rf_confusion_matrix.png`}
                alt="RF Classifier Confusion Matrix"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="chart-caption">
              CONFUSION MATRIX — RF DISTRICT RISK CLASSIFICATION (TEST SET)
            </div>
          </div>

          {/* Card B: Age-Group Fatal Risk (LogReg) — Placeholder */}
          <div className="card card--purple card--glow-purple">
            <div className="chart-container__title" style={{ fontSize: '0.95rem' }}>
              Age-Group Fatal Risk (LogReg)
            </div>
            <div className="metric-display" style={{ color: '#9B59B6', marginTop: 12 }}>
              ACCURACY: 0.900 · AUC-ROC: 0.975
            </div>
            <div className="placeholder-slot" style={{
              marginTop: 16,
              minHeight: '200px',
              borderColor: 'rgba(155,89,182,0.4)',
            }}>
              <div className="placeholder-slot__icon">📈</div>
              <div className="placeholder-slot__label">
                AUC-ROC CURVE PNG — DROP IMAGE HERE
              </div>
            </div>
            <div className="chart-caption">
              RECEIVER OPERATING CHARACTERISTIC CURVE
            </div>
          </div>

          {/* Card C: RF Classification Output — Per City (2025) */}
          <div className="card card--purple card--glow-purple">
            <div className="chart-container__title" style={{ fontSize: '0.95rem' }}>
              RF Classification Output — Per City (2025)
            </div>
            <div className="metric-display" style={{ color: '#9B59B6', marginTop: 12 }}>
              CV ACCURACY: 0.782 · F1: 0.776
            </div>
            <div style={{ marginTop: 16 }}>
              <img
                src={`${BASE}images/rf_classification_output.png`}
                alt="RF Classification Output Per City 2025"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="chart-caption">
              DISTRICT RISK CLASSIFICATION — HIGH vs LOW RISK PER CITY
            </div>
          </div>

          {/* Card D: Prophet Forecast 2025 — PLACEHOLDER */}
          <div className="card card--purple card--glow-purple" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px 12px' }}>
              <div className="chart-container__title" style={{ fontSize: '0.95rem' }}>
                Prophet Forecast 2025
              </div>
            </div>
            <div className="placeholder-slot" style={{
              margin: '0 20px',
              minHeight: '200px',
              borderColor: 'rgba(155,89,182,0.4)',
            }}>
              <div className="placeholder-slot__icon">📉</div>
              <div className="placeholder-slot__label">
                PROPHET FORECAST PNG — DROP IMAGE HERE
              </div>
            </div>
            <div style={{ padding: '12px 24px 20px' }}>
              <div className="chart-caption" style={{ borderTop: 'none', marginTop: 8, paddingTop: 0 }}>
                2025 MONTHLY FORECAST · MAE/RMSE/MAPE EVALUATED ON 2024 HOLDOUT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: DESCRIPTIVE — CRASH PROFILES ===== */}
      <section className="section" id="analysis-descriptive">
        <h2 className="section-header section-header--blue">
          Descriptive: Crash Profiles
        </h2>

        {/* 3 Stat Cards */}
        <div className="kpi-row" style={{ marginBottom: 32 }}>
          <div className="kpi-card">
            <div className="kpi-card__label">Total Vehicle Incidents</div>
            <div className="kpi-card__value">2,000,000+</div>
            <div className="kpi-card__desc">Across all vehicle types</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-card__label">Top Collision Type</div>
            <div className="kpi-card__value">26,313</div>
            <div className="kpi-card__desc">Side Swipe Incidents</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-card__label">Highest Risk Age</div>
            <div className="kpi-card__value">66+</div>
            <div className="kpi-card__desc">Highest Fatality Rate</div>
          </div>
        </div>

        {/* Tab Switcher — matches Overview District/Incidents style */}
        <div style={{
          display: 'flex',
          gap: 8,
          marginBottom: 20,
          flexWrap: 'wrap',
        }}>
          {[
            { key: 'vehicle', label: 'Vehicle Type', activeColor: '#00C9A7', activeBg: 'rgba(0,212,170,0.15)', glowColor: 'rgba(0,212,170,0.4)' },
            { key: 'collision', label: 'Collision Types', activeColor: '#00C9A7', activeBg: 'rgba(0,212,170,0.15)', glowColor: 'rgba(0,212,170,0.4)' },
            { key: 'age', label: 'Age Group', activeColor: '#00C9A7', activeBg: 'rgba(0,212,170,0.15)', glowColor: 'rgba(0,212,170,0.4)' },
            { key: 'time', label: 'Time', activeColor: '#f59e0b', activeBg: 'rgba(245,158,11,0.15)', glowColor: 'rgba(245,158,11,0.4)' },
          ].map((tab) => {
            const isActive = descTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setDescTab(tab.key)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '999px',
                  border: isActive ? `2px solid ${tab.activeColor}` : '2px solid rgba(140,155,181,0.3)',
                  background: isActive ? tab.activeBg : 'transparent',
                  color: isActive ? tab.activeColor : '#8C9BB5',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? `0 0 12px ${tab.glowColor}` : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Iframe container — matches Overview dashboard container */}
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
            onClick={() => setDescFullscreen(true)}
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
            title="Descriptive Dashboard"
            width="100%"
            height="600"
            src={DESC_URLS[descTab]}
            frameBorder="0"
            allowFullScreen={true}
            style={{ display: 'block' }}
          />
        </div>
      </section>

      {/* FULLSCREEN OVERLAY — Descriptive */}
      {descFullscreen && (
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
            onClick={() => setDescFullscreen(false)}
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
            title="Descriptive Dashboard Fullscreen"
            width="100%"
            height="100%"
            src={DESC_URLS[descTab]}
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
      <footer className="footer" id="analysis-footer">
        <div className="footer__inner">
          <div className="footer__left">
            <h3>MMARAS Project</h3>
            <p>© 2024 · Bulacan State University · BS Data Science</p>
            <div className="footer__left-links">
              <a href="#">Team Members</a>
              <a href="#">Academic Affiliation</a>
              <a href="#">Publications</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="footer__right">
            <p style={{ fontSize: '0.68rem', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: "'IBM Plex Mono', monospace" }}>
              Lead Researchers:
            </p>
            <span className="names">LANCE · MEIJA · HANNAH · ORTEGA · JHAMIACA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
