gdjs.LevelCode = {};
gdjs.LevelCode.GDPlayerObjects1= [];
gdjs.LevelCode.GDPlayerObjects2= [];
gdjs.LevelCode.GDPlayerObjects3= [];
gdjs.LevelCode.GDtopPillarObjects1= [];
gdjs.LevelCode.GDtopPillarObjects2= [];
gdjs.LevelCode.GDtopPillarObjects3= [];
gdjs.LevelCode.GDDirection_9595TextObjects1= [];
gdjs.LevelCode.GDDirection_9595TextObjects2= [];
gdjs.LevelCode.GDDirection_9595TextObjects3= [];


gdjs.LevelCode.mapOfEmptyGDtopPillarObjects = Hashtable.newFrom({"topPillar": []});
gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDtopPillarObjects2Objects = Hashtable.newFrom({"topPillar": gdjs.LevelCode.GDtopPillarObjects2});
gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDtopPillarObjects2Objects = Hashtable.newFrom({"topPillar": gdjs.LevelCode.GDtopPillarObjects2});
gdjs.LevelCode.eventsList0 = function(runtimeScene) {

};gdjs.LevelCode.userFunc0x7c7518 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(0,0,0);
const player = runtimeScene.getObjects("Player");
const topPillars = runtimeScene.getObjects("topPillar");
var LVL = runtimeScene.getVariables().get("Level").getAsNumber();
var SwipeDirection = runtimeScene.getVariables().get("SwipeDirection");
var InitLevel = runtimeScene.getVariables().get("InitLevel");
var CurrentMap = runtimeScene.getVariables().get("CurrentMap");

var map = [
	[[2,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]],
	[[0,0,1,0,0,0],[0,0,1,0,0,0],[0,0,1,0,0,0],[0,0,1,0,0,0],[0,0,2,0,0,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,1,1,0],[0,1,2,1,1,0],[0,1,1,1,1,0],[0,1,1,1,1,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,1,2,0],[0,1,1,1,1,0],[0,1,1,0,1,0],[0,1,1,1,1,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,1,0,0],[0,1,1,1,2,0],[0,1,1,1,1,0],[0,1,1,1,1,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,1,1,0],[0,2,0,0,1,0],[0,1,1,1,1,0],[0,1,1,1,1,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,1,1,0],[0,1,2,1,1,0],[0,1,1,1,0,0],[0,1,1,1,0,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,1,1,0],[0,1,0,0,1,0],[0,1,1,0,1,0],[0,1,1,2,1,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,1,0,0],[0,1,2,1,1,0],[0,0,1,1,1,0],[0,0,1,1,1,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,2,1,0,0],[0,1,0,1,1,0],[0,1,1,1,1,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,1,1,0],[0,1,1,2,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]],
	[[0,0,0,0,0,0],[0,1,1,1,0,0],[0,1,1,1,0,0],[0,1,1,1,1,0],[0,0,0,2,1,0],[0,0,0,0,0,0]],
]
if (!InitLevel.getAsBoolean()) {
	CurrentMap.fromJSObject(map[LVL])
	InitLevel.setBoolean(true);
} 
var id=0;
var localMap=CurrentMap.toJSObject()
for (var ky=0; ky<localMap.length; ky++) {
  	var vy=localMap[ky];
  	for (var kx=0; kx<vy.length; kx++) {
    var vx=vy[kx];
		if (topPillars[id]) {
			topPillars[id].setPosition(140-(ky*33)+(kx*33),100+(kx*20)+(ky*20));
			topPillars[id].hide(!vx);
			if (vx==2) player[0].setPosition(140-(ky*33)+(kx*33),65+(kx*20)+(ky*20));
		}
		id+=1;
  	}
}
CurrentMap.fromJSObject(localMap)
//CurrentMap.replaceChildrenArray([gdjs.Variable(map[0][0]),gdjs.Variable(map[0][1]),gdjs.Variable(map[0][2]),gdjs.Variable(map[0][3]),gdjs.Variable(map[0][4]),gdjs.Variable(map[0][5])])
};
gdjs.LevelCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("None");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_8way.func(runtimeScene, "UpRight", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("U");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_8way.func(runtimeScene, "DownLeft", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("D");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_8way.func(runtimeScene, "UpLeft", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("L");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_8way.func(runtimeScene, "DownRight", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("R");
}}

}


};gdjs.LevelCode.eventsList2 = function(runtimeScene) {

{


const repeatCount2 = 36;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.LevelCode.GDtopPillarObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfEmptyGDtopPillarObjects) != 36;
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDtopPillarObjects2Objects, 0, 0, "");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDtopPillarObjects2Objects);
}{for(var i = 0, len = gdjs.LevelCode.GDtopPillarObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDtopPillarObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LevelCode.GDtopPillarObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDtopPillarObjects2[i].getBehavior("Resizable").setSize(72, 72);
}
}{for(var i = 0, len = gdjs.LevelCode.GDtopPillarObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDtopPillarObjects2[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.LevelCode.GDtopPillarObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDtopPillarObjects2[i].setZOrder(0);
}
}}
}

}


{


gdjs.LevelCode.userFunc0x7c7518(runtimeScene);

}


{


gdjs.LevelCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Direction_Text"), gdjs.LevelCode.GDDirection_9595TextObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDDirection_9595TextObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDDirection_9595TextObjects1[i].getBehavior("Text").setText("Direction: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}}

}


};

gdjs.LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelCode.GDPlayerObjects1.length = 0;
gdjs.LevelCode.GDPlayerObjects2.length = 0;
gdjs.LevelCode.GDPlayerObjects3.length = 0;
gdjs.LevelCode.GDtopPillarObjects1.length = 0;
gdjs.LevelCode.GDtopPillarObjects2.length = 0;
gdjs.LevelCode.GDtopPillarObjects3.length = 0;
gdjs.LevelCode.GDDirection_9595TextObjects1.length = 0;
gdjs.LevelCode.GDDirection_9595TextObjects2.length = 0;
gdjs.LevelCode.GDDirection_9595TextObjects3.length = 0;

gdjs.LevelCode.eventsList2(runtimeScene);

return;

}

gdjs['LevelCode'] = gdjs.LevelCode;
