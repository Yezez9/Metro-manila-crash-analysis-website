import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, Cell, ResponsiveContainer, ReferenceArea, Label,
  ReferenceLine
} from 'recharts';

const trendData = [
  { year: '2015', gt: 82000, fatal: 380, nf: 18000 },
  { year: '2016', gt: 84000, fatal: 390, nf: 19000 },
  { year: '2017', gt: 86000, fatal: 400, nf: 20000 },
  { year: '2018', gt: 87000, fatal: 410, nf: 21000 },
  { year: '2019', gt: 88000, fatal: 420, nf: 22000 },
  { year: '2020', gt: 48000, fatal: 280, nf: 12000 },
  { year: '2021', gt: 43000, fatal: 260, nf: 11000 },
  { year: '2022', gt: 75000, fatal: 370, nf: 18000 },
  { year: '2023', gt: 85000, fatal: 415, nf: 21000 },
  { year: '2024', gt: 88101, fatal: 427, nf: 21910 },
];

const topCities = [
  { city: 'Quezon City', crashes: 34716, pct: '39.4%', top: true },
  { city: 'Makati City', crashes: 12102, pct: '13.7%', top: false },
  { city: 'Manila City', crashes: 10841, pct: '12.3%', top: false },
  { city: 'Pasig City', crashes: 8230, pct: '9.3%', top: false },
  { city: 'Taguig City', crashes: 7482, pct: '8.5%', top: false },
];

const otherCities = [
  { city: 'Caloocan', crashes: 2800 },
  { city: 'Parañaque', crashes: 2500 },
  { city: 'Valenzuela', crashes: 2200 },
  { city: 'Marikina', crashes: 1800 },
  { city: 'Las Piñas', crashes: 1500 },
  { city: 'Muntinlupa', crashes: 1400 },
  { city: 'Mandaluyong', crashes: 1200 },
  { city: 'San Juan', crashes: 900 },
  { city: 'Malabon', crashes: 800 },
  { city: 'Navotas', crashes: 600 },
  { city: 'Pateros', crashes: 400 },
  { city: 'Pasay', crashes: 332 },
];

const allCities = [...topCities, ...otherCities.map(c => ({ ...c, pct: '', top: false }))];

const CustomTooltipLine = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#141C38',
        border: '1px solid rgba(0,201,167,0.3)',
        borderRadius: '8px',
        padding: '12px 16px',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.75rem',
      }}>
        <p style={{ color: '#fff', marginBottom: '8px', fontWeight: 600 }}>{label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color, margin: '4px 0' }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomTooltipBar = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div style={{
        background: '#141C38',
        border: '1px solid rgba(0,201,167,0.3)',
        borderRadius: '8px',
        padding: '12px 16px',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.75rem',
      }}>
        <p style={{ color: '#fff', fontWeight: 600 }}>{data.city}</p>
        <p style={{ color: '#00C9A7', margin: '4px 0' }}>
          {data.crashes.toLocaleString()} crashes
        </p>
      </div>
    );
  }
  return null;
};

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

      {/* 10-YEAR CRASH TREND LINE CHART */}
      <section className="chart-section" id="overview-trend">
        <div className="chart-container">
          <div className="chart-container__title">Temporal Incident Velocity</div>
          <div className="chart-container__subtitle">
            Aggregated crash counts from 2015 through 2024
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trendData} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis
                dataKey="year"
                stroke="#8C9BB5"
                tick={{ fill: '#8C9BB5', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11 }}
              />
              <YAxis
                stroke="#8C9BB5"
                tick={{ fill: '#8C9BB5', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11 }}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltipLine />} />
              <Legend
                align="right"
                verticalAlign="top"
                wrapperStyle={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.7rem',
                  paddingBottom: '16px',
                }}
              />
              {/* COVID-19 shaded band */}
              <ReferenceArea
                x1="2020"
                x2="2021"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.1)"
                strokeDasharray="3 3"
              >
                <Label
                  value="COVID-19 DIP 2020–2021"
                  position="insideTop"
                  style={{
                    fill: '#8C9BB5',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 10,
                    letterSpacing: '1px',
                  }}
                />
              </ReferenceArea>
              <Line
                type="monotone"
                dataKey="gt"
                name="GRAND TOTAL"
                stroke="#00C9A7"
                strokeWidth={2.5}
                dot={{ r: 4, fill: '#00C9A7' }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="fatal"
                name="FATAL"
                stroke="#FF6B6B"
                strokeWidth={2}
                dot={{ r: 3, fill: '#FF6B6B' }}
              />
              <Line
                type="monotone"
                dataKey="nf"
                name="NON-FATAL"
                stroke="#8C9BB5"
                strokeWidth={2}
                dot={{ r: 3, fill: '#8C9BB5' }}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* GEOSPATIAL DISTRIBUTION BAR CHART */}
      <section className="chart-section" id="overview-geo">
        <div className="chart-container">
          <div className="chart-container__title">Geospatial Distribution</div>
          <div className="chart-container__subtitle">
            Ranked Bar Chart: 17 Cities by Total Crashes
          </div>

          <ResponsiveContainer width="100%" height={Math.max(500, allCities.length * 36)}>
            <BarChart
              data={allCities}
              layout="vertical"
              margin={{ top: 5, right: 100, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" horizontal={false} />
              <XAxis
                type="number"
                stroke="#8C9BB5"
                tick={{ fill: '#8C9BB5', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <YAxis
                type="category"
                dataKey="city"
                width={110}
                stroke="#8C9BB5"
                tick={{ fill: '#8C9BB5', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11 }}
              />
              <Tooltip content={<CustomTooltipBar />} />
              <Bar dataKey="crashes" radius={[0, 4, 4, 0]} barSize={20}>
                {allCities.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.top ? '#00C9A7' : '#3a4563'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Top city annotation */}
          <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {topCities.filter(c => c.top).map(c => (
              <span key={c.city} style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.72rem',
                color: '#00C9A7',
                letterSpacing: '1px',
              }}>
                {c.crashes.toLocaleString()} | {c.pct}
              </span>
            ))}
          </div>

          <div className="city-note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8C9BB5" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            Analysis includes 12 additional municipalities and cities within NCR.
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
