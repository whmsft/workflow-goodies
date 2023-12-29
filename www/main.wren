import "dome" for Window
import "random" for Random
import "input" for Keyboard, Mouse
import "graphics" for Canvas, Color, Font
import "io" for FileSystem

class main {
  construct new() {}
  init() {
    _scale = 1
    Canvas.resize(360,640)
    Window.resize(_scale * Canvas.width, _scale * Canvas.height)
  }
  update() {}
  draw(alpha) {
    Canvas.cls(Color.hex("#0084ff"))
    Canvas.line(10,10,350,630,Color.hex("#ffffff"),5)
    Canvas.line(350,10,10,630,Color.hex("#ffffff"),5)
  }
}

var Game = main.new()

