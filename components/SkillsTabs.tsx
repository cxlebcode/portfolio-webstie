import React, { useState } from 'react';
import { SiPython, SiJavascript, SiTypescript, SiPostgresql, SiFlask, SiPandas, SiNumpy, SiPytorch, SiScikitlearn, SiAmazon, SiDocker, SiGithubactions, SiRender, SiLatex, SiGit, SiGithub, SiJupyter, SiNotion, SiSlack, SiFastapi, SiGooglecloud, SiFramer, SiTailwindcss, SiLinux, SiMarkdown, SiN8N, SiMui, SiRedux, SiPostman } from 'react-icons/si';
import { FaDatabase, FaBrain, FaCogs, FaProjectDiagram } from 'react-icons/fa';

// Skill metadata
interface SkillMeta { icon: JSX.Element; label?: string; }

const skillMeta: Record<string, SkillMeta> = {
  Python: { icon: <SiPython className="w-8 h-8 text-[#3776AB]" /> },
  JavaScript: { icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" /> },
  TypeScript: { icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" /> },
  SQL: { icon: <FaDatabase className="w-8 h-8 text-cyan-400" /> },
  HTML5: { icon: (
    <svg viewBox="0 0 128 128" className="w-8 h-8" aria-hidden>
      <path fill="#E44D26" d="M19 3l8 90 37 10 37-10 8-90H19z"/>
      <path fill="#F16529" d="M64 97l30-8 7-79H64v87z"/>
      <path fill="#EBEBEB" d="M64 52H49l-1-11h16V30H37.3l.3 3 3 34H64V52z"/>
      <path fill="#fff" d="M64 52v11h14.9l-1.4 15.3L64 74.6v13.1l22.5-6.2.2-2.4 2.6-29.4.3-3H64z"/>
    </svg>
  ) },
  CSS3: { icon: (
    <svg viewBox="0 0 128 128" className="w-8 h-8" aria-hidden>
      <path fill="#1572B6" d="M19 3l8 90 37 10 37-10 8-90H19z"/>
      <path fill="#33A9DC" d="M64 97l30-8 7-79H64v87z"/>
      <path fill="#fff" d="M64 52h15l1-11H64V30h27l-.3 3-2.8 32H64V52z"/>
      <path fill="#EBEBEB" d="M64 74.6l-.1.1-12.3-3.3-.8-9h-11l1.6 18.1 22.5 6.2.1-.1V74.6z"/>
      <path fill="#fff" d="M78 63l-1.3 15.3L64 82.7v11l22.5-6.2.2-2.4L89 63H78z"/>
    </svg>
  ) },
  KQL: { icon: (
    <svg viewBox="0 0 96 96" className="w-8 h-8" aria-hidden>
      <defs>
        <linearGradient id="kqlg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0078D4"/>
          <stop offset="100%" stopColor="#0A4F94"/>
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="20" fill="#fff"/>
      <g transform="translate(8 8)">
        <path d="M40 0L0 40l40 40 40-40L40 0z" fill="url(#kqlg)"/>
        <path d="M40 10L10 40l30 30 30-30L40 10z" fill="#fff" opacity="0.15"/>
        <text x="40" y="53" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="30" fontWeight="600" fill="#0078D4" textAnchor="middle">KQL</text>
      </g>
    </svg>
  ) },
  LaTeX: { icon: (
    <svg viewBox="0 0 160 64" className="w-16 h-8" aria-hidden>
      <text x="2" y="46" fontFamily="Georgia, 'Times New Roman', serif" fontSize="48" fill="#ffffff" letterSpacing="1">LaTeX</text>
    </svg>
  ) },
  PostgreSQL: { icon: <SiPostgresql className="w-8 h-8 text-[#336791]" /> },
  FastAPI: { icon: <SiFastapi className="w-8 h-8 text-teal-400" /> },
  Flask: { icon: <SiFlask className="w-8 h-8 text-white" /> },
  Pandas: { icon: <SiPandas className="w-8 h-8 text-fuchsia-500" /> },
  NumPy: { icon: <SiNumpy className="w-8 h-8 text-cyan-500" /> },
  PyTorch: { icon: <SiPytorch className="w-8 h-8 text-[#EE4C2C]" /> },
  'Scikit-learn': { icon: <SiScikitlearn className="w-8 h-8 text-orange-400" /> },
  Matplotlib: { icon: <FaProjectDiagram className="w-8 h-8 text-indigo-300" /> },
  'Framer Motion': { icon: <SiFramer className="w-8 h-8 text-pink-500" /> },
  'Responsive Design': { icon: <FaCogs className="w-8 h-8 text-emerald-400" /> },
  'GitHub Actions': { icon: <SiGithubactions className="w-8 h-8 text-sky-400" /> },
  'CI/CD Pipelines': { icon: <FaCogs className="w-8 h-8 text-purple-400" /> },
  'Render/Fly.io/Vercel': { icon: <SiRender className="w-8 h-8 text-emerald-400" /> },
  Render: { icon: <SiRender className="w-8 h-8 text-emerald-400" /> },
  AWS: { icon: <SiAmazon className="w-8 h-8 text-amber-400" /> },
  Azure: { icon: (
    <svg viewBox="0 0 64 64" className="w-8 h-8" aria-hidden>
      <path fill="#0078D4" d="M8 52L28 12h14L22 52z"/>
      <path fill="#59B4D9" d="M30 52l10-20 16 20H30z"/>
    </svg>
  ) },
  GCP: { icon: <SiGooglecloud className="w-8 h-8 text-sky-400" /> },
  Docker: { icon: <SiDocker className="w-8 h-8 text-sky-500" /> },
  Git: { icon: <SiGit className="w-8 h-8 text-orange-500" /> },
  GitHub: { icon: <SiGithub className="w-8 h-8 text-white" /> },
  'GitHub Copilot': { icon: (
    <svg viewBox="0 0 256 256" className="w-8 h-8" aria-hidden>
      <defs>
        <linearGradient id="copilotA" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#35C2F8"/>
          <stop offset="100%" stopColor="#3AE6B2"/>
        </linearGradient>
      </defs>
      <path d="M64 48c-18 0-32 14-32 32v40c0 53 34 88 96 88s96-35 96-88V80c0-18-14-32-32-32-11 0-22 5-32 14-8-9-19-14-32-14s-24 5-32 14c-10-9-21-14-32-14z" fill="#0F172A"/>
      <path d="M64 64c-9 0-16 7-16 16v40c0 43 28 72 80 72s80-29 80-72V80c0-9-7-16-16-16-14 0-26 12-37 24h-54C90 76 78 64 64 64z" fill="#1E293B"/>
      <path d="M88 96h80v32H88z" fill="#111827" opacity="0.4"/>
      <circle cx="104" cy="140" r="28" fill="url(#copilotA)"/>
      <circle cx="152" cy="140" r="28" fill="url(#copilotA)"/>
      <circle cx="104" cy="140" r="10" fill="#0F172A"/>
      <circle cx="152" cy="140" r="10" fill="#0F172A"/>
      <path d="M92 108c10-12 22-18 36-18s26 6 36 18" stroke="url(#copilotA)" strokeWidth="8" strokeLinecap="round" fill="none"/>
    </svg>
  ) },
  'VS Code': { icon: (
    <svg viewBox="0 0 256 256" className="w-8 h-8" aria-hidden>
      <path fill="#0065A9" d="M199 33L94 120 47 83 16 103l61 53L16 209l31 20 47-37 105 87 41-22V55z"/>
      <path fill="#007ACC" d="M199 33L94 120 47 83l152 140V33z"/>
      <path fill="#1F9CF0" d="M94 120l58 51-58 47 105 87 41-22V155L94 120z"/>
    </svg>
  ) },
  'Jupyter Notebooks': { icon: <SiJupyter className="w-8 h-8 text-orange-400" /> },
  Notion: { icon: <SiNotion className="w-8 h-8 text-white" /> },
  Excel: { icon: (
    <svg viewBox="0 0 64 64" className="w-8 h-8" aria-hidden>
      <rect x="14" y="10" width="36" height="44" rx="4" fill="#185C37"/>
      <path fill="#21A366" d="M22 10h20v44H22z"/>
      <path fill="#107C41" d="M30 54h12V10H30z"/>
      <path fill="#fff" d="M25 45l6-9-6-9h5l3 5 3-5h5l-6 9 6 9h-5l-3-5-3 5z"/>
    </svg>
  ) },
  Markdown: { icon: <SiMarkdown className="w-8 h-8 text-white" /> },
  Slack: { icon: <SiSlack className="w-8 h-8 text-pink-500" /> },
  Windows: { icon: (
    <svg viewBox="0 0 64 64" className="w-8 h-8" aria-hidden>
      <path fill="#0078D4" d="M8 14l22-3v21H8V14zm0 21h22v21l-22-3V35zm26-24l22-4v25H34V11zm22 28v25l-22-4V39h22z"/>
    </svg>
  ) },
  Linux: { icon: <SiLinux className="w-8 h-8 text-amber-400" /> },
  n8n: { icon: <SiN8N className="w-8 h-8 text-pink-500" /> },
  Ollama: { icon: (
    <svg viewBox="0 0 256 256" className="w-8 h-8" aria-hidden>
      <path d="M128 24c-28 0-44 12-56 36-8.4 16.8-12 36.5-12 56 0 48 20 84 68 84s68-36 68-84c0-19.5-3.6-39.2-12-56-12-24-28-36-56-36z" fill="#fff" stroke="#000" strokeWidth="12" strokeLinejoin="round"/>
      <path d="M80 208c12 16 28 24 48 24s36-8 48-24" stroke="#000" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <path d="M92 132c8 8 16 12 36 12s28-4 36-12" stroke="#000" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <circle cx="104" cy="104" r="12" fill="#000"/>
      <circle cx="152" cy="104" r="12" fill="#000"/>
      <path d="M112 152c4 4 8 4 16 4s12 0 16-4" stroke="#000" strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d="M92 60c-6 10-10 28-10 40" stroke="#000" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <path d="M164 60c6 10 10 28 10 40" stroke="#000" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <path d="M104 40c0 8-8 16-8 16" stroke="#000" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <path d="M152 40c0 8 8 16 8 16" stroke="#000" strokeWidth="12" strokeLinecap="round" fill="none"/>
    </svg>
  ) },
  PySide6: { icon: <SiMui className="w-8 h-8 text-cyan-400" /> },
  Tailwind: { icon: <SiTailwindcss className="w-8 h-8 text-sky-400" /> },
  Redux: { icon: <SiRedux className="w-8 h-8 text-violet-500" /> },
  Postman: { icon: <SiPostman className="w-8 h-8 text-orange-500" /> },
  'SDLC Lifecycles': { icon: <FaBrain className="w-8 h-8 text-emerald-400" /> },
  OOP: { icon: <FaCogs className="w-8 h-8 text-emerald-400" /> },
  'Functional Programming': { icon: <FaCogs className="w-8 h-8 text-purple-400" /> }
};

const categories: Record<string, string[]> = {
  Backend: ['Python','FastAPI','Flask','PostgreSQL','Pandas','NumPy','Matplotlib','PyTorch','Scikit-learn','Ollama','n8n'],
  Frontend: ['JavaScript','HTML5','CSS3','PySide6'],
  DevOps: ['AWS','Azure','Docker','Git', 'GitHub','GitHub Actions','CI/CD Pipelines','Render'],
  Practices: ['SDLC Lifecycles','OOP','Functional Programming'],
  Tools: ['Windows','Linux','Excel','Jupyter Notebooks','Notion','Markdown','Slack','LaTeX']
};

export default function SkillsTabs({ compact }: { compact: boolean }) {
  const tabs = Object.keys(categories);
  const [active, setActive] = useState(tabs[0]);
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div role="tablist" aria-label="Skill categories" className="inline-flex flex-wrap gap-2 mb-10 bg-[var(--surface)] border border-[var(--line)] rounded-lg px-3 py-2">
        {tabs.map(t => {
          const sel = active===t;
          return (
            <button key={t} role="tab" aria-selected={sel} onClick={()=>setActive(t)} className={'px-4 py-1.5 rounded-md text-[12px] font-medium transition focus-visible:outline-none '+(sel?'bg-[var(--accent)] text-white shadow-sm':'text-[var(--muted)] hover:text-[var(--accent)]')}>{t}</button>
          );
        })}
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" role="tabpanel" aria-label={active}>
        {categories[active].slice(0, compact ? 6 : categories[active].length).map(skill => {
          const meta = skillMeta[skill];
          return (
            <li key={skill} className="group p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] flex flex-col items-center gap-5 hover:border-[var(--accent)] transition">
              <span className="w-16 h-16 flex items-center justify-center rounded-md shadow-sm ring-1 ring-white/5 bg-black/30 group-hover:scale-[1.04] transition">
                {meta?.icon}
                <span className="sr-only">{skill}</span>
              </span>
              <span className="text-sm font-medium tracking-wide text-white">{skill}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
