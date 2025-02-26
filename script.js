// Preloader
window.onload = function() {
  document.getElementById('preloader').style.display = 'none';
};

// Scroll Progress Bar and Back to Top
window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';

  var backToTopButton = document.getElementById('backToTop');
  if (winScroll > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (this.checkValidity()) {
    alert('Message sent successfully!');
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});

// Portfolio Modal
const modal = document.getElementById('portfolioModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.view-project').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const project = this.getAttribute('data-project');
    const projects = {
      1: { title: 'Project One', image: 'images/project1.jpg', description: 'Detailed description of project one.' },
      2: { title: 'Project Two', image: 'images/project2.jpg', description: 'Detailed description of project two.' },
      3: { title: 'Project Three', image: 'images/project3.jpg', description: 'Detailed description of project three.' }
    };
    modalTitle.textContent = projects[project].title;
    modalImage.src = projects[project].image;
    modalDescription.textContent = projects[project].description;
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Back to Top Button
document.getElementById('backToTop').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});