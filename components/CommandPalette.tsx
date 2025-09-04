import React, { useEffect, useState } from 'react';

interface Section { id: string; title: string; }
const sections: Section[] = [
  { id: 'hero', title: 'Hero' },
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'education', title: 'Education' },
  { id: 'skills', title: 'Skills' },
  { id: 'achievements', title: 'Achievements' },
  { id: 'contact', title: 'Contact' }
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const filtered = sections.filter(s => s.title.toLowerCase().includes(query.toLowerCase()));
  useEffect(()=>{
    const openHandler = () => setOpen(true);
    window.addEventListener('open-command-palette' as any, openHandler);
    return () => window.removeEventListener('open-command-palette' as any, openHandler);
  },[]);
  useEffect(()=>{
    function esc(e: KeyboardEvent){ if(e.key==='Escape') setOpen(false);} 
    window.addEventListener('keydown', esc); return ()=>window.removeEventListener('keydown', esc);
  },[]);
  if(!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-start justify-center pt-28 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden animate-fade-in">
        <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
          <input autoFocus aria-label="Search sections" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Jump to section..." className="flex-1 bg-transparent text-sm outline-none" />
          <button onClick={()=>setOpen(false)} className="text-xs px-2 py-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800">Esc</button>
        </div>
        <ul className="max-h-80 overflow-y-auto py-2">
          {filtered.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={()=>setOpen(false)} className="block px-4 py-2 text-sm hover:bg-brand/10 focus:bg-brand/10 focus:outline-none">{s.title}</a>
            </li>
          ))}
          {filtered.length===0 && <li className="px-4 py-6 text-center text-xs text-neutral-500">No matches</li>}
        </ul>
      </div>
    </div>
  );
}
