#include "./include/raylib.h"
#if defined(PLATFORM_WEB)
    #include <emscripten/emscripten.h>
#endif

int screenWidth, screenHeight, playerX;
bool playerAbove;

void UpdateDrawFrame(void);

int main(void) {
  SetConfigFlags(FLAG_WINDOW_RESIZABLE);
  InitWindow(320, 640, "strontium");
  playerX = (screenWidth/2)-screenWidth/20;
  playerAbove = true;
  #if defined(PLATFORM_WEB)
    emscripten_set_main_loop(UpdateDrawFrame, 0, 1);
  #else
    SetTargetFPS(60);
    while (!WindowShouldClose()) {
      UpdateDrawFrame();
    }
  #endif
  CloseWindow();
  return 0;
}

void UpdateDrawFrame(void) {
  screenWidth = GetScreenWidth();
  screenHeight = GetScreenHeight();
  BeginDrawing();
    ClearBackground(WHITE);
    DrawRectangle(0, screenHeight/2, screenWidth, screenHeight/2, BLACK);
    DrawRectangle(screenWidth/4, screenHeight/2,screenWidth/2, screenWidth/20, WHITE);
    DrawRectangle(screenWidth/4, screenHeight/2-screenWidth/20, screenWidth/2, screenWidth/20, BLACK);
    DrawRectangle(playerX, playerX, screenWidth/20, screenWidth/20, BLACK);
    DrawText(TextFormat("Screen Width: %d", screenWidth), 10, 10, 20, DARKGRAY);
    DrawText(TextFormat("Screen Height: %d", screenHeight), 10, 40, 20, DARKGRAY);
  EndDrawing();
}
