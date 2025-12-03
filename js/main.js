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