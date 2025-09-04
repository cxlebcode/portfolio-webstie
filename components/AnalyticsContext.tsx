import React, { createContext, useContext, useRef, ReactNode } from 'react';

export interface AnalyticsEvent { ts: number; category: string; action: string; meta: Record<string, unknown>; }
interface AnalyticsValue { track: (category: string, action: string, meta?: Record<string, unknown>) => void; }

const AnalyticsContext = createContext<AnalyticsValue>({ track: () => {} });

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const eventsRef = useRef<AnalyticsEvent[]>([]);
  function track(category: string, action: string, meta: Record<string, unknown> = {}) {
    const evt: AnalyticsEvent = { ts: Date.now(), category, action, meta };
    eventsRef.current.push(evt);
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('[analytics]', evt);
    }
  }
  return <AnalyticsContext.Provider value={{ track }}>{children}</AnalyticsContext.Provider>;
}

export const useAnalytics = () => useContext(AnalyticsContext);
