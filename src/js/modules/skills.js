export default {
  animate: (scroll) => {
    if (scroll > 3600) {
      if (scroll < 3960) {
        let skillTransform = scroll - 3599;
        let skillRot = "rotate(" + skillTransform + "deg)";
        $(".skills-ufo")
          .height(skillTransform)
          .width(skillTransform)
          .css("transform", skillRot)
          .removeClass("shake-obj-ease");
        if (scroll < 3800) {
          $(".skills-ufo").css({
            left: (skillTransform / 2) * -1,
            top: (skillTransform / 2) * -1,
          });
        } else {
          $(".skills-ufo").css({
            left: "-100px",
            right: "-100px",
          });
        }
      } else {
        $(".skills-ufo")
          .height(200)
          .width(200)
          .css({
            transform: "rotate(360deg)",
            left: "-100px",
            right: "-100px",
          })
          .addClass("shake-obj-ease");
      }
    } else {
      $(".skills-ufo")
        .height(0)
        .width(0)
        .css("transform", "rotate(0deg)")
        .removeClass("shake-obj-ease");
    }
    skillsSun(scroll);
    planetSkills(scroll);
    planetHtml(scroll);
    planetCss(scroll);
    planetJs(scroll);
    planetNode(scroll);
    planetReact(scroll);
    planetNg(scroll);
  },
};

const skillsSun = (scroll) => {
  if (scroll > 3960) {
    $(".skills-sun")
      .css("right", (scroll - 4000) / 3)
      .css("opacity", 0.8);
  } else {
    $(".skills-sun").css("right", -50).css("opacity", 0);
  }
};

const planetSkills = (scroll) => {
  let skillsTxtRight = (scroll - 4200) * 4.2;
  if (scroll > 4200) {
    $(".skills-txt").css("right", skillsTxtRight).css("opacity", 0.8);
    $(".skills-text").css("right", skillsTxtRight).css("opacity", 1);
  } else {
    $(".skills-txt").css("right", -150).css("opacity", 0);
    $(".skills-text").css("right", skillsTxtRight).css("opacity", 0);
  }
};
const planetHtml = (scroll) => {
  let skillsHtmlRight = (scroll - 4500) * 3.9;
  if (scroll > 4500) {
    $(".skills-html").css("right", skillsHtmlRight).css("opacity", 0.8);
    $(".skills-html-text").css("right", skillsHtmlRight).css("opacity", 1);
  } else {
    $(".skills-html").css("right", -150).css("opacity", 0);
    $(".skills-html-text").css("right", skillsHtmlRight).css("opacity", 0);
  }
};
const planetCss = (scroll) => {
  let skillsCssRight = (scroll - 4600) * 7;
  if (scroll > 4600) {
    $(".skills-css").css("right", skillsCssRight).css("opacity", 0.8);
    $(".skills-css-text").css("right", skillsCssRight).css("opacity", 1);
  } else {
    $(".skills-css").css("right", -120).css("opacity", 0);
    $(".skills-css-text").css("right", skillsCssRight).css("opacity", 0);
  }
};
const planetJs = (scroll) => {
  let skillsJsRight = (scroll - 4650) * 2;
  if (scroll > 4650) {
    $(".skills-js").css("right", skillsJsRight).css("opacity", 0.8);
    $(".skills-js-ring-anim").css("opacity", 1);
    $(".skills-js-text").css("right", skillsJsRight).css("opacity", 1);
  } else {
    $(".skills-js").css("right", -145).css("opacity", 0);
    $(".skills-js-ring-anim").css("opacity", 0);
    $(".skills-js-text").css("right", skillsJsRight).css("opacity", 0);
  }
};
const planetNode = (scroll) => {
  let skillsNodeRight = (scroll - 4800) * 4;
  if (scroll > 4800) {
    $(".skills-node").css("right", skillsNodeRight).css("opacity", 1);
    $(".skills-node-anim").css("opacity", 1);
    $(".skills-node-text").css("right", skillsNodeRight).css("opacity", 1);
  } else {
    $(".skills-node").css("right", -130).css("opacity", 0);
    $(".skills-node-anim").css("opacity", 0);
    $(".skills-node-text").css("right", skillsNodeRight).css("opacity", 0);
  }
};
const planetReact = (scroll) => {
  let skillsReactRight = (scroll - 5000) * 10;
  if (scroll > 5000) {
    $(".skills-react").css("right", skillsReactRight).css("opacity", 1);
    $(".skills-react-anim").css("opacity", 1);
    $(".skills-react-text").css("right", skillsReactRight).css("opacity", 1);
  } else {
    $(".skills-react").css("right", -130).css("opacity", 0);
    $(".skills-react-anim").css("opacity", 0);
    $(".skills-react-text").css("right", skillsReactRight).css("opacity", 0);
  }
};
const planetNg = (scroll) => {
  let skillsNgRight = (scroll - 5100) * 9;
  if (scroll > 5000) {
    $(".skills-ng").css("right", skillsNgRight).css("opacity", 0.8);
    $(".skills-ng-anim").css("opacity", 1);
    $(".skills-ng-text").css("right", skillsNgRight).css("opacity", 1);
  } else {
    $(".skills-ng").css("right", -145).css("opacity", 0);
    $(".skills-ng-anim").css("opacity", 0);
    $(".skills-ng-text").css("right", skillsNgRight).css("opacity", 0);
  }
};
