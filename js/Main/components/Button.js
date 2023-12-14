import {ButtonClicked} from "../events/ButtonClicked.js";
import {Pulse} from "../events/Pulse.js";

export default class Button {
  constructor() {
    this.counter = 10
    this.button = document.querySelector('#button')

    this.button.addEventListener('click', () => {
      window.dispatchEvent(new ButtonClicked())
    })

    window.addEventListener(Pulse.type, () => {
      this.decrementCounter()
    })

    this.refreshButtonText()
  }

  decrementCounter() {
    this.counter -= 1
    if (this.counter < 0) {
      this.resetCounter()
    }
    this.refreshButtonText()
  }

  resetCounter() {
    this.counter = 10
  }

  refreshButtonText() {
    this.button.innerHTML = `counter ${this.counter}`
  }
}
