import {ButtonClicked} from "../events/ButtonClicked.js";
import {Pulse} from "../events/Pulse.js";
import {NameChanged} from "../events/NameChanged.js";
import {AwesomeMode} from "../events/AwesomeMode.js";

export default class Logger {
  constructor() {
    window.addEventListener(ButtonClicked.type, () => {
      console.log('button clicked')
    })

    window.addEventListener(Pulse.type, () => {
      console.log('pulse!')
    })

    window.addEventListener(NameChanged.type, (e) => {
      const name = e.detail.name
      console.log(`name changed to ${name}`)
    })

    window.addEventListener(AwesomeMode.type, (e) => {
      if (e.detail.enabled) {
        console.log('AWESOME MODE ENABLED')
      } else {
        console.log('AWESOME MODE DISABLED')
      }
    })
  }

  send(message) {
    console.log(message)
  }
}
