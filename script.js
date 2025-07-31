// Efecto de lluvia binaria mejorado
const binaryRain = document.getElementById('binaryRain');
const binaryChars = "01";

function createBinaryDigit() {
  const digit = document.createElement('div');
  digit.className = 'binary-digit';
  digit.textContent = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
  digit.style.left = Math.random() * 100 + 'vw';
  digit.style.animationDuration = (Math.random() * 3 + 2) + 's';
  digit.style.opacity = Math.random() * 0.3 + 0.1;
  binaryRain.appendChild(digit);

  setTimeout(() => {
    digit.remove();
  }, 5000);
}

setInterval(createBinaryDigit, 80);

// Mensajes de estado cambiantes mejorados
const statusMessages = [
  "Building components",
  "Almost there..."
];

const statusElement = document.getElementById('statusText');
let currentStatus = 0;

function updateStatus() {
  statusElement.style.opacity = 0;

  setTimeout(() => {
    currentStatus = (currentStatus + 1) % statusMessages.length;
    statusElement.textContent = statusMessages[currentStatus];
    statusElement.style.opacity = 1;

    // Efecto de máquina de escribir ocasional
    if (Math.random() > 0.7) {
      typewriterEffect(statusElement);
    }
  }, 300);
}

function typewriterEffect(element) {
  const text = element.textContent;
  element.textContent = '';

  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 50);
}

setInterval(updateStatus, 3000);

// Efecto de parpadeo aleatorio mejorado
const title = document.querySelector('h1');
setInterval(() => {
  if (Math.random() > 0.85) {
    title.style.opacity = 0.4;
    setTimeout(() => {
      title.style.opacity = 1;
    }, 150 + Math.random() * 200);
  }
}, 800);