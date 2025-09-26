import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    setGTMConsent?: (state: 'granted' | 'denied') => void;
  }
}

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = (localStorage.getItem('cookie_consent') || '').toLowerCase();
      if (stored !== 'granted' && stored !== 'denied') {
        setVisible(true);
      }
    } catch (_) {
      // ignore
    }
  }, []);

  if (!visible) return null;

  const updateConsent = (state: 'granted' | 'denied') => {
    try {
      localStorage.setItem('cookie_consent', state);
    } catch (_) {}
    if (typeof window.setGTMConsent === 'function') {
      window.setGTMConsent(state);
    }
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100]">
      <div className="mx-auto max-w-6xl px-4 pb-6">
        <div className="rounded-xl border border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-elegant p-4 md:p-5">
          <div className="md:flex md:items-center md:justify-between gap-4">
            <p className="text-sm text-muted-foreground mb-3 md:mb-0">
              We use cookies to improve your experience and run analytics. See our{' '}
              <Link to="/cookies" className="underline hover:text-primary">Cookies Policy</Link>.
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={() => updateConsent('denied')}>Decline</Button>
              <Button size="sm" onClick={() => updateConsent('granted')}>Accept</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;


