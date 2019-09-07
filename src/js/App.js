import Mouse from './Mouse.js';
import Keyboard from './Keyboard.js';

class App {
  constructor() {
    window.addEventListener('resize', () => this.handleResize());
    document.addEventListener('contextmenu', e => e.preventDefault());

    this.size = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    };

    this.canvas = document.querySelector('.js-canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = this.size.width;
    this.canvas.height = this.size.height;

    this.keyboard = new Keyboard();

    this.mouse = new Mouse({
      move: e => {
        
      },
      down: e => {
        
      },
      up: e => {
        
      },
    });
  }

  tick() {
    requestAnimationFrame(() => this.tick());
  }

  handleResize() {
    this.canvas.width = this.size.width = document.body.clientWidth;
    this.canvas.height = this.size.height = document.body.clientHeight;
  }
}

export default App;