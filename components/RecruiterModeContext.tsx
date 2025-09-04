import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface RecruiterModeValue {
  recruiterMode: boolean;
  toggleRecruiterMode: () => void;
}

const RecruiterModeContext = createContext<RecruiterModeValue>({ recruiterMode: false, toggleRecruiterMode: () => {} });

export function RecruiterModeProvider({ children }: { children: ReactNode }) {
  const [recruiterMode, setRecruiterMode] = useState(false);
  useEffect(()=>{
    const stored = localStorage.getItem('recruiterMode');
    if (stored) setRecruiterMode(stored === 'true');
  },[]);
  useEffect(()=>{ localStorage.setItem('recruiterMode', String(recruiterMode)); },[recruiterMode]);
  function toggleRecruiterMode() { setRecruiterMode(m => !m); }
  return <RecruiterModeContext.Provider value={{ recruiterMode, toggleRecruiterMode }}>{children}</RecruiterModeContext.Provider>;
}

export const useRecruiterMode = () => useContext(RecruiterModeContext);
