var CloudSprite = cc.Sprite.extend({
  screenWidth: 0.0,
  pixelsPerSecond: 0,
  xOffset: 0,

  ctor: function(spriteFrameName) {
    this._super(spriteFrameName);
  },

  SetSpeedAndWidth: function(pps, width, xOffset) {
    this.pixelsPerSecond = pps;
    this.width = width;
    this.xOffset = xOffset;
  },

  Stop: function() {
    this.stopAllActions();
  },

  ReachedDestination: function() {
    // reset to right of screen
  },

  Start: function() {
    this.stopAllActions();

    var currentX = this.x;
    var distance = currentX - this.xOffset;
    var time = distance / this.pixelsPerSecond;
    var destination = cc.p(-this.xOffset, this.y);
    var actionMove = cc.moveTo(time, destination);
    var actionMoveDone = cc.callFunc(this.ReachedDestination, this);

    this.runAction(cc.sequence(actionMove, actionMoveDone));
  },

});
