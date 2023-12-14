import {Pulse} from "../events/Pulse.js";
import {NameChanged} from "../events/NameChanged.js";

const synth = window.speechSynthesis;

function say(text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
}

export default function initializeSpeaker(eventBus) {
  eventBus.addEventListener(Pulse.type, () => say('tick'))

  eventBus.addEventListener(NameChanged.type, (e) => say(e.detail.name))
}
