// about.js

// Hero Section Video Background
const heroVideo = document.querySelector('.hero.background-video');
heroVideo.addEventListener('click', () => {
  heroVideo.play();
});

// Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial');
const testimonialCarousel = document.querySelector('.testimonial-carousel');

let currentTestimonial = 0;

testimonialCarousel.addEventListener('click', (e) => {
  if (e.target.classList.contains('testimonial')) {
    currentTestimonial = Array.prototype.indexOf.call(testimonials, e.target);
    updateTestimonialCarousel();
  }
});

function updateTestimonialCarousel() {
  testimonials.forEach((testimonial, index) => {
    if (index === currentTestimonial) {
      testimonial.classList.add('active');
    } else {
      testimonial.classList.remove('active');
    }
  });
}

// Initialize Testimonial Carousel
updateTestimonialCarousel();