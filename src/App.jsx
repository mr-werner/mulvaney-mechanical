import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Award, Clock, Droplets, Factory, Flame, Mail, MapPin, Menu, Phone, Printer,
  Snowflake, Wind, Wrench, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/mm-logo.png";
import pumpRoom from "./assets/pump-room.jpg";
import boilerRoom from "./assets/boiler-room.jpg";
import fireRiser from "./assets/fire-riser.jpg";
import pipeCrew from "./assets/pipe-crew.jpg";
import underground from "./assets/underground.jpg";
import cleanroomSkid from "./assets/cleanroom-skid.jpg";
import welding from "./assets/welding.jpg";
import processLine from "./assets/process-line.jpg";
import van from "./assets/van.jpg";
import cleanroomTech from "./assets/cleanroom-tech.jpg";
import george from "./assets/george.jpg";
import charlie from "./assets/charlie.jpg";
import mark from "./assets/mark.jpg";
import janette from "./assets/janette.jpg";
import ctSbe from "./assets/ct-sbe.jpg";

// ------------------------------------------------------------ Content (from mulvaneymechanical.com: home, about, team, licenses,
// affiliations, community, awards, all service pages, testimonials and contact)
const COMPANY = "Mulvaney Mechanical, Inc.";
const SHORT = "Mulvaney Mechanical";
const ABBR = "mmi";
const END_DATE = "2026-12-02T23:59:59-05:00";
const PHONE = "(203) 797-8005";
const PHONE_TEL = "+12037978005";
const FAX = "(203) 794-1786";
const EMAIL = "mmi@mulvaneyinc.com";
const ADDRESS = ["4 Christopher Columbus Ave.", "Danbury, CT 06810"];
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=4+Christopher+Columbus+Ave+Danbury+CT+06810";

