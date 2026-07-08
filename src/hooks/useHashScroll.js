import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_DELAY_MS = 300;

export function useHashScroll() {
    const location = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        if (!location.hash) {
            window.scrollTo(0, 0);
            return;
        }

        const timer = setTimeout(() => {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, SCROLL_DELAY_MS);

        return () => clearTimeout(timer);
    }, [location.pathname, location.hash]);
}