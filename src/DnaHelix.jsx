// Decorative DNA double helix over a scrolling candlestick chart.
// Pure SVG + CSS. The helix is drawn as two sine-wave strands; sliding them
// along their axis reads as the helix rotating, so only transforms animate.

const AMP = 46 // helix radius
const WAVE = 150 // length of one full turn (keep in sync with App.css)
const VISIBLE = 520 // visible helix length before the end fades
const K = (2 * Math.PI) / WAVE
const HALF = WAVE / 2
// Start where strand A passes behind strand B, with one extra turn of
// overlap so the slide animation loops seamlessly.
const START = -WAVE / 4 - 3 * WAVE
const CHUNKS = 11

const strandY = (x, side) => side * AMP * Math.sin(K * x)

function segment(x0, side) {
  let d = ''
  for (let x = x0; x <= x0 + HALF + 0.01; x += 3) {
    d += `${d ? 'L' : 'M'}${x.toFixed(1)} ${strandY(x, side).toFixed(1)}`
  }
  return d
}

// Strand A is in front where cos(kx) > 0; strand B is in front elsewhere.
let front = ''
let back = ''
for (let i = 0; i < CHUNKS; i++) {
  const x0 = START + i * HALF
  const aInFront = i % 2 === 0
  front += segment(x0, aInFront ? 1 : -1)
  back += segment(x0, aInFront ? -1 : 1)
}

// Base pairs: each rung is split into two halves, one per strand.
let rungA = ''
let rungB = ''
for (let x = START + WAVE / 20; x < START + CHUNKS * HALF; x += WAVE / 10) {
  const y = strandY(x, 1)
  if (Math.abs(y) < 8) continue
  rungA += `M${x.toFixed(1)} 0V${(y * 0.86).toFixed(1)}`
  rungB += `M${x.toFixed(1)} 0V${(-y * 0.86).toFixed(1)}`
}

// Candlesticks: a seeded random walk that wraps so the scroll loop is seamless.
let seed = 11
const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647
const CANDLES = 28
const SPACING = 16
const CHART_WIDTH = CANDLES * SPACING
const closes = Array.from(
  { length: CANDLES },
  (_, i) => 250 + 55 * Math.sin((2 * Math.PI * i) / CANDLES) + (rand() - 0.5) * 50,
)
const candles = closes.map((close, i) => {
  const open = closes[(i - 1 + CANDLES) % CANDLES]
  const top = Math.min(open, close)
  const bottom = Math.max(open, close)
  return {
    x: i * SPACING,
    top,
    height: Math.max(bottom - top, 3),
    high: top - 6 - rand() * 18,
    low: bottom + 6 + rand() * 18,
    up: close < open, // smaller y = higher price
  }
})
const trend = closes
  .map((c, i) => `${i ? 'L' : 'M'}${i * SPACING + 4} ${c.toFixed(1)}`)
  .join('')

const particles = Array.from({ length: 18 }, (_, i) => ({
  x: rand() * 400,
  y: rand() * 440,
  r: 0.8 + rand() * 1.4,
  delay: -(i * 0.7).toFixed(1),
}))

function CandleSet({ offset }) {
  return (
    <g transform={`translate(${offset} 0)`}>
      {candles.map((c) => (
        <g key={c.x} className={c.up ? 'dna-candle-up' : 'dna-candle-down'}>
          <line x1={c.x + 4} x2={c.x + 4} y1={c.high} y2={c.low} />
          <rect x={c.x} y={c.top} width="8" height={c.height} rx="1" />
        </g>
      ))}
      <path className="dna-trend" d={trend} />
    </g>
  )
}

function DnaHelix() {
  return (
    <svg
      className="dna-art"
      viewBox="0 0 400 440"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="dna-fade-x" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.18" stopColor="#fff" />
          <stop offset="0.82" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="dna-fade-chart" maskContentUnits="objectBoundingBox">
          <rect width="1" height="1" fill="url(#dna-fade-x)" />
        </mask>
        <mask
          id="dna-fade-helix"
          maskUnits="userSpaceOnUse"
          x={-VISIBLE / 2}
          y={-AMP - 30}
          width={VISIBLE}
          height={2 * AMP + 60}
        >
          <rect
            x={-VISIBLE / 2}
            y={-AMP - 30}
            width={VISIBLE}
            height={2 * AMP + 60}
            fill="url(#dna-fade-x)"
          />
        </mask>
      </defs>

      <g mask="url(#dna-fade-chart)">
        <rect width="400" height="440" fill="none" />
        {[120, 200, 280, 360].map((y) => (
          <line key={y} className="dna-grid" x1="0" x2="400" y1={y} y2={y} />
        ))}
        <g className="dna-candles">
          <CandleSet offset={0} />
          <CandleSet offset={CHART_WIDTH} />
        </g>
      </g>

      {particles.map((p, i) => (
        <circle
          key={i}
          className="dna-particle"
          cx={p.x.toFixed(1)}
          cy={p.y.toFixed(1)}
          r={p.r.toFixed(1)}
          style={{ animationDelay: `${p.delay}s` }}
        />
      ))}

      <g transform="translate(200 220) rotate(-58)" mask="url(#dna-fade-helix)">
        <g className="dna-helix">
          <path className="dna-strand-back" d={back} />
          <path className="dna-rung-a" d={rungA} />
          <path className="dna-rung-b" d={rungB} />
          <path className="dna-strand-glow" d={front} />
          <path className="dna-strand" d={front} />
          <path className="dna-strand-texture" d={front} />
          <path className="dna-strand-highlight" d={front} />
        </g>
      </g>
    </svg>
  )
}

export default DnaHelix
