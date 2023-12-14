import {ButtonClicked} from "../events/ButtonClicked.js";
import {Pulse} from "../events/Pulse.js";
import {NameChanged} from "../events/NameChanged.js";
import {AwesomeMode} from "../events/AwesomeMode.js";

export default class Logger {
  constructor(eventBus) {
    eventBus.addEventListener(ButtonClicked.type, () => {
      this.send('button clicked')
    })

    eventBus.addEventListener(Pulse.type, () => {
      this.send('pulse!')
    })

    eventBus.addEventListener(NameChanged.type, (e) => {
      const name = e.detail.name
      this.send(`name changed to ${name}`)
    })

    eventBus.addEventListener(AwesomeMode.type, (e) => {
      if (e.detail.enabled) {
        this.send('AWESOME MODE ENABLED')
      } else {
        this.send('AWESOME MODE DISABLED')
      }
    })
  }

  send(message) {
    console.log(message)
  }
}
