import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './assets/logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = lazy(() => import('./pages/Home'));
const DrinksPage = lazy(() => import('./pages/Drinks'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

const FADE_TIME = 300;
const MIN_FLICKER_TIME = 100;
const HAS_LOADED_KEY = 'site-loaded';

function App() {

  const location = useLocation();
  const hasVisited = localStorage.getItem(HAS_LOADED_KEY);
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
    const startAOS = () => {
      AOS.init({
        once: true,
        duration: 800,
        offset: 100,
      });
      AOS.refresh();
    };

    if (document.fonts) {
      document.fonts.ready.then(() => {
        setTimeout(startAOS, 200);
      });
    } else {
      setTimeout(startAOS, 600);
    }

    window.scrollTo(0, 0);

    const hashTimer = setTimeout(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500);

    return () => {
      clearTimeout(hashTimer);
    };
  }, [location]);

  return (
    <>
      {isLoading && (
        <Preloader
          logoSrc={logo}
          className={isFadingOut ? 'hidden' : ''}
        />
      )}
      {(isContentVisible || hasVisited) && (
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <Header />
            <Suspense fallback={<div style={{ minHeight: '60vh', backgroundColor: '#f0f0f0' }} />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/karta-pica" element={<DrinksPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
            <Footer />
          </LanguageProvider>
        </I18nextProvider>
      )}
    </>
  );
}

export default App;