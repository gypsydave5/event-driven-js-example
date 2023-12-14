import {AwesomeMode} from "../events/AwesomeMode.js";

export default class AwesomeControl {
  constructor(eventBus, checkbox) {
    this.checkbox = checkbox;

    eventBus.dispatchEvent(new AwesomeMode(this.state))

    this.checkbox.addEventListener('change', () => {
      eventBus.dispatchEvent(new AwesomeMode(this.state))
    })
  }

  get state() {
    return this.checkbox.checked
  }
}
