export default function Page3GISPolicy() {
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

      {/* ===== GIS PLACEHOLDER CARDS ===== */}
      <section id="gis-maps">
        <div className="three-col">
          {/* Card 1: District Fatal Choropleth — LIVE INTERACTIVE MAP */}
          <div className="gis-card" style={{ gridColumn: '1 / -1' }}>
            <div className="gis-card__header">
              <div className="gis-card__icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="gis-card__tag">SPATIAL LAYER 01 · INTERACTIVE</span>
            </div>

            <div style={{
              width: '100%',
              height: '500px',
              borderRadius: '8px',
              overflow: 'hidden',
              margin: '0 0 8px 0',
              border: '1px solid rgba(0,201,167,0.15)',
            }}>
              <iframe
                src="/GIS_Map1_District_Fatal_Choropleth.html"
                title="GIS Map 1 · District Fatal Choropleth"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                loading="lazy"
              />
            </div>

            <div className="gis-card__body">
              <div className="gis-card__title">GIS Map 1 · District Fatal Choropleth</div>
              <div className="gis-card__subtitle">Central &amp; Southern Districts = Highest Risk · Pan &amp; zoom to explore district boundaries</div>
            </div>
          </div>

          {/* Card 2: AADT Corridor Exposure */}
          <div className="gis-card">
            <div className="gis-card__header">
              <div className="gis-card__icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h4l3-9 4 18 3-9h4" />
                </svg>
              </div>
              <span className="gis-card__tag">EXPOSURE LAYER 02</span>
            </div>

            <div className="gis-card__placeholder">
              <div className="gis-card__placeholder-icon">🛣️</div>
              <span className="gis-card__filename">AADT_CORRIDOR_MATRIX</span>
            </div>

            <div className="gis-card__body">
              <div className="gis-card__title">GIS Map 2 · AADT Corridor Exposure · 20 Roads</div>
              <div className="gis-card__subtitle">EDSA: 419,952 vehicles/day</div>
            </div>
          </div>

          {/* Card 3: Prophet 2025 Predictive */}
          <div className="gis-card">
            <div className="gis-card__header">
              <div className="gis-card__icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <span className="gis-card__tag">PREDICTION LAYER 03</span>
            </div>

            <div className="gis-card__placeholder">
              <div className="gis-card__placeholder-icon">📊</div>
              <span className="gis-card__filename">PROPHET_2025_T5</span>
            </div>

            <div className="gis-card__body">
              <div className="gis-card__title">GIS Map 3 + Prophet 2025 · Predictive City Risk Choropleth</div>
              <div className="gis-card__subtitle">17 Cities</div>
            </div>
          </div>
        </div>

        <p className="italic-caption">
          City proportions held constant at 2022–2024 average. GIS Map 2 is a traffic exposure proxy, not a crash density map.
        </p>
      </section>

      {/* ===== POWER BI DASHBOARD ===== */}
      <section className="section" id="gis-powerbi">
        <h2 className="section__title" style={{ fontSize: '1.5rem' }}>Explore the Live Dashboard</h2>
        <p className="section__subtitle" style={{ marginBottom: 28 }}>
          Power BI · All four analytics layers · Use slicers to filter by year, city, and district.
        </p>

        <div className="powerbi-placeholder">
          {/* Power BI icon */}
          <div className="powerbi-placeholder__icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="28" width="10" height="28" rx="2" fill="#00C9A7" opacity="0.5" />
              <rect x="22" y="18" width="10" height="38" rx="2" fill="#00C9A7" opacity="0.7" />
              <rect x="36" y="8" width="10" height="48" rx="2" fill="#00C9A7" opacity="0.85" />
              <rect x="50" y="14" width="10" height="42" rx="2" fill="#00C9A7" />
              <circle cx="56" cy="10" r="4" fill="#1E90FF" />
            </svg>
          </div>
          <div className="powerbi-placeholder__title">Power BI Embedded Dashboard</div>
          <div className="powerbi-placeholder__desc">
            (Interactive · Published via Power BI Service · Session Token Required for Data Access)
          </div>
          <a href="#" className="btn-dashboard">
            Open Full Dashboard ↗
          </a>
        </div>
      </section>

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
          {/* Card 1 */}
          <div className="policy-card">
            <div className="policy-card__icon">🚨</div>
            <div className="policy-card__title">Enforce District Zones</div>
            <div className="policy-card__desc">
              Central and Southern districts need priority enforcement based on current risk mapping density.
            </div>
          </div>

          {/* Card 2 */}
          <div className="policy-card">
            <div className="policy-card__icon">🌙</div>
            <div className="policy-card__title">Deploy Night Patrols</div>
            <div className="policy-card__desc">
              10 PM to 3 AM fatal danger window identified as the critical intervention period for patrol dispatch.
            </div>
          </div>

          {/* Card 3 */}
          <div className="policy-card">
            <div className="policy-card__icon">🏍️</div>
            <div className="policy-card__title">Motorcycle Safety Campaign</div>
            <div className="policy-card__desc">
              33,639 cases, highest fatal rate of all vehicle types. Specific protective gear mandates recommended.
            </div>
          </div>

          {/* Card 4 */}
          <div className="policy-card">
            <div className="policy-card__icon">🎓</div>
            <div className="policy-card__title">Youth Intervention Program</div>
            <div className="policy-card__desc">
              Age 18–34 highest fatal crash bracket every year. Targeted awareness at universities and workplaces.
            </div>
          </div>

          {/* Card 5 — centered */}
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
            <p style={{
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
            }}>
              © 2024 MMARAS Research Project. All Rights Reserved.
            </p>
          </div>
          <div className="footer__right">
            <div className="footer__left-links" style={{ justifyContent: 'flex-end' }}>
              <a href="#">Team Members</a>
              <a href="#">University Details</a>
              <a href="#">Data Privacy</a>
              <a href="#">Methodology</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
