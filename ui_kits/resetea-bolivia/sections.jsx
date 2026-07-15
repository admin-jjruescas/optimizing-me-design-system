// Resetea Tu Sistema — Bolivia. Recreated from resetea-tu-sistema-bolivia repo.
// Tokens (tailwind.config.js): brand-blue #132F44, brand-orange #F57F01, brand-grey #E6E6E6.
// Santa Cruz uses the 'green' city variant; all copy is real, from src/data/event.ts + App.tsx.
const RB = { blue: '#132F44', orange: '#F57F01', grey: '#E6E6E6', green: '#16a34a', greenDark: '#15803d' };
const rbFont = "'Montserrat', system-ui, sans-serif";

const RB_CITIES = [
  { name: 'La Paz', date: 'Domingo 9 de Agosto, 2026', dateShort: '9 Ago', time: '9:00 am - 12:00 pm', heroTime: '9:00 AM', variant: 'orange', location: 'Círculo Aeronáutico',
    preventa: [['Individual', 'Bs 169'], ['En Parejas', 'Bs 159'], ['Grupal (3+)', 'Bs 149']], regular: [['Individual', 'Bs 200'], ['En Parejas', 'Bs 185'], ['Grupal (3+)', 'Bs 170']], preventaNote: 'Hasta el 5 de Agosto', cta: 'Comprar Ticket La Paz' },
  { name: 'Santa Cruz', date: 'Jueves 13 de Agosto, 2026', dateShort: '13 Ago', time: '6:30 pm - 9:30 pm', heroTime: '6:30 PM', variant: 'green', location: 'Hotel Camino Real',
    preventa: [['Individual', 'Bs 259'], ['En Parejas', 'Bs 249'], ['Grupal (3+)', 'Bs 239']], regular: [['Individual', 'Bs 290'], ['En Parejas', 'Bs 275'], ['Grupal (3+)', 'Bs 260']], preventaNote: 'Hasta el 6 de Agosto', cta: 'Comprar Ticket Santa Cruz' },
  { name: 'Santa Cruz', date: 'Jueves 20 de Agosto, 2026', dateShort: '20 Ago', time: '6:30 pm - 9:30 pm', heroTime: '6:30 PM', variant: 'green', location: 'Hotel Camino Real',
    preventa: [['Individual', 'Bs 259'], ['En Parejas', 'Bs 249'], ['Grupal (3+)', 'Bs 239']], regular: [['Individual', 'Bs 290'], ['En Parejas', 'Bs 275'], ['Grupal (3+)', 'Bs 260']], preventaNote: 'Hasta el 13 de Agosto', cta: 'Comprar Ticket Santa Cruz' },
];
const RB_PROGRAM = [
  ['9:00 - 9:30', 'Registro y Bienvenida', 'Llegada, registro y entrega de material (antifaz + 1 botella agua).'],
  ['9:30 - 9:50', 'Preparación Somática', 'Yoga y movimiento consciente para preparar tu cuerpo.'],
  ['10:00 - 10:30', 'Introducción al Breathwork con JJ', 'Explicación de la técnica, beneficios y cómo navegar tu experiencia.'],
  ['10:30 - 11:30', 'Práctica de Breathwork Guiado', '60 minutos de superventilación con música inmersiva. Facilitación adaptativa en tiempo real.'],
  ['11:30 - 12:15', 'Integración y Cierre', 'Espacio para compartir, entrega de bolsa de regalos y fotos del recuerdo.'],
];

function RbHero() {
  return (
    <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src="assets/hero-loop-poster.jpg" alt="Sesión de breathwork" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(19,47,68,0.75), rgba(19,47,68,0.3), transparent)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(19,47,68,0.8), rgba(19,47,68,0.1), transparent)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(19,47,68,0.45), transparent, transparent)' }}></div>
      </div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1152, margin: '0 auto', padding: '96px 48px', width: '100%' }}>
        <p style={{ color: RB.orange, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 20px', textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>Agosto 2026 · Bolivia</p>
        <h1 style={{ color: '#fff', fontSize: 68, fontWeight: 700, lineHeight: 1.05, margin: '0 0 20px', textShadow: '0 2px 16px rgba(0,0,0,0.35)', textWrap: 'balance' }}>Resetea Tu Sistema</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 22, lineHeight: 1.5, maxWidth: 620, margin: '0 0 36px', textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>Una experiencia de Respiración, Movimiento y Neurociencia para el Bienestar</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
          {RB_CITIES.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '10px 18px', color: '#fff' }}>
              <span style={{ width: 10, height: 10, borderRadius: 99, background: c.variant === 'orange' ? RB.orange : RB.green }}></span>
              <span style={{ fontWeight: 700, fontSize: 15 }}>{c.name}</span>
              <span style={{ fontSize: 13, opacity: 0.8 }}>{c.dateShort} · {c.heroTime}</span>
            </div>
          ))}
        </div>
        <a href="#tickets" style={{ display: 'inline-block', background: RB.orange, color: '#fff', fontWeight: 700, fontSize: 18, padding: '18px 40px', borderRadius: 12, textDecoration: 'none', boxShadow: '0 10px 30px rgba(245,127,1,0.4)' }}>Comprar Tickets</a>
      </div>
    </section>
  );
}

