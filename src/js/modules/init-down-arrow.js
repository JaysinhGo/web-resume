export default {
  downArrow: (scroll) => {
    if (scroll < 129) {
      $("#scroll-down-box")
        .height((128 - scroll) / 2)
        .css("opacity", 1 - 0.0078125 * scroll);
    }
  },
};
