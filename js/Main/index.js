import Logger from "./components/Logger.js";
import Button from "./components/Button.js";
import Background from "./components/Background.js";
import Pulser from "./components/Pulser.js";

export default function Main() {
  new Button()
  const logger = new Logger()
  new Background()
  new Pulser()

  logger.send('initialized app')
}


