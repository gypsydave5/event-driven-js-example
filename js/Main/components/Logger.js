import {ButtonClicked} from "../events/ButtonClicked.js";

export default class Logger {
  constructor() {
    window.addEventListener(ButtonClicked.type, () => {
      console.log('button clicked')
    })
  }

  send(message) {
    console.log(message)
  }
}
