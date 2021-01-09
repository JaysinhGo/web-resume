export default {
  animate: (scroll) => {
    let condition = window.innerWidth / 2 + 228;
    if (scroll < 128) {
      $(".intro-circle")
        .height(0)
        .width(0)
        .css("left", (window.innerWidth / 2) * 129);
      $(".intro-circle-text").css("opacity", 0);
    }
    if (scroll > 128 && scroll < window.innerWidth + 400) {
      if (condition > scroll) {
        $(".intro-circle")
          .height(scroll / 2 - 128)
          .width(scroll / 2 - 128)
          .css("left", (window.innerWidth / 2) * -1 + scroll - 128);
        $(".intro-circle-text").css("opacity", scroll / window.innerWidth);
      }
      if (condition < scroll) {
        let scr = scroll - condition;
        let hw = 200 - scr / 4;
        $(".intro-circle")
          .height(hw)
          .width(hw)
          .css("left", (window.innerWidth / 2) * -1 + scroll - 128);
        $(".intro-circle-text").css(
          "opacity",
          1 - (scroll / window.innerWidth) * 0.9
        );
      }
    }
  },
  stop: (scroll) => {
    if (scroll > window.innerWidth + 400) {
      $(".intro-circle").css("visibility", "hidden");
    } else {
      $(".intro-circle").css("visibility", "visible");
    }
  },
};
