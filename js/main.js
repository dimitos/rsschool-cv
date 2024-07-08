hljs.initHighlightingOnLoad();

/**
 * Delete anchor hash
 */
const hash = document.querySelectorAll(".hash");
if (document.querySelectorAll(".hash")) {
  hash.forEach((el) => el.addEventListener("click", () => setTimeout(() => history.replaceState(null, null, " "), 1), { passive: true }));
}

/**
 * initialization burger menu
 */
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const nav_menu = document.querySelector('.menu-wr');
const nav_item = document.querySelectorAll('.menu__link');

nav_item.forEach((el) => {
  el.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('click');
    }
  });
});

nav_menu.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    burger.classList.remove('click');
  }
});

burger.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    burger.classList.remove('click');
  } else {
    menu.classList.add('active');
    burger.classList.add('click');
  }
});

/**
 * Func for nat window resize
 */
window.addEventListener(`resize`, () => {
  if (document.documentElement.clientWidth > 567) {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('click');
    }
  }
});

console.log(`
  - [x] студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages +10
  - [x] вёрстка валидная +10
  - [x] вёрстка семантическая +20
  - [x] в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10
  - [x] для оформления СV используются css-стили +10
  - [x] при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10
  - [x] на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10
  - [x] навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10
  - [x] Содержание CV +30
  - [x] CV выполнено на английском языке +10
  Score: 120 / 120`);
