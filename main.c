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

bool collide(int x1, int y1, int w1, int h1, int x2, int y2, int w2, int h2) {return (x1 <= x2 + w2 && x1 + w1 >= x2 && y1 <= y2 + h2 && y1 + h1 >= y2);}
bool collideSideways(int x1, int y1, int w1, int h1, int x2, int y2, int w2, int h2) {if (playerAbove) {return (x1 <= x2 + w2 && x1 + w1 >= x2 && y1-1 <= y2 + h2 && y1-1 + h1 >= y2);} else {return (x1 <= x2 + w2 && x1 + w1 >= x2 && y1+1 <= y2 + h2 && y1+1 + h1 >= y2);}}

int main(void) {
  SetConfigFlags(FLAG_WINDOW_RESIZABLE);
  InitWindow(GetMonitorWidth(GetCurrentMonitor()), GetMonitorHeight(GetCurrentMonitor()), "strontium");
  //ToggleFullscreen();
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
  bool variable=false;
  if (tick==1) {
    playerX = ((screenWidth/2)-screenWidth/20)+screenWidth/40;
    playerY = screenHeight/3;
  }
  screenWidth = GetScreenWidth();
  screenHeight = GetScreenHeight();
  //if (screenWidth>screenHeight) screenWidth=screenHeight/2;
  fallVelocity += playerAbove?1:-1;
  if (IsKeyDown(KEY_RIGHT) && !collideSideways(playerX+screenWidth/200, playerY, screenWidth/20, screenWidth/20, screenWidth/4, screenHeight/2-screenWidth/20, screenWidth/2, screenWidth/10)) playerX+=screenWidth/200;
  if (IsKeyDown(KEY_LEFT) && !collideSideways(playerX-screenWidth/200, playerY, screenWidth/20, screenWidth/20, screenWidth/4, screenHeight/2-screenWidth/20, screenWidth/2, screenWidth/10)) playerX-=screenWidth/200;
  if (collide(playerX, playerY, screenWidth/20, screenWidth/20, screenWidth/4, screenHeight/2-screenWidth/20, screenWidth/2, screenWidth/10)) {
    fallVelocity = 0;
    playerY = playerAbove?(screenHeight/2)-screenWidth/10:(screenHeight/2)+screenWidth/20;
  }
  PLAYER = (playerY>=screenHeight/2)?WHITE:BLACK;
  playerAbove = (playerY+screenWidth/40<=screenHeight/2);
  playerY += fallVelocity/5;
  if ((IsMouseButtonDown(MOUSE_LEFT_BUTTON) || IsGestureDetected(GESTURE_TAP)) && (GetMouseX() >= screenWidth/2 || GetTouchX() >= screenWidth/2) && !collideSideways(playerX+screenWidth/200, playerY, screenWidth/20, screenWidth/20, screenWidth/4, screenHeight/2-screenWidth/20, screenWidth/2, screenWidth/10)) {playerX+=screenWidth/200; variable = true;}
  if ((IsMouseButtonDown(MOUSE_LEFT_BUTTON) || IsGestureDetected(GESTURE_TAP)) && (GetMouseX() <= screenWidth/2 || GetTouchX() <= screenWidth/2) && !collideSideways(playerX-screenWidth/200, playerY, screenWidth/20, screenWidth/20, screenWidth/4, screenHeight/2-screenWidth/20, screenWidth/2, screenWidth/10)) {playerX-=screenWidth/200;}
  
  BeginDrawing();
    ClearBackground(WHITE);
    DrawRectangle(0, screenHeight/2, screenWidth, screenHeight/2, SECONDARY);
    DrawRectangle(screenWidth/4, screenHeight/2, screenWidth/2, screenWidth/20, PRIMARY);
    DrawRectangle(screenWidth/4, screenHeight/2-screenWidth/20, screenWidth/2, screenWidth/20, SECONDARY);
    DrawRectangle(playerX, playerY, screenWidth/20, screenWidth/20, PLAYER);
    DrawText(TextFormat("%ix%i",screenWidth,screenHeight),10, 10, 20, SECONDARY);
    DrawText(TextFormat("Mouse X: %i", GetMouseX()), 10, 40, 20, SECONDARY);
    DrawText(TextFormat("Touch X: %i", GetTouchX()), 10, 70, 20, SECONDARY);
    DrawText(TextFormat("the variable: %s",variable?"true":"false"),10,100,20,SECONDARY);
  EndDrawing();
  tick++;
}
