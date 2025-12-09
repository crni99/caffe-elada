document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButton = document.getElementById('scroll-top');

    if (!scrollTopButton) return;

    const toggleScrollTopVisibility = () => {
        if (window.scrollY > 100) {
            scrollTopButton.classList.add('active');
        } else {
            scrollTopButton.classList.remove('active');
        }
    };

    window.addEventListener('scroll', toggleScrollTopVisibility);

    scrollTopButton.addEventListener('click', (event) => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    toggleScrollTopVisibility();
});

document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader-overlay');
    if (!preloader) {
        return;
    }

    const HAS_LOADED_KEY = 'site-loaded';
    const hasVisited = localStorage.getItem(HAS_LOADED_KEY);
    const FADE_TIME = 500;
    
    if (hasVisited) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.remove();
        return;
    }

    function hidePreloader() {
        if (preloader.classList.contains('hidden')) {
            return;
        }
        preloader.classList.add('hidden');
        localStorage.setItem(HAS_LOADED_KEY, 'true');

        setTimeout(() => {
            preloader.remove();
        }, FADE_TIME);
    }

    window.addEventListener('load', hidePreloader);

    const MAX_LOAD_TIME = 5000; 
    setTimeout(() => {
        if (!preloader.classList.contains('hidden')) {
            hidePreloader();
        }
    }, MAX_LOAD_TIME);
});