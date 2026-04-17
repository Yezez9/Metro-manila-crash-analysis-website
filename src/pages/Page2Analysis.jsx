import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ScatterChart, Scatter, Cell, ResponsiveContainer,
  Legend, ReferenceLine, ZAxis
} from 'recharts';

/* ===== SECTION 1: Diagnostic — Feature Importance ===== */
const featureData = [
  { name: 'NON_FATAL_INJURY', value: 34 },
  { name: 'NON_FATAL_INJURY_TRANSYEO', value: 31 },
  { name: 'DAMAGE_TO_PROPERTY', value: 16 },
  { name: 'YEAR_CAT', value: 11 },
  { name: 'DAMAGE_TO_PROPERTY_LOG', value: 8 },
];

/* ===== SECTION 1: AADT vs Crash scatter data ===== */
const preCovid = [
  { aadt: 15, crashes: 22, year: 2017 },
  { aadt: 25, crashes: 38, year: 2017 },
  { aadt: 35, crashes: 52, year: 2018 },
  { aadt: 45, crashes: 60, year: 2018 },
  { aadt: 55, crashes: 72, year: 2019 },
  { aadt: 65, crashes: 78, year: 2019 },
  { aadt: 75, crashes: 85, year: 2019 },
  { aadt: 85, crashes: 90, year: 2019 },
];

const covidPost = [
  { aadt: 20, crashes: 65, year: 2020 },
  { aadt: 30, crashes: 55, year: 2020 },
  { aadt: 40, crashes: 48, year: 2021 },
  { aadt: 50, crashes: 52, year: 2021 },
  { aadt: 60, crashes: 45, year: 2022 },
  { aadt: 70, crashes: 50, year: 2023 },
  { aadt: 80, crashes: 58, year: 2024 },
  { aadt: 90, crashes: 55, year: 2024 },
];

/* ===== SECTION 2: Fatal rate heatmap ===== */
const hourRates = Array.from({ length: 24 }, (_, i) => {
  // 22–23, 0–3 are danger hours
  const isDanger = i >= 22 || i <= 3;
  const isModerate = (i >= 18 && i < 22) || (i > 3 && i <= 6);
  const rate = isDanger ? 0.9 + Math.random() * 0.1 : isModerate ? 0.4 + Math.random() * 0.2 : 0.1 + Math.random() * 0.2;
  return { hour: i, rate: parseFloat(rate.toFixed(2)) };
});

/* ===== SECTION 2: Vehicle fatal rate ===== */
const vehicleData = [
  { type: 'MOTORCYCLE', rate: 82, color: '#FF6B6B' },
  { type: 'PRIVATE CAR', rate: 44, color: '#FF9F43' },
  { type: 'PUBLIC UTILITY', rate: 31, color: '#FF9F43' },
];

/* ===== SECTION 4: Collision types ===== */
const collisionData = [
  { type: 'SIDE SWIPE', count: 26313 },
  { type: 'REAR END', count: 22364 },
  { type: 'HEAD ON', count: 12042 },
];

