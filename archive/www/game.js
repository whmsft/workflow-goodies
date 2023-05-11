var game;
var gameWidth = 800;
var gameHeight = 600;

window.onload = function() {
  var config = {
    type: Phaser.CANVAS,
    width: gameWidth,
    height: gameHeight,
    scene: [intro]
  };
  game = new Phaser.Game(config);
  resize();
  window.addEventListener("resize", resize, false);
};

function resize() {
  var canvas = document.querySelector("canvas");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = game.config.width / game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = (windowWidth / gameRatio) + "px";
  } else {
    canvas.style.width = (windowHeight * gameRatio) + "px";
    canvas.style.height = windowHeight + "px";
  }
}

var intro = new Phaser.Scene('intro');
intro.create = function() {
  var rect = new Phaser.Geom.Rectangle(0, 0, 800, 600);

  var graphics = this.add.graphics({
    fillStyle: {
      color: 0x0000ff
    }
  });

  graphics.fillRectShape(rect);
};
