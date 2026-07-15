// 7-Day Optimal Breathing Challenge — recreated from optme-7-day-challenge-breathing repo (src/App.tsx).
// Uses PARENT brand tokens (navy #132E41, orange #EF7D13) + the page's cyan accent #5ce1e6.
const C = { navy: '#132E41', orange: '#EF7D13', peri: '#7592BE', pink: '#F09192', peach: '#F3DDD0', dark: '#222222', cyan: '#5ce1e6', navyDeep: '#0C1F2D' };
const dcFont = "'Montserrat', ui-sans-serif, system-ui, sans-serif";
const eyebrow = { color: C.orange, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 16px' };

function DcCountdown() {
  const target = new Date('2026-04-06T07:00:00-05:00').getTime();
  const calc = () => { const d = Math.max(0, target - Date.now()); return { Days: Math.floor(d / 864e5), Hrs: Math.floor(d % 864e5 / 36e5), Min: Math.floor(d % 36e5 / 6e4), Sec: Math.floor(d % 6e4 / 1e3) }; };
  const [t, setT] = React.useState(calc);
  React.useEffect(() => { const i = setInterval(() => setT(calc()), 1000); return () => clearInterval(i); }, []);
  return (
    <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, overflow: 'hidden', width: 'fit-content' }}>
      {Object.entries(t).map(([label, v], i, arr) => (
        <div key={label} style={{ textAlign: 'center', padding: '10px 20px', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
          <span style={{ fontSize: 24, fontWeight: 900, color: C.orange, display: 'block', lineHeight: 1 }}>{String(v).padStart(2, '0')}</span>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4, display: 'block', fontWeight: 600 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function DcHeader() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: C.navy, padding: '14px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
      <img src="assets/logo-white.png" alt="Optimizing Me – JJ Ruescas" style={{ height: 40 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <span>April 6–12, 2026</span><span style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 99 }}></span>
        <span>⏱ 15-min daily practice</span><span style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 99 }}></span>
        <span>🎙 Live guidance & Q&A</span><span style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 99 }}></span>
        <span style={{ color: C.orange }}>Limited Spots</span>
      </div>
      <a href="#pricing" style={{ background: C.orange, color: '#fff', padding: '10px 24px', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: '0 10px 15px rgba(239,125,19,0.2)' }}>Join the Challenge — $30</a>
    </header>
  );
}

