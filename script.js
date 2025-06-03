// Inicializar Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  allowTouchMove: true
});

// Obtener elementos
const playBtn = document.getElementById("play-button");
const audio = document.getElementById("background-music");
const firstSlideImg = document.querySelector(".swiper-slide:first-child img");

// Evento al hacer clic en el botón de música
playBtn.addEventListener("click", () => {
  // Reproducir música
  audio.play();

  // Agregar animación de desvanecimiento al botón
  playBtn.classList.add("fade-out");

  // Agregar clase para animación de empujón a la imagen
  firstSlideImg.classList.add("img-nudge");

  // Ocultar el botón después de 1 segundo
  setTimeout(() => {
    playBtn.style.display = "none";
  }, 1000);
});
