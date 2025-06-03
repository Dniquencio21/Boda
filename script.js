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

// Evento clic botón
playBtn.addEventListener("click", () => {
  audio.play();
  playBtn.classList.add("fade-out");
  firstSlideImg.classList.add("img-nudge");

  setTimeout(() => {
    playBtn.style.display = "none";
  }, 1000);
});
