import Logger from "./components/Logger.js";
import Button from "./components/Button.js";
import Background from "./components/Background.js";
import Pulser from "./components/Pulser.js";
import Name from "./components/Name.js";
import AwesomeControl from "./components/AwesomeControl.js";
import initializeSpeaker from "./components/Speaker.js";

export default function Main() {

  new Button()
  const logger = new Logger()
  new Background()
  new Pulser()
  new Name(document.querySelector('#name'))
  new AwesomeControl(document.querySelector("#background-toggle"))

  initializeSpeaker()

  logger.send('initialized app')
}


