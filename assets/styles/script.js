// toast start
function showToast(message, type = 'success', duration = 4000) {
    const toastContainer = document.getElementById('toast-container');

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${message}</span>
        <button class="close-btn">&times;</button>`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, duration);

    const closeButton = toast.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
        toast.remove();
    });
}

document.getElementById('show-toast-btn').addEventListener('click', () => {
    showToast('Maap akun nya belum ada hihi', 'error');
    });
// toast end

// carousel start
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showNext() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

setInterval(showNext, 3000);
// carousel end

// darkmode start
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
// darkmode end

// smooth scroll start
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
// smooth scroll end
