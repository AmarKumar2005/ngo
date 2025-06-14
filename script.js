// Slider functionality
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) slide.classList.add('active');
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 5000); // Change image every 5 seconds
showSlide(index);

// Hamburger menu toggle
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  const isOpen = navbar.classList.contains("active");

  if (isOpen) {
    // Close menu
    navbar.classList.remove("active");
    toggle.classList.remove("open");
  } else {
    // Open menu from right
    navbar.classList.add("active");
    toggle.classList.add("open");
  }
});
