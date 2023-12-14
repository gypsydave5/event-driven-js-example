import {NameChanged} from "../events/NameChanged.js";

export default class Name {
  constructor(nameInput) {

    console.log(nameInput)
    nameInput.addEventListener('input', e => {
      const newName = e.target.value

      window.dispatchEvent(new NameChanged(newName))
    })
  }
}
