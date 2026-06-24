/* Course It — Landing page sections (v4).
   Hero, Marquee, About (hybrid), Services (NEW), Creators, Team.
   Journal / "In every world" / Closing / CTA / Footer = thin placeholders. */

const { useState, useEffect, useRef } = React;

/* ----------------------------------------------------------------
   Scroll-reveal helper
---------------------------------------------------------------- */
function useScrollReveal() {
  useEffect(() => {
    const animate = !document.hidden;
    const reveal = (el) => {
      el.classList.add("is-in");
      if (animate) el.classList.add("animate-in");
    };
    const check = () => {
      const vh = window.innerHeight;
      document.querySelectorAll(".reveal:not(.is-in)").forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) reveal(el);
      });
    };
    check();
    const onScroll = () => requestAnimationFrame(check);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const safety = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-in)").forEach(reveal);
    }, 1800);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(safety);
    };
  }, []);
}

/* Reusable eyebrow with horizontal lines on both sides */
const Eyebrow = ({ children, both = false, className = "" }) => (
  <div className={`eyebrow-lines ${both ? "eyebrow-lines--both" : ""} ${className}`}>
    <span className="eyebrow-lines__rule" />
    <span>{children}</span>
    {both && <span className="eyebrow-lines__rule" />}
  </div>
);

/* ----------------------------------------------------------------
   Header (v6) — always white, WhatsApp + Instagram CTAs
---------------------------------------------------------------- */
/* Header theme per section — dark sections show the light (Cloud Dancer)
   logo + light wordmark; light sections show the black logo + black wordmark. */
const DARK_SECTION_IDS = new Set(["top", "marquee", "cta", "journal"]);
const HEADER_SECTION_IDS = [
  "top", "marquee", "about", "services", "creators",
  "slot-06", "team", "cta", "form", "journal", "footer",
];

function useActiveHeaderTheme() {
  const [dark, setDark] = useState(true); // hero is dark
  useEffect(() => {
    const els = HEADER_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;
    const visible = new Set();
    const pick = () => {
      for (const el of els) {
        if (visible.has(el)) { setDark(DARK_SECTION_IDS.has(el.id)); return; }
      }
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      });
      pick();
    }, { rootMargin: "-64px 0px -85% 0px", threshold: 0 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return dark;
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dark = useActiveHeaderTheme();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const brandColor = dark ? "#F0EEE9" : "#0A0A0A";
  const close = () => setOpen(false);
  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <a className="nav__brand" href="#top" style={{ color: brandColor }} onClick={close}>
        <span className="nav__brand-mark"><BrandMark dark={dark} /></span>
        <span className="nav__brand-name">COURSE IT</span>
      </a>
      <button className="nav__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} style={{ color: brandColor }}>
        <span></span><span></span><span></span>
      </button>
      <div className="nav__links">
        <a href="#about" onClick={close}>About</a>
        <a href="#services" onClick={close}>Services</a>
        <a href="#creators" onClick={close}>Creators</a>
        <a href="#journal" onClick={close}>Journal</a>
        <a className="nav__cta" href="#form" onClick={close}>Let's build →</a>
      </div>
    </nav>
  );
};

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
const Hero = ({ accent }) => {
  const cls = accent === "lime" ? "is-lime" : accent === "white" ? "is-white" : "";
  return (
    <section className="hero" id="top">
      <div className="hero__scene">
        <img
          src={(window.__resources && window.__resources.heroBg) || "assets/hero-bg.jpg"}
          alt="A single blue desk with a silver laptop in a vast green field, under a pale-blue sky."
        />
      </div>
      <div className="hero__inner">
        <h1 className="hero__display reveal">
          Your knowledge<br/>
          deserves <em className={cls}>a stage.</em>
        </h1>
        <div className="hero__buttons reveal">
          <a className="cta-btn cta-btn--lime" href="mailto:play@courseit.studio">
            <span>Email Us</span>
            <em className="cta-btn__arrow">→</em>
          </a>
          <a className="cta-btn cta-btn--ghost" href="https://www.instagram.com/courseit.studio" target="_blank" rel="noopener noreferrer">
            <span>DM us on Instagram</span>
            <em className="cta-btn__arrow">→</em>
          </a>
        </div>
      </div>
      <div className="hero__corner hero__corner--bl">COURSE BUILDING STUDIO · TEL AVIV · 2026</div>
      <div className="hero__corner hero__corner--br">03 / 24 IN PRODUCTION</div>
    </section>
  );
};

