const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  allowTouchMove: true
});

const playBtn = document.getElementById("play-button");
const audio = document.getElementById("background-music");

playBtn.addEventListener("click", () => {
  audio.play();
  playBtn.classList.add("fade-out");

  // Deslizar a la slide 2 con animación
  swiper.slideTo(1, 800);

  setTimeout(() => {
    playBtn.style.display = "none";
  }, 1000);
});
