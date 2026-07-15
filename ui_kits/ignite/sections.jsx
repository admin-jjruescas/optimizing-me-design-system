// IGNITE landing recreation — sections from ignite-website repo, real copy from lib/constants.ts
const PAIN = [
  ['circle-dashed', 'Optimization Paralysis', "You know what to do, you just can't do it consistently. The gap between knowledge and execution keeps growing."],
  ['trending-down', 'Diminishing Returns', "You've tried everything—journaling, cold plunges, therapy, coaches, courses. They work... until they don't."],
  ['puzzle', 'Tactics Without Foundation', 'Your toolkit is full, but you keep shopping for the next framework, the next system, the next answer.'],
  ['heart-crack', 'High Achiever, Low Fulfillment', "You've checked the boxes, hit the milestones, but something's missing. Success hasn't translated to satisfaction."],
  ['brain', 'Knowing vs. Being', 'You can talk the talk—mindfulness, boundaries, self-compassion—but living it is another story.'],
  ['pause-circle', 'Analysis Over Action', "You're great at understanding your patterns, terrible at changing them. Insight hasn't led to transformation."],
];
const PHASES = [
  [1, 'Nervous System Foundation', 'Weeks 1-2', 'Learn to regulate your state before you try to change your behavior. Build the capacity to feel safe in your own body.', ['Identify your activation patterns', 'Build self-regulation tools', 'Create safety anchors', 'Understand your window of tolerance']],
  [2, 'Emotional Liberation', 'Weeks 3-4', "Release the backlog. Process what's been stuck. Make space for what wants to emerge.", ['Discharge stored stress', 'Process incomplete emotions', 'Reclaim energy from the past', 'Build emotional fluency']],
  [3, 'Identity Integration', 'Week 5', 'Align who you are with who you want to be. Embody the version of yourself that naturally does the things.', ['Define your new operating system', 'Integrate new patterns', 'Build sustainable practices', 'Create your post-cohort plan']],
];
const FEATURES = ['5 weekly live sessions (90 min)', '2 individual 1:1 coaching sessions with JJ (30 min each)', 'Optional co-working sessions (Wed & Fri)', 'Complete IGNITE Framework curriculum', 'Private community access', 'Daily implementation prompts', '3-month post-cohort check-ins', 'All session recordings', 'Resource library access', '100% satisfaction guarantee (first 2 weeks)'];
const FAQS = [
  ["Why is this different from what I've already tried?", "Most programs give you more tactics, frameworks, and information. IGNITE starts where they end—with your nervous system. We address why you can't execute what you already know, not just what to do. This is about changing your operating system, not adding more apps."],
  ['Is 5 weeks really enough time?', "Yes, when we're working at the right level. We're not teaching you productivity hacks—we're helping you build the foundation that makes follow-through natural. Most participants report noticeable shifts in weeks 2-3."],
  ["What if I can't make all the live sessions?", 'All sessions are recorded and available within 24 hours. However, the live cohort experience is where the magic happens. We recommend attending at least 4 of 5 live sessions for optimal results.'],
  ['How much time do I need to commit each week?', "90-minute Tuesday session + 2-3 hours of integration work. Optional co-working sessions (Wed/Fri) are open to everyone. This isn't about cramming more into your life—it's about reorganizing how you operate."],
  ['Is this therapy or coaching?', 'Neither—and both. This is a structured cohort program focused on practical integration. Think of it as a hybrid: the depth of therapeutic work with the structure and accountability of coaching.'],
];

function IgHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.scrollingElement || document.documentElement;
    const onScroll = () => setScrolled((window.scrollY || el.scrollTop) > 8);
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, []);
  const fg = scrolled ? IG.blue : '#fff';
  return (
    <header style={{ position: 'fixed', left: 0, right: 0, top: 0, zIndex: 50, transition: 'all 300ms', background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent', boxShadow: scrolled ? IG.shadowCard : 'none', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
      <div style={{ margin: '0 auto', display: 'flex', height: 80, maxWidth: 1200, alignItems: 'center', justifyContent: 'space-between', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: fg }}>
          <img src="assets/ignite-logo.png" alt="IGNITE logo" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'contain' }} />
          <div style={{ lineHeight: 1.2 }}>
            <span style={{ display: 'block', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.28em', color: scrolled ? IG.medGrey : 'rgba(255,255,255,0.8)' }}>Ignite</span>
            <span style={{ display: 'block', fontSize: 18, fontWeight: 700 }}>Accelerator</span>
          </div>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32, fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: fg }}>
          {[['How It Works', false], ['Schedule', false], ['Curriculum', false], ['Apply Now', true], ['FAQ', false]].map(([label, cta]) => (
            <a key={label} href="#" style={{ color: cta ? IG.orange : 'inherit', textDecoration: 'none' }}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function IgHero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "url('assets/hero-background.webp')", backgroundSize: 'cover', backgroundPosition: 'center 18%', padding: '80px 24px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.35), rgba(0,0,0,0.5))' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', textAlign: 'center', color: '#fff' }}>
        <div style={{ display: 'inline-block', marginBottom: 24, background: IG.lightOrange, border: `2px solid ${IG.orange}`, color: IG.blue, padding: '8px 24px', borderRadius: 999, fontSize: 14, fontWeight: 600 }}>
          June 30, 2026 Cohort • Limited to 12 Participants
        </div>
        <h1 style={{ fontSize: 60, lineHeight: 1.2, fontWeight: 700, margin: '0 0 24px' }}>Stop Starting Over<br />Every Monday</h1>
        <p style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 800, margin: '0 auto 32px', color: 'rgba(255,255,255,0.9)' }}>
          A 5-week cohort for high-achievers tired of optimization paralysis. Build the nervous system foundation that makes follow-through natural.
        </p>
        <IgButton variant="primary" size="lg">Apply for IGNITE June 30, 2026 Cohort <Lucide name="arrow-right" size={20} color="#fff" /></IgButton>
        <div style={{ marginTop: 48, maxWidth: 460, margin: '48px auto 0', display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left' }}>
          <img src="assets/carla-quisbert.webp" alt="Carla Quisbert" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', flex: '0 0 auto' }} />
          <div>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: 15, color: 'rgba(255,255,255,0.9)' }}>&ldquo;This isn't training that gives quick answers—it allows you to have fun with the questions. And sometimes, that's what changes everything.&rdquo;</p>
            <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>— Carla Quisbert, Marketing & Brand Strategist</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IgProblem() {
  return (
    <section style={{ background: '#fff', padding: '128px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 42, lineHeight: 1.3, fontWeight: 800, color: IG.blue, margin: '0 0 24px' }}>You Have the Knowledge.<br />You Need the System.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: IG.dark, maxWidth: 800, margin: '0 auto' }}>You've read the books, tried the frameworks, hired the coaches. You know what to do. The problem isn't knowledge—it's execution.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {PAIN.map(([icon, title, desc], i) => (
            <div key={title} style={{ background: i % 2 === 1 ? IG.lightOrange : '#fff', borderRadius: 8, boxShadow: IG.shadowCard, padding: 32, transition: 'box-shadow 300ms' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = IG.shadowCardHover}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = IG.shadowCard}>
              <Lucide name={icon} size={40} color={IG.orange} style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, fontWeight: 500, color: IG.blue, margin: '0 0 16px' }}>{title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: IG.dark, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
        <h2 style={{ maxWidth: 800, margin: '48px auto 0', textAlign: 'center', fontSize: 30, lineHeight: 1.4, fontWeight: 600, color: IG.blue }}>
          What if the problem isn't that you need more tactics—it's that you need to upgrade your operating system?
        </h2>
      </div>
    </section>
  );
}

function IgFramework() {
  return (
    <section style={{ background: IG.lightOrange, padding: '128px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.1em', color: IG.orange, textTransform: 'uppercase', margin: '0 0 16px' }}>How It Works</p>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: IG.blue, margin: '0 0 24px' }}>The IGNITE Framework</h2>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: IG.dark, maxWidth: 800, margin: '0 auto' }}>Three phases that rebuild your foundation from the ground up—nervous system first, tactics second.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {PHASES.map(([n, title, sub, desc, outcomes]) => (
            <div key={n} style={{ position: 'relative', overflow: 'hidden', background: '#fff', borderRadius: 8, boxShadow: IG.shadowCard, padding: 32 }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 96, height: 96, background: IG.orange, opacity: 0.1, borderBottomLeftRadius: '100%' }} />
              <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 36, fontWeight: 700, color: IG.orange, opacity: 0.3 }}>{n}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
                <h3 style={{ fontSize: 30, fontWeight: 500, color: IG.blue, margin: 0 }}>{title}</h3>
                <span style={{ fontSize: 14, fontWeight: 500, color: IG.orange }}>{sub}</span>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: IG.dark, margin: '0 0 24px' }}>{desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {outcomes.map((o) => (
                  <div key={o} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <Lucide name="check-circle-2" size={20} color={IG.orange} style={{ marginTop: 2 }} />
                    <span style={{ fontSize: 16, color: IG.dark }}>{o}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, textAlign: 'center', background: '#fff', padding: 32, borderRadius: 8 }}>
          <h3 style={{ fontSize: 30, fontWeight: 500, color: IG.blue, margin: '0 0 16px' }}>Integration Over Information</h3>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: IG.dark, margin: 0 }}>This isn't about learning more. It's about integrating what you already know into a nervous system that can actually execute it.</p>
        </div>
      </div>
    </section>
  );
}

