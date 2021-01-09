import init from "./modules/init-down-arrow";
import intro from "./modules/intro";
import aboutme from "./modules/about-me";
import store from "./modules/store";
import music from "./modules/music";
import skills from "./modules/skills";

$(document).ready(() => {
  store.setAllData(config);
  config = null;
  music.init();
  $("#play").click();
});
$(window).scroll((e) => {
  console.log(e);
  let scroll = $(window).scrollTop();
  $("body").addClass("scrolling");
  init.downArrow(scroll);
  intro.animate(scroll);
  aboutme.animate(scroll);
  skills.animate(scroll);
});
$(function () {
  let timer;
  document.addEventListener("scroll", (e) => {
    clearTimeout(timer);
    checkScroll();
  });

  const checkScroll = () => {
    timer = setTimeout(() => {
      let scroll = $(window).scrollTop();
      intro.stop(scroll);
      $("body").removeClass("scrolling");
    }, 250);
  };
});
$(document).on("click", "#yes", () => {
  music.play();
  $(".start").addClass("zoomOut");
  $(".main-box").show(500);
});
$(document).on("click", "#no", () => {
  $(".start").addClass("zoomOut");
  $(".main-box").show(1000);
});
