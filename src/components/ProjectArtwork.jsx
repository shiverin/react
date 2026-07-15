function WindowChrome({ label }) {
  return (
    <div className="art-window__chrome">
      <div className="art-window__dots"><i /><i /><i /></div>
      <span>{label}</span>
      <i className="art-window__status" />
    </div>
  );
}

function OAlphaArtwork() {
  return (
    <div className="project-art project-art--oalpha">
      <WindowChrome label="portfolio-agent / live" />
      <div className="oalpha-grid">
        <div className="oalpha-stat">
          <small>Portfolio value</small>
          <strong>$128,735.10</strong>
          <span>+8.42% simulated</span>
        </div>
        <div className="oalpha-chart" aria-hidden="true">
          <svg viewBox="0 0 360 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="currentColor" stopOpacity=".35" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="chart-area" d="M0 102 C34 98, 42 70, 72 77 S118 94, 142 58 S186 72, 212 43 S266 59, 286 31 S330 42, 360 12 L360 120 L0 120 Z" />
            <path className="chart-line" d="M0 102 C34 98, 42 70, 72 77 S118 94, 142 58 S186 72, 212 43 S266 59, 286 31 S330 42, 360 12" />
          </svg>
          <div className="oalpha-chart__axis"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span></div>
        </div>
        <div className="oalpha-allocation">
          <div className="allocation-ring"><span>74%</span></div>
          <div className="allocation-legend">
            <p><i /> Equities <b>58%</b></p>
            <p><i /> ETFs <b>16%</b></p>
            <p><i /> Cash <b>26%</b></p>
          </div>
        </div>
        <div className="oalpha-rows">
          {["VOO", "NVDA", "MSFT"].map((ticker, index) => (
            <div key={ticker}><span>{ticker}</span><i><em style={{ width: `${78 - index * 16}%` }} /></i><b>+{(3.8 - index * .7).toFixed(1)}%</b></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrippiArtwork() {
  return (
    <div className="project-art project-art--trippi">
      <WindowChrome label="trippi.ai / berlin workspace" />
      <div className="trippi-layout">
        <aside className="trippi-days">
          <strong>BERLIN · 6 DAYS</strong>
          {["Arrival & Mitte", "Museum Island", "Kreuzberg", "Potsdam"].map((day, index) => (
            <span className={index === 1 ? "is-active" : ""} key={day}><i>0{index + 1}</i>{day}</span>
          ))}
          <small>4 travellers · synced</small>
        </aside>
        <section className="trippi-map">
          <div className="trippi-route" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="trippi-map__card"><small>DAY 02</small><strong>Museum Island</strong><span>5 places · 4.2 km</span></div>
          <div className="trippi-budget"><span>Trip budget</span><strong>€2,840</strong><i><em /></i></div>
        </section>
      </div>
    </div>
  );
}

function ApplyPilotArtwork() {
  return (
    <div className="project-art project-art--applypilot">
      <WindowChrome label="applypilot / campaign control" />
      <div className="applypilot-layout">
        <aside>
          <strong>AP</strong>
          <span className="is-active">Campaign</span><span>Evidence</span><span>Practice</span><span>Review</span>
        </aside>
        <section>
          <div className="applypilot-top"><div><small>ACTIVE CAMPAIGN</small><b>Backend &amp; Platform</b></div><span>Guardrails on</span></div>
          <div className="applypilot-stats"><div><small>Discovered</small><b>48</b></div><div><small>Matched</small><b>17</b></div><div><small>Needs review</small><b>03</b></div></div>
          <div className="applypilot-jobs">
            {["Platform Engineer", "Software Engineer", "Backend Intern"].map((role, index) => (
              <div key={role}><i>{String.fromCharCode(65 + index)}</i><span><b>{role}</b><small>{["Greenhouse", "Lever", "Ashby"][index]} · evidence matched</small></span><em>{[94, 89, 84][index]}%</em></div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function SignalArtwork() {
  return (
    <div className="project-art project-art--signal">
      <WindowChrome label="signal / cultural markets" />
      <div className="signal-layout">
        <div className="signal-question"><small>OPEN FORECAST · CULTURE</small><strong>Will spatial computing become a mainstream creative medium by 2028?</strong><div><span>YES · 64%</span><span>NO · 36%</span></div></div>
        <div className="signal-receipts"><small>RECENT RECEIPTS</small>{["Immersive concerts", "AI-native cinema", "Wearable interfaces"].map((item, index) => <span key={item}><i>0{index + 1}</i><b>{item}</b><em>+{18 - index * 3}</em></span>)}</div>
      </div>
    </div>
  );
}

function BrainrotArtwork() {
  return (
    <div className="project-art project-art--brainrot">
      <WindowChrome label="brainrot idle defense / wave 18" />
      <div className="brainrot-stage">
        <div className="brainrot-hud"><span>WAVE <b>18</b></span><span>COINS <b>12.4K</b></span><span>BASE <b>92%</b></span></div>
        <div className="brainrot-path"><i /><i /><i /><i /><i /></div>
        <div className="brainrot-tower brainrot-tower--one"><i /><span /></div>
        <div className="brainrot-tower brainrot-tower--two"><i /><span /></div>
        <div className="brainrot-enemies"><i /><i /><i /><i /></div>
        <div className="brainrot-bar"><span>LOBBY</span><b>BATTLE</b><span>UNITS</span></div>
      </div>
    </div>
  );
}

function BloxLandsArtwork() {
  return (
    <div className="project-art project-art--bloxlands">
      <WindowChrome label="bloxlands / world START" />
      <div className="bloxlands-stage">
        <div className="bloxlands-sky"><i /><i /></div>
        <div className="bloxlands-island">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div>
        <div className="bloxlands-tree"><i /><span /><span /><span /></div>
        <div className="bloxlands-lock"><i /><span>PRO</span></div>
        <div className="bloxlands-toolbar">{["MINE", "PLANT", "HARVEST", "LOCK"].map((item, index) => <span className={index === 0 ? "is-active" : ""} key={item}>{item}</span>)}</div>
      </div>
    </div>
  );
}

function LaneClashArtwork() {
  return (
    <div className="project-art project-art--laneclash">
      <WindowChrome label="lane clash / pvp arena" />
      <div className="laneclash-stage">
        <div className="laneclash-score"><span>RIVAL <b>1840</b></span><i>02:14</i><span>YOU <b>2010</b></span></div>
        <div className="laneclash-arena"><div className="lane"><i className="tower" /><i className="unit unit--a" /><i className="unit unit--b" /></div><div className="lane"><i className="tower" /><i className="unit unit--c" /><i className="unit unit--d" /></div></div>
        <div className="laneclash-deck">{[3, 5, 4, 7].map((cost, index) => <span key={`${cost}-${index}`}><i>{cost}</i><b>{["VANGUARD", "ARC MAGE", "WARDEN", "TITAN"][index]}</b></span>)}</div>
      </div>
    </div>
  );
}

function KplerArtwork() {
  return (
    <div className="project-art project-art--kpler">
      <WindowChrome label="commodity api expert / bounded run" />
      <div className="kpler-layout">
        <aside>
          <small>ANALYST QUESTION</small>
          <strong>Compare flows by market and period</strong>
          <span>Intent routed to an allowlisted endpoint</span>
        </aside>
        <section>
          <div className="kpler-route">
            <span><i>01</i>Route</span><b>→</b><span><i>02</i>Validate</span><b>→</b><span><i>03</i>Execute</span>
          </div>
          <div className="kpler-contract">
            <small>NORMALIZED OUTPUT</small>
            <div><span>period</span><span>entity</span><span>value</span><span>unit</span></div>
            {["2026-Q1", "2026-Q2", "2026-Q3"].map((period, index) => (
              <div key={period}><b>{period}</b><b>Market {String.fromCharCode(65 + index)}</b><b>{[42.8, 38.4, 51.2][index]}</b><b>kt</b></div>
            ))}
          </div>
          <p><i /> Credentials isolated · parameters validated · outputs redacted</p>
        </section>
      </div>
    </div>
  );
}

function MessengerArtwork() {
  return (
    <div className="project-art project-art--messenger">
      <WindowChrome label="messages / private" />
      <div className="messenger-layout">
        <aside className="messenger-sidebar">
          <div className="messenger-user"><i /><span><b>Messages</b><small>4 conversations</small></span></div>
          {["Aisha", "Jia Jun", "Design Lab", "NUS Team"].map((name, index) => (
            <div className={`messenger-thread ${index === 0 ? "is-active" : ""}`} key={name}>
              <i>{name.slice(0, 1)}</i><span><b>{name}</b><small>{index === 0 ? "typing…" : "Last message"}</small></span>
            </div>
          ))}
        </aside>
        <section className="messenger-chat">
          <div className="messenger-chat__header"><i>A</i><span><b>Aisha</b><small>online</small></span></div>
          <div className="messenger-bubbles">
            <p className="bubble bubble--in">The portfolio agent is looking smooth.</p>
            <p className="bubble bubble--out">Just connected the live WebSocket state.</p>
            <p className="bubble bubble--in">Ship it ✦</p>
          </div>
          <div className="messenger-input"><span>Write a message…</span><i>→</i></div>
        </section>
      </div>
    </div>
  );
}

function CNNArtwork() {
  const bars = [54, 70, 63, 84, 91, 98];
  return (
    <div className="project-art project-art--cnn">
      <WindowChrome label="experiment / model-06" />
      <div className="cnn-layout">
        <div className="cnn-sign-stage">
          <div className="traffic-sign"><span>50</span></div>
          <div className="cnn-scan-line" />
          <span className="cnn-label">Speed limit (50 km/h)</span>
          <strong>98.97%</strong>
        </div>
        <div className="cnn-metrics">
          <div className="cnn-metrics__title"><span>Architecture study</span><b>6 models</b></div>
          <div className="cnn-bars">
            {bars.map((bar, index) => <i key={bar}><em style={{ height: `${bar}%` }} /><small>0{index + 1}</small></i>)}
          </div>
          <div className="cnn-note"><span>Best model</span><b>3× Conv · Pool · Dropout</b></div>
        </div>
      </div>
    </div>
  );
}

function GoTalkArtwork() {
  return (
    <div className="project-art project-art--gotalk">
      <WindowChrome label="gotalk / communities" />
      <div className="gotalk-layout">
        <aside>
          <strong>g/technology</strong>
          <span>g/machinelearning</span>
          <span>g/buildinpublic</span>
          <span>g/quant</span>
        </aside>
        <section>
          <div className="gotalk-search">Search communities</div>
          {["What are you building this week?", "A practical guide to RAG evaluation", "Showcase: local-first coding app"].map((title, index) => (
            <article key={title}>
              <div className="vote-stack"><b>↑</b><span>{42 - index * 9}</span><b>↓</b></div>
              <div><small>g/{index === 0 ? "buildinpublic" : index === 1 ? "machinelearning" : "technology"}</small><strong>{title}</strong><span>{12 - index * 2} comments</span></div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

function OfflineArtwork() {
  return (
    <div className="project-art project-art--offline">
      <WindowChrome label="offline-leetcode / local" />
      <div className="offline-layout">
        <aside>
          <b>Problems</b>
          <span className="is-active">01 Two Sum</span>
          <span>02 Add Two Numbers</span>
          <span>03 Longest Substring</span>
          <span>04 Median Arrays</span>
        </aside>
        <section>
          <div className="code-tabs"><span>solution.py</span><i>Python</i></div>
          <pre><code><em>def</em>{" two_sum(nums, target):\n  seen = {}\n  "}<em>for</em>{" i, value "}<em>in</em>{" enumerate(nums):\n    pair = target - value\n    "}<em>if</em>{" pair "}<em>in</em>{" seen:\n      "}<em>return</em>{" [seen[pair], i]"}</code></pre>
          <div className="offline-run"><span>All tests passed</span><b>Run locally →</b></div>
        </section>
      </div>
    </div>
  );
}

function PDFArtwork() {
  return (
    <div className="project-art project-art--pdf">
      <WindowChrome label="pdfiledit / workspace" />
      <div className="pdf-layout">
        <aside>
          {['Edit', 'Sign', 'Merge', 'Convert'].map((item, index) => <span className={index === 0 ? 'is-active' : ''} key={item}><i>{index + 1}</i>{item}</span>)}
        </aside>
        <div className="pdf-stage">
          <div className="pdf-page pdf-page--back"><i /><i /><i /><i /></div>
          <div className="pdf-page pdf-page--front"><b>DOCUMENT</b><i /><i /><i /><i /><span>Zhao Shizhen</span></div>
          <div className="pdf-toolbar"><span>−</span><b>86%</b><span>+</span></div>
        </div>
      </div>
    </div>
  );
}

function FinanceArtwork() {
  return (
    <div className="project-art project-art--finance">
      <WindowChrome label="finance / portfolio" />
      <div className="finance-layout">
        <div className="finance-ticker"><span>NASDAQ</span><strong>AAPL</strong><b>$213.07</b><small>+1.83%</small></div>
        <div className="finance-chart">
          <svg viewBox="0 0 360 130" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 102 C30 104 34 77 66 81 S108 49 139 62 S184 41 211 54 S260 19 286 34 S331 13 360 20" />
          </svg>
          <div><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span></div>
        </div>
        <div className="finance-actions"><span>Buy</span><span>Sell</span></div>
      </div>
    </div>
  );
}

export default function ProjectArtwork({ variant, className = "" }) {
  const Artwork = {
    trippi: TrippiArtwork,
    oalpha: OAlphaArtwork,
    applypilot: ApplyPilotArtwork,
    signal: SignalArtwork,
    brainrot: BrainrotArtwork,
    bloxlands: BloxLandsArtwork,
    laneclash: LaneClashArtwork,
    kpler: KplerArtwork,
    messenger: MessengerArtwork,
    cnn: CNNArtwork,
    gotalk: GoTalkArtwork,
    offline: OfflineArtwork,
    pdf: PDFArtwork,
    finance: FinanceArtwork,
  }[variant] || OAlphaArtwork;

  return <div className={`project-artwork ${className}`.trim()}><Artwork /></div>;
}
