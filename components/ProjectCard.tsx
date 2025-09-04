import React, { useState } from 'react';
import clsx from 'clsx';

export interface Project {
  title: string;
  subtitle?: string;
  stack: string[];
  bullets: string[];
  href?: string | null;
  repo?: string | null;
}

interface Props {
  project: Project;
  recruiterMode: boolean;
  onLink: (type: 'demo' | 'repo') => void;
}

export default function ProjectCard({ project, recruiterMode, onLink }: Props) {
  const [open, setOpen] = useState(false);
    return (
      <div className="group relative rounded-xl border border-[var(--line)] bg-[var(--surface)]/60 backdrop-blur-sm overflow-hidden flex flex-col transition hover:border-[var(--accent)]" aria-label={project.title}>
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--accent)]/60 via-[var(--accent)] to-[var(--accent)]/60" aria-hidden="true" />
        <button onClick={()=>setOpen(o=>!o)} className="text-left p-5 flex-1 flex flex-col focus-visible:outline-none">
          <h3 className="font-semibold text-base leading-snug tracking-tight">{project.title}</h3>
          {project.subtitle && <p className="text-[11px] text-[var(--accent)] mt-1 font-medium">{project.subtitle}</p>}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, recruiterMode?2:project.stack.length).map(s => <span key={s} className="px-2 py-0.5 rounded-md bg-[var(--border)]/25 text-[10px] tracking-wide uppercase text-[var(--muted)] border border-[var(--line)]">{s}</span>)}
          </div>
          <ul className="mt-4 space-y-1 text-xs text-[var(--muted)] list-disc list-inside">
            {project.bullets.slice(0, recruiterMode?1: open? project.bullets.length : 2).map((b,i)=>(<li key={i}>{b}</li>))}
          </ul>
          {project.bullets.length > (recruiterMode?1:2) && <span className="mt-3 text-[11px] font-medium text-[var(--accent)] hover:underline inline-block">{open? 'Collapse':'Expand'}</span>}
        </button>
        {!recruiterMode && (project.href || project.repo) && (
          <div className="px-5 pb-4 flex gap-3 text-[11px]">
            {project.href && <a onClick={()=>onLink('demo')} href={project.href} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">Live</a>}
            {project.repo && <a onClick={()=>onLink('repo')} href={project.repo} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] hover:underline">Code</a>}
          </div>
        )}
      </div>
    );
}
