#include "./include/raylib.h"
#if defined(PLATFORM_WEB)
    #include <emscripten/emscripten.h>
#endif

int screenWidth, screenHeight, playerX, playerY, fallVelocity;
int tick = 0;
bool playerAbove = true;
Color PRIMARY = WHITE;
Color SECONDARY = BLACK;
Color PLAYER = BLACK;

void UpdateDraw(void);

int main(void) {
  SetConfigFlags(FLAG_WINDOW_RESIZABLE);
  InitWindow(320, 640, "strontium");
  playerAbove = true;
  #if defined(PLATFORM_WEB)
    emscripten_set_main_loop(UpdateDraw, 0, 1);
  #else
    SetTargetFPS(60);
    while (!WindowShouldClose()) {
      UpdateDraw();
    }
  #endif
  CloseWindow();
  return 0;
}

void UpdateDraw(void) {
  if (tick==1) {
    playerX = ((screenWidth/2)-screenWidth/20)+screenWidth/40;
    playerY = screenHeight/3;
  }
  screenWidth = GetScreenWidth();
  screenHeight = GetScreenHeight();
  fallVelocity += playerAbove?1:-1;
  if (IsMouseButtonDown(MOUSE_LEFT_BUTTON) || IsGestureDetected(GESTURE_TAP)) {
    if (GetMouseX() > screenWidth/2 || GetTouchX() > screenWidth/2) playerX+=screenWidth/200;
    if (GetMouseX() < screenWidth/2 || GetTouchX() < screenWidth/2) playerX-=screenWidth/200;
  }
  if (IsKeyDown(KEY_RIGHT)) playerX+=screenWidth/200;
  if (IsKeyDown(KEY_LEFT)) playerX-=screenWidth/200;
  if (playerX >= 4*screenWidth/20 && playerX <= 3*screenWidth/4) {
    if (playerAbove && playerY >= (screenHeight/2)-screenWidth/10) {
      fallVelocity = 0;
      playerY = (screenHeight/2)-screenWidth/10;
    }
    if (!playerAbove && playerY <= (screenHeight/2)+screenWidth/20) {
      fallVelocity = 0;
      playerY = (screenHeight/2)+screenWidth/20;
    }
  }
  PLAYER = (playerY>=screenHeight/2)?WHITE:BLACK;
  playerAbove = (playerY+screenWidth/40<=screenHeight/2);
  playerY += fallVelocity/5;
  
  BeginDrawing();
    ClearBackground(WHITE);
    DrawRectangle(0, screenHeight/2, screenWidth, screenHeight/2, SECONDARY);
    DrawRectangle(screenWidth/4, screenHeight/2, screenWidth/2, screenWidth/20, PRIMARY);
    DrawRectangle(screenWidth/4, screenHeight/2-screenWidth/20, screenWidth/2, screenWidth/20, SECONDARY);
    DrawRectangle(playerX, playerY, screenWidth/20, screenWidth/20, PLAYER);
    DrawText(TextFormat("fallVelocity: %d", fallVelocity), 10, 10, 20, SECONDARY);
  EndDrawing();
  tick++;
}
