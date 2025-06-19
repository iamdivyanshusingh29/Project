let percent = 0;
const fill = document.getElementById('fill');
const text = document.getElementById('percent');
const loader = document.getElementById('loader');
const main = document.getElementById('main-content');

const interval = setInterval(() => {
  if (percent >= 100) {
    clearInterval(interval);
    // Fade out the loader
    loader.classList.add('fade-out');
    // Show main content after animation
    setTimeout(() => {
      loader.style.display = 'none';
      main.style.display = 'block';
    }, 1000); // match with CSS transition time
  } else {
    percent++;
    fill.style.width = percent + '%';
    text.textContent = percent + '%';
  }
}, 50); // adjust speed here