const NAV = [
  ["Services", "#services"],
  ["Clean Rooms", "#cleanrooms"],
  ["Licenses", "#licenses"],
  ["Clients", "#clients"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

const STATS = [
  ["24/7", "Emergency service department"],
  ["Class 10", "Clean room environments"],
  ["±0.1 °C", "Constant-temperature control"],
  ["5", "States & D.C. licensing jurisdictions"],
];

const SERVICES = [
  { icon: Factory, marker: "PROCESS", color: "orange", title: "Process piping", text: "Chemical, steam, condensate, ammonia, air or water. Design through installation and commissioning for technology and industrial facilities, laid out for efficient operation and easy future maintenance." },
  { icon: Flame, marker: "HEATING", color: "red", title: "Heating", text: "Design, engineering and installation of gas, oil and heat pump heating systems, from small commercial systems to large industrial installations, plus fast, reliable repair when a system goes down mid-season." },
  { icon: Snowflake, marker: "COOLING", color: "blue", title: "Air conditioning", text: "Direct expansion and split AC systems, packaged units and central chiller systems, with diagnostics, repair and maintenance plans that keep systems from failing early." },
  { icon: Droplets, marker: "PLUMBING", color: "green", title: "Plumbing", text: "Sanitary plumbing, fluids transmission and high-purity installations. Our tradesmen routinely work on welded, threaded, flanged and every other type of piping system." },
  { icon: Wind, marker: "MED GAS", color: "yellow", title: "High-purity gas piping", text: "Medical service and other high-purity gas piping systems are a routine part of our work, installed and serviced in medical and industrial facilities." },
  { icon: Wrench, marker: "SERVICE", color: "navy", title: "Service & maintenance", text: "Preventative maintenance programs for packaged rooftop units, split systems and more, energy management controls, and startup and warranty service for both commercial and residential." },
];

const LICENSES = [
  { state: "Connecticut", code: "CT", items: [["Plumbing", "P1 #202488"], ["Heating & Cooling", "S1 #302746"], ["Sheet Metal", "SM1 #691"], ["Medical Gas", "MG1 #221"], ["Fire Protection Contractor", "F1 #10854"], ["Building Contractor", "Reg. #531696"], ["Mechanical Contractor", "MEC. #1019"], ["Home Improvement Contractor", "#0531696"]] },
  { state: "New York", code: "NY", items: [["Putnam Co. HVAC", "#071"], ["Putnam Co. Plumbing", "#402"], ["Putnam Co. Sprinkler", "#004"], ["Rockland Co. Plumbing-Heating-Cooling", "#P-1055"], ["Westchester Co. Master Plumber", "#206"]] },
  { state: "New Jersey", code: "NJ", items: [["Master Plumber", "36BI00961900"], ["Building Contractor", "#13VH00953900"]] },
  { state: "District of Columbia", code: "DC", items: [["Master Plumber", "PM1241"]] },
  { state: "Florida", code: "FL", items: [["Plumbing Contractor", "CFC056694"]] },
];

const TESTIMONIALS = [
  { quote: "We have used Mulvaney Mechanical for several years in emergency situations ranging from gas leaks and drainage problems to HVAC system installation and repair. Their emergency response is second to none, their staff are always professional, honest, reliable, hardworking conscientious and courteous. This company does not take any shortcuts…. They do things right! I would recommend them to anyone without hesitation.", name: "Joseph Olenik", role: "Director of Facilities, Weston Public Schools" },
  { quote: "Mulvaney Mechanical excels at the difficult, complicated \"mission impossible\" type projects. With over 30 years of construction experience with them, Mulvaney Mechanical has always exceeded the customer's expectation and completed the jobs on time and on budget.", name: "Bob Henry", role: "Purdue Pharma Facility Dir. (ret)" },
  { quote: "Mulvaney Mechanical is our preferred contractor, no job is too small nor too large. Their performance and quality of workmanship is second to none no matter how difficult the project is.", name: "Mark Wcislo", role: "Facilities Engineer, ASML" },
  { quote: "We consider the Mulvaney Mechanical team a construction partner who has proven to be creative in problem resolution, reliable in time commitments, and overall consistent in meeting our expectations.", name: "Nicholas Dellolio", role: "Senior Manager Facilities, PerkinElmer" },
  { quote: "I have used Mulvaney Mechanical over the last few years and during all this time I have found this firm to be reliable, approachable, efficient and knowledgeable.", name: "Mack Henriques", role: "Praxair" },
  { quote: "I would like to express my appreciation to the Mulvaney crew working on our project. This has not been an easy process from the start. Rich and his crew batted 1,000! Job well done!", name: "John Brady", role: "Facility Engineer, Westside Development Partners, LLC" },
];

const TEAM = [
  { img: george, name: "George Mulvaney", role: "Founder & President", text: "The driving force behind our Single Source approach. His philosophy: when you sell service, \"It's either great or it isn't service.\"" },
  { img: charlie, name: "Charles Brough, P.E.", role: "Vice President", text: "A registered Professional Engineer and part of the team since 1989; chief design engineer, estimator and project manager for some of the largest firms on the Eastern seaboard." },
  { img: mark, name: "Mark Mulvaney", role: "Vice President", text: "Hands-on installation and project management experience at Mulvaney dating back to 1992." },
  { img: janette, name: "Janette Blackstock", role: "VP & Corporate Secretary", text: "Manager of Administration since 2000, responsible for MMI's legal, corporate and professional requirements." },
];

const AWARDS = [
  ["Subcontractor of the Year", "Associated General Contractors of America / AGC of Connecticut"],
  ["Cecil J. Previdi Award, 2019", "Greater Danbury Chamber of Commerce (George Mulvaney)"],
  ["Greater Danbury Good Scout Award Honoree", "Connecticut Yankee Council, Boy Scouts of America"],
  ["Robert S. Young Humanitarian Award", "Ability Beyond"],
  ["Spirit of Humanity Award", "Regional Hospice"],
  ["Annie Orr Good Samaritan Award", "Amos House"],
  ["Ridgefield Community Leadership Award", "Association of Religious Communities"],
];

const AFFILIATIONS = [
  "MCAC · Director", "CT Pipefitters Pension Fund · Management Trustee", "Past President, MCAC", "Past President, Connecticut Building Congress",
  "MCAA", "ASHRAE · Bi-State Chapter", "NFPA", "IFMA", "AFE", "BOMA", "Construction Institute, University of Hartford",
];

// ------------------------------------------------------------ Components
function Marker({ children, color = "blue" }) {
  return <span className={`marker marker-${color}`}><span>{children}</span><i aria-hidden="true" /></span>;
}

function Pipe() {
  return <div className="pipe" aria-hidden="true"><span /><span /><span /></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="topbar">
        <span><Clock size={15} /> 24-hour emergency service</span>
        <span className="topbar-mid">Plumbing · Heating · Air Conditioning · Process Piping</span>
        <a href={`tel:${PHONE_TEL}`}><Phone size={14} /> {PHONE}</a>
      </div>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <a href="#top" className="brand" aria-label={`${SHORT} home`}><img src={logo} alt={`${COMPANY} logo: Your Single Source Solution`} width="800" height="201" /></a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href={`tel:${PHONE_TEL}`} className="btn btn-red nav-cta" onClick={() => setOpen(false)}><Phone size={16} /> 24/7 Service</a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img src={pumpRoom} alt="Stainless process piping and pump skids installed by Mulvaney Mechanical" />
      </div>
      <div className="wrap hero-inner">
        <Marker color="blue">YOUR SINGLE SOURCE SOLUTION</Marker>
        <h1>Mechanical work for buildings that <em>can't afford to fail.</em></h1>
        <p className="lede">Plumbing, heating, air conditioning, process piping and clean rooms for medical, pharmaceutical, laboratory and industrial facilities across Connecticut and New York, with a service department on call 24 hours a day.</p>
        <div className="hero-actions">
          <a className="btn btn-blue" href="#contact">Start a project <ArrowRight size={18} /></a>
          <a className="btn btn-red" href={`tel:${PHONE_TEL}`}><Phone size={18} /> Emergency: {PHONE}</a>
        </div>
      </div>
      <div className="wrap">
        <div className="gauges">
          {STATS.map(([n, l]) => <div key={l} className="gauge"><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <header className="sec-head">
          <Marker color="green">SERVICES</Marker>
          <h2>Every pipe, duct and system in one contract.</h2>
          <p>We provide efficient design, engineering and installation of HVAC, plumbing and specialty piping in commercial, industrial and institutional settings, and our skilled journeymen service and repair what we build.</p>
        </header>
        <div className="svc-grid">
          {SERVICES.map(({ icon: Icon, marker, color, title, text }) => (
            <article key={title} className="svc">
              <Marker color={color}>{marker}</Marker>
              <div className="svc-icon"><Icon size={26} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mosaic" aria-label="Recent Mulvaney Mechanical work">
        {[[boilerRoom, "Boiler room with insulated piping"], [welding, "Pipefitter welding overhead"], [fireRiser, "Fire protection riser and backflow assemblies"], [processLine, "Process piping along a manufacturing line"], [underground, "Crew installing underground piping in a trench"], [pipeCrew, "Crew connecting piping in a mechanical chase"]].map(([src, alt]) => (
          <img key={alt} src={src} alt={alt} loading="lazy" />
        ))}
      </div>
    </section>
  );
}

function CleanRooms() {
  return (
    <section className="section cleanrooms" id="cleanrooms">
      <div className="wrap clean-grid">
        <figure className="clean-photo">
          <img src={cleanroomTech} alt="Technician in a clean room suit beside mechanical piping" loading="lazy" />
          <img className="clean-inset" src={cleanroomSkid} alt="High-purity process skid with insulated piping" loading="lazy" />
        </figure>
        <div>
          <Marker color="yellow">CLEAN ROOMS & CONTROLLED ENVIRONMENTS</Marker>
          <h2>Over 40 years of ultra-clean air.</h2>
          <p>We design, specify and install clean room mechanical systems that deliver ultra-clean atmospheres down to <strong>Class 10</strong>, with heating and cooling held to <strong>plus or minus 0.1 °C</strong>.</p>
          <p>Medical facilities, pharmaceutical laboratories, product development labs, pharmaceutical production plants and semiconductor manufacturers rely on us for highly controlled working atmospheres.</p>
          <ul className="spec">
            <li><span>Cleanliness</span><strong>to Class 10</strong></li>
            <li><span>Temperature</span><strong>±0.1 °C</strong></li>
            <li><span>Industries</span><strong>Pharma · Semiconductor · Medical · Labs</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Licenses() {
  return (
    <section className="section licenses" id="licenses">
      <div className="wrap">
        <header className="sec-head light">
          <Marker color="orange">LICENSES</Marker>
          <h2>Licensed where the work is.</h2>
          <p>Mulvaney Mechanical holds trade licenses in Connecticut, New York, New Jersey, Florida and the District of Columbia.</p>
        </header>
        <div className="tags">
          {LICENSES.map(({ state, code, items }) => (
            <article key={code} className={`tag tag-${code.toLowerCase()}`}>
              <div className="tag-hole" aria-hidden="true" />
              <header><strong>{code}</strong><span>{state}</span></header>
              <ul>{items.map(([what, num]) => <li key={what}><span>{what}</span><b>{num}</b></li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % TESTIMONIALS.length), 9000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="section clients" id="clients">
      <div className="wrap clients-grid">
        <div>
          <Marker color="red">WHAT FACILITY MANAGERS SAY</Marker>
          <h2>Trusted by the people who run the buildings.</h2>
          <p className="muted">Testimonials as published on the current {SHORT} website.</p>
          <div className="client-names">
            {TESTIMONIALS.map((x, n) => (
              <button key={x.name} type="button" className={n === i ? "is-active" : ""} onClick={() => setI(n)}>
                <strong>{x.name}</strong><span>{x.role}</span>
              </button>
            ))}
          </div>
        </div>
        <blockquote className="quote" key={t.name}>
          <p>“{t.quote}”</p>
          <footer><strong>{t.name}</strong><span>{t.role}</span></footer>
        </blockquote>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section team" id="team">
      <div className="wrap">
        <header className="sec-head">
          <Marker color="navy">THE TEAM</Marker>
          <h2>A family company with an engineer's discipline.</h2>
          <p>Safety comes first: seasoned instructors teach OSHA topics in-house, and every employee gets the PPE and training they need. Getting our people home to their families is our daily commitment.</p>
        </header>
        <div className="team-grid">
          {TEAM.map((m) => (
            <article key={m.name} className="member">
              <img src={m.img} alt={m.name} loading="lazy" />
              <div><h3>{m.name}</h3><span>{m.role}</span><p>{m.text}</p></div>
            </article>
          ))}
        </div>
        <div className="honors">
          <div className="awards">
            <h3><Award size={22} /> Awards & recognition</h3>
            <ul>{AWARDS.map(([a, b]) => <li key={a}><strong>{a}</strong><span>{b}</span></li>)}</ul>
          </div>
          <div className="affil">
            <h3>Industry leadership</h3>
            <div className="chips">{AFFILIATIONS.map((a) => <span key={a}>{a}</span>)}</div>
            <img className="sbe" src={ctSbe} alt="Mulvaney Mechanical, Inc. is a Connecticut Certified Small Business Enterprise" loading="lazy" />
            <p className="community">George Mulvaney also serves on the boards of Regional Hospice of Western Connecticut, Ability Beyond and the Association of Religious Communities, and chairs the Good Scout Award Committee of the Connecticut Yankee Council.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectForm() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", address: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json().catch(() => ({}));
      setStatus(r.ok && d.success ? (d.demo ? "demo" : "sent") : "error");
    } catch { setStatus("error"); }
  }
  if (status === "sent" || status === "demo") {
    return (
      <div className="form-done">
        <h3>Request received.</h3>
        <p>{status === "demo" ? `This concept's form isn't connected yet. Please call ${PHONE} or email ${EMAIL}.` : "A Mulvaney Mechanical representative will contact you shortly."}</p>
      </div>
    );
  }
  return (
    <form className="proj-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
        <label>Company / facility<input value={form.company} onChange={(e) => update("company", e.target.value)} autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>What do you need?
          <select value={form.service} onChange={(e) => update("service", e.target.value)}>
            <option value="">Select...</option>
            {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
            <option>Clean room / controlled environment</option>
            <option>Something else</option>
          </select>
        </label>
        <label>Site location<input value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Town, state" /></label>
      </div>
      <label>Project or service details<textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} /></label>
      <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} aria-hidden="true" />
      {status === "error" && <p className="form-error" role="alert">That didn't go through. Please call {PHONE}.</p>}
      <button className="btn btn-blue" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send request"} <ArrowRight size={18} /></button>
      <p className="form-fine">Emergency? Don't wait for a reply. Call {PHONE}, 24 hours a day.</p>
    </form>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <Marker color="blue">CONTACT</Marker>
          <h2>Talk to a Mulvaney representative.</h2>
          <img className="van" src={van} alt="Mulvaney Mechanical service van" loading="lazy" />
          <ul className="contact-list">
            <li><Phone size={18} /><div><span>24-hour service</span><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></div></li>
            <li><Mail size={18} /><div><span>Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
            <li><Printer size={18} /><div><span>Fax</span>{FAX}</div></li>
            <li><MapPin size={18} /><div><span>Office</span><a href={MAP_URL} target="_blank" rel="noopener noreferrer">{ADDRESS[0]}, {ADDRESS[1]} <ArrowUpRight size={14} /></a></div></li>
          </ul>
        </div>
        <div className="contact-card"><h3>Request service or a quote</h3><ProjectForm /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Pipe />
      <div className="wrap footer-grid">
        <div>
          <div className="footer-logo"><img src={logo} alt={SHORT} width="800" height="201" loading="lazy" /></div>
          <p>Plumbing, heating, air conditioning, process piping and clean room mechanical systems for commercial, industrial and institutional facilities.</p>
        </div>
        <div>
          <h4>Services</h4>
          {SERVICES.map((s) => <a key={s.title} href="#services">{s.title}</a>)}
        </div>
        <div>
          <h4>Danbury office</h4>
          <p>{ADDRESS[0]}<br />{ADDRESS[1]}</p>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a>Fax {FAX}</p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY} · Independent concept, not for official use</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pipe />
        <Services />
        <CleanRooms />
        <Licenses />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
