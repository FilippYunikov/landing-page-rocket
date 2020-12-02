const btnOpen = document.querySelector(".navigate__btn-open");
const btnClose = document.querySelector(".menu__btn-close");
const menu = document.querySelector(".menu__list");

var glide = new Glide(".glide", {
  type: "carousel",
  rewind: true,
  autoplay: 3000,
  startAt: 0,
  perView: 3,
  breakpoints: {
    1600: {
      perView: 3,
    },
    1200: {
      perView: 2,
    },
    800: {
      perView: 1,
    },
  },
});
glide.mount();

btnOpen.addEventListener("click", function (evt) {
  menu.classList.add("menu__list_mobile");
});

btnClose.addEventListener("click", function (evt) {
  menu.classList.remove("menu__list_mobile");
});
