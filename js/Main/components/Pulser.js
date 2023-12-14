import {Pulse} from "../events/Pulse.js";

export default class Pulser {
  constructor(eventBus) {
    setInterval(() => eventBus.dispatchEvent(new Pulse()), 2000)
  }
}
