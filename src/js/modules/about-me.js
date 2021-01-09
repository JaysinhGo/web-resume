export default {
  animate: (scroll) => {
    let startpx = window.innerWidth + 400;
    if (scroll < startpx) {
      $(".about-me-init").height(0).width(0).css("left", 0).css("top", 0);
      $(".about-me-txt").width(0).css("left", 0).css("opacity", 0);
    }
    if (scroll > startpx) {
      let hw = scroll - startpx;
      let planetWidth = hw - 240;
      let rotation = planetWidth - 280;
      if (hw < 241) {
        $(".about-me-init")
          .height(hw)
          .width(hw)
          .css("left", (hw / 2) * -1)
          .css("top", (hw / 2) * -1);
        $(".about-me-txt")
          .width(hw)
          .css("left", (hw / 2) * -1)
          .css("opacity", (hw / 2) * 0.001);
      } else {
        $(".about-me-init")
          .height(240)
          .width(240)
          .css("left", -120)
          .css("top", -120);
        $(".about-me-txt").width(240).css("left", -120).css("opacity", 1);
      }
      if (planetWidth > 0) {
        $(".about-me-planets").width(planetWidth);
        if (planetWidth < 281) {
          $(".about-me-txt").css("opacity", 1 - planetWidth * 0.0034);
        } else {
          $(".about-me-txt").css("opacity", 0);
        }
      } else {
        $(".about-me-planets").width(0);
      }
      if (rotation > 0 && rotation < 1441) {
        let rotate = "rotate(" + rotation + "deg)";
        $(".about-me-planet").css("transform", rotate);
      } else {
        $(".about-me-planet").css("transform", "rotate(0deg)");
      }
      if (rotation > 0 && rotation < 1500) {
        if (rotation > 0 && rotation < 361) {
          let btIconLeft = rotation / 1.5 + "px";
          if (rotation > 0 && rotation < 181) {
            let btIconInc = rotation / 3;
            $(".about-me-birth-date").css("opacity", rotation * 0.008);
            $(".about-me-birth-icon")
              .height(btIconInc)
              .width(btIconInc)
              .css("left", btIconLeft);
          } else if (rotation > 180) {
            let btIconDec = 60 - (rotation - 180) / 3;
            $(".about-me-birth-date").css(
              "opacity",
              1 - (rotation - 180) * 0.008
            );
            $(".about-me-birth-icon")
              .height(btIconDec)
              .width(btIconDec)
              .css("left", btIconLeft);
          } else {
            $(".about-me-birth-date").css("opacity", 0);
            $(".about-me-birth-icon").height(0).width(0).css("left", "0px");
          }
        } else {
          $(".about-me-birth-date").css("opacity", 0);
          $(".about-me-birth-icon").height(0).width(0).css("left", "0px");
        }
        if (rotation > 360 && rotation < 721) {
          let fIconIncLeft = (rotation - 360) / 1.5 + "px";
          if (rotation > 360 && rotation < 541) {
            let fIconInc = (rotation - 360) / 3;
            $(".about-me-from").css("opacity", (rotation - 360) * 0.008);
            $(".about-me-from-icon")
              .height(fIconInc)
              .width(fIconInc)
              .css("left", fIconIncLeft);
          } else if (rotation > 540) {
            let fIcondec = 60 - (rotation - 540) / 3;
            $(".about-me-from").css("opacity", 1 - (rotation - 540) * 0.008);
            $(".about-me-from-icon")
              .height(fIcondec)
              .width(fIcondec)
              .css("left", fIconIncLeft);
          } else {
            $(".about-me-from").css("opacity", 0);
            $(".about-me-from-icon").height(0).width(0).css("left", "0px");
          }
        } else {
          $(".about-me-from").css("opacity", 0);
          $(".about-me-from-icon").height(0).width(0).css("left", "0px");
        }
        if (rotation > 720 && rotation < 1081) {
          let hIconIncLeft = (rotation - 720) / 1.5 + "px";
          if (rotation > 720 && rotation < 901) {
            let hIconInc = (rotation - 720) / 3;
            $(".about-me-hobbies").css("opacity", (rotation - 720) * 0.008);
            $(".about-me-hobbies-icon")
              .height(hIconInc)
              .width(hIconInc)
              .css("left", hIconIncLeft);
          } else if (rotation > 900) {
            let hIconDec = 60 - (rotation - 900) / 3;
            $(".about-me-hobbies").css("opacity", 1 - (rotation - 900) * 0.008);
            $(".about-me-hobbies-icon")
              .height(hIconDec)
              .width(hIconDec)
              .css("left", hIconIncLeft);
          } else {
            $(".about-me-hobbies").css("opacity", 0);
            $(".about-me-hobbies-icon").height(0).width(0).css("left", "0px");
          }
        } else {
          $(".about-me-hobbies").css("opacity", 0);
          $(".about-me-hobbies-icon").height(0).width(0).css("left", "0px");
        }
        if (rotation > 1080 && rotation < 1441) {
          let qIconIncLeft = (rotation - 1080) / 1.5 + "px";
          if (rotation > 1080 && rotation < 1261) {
            let qIconInc = (rotation - 1080) / 3;
            $(".about-me-quote").css("opacity", (rotation - 1080) * 0.008);
            $(".about-me-quote-icon")
              .height(qIconInc)
              .width(qIconInc)
              .css("left", qIconIncLeft);
          } else if (rotation > 1260) {
            let qIconDec = 60 - (rotation - 1260) / 3;
            $(".about-me-quote").css("opacity", 1 - (rotation - 1260) * 0.008);
            $(".about-me-quote-icon")
              .height(qIconDec)
              .width(qIconDec)
              .css("left", qIconIncLeft);
          } else {
            $(".about-me-quote").css("opacity", 0);
            $(".about-me-quote-icon").height(0).width(0).css("left", "0px");
          }
        } else {
          $(".about-me-quote").css("opacity", 0);
          $(".about-me-quote-icon").height(0).width(0).css("left", "0px");
        }
      } else {
        $(".about-me-planet").css("transform", "rotate(0deg)");
        $(
          ".about-me-birth-date,.about-me-from,.about-me-hobbies,.about-me-quote"
        ).css("opacity", 0);
        $(
          ".about-me-birth-icon,.about-me-from-icon,.about-me-from-icon,.about-me-hobbies-icon,.about-me-quote-icon"
        )
          .height(0)
          .width(0)
          .css("left", "0px");
      }
      if (rotation > 1441) {
        if (rotation > 1641) {
          $(".about-me").css("opacity", 0);
          $(".about-me").css({
            "-webkit-transform": "scale(0,0)",
            "-moz-transform": "scale(0,0)",
            "-o-transform": "scale(0,0)",
            "-ms-transform": "scale(0,0)",
            transform: "scale(0,0)",
          });
        } else {
          $(".about-me").css("opacity", 1 - (rotation - 1441) * 0.009);
          let scale = 1 - (rotation - 1441) * 0.01;
          let scaleCSS = "scale(" + scale + "," + scale + ")";
          $(".about-me").css({
            "-webkit-transform": scaleCSS,
            "-moz-transform": scaleCSS,
            "-o-transform": scaleCSS,
            "-ms-transform": scaleCSS,
            transform: scaleCSS,
          });
        }
      } else {
        $(".about-me").css("opacity", 1);
        $(".about-me").css({
          "-webkit-transform": "scale(1,1)",
          "-moz-transform": "scale(1,1)",
          "-o-transform": "scale(1,1)",
          "-ms-transform": "scale(1,1)",
          transform: "scale(1,1)",
        });
      }
    } else {
      $(".about-me").css("opacity", 0);
      $(".about-me").css({
        "-webkit-transform": "scale(0,0)",
        "-moz-transform": "scale(0,0)",
        "-o-transform": "scale(0,0)",
        "-ms-transform": "scale(0,0)",
        transform: "scale(0,0)",
      });
    }
  },
};
