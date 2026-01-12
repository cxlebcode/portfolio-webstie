import Head from 'next/head';
import React, { useEffect, useMemo, useState, useRef, ReactNode } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { useRecruiterMode } from '@/components/RecruiterModeContext';
import SkillsTabs from '@/components/SkillsTabs';
import ProjectCard, { Project } from '@/components/ProjectCard';
import { useAnalytics } from '@/components/AnalyticsContext';
import clsx from 'clsx';

const year = new Date().getFullYear();

interface ExperienceItem { role: string; org: string; location: string; dates: string; bullets: string[]; }

const experience: ExperienceItem[] = [
  {
    role: 'Co-Founder & Lead Developer',
    org: 'Panoraxis',
    location: 'Wolverhampton, UK',
    dates: 'Jan 2025 – Present',
    bullets: [
      'Co-founded SaaS automation agency; negotiated 3 pilot SME clients in Q1 via chatbot solutions.',
      'Designed product architecture & deployment (FastAPI, FAISS, Supabase).',
      'Built AI FAQ platform delivering ~40% faster query resolution vs manual responses.',
      'Implemented GDPR-aligned logging & PII redaction across deployments.'
    ]
  },
  {
    role: 'Work Experience Placement',
    org: 'IBM',
    location: 'Leicester, UK',
    dates: 'Nov 2024',
    bullets: [
      'Explored project management, data engineering & CSOC analysis workflows.',
      'Used JIRA / Trello / Smartsheet for coordination & risk tracking.',
      'Learned essentials of clear communication & risk mitigation in security ops.'
    ]
  },
  {
    role: 'Work Experience Placement',
    org: 'BT',
    location: 'Manchester, UK',
    dates: 'Jul 2024',
    bullets: [
      'Exposed to threat hunting & incident response with Defender & Sentinel.',
      'Observed live DDoS mitigation & traffic filtering techniques.',
      'Applied KQL & data analysis for monitoring large security data volumes.'
    ]
  },
  {
    role: 'Intern',
    org: 'Creative Ideaz',
    location: 'Birmingham, UK',
    dates: 'Apr 2024',
    bullets: [
      'Collaborated on digital marketing, AI & data interpretation tasks.',
      'Analysed GA metrics (CTR, impressions, bounce rate) & suggested SEO improvements.',
      'Produced AI‑assisted promotional video and evaluated 3 automation tools.'
    ]
  },
  {
    role: 'Freelance Programmer',
    org: 'Self‑Employed',
    location: 'Remote',
    dates: '2023 – Present',
    bullets: [
      'Delivered automation scripts, web sites, scrapers & SaaS prototypes for small businesses.',
      'Shipped documented Python codebases with deployment workflows & version control.'
    ]
  }
];

const projects: Project[] = [
  {
    title: 'Systematic Trading & Market Analytics',
    subtitle: 'NumPy • Pandas • Data Analysis',
    stack: ['NumPy','Pandas','Analytics'],
    bullets: [
      'Built systematic analytics framework for on‑chain metrics, volume flows & holder distributions.',
      'Implemented filter‑based signal generation with risk‑controlled position sizing.',
      'Achieved ~30% average monthly ROI over the first two months through systematic testing.'
    ],
    href: '#',
    repo: '#'
  },
  {
    title: 'Panoraxis AI Chatbot Platform',
    subtitle: 'FastAPI • SentenceTransformers • FAISS • PostgreSQL',
    stack: ['FastAPI','FAISS','PostgreSQL','AI'],
    bullets: [
      'Built retrieval‑augmented FAQ engine using transformer embeddings with FAISS vector search.',
      'Implemented validation, caching & PII redaction; added unknown‑query logging (Supabase) with LLaMA fallback.'
    ],
    href: '#',
    repo: '#'
  },
  {
    title: 'NEA Stock Market Simulator',
    subtitle: 'Flask • HTML/CSS • SQLite • yfinance',
    stack: ['Flask','SQLite','yfinance','HTML/CSS'],
    bullets: [
      'Developed full‑stack simulator with session auth, volatility modelling & live charting.',
      'Integrated yfinance, transaction validation & portfolio tracking; awarded 66/70.'
    ],
    href: '#',
    repo: '#'
  }
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { recruiterMode, toggleRecruiterMode } = useRecruiterMode();
  const { track } = useAnalytics();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)))) {
        e.preventDefault();
        const evt = new CustomEvent('open-command-palette');
        window.dispatchEvent(evt);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Caleb Laing',
    jobTitle: 'Software Engineer & Developer',
    email: 'mailto:cchristianln01@gmail.com',
    sameAs: ['https://www.linkedin.com/in/calebcl','https://github.com/cxlebcode'],
    url: 'https://example.com'
  }), []);

  return (
    <>
      <Head>
        <title>Caleb Laing – Software Engineer & Developer</title>
        <meta name="description" content="Portfolio of Caleb Laing – building scalable SaaS tools, automation pipelines, and full‑stack projects." />
        <meta property="og:title" content="Caleb Laing – Software Engineer" />
        <meta property="og:description" content="Building scalable SaaS tools, automation pipelines, and full‑stack projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:image" content="/og.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
  <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main" className="relative">
        <Hero recruiterMode={recruiterMode} track={track} />
        <About recruiterMode={recruiterMode} />
        <Experience recruiterMode={recruiterMode} />
        <Projects recruiterMode={recruiterMode} track={track} />
        <Education recruiterMode={recruiterMode} />
        <Skills recruiterMode={recruiterMode} />
  {/* Achievements section removed */}
        <Contact recruiterMode={recruiterMode} track={track} />
      </main>
      <Footer />
    </>
  );
}

