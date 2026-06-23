import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  {
    title: 'Contabilidad e impuestos',
    description: 'Organización contable, cumplimiento fiscal y control de obligaciones para empresas y emprendedores.',
    icon: '▦',
  },
  {
    title: 'Planeación tributaria',
    description: 'Estrategias fiscales para reducir riesgos, anticipar compromisos y tomar mejores decisiones.',
    icon: '◈',
  },
  {
    title: 'Constitución de empresa',
    description: 'Acompañamiento en nombre comercial, registro mercantil, RNC, TSS y comprobantes fiscales.',
    icon: '◆',
  },
  {
    title: 'Estados financieros mensuales',
    description: 'Reportes claros para conocer la salud financiera de tu negocio y decidir con información confiable.',
    icon: '▰',
  },
  {
    title: 'Gestión de riesgos y control interno',
    description: 'Revisión de procesos, controles y puntos críticos para fortalecer la operación del negocio.',
    icon: '✓',
  },
  {
    title: 'Nómina y TSS',
    description: 'Soporte en novedades, obligaciones laborales, reportes y seguimiento de pagos relacionados.',
    icon: '●',
  },
  {
    title: 'Facturación electrónica',
    description: 'Preparación, diagnóstico y acompañamiento para cumplir con los requisitos de facturación electrónica.',
    icon: '+',
  },
  {
    title: 'Auditoría y asesoría fiscal',
    description: 'Evaluación, orientación y soporte profesional para mantener la empresa en orden.',
    icon: '∑',
  },
];

const benefits = [
  'Cumplir tus obligaciones fiscales sin estrés.',
  'Evitar multas, atrasos y pagos duplicados.',
  'Controlar ingresos, gastos, costos y documentos.',
  'Tomar decisiones con información financiera confiable.',
];

