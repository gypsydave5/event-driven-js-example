import {ButtonClicked} from "../events/ButtonClicked.js";
import {Pulse} from "../events/Pulse.js";
import {AwesomeMode} from "../events/AwesomeMode.js";

function randomColor() {
  return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

export default class Background {
  constructor(eventBus) {
    eventBus.addEventListener(ButtonClicked.type, () => {
      document.body.style.backgroundColor = randomColor()
    })

    eventBus.addEventListener(AwesomeMode.type, e => {
      this.beAwesome = e.detail.enabled
    })

    eventBus.addEventListener(Pulse.type, () => {
      if (this.beAwesome) {
        document.body.style.backgroundColor = randomColor()
      }
    })
  }
}

