export class ButtonClicked extends CustomEvent {
  constructor() {
    super(ButtonClicked.type);
  }

  static type = 'buttonClicked'
}
