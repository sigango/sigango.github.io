import { useState, useEffect, useCallback } from 'react';

export type ViewMode = 'interactive' | 'hr';

export function useViewMode() {
  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    if (typeof window === 'undefined') return 'interactive';
    // Check URL query param or hash first (e.g. ?mode=hr or #hr)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'hr' || window.location.hash === '#hr') {
      return 'hr';
    }
    const saved = localStorage.getItem('portfolio_view_mode') as ViewMode | null;
    return saved === 'hr' ? 'hr' : 'interactive';
  });

  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode);
    try {
      localStorage.setItem('portfolio_view_mode', mode);
      if (mode === 'hr') {
        window.history.replaceState(null, '', '#hr');
      } else {
        if (window.location.hash === '#hr') {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleViewMode = useCallback(() => {
    setViewMode(viewMode === 'interactive' ? 'hr' : 'interactive');
  }, [viewMode, setViewMode]);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#hr') {
        setViewModeState('hr');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return { viewMode, setViewMode, toggleViewMode };
}
