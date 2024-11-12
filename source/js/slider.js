import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.banners__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.banners__slider--pagination',
      bulletActiveClass: 'banners__pagination--big',
      bulletClass: 'banners__pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.banners__arrow-right',
      prevEl: '.banners__arrow-left',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

//   const swiperSneakers = new Swiper('.most-popular__swiper', {
//     // Optional parameters
//     slidesPerView: 1,
//     slidesPerGroup: 1,
//     spaceBetween: 64,
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.most-popular--pagination',
//         bulletActiveClass: 'most-popular__pagination--big',
//         bulletClass: 'most-popular__pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.most-popular-right',
//         prevEl: '.most-popular-left',
//     },

//     breakpoints: {
//         768: {
//           slidesPerView: 2,
//           centeredSlides: true,
//         },
//         1728: {
//             slidesPerView: 3,
//             centeredSlides: true,
//         }
//     },
// });
