export class Pulse extends CustomEvent {
  constructor() {
    super(Pulse.type);
  }

  static type = 'pulse'
}
