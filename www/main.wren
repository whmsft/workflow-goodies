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
    _iosevka = Font.load("iosevka","./iosevka.ttf",16)
  }
  update() {}
  draw(alpha) {
    Canvas.cls(Color.hex("#0084ff"))
    Canvas.line(10,10,350,630,Color.hex("#ffffff"),5)
    Canvas.line(350,10,10,630,Color.hex("#ffffff"),5)
    _iosevka.print("Canvas Resolution:\n    "+Canvas.width.toString+", "+Canvas.height.toString,5,5,Color.hex("#202020"))
    _iosevka.print("Window Resolution:\n    "+Window.width.toString+", "+Window.height.toString,5,45,Color.hex("#202020"))
  }
}

var Game = main.new()

