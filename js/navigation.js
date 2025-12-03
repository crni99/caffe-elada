document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.custom-navmenu .main-links a');
    
    const homeLink = Array.from(navLinks).find(link => link.getAttribute('href') === '/');

    navLinks.forEach(clickedLink => {
        clickedLink.addEventListener('click', function (event) {
            
            navLinks.forEach(link => {
                if (link !== homeLink) {
                    link.classList.remove('active');
                }
            });
            this.classList.add('active');
        });
    });

    if (homeLink) {
        homeLink.classList.add('active');
    }
    
    navLinks.forEach(link => {
        if (link !== homeLink) {
            link.classList.remove('active');
        }
    });

    const currentPath = window.location.pathname.replace(/^\/|\/$/g, '');
    const currentHash = window.location.hash;

    navLinks.forEach(link => {
        if (link === homeLink) {
            return; 
        }

        const linkHref = link.getAttribute('href');
        
        if (linkHref === `/${currentHash}`) {
            link.classList.add('active');
            return;
        }

        if (linkHref === `/${currentPath}`) {
            link.classList.add('active');
            return;
        }
    });
});