function Section({ id, title, children, compact }: { id: string; title: string; children: ReactNode; compact?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={clsx('px-5 md:px-10 max-w-[1100px] mx-auto', compact ? 'py-12' : 'py-18 md:py-20')}>
      <div className="mb-8 flex items-center gap-4">
        <h2 id={`${id}-title`} className="font-display text-heading-2 tracking-tight">{title}</h2>
        <div className="h-px flex-1 bg-[var(--line)]" />
      </div>
      <div className="space-y-6 animate-fade-in">{children}</div>
    </section>
  );
}

function Header({ theme, toggleTheme }: { theme: string; toggleTheme: () => void; }) {
  const links: [string,string][] = [ ['About','about'],['Experience','experience'],['Projects','projects'],['Education','education'],['Skills','skills'],['Contact','contact'] ];
  const [active, setActive] = useState('about');
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(()=>{
    const ids = links.map(([,id])=>id);
    const opts: IntersectionObserverInit = { rootMargin: '0px 0px -65% 0px', threshold: [0,1] };
    const cb: IntersectionObserverCallback = (entries) => { entries.forEach(en => { if(en.isIntersecting) setActive(en.target.id); }); };
    observerRef.current = new IntersectionObserver(cb, opts);
    ids.forEach(id => { const el = document.getElementById(id); if (el) observerRef.current?.observe(el); });
    return () => observerRef.current?.disconnect();
  },[]);
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/85 border-b border-[var(--line)]">
      <nav aria-label="Primary" className="max-w-[1160px] mx-auto flex items-center gap-6 px-4 md:px-8 h-16">
        <a href="#hero" className="font-display font-semibold text-lg tracking-tight">Caleb<span style={{color:'var(--accent)'}}>.</span></a>
        <ul className="hidden md:flex gap-2 text-[13px] font-medium">
          {links.map(([label, id]) => {
            const isActive = active===id;
            return (
              <li key={id}>
                <a href={`#${id}`} className={clsx('relative px-3 py-2 rounded-sm transition-colors', isActive? 'text-[var(--accent)] underline-active':'text-[var(--muted)] hover:text-[var(--accent)]')} aria-current={isActive? 'true': undefined}>{label}</a>
              </li>
            );
          })}
        </ul>
        <div className="ml-auto flex items-center gap-2">
          <button aria-pressed={theme==='dark'} aria-label="Toggle color theme" title="Toggle theme" onClick={toggleTheme} className="p-2 rounded-md text-[var(--muted)] hover:text-[var(--accent)] transition-colors" >{theme==='dark'? '☾':'●'}</button>
        </div>
      </nav>
    </header>
  );
}

function Hero({ recruiterMode, track }: { recruiterMode: boolean; track: (category: string, action: string, meta?: Record<string, unknown>) => void }) {
  return (
  <section id="hero" className="relative overflow-hidden hero-bg pt-4">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
  <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 pt-24 pb-24 flex flex-col gap-8">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold mb-4 text-heading-1">Caleb Laing</h1>
          <p className="text-heading-3 text-[var(--accent)] mb-4 font-semibold">Software Engineer & Developer</p>
          {!recruiterMode && <p className="text-[18px] leading-relaxed text-[var(--muted)] max-w-2xl">Co‑founder building AI + automation SaaS platforms, retrieval systems and data‑driven tooling.</p>}
          {recruiterMode && <p className="text-[15px] font-medium text-[var(--muted)]">AI Platforms • Automation • Full‑stack</p>}
          <div className="mt-10 flex flex-wrap gap-4">
            <a onClick={()=>track('cta','view-projects')} href="#projects" className="btn-primary">View Projects</a>
            <a onClick={()=>track('cta','download-cv')} href="/Caleb_Laing_CV.pdf" className="btn-outline">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ recruiterMode }: { recruiterMode: boolean }) {
  return (
    <Section id="about" title="About" compact={recruiterMode}>
      <div className="grid md:grid-cols-3 gap-12 items-start">
    <div className="md:col-span-2 space-y-5 text-[15px] leading-relaxed text-[var(--muted)]">
          {!recruiterMode && <>
            <p>I'm Caleb, a software engineer & co-founder focused on AI/automation SaaS, retrieval‑augmented systems and data tooling. I design pragmatic solutions with measurable impact and am pursuing a degree apprenticeship while finishing A Levels.</p>
      {/* Removed duplicated bottom content block */}
          </>}
          {recruiterMode && <p>Co‑founder • AI & automation • Full‑stack • Seeking degree apprenticeship.</p>}
          {/* Contact links removed per request */}
        </div>
        <div className="space-y-2 text-xs text-[var(--muted)]">
          <div className="p-4 rounded-md border border-[var(--line)] bg-[var(--surface)]">A Levels: Computer Science (B), Business (C), Mathematics (A predicted).</div>
        </div>
      </div>
    </Section>
  );
}

