
export default function Page1Overview() {
  return (
    <div className="page-container">
      {/* HERO */}
      <section className="hero" id="overview-hero">
        <h1 className="hero__heading">MMARAS</h1>
        <p className="hero__subtitle">
          Metro Manila Road Traffic Crash Analysis System · 2015–2024
        </p>
      </section>

      {/* KPI CARDS */}
      <section className="kpi-row" id="overview-kpis">
        <div className="kpi-card">
          <div className="kpi-card__label">Annual Incident Volume</div>
          <div className="kpi-card__value">88,101</div>
          <div className="kpi-card__desc">crashes in 2024</div>
        </div>
        <div className="kpi-card" style={{ borderLeftColor: '#FF6B6B' }}>
          <div className="kpi-card__label">Critical Severity</div>
          <div className="kpi-card__value">427</div>
          <div className="kpi-card__desc kpi-card__desc--red">Fatal Incidents</div>
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
            The Metro Manila Road Traffic Crash Analysis System (MMARAS) leverages
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
          <button className="btn-cta" onClick={() => {}}>
            Access Research Data 🗄
          </button>
        </div>

        <div className="layer-grid">
          <div className="layer-card" style={{ boxShadow: '0 0 20px rgba(30,144,255,0.08)' }}>
            <div className="layer-card__icon" style={{ background: 'rgba(30,144,255,0.15)', color: '#1E90FF' }}>
              📊
            </div>
            <div className="layer-card__name" style={{ color: '#1E90FF' }}>Descriptive</div>
            <div className="layer-card__desc">
              Mapping the 'what' and 'where' through historical data aggregation.
            </div>
          </div>
          <div className="layer-card" style={{ boxShadow: '0 0 20px rgba(255,159,67,0.08)' }}>
            <div className="layer-card__icon" style={{ background: 'rgba(255,159,67,0.15)', color: '#FF9F43' }}>
              🔍
            </div>
            <div className="layer-card__name" style={{ color: '#FF9F43' }}>Diagnostic</div>
            <div className="layer-card__desc">
              Identifying causal factors and environmental correlations for incidents.
            </div>
          </div>
          <div className="layer-card" style={{ boxShadow: '0 0 20px rgba(155,89,182,0.08)' }}>
            <div className="layer-card__icon" style={{ background: 'rgba(155,89,182,0.15)', color: '#9B59B6' }}>
              📈
            </div>
            <div className="layer-card__name" style={{ color: '#9B59B6' }}>Predictive</div>
            <div className="layer-card__desc">
              Forecasting future trends using ML-driven temporal analysis.
            </div>
          </div>
          <div className="layer-card" style={{ boxShadow: '0 0 20px rgba(46,204,113,0.08)' }}>
            <div className="layer-card__icon" style={{ background: 'rgba(46,204,113,0.15)', color: '#2ECC71' }}>
              🎯
            </div>
            <div className="layer-card__name" style={{ color: '#2ECC71' }}>Prescriptive</div>
            <div className="layer-card__desc">
              Optimizing resource allocation and suggesting policy adjustments.
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE POWER BI DASHBOARD */}
      <section className="chart-section" id="overview-dashboard">
        <div className="chart-container">
          <div className="chart-container__title">Interactive Dashboard</div>
          <div className="chart-container__subtitle">
            Live analytics powered by Power BI
          </div>

          <div style={{
            width: '100%',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(0,201,167,0.15)',
            boxShadow: '0 0 24px rgba(0,201,167,0.06)',
          }}>
            <iframe
              title="MMARAS Interactive Dashboard"
              width="100%"
              height="600"
              src="https://app.powerbi.com/reportEmbed?reportId=3e88c406-0f79-4b2c-94f5-61c3b850f564&autoAuth=true&ctid=cceb61f2-e867-476f-8597-b4cf22555bc4"
              frameBorder="0"
              allowFullScreen={true}
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </section>

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
