import {NameChanged} from "../events/NameChanged.js";

export default class Name {
  constructor(eventBus, nameInput) {
    nameInput.addEventListener('input', e => {
      const newName = e.target.value

      eventBus.dispatchEvent(new NameChanged(newName))
    })
  }
}
