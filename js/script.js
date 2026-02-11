// Basic interactivity can be added here
document.addEventListener('DOMContentLoaded', () => {
    console.log("Brightside Privacy Landing Page Loaded");

    // Example simple scroll smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