function DcHero() {
  return (
    <section style={{ position: 'relative', minHeight: '92vh', background: C.navy, overflow: 'hidden', display: 'grid', gridTemplateColumns: '52% 48%', alignItems: 'center' }}>
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" style={{ position: 'absolute', bottom: -80, left: -80, opacity: 0.1 }}>
        <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.5"/><circle cx="200" cy="200" r="130" stroke="white" strokeWidth="0.5"/><circle cx="200" cy="200" r="80" stroke="white" strokeWidth="0.5"/>
        <line x1="200" y1="20" x2="200" y2="380" stroke="white" strokeWidth="0.5"/><line x1="20" y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.5"/>
      </svg>
      <div style={{ position: 'relative', zIndex: 10, padding: '80px 48px', textAlign: 'center' }}>
        <p style={{ color: C.cyan, fontSize: 12, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0 0 20px' }}>7-Day Functional Breathing Live Course</p>
        <h1 style={{ color: '#fff', fontWeight: 900, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 32px', fontSize: 56 }}>
          YOUR <span style={{ color: C.orange }}>NERVOUS SYSTEM</span><br />DRIVES YOUR PERFORMANCE
        </h1>
        <p style={{ color: C.cyan, fontSize: 34, fontWeight: 300, margin: '0 0 40px', lineHeight: 1.25 }}>
          In <strong style={{ fontWeight: 800, color: '#fff' }}>7 days,</strong> you will<br /><strong style={{ fontWeight: 800, color: '#fff' }}>learn to regulate</strong> it
        </p>
        <a href="#pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: C.orange, color: '#fff', padding: '20px 48px', borderRadius: 999, fontWeight: 900, fontSize: 20, textDecoration: 'none', boxShadow: '0 25px 50px rgba(239,125,19,0.4)' }}>Reserve My Spot — $30 →</a>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, fontWeight: 500, margin: '16px 0 0' }}>🇺🇸 7AM CDT · 🇧🇴 8AM BOL · 🇬🇧 1PM UK · 🇬🇷 3PM Athens</p>
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}><DcCountdown /></div>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'rgba(255,255,255,0.4)', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          <span style={{ width: 8, height: 8, background: C.pink, borderRadius: 99 }}></span>16 spots remaining
        </div>
      </div>
      <div style={{ position: 'relative', height: '100%', minHeight: 600 }}>
        <img src="assets/hero-jj.jpg" alt="JJ Ruescas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(19,46,65,0.6), rgba(19,46,65,0.2), transparent)' }}></div>
        <div style={{ position: 'absolute', top: '50%', right: '28%', transform: 'translate(50%,-50%)', zIndex: 20 }}>
          <button type="button" style={{ width: 64, height: 64, background: C.orange, borderRadius: 999, border: 'none', display: 'grid', placeItems: 'center', color: '#fff', cursor: 'pointer', boxShadow: '0 0 0 12px rgba(239,125,19,0.15), 0 0 0 24px rgba(239,125,19,0.06)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 4 }}><polygon points="6 4 20 12 6 20 6 4"/></svg>
          </button>
        </div>
        <p style={{ position: 'absolute', bottom: '32%', right: '8%', zIndex: 20, color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 700, textAlign: 'right', letterSpacing: '0.05em' }}>Watch JJ explain what changes in 7 days →</p>
      </div>
    </section>
  );
}

function DcProofBar() {
  return (
    <div style={{ background: '#fff', borderBottom: '1px solid #f1f5f9', padding: '24px 48px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 64 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#475569' }}><span style={{ color: '#FFB800', letterSpacing: '0.1em' }}>★★★★★</span><span><strong style={{ color: C.navy, fontWeight: 800 }}>4.9/5</strong> average rating</span></div>
      <div style={{ width: 1, height: 32, background: '#e2e8f0' }}></div>
      <div style={{ fontSize: 14, color: '#475569' }}><strong style={{ color: C.navy, fontWeight: 800 }}>150+</strong> participants in 8+ countries</div>
      <div style={{ width: 1, height: 32, background: '#e2e8f0' }}></div>
      <div style={{ fontSize: 14, color: '#475569' }}>Science-grounded <strong style={{ color: C.navy, fontWeight: 800 }}>Functional Breathing</strong> Live Course</div>
    </div>
  );
}

const PAINS = [
  ['assets/phone.jpg', 'You grab your phone first', "Your attention is gone before you're even out of bed"],
  ['assets/coffee.jpg', 'You reach for coffee next', "It's how you survive the morning."],
  ['assets/tired.jpg', 'Energy crashes by afternoon', 'Focus fades. The cycle repeats'],
  ['assets/phones.jpg', "You've tried to fix it", 'Apps, routines… nothing sticks'],
];
function DcPain() {
  return (
    <section style={{ background: C.navy, padding: '80px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={eyebrow}>Does this feel familiar?</p>
          <h2 style={{ color: '#fff', fontWeight: 900, margin: 0, fontSize: 52, textTransform: 'uppercase', letterSpacing: '0.05em' }}>YOU WAKE UP…</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400, fontSize: 40, margin: '8px 0 0' }}>but your day is already running you</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {PAINS.map(([img, title, desc]) => (
            <div key={title} style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden' }}>
              <img src={img} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #132E41, rgba(19,46,65,0.6), transparent)' }}></div>
              <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center' }}>
                <h3 style={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 18, margin: '0 0 8px' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SCIENCE = [
  ['01', 'Breathe to slow the stress response', "Controlled exhales signal your brain to switch from urgency to calm. You don't need hours — you need the right input."],
  ['02', 'Breathe to stop the false alarm', "Fast breathing signals danger. Slowing it down tells your brain: 'You are safe.' Anxiety lives in your rhythm, not just your mind."],
  ['03', 'Breathe to raise your threshold', "If you can't hold your breath for 20 seconds, your system is on high alert. Training this builds real resilience under pressure."],
];
function DcScience() {
  return (
    <section style={{ background: '#fff', padding: '96px 48px' }}>
      <div style={{ maxWidth: 896, margin: '0 auto 64px', textAlign: 'center' }}>
        <p style={eyebrow}>THE SCIENCE</p>
        <h2 style={{ color: C.navy, fontSize: 48, fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 24px' }}>What's actually happening?</h2>
        <p style={{ color: '#475569', fontSize: 18, lineHeight: 1.6, margin: 0 }}>Your system isn't broken — it's stuck in survival mode.<br />Your breath is the fastest way to reset it — and Functional Breathing is the science-backed method to do it.</p>
      </div>
      <div style={{ maxWidth: 1152, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
        {SCIENCE.map(([id, title, desc]) => (
          <div key={id} style={{ background: '#f8fafc', border: '1px solid #f1f5f9', borderTop: `4px solid ${C.orange}`, borderRadius: 16, padding: 32 }}>
            <div style={{ width: 44, height: 44, background: 'rgba(239,125,19,0.1)', color: C.navy, borderRadius: 8, display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 14, marginBottom: 24 }}>{id}</div>
            <h3 style={{ color: C.navy, fontWeight: 800, fontSize: 18, margin: '0 0 12px', lineHeight: 1.3 }}>{title}</h3>
            <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  [1, '📋', 'Sign Up', 'Reserve your spot. Get instant access to the challenge details and the Optimizing Me Tribe.'],
  [2, '🎙', 'Show Up Live', 'Join JJ on Zoom every morning for 15 min. 7AM CDT · 8AM BOL · 1PM UK · 3PM Athens.'],
  [3, '🎧', 'Ask JJ Anything', 'Live Q&A after each session — like having a personal coach in your corner every morning.'],
  [4, '⚡', 'Practice Daily', 'Reinforce with recordings and the tools JJ provides. Build your personal breathing protocol.'],
  [5, '🔥', 'Transform', 'By Day 7, breathing becomes your most powerful daily tool — automatic, fast, and yours forever.'],
];
function DcProcess() {
  return (
    <section style={{ background: `linear-gradient(to bottom, ${C.navyDeep}, #1a4260)`, padding: '96px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={eyebrow}>THE PROCESS</p>
          <h2 style={{ color: '#fff', fontSize: 48, fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 16px' }}>How the Functional Breathing Course Works</h2>
          <p style={{ color: C.cyan, fontWeight: 500, margin: 0 }}>7 days. 15 minutes each morning. A system that actually sticks.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16 }}>
          {STEPS.map(([num, icon, title, desc]) => (
            <div key={num} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 24, textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: 0, right: 8, fontSize: 96, fontWeight: 900, color: 'rgba(239,125,19,0.05)', lineHeight: 1, userSelect: 'none' }}>{num}</div>
              <div style={{ width: 44, height: 44, background: C.orange, borderRadius: 999, display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 900, fontSize: 18, margin: '0 auto 20px', boxShadow: '0 10px 15px rgba(239,125,19,0.4)', position: 'relative', zIndex: 10 }}>{num}</div>
              <span style={{ fontSize: 36, display: 'block', marginBottom: 16, position: 'relative', zIndex: 10 }}>{icon}</span>
              <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 18, margin: '0 0 12px', position: 'relative', zIndex: 10 }}>{title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 10 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DcMidCta() {
  return (
    <div style={{ background: C.orange, padding: '48px', textAlign: 'center' }}>
      <h2 style={{ color: '#fff', fontSize: 30, fontWeight: 900, margin: '0 0 8px' }}>Your next 7 mornings can be different.</h2>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, margin: '0 0 32px' }}>Functional Breathing Live Course &nbsp;·&nbsp; 15 min each morning &nbsp;·&nbsp; Live with JJ Ruescas</p>
      <a href="#pricing" style={{ background: '#fff', color: C.orange, padding: '16px 40px', borderRadius: 999, fontWeight: 900, fontSize: 18, textDecoration: 'none', boxShadow: '0 20px 25px rgba(0,0,0,0.1)', display: 'inline-block' }}>Reserve My Spot — $30 →</a>
    </div>
  );
}

function DcAbout() {
  const stats = [['150+', 'Participants'], ['3', 'Continents'], ['7', 'Editions'], ['4.9★', 'Rating']];
  return (
    <section style={{ background: C.navy, padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '420px 1fr', gap: 64, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <img src="assets/jj-profile-opt.jpg" alt="JJ Ruescas" style={{ width: '100%', borderRadius: 24, aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'top', boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }} />
          <div style={{ position: 'absolute', bottom: -20, right: -20, width: 128, height: 128, background: 'rgba(239,125,19,0.2)', borderRadius: 999, filter: 'blur(24px)' }}></div>
        </div>
        <div>
          <p style={eyebrow}>HUMAN OPTIMIZATION STRATEGIST</p>
          <h2 style={{ color: '#fff', fontSize: 48, fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 32px' }}>JJ Ruescas</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: 'rgba(255,255,255,0.75)', fontSize: 18, lineHeight: 1.6 }}>
            <p style={{ margin: 0 }}>I've guided <strong style={{ color: '#fff' }}>150+ people across 3 continents</strong> through this exact protocol.</p>
            <p style={{ margin: 0 }}>People who showed up on Day 1 dependent on caffeine, cognitively scattered by 2pm, and stuck in a <strong style={{ color: '#fff' }}>chronic stress response</strong> that wasn't sustainable.</p>
            <p style={{ margin: 0 }}>By Day 7, almost every one of them reported the same shift: waking up before the alarm, less reactivity to stressors, and a practical tool they could use anywhere — without an app, without 20 minutes, without sitting in silence.</p>
            <p style={{ margin: 0 }}>I'm not a wellness influencer. I experiment with the science, run the protocols on myself first, and teach what produces measurable results. <strong style={{ color: '#fff' }}>That's what this challenge is — live, direct, and tailored to you.</strong></p>
          </div>
          <div style={{ display: 'flex', gap: 48, marginTop: 48, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {stats.map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: 36, fontWeight: 900, color: C.orange, lineHeight: 1 }}>{val}</span>
                <span style={{ display: 'block', fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginTop: 8 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  ["I'm very thankful for a whole week where I was able to learn about breathing habits and how I can apply it to my daily routine.", 'Mariana Molina', 'Bolivia'],
  ['You are an amazing teacher and such a powerful healer. Thank you for the space you hold for all of us.', 'Chastity Acosta', 'Austin, TX'],
  ["It's helped me build my capacity and control with my breath, my calm throughout the day, and improved my sleep at night.", 'Amy Freeman', 'Austin, TX'],
];
function DcTestimonials() {
  return (
    <section style={{ background: '#fff', padding: '96px 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <p style={eyebrow}>WHAT PAST PARTICIPANTS EXPERIENCED</p>
        <h2 style={{ color: C.navy, fontSize: 48, fontWeight: 900, letterSpacing: '-0.02em', margin: 0 }}>Don't take my word for it.</h2>
      </div>
      <div style={{ maxWidth: 1024, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {QUOTES.map(([text, author, loc]) => (
          <div key={author} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <span style={{ color: C.orange, opacity: 0.5, fontSize: 24, fontWeight: 900, lineHeight: 1 }}>&ldquo;</span>
            <div style={{ color: '#FFB800', fontSize: 14, letterSpacing: 2, margin: '12px 0' }}>★★★★★</div>
            <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.5, margin: '0 0 16px', flex: 1 }}>"{text}"</p>
            <p style={{ fontWeight: 800, color: C.navy, fontSize: 14, margin: 0 }}>{author}</p>
            <p style={{ fontSize: 12, color: '#94a3b8', margin: '4px 0 0' }}>{loc}</p>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 48, height: 48, background: 'rgba(239,125,19,0.1)', borderBottomRightRadius: 16, borderTopLeftRadius: 24 }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

const INCLUDES = ['7 live Functional Breathing sessions with JJ Ruescas (April 6–12)', 'Personal breathing protocol — built around you', 'Session recordings — 24h access', 'Optimizing Me Tribe community access', 'Science-based framework you keep forever'];
function DcPricing() {
  return (
    <section id="pricing" style={{ background: '#f8fafc', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={eyebrow}>YOUR MOVE</p>
          <h2 style={{ color: C.navy, fontSize: 48, fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0 }}>One decision.<br /><span style={{ color: C.orange }}>Seven mornings that change everything.</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch' }}>
          <div style={{ background: C.navy, borderRadius: 24, position: 'relative', minHeight: 500, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
            <img src="assets/hero-jj.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
              <button type="button" style={{ width: 80, height: 80, background: C.orange, borderRadius: 999, border: 'none', display: 'grid', placeItems: 'center', color: '#fff', cursor: 'pointer', boxShadow: '0 0 0 14px rgba(239,125,19,0.15), 0 0 0 28px rgba(239,125,19,0.06)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 4 }}><polygon points="6 4 20 12 6 20 6 4"/></svg>
              </button>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 700, marginTop: 24, maxWidth: 280 }}>Watch a real session from a previous challenge →</p>
            </div>
          </div>
          <div style={{ background: C.navy, borderRadius: 32, padding: 48, boxShadow: '0 25px 50px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 32 }}>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 8px' }}>April 2026</p>
              <div style={{ color: C.orange, fontWeight: 900, fontSize: 72, lineHeight: 1 }}><span style={{ fontSize: 30, verticalAlign: 'top' }}>$</span>30</div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, margin: '16px 0 0' }}>7-Day Functional Breathing Live Course · April 6–12</p>
              <p style={{ color: C.orange, fontSize: 14, fontWeight: 700, margin: '8px 0 0' }}>Less than a single therapy session.</p>
            </div>
            <ul style={{ listStyle: 'none', margin: '0 0 40px', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {INCLUDES.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: '0 0 auto' }}><path d="M20 6 9 17l-5-5"/></svg>{item}
                </li>
              ))}
            </ul>
            <a href="#" style={{ background: C.orange, color: '#fff', padding: '20px', borderRadius: 999, fontWeight: 900, fontSize: 20, textAlign: 'center', textDecoration: 'none', boxShadow: '0 25px 50px rgba(239,125,19,0.4)' }}>Reserve My Spot — $30 →</a>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 11, margin: '16px 0 0' }}>⏱ Challenge starts April 6 · <strong style={{ color: C.pink }}>Limited spots</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DcFinal() {
  return (
    <section style={{ background: C.navy, padding: '128px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 896, margin: '0 auto' }}>
        <p style={{ color: C.cyan, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 24px' }}>APRIL 6–12, 2026</p>
        <h2 style={{ color: '#fff', fontSize: 52, fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 32px' }}>Your nervous system is either your strongest asset —<br />or your <span style={{ color: C.orange }}>silent liability.</span></h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, margin: '0 0 48px' }}>7 days. 15 minutes a day. A Functional Breathing practice you'll use for life.</p>
        <a href="#pricing" style={{ background: C.orange, color: '#fff', padding: '24px 56px', borderRadius: 999, fontWeight: 900, fontSize: 24, textDecoration: 'none', boxShadow: '0 25px 50px rgba(239,125,19,0.5)', display: 'inline-block' }}>Reserve My Spot — $30 →</a>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, margin: '24px 0 0', fontWeight: 500 }}>April 6–12 &nbsp;·&nbsp; 7AM CDT / 8AM BOL / 1PM UK / 3PM Athens &nbsp;·&nbsp; Limited spots</p>
      </div>
    </section>
  );
}

function DcFooter() {
  return (
    <footer style={{ background: C.navyDeep, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src="assets/logo-white.png" alt="Optimizing Me – JJ Ruescas" style={{ height: 32, opacity: 0.7 }} />
      <div style={{ textAlign: 'right' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, margin: 0 }}>© 2026 JJRuescas.com &nbsp;·&nbsp; Terms & Conditions</p>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 9, margin: '8px 0 0' }}>Join the Optimizing Me Tribe &nbsp;·&nbsp; <span style={{ color: 'rgba(239,125,19,0.5)' }}>jjruescas.com</span></p>
      </div>
    </footer>
  );
}

function ChallengeSite() {
  return (
    <div style={{ fontFamily: dcFont, minHeight: '100vh' }}>
      <DcHeader /><DcHero /><DcProofBar /><DcPain /><DcScience /><DcProcess /><DcMidCta /><DcAbout /><DcTestimonials /><DcPricing /><DcFinal /><DcFooter />
    </div>
  );
}
Object.assign(window, { ChallengeSite });
