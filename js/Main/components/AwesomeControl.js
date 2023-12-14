import {AwesomeMode} from "../events/AwesomeMode.js";

export default class AwesomeControl {
  constructor(checkbox) {
    this.checkbox = checkbox;

    window.dispatchEvent(new AwesomeMode(this.state))

    this.checkbox.addEventListener('change', () => {
      window.dispatchEvent(new AwesomeMode(this.state))
    })
  }

  get state() {
    return this.checkbox.checked
  }
}
