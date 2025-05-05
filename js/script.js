// 文字をばらす
$(function () {
  $(".fv__title1")
    .children()
    .addBack()
    .contents()
    .each(function () {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, "<span>$&</span>"));
      }
    });
  $(".fv__title3")
    .children()
    .addBack()
    .contents()
    .each(function () {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, "<span>$&</span>"));
      }
    });
});

//ドロワーメニュー
jQuery(".drawer__icon").on("click", function (e) {
  e.preventDefault();
  jQuery(".drawer__icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  jQuery("body").toggleClass("is-fixed");
});

//プランから探す
jQuery(".js-fv__btn").on("click", function (e) {
  e.preventDefault();
  // jQuery(".js-fv__btn").toggleClass("is-checked");
  jQuery("#js-plan-menu").toggleClass("is-checked");
  jQuery("#js-drawer-background").toggleClass("is-checked");
  jQuery("body").toggleClass("is-fixed");
});

//プランから探す
jQuery(".js-fv__btn2").on("click", function (e) {
  e.preventDefault();
  // jQuery(".js-fv__btn").toggleClass("is-checked");
  jQuery("#js-area-menu").toggleClass("is-checked");
  jQuery("#js-drawer-background2").toggleClass("is-checked");
  jQuery("body").toggleClass("is-fixed");
});

//プランから探す
jQuery("#js-drawer-background").on("click", function (e) {
  e.preventDefault();
  // jQuery(".js-fv__btn").toggleClass("is-checked");
  jQuery("#js-plan-menu").toggleClass("is-checked");
  jQuery("#js-drawer-background").toggleClass("is-checked");
  jQuery("body").toggleClass("is-fixed");
});

//エリアから探す
jQuery("#js-drawer-background2").on("click", function (e) {
  e.preventDefault();
  // jQuery(".js-fv__btn").toggleClass("is-checked");
  jQuery("#js-area-menu").toggleClass("is-checked");
  jQuery("#js-drawer-background2").toggleClass("is-checked");
  jQuery("body").toggleClass("is-fixed");
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper = new Swiper(".recent1__swiper", {
  // Optional parameters
  // loop: true,
  slidesPerView: "auto",
  spaceBetween: 19,
  breakpoints: {
    768: {
      spaceBetween: 48,
      centeredSlides: true, // 中央寄せにする
      initialSlide: 1,
      
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".recent1__swiper-button-next",
    prevEl: ".recent1__swiper-button-prev",
  },
});


const cardSwiper = (selector, buttonPrev, buttonNext) => {
  return new Swiper(selector, { //swiperの名前
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    // centeredSlides: true,
    768: {
      centeredSlides: true, // 中央寄せにする
      // initialSlide: 2,
      
    },

    //ナビゲーション
    navigation: {
      prevEl: buttonPrev, //戻るボタンのclass
      nextEl: buttonNext //進むボタンのclass
    },
  });
}

//swiperを生成
const cardSwiper1 = cardSwiper(".recent2__swiper",  ".recent2__swiper-button-prev", ".recent2__swiper-button-next");

let cardSwiper2 = null;
window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    cardSwiper2 = cardSwiper(".reports__swiper",  ".reports__swiper-prev", ".reports__swiper-next");
    swiperStatus = true
  } else {
    swiperStatus = false
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && swiperStatus) {
    cardSwiper2.destroy(false, true)
    swiperStatus = false
  } else if (window.innerWidth < 768 && !swiperStatus) {
    cardSwiper2 = cardSwiper(".reports__swiper",  ".reports__swiper-prev", ".reports__swiper-next");
    swiperStatus = true
  }
})

const cardSwiper3 = cardSwiper(".reports-news__swiper",  ".reports-news__swiper-prev", ".reports-news__swiper-next");




// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper3 = new Swiper(".about__swiper", {
  // Optional parameters
  loop: true,

  speed: 3000, // ループの時間
  autoplay: {
    delay: 0, // 途切れなくループ
  },
  slidesPerView: "auto",
  spaceBetween: 2,
  breakpoints: {
    768: {
      spaceBetween: 3,
    },
  },
});



// 人気プランナーランキング
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper6 = new Swiper(".plannerranking__swiper", {
  loop: false,

  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    805: {
      spaceBetween: 24,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".plannerranking__swiper-next",
    prevEl: ".plannerranking__swiper-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper7 = new Swiper(".plannerranking-new-swiper", {
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 35,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".plannerranking-new-next",
    prevEl: ".plannerranking-new-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper8 = new Swiper(".voice-swiper", {
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    1085: {
      spaceBetween: 24,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".voice-next",
    prevEl: ".voice-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper9 = new Swiper(".voice-ranking__swiper", {
  loop: false,

  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 0,
    },
  },

  // Navigation arrows
});



// function img_alter(img) {
//   if (img.src.match(/Star\.png/)) {
//     img.src = "./img/starcolor.png";
//   } else {
//     img.src = "./img/star.png";
//   }
// }

// ★
jQuery(function () {
  $(".recent-box__like").on("click", function (e) {
    e.preventDefault();
    var src = $(this).children("img").attr("src");
    if (src.match(/Star\.png/)) {
      $(this).children("img").attr("src", "./img/starcolor.png");
    } else {
      $(this).children("img").attr("src", "./img/Star.png");
    }
  });
});

// ハート
jQuery(function () {
  $(".recent-card__like").on("click", function (e) {
    e.preventDefault();
    var src = $(this).children("img").attr("src");
    if (src.match(/heart\.png/)) {
      $(this).children("img").attr("src", "./img/heartcolor.png");
    } else {
      $(this).children("img").attr("src", "./img/heart.png");
    }
  });
});

//414px 未満は JS で viewport を固定する
(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 414
        ? 'width=device-width,initial-scale=1'
        : 'width=414';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();
