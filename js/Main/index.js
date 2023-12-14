import Logger from "./components/Logger.js";
import Button from "./components/Button.js";
import Background from "./components/Background.js";
import Pulser from "./components/Pulser.js";
import Name from "./components/Name.js";
import AwesomeControl from "./components/AwesomeControl.js";
import initializeSpeaker from "./components/Speaker.js";
import EventsBus from "./EventsBus.js";

export default function Main() {
  const eventBus = new EventsBus()

  new Button(eventBus)
  const logger = new Logger(eventBus)
  new Background(eventBus)
  new Pulser(eventBus)
  new Name(eventBus, document.querySelector('#name'))
  new AwesomeControl(eventBus, document.querySelector("#background-toggle"))

  initializeSpeaker(eventBus)

  logger.send('initialized app')
}


