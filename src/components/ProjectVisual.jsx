// Decorative, technology-themed illustrations for the project cards.
// They use the card's --tone colour via currentColor and carry no data claims.

function Frame({ id, children }) {
  return (
    <svg
      viewBox="0 0 640 240"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={`${id}-dots`} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" className="pv-dot" />
        </pattern>
      </defs>
      <rect width="640" height="240" fill={`url(#${id}-dots)`} />
      {children}
    </svg>
  )
}

function Face() {
  return (
    <Frame id="pv-face">
      <ellipse cx="130" cy="130" rx="30" ry="38" className="pv-line pv-dashed" fill="none" opacity=".7" />
      <ellipse cx="510" cy="130" rx="30" ry="38" className="pv-line pv-dashed" fill="none" opacity=".7" />

      <ellipse cx="320" cy="120" rx="52" ry="64" className="pv-line" fill="none" strokeWidth="2" />
      <path d="M320 112v20h-7" className="pv-line" fill="none" strokeWidth="2" strokeLinecap="round" />
      <path d="M302 146q18 12 36 0" className="pv-line" fill="none" strokeWidth="2" strokeLinecap="round" />

      <path
        d="M246 64V44h20M374 44h20v20M394 176v20h-20M266 196h-20v-20"
        className="pv-tone"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g className="pv-tone-fill">
        <circle cx="300" cy="110" r="3.5" />
        <circle cx="340" cy="110" r="3.5" />
        <circle cx="320" cy="132" r="3.5" />
        <circle cx="302" cy="146" r="3.5" />
        <circle cx="338" cy="146" r="3.5" />
      </g>
      <rect x="246" y="18" width="62" height="20" rx="5" className="pv-tone pv-soft" strokeWidth="1.5" />
      <path d="M263 28l5 5 10-10" className="pv-tone" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  )
}

function Tree() {
  const leaves = [108, 152, 248, 292, 348, 392, 488, 532]
  return (
    <Frame id="pv-tree">
      <g className="pv-tone-fill" opacity=".35">
        {[[70, 40], [560, 52], [40, 190], [600, 176], [200, 28], [440, 30], [610, 110], [30, 112]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
        ))}
      </g>

      <g className="pv-line" fill="none" strokeWidth="1.5">
        <path d="M320 34L200 92M320 34L440 92" />
        <path d="M200 92L130 150M200 92L270 150M440 92L370 150M440 92L510 150" />
        <path d="M130 150L108 205M130 150L152 205M270 150L248 205M270 150L292 205M370 150L348 205M370 150L392 205M510 150L488 205M510 150L532 205" />
      </g>
      <path d="M320 34L440 92L370 150L348 205" className="pv-tone" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {[[320, 34], [200, 92], [440, 92], [130, 150], [270, 150], [370, 150], [510, 150]].map(([x, y]) => {
        const hot = (x === 320 && y === 34) || (x === 440 && y === 92) || (x === 370 && y === 150)
        return (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="9" className={hot ? "pv-tone pv-soft" : "pv-node"} strokeWidth="2" />
        )
      })}
      {leaves.map((x) => (
        <rect
          key={x}
          x={x - 7}
          y="198"
          width="14"
          height="14"
          rx="3"
          className={x === 348 ? "pv-tone pv-solid" : "pv-node"}
          strokeWidth="1.5"
        />
      ))}
    </Frame>
  )
}

function Forecast() {
  return (
    <Frame id="pv-line">
      <defs>
        <linearGradient id="pv-line-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity=".28" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="pv-line" strokeWidth="1">
        <path d="M60 30V200H590" fill="none" />
        <path d="M60 70H590M60 110H590M60 150H590" className="pv-faint" fill="none" />
      </g>

      <path d="M370 80C410 54 440 68 480 42S545 28 590 18V44C545 54 515 82 480 68C440 94 410 80 370 80Z" className="pv-tone-fill" opacity=".1" />
      <path d="M60 160C100 150 120 166 160 142S225 120 262 126S335 92 370 80V200H60Z" fill="url(#pv-line-fill)" />
      <path d="M60 160C100 150 120 166 160 142S225 120 262 126S335 92 370 80" className="pv-tone" fill="none" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M370 80C410 66 440 80 480 54S545 40 590 30" className="pv-tone" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 8" />
      <path d="M370 30V200" className="pv-line pv-dashed" fill="none" />
      <circle cx="370" cy="80" r="5" className="pv-tone pv-solid" strokeWidth="2" />
    </Frame>
  )
}

const visuals = { face: Face, tree: Tree, forecast: Forecast }

function ProjectVisual({ kind }) {
  const Visual = visuals[kind]
  return Visual ? <Visual /> : null
}

export default ProjectVisual
