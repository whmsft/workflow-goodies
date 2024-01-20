local push = require "push"

love.graphics.setDefaultFilter("nearest", "nearest")
local gameWidth, gameHeight = 128, 192 --fixed game resolution
local windowWidth, windowHeight = love.window.getDesktopDimensions()

push:setupScreen(gameWidth, gameHeight, windowWidth, windowHeight, {fullscreen = true})

value = 0

function love.update(dt)
	value=value+0.5
	if value>100 then value=0 end
end

function love.draw()
  push:start()
  love.graphics.clear(0.5,0.5,0.5)
  love.graphics.print(love.timer.getFPS(),10,10)
  love.graphics.rectangle("line", 10,74,108,108)
  love.graphics.rectangle("fill", 14,178-value,100,value)
  push:finish()
end
