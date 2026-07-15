// Optimizing Me — marketing website recreation. Composes DS components.
const DS = window.OptimizingMeDesignSystem_7c7534;
const { Button, IconButton, Badge, Tag, Card, Stat, Testimonial, Logo, Eyebrow, PillarCard, Input, Textarea, Checkbox } = DS;
const A = '../../assets';

const COPY = {
  en: {
    nav: ['Framework', 'Programs', 'About', 'Journal'],
    cta: 'Book a call', eyebrow: 'Human Optimization Strategist',
    title1: 'Optimize your', title2: '1%', title3: ', every day.',
    lede: 'Practical personal development for high performers — grounded in the nervous system, breathwork, and a little AI. Small, consistent, strategic changes that compound into a better you.',
    primary: 'Start optimizing', secondary: 'See the framework', lang: 'ES',
  },
  es: {
    nav: ['Método', 'Programas', 'Sobre mí', 'Diario'],
    cta: 'Agenda una llamada', eyebrow: 'Estratega de Optimización Humana',
    title1: 'Optimiza tu', title2: '1%', title3: ', cada día.',
    lede: 'Desarrollo personal práctico para alto rendimiento — basado en el sistema nervioso, la respiración y un poco de IA. Cambios pequeños, consistentes y estratégicos que se acumulan.',
    primary: 'Empieza a optimizar', secondary: 'Ver el método', lang: 'EN',
  },
};

