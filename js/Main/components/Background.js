import {ButtonClicked} from "../events/ButtonClicked.js";
import {Pulse} from "../events/Pulse.js";

function randomColor() {
  return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

export default class Background {
  constructor() {
    this.checkbox = document.querySelector("#background-toggle");

    window.addEventListener(ButtonClicked.type, () => {
      document.body.style.backgroundColor = randomColor()
    })

    window.addEventListener(Pulse.type, () => {
      if (this.state) {
        document.body.style.backgroundColor = randomColor()
      }
    })
  }

  get state() {
    return this.checkbox.checked
  }
}

