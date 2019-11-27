document.querySelector(".c-nav__burger").addEventListener("click", () => {
  const navInner = document.querySelector(".c-nav__inner");
  navInner.classList.toggle("c-nav__inner--active");
});

$(function() {
  var nav = $(".c-nav");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
      nav.addClass("c-nav--alt");
    } else {
      nav.removeClass("c-nav--alt");
    }
  });
});
