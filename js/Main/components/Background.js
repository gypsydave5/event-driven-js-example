import {ButtonClicked} from "../events/ButtonClicked.js";
import {Pulse} from "../events/Pulse.js";

function randomColor() {
  return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

export default function Background() {
  window.addEventListener(ButtonClicked.type, () => {
    document.body.style.backgroundColor = randomColor()
  })

  window.addEventListener(Pulse.type, () => {
    if (this.state) {
      document.body.style.backgroundColor = randomColor()
    }
  })

  document.querySelector("#background-toggle").addEventListener('change', () => {
    this.toggle()
  })
}

Background.prototype.toggle = function toggle() {
  this.state = !this.state
}
