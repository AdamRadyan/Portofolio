// Function to toggle hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function for Contact Form
const form = document.getElementById('contact-form');
const result = document.getElementById('form-result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.style.color = "#30ec36ff"; // Accent color
                result.innerHTML = "Form submitted successfully!";
            } else {
                console.log(response);
                result.style.color = "#ff4d4d"; // Error color
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.style.color = "#ff4d4d"; // Error color
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

// Function for Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['Syadam Radyan Anwar'],
        typeSpeed: 70,         
        loop: false,            
        showCursor: false       
    };

    var typed = new Typed('#typed-name', options);
});

// --- SCROLL ANIMATION SCRIPT ---
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi berjalan
            }
        });
    }, {
        threshold: 0.1 // Animasi berjalan saat 10% elemen terlihat
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
        observer.observe(item);
    });
});

// --- SWIPER JS INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function () {
    const swipers = document.querySelectorAll('.project-swiper');
    swipers.forEach(slider => {
        new Swiper(slider, {
            loop: slider.querySelectorAll('.swiper-slide').length > 1, // Loop hanya jika ada lebih dari 1 gambar
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: slider.querySelector('.swiper-button-next'),
                prevEl: slider.querySelector('.swiper-button-prev'),
            },
        });
    });
});