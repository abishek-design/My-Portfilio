
import React, { useState, useEffect } from 'react';
import FrontGate from './components/FrontGate';
import MainPortfolio from './components/MainPortfolio';

const App: React.FC = () => {
  const [showGate, setShowGate] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isPrefetched, setIsPrefetched] = useState(false);

  useEffect(() => {
    // Simulate prefetching assets for the main site
    const timer = setTimeout(() => {
      setIsPrefetched(true);
    }, 1500); // Give it a moment to prefetch
    return () => clearTimeout(timer);
  }, []);

  const handleEnterSite = () => {
    if (!isPrefetched) return;
    setIsExiting(true);
    setTimeout(() => {
      setShowGate(false);
    }, 1000); // Match transition duration
  };

  if (showGate) {
    // Restore scroll for gate page
    useEffect(() => { document.body.style.overflow = ''; }, []);
    return <FrontGate onEnter={handleEnterSite} isExiting={isExiting} isReady={isPrefetched} />;
  }

  // Hide scroll for main page
  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
  return <MainPortfolio />;
};

export default App;
