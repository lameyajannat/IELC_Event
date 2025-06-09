document.addEventListener('DOMContentLoaded', function() {

    const animatedElements = document.querySelectorAll('.animated-text');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        animationObserver.observe(el);
    });


    function adjustHeaderHeight() {
        const header = document.querySelector('.pg-header.style2');
        if (!header) return;
        
        const isMobile = window.innerWidth < 768;
        header.style.minHeight = isMobile ? '60vh' : '80vh';
    }

 
    function loadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imgObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imgObserver.observe(img));
    }


    window.addEventListener('load', function() {
        adjustHeaderHeight();
        loadImages();
    });

    window.addEventListener('resize', adjustHeaderHeight);


    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                menu.classList.toggle('show');


                document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
                    if (otherMenu !== menu) {
                        otherMenu.classList.remove('show');
                    }
                });
            }
        });
    });


    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});