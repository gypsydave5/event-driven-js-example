import {Pulse} from "../events/Pulse.js";

export default class Pulser {
  constructor() {
    setInterval(() => window.dispatchEvent(new Pulse()), 2000)
  }
}
