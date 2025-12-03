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

/*
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.custom-mobile-toggle');
    const navMenu = document.querySelector('.custom-navmenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('icon-active');
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    document.querySelectorAll('.custom-navmenu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                mobileToggle.classList.remove('icon-active');
                document.body.classList.remove('mobile-menu-open');
            }
        });
    });
});
*/