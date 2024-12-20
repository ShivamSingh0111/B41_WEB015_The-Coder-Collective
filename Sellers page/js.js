document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to all "Start Selling" buttons
    const startSellingButtons = document.querySelectorAll('.btn-primary');
    startSellingButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('show');
                // Scroll to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('mobile-menu-button');
    mobileMenuButton.innerHTML = '☰';
    document.querySelector('.nav-container').prepend(mobileMenuButton);

    mobileMenuButton.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('show');
    });

    // Responsive behavior for window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelector('.nav-links').classList.remove('show');
        }
    });
});

// import footer from "footer.js";
// document.getElementById("footer_container").innerHTML = footer()