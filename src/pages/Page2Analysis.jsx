import { useState } from 'react';

const BASE = import.meta.env.BASE_URL;

const DESC_URLS = {
  vehicle: 'https://app.powerbi.com/reportEmbed?reportId=f016420f-bfd5-4659-a5b0-c51932bab9b4&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
  collision: 'https://app.powerbi.com/reportEmbed?reportId=52e1faf9-2cdb-41d0-b9da-fbe72b8a5006&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
  age: 'https://app.powerbi.com/reportEmbed?reportId=1c074f20-9a1f-4baa-a695-1dc5904b6afa&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
  time: 'https://app.powerbi.com/reportEmbed?reportId=0a78610e-350b-423b-925c-d93f78fec777&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4',
};

/* Reusable fullscreen expand button */
function ExpandBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
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
  );
}

/* Reusable fullscreen overlay for images */
function ImageOverlay({ src, alt, onClose }) {
  return (
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
      padding: 40,
    }}>
      <button
        onClick={onClose}
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
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: '95vw', maxHeight: '90vh', borderRadius: '8px', objectFit: 'contain' }}
      />
    </div>
  );
}

export default function Page2Analysis() {
  const [descTab, setDescTab] = useState('vehicle');
  const [descFullscreen, setDescFullscreen] = useState(false);
  const [fullImg, setFullImg] = useState(null); // { src, alt }

  return (
    <div className="page-container">

      {/* ===== SECTION 1: DESCRIPTIVE — INCIDENT PROFILES ===== */}
      <section className="section" id="analysis-descriptive">
        <h2 className="section-header section-header--blue">
          Descriptive: Incident Profiles
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

        {/* Tab Switcher */}
        <div style={{
          display: 'flex',
          gap: 8,
          marginBottom: 20,
          flexWrap: 'wrap',
        }}>
          {[
            { key: 'vehicle', label: 'Vehicle Type', activeColor: '#1E90FF', activeBg: 'rgba(30,144,255,0.15)', glowColor: 'rgba(30,144,255,0.4)' },
            { key: 'collision', label: 'Collision Types', activeColor: '#1E90FF', activeBg: 'rgba(30,144,255,0.15)', glowColor: 'rgba(30,144,255,0.4)' },
            { key: 'age', label: 'Age Group', activeColor: '#1E90FF', activeBg: 'rgba(30,144,255,0.15)', glowColor: 'rgba(30,144,255,0.4)' },
            { key: 'time', label: 'Time', activeColor: '#1E90FF', activeBg: 'rgba(30,144,255,0.15)', glowColor: 'rgba(30,144,255,0.4)' },
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

        {/* Iframe container */}
        <div style={{
          width: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(30,144,255,0.15)',
          boxShadow: '0 0 24px rgba(30,144,255,0.06)',
          position: 'relative',
        }}>
          <ExpandBtn onClick={() => setDescFullscreen(true)} />
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

      {/* ===== SECTION 2: DIAGNOSTIC — WHAT DRIVES INCIDENTS ===== */}
      <section className="section" id="analysis-diagnostic-drivers">
        <h2 className="section-header section-header--orange">
          Diagnostic: What Drives Incidents?
        </h2>

        <div className="two-col">
          {/* Card A: RF Feature Importance */}
          <div className="card card--orange card--glow-orange" style={{ position: 'relative' }}>
            <ExpandBtn onClick={() => setFullImg({ src: `${BASE}images/rf_feature_importance.png`, alt: 'RF Feature Importance' })} />
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

          {/* Card B: AADT vs Incident Volume */}
          <div className="card card--orange card--glow-orange" style={{ position: 'relative' }}>
            <ExpandBtn onClick={() => setFullImg({ src: `${BASE}images/aadt_scatter.png`, alt: 'AADT vs Incident' })} />
            <div className="chart-container__title" style={{ fontSize: '1rem' }}>
              AADT vs Incident Volume (2016–2024)
            </div>
            <div style={{ marginTop: 20 }}>
              <img
                src={`${BASE}images/aadt_scatter.png`}
                alt="AADT vs Incident Scatter Plot"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="chart-caption">
              PRE-COVID: r = +0.963 (BLUE) · COVID/POST: r = −0.417 (RED) · TWO-REGIME ANALYSIS
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PREDICTIVE — MACHINE LEARNING (2x2 GRID) ===== */}
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
          <div className="card card--purple card--glow-purple" style={{ position: 'relative' }}>
            <ExpandBtn onClick={() => setFullImg({ src: `${BASE}images/rf_confusion_matrix.png`, alt: 'RF Confusion Matrix' })} />
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

          {/* Card B: Age-Group Fatal Risk (LogReg) */}
          <div className="card card--purple card--glow-purple" style={{ position: 'relative' }}>
            <ExpandBtn onClick={() => setFullImg({ src: `${BASE}images/logreg_auc_roc.png`, alt: 'Logistic Regression AUC-ROC' })} />
            <div className="chart-container__title" style={{ fontSize: '0.95rem' }}>
              Age-Group Fatal Risk (LogReg)
            </div>
            <div className="metric-display" style={{ color: '#9B59B6', marginTop: 12 }}>
              ACCURACY: 0.900 · AUC-ROC: 0.978
            </div>
            <div style={{ marginTop: 16 }}>
              <img
                src={`${BASE}images/logreg_auc_roc.png`}
                alt="Logistic Regression — Fatal Incident Age Risk"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="chart-caption">
              PREDICTED RISK PROBABILITY BY AGE BRACKET · AUC-ROC CURVE
            </div>
          </div>

          {/* Card C: RF Classification Output — Per City (2025) */}
          <div className="card card--purple card--glow-purple" style={{ position: 'relative' }}>
            <ExpandBtn onClick={() => setFullImg({ src: `${BASE}images/rf_classification_output.png`, alt: 'RF Classification Output' })} />
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

          {/* Card D: Prophet Forecast 2025 */}
          <div className="card card--purple card--glow-purple" style={{ position: 'relative' }}>
            <ExpandBtn onClick={() => setFullImg({ src: `${BASE}images/prophet_forecast.png`, alt: 'Prophet Forecast 2025' })} />
            <div className="chart-container__title" style={{ fontSize: '0.95rem' }}>
              Prophet Forecast 2025
            </div>
            <div style={{ marginTop: 16 }}>
              <img
                src={`${BASE}images/prophet_forecast.png`}
                alt="2025 Forecast — Trained on Full 2015-2024 Data"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="chart-caption">
              2025 MONTHLY FORECAST · FATAL · NON-FATAL · DAMAGE TO PROPERTY · GRAND TOTAL
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTIVE FULLSCREEN OVERLAY */}
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

      {/* IMAGE FULLSCREEN OVERLAY */}
      {fullImg && (
        <ImageOverlay src={fullImg.src} alt={fullImg.alt} onClose={() => setFullImg(null)} />
      )}

      {/* FOOTER */}
      <footer className="footer" id="analysis-footer">
        <div className="footer__inner">
          <div className="footer__left">
            <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem' }}>
              MMARAS Project · © 2026 · Bulacan State University · BS Data Science
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
