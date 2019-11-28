document.querySelector(".c-nav__burger").addEventListener("click", () => {
  const navInner = document.querySelector(".c-nav__inner");
  navInner.classList.toggle("c-nav__inner--active");
});

const nav = document.querySelector(".c-nav");

window.addEventListener("scroll", () => {
  window.scrollY >= 20
    ? nav.classList.add("c-nav--alt")
    : nav.classList.remove("c-nav--alt");
});

const pageVideo = document.querySelector(".header__video");
document.querySelector(".play-button").addEventListener("click", () => {
  if (pageVideo.paused) {
    pageVideo.play();
  } else {
    pageVideo.pause();
  }
});