function RbPrograma() {
  return (
    <section style={{ background: '#fff', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto' }}>
        <h2 style={{ color: RB.blue, fontSize: 44, fontWeight: 700, textAlign: 'center', margin: '0 0 12px' }}>¿Qué es Resetea Tu Sistema?</h2>
        <p style={{ color: '#475569', fontSize: 18, lineHeight: 1.7, textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>Una experiencia transformadora de 3 horas: respiración consciente, movimiento y neurociencia aplicada, guiada en vivo por JJ Ruescas. Programa idéntico en ambas ciudades (horario de La Paz mostrado).</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {RB_PROGRAM.map(([time, title, desc], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 24px 1fr', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'right', fontWeight: 700, fontSize: 15, color: RB.orange, paddingTop: 2 }}>{time}</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch' }}>
                <span style={{ width: 14, height: 14, borderRadius: 99, background: RB.blue, border: `3px solid ${RB.grey}`, flex: '0 0 auto' }}></span>
                {i < RB_PROGRAM.length - 1 && <span style={{ width: 2, flex: 1, background: RB.grey }}></span>}
              </div>
              <div style={{ paddingBottom: 36 }}>
                <h3 style={{ color: RB.blue, fontSize: 19, fontWeight: 700, margin: '0 0 6px' }}>{title}</h3>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RbTickets() {
  return (
    <section id="tickets" style={{ background: '#f8fafc', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ color: RB.blue, fontSize: 44, fontWeight: 700, textAlign: 'center', margin: '0 0 64px' }}>Tickets · Agosto 2026</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {RB_CITIES.map((c, i) => {
            const accent = c.variant === 'orange' ? RB.orange : RB.green;
            return (
              <div key={i} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: accent, color: '#fff', padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>{c.name}</h3>
                  <p style={{ fontSize: 14, margin: '4px 0 0', opacity: 0.9 }}>{c.date}</p>
                  <p style={{ fontSize: 13, margin: '2px 0 0', opacity: 0.85 }}>{c.time} · {c.location}</p>
                </div>
                <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <span style={{ fontWeight: 800, fontSize: 14, color: RB.blue, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Preventa</span>
                      <span style={{ fontSize: 12, color: '#64748b' }}>{c.preventaNote}</span>
                    </div>
                    {c.preventa.map(([label, price]) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #f1f5f9', fontSize: 15 }}>
                        <span style={{ color: '#475569' }}>{label}</span><strong style={{ color: accent }}>{price}</strong>
                      </div>
                    ))}
                  </div>
                  <div>
                    <span style={{ fontWeight: 800, fontSize: 14, color: RB.blue, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Regular</span>
                    {c.regular.map(([label, price]) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #f1f5f9', fontSize: 15 }}>
                        <span style={{ color: '#475569' }}>{label}</span><strong style={{ color: RB.blue }}>{price}</strong>
                      </div>
                    ))}
                  </div>
                  <a href="#" style={{ marginTop: 'auto', display: 'block', textAlign: 'center', background: accent, color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px', borderRadius: 12, textDecoration: 'none' }}>{c.cta}</a>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: 'center', color: '#64748b', fontSize: 14, marginTop: 32 }}>Capacidad limitada: 200 personas por ciudad.</p>
      </div>
    </section>
  );
}

function RbFacilitador() {
  return (
    <section style={{ background: RB.blue, padding: '96px 48px' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto', display: 'grid', gridTemplateColumns: '340px 1fr', gap: 56, alignItems: 'center' }}>
        <img src="assets/jj-ruescas-2.webp" alt="Retrato de JJ Ruescas, facilitador de Resetea Tu Sistema" style={{ width: '100%', borderRadius: 20, aspectRatio: '4/5', objectFit: 'cover', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }} />
        <div>
          <p style={{ color: RB.orange, fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 12px' }}>Facilitador Principal</p>
          <h2 style={{ color: '#fff', fontSize: 40, fontWeight: 700, margin: '0 0 8px' }}>JJ Ruescas</h2>
          <p style={{ color: RB.orange, fontSize: 17, fontWeight: 600, margin: '0 0 24px' }}>Estratega de Optimización Humana</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 1.7 }}>
            <p style={{ margin: 0 }}>Boliviano radicado en Estados Unidos. Formación en neurociencia, coaching de alto rendimiento, cuidado informado de trauma y optimización del sistema nervioso.</p>
            <p style={{ margin: 0 }}>Con más de 10 años de experiencia, ha facilitado cientos de eventos en Estados Unidos y recientemente completó su tour por Londres y Grecia.</p>
            <p style={{ margin: 0 }}>En agosto de 2026 regresa a Bolivia con dos eventos de breathwork: La Paz y Santa Cruz.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RbFooter() {
  return (
    <footer style={{ background: '#0d2233', color: RB.grey, padding: '40px 48px', textAlign: 'center' }}>
      <p style={{ fontSize: 14, margin: 0 }}>© 2026 Resetea Bolivia — Una experiencia de <strong style={{ color: '#fff' }}>Optimizing Me</strong></p>
      <p style={{ fontSize: 12, margin: '8px 0 0', opacity: 0.7 }}>Una experiencia integral.</p>
    </footer>
  );
}

function ReseteaSite() {
  return (
    <div style={{ fontFamily: rbFont, color: '#1f2933' }}>
      <RbHero /><RbPrograma /><RbTickets /><RbFacilitador /><RbFooter />
    </div>
  );
}
Object.assign(window, { ReseteaSite });