/* ===== SECTION 4: Age brackets stacked bar ===== */
const ageBracketData = [
  { year: '2021', fatal: 85, nonFatal: 5200 },
  { year: '2022', fatal: 110, nonFatal: 6100 },
  { year: '2023', fatal: 125, nonFatal: 6800 },
  { year: '2024', fatal: 140, nonFatal: 7200 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#141C38',
        border: '1px solid rgba(255,159,67,0.3)',
        borderRadius: '8px',
        padding: '10px 14px',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.72rem',
      }}>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color || '#fff', margin: '3px 0' }}>
            {p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function getHeatColor(rate) {
  if (rate >= 0.85) return '#FF6B6B';
  if (rate >= 0.7) return '#FF8C42';
  if (rate >= 0.5) return '#FF9F43';
  if (rate >= 0.3) return '#b87333';
  return '#2a3050';
}

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
          {/* Card A: RF Feature Importance */}
          <div className="card card--orange card--glow-orange">
            <div className="chart-container__title" style={{ fontSize: '1rem' }}>
              RF Feature Importance — Top 5 Predictors
            </div>
            <div style={{ marginTop: 20 }}>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  data={featureData}
                  layout="vertical"
                  margin={{ top: 5, right: 40, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
                  <XAxis
                    type="number"
                    domain={[0, 40]}
                    tick={{ fill: '#8C9BB5', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }}
                    stroke="#8C9BB5"
                    tickFormatter={(v) => `${v}%`}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={185}
                    tick={{ fill: '#8C9BB5', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }}
                    stroke="#8C9BB5"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Importance" fill="#FF9F43" radius={[0, 4, 4, 0]} barSize={18} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-caption">
              NON-FATAL INJURY = 34% · LEAKAGE-FREE MODEL · CV ACCURACY: 0.782
            </div>
          </div>

          {/* Card B: AADT vs Crash Volume Scatter */}
          <div className="card card--orange card--glow-orange">
            <div className="chart-container__title" style={{ fontSize: '1rem' }}>
              AADT vs Crash Volume (2017–2024)
            </div>
            <div style={{ marginTop: 20 }}>
              <ResponsiveContainer width="100%" height={260}>
                <ScatterChart margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis
                    type="number"
                    dataKey="aadt"
                    name="AADT"
                    tick={{ fill: '#8C9BB5', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }}
                    stroke="#8C9BB5"
                    label={{
                      value: 'AADT (Thousands)',
                      position: 'insideBottom',
                      offset: -5,
                      style: { fill: '#8C9BB5', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }
                    }}
                  />
                  <YAxis
                    type="number"
                    dataKey="crashes"
                    name="Crashes"
                    tick={{ fill: '#8C9BB5', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }}
                    stroke="#8C9BB5"
                  />
                  <ZAxis range={[60, 60]} />
                  <Tooltip content={<CustomTooltip />} />
                  {/* Pre-COVID trend line */}
                  <ReferenceLine
                    segment={[{ x: 15, y: 20 }, { x: 85, y: 92 }]}
                    stroke="#2980B9"
                    strokeDasharray="5 5"
                    strokeWidth={1.5}
                  />
                  {/* COVID/Post trend line */}
                  <ReferenceLine
                    segment={[{ x: 20, y: 68 }, { x: 90, y: 52 }]}
                    stroke="#E74C3C"
                    strokeDasharray="5 5"
                    strokeWidth={1.5}
                  />
                  <Scatter name="Pre-COVID (2017-2019)" data={preCovid} fill="#2980B9">
                    {preCovid.map((_, i) => (
                      <Cell key={i} fill="#2980B9" />
                    ))}
                  </Scatter>
                  <Scatter name="COVID/Post (2020-2024)" data={covidPost} fill="#E74C3C">
                    {covidPost.map((_, i) => (
                      <Cell key={i} fill="#E74C3C" />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-caption">
              PRE-COVID: R = +0.94 (BLUE) · COVID/POST: R = −0.36 (RED) · TWO-REGIME ANALYSIS
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: DIAGNOSTIC — TIME & VEHICLE RISK ===== */}
      <section className="section" id="analysis-diagnostic-time">
        <h2 className="section-header section-header--orange">
          Diagnostic: Time &amp; Vehicle Risk
        </h2>

        <div className="two-col">
          {/* Card A: Fatal Rate by Hour Heatmap */}
          <div className="card card--orange card--glow-orange">
            <div className="chart-container__title" style={{ fontSize: '1rem' }}>
              Fatal Rate by Hour · 10 PM–3 AM Danger Window
            </div>

            <div className="heatmap-grid" style={{ marginTop: 20 }}>
              <div className="heatmap-row">
                {hourRates.map((h) => (
                  <div
                    key={`r1-${h.hour}`}
                    className="heatmap-cell"
                    style={{ background: getHeatColor(h.rate) }}
                    title={`${h.hour}:00 — Rate: ${h.rate}`}
                  />
                ))}
              </div>
              <div className="heatmap-row">
                {hourRates.map((h) => (
                  <div
                    key={`r2-${h.hour}`}
                    className="heatmap-cell"
                    style={{ background: getHeatColor(h.rate * 0.9) }}
                    title={`${h.hour}:00`}
                  />
                ))}
              </div>
            </div>
            <div className="heatmap-labels">
              {hourRates.map((h) => (
                <span key={h.hour}>{h.hour.toString().padStart(2, '0')}</span>
              ))}
            </div>

            <div className="chart-caption" style={{ color: '#FF6B6B' }}>
              ■ DANGER PEAK (22:00–03:00)
            </div>
          </div>

          {/* Card B: Vehicle Type Fatal Rate */}
          <div className="card card--orange card--glow-orange">
            <div className="chart-container__title" style={{ fontSize: '1rem' }}>
              Vehicle Type Fatal Rate · Motorcycle = Highest
            </div>

            <div style={{ marginTop: 28 }}>
              {vehicleData.map((v) => (
                <div className="vehicle-bar-item" key={v.type}>
                  <div className="vehicle-bar-item__header">
                    <span className="vehicle-bar-item__label">{v.type}</span>
                    <span className="vehicle-bar-item__value" style={{ color: v.color }}>{v.rate}%</span>
                  </div>
                  <div className="vehicle-bar-item__track">
                    <div
                      className="vehicle-bar-item__fill"
                      style={{ width: `${v.rate}%`, background: v.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PREDICTIVE — MACHINE LEARNING ===== */}
      <section className="section" id="analysis-predictive">
        <h2 className="section-header section-header--purple">
          Predictive: Machine Learning Models
        </h2>

        <div className="three-col">
          {/* Card A: District Hotspot Classifier */}
          <div className="card card--purple card--glow-purple">
            <div className="chart-container__title" style={{ fontSize: '0.95rem' }}>
              District Hotspot Classifier
            </div>
            <div className="metric-display" style={{ color: '#9B59B6', marginTop: 12 }}>
              CV ACCURACY: 0.782 · F1: 0.776
            </div>

            <div className="confusion-matrix">
              <div className="confusion-cell" style={{ background: 'rgba(46,204,113,0.2)', color: '#2ECC71' }}>
                TN · 452
              </div>
              <div className="confusion-cell" style={{ background: 'rgba(255,107,107,0.2)', color: '#FF6B6B' }}>
                FP · 81
              </div>
              <div className="confusion-cell" style={{ background: 'rgba(255,107,107,0.2)', color: '#FF6B6B' }}>
                FN · 104
              </div>
              <div className="confusion-cell" style={{ background: 'rgba(46,204,113,0.2)', color: '#2ECC71' }}>
                TP · 410
              </div>
            </div>

            <div className="chart-caption">
              CONFUSION MATRIX VISUALIZATION
            </div>
          </div>

          {/* Card B: Age-Group Fatal Risk (LogReg) */}
          <div className="card card--purple card--glow-purple">
            <div className="chart-container__title" style={{ fontSize: '0.95rem' }}>
              Age-Group Fatal Risk (LogReg)
            </div>
            <div className="metric-display" style={{ color: '#9B59B6', marginTop: 12 }}>
              ACCURACY: 0.900 · AUC-ROC: 0.975
            </div>

            {/* AUC-ROC curve via SVG */}
            <svg className="auc-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              {/* Background grid */}
              <defs>
                <linearGradient id="aucGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(155,89,182,0.15)" />
                  <stop offset="100%" stopColor="rgba(155,89,182,0)" />
                </linearGradient>
              </defs>
              {/* Area under curve */}
              <path
                d="M10,190 Q30,180 50,140 Q80,60 120,30 Q150,15 190,10 L190,190 Z"
                fill="url(#aucGrad)"
              />
              {/* Diagonal reference */}
              <line x1="10" y1="190" x2="190" y2="10" stroke="#8C9BB5" strokeWidth="1" strokeDasharray="4 4" />
              {/* ROC curve */}
              <path
                d="M10,190 Q30,180 50,140 Q80,60 120,30 Q150,15 190,10"
                fill="none"
                stroke="#9B59B6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Axes */}
              <line x1="10" y1="190" x2="190" y2="190" stroke="#8C9BB5" strokeWidth="1" />
              <line x1="10" y1="190" x2="10" y2="10" stroke="#8C9BB5" strokeWidth="1" />
              {/* Labels */}
              <text x="100" y="205" textAnchor="middle" fill="#8C9BB5" fontSize="8" fontFamily="IBM Plex Mono">FPR</text>
              <text x="5" y="100" textAnchor="middle" fill="#8C9BB5" fontSize="8" fontFamily="IBM Plex Mono" transform="rotate(-90, 5, 100)">TPR</text>
            </svg>

            <div className="chart-caption">
              RECEIVER OPERATING CHARACTERISTIC CURVE
            </div>
          </div>

          {/* Card C: Prophet Forecast 2025 — PLACEHOLDER */}
          <div className="card card--purple card--glow-purple" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px 12px' }}>
              <div className="chart-container__title" style={{ fontSize: '0.95rem' }}>
                Prophet Forecast 2025
              </div>
            </div>
            <div className="placeholder-slot" style={{
              margin: '0 20px',
              minHeight: '180px',
              borderColor: 'rgba(155,89,182,0.4)',
            }}>
              <div className="placeholder-slot__icon">📉</div>
              <div className="placeholder-slot__label">
                PROPHET FORECAST PNG — DROP IMAGE HERE
              </div>
            </div>
            <div style={{ padding: '12px 24px 20px' }}>
              <div className="chart-caption" style={{ borderTop: 'none', marginTop: 8, paddingTop: 0 }}>
                2025 MONTHLY FORECAST · MAE/RMSE/MAPE EVALUATED ON 2024 HOLDOUT · COVID CHANGEPOINTS ANNOTATED.
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
