import { Howl, Howler } from "howler";
import store from "./store";
let once = true;
let sound = null;

export default {
  init: () => {
    let audioURL = store.getData("BASE_URL") + "/static/audio/Nay.mp3";
    //sound = new Audio(audioURL);
    sound = new Howl({
      src: [audioURL],
      loop: true,
    });
    //sound.play();
  },
  play: () => {
    if (once) {
      once = false;
      sound.play();
    }
  },
};
