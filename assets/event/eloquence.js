document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animated-text');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});