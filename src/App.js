import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useHashScroll } from './hooks/useHashScroll';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = lazy(() => import('./pages/Home'));
const DrinksPage = lazy(() => import('./pages/Drinks'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

const FADE_TIME = 300;
const MIN_FLICKER_TIME = 100;
const HAS_LOADED_KEY = 'site-loaded';

const hasVisited = !!localStorage.getItem(HAS_LOADED_KEY);

function App() {

  const [isLoading, setIsLoading] = useState(!hasVisited);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(hasVisited);
  const [isDOMReady, setIsDOMReady] = useState(false);

  useEffect(() => {
    if (hasVisited) {
      setIsDOMReady(true);
      return;
    }
    const flickerTimer = setTimeout(() => {
      setIsDOMReady(true);
    }, MIN_FLICKER_TIME);

    return () => clearTimeout(flickerTimer);
  }, [hasVisited]);

  useEffect(() => {
    if (isLoading && isDOMReady) {
      setIsFadingOut(true);

      const fadeTimer = setTimeout(() => {
        setIsLoading(false);
        setIsContentVisible(true);
        localStorage.setItem(HAS_LOADED_KEY, 'true');
      }, FADE_TIME);

      return () => clearTimeout(fadeTimer);
    }
  }, [isDOMReady, isLoading]);

  useEffect(() => {
    let timeoutId;

    const startAOS = () => {
      AOS.init({
        once: true,
        duration: 800,
        offset: 100,
        disable: () => window.innerWidth < 768,
      });
      AOS.refresh();
    };

    if (document.fonts) {
      document.fonts.ready.then(() => {
        timeoutId = setTimeout(startAOS, 200);
      });
    } else {
      timeoutId = setTimeout(startAOS, 600);
    }

    return () => {
      clearTimeout(timeoutId);
      AOS.refresh();
    };
  }, []);

  useHashScroll();

  return (
    <>
      {isLoading && (
        <Preloader className={isFadingOut ? 'hidden' : ''} />
      )}
      {(isContentVisible || hasVisited) && (
        <>
          <Header />
          <Suspense fallback={<div style={{ minHeight: '60vh', backgroundColor: 'var(--background-color)' }} />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/karta-pica" element={<DrinksPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;