function IgPricing() {
  return (
    <section style={{ background: '#fff', padding: '128px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: IG.blue, margin: '0 0 24px' }}>Investment Options</h2>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: IG.dark, maxWidth: 800, margin: '0 auto' }}>One program, everything included: the 5-week IGNITE Framework with personalized 1:1 coaching and post-cohort support. Maximum 12 participants per cohort.</p>
        </div>
        <div style={{ maxWidth: 512, margin: '0 auto', background: '#fff', border: `2px solid ${IG.grey}`, borderRadius: 8, boxShadow: IG.shadowCard, padding: 48, transition: 'all 300ms' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = IG.orange; e.currentTarget.style.boxShadow = IG.shadowCardHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = IG.grey; e.currentTarget.style.boxShadow = IG.shadowCard; }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h3 style={{ fontSize: 30, fontWeight: 500, color: IG.blue, margin: '0 0 12px' }}>IGNITE</h3>
            <div style={{ fontSize: 60, fontWeight: 700, color: IG.blue, marginBottom: 12 }}>$1,100</div>
            <p style={{ fontSize: 16, color: IG.medGrey, margin: 0 }}>or 3 payments of $385</p>
          </div>
          <div style={{ height: 1, background: IG.grey, marginBottom: 32 }} />
          <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FEATURES.map((f) => (
              <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <Lucide name="check-circle-2" size={24} color={IG.orange} style={{ marginTop: 2 }} />
                <span style={{ fontSize: 16, lineHeight: 1.6, color: IG.dark }}>{f}</span>
              </li>
            ))}
          </ul>
          <IgButton variant="primary" size="lg" style={{ width: '100%', fontWeight: 700 }}>Apply Now</IgButton>
        </div>
        <div style={{ marginTop: 64, maxWidth: 800, margin: '64px auto 0', background: IG.gradOrange, color: '#fff', padding: 40, borderRadius: 8, textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)' }}>
          <Lucide name="shield" size={56} color="#fff" style={{ marginBottom: 16 }} />
          <h3 style={{ fontSize: 30, fontWeight: 500, margin: '0 0 16px' }}>100% Satisfaction Guarantee</h3>
          <p style={{ fontSize: 18, lineHeight: 1.8, margin: 0, color: 'rgba(255,255,255,0.95)' }}>If after the second session you feel this isn't the right fit, full refund—no questions asked. We want you all-in, not feeling trapped.</p>
        </div>
      </div>
    </section>
  );
}

function IgFAQ() {
  const [open, setOpen] = React.useState(-1);
  return (
    <section style={{ background: '#fff', padding: '128px 48px' }}>
      <div style={{ maxWidth: 768, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: IG.blue, margin: '0 0 24px' }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: 18, color: IG.dark, margin: 0 }}>Everything you need to know about the IGNITE program.</p>
        </div>
        {FAQS.map(([q, a], i) => (
          <div key={i} style={{ borderBottom: i < FAQS.length - 1 ? `1px solid ${IG.grey}` : 'none' }}>
            <button type="button" onClick={() => setOpen(open === i ? -1 : i)}
              style={{ width: '100%', padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: igFont }}>
              <span style={{ fontWeight: 600, fontSize: 18, color: IG.blue, paddingRight: 32 }}>{q}</span>
              <span style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 300ms', display: 'inline-flex' }}><Lucide name="chevron-down" size={24} color={IG.orange} /></span>
            </button>
            {open === i && <div style={{ paddingBottom: 24, fontSize: 16, lineHeight: 1.6, color: IG.dark }}>{a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function IgFooter() {
  return (
    <footer style={{ background: IG.blue, color: '#fff', padding: '64px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 48, marginBottom: 32 }}>
          <div>
            <img src="assets/ignite-logo.png" alt="IGNITE Logo" style={{ width: 48, height: 48, borderRadius: '50%', marginBottom: 16 }} />
            <h3 style={{ fontWeight: 700, fontSize: 20, margin: '0 0 12px' }}>IGNITE</h3>
            <p style={{ color: IG.grey, fontSize: 14, margin: 0 }}>Optimize one human at a time, 1% each day.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, margin: '0 0 16px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['How It Works', 'Pricing', 'FAQ', 'Contact'].map((l) => <a key={l} href="#" style={{ color: IG.grey, fontSize: 14, textDecoration: 'none' }}>{l}</a>)}
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, margin: '0 0 16px' }}>Get in Touch</h4>
            <a href="mailto:info@jjruescas.com" style={{ color: IG.grey, fontSize: 14, textDecoration: 'none' }}>info@jjruescas.com</a>
          </div>
        </div>
        <div style={{ paddingTop: 32, borderTop: '1px solid rgba(230,230,230,0.2)', textAlign: 'center' }}>
          <p style={{ color: IG.grey, fontSize: 14, margin: 0 }}>© 2026 IGNITE. All rights reserved.</p>
          <p style={{ color: IG.grey, fontSize: 12, margin: '8px 0 0' }}>Curiosity. Learning. Kaizen.</p>
        </div>
      </div>
    </footer>
  );
}

function IgniteSite() {
  return (
    <div style={{ fontFamily: igFont, color: IG.dark }}>
      <IgHeader />
      <IgHero />
      <IgProblem />
      <IgFramework />
      <IgPricing />
      <IgFAQ />
      <IgFooter />
    </div>
  );
}
Object.assign(window, { IgniteSite });
