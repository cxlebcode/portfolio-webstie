import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/ThemeProvider';
import { RecruiterModeProvider } from '@/components/RecruiterModeContext';
import { AnalyticsProvider } from '@/components/AnalyticsContext';
import CommandPalette from '@/components/CommandPalette';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnalyticsProvider>
      <ThemeProvider>
        <RecruiterModeProvider>
          <Component {...pageProps} />
          <CommandPalette />
        </RecruiterModeProvider>
      </ThemeProvider>
    </AnalyticsProvider>
  );
}