// ---------- Header ----------
function Header({ lang, setLang, t }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(252,247,243,0.82)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px var(--gutter)', display: 'flex', alignItems: 'center', gap: 24 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}><img src={window.__resources.logoBlue} alt="Optimizing Me — JJ Ruescas" style={{ height: 40, width: "auto", display: "block" }} /></a>
        <nav className="desk-nav" style={{ display: 'flex', gap: 26, marginLeft: 12 }}>
          {t.nav.map((n) => <a key={n} href="#" style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-strong)', textDecoration: 'none' }}>{n}</a>)}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} style={{ background: 'none', border: '1.5px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)', padding: '7px 14px', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '.06em', color: 'var(--text-strong)', cursor: 'pointer' }}>{t.lang}</button>
          <span className="desk-nav"><Button variant="primary" size="sm">{t.cta}</Button></span>
          <span className="mob-only"><IconButton label="Menu" variant="soft" onClick={() => setOpen(!open)}>{open ? <Icons.close/> : <Icons.menu/>}</IconButton></span>
        </div>
      </div>
      {open && (
        <div className="mob-only" style={{ padding: '8px var(--gutter) 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {t.nav.map((n) => <a key={n} href="#" style={{ padding: '10px 4px', fontSize: 16, fontWeight: 600, color: 'var(--text-strong)', textDecoration: 'none', borderBottom: '1px solid var(--border-subtle)' }}>{n}</a>)}
          <div style={{ marginTop: 10 }}><Button variant="primary" fullWidth>{t.cta}</Button></div>
        </div>
      )}
    </header>
  );
}

// ---------- Hero ----------
function Hero({ t }) {
  return (
    <section id="top" style={{ background: 'var(--brand-navy)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div className="radial" aria-hidden="true"></div>
      <div className="hero-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '84px var(--gutter) 92px', position: 'relative' }}>
        <div>
          <Eyebrow color="var(--brand-orange)">{t.eyebrow}</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1.02, letterSpacing: '-0.01em', margin: '18px 0 0' }}>
            {t.title1} <span style={{ color: 'var(--brand-orange)' }}>{t.title2}</span>{t.title3}
          </h1>
          <p style={{ maxWidth: 520, fontSize: 18, lineHeight: 1.6, color: 'var(--peach-200)', margin: '22px 0 32px' }}>{t.lede}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" iconEnd={<Icons.arrow size={18}/>}>{t.primary}</Button>
            <Button variant="on-dark" size="lg">{t.secondary}</Button>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 48 }}>
            <Stat value="1" suffix="%" label="better, every day" onDark />
            <Stat value="6" label="HumanOps pillars" onDark />
            <Stat value="3" label="systems, one you" onDark />
          </div>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src={window.__resources.portrait} alt="JJ Ruescas" style={{ width: 'min(380px, 78vw)', aspectRatio: '1', objectFit: 'cover', borderRadius: '46% 54% 54% 46% / 46% 46% 54% 54%', boxShadow: 'var(--shadow-lg)' }} />
            <img src={window.__resources.symbolWhite} alt="" aria-hidden="true" style={{ position: 'absolute', bottom: -18, left: -18, width: 84, opacity: 0.95 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Framework ----------
const PILLARS = [
  ['respiration', 'Respiration', 'Breathwork to down-regulate the nervous system on demand.', 'wind'],
  ['emotions', 'Emotions', 'Name it to tame it — emotional granularity as a skill.', 'heart'],
  ['movement', 'Movement', 'Move daily to keep the hardware running clean.', 'activity'],
  ['nutrition', 'Nutrition', 'Fuel that stabilizes energy and focus, not spikes.', 'apple'],
  ['mindset', 'Mindset', 'Reframe the inner narrative that runs in the background.', 'bulb'],
  ['recovery', 'Recovery', 'Sleep and rest are where the upgrade installs.', 'moon'],
];
function Framework() {
  return (
    <section style={{ background: 'var(--bg-page-warm)', padding: 'var(--section-y) var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 12px' }}>
          <Eyebrow>The HumanOps Framework</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'clamp(30px,4vw,40px)', color: 'var(--brand-navy)', margin: '14px 0 12px', lineHeight: 1.12 }}>You are an interconnected system.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>Optimize one area and it feeds the others. Six pillars, one infinite loop of improvement.</p>
        </div>
        <img src={window.__resources.humanops} alt="HumanOps Infinite Loop" style={{ display: 'block', width: 'min(760px,100%)', height: 'auto', margin: '28px auto 44px' }} />
        <div className="pillar-grid">
          {PILLARS.map(([p, title, desc, ic]) => (
            <PillarCard key={p} pillar={p} title={title} description={desc} icon={React.createElement(Icons[ic], { size: 26 })} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Programs ----------
const PROGRAMS = [
  { badge: ['orange', 'Flagship'], title: 'IGNITE', tag: 'coaching', meta: [['clock', '8 weeks'], ['users', '1:1 + cohort']], desc: 'A full-system reset: breathwork, mindset, and recovery protocols tailored to your life.' },
  { badge: ['periwinkle', 'Live'], title: 'Breathwork Reset', tag: 'breathwork', meta: [['clock', '60 min'], ['users', 'Group']], desc: 'A guided session to reset your nervous system and walk out calmer, clearer, sharper.' },
  { badge: ['peach', 'Popular'], title: '1:1 Coaching', tag: 'coaching', meta: [['clock', 'Monthly'], ['users', 'Private']], desc: 'Personal strategy for leaders and founders optimizing performance under pressure.' },
  { badge: ['navy', 'New'], title: 'AI Habit OS', tag: 'ai', meta: [['spark', 'Self-paced'], ['clock', '10 min/day']], desc: 'Use lightweight AI nudges to install habits that actually stick. Systems, not willpower.' },
];
function Programs() {
  const [filter, setFilter] = React.useState('all');
  const filters = [['all', 'All'], ['coaching', 'Coaching'], ['breathwork', 'Breathwork'], ['ai', 'AI & Tech']];
  const shown = PROGRAMS.filter((p) => filter === 'all' || p.tag === filter);
  return (
    <section style={{ background: 'var(--bg-page)', padding: 'var(--section-y) var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 20, marginBottom: 28 }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <Eyebrow color="var(--brand-periwinkle)">Programs & Services</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'clamp(30px,4vw,40px)', color: 'var(--brand-navy)', margin: '12px 0 0', lineHeight: 1.12 }}>Pick your next 1%.</h2>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {filters.map(([k, label]) => <Tag key={k} active={filter === k} onClick={() => setFilter(k)}>{label}</Tag>)}
          </div>
        </div>
        <div className="prog-grid">
          {shown.map((p) => (
            <Card key={p.title} tone="light" interactive>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <Badge tone={p.badge[0]}>{p.badge[1]}</Badge>
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 24, color: 'var(--brand-navy)', margin: '0 0 8px' }}>{p.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 0 18px' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
                {p.meta.map(([ic, txt]) => (
                  <span key={txt} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--text-strong)' }}>
                    <span style={{ color: 'var(--brand-periwinkle)' }}>{React.createElement(Icons[ic], { size: 16 })}</span>{txt}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" iconEnd={<Icons.arrow size={16}/>}>Explore</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonials ----------
const QUOTES = [
  { quote: 'Breathwork rewired how I handle stress before big meetings. I feel it in my body within two minutes.', name: 'Ana M.', role: 'Product Lead' },
  { quote: 'JJ treats the mind like a system you can debug. The 1% framing finally made habits stick for me.', name: 'Diego R.', role: 'Founder' },
  { quote: 'No fluff, no mysticism — just tools that work. My sleep and focus are measurably better.', name: 'Carla V.', role: 'Physician' },
];
function Testimonials() {
  return (
    <section style={{ background: 'var(--brand-navy)', padding: 'var(--section-y) var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Eyebrow color="var(--brand-orange)">Transformations</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'clamp(30px,4vw,40px)', color: '#fff', margin: '14px 0 0' }}>One human at a time.</h2>
        </div>
        <div className="quote-grid">
          {QUOTES.map((q) => <Testimonial key={q.name} tone="dark" {...q} />)}
        </div>
      </div>
    </section>
  );
}

// ---------- Newsletter / Contact ----------
function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ background: 'var(--bg-page-warm)', padding: 'var(--section-y) var(--gutter)' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Card tone="light" padding="clamp(28px,5vw,52px)" style={{ borderTop: '3px solid var(--accent)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '18px 0' }}>
              <div style={{ width: 60, height: 60, borderRadius: 999, background: 'var(--peri-100)', color: 'var(--brand-navy)', display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}><Icons.check size={30}/></div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 26, color: 'var(--brand-navy)', margin: '0 0 8px' }}>You're in.</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Check your inbox for your first 1% — a 3-minute breathwork reset.</p>
            </div>
          ) : (
            <React.Fragment>
              <Eyebrow>The Weekly 1%</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'clamp(26px,3vw,34px)', color: 'var(--brand-navy)', margin: '12px 0 8px' }}>One optimization, every Sunday.</h3>
              <p style={{ color: 'var(--text-muted)', margin: '0 0 24px', lineHeight: 1.6 }}>Actionable, science-grounded, no spam. Join leaders optimizing their nervous system.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-row" style={{ display: 'flex', gap: 16 }}>
                  <Input label="First name" placeholder="Alex" />
                  <Input label="Email" type="email" placeholder="you@work.com" iconStart={<Icons.mail size={18}/>} />
                </div>
                <Checkbox label="Send me weekly optimization tips (unsubscribe anytime)" defaultChecked />
                <div><Button variant="primary" size="lg" onClick={() => setSent(true)} iconEnd={<Icons.arrow size={18}/>}>Get the Weekly 1%</Button></div>
              </div>
            </React.Fragment>
          )}
        </Card>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer({ t }) {
  return (
    <footer style={{ background: 'var(--navy-900)', color: 'var(--peach-200)', padding: '56px var(--gutter) 40px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 300 }}>
          <img src={window.__resources.logoWhite} alt="Optimizing Me — JJ Ruescas" style={{ height: 44, width: "auto", display: "block" }} />
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, opacity: 0.85 }}>Optimizing 1% each day, one human at a time.</p>
        </div>
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff' }}>Explore</span>
            {t.nav.map((n) => <a key={n} href="#" style={{ fontSize: 14, color: 'var(--peach-200)', textDecoration: 'none', opacity: 0.85 }}>{n}</a>)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff' }}>Connect</span>
            {['Instagram', 'LinkedIn', 'YouTube', 'optimizando.me'].map((n) => <a key={n} href="#" style={{ fontSize: 14, color: 'var(--peach-200)', textDecoration: 'none', opacity: 0.85 }}>{n}</a>)}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '36px auto 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.12)', fontSize: 12.5, opacity: 0.7 }}>© {new Date().getFullYear()} JJ Ruescas · Optimizing Me. Human Optimization Strategist.</div>
    </footer>
  );
}

function Site() {
  const [lang, setLang] = React.useState('en');
  const t = COPY[lang];
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)' }}>
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Framework />
      <Programs />
      <Testimonials />
      <Contact />
      <Footer t={t} />
    </div>
  );
}
Object.assign(window, { Site });
