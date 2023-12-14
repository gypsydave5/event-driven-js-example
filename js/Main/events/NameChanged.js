export class NameChanged extends CustomEvent {
  constructor(newName) {
    super(NameChanged.type, {detail: { name: newName } });
  }

  static type = 'nameChanged'
}