const plans = [
  {
    name: 'Plan Inicial',
    tag: 'Para emprendedores',
    description: 'Ideal para negocios que necesitan organizarse, formalizarse y empezar con buen control.',
    items: ['Diagnóstico inicial', 'Organización documental', 'Asesoría base', 'Seguimiento mensual'],
  },
  {
    name: 'Plan Crecimiento',
    tag: 'Más recomendado',
    description: 'Para empresas que ya operan y necesitan control contable, fiscal y reportes periódicos.',
    items: ['Contabilidad mensual', 'Impuestos', 'Estados financieros', 'Acompañamiento constante'],
    featured: true,
  },
  {
    name: 'Plan Empresarial',
    tag: 'A medida',
    description: 'Para negocios que requieren soporte más completo, controles internos y procesos especializados.',
    items: ['Control interno', 'Nómina y TSS', 'Auditoría', 'Reportes gerenciales'],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico',
    text: 'Analizamos tu situación contable, fiscal y documental para entender dónde estás.',
  },
  {
    number: '02',
    title: 'Organización',
    text: 'Clasificamos documentos, servicios, compromisos y prioridades de tu negocio.',
  },
  {
    number: '03',
    title: 'Cumplimiento',
    text: 'Damos seguimiento a declaraciones, vencimientos, TSS, NCF y obligaciones fiscales.',
  },
  {
    number: '04',
    title: 'Seguimiento',
    text: 'Te acompañamos con información clara para que tu empresa se mantenga creciendo.',
  },
];

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Ir al inicio">
      <span className="logo-mark">
        <span className="logo-bars" />
        <span className="logo-arrow" />
      </span>
      <span className="logo-text">
        <strong>POLENZ</strong>
        <small>CONSULTING</small>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? 'nav open' : 'nav'}>
          <a onClick={closeMenu} href="#servicios">Servicios</a>
          <a onClick={closeMenu} href="#planes">Planes</a>
          <a onClick={closeMenu} href="#proceso">Proceso</a>
          <a onClick={closeMenu} href="#contacto">Contacto</a>
          <a onClick={closeMenu} className="nav-cta" href="https://wa.me/18090000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Contabilidad · Auditoría · Asesoría fiscal</span>
          <h1>Organiza hoy tus números. Haz crecer mañana tu empresa.</h1>
          <p>
            En Polenz Consulting ayudamos a empresas, emprendedores y contribuyentes a mantener su contabilidad,
            impuestos, documentos y decisiones financieras bajo control.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contacto">Solicitar asesoría</a>
            <a className="button secondary" href="#servicios">Ver servicios</a>
          </div>
          <div className="trust-row" aria-label="Características principales">
            <span>Confianza</span>
            <span>Profesionalismo</span>
            <span>Resultados</span>
          </div>
        </div>

        <div className="hero-card" aria-label="Resumen visual de servicios">
          <div className="hero-card-header">
            <div>
              <span>Panel de control</span>
              <strong>Tu negocio al día</strong>
            </div>
            <span className="status-pill">Activo</span>
          </div>
          <div className="metric-grid">
            <div className="metric-card">
              <small>Obligaciones</small>
              <strong>12</strong>
              <span>en seguimiento</span>
            </div>
            <div className="metric-card">
              <small>Documentos</small>
              <strong>36</strong>
              <span>organizados</span>
            </div>
            <div className="metric-card wide">
              <small>Crecimiento</small>
              <div className="chart-bars">
                <i style={{ height: '30%' }} />
                <i style={{ height: '48%' }} />
                <i style={{ height: '62%' }} />
                <i style={{ height: '76%' }} />
                <i style={{ height: '92%' }} />
              </div>
            </div>
          </div>
          <div className="hero-note">
            <span className="check">✓</span>
            <p>Información clara para decidir con seguridad.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="section services-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Nuestros servicios</span>
          <h2>Soluciones contables que se adaptan a tu negocio</h2>
          <p>Desde la organización inicial hasta el seguimiento fiscal, documental y financiero de tu empresa.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section benefits-section">
      <div className="container benefits-grid">
        <div className="benefit-copy">
          <span className="eyebrow">¿Por qué organizar tu contabilidad?</span>
          <h2>Una contabilidad desorganizada puede costarte más de lo que imaginas.</h2>
          <p>
            Multas, pagos duplicados, decisiones erróneas y pérdida de oportunidades suelen venir de no tener
            información financiera clara y actualizada.
          </p>
        </div>

        <div className="benefit-list">
          {benefits.map((benefit) => (
            <div className="benefit-item" key={benefit}>
              <span>✓</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="planes" className="section plans-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Planes flexibles</span>
          <h2>Tenemos un plan para cada etapa de tu empresa</h2>
          <p>La estructura puede ajustarse según el tamaño, necesidad y nivel de seguimiento requerido.</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article className={plan.featured ? 'plan-card featured' : 'plan-card'} key={plan.name}>
              <span className="plan-tag">{plan.tag}</span>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contacto" className="plan-link">Solicitar información</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="section process-section">
      <div className="container">
        <div className="section-heading light">
          <span className="eyebrow">Método de trabajo</span>
          <h2>De la desorganización al control financiero</h2>
          <p>Un proceso claro para entender, ordenar, cumplir y acompañar el crecimiento de tu negocio.</p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureSystem() {
  return (
    <section className="section future-section">
      <div className="container future-grid">
        <div>
          <span className="eyebrow">Preparado para crecer</span>
          <h2>Esta web puede evolucionar a una plataforma completa de gestión.</h2>
          <p>
            La estructura inicial queda pensada para que en una segunda fase se pueda integrar un sistema interno
            con clientes, documentos, tareas, vencimientos fiscales, cuentas por cobrar y reportes.
          </p>
        </div>
        <div className="future-panel">
          <div>Clientes</div>
          <div>Documentos</div>
          <div>Tareas</div>
          <div>Cobros</div>
          <div>Reportes</div>
          <div>Vencimientos</div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Contabilidad e impuestos', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Contáctanos</span>
          <h2>Hablemos de cómo podemos organizar tu empresa.</h2>
          <p>
            Completa el formulario y el equipo de Polenz Consulting podrá orientarte según la necesidad actual de tu negocio.
          </p>
          <div className="contact-data">
            <a href="tel:+18090000000">+1 (809) 000-0000</a>
            <a href="mailto:contacto@polenzconsulting.com">contacto@polenzconsulting.com</a>
            <a href="https://wa.me/18090000000" target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent && <div className="form-success">Solicitud registrada en el frontend. Luego la conectamos al backend.</div>}

          <label>
            Nombre o empresa
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Ej.: Comercial Pérez SRL"
              required
            />
          </label>

          <label>
            Teléfono
            <input
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              placeholder="Ej.: 809-000-0000"
              required
            />
          </label>

          <label>
            Servicio de interés
            <select value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}>
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
          </label>

          <label>
            Mensaje
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder="Cuéntanos brevemente qué necesitas organizar."
              rows="5"
            />
          </label>

          <button className="button primary full" type="submit">Enviar solicitud</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo />
        <p>Confianza. Profesionalismo. Resultados.</p>
        <span>© {new Date().getFullYear()} Polenz Consulting. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Plans />
        <Process />
        <FutureSystem />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
