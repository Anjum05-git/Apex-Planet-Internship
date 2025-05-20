// DOM Elements
const learnMoreBtn = document.getElementById('learnMoreBtn');
const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Learn More Button
learnMoreBtn.addEventListener('click', () => {
  alert('Welcome to Web Development Fundamentals! This is a simple example of JavaScript interactivity. Click OK to continue exploring the page.');
  
  // Scroll to About section
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Form Submission
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Simple validation
  if (validateForm()) {
    // Success animation
    submitBtn.classList.add('success');
    
    // Show success message
    alert(`Thank you, ${nameInput.value}! Your message has been sent successfully.`);
    
    // Reset form
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    
    // Remove success class after animation completes
    setTimeout(() => {
      submitBtn.classList.remove('success');
    }, 2000);
  }
});

// Form Validation
function validateForm() {
  let isValid = true;
  
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    isValid = false;
  } else if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    emailInput.focus();
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address');
    emailInput.focus();
    isValid = false;
  } else if (messageInput.value.trim() === '') {
    alert('Please enter your message');
    messageInput.focus();
    isValid = false;
  }
  
  return isValid;
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Implement smooth scrolling for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add animation when scrolling
document.addEventListener('DOMContentLoaded', () => {
  // Animate sections when they come into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });
});