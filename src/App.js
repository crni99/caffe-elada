import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import DrinksPage from './pages/Drinks';
import NotFoundPage from './components/NotFoundPage';
import logo from './assets/logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FADE_TIME = 500;
const MIN_FLICKER_TIME = 300;
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
    AOS.init({ once: true });

    window.scrollTo(0, 0);

    setTimeout(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);

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
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/karta-pica" element={<DrinksPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </LanguageProvider>
        </I18nextProvider>
      )}
    </>
  );
}

export default App;