class Mouse {
  constructor(handlers = {}) {
    this.down = false;
    this.x = undefined;
    this.y = undefined;
    this.cursor = 'default';
    this.handlers = handlers;
    window.addEventListener('mousedown', e => this.handleDown(e));
    window.addEventListener('mouseup', e => this.handleUp(e));
    window.addEventListener('mousemove', e => this.handleMove(e));
  }

  handleDown(e) {
    e.preventDefault();
    this.down = true;
    this.handlers.down && this.handlers.down(e);
  }

  handleUp(e) {
    e.preventDefault();
    this.down = false;
    this.handlers.up && this.handlers.up(e);
  }

  handleMove(e) {
    e.preventDefault();
    this.x = event.clientX;
    this.y = event.clientY;
    this.handlers.move && this.handlers.move(e);
  }

  isAbove(rect, size = 64) {
    let x = rect.pos.x;
    let y = rect.pos.y;
    let w = size;
    let h = size;
    return this.x >= x && this.x <= x + w && this.y >= y && this.y <= y + h;
  }

  set cursor(cursor) {
    document.body.style.cursor = cursor;
  }
}



export default Mouse;