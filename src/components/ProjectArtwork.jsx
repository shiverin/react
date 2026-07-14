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
  const artwork = {
    oalpha: <OAlphaArtwork />,
    messenger: <MessengerArtwork />,
    cnn: <CNNArtwork />,
    gotalk: <GoTalkArtwork />,
    offline: <OfflineArtwork />,
    pdf: <PDFArtwork />,
    finance: <FinanceArtwork />,
  }[variant] || <OAlphaArtwork />;

  return <div className={`project-artwork ${className}`.trim()}>{artwork}</div>;
}
