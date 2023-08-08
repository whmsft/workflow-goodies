local rs = require "utility/resolution_solution"
local width, height = 128, 80
local screenWidth, screenHeight = love.window.getDesktopDimensions()

function love.load()
    rs.init({width = width, height = height, mode = 1})
    rs.setMode(screenWidth, screenHeight, {resizable = true})
    love.window.setFullscreen(true)
    love.graphics.setDefaultFilter("nearest", "nearest")
    elisa = love.graphics.newImage("assets/elisa.artotzka.png")
end

function love.resize()
    rs.resize(screenWidth, screenHeight)
end

function love.update()
    if love.keyboard.isDown("escape") then love.window.close() end
end

function love.draw()
    rs.start()
        love.graphics.rectangle("fill", 1, 1, 128, 80)
        love.graphics.draw(elisa, 10, 10, 0, 1.5, 1.5)
    rs.stop()
end