function Experience({ recruiterMode }: { recruiterMode: boolean }) {
  return (
    <Section id="experience" title="Experience" compact={recruiterMode}>
      <ol className="relative border-l border-[var(--line)] pl-6 space-y-12">
        {experience.map((e,i) => (
          <li key={i} className="ml-2">
            <div className="absolute left-0 top-1.5 -ml-[7px] w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]" aria-hidden="true" />
            <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline">
              <h3 className="font-semibold">{e.org} — {e.role}</h3>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] text-[var(--accent)]">{e.dates}</span>
              <span className="text-xs text-[var(--muted)]">{e.location}</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-[var(--muted)] list-disc pl-5">
              {e.bullets.slice(0, recruiterMode ? 1 : e.bullets.length).map((b,j)=>(<li key={j}>{b}</li>))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Projects({ recruiterMode, track }: { recruiterMode: boolean; track: (category: string, action: string, meta?: Record<string, unknown>) => void }) {
  return (
    <Section id="projects" title="Projects" compact={recruiterMode}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p,i)=>(
          <ProjectCard key={i} project={p} recruiterMode={recruiterMode} onLink={(type)=>track('project-link', `${p.title}:${type}`)} />
        ))}
      </div>
    </Section>
  );
}

function Education({ recruiterMode }: { recruiterMode: boolean }) {
  return (
    <Section id="education" title="Education" compact={recruiterMode}>
      <ol className="relative ml-2 border-l border-[var(--line)] pl-8 space-y-14">
        <li className="relative">
          <span className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]" aria-hidden />
          <p className="text-[11px] uppercase tracking-wide font-medium text-[var(--muted)] mb-1">Sep 2023 – Jul 2026</p>
          <h3 className="font-semibold mb-1">Highfields School – Wolverhampton, UK</h3>
          <p className="text-sm text-[var(--muted)]">A Levels: Computer Science (B), Business (C) achieved 2025; Mathematics (A predicted 2026)</p>
        </li>
        <li className="relative">
          <span className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]" aria-hidden />
          <p className="text-[11px] uppercase tracking-wide font-medium text-[var(--muted)] mb-1">Sep 2018 – Jul 2023</p>
          <h3 className="font-semibold mb-1">Wolverhampton Grammar School – Wolverhampton, UK</h3>
          <p className="text-sm text-[var(--muted)]">10 IGCSEs incl. Mathematics (8), English Language (7), English Literature (6)</p>
        </li>
      </ol>
    </Section>
  );
}

function Skills({ recruiterMode }: { recruiterMode: boolean }) {
  return (
    <Section id="skills" title="Skills" compact={recruiterMode}>
      <SkillsTabs compact={recruiterMode} />
    </Section>
  );
}

// Achievements component removed

function Contact({ recruiterMode, track }: { recruiterMode: boolean; track: (category: string, action: string, meta?: Record<string, unknown>) => void }) {
  return (
    <Section id="contact" title="Contact" compact={recruiterMode}>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-[15px] leading-relaxed text-[var(--muted)]">Reach out for opportunities, collaborations or questions.</p>
        <p className="text-sm text-[var(--muted)]">Email: <a onClick={()=>track('outbound','email')} href="mailto:cchristianln01@gmail.com" className="underline underline-offset-2 hover:text-[var(--accent)]">cchristianln01@gmail.com</a></p>
        <div className="pill-grid justify-center">
          <a onClick={()=>track('outbound','linkedin')} href="https://www.linkedin.com/in/calebcl" target="_blank" rel="noreferrer" className="pill linkedin">LinkedIn</a>
          <a onClick={()=>track('outbound','github')} href="https://github.com/cxlebcode" target="_blank" rel="noreferrer" className="pill github">GitHub</a>
        </div>
  {/* CV download removed per request */}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] text-xs py-10 text-center text-[var(--muted)]">© {year} Caleb Laing. All rights reserved.</footer>
  );
}