/* ----------------------------------------------------------------
   Marquee
---------------------------------------------------------------- */
const Marquee = () => {
  const phrases = [
    "EVERY CREATOR HAS A COURSE",
    "YOU KNOW THINGS WORTH TEACHING",
    "WE DON'T CONSULT. WE BUILD.",
  ];
  const Run = () => (
    <>
      {phrases.map((p, i) => (
        <React.Fragment key={i}>
          <span className="marquee__item">{p}</span>
          <span className="marquee__heart">♥</span>
        </React.Fragment>
      ))}
    </>
  );
  return (
    <section className="marquee" id="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Run />
        <Run />
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------
   About — hybrid: editorial opening + bridge pull quote + zigzag
---------------------------------------------------------------- */
const About = () => (
  <section className="about" id="about">
    {/* Part 1 — Editorial opening */}
    <div className="about__opener">
      <Eyebrow both className="about__eyebrow reveal">01 / WHY</Eyebrow>
      <h2 className="about__title reveal">
        What if the person<br/>
        who inspired you<br/>
        could <em>actually teach you?</em>
      </h2>
      <p className="about__lede reveal">
        They already do. Through every post they write, every interview they give, every glimpse you get into their work. You learn from them without realizing. You absorb their thinking. <em>You become a fan of how they see the world.</em>
      </p>
      <p className="about__lede about__lede--after reveal">
        That's where Course It comes in. We're a studio. We work with experts to turn what they know into a real course. Their voice. Their face. Their world. <em>Simple as that.</em>
      </p>
    </div>

    {/* Bridge — pull quote */}
    <blockquote className="about__bridge reveal">
      Every creator has <em>a course.</em><br/>
      We just <em>pull it out.</em>
    </blockquote>

    {/* Part 2 — zigzag blocks */}
    <div className="about__zigzag">
      <div className="about__block reveal">
        <div className="about__block-img about__block-img--01">
          <span className="about__block-img-label">DISCOVERY MEETING · TWO CHAIRS</span>
        </div>
        <div className="about__block-body">
          <h3 className="about__block-title">01 / tHe stAmP</h3>
          <p>
            First it was the <em>blog</em>. Then the <em>podcast</em>. Then the <em>Instagram</em>. Today, the stamp is a course.
          </p>
          <p>
            The problem isn't that experts aren't teaching. It's that what they teach is <em>scattered</em> — in podcasts, in stories, in DMs, in years of work nobody can sit through. <strong>A course is what changes that.</strong>
          </p>
        </div>
      </div>

      <div className="about__block about__block--reverse reveal">
        <div className="about__block-img about__block-img--02">
          <span className="about__block-img-label">STUDIO SPACE · IN PRODUCTION</span>
        </div>
        <div className="about__block-body">
          <h3 className="about__block-title">02 / tHe stUdIo</h3>
          <p>
            Course It is a studio in Tel Aviv. Founded in 2026 by <strong>Matan Shoham</strong>.
          </p>
          <p>
            This is the moment a creator stops being a feed and starts being a source. When followers become students. <strong>In your voice. With your face on it.</strong>
          </p>
        </div>
      </div>
    </div>

    <div className="about__close reveal">
      COURSE IT · COURSE BUILDING STUDIO · TEL AVIV
    </div>
  </section>
);

/* ----------------------------------------------------------------
   Services (NEW in v4) — 3+2 grid, no numbers, humble copy
---------------------------------------------------------------- */
const SERVICES = [
  { no: "01", name: "Discovery",
    desc: "We learn from you. The way a student does." },
  { no: "02", name: "Structure",
    desc: "We take your knowledge and give it a clear order — from where students are to where you want them." },
  { no: "03", name: "Identity",
    desc: "We make sure your course sounds like you. The name. The voice. The story." },
  { no: "04", name: "Production",
    desc: "From script to screen. We film, we edit, we deliver a course ready to go live." },
  { no: "05", name: "Stage",
    desc: "Your course meets the world." },
];

const Services = () => (
  <section className="services" id="services">
    <div className="container container--wide">
      <div className="services__head">
        <div className="reveal">
          <Eyebrow className="services__eyebrow">02 / SERVICES</Eyebrow>
          <h2 className="services__title">
            What we <em>build.</em>
          </h2>
        </div>
        <p className="services__intro reveal">
          Five steps to your course.
        </p>
      </div>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <div key={i} className="svc-cell reveal">
            <div className="svc-cell__no">{s.no}</div>
            <h3 className="svc-cell__name">{s.name}</h3>
            <p className="svc-cell__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ----------------------------------------------------------------
   Creators
---------------------------------------------------------------- */
const CREATORS = [
  { id: "01", tag: "PHOTOGRAPHY", tone: ["#8B5A2B", "#3D2515"],
    lead: "The", role: "Photographer",
    desc: "A course built around how you see the world." },
  { id: "02", tag: "DESIGN", tone: ["#5B7DA8", "#1F3D5C"],
    lead: "The", role: "Designer",
    desc: "A course built around what you create." },
  { id: "03", tag: "ARCHITECTURE", tone: ["#C8B894", "#6E5F44"],
    lead: "The", role: "Architect",
    desc: "A course built around what you build." },
  { id: "04", tag: "BUSINESS", tone: ["#5A6B72", "#26343A"],
    lead: "The", role: "Founder",
    desc: "A course built around what you've launched." },
  { id: "05", tag: "ART", tone: ["#8E5B4A", "#3D2118"],
    lead: "The", role: "Artist",
    desc: "A course built around how you make." },
  { id: "06", tag: "FOOD", tone: ["#6E8C5A", "#324425"],
    lead: "The", role: "Chef",
    desc: "A course built around what you cook." },
];

const Creators = () => (
  <section className="creators" id="creators">
    <div className="creators__head">
      <div className="reveal">
        <Eyebrow className="creators__eyebrow">03 / CREATORS</Eyebrow>
        <h2 className="creators__title">
          Who we <em>build with.</em>
        </h2>
      </div>
      <p className="creators__intro reveal">
        We choose by craft, not by following count.
      </p>
    </div>

    <div className="creators__scroll">
      {CREATORS.map((c) => (
        <article key={c.id} className="creator-card reveal">
          <div className="creator-card__photo">
            <div className="creator-card__tag">{c.tag}</div>
            <div className="creator-card__no">{c.id} / 06</div>
            <div
              className="creator-card__front"
              style={{ background: `linear-gradient(135deg, ${c.tone[0]} 0%, ${c.tone[1]} 100%)` }}
            >
              <span className="creator-card__placeholder">PORTRAIT · {c.role.toUpperCase()}</span>
            </div>
          </div>
          <h3 className="creator-card__name">
            <span>{c.lead}</span> <em>{c.role}</em>
          </h3>
          <p className="creator-card__desc">{c.desc}</p>
        </article>
      ))}
    </div>

    <div className="creators__hint reveal">
      <span className="creators__hint-rule" />
      <span>SCROLL FOR MORE</span>
      <em className="creators__hint-glyph">→</em>
      <span className="creators__hint-rule" />
    </div>

    <div className="creators__foot reveal">
      <a href="/creators" className="creators__all">View all creators →</a>
    </div>
  </section>
);

/* ----------------------------------------------------------------
   Team — clean grid. Image placeholders only — decorative elements
   (if any) will be baked into the photos provided later.
---------------------------------------------------------------- */
const TEAM = [
  { first: "Matan", last: "Shoham",
    role: "FOUNDER & CEO",
    tone: ["#0E2B5A", "#04122E"] },
  { first: "Inbar", last: "Kidron",
    role: "COO",
    tone: ["#6E8C5A", "#324425"] },
  { first: "Yali", last: "Michaeli",
    role: "PRODUCER",
    tone: ["#A88A55", "#4C3A1E"] },
  { first: "Ido", last: "Eshet",
    role: "GRAPHIC DESIGNER",
    tone: ["#8E5B4A", "#3D2118"] },
  { first: "Yarden", last: "Pravda",
    role: "TEACHING DIRECTOR",
    tone: ["#5B7DA8", "#1F3D5C"] },
  { first: "Zohar", last: "Kedar",
    role: "MARKETING",
    tone: ["#8B5A2B", "#3D2515"] },
];

const Team = () => (
  <section className="team" id="team">
    <div className="container container--wide">
      <div className="team__head">
        <div className="reveal">
          <Eyebrow className="team__eyebrow">05 / TEAM</Eyebrow>
          <h2 className="team__title">
            Our <em>team.</em>
          </h2>
        </div>
      </div>

      <div className="team__scroll">
        {TEAM.map((m, i) => (
          <article key={i} className="member reveal">
            <div
              className="member__photo"
              style={{ background: `linear-gradient(135deg, ${m.tone[0]} 0%, ${m.tone[1]} 100%)` }}
            >
              <span className="member__placeholder">
                PORTRAIT · {m.first.toUpperCase()}
              </span>
            </div>
            <h3 className="member__name">
              <span>{m.first}</span>
              <em>{m.last}</em>
            </h3>
            <div className="member__role">{m.role}</div>
          </article>
        ))}
      </div>

      <div className="team__hint reveal">
        <span className="creators__hint-rule" />
        <span>SCROLL FOR MORE</span>
        <em className="creators__hint-glyph">→</em>
        <span className="creators__hint-rule" />
      </div>
    </div>
  </section>
);

/* ----------------------------------------------------------------
   CTA (v6) — top-down desk image. Headline top, eyebrow below, buttons bottom.
---------------------------------------------------------------- */
const CTA = () => (
  <section className="cta" id="cta">
    <div className="cta__scene">
      <img src={(window.__resources && window.__resources.ctaBg) || "assets/cta-bg.png"} alt="A long deep navy desk lying across a green grass field, seen from directly above, with a single silver laptop on top." />
    </div>
    <div className="cta__inner">
      <div className="cta__top">
        <h2 className="cta__title reveal">
          Come sit <em>with us.</em>
        </h2>
      </div>
      <div className="cta__bottom">
        <div className="cta__buttons reveal">
          <a className="cta-btn cta-btn--lime" href="mailto:play@courseit.studio">
            <span>Email Us</span>
            <em className="cta-btn__arrow">→</em>
          </a>
          <a className="cta-btn cta-btn--ghost" href="https://www.instagram.com/courseit.studio" target="_blank" rel="noopener noreferrer">
            <span>DM us on Instagram</span>
            <em className="cta-btn__arrow">→</em>
          </a>
        </div>
      </div>
    </div>
    <div className="cta__corner cta__corner--bl">EVERY CREATOR HAS A COURSE ♥</div>
    <div className="cta__corner cta__corner--br">COURSE IT · TEL AVIV · 2026</div>
  </section>
);

/* ----------------------------------------------------------------
   FORM (NEW in v6) — cream, contact form below CTA
---------------------------------------------------------------- */
const PLATFORMS = ["Instagram", "TikTok", "LinkedIn", "YouTube", "Facebook", "X (Twitter)", "Substack", "Other"];
const INDUSTRIES = [
  "Content Creator / Influencer",
  "Photography & Visual Arts",
  "Marketing & Sales",
  "Business & Entrepreneurship",
  "Design & Branding",
  "Tech & Software",
  "Health & Wellness",
  "Food & Cooking",
  "Fashion & Beauty",
  "Lifestyle Content",
  "Entertainment & Comedy",
  "Education & Coaching",
  "Architecture & Interior",
  "Other",
];

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="form-section" id="form" data-screen-label="09 FORM">
      <div className="form-section__inner">
        <Eyebrow both className="form-section__eyebrow reveal">OR LEAVE YOUR DETAILS</Eyebrow>
        <h2 className="form-section__title reveal">
          Not ready to chat? <em>Tell us about you.</em>
        </h2>

        <form
          className="ci-form reveal"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={(e) => {
            e.preventDefault();
            const formEl = e.target;
            const data = new URLSearchParams(new FormData(formEl));
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: data.toString(),
            }).catch(() => {});
            setSubmitted(true);
          }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="ci-form__hp" hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <div className="ci-form__row">
            <div className="ci-form__field">
              <label htmlFor="ci-name">YOUR NAME</label>
              <input id="ci-name" name="name" type="text" placeholder="Yoni Almakias" autoComplete="name" />
            </div>
            <div className="ci-form__field">
              <label htmlFor="ci-email">EMAIL</label>
              <input id="ci-email" name="email" type="email" placeholder="you@email.com" autoComplete="email" />
            </div>
          </div>

          <div className="ci-form__row">
            <div className="ci-form__field">
              <label htmlFor="ci-platform">MAIN PLATFORM</label>
              <div className="ci-form__select-wrap">
                <select id="ci-platform" name="platform" defaultValue="">
                  <option value="" disabled>Choose one</option>
                  {PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                <svg className="ci-form__select-arrow" viewBox="0 0 12 8" aria-hidden="true">
                  <path d="M1 1.5L6 6.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="ci-form__field">
              <label htmlFor="ci-handle">HANDLE OR LINK</label>
              <input id="ci-handle" name="handle" type="text" placeholder="@yourhandle" />
            </div>
          </div>

          <div className="ci-form__field ci-form__field--full">
            <label htmlFor="ci-industry">YOUR INDUSTRY</label>
            <div className="ci-form__select-wrap">
              <select id="ci-industry" name="industry" defaultValue="">
                <option value="" disabled>What world do you live in?</option>
                {INDUSTRIES.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
              <svg className="ci-form__select-arrow" viewBox="0 0 12 8" aria-hidden="true">
                <path d="M1 1.5L6 6.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="ci-form__submit-row">
            {submitted && (
              <span className="ci-form__msg">Thanks — we'll be in touch shortly.</span>
            )}
            <button type="submit" className="ci-form__submit" disabled={submitted}>
              <span>{submitted ? "SENT" : "SEND"}</span>
              <em>→</em>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------
   Journal — opinions, ideas, the occasional rant
---------------------------------------------------------------- */
const JOURNAL = [
  { href: "article-the-half-life-of-knowledge.html",
    media: "PHOTO · THE HALF-LIFE OF KNOWLEDGE",
    kind: "OPINION", date: "JUNE 2026 · 9 MIN",
    title: "The knowledge you learned <em>has expired.</em>",
    lede: "The half-life of professional knowledge has fallen below the length of a degree. Only knowledge earned in motion stays fresh." },
  { href: "article-creator-middle-class.html",
    media: "PHOTO · THE CREATOR MIDDLE CLASS",
    kind: "ESSAY", date: "JUNE 2026 · 9 MIN",
    title: "The creator <em>middle class</em> is here.",
    lede: "For years the story was binary — superstar or amateur. The 2026 data reveals a quiet third thing: stable, real, paying a salary." },
  { href: null,
    media: "PHOTO · THE 65-MINUTE EXTRACTION",
    kind: "BEHIND THE WORK", date: "JAN 2026 · 6 MIN",
    title: "The 65-minute <em>extraction.</em>",
    lede: "How we structure the first meeting with every creator. The 7 questions that turn a feed into a course." },
  { href: null,
    media: "PHOTO · FOLLOWERS VS STUDENTS",
    kind: "OPINION", date: "2026 · 5 MIN",
    title: "Followers aren't <em>students.</em>",
    lede: "An audience watches. A student finishes. The gap between the two is the whole job — and most creators never cross it." },
  { href: null,
    media: "PHOTO · A COURSE IS A PROMISE",
    kind: "NOTE", date: "2026 · 4 MIN",
    title: "A course is <em>a promise.</em>",
    lede: "Every course quietly says: spend your hours here and you'll come out changed. We design around keeping it." },
];

const Journal = () => (
  <section className="journal" id="journal" data-screen-label="10 JOURNAL">
    <div className="journal__inner">
      <div className="journal__head">
        <div className="reveal">
          <Eyebrow className="journal__eyebrow journal__eyebrow--lime">06 / JOURNAL</Eyebrow>
          <h2 className="journal__title">
            Notes from <em>the studio.</em>
          </h2>
        </div>
        <p className="journal__intro reveal">
          Opinions, ideas, and the occasional rant about why building courses needs to change.
        </p>
      </div>

      <div className="journal__scroll">
        {JOURNAL.map((a, i) => {
          const Card = a.href ? "a" : "article";
          return (
            <Card
              key={i}
              className="j-card reveal"
              {...(a.href ? { href: a.href } : {})}
            >
              <div className="j-card__media">
                <span className="j-card__media-label">{a.media}</span>
              </div>
              <div className="article__meta">
                <span>{a.kind}</span>
                <span className="article__meta-dot">·</span>
                <span>{a.date}</span>
              </div>
              <h3 className="j-card__title" dangerouslySetInnerHTML={{ __html: a.title }} />
              <p className="j-card__lede">{a.lede}</p>
              <span className="article__link article__link--small">Read →</span>
            </Card>
          );
        })}
      </div>

      <div className="journal__foot reveal">
        <a href="#" className="journal__all">View all articles →</a>
      </div>
    </div>
  </section>
);

/* ----------------------------------------------------------------
   Footer — cream, 4 columns
---------------------------------------------------------------- */
const Foot = () => (
  <footer className="foot" id="footer">
    <div className="foot__inner">
      <div className="foot__grid">
        <div className="foot__brand">
          <div className="foot__lockup">
            <span className="foot__mark"><BrandMark dark={false} /></span>
            <span className="foot__wordmark">COURSE IT</span>
          </div>
          <p className="foot__tag">
            Every creator has a course <span className="foot__heart">♥</span>
          </p>
        </div>

        <div className="foot__col">
          <h5>NAVIGATE</h5>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#creators">Creators</a></li>
            <li><a href="#journal">Journal</a></li>
          </ul>
        </div>

        <div className="foot__col">
          <h5>CONNECT</h5>
          <ul>
            <li><a href="https://www.instagram.com/courseit.studio" target="_blank" rel="noopener noreferrer">@courseit.studio</a></li>
            <li><a href="https://wa.me/972507796439?text=%D7%94%D7%99%D7%99%20Course%20It%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%93%D7%91%D7%A8" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="mailto:play@courseit.studio">Email</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>

        <div className="foot__col">
          <h5>STUDIO</h5>
          <ul className="foot__col--lines">
            <li>Tel Aviv · 2026</li>
            <li>Course Building Studio</li>
          </ul>
          <div className="foot__status">
            <span className="foot__pulse" />
            <span>Open for new creators</span>
          </div>
        </div>
      </div>

      <div className="foot__bottom">
        <span>© Course It Studio 2026</span>
      </div>
    </div>
  </footer>
);

/* ----------------------------------------------------------------
   Slot placeholder — thin, named (for the 2 TBD sections)
---------------------------------------------------------------- */
const SlotPlaceholder = ({ num, name }) => (
  <section className="slot" id={`slot-${num}`} data-screen-label={`${num} ${name}`}>
    <div className="slot__inner">
      <span className="slot__rule" />
      <span className="slot__label">TBD · {name}</span>
      <span className="slot__rule" />
    </div>
  </section>
);

Object.assign(window, {
  useScrollReveal,
  Header, Hero, Marquee, About, Services, Creators, Team, CTA, Form, Journal, Foot, SlotPlaceholder,
});
