document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animated-text');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    function handleResponsive() {
        const eventSections = document.querySelectorAll('[class^="event-section"]');
        const screenWidth = window.innerWidth;
        
        eventSections.forEach(section => {
            if (screenWidth < 768) {
                section.style.padding = '30px 15px';
            } else {
                section.style.padding = '';
            }
        });
        
        const pgHeader = document.querySelector('.pg-header');
        if (pgHeader) {
            if (screenWidth < 768) {
                pgHeader.style.minHeight = '60vh';
            } else {
                pgHeader.style.minHeight = '80vh';
            }
        }
    }
    
    handleResponsive();
    window.addEventListener('resize', handleResponsive);
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('nav-scroll');
        } else {
            navbar.classList.remove('nav-scroll');
        }
    });
    
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
            
            // Close other open dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown-toggle') && !e.target.closest('.dropdown-menu')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});