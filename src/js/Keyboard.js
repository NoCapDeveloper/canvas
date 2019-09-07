class Keyboard {
  constructor() {
    this.pressed = [];
    document.addEventListener('keydown', e => this.handleKeydown(e));
    document.addEventListener('keyup', e => this.handleKeyup(e));
  }

  handleKeydown(e) {
    this.pressed.push(e.key);
  }

  handleKeyup(e) {
    while (this.pressed.indexOf(e.key) >= 0) {
      this.pressed.splice(this.pressed.indexOf(e.key), 1);
    }
  }

  isPressed(key) {
    return this.pressed.indexOf(key) >= 0;
  }
}

export default Keyboard;