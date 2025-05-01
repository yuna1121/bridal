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
const swiper = new Swiper("#js-recent-swiper1", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 19,
  breakpoints: {
    768: {
      spaceBetween: 48,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: "#js-recent-swiper1-next",
    prevEl: "#js-recent-swiper1-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper2 = new Swiper("#js-recent-swiper2", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  // centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: "#js-recent-swiper2-next",
    prevEl: "#js-recent-swiper2-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper3 = new Swiper("#js-about-swiper", {
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

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper4 = new Swiper("#js-reports-swiper", {
  // Optional parameters

  slidesPerView: "auto",
  loop: true,
  spaceBetween: 16,
  breakpoints: {
    1085: {
      loop: false,
      spaceBetween: 0,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-reports-swiper-next",
    prevEl: "#js-reports-swiper-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper5 = new Swiper("#js-reports-news-swiper", {
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    805: {
      spaceBetween: 32,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-reports-news-swiper-next",
    prevEl: "#js-reports-news-swiper-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper6 = new Swiper("#js-plannerranking-swiper", {
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    805: {
      spaceBetween: 24,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-plannerranking-next",
    prevEl: "#js-plannerranking-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper7 = new Swiper("#js-plannerranking-new-swiper", {
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
    nextEl: "#js-plannerranking-new-next",
    prevEl: "#js-plannerranking-new-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper8 = new Swiper("#js-voice-swiper", {
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    805: {
      spaceBetween: 24,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-voice-next",
    prevEl: "#js-voice-prev",
  },
});

// swiper
// class名は自分で決めたクラス名またはIDにする。複数あるときにバッティングする
const swiper9 = new Swiper("#js-voice-ranking-swiper", {
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    805: {
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
