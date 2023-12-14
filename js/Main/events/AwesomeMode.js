export class AwesomeMode extends CustomEvent {
  constructor(enabled) {
    super(AwesomeMode.type, { detail: { enabled: enabled } });
  }

  static type = 'awesomeMode'
}
