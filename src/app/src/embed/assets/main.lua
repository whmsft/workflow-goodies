function love.load()
	widthScreen, heightScreen = 0, 0
	widthWindow, heightWindow = 0, 0
	delta = 0
end

function love.update(dt)
	widthScreen, heightScreen = love.window.getDesktopDimensions()
	widthWindow, heightWindow = love.graphics.getWidth(), love.graphics.getHeight()
	delta = dt
end

function love.draw()
	love.graphics.setColor(0.25, 0.25, 0.25)
	love.graphics.rectangle("fill", 10, 10, widthWindow-20, heightWindow-20, 20, 20)
	love.graphics.setColor(1, 1, 1)
	love.graphics.print(
		"Screen: \n  width: " .. widthScreen .. "\n  height: " .. heightScreen .. "\nWindow:\n  width" .. widthWindow .. "\n  height" .. heightWindow .. "\nDelta: " .. delta,
		25, 25
	)
end
