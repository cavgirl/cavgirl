pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 5636;
pubcoder.page.title = "57";
pubcoder.page.number = 57;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj5961_animation_count = 0;
var obj5963_animation_count = 0;
var obj5965_animation_count = 0;
var obj5967_animation_count = 0;
var obj5987_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj5961_onDrag_activeActionGroupIndex = -1;
var obj5961_onDrag_runningActionsCount = 0;
var obj5961_onDrag_loopCount = 0;
var obj5961_onTouchDown_activeActionGroupIndex = -1;
var obj5961_onTouchDown_runningActionsCount = 0;
var obj5961_onTouchDown_loopCount = 0;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_loopCount = 0;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_loopCount = 0;
var obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5961_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
var obj5963_onDrag_activeActionGroupIndex = -1;
var obj5963_onDrag_runningActionsCount = 0;
var obj5963_onDrag_loopCount = 0;
var obj5963_onTouchDown_activeActionGroupIndex = -1;
var obj5963_onTouchDown_runningActionsCount = 0;
var obj5963_onTouchDown_loopCount = 0;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_loopCount = 0;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_loopCount = 0;
var obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5963_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
var obj5965_onDrag_activeActionGroupIndex = -1;
var obj5965_onDrag_runningActionsCount = 0;
var obj5965_onDrag_loopCount = 0;
var obj5965_onTouchDown_activeActionGroupIndex = -1;
var obj5965_onTouchDown_runningActionsCount = 0;
var obj5965_onTouchDown_loopCount = 0;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_loopCount = 0;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_loopCount = 0;
var obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5965_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
var obj5967_onDrag_activeActionGroupIndex = -1;
var obj5967_onDrag_runningActionsCount = 0;
var obj5967_onDrag_loopCount = 0;
var obj5967_onTouchDown_activeActionGroupIndex = -1;
var obj5967_onTouchDown_runningActionsCount = 0;
var obj5967_onTouchDown_loopCount = 0;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_loopCount = 0;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_loopCount = 0;
var obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5967_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
var obj5987_onDrag_activeActionGroupIndex = -1;
var obj5987_onDrag_runningActionsCount = 0;
var obj5987_onDrag_loopCount = 0;
var obj5987_onTouchDown_activeActionGroupIndex = -1;
var obj5987_onTouchDown_runningActionsCount = 0;
var obj5987_onTouchDown_loopCount = 0;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_loopCount = 0;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_loopCount = 0;
var obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5987_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
var obj6044_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6044_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6044_SCEventCounterReachedTargetValue_loopCount = 0;
var obj7599_onLoad_activeActionGroupIndex = -1;
var obj7599_onLoad_runningActionsCount = 0;
var obj7599_onLoad_loopCount = 0;
var obj15948_onLoad_activeActionGroupIndex = -1;
var obj15948_onLoad_runningActionsCount = 0;
var obj15948_onLoad_loopCount = 0;
var obj16105_onTap_activeActionGroupIndex = -1;
var obj16105_onTap_runningActionsCount = 0;
var obj16105_onTap_loopCount = 0;
var obj16107_onTap_activeActionGroupIndex = -1;
var obj16107_onTap_runningActionsCount = 0;
var obj16107_onTap_loopCount = 0;
var obj16107_onShow_activeActionGroupIndex = -1;
var obj16107_onShow_runningActionsCount = 0;
var obj16107_onShow_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj6044_counterValue = 0;
var obj6044_counterTargetValue = 5;
var obj6044_counterCanExceedTargetValue = false;
var obj15948_counterValue = 0;
var obj15948_counterTargetValue = 2;
var obj15948_counterCanExceedTargetValue = false;
 $(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
initAnimation_5961();
function initAnimation_5961()
{
        var targetObjectId = "#obj5961";
        var widthSCAnimationObject = 130;
        var heightSCAnimationObject = 126;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5961 = $("#")[0];
        window.hasAudioTrack_obj5961 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5961_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5961 = $(targetObjectId).spritespin("api");
}
initAnimation_5963();
function initAnimation_5963()
{
        var targetObjectId = "#obj5963";
        var widthSCAnimationObject = 130;
        var heightSCAnimationObject = 126;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5963 = $("#")[0];
        window.hasAudioTrack_obj5963 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5963_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5963 = $(targetObjectId).spritespin("api");
}
initAnimation_5965();
function initAnimation_5965()
{
        var targetObjectId = "#obj5965";
        var widthSCAnimationObject = 130;
        var heightSCAnimationObject = 126;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5965 = $("#")[0];
        window.hasAudioTrack_obj5965 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5965_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5965 = $(targetObjectId).spritespin("api");
}
initAnimation_5967();
function initAnimation_5967()
{
        var targetObjectId = "#obj5967";
        var widthSCAnimationObject = 130;
        var heightSCAnimationObject = 126;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5967 = $("#")[0];
        window.hasAudioTrack_obj5967 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5967_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5967 = $(targetObjectId).spritespin("api");
}
initAnimation_5987();
function initAnimation_5987()
{
        var targetObjectId = "#obj5987";
        var widthSCAnimationObject = 130;
        var heightSCAnimationObject = 126;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5987 = $("#")[0];
        window.hasAudioTrack_obj5987 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5987_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5987 = $(targetObjectId).spritespin("api");
}

	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj5961_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5961_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_onTouchDown_ended");
		
		return;
	}
	window.obj5961_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5961");
//	action: dragDrop
//	target: obj5961 
dragDrop_6018();
function dragDrop_6018() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5961_onTouchDown_runningActionsCount = obj5961_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5961');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj5961_onTouchDown_runningActionsCount = window.obj5961_onTouchDown_runningActionsCount - 1;
if (window.obj5961_onTouchDown_runningActionsCount == 0) {
	obj5961_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5940");
    	var actionsOnDrop = new Array("SCActionDragDrop5992_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6018 = false;
    	var dropped_id_6018;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_6018 = true;
					dropped_id_6018 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6018) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5961").trigger('SCActionDragDrop6018_droppedOutsideTargetActions');
$("#obj5961").trigger('SCActionDragDrop6018_droppedOutsideTargetActions');
		}
    });
}











};
obj5961_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5961_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_onTouchDown_ended");
		
		return;
	}
	window.obj5961_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5961 
rotate_6037();
function rotate_6037() {
	window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount = obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5961";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5961';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6037_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6037_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6037_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6037_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6037_completed() {
	setTimeout(function() {
		window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount = window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5961 
rotate_6037();
function rotate_6037() {
	window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount = obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5961";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5961';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6037_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6037_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6037_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6037_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6037_completed() {
	setTimeout(function() {
		window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount = window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6020();
function runjs_6020() {
	window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5961"));
	setTimeout(function() {
		window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj5961 
playAnimation_6022();
function playAnimation_6022() {
	var targetObjectId = "#obj5961";
	var targetObject = $(targetObjectId)[0];
	window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5961 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5961;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5961.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5961").one("obj5961_animation_ended",function(event) {
		    window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }







//	action: scale
//	target: obj5961 
scale_6021();
function scale_6021() {
	window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5961";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5961';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '2';
	var scaleYValue = '2';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6021_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6021_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6021_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6021_completed() {
	setTimeout(function() {
		window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}












};
obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 2;
	
















//	action: increment counter
//	target: obj6044 
incrementCounter_6052();
function incrementCounter_6052() {
	window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6044_counterValue;
	obj6044_counterValue = obj6044_counterValue + 1;
	if (! obj6044_counterCanExceedTargetValue && obj6044_counterValue > obj6044_counterTargetValue) {
		obj6044_counterValue = obj6044_counterTargetValue;
	}
	if (oldValue != obj6044_counterValue) {
		$("#obj6044").trigger('SCEventCounterValueChange');
		$("#obj6044").trigger('SCEventCounterIncrease');
		if (obj6044_counterValue == obj6044_counterTargetValue)
			$("#obj6044").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3();
} }, 1);
}





};
obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5961").trigger("obj5961_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj5963_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5963_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_onTouchDown_ended");
		
		return;
	}
	window.obj5963_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5963");
//	action: dragDrop
//	target: obj5963 
dragDrop_6012();
function dragDrop_6012() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5963_onTouchDown_runningActionsCount = obj5963_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5963');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj5963_onTouchDown_runningActionsCount = window.obj5963_onTouchDown_runningActionsCount - 1;
if (window.obj5963_onTouchDown_runningActionsCount == 0) {
	obj5963_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5942");
    	var actionsOnDrop = new Array("SCActionDragDrop5992_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6012 = false;
    	var dropped_id_6012;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_6012 = true;
					dropped_id_6012 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6012) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5963").trigger('SCActionDragDrop6012_droppedOutsideTargetActions');
$("#obj5963").trigger('SCActionDragDrop6012_droppedOutsideTargetActions');
		}
    });
}











};
obj5963_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5963_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_onTouchDown_ended");
		
		return;
	}
	window.obj5963_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5963 
rotate_6035();
function rotate_6035() {
	window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount = obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5963";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5963';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6035_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6035_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6035_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6035_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6035_completed() {
	setTimeout(function() {
		window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount = window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5963 
rotate_6035();
function rotate_6035() {
	window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount = obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5963";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5963';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6035_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6035_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6035_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6035_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6035_completed() {
	setTimeout(function() {
		window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount = window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6014();
function runjs_6014() {
	window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5963"));
	setTimeout(function() {
		window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj5963 
playAnimation_6016();
function playAnimation_6016() {
	var targetObjectId = "#obj5963";
	var targetObject = $(targetObjectId)[0];
	window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5963 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5963;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5963.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5963").one("obj5963_animation_ended",function(event) {
		    window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }







//	action: scale
//	target: obj5963 
scale_6015();
function scale_6015() {
	window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5963";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5963';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '2';
	var scaleYValue = '2';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6015_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6015_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6015_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6015_completed() {
	setTimeout(function() {
		window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}












};
obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 2;
	
















//	action: increment counter
//	target: obj6044 
incrementCounter_6051();
function incrementCounter_6051() {
	window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6044_counterValue;
	obj6044_counterValue = obj6044_counterValue + 1;
	if (! obj6044_counterCanExceedTargetValue && obj6044_counterValue > obj6044_counterTargetValue) {
		obj6044_counterValue = obj6044_counterTargetValue;
	}
	if (oldValue != obj6044_counterValue) {
		$("#obj6044").trigger('SCEventCounterValueChange');
		$("#obj6044").trigger('SCEventCounterIncrease');
		if (obj6044_counterValue == obj6044_counterTargetValue)
			$("#obj6044").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3();
} }, 1);
}





};
obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5963").trigger("obj5963_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj5965_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5965_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_onTouchDown_ended");
		
		return;
	}
	window.obj5965_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5965");
//	action: dragDrop
//	target: obj5965 
dragDrop_6006();
function dragDrop_6006() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5965_onTouchDown_runningActionsCount = obj5965_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5965');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj5965_onTouchDown_runningActionsCount = window.obj5965_onTouchDown_runningActionsCount - 1;
if (window.obj5965_onTouchDown_runningActionsCount == 0) {
	obj5965_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5944");
    	var actionsOnDrop = new Array("SCActionDragDrop5992_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6006 = false;
    	var dropped_id_6006;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_6006 = true;
					dropped_id_6006 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6006) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5965").trigger('SCActionDragDrop6006_droppedOutsideTargetActions');
$("#obj5965").trigger('SCActionDragDrop6006_droppedOutsideTargetActions');
		}
    });
}











};
obj5965_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5965_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_onTouchDown_ended");
		
		return;
	}
	window.obj5965_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5965 
rotate_6033();
function rotate_6033() {
	window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount = obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5965";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5965';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6033_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6033_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6033_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6033_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6033_completed() {
	setTimeout(function() {
		window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount = window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5965 
rotate_6033();
function rotate_6033() {
	window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount = obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5965";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5965';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6033_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6033_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6033_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6033_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6033_completed() {
	setTimeout(function() {
		window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount = window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6008();
function runjs_6008() {
	window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5965"));
	setTimeout(function() {
		window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj5965 
playAnimation_6010();
function playAnimation_6010() {
	var targetObjectId = "#obj5965";
	var targetObject = $(targetObjectId)[0];
	window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5965 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5965;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5965.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5965").one("obj5965_animation_ended",function(event) {
		    window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }







//	action: scale
//	target: obj5965 
scale_6009();
function scale_6009() {
	window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5965";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5965';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '2';
	var scaleYValue = '2';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6009_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6009_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6009_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6009_completed() {
	setTimeout(function() {
		window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}












};
obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 2;
	
















//	action: increment counter
//	target: obj6044 
incrementCounter_6050();
function incrementCounter_6050() {
	window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6044_counterValue;
	obj6044_counterValue = obj6044_counterValue + 1;
	if (! obj6044_counterCanExceedTargetValue && obj6044_counterValue > obj6044_counterTargetValue) {
		obj6044_counterValue = obj6044_counterTargetValue;
	}
	if (oldValue != obj6044_counterValue) {
		$("#obj6044").trigger('SCEventCounterValueChange');
		$("#obj6044").trigger('SCEventCounterIncrease');
		if (obj6044_counterValue == obj6044_counterTargetValue)
			$("#obj6044").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3();
} }, 1);
}





};
obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5965").trigger("obj5965_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj5967_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5967_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_onTouchDown_ended");
		
		return;
	}
	window.obj5967_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5967");
//	action: dragDrop
//	target: obj5967 
dragDrop_6000();
function dragDrop_6000() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5967_onTouchDown_runningActionsCount = obj5967_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5967');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj5967_onTouchDown_runningActionsCount = window.obj5967_onTouchDown_runningActionsCount - 1;
if (window.obj5967_onTouchDown_runningActionsCount == 0) {
	obj5967_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5946");
    	var actionsOnDrop = new Array("SCActionDragDrop5992_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6000 = false;
    	var dropped_id_6000;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_6000 = true;
					dropped_id_6000 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6000) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5967").trigger('SCActionDragDrop6000_droppedOutsideTargetActions');
$("#obj5967").trigger('SCActionDragDrop6000_droppedOutsideTargetActions');
		}
    });
}











};
obj5967_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5967_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_onTouchDown_ended");
		
		return;
	}
	window.obj5967_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5967 
rotate_6031();
function rotate_6031() {
	window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount = obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5967";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5967';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6031_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6031_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6031_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6031_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6031_completed() {
	setTimeout(function() {
		window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount = window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5967 
rotate_6031();
function rotate_6031() {
	window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount = obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5967";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5967';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6031_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6031_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6031_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6031_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6031_completed() {
	setTimeout(function() {
		window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount = window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6002();
function runjs_6002() {
	window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5967"));
	setTimeout(function() {
		window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj5967 
playAnimation_6004();
function playAnimation_6004() {
	var targetObjectId = "#obj5967";
	var targetObject = $(targetObjectId)[0];
	window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5967 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5967;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5967.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5967").one("obj5967_animation_ended",function(event) {
		    window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }







//	action: scale
//	target: obj5967 
scale_6003();
function scale_6003() {
	window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5967";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5967';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '2';
	var scaleYValue = '2';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6003_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6003_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6003_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6003_completed() {
	setTimeout(function() {
		window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}












};
obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 2;
	
















//	action: increment counter
//	target: obj6044 
incrementCounter_6049();
function incrementCounter_6049() {
	window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6044_counterValue;
	obj6044_counterValue = obj6044_counterValue + 1;
	if (! obj6044_counterCanExceedTargetValue && obj6044_counterValue > obj6044_counterTargetValue) {
		obj6044_counterValue = obj6044_counterTargetValue;
	}
	if (oldValue != obj6044_counterValue) {
		$("#obj6044").trigger('SCEventCounterValueChange');
		$("#obj6044").trigger('SCEventCounterIncrease');
		if (obj6044_counterValue == obj6044_counterTargetValue)
			$("#obj6044").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3();
} }, 1);
}





};
obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5967").trigger("obj5967_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj5987_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5987_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_onTouchDown_ended");
		
		return;
	}
	window.obj5987_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5987");
//	action: dragDrop
//	target: obj5987 
dragDrop_5992();
function dragDrop_5992() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5987_onTouchDown_runningActionsCount = obj5987_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5987');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj5987_onTouchDown_runningActionsCount = window.obj5987_onTouchDown_runningActionsCount - 1;
if (window.obj5987_onTouchDown_runningActionsCount == 0) {
	obj5987_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5948");
    	var actionsOnDrop = new Array("SCActionDragDrop5992_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_5992 = false;
    	var dropped_id_5992;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_5992 = true;
					dropped_id_5992 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_5992) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5987").trigger('SCActionDragDrop5992_droppedOutsideTargetActions');
$("#obj5987").trigger('SCActionDragDrop5992_droppedOutsideTargetActions');
		}
    });
}











};
obj5987_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5987_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_onTouchDown_ended");
		
		return;
	}
	window.obj5987_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5987 
rotate_6029();
function rotate_6029() {
	window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount = obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5987";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5987';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6029_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6029_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6029_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6029_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6029_completed() {
	setTimeout(function() {
		window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount = window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj5987 
rotate_6029();
function rotate_6029() {
	window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount = obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5987";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5987';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_6029_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6029_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6029_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6029_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6029_completed() {
	setTimeout(function() {
		window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount = window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5994();
function runjs_5994() {
	window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5987"));
	setTimeout(function() {
		window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


//	action: playAnimation 
//	target: obj5987 
playAnimation_5995();
function playAnimation_5995() {
	var targetObjectId = "#obj5987";
	var targetObject = $(targetObjectId)[0];
	window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5987 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5987;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5987.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5987").one("obj5987_animation_ended",function(event) {
		    window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }







//	action: scale
//	target: obj5987 
scale_5997();
function scale_5997() {
	window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj5987";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5987';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '2';
	var scaleYValue = '2';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_5997_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_5997_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_5997_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_5997_completed() {
	setTimeout(function() {
		window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}












};
obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 2;
	
















//	action: increment counter
//	target: obj6044 
incrementCounter_6048();
function incrementCounter_6048() {
	window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6044_counterValue;
	obj6044_counterValue = obj6044_counterValue + 1;
	if (! obj6044_counterCanExceedTargetValue && obj6044_counterValue > obj6044_counterTargetValue) {
		obj6044_counterValue = obj6044_counterTargetValue;
	}
	if (oldValue != obj6044_counterValue) {
		$("#obj6044").trigger('SCEventCounterValueChange');
		$("#obj6044").trigger('SCEventCounterIncrease');
		if (obj6044_counterValue == obj6044_counterTargetValue)
			$("#obj6044").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3();
} }, 1);
}





};
obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5987").trigger("obj5987_SCActionDragDrop5992_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj6044_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6044_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6044").trigger("obj6044_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj6044_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_6046();
function wait_6046() {
	window.obj6044_SCEventCounterReachedTargetValue_runningActionsCount = obj6044_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6044_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6044_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj6044_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6044_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}












};
obj6044_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6044_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6044").trigger("obj6044_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj6044_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page58
goToPage_6047();
function goToPage_6047() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../58/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(58))},200);
	}
}





















};
obj6044_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6044_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6044").trigger("obj6044_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj6044_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj7599_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7599_onLoad_activeActionGroupIndex = -1;
		$("#obj7599").trigger("obj7599_onLoad_ended");
		
		return;
	}
	window.obj7599_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_7603();
function wait_7603() {
	window.obj7599_onLoad_runningActionsCount = obj7599_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7599_onLoad_runningActionsCount = window.obj7599_onLoad_runningActionsCount - 1;
if (window.obj7599_onLoad_runningActionsCount == 0) {
	obj7599_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj7599_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7599_onLoad_activeActionGroupIndex = -1;
		$("#obj7599").trigger("obj7599_onLoad_ended");
		
		return;
	}
	window.obj7599_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj7599 
hide_7604();
function hide_7604() {
	window.obj7599_onLoad_runningActionsCount = obj7599_onLoad_runningActionsCount + 1;
	$("#obj7599").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj7599_onLoad_runningActionsCount = window.obj7599_onLoad_runningActionsCount - 1;
if (window.obj7599_onLoad_runningActionsCount == 0) {
	obj7599_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj7599_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7599_onLoad_activeActionGroupIndex = -1;
		$("#obj7599").trigger("obj7599_onLoad_ended");
		
		return;
	}
	window.obj7599_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj7608 
show_7605();
function show_7605() {
	window.obj7599_onLoad_runningActionsCount = obj7599_onLoad_runningActionsCount + 1;
	$("#obj7608").fadeIn(0, function() {
			setTimeout(function() {
				window.obj7599_onLoad_runningActionsCount = window.obj7599_onLoad_runningActionsCount - 1;
if (window.obj7599_onLoad_runningActionsCount == 0) {
	obj7599_onLoad_actionGroup3();
}
				$("#obj7608").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj7599_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7599_onLoad_activeActionGroupIndex = -1;
		$("#obj7599").trigger("obj7599_onLoad_ended");
		
		return;
	}
	window.obj7599_onLoad_activeActionGroupIndex = 3;
	








//	action: wait
wait_7606();
function wait_7606() {
	window.obj7599_onLoad_runningActionsCount = obj7599_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7599_onLoad_runningActionsCount = window.obj7599_onLoad_runningActionsCount - 1;
if (window.obj7599_onLoad_runningActionsCount == 0) {
	obj7599_onLoad_actionGroup4();
}
	}, 1000);
}












};
obj7599_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7599_onLoad_activeActionGroupIndex = -1;
		$("#obj7599").trigger("obj7599_onLoad_ended");
		
		return;
	}
	window.obj7599_onLoad_activeActionGroupIndex = 4;
	

//	action: hide
//	target: obj7608 
hide_7607();
function hide_7607() {
	window.obj7599_onLoad_runningActionsCount = obj7599_onLoad_runningActionsCount + 1;
	$("#obj7608").fadeOut(0, function() {
			setTimeout(function() {
				window.obj7599_onLoad_runningActionsCount = window.obj7599_onLoad_runningActionsCount - 1;
if (window.obj7599_onLoad_runningActionsCount == 0) {
	obj7599_onLoad_actionGroup5();
}
			}, 1);
		}
	);
}




















};
obj7599_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7599_onLoad_activeActionGroupIndex = -1;
		$("#obj7599").trigger("obj7599_onLoad_ended");
		
		return;
	}
	window.obj7599_onLoad_activeActionGroupIndex = 5;
	





















};
obj15948_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15948_onLoad_activeActionGroupIndex = -1;
		$("#obj15948").trigger("obj15948_onLoad_ended");
		
		return;
	}
	window.obj15948_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_15951();
function wait_15951() {
	window.obj15948_onLoad_runningActionsCount = obj15948_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15948_onLoad_runningActionsCount = window.obj15948_onLoad_runningActionsCount - 1;
if (window.obj15948_onLoad_runningActionsCount == 0) {
	obj15948_onLoad_actionGroup1();
}
	}, 600000);
}












};
obj15948_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15948_onLoad_activeActionGroupIndex = -1;
		$("#obj15948").trigger("obj15948_onLoad_ended");
		
		return;
	}
	window.obj15948_onLoad_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page1
goToPage_15952();
function goToPage_15952() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
	}
}





















};
obj15948_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15948_onLoad_activeActionGroupIndex = -1;
		$("#obj15948").trigger("obj15948_onLoad_ended");
		
		return;
	}
	window.obj15948_onLoad_activeActionGroupIndex = 2;
	





















};
obj16105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16105_onTap_activeActionGroupIndex = -1;
		$("#obj16105").trigger("obj16105_onTap_ended");
		
		return;
	}
	window.obj16105_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj16105 
hide_16111();
function hide_16111() {
	window.obj16105_onTap_runningActionsCount = obj16105_onTap_runningActionsCount + 1;
	$("#obj16105").fadeOut(0, function() {
			setTimeout(function() {
				window.obj16105_onTap_runningActionsCount = window.obj16105_onTap_runningActionsCount - 1;
if (window.obj16105_onTap_runningActionsCount == 0) {
	obj16105_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj16107 
show_16112();
function show_16112() {
	window.obj16105_onTap_runningActionsCount = obj16105_onTap_runningActionsCount + 1;
	$("#obj16107").fadeIn(0, function() {
			setTimeout(function() {
				window.obj16105_onTap_runningActionsCount = window.obj16105_onTap_runningActionsCount - 1;
if (window.obj16105_onTap_runningActionsCount == 0) {
	obj16105_onTap_actionGroup1();
}
				$("#obj16107").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj16105_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16105_onTap_activeActionGroupIndex = -1;
		$("#obj16105").trigger("obj16105_onTap_ended");
		
		return;
	}
	window.obj16105_onTap_activeActionGroupIndex = 1;
	





















};
obj16107_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onTap_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onTap_ended");
		
		return;
	}
	window.obj16107_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page1
goToPage_16109();
function goToPage_16109() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
	}
}





















};
obj16107_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onTap_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onTap_ended");
		
		return;
	}
	window.obj16107_onTap_activeActionGroupIndex = 1;
	





















};
obj16107_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16107_onTap_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onTap_ended");
		
		return;
	}
	window.obj16107_onTap_activeActionGroupIndex = 2;
	





















};
obj16107_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onShow_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onShow_ended");
		
		return;
	}
	window.obj16107_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_16136();
function wait_16136() {
	window.obj16107_onShow_runningActionsCount = obj16107_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj16107_onShow_runningActionsCount = window.obj16107_onShow_runningActionsCount - 1;
if (window.obj16107_onShow_runningActionsCount == 0) {
	obj16107_onShow_actionGroup1();
}
	}, 3000);
}












};
obj16107_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onShow_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onShow_ended");
		
		return;
	}
	window.obj16107_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj16107 
hide_16137();
function hide_16137() {
	window.obj16107_onShow_runningActionsCount = obj16107_onShow_runningActionsCount + 1;
	$("#obj16107").fadeOut(0, function() {
			setTimeout(function() {
				window.obj16107_onShow_runningActionsCount = window.obj16107_onShow_runningActionsCount - 1;
if (window.obj16107_onShow_runningActionsCount == 0) {
	obj16107_onShow_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj16105 
show_16138();
function show_16138() {
	window.obj16107_onShow_runningActionsCount = obj16107_onShow_runningActionsCount + 1;
	$("#obj16105").fadeIn(0, function() {
			setTimeout(function() {
				window.obj16107_onShow_runningActionsCount = window.obj16107_onShow_runningActionsCount - 1;
if (window.obj16107_onShow_runningActionsCount == 0) {
	obj16107_onShow_actionGroup2();
}
				$("#obj16105").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj16107_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16107_onShow_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onShow_ended");
		
		return;
	}
	window.obj16107_onShow_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




















































































































/*
 *
 *   obj5961: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5961");
	var winTarget = document.getElementById("obj5961");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5961").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5961_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5961_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5961_onTouchDown_activeActionGroupIndex != -1) return;
var obj5961_onTouchDown_runningActionsCount = 0;
var obj5961_onTouchDown_loopCount = 0;
obj5961_onTouchDown_actionGroup0();
});


/*
 *
 *   obj5961: Event SCActionDragDrop6018_droppedOutsideTargetActions
 *
 */
$("#obj5961").bind("SCActionDragDrop6018_droppedOutsideTargetActions", function(event) {
	if (window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_loopCount = 0;
obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5961: Event SCActionDragDrop6018_droppedOutsideTargetActions
 *
 */
$("#obj5961").bind("SCActionDragDrop6018_droppedOutsideTargetActions", function(event) {
	if (window.obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_loopCount = 0;
obj5961_SCActionDragDrop6018_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5961: Event SCActionDragDrop5992_droppedInsideTargetActions
 *
 */
$("#obj5961").bind("SCActionDragDrop5992_droppedInsideTargetActions", function(event) {
	if (window.obj5961_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj5961_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5961_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
obj5961_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj5963: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5963");
	var winTarget = document.getElementById("obj5963");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5963").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5963_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5963_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5963_onTouchDown_activeActionGroupIndex != -1) return;
var obj5963_onTouchDown_runningActionsCount = 0;
var obj5963_onTouchDown_loopCount = 0;
obj5963_onTouchDown_actionGroup0();
});


/*
 *
 *   obj5963: Event SCActionDragDrop6012_droppedOutsideTargetActions
 *
 */
$("#obj5963").bind("SCActionDragDrop6012_droppedOutsideTargetActions", function(event) {
	if (window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_loopCount = 0;
obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5963: Event SCActionDragDrop6012_droppedOutsideTargetActions
 *
 */
$("#obj5963").bind("SCActionDragDrop6012_droppedOutsideTargetActions", function(event) {
	if (window.obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_loopCount = 0;
obj5963_SCActionDragDrop6012_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5963: Event SCActionDragDrop5992_droppedInsideTargetActions
 *
 */
$("#obj5963").bind("SCActionDragDrop5992_droppedInsideTargetActions", function(event) {
	if (window.obj5963_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj5963_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5963_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
obj5963_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj5965: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5965");
	var winTarget = document.getElementById("obj5965");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5965").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5965_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5965_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5965_onTouchDown_activeActionGroupIndex != -1) return;
var obj5965_onTouchDown_runningActionsCount = 0;
var obj5965_onTouchDown_loopCount = 0;
obj5965_onTouchDown_actionGroup0();
});


/*
 *
 *   obj5965: Event SCActionDragDrop6006_droppedOutsideTargetActions
 *
 */
$("#obj5965").bind("SCActionDragDrop6006_droppedOutsideTargetActions", function(event) {
	if (window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_loopCount = 0;
obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5965: Event SCActionDragDrop6006_droppedOutsideTargetActions
 *
 */
$("#obj5965").bind("SCActionDragDrop6006_droppedOutsideTargetActions", function(event) {
	if (window.obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_loopCount = 0;
obj5965_SCActionDragDrop6006_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5965: Event SCActionDragDrop5992_droppedInsideTargetActions
 *
 */
$("#obj5965").bind("SCActionDragDrop5992_droppedInsideTargetActions", function(event) {
	if (window.obj5965_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj5965_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5965_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
obj5965_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj5967: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5967");
	var winTarget = document.getElementById("obj5967");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5967").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5967_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5967_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5967_onTouchDown_activeActionGroupIndex != -1) return;
var obj5967_onTouchDown_runningActionsCount = 0;
var obj5967_onTouchDown_loopCount = 0;
obj5967_onTouchDown_actionGroup0();
});


/*
 *
 *   obj5967: Event SCActionDragDrop6000_droppedOutsideTargetActions
 *
 */
$("#obj5967").bind("SCActionDragDrop6000_droppedOutsideTargetActions", function(event) {
	if (window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_loopCount = 0;
obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5967: Event SCActionDragDrop6000_droppedOutsideTargetActions
 *
 */
$("#obj5967").bind("SCActionDragDrop6000_droppedOutsideTargetActions", function(event) {
	if (window.obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_loopCount = 0;
obj5967_SCActionDragDrop6000_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5967: Event SCActionDragDrop5992_droppedInsideTargetActions
 *
 */
$("#obj5967").bind("SCActionDragDrop5992_droppedInsideTargetActions", function(event) {
	if (window.obj5967_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj5967_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5967_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
obj5967_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj5987: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5987");
	var winTarget = document.getElementById("obj5987");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5987").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5987_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5987_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5987_onTouchDown_activeActionGroupIndex != -1) return;
var obj5987_onTouchDown_runningActionsCount = 0;
var obj5987_onTouchDown_loopCount = 0;
obj5987_onTouchDown_actionGroup0();
});


/*
 *
 *   obj5987: Event SCActionDragDrop5992_droppedOutsideTargetActions
 *
 */
$("#obj5987").bind("SCActionDragDrop5992_droppedOutsideTargetActions", function(event) {
	if (window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_loopCount = 0;
obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5987: Event SCActionDragDrop5992_droppedOutsideTargetActions
 *
 */
$("#obj5987").bind("SCActionDragDrop5992_droppedOutsideTargetActions", function(event) {
	if (window.obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_loopCount = 0;
obj5987_SCActionDragDrop5992_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5987: Event SCActionDragDrop5992_droppedInsideTargetActions
 *
 */
$("#obj5987").bind("SCActionDragDrop5992_droppedInsideTargetActions", function(event) {
	if (window.obj5987_SCActionDragDrop5992_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj5987_SCActionDragDrop5992_droppedInsideTargetActions_runningActionsCount = 0;
var obj5987_SCActionDragDrop5992_droppedInsideTargetActions_loopCount = 0;
obj5987_SCActionDragDrop5992_droppedInsideTargetActions_actionGroup0();
});







/*
 *
 *   obj6044: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj6044").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6044_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj6044_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6044_SCEventCounterReachedTargetValue_loopCount = 0;
obj6044_SCEventCounterReachedTargetValue_actionGroup0();
});












/*
 *
 *   obj7599: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj7599_onLoad_activeActionGroupIndex != -1) return;
var obj7599_onLoad_runningActionsCount = 0;
var obj7599_onLoad_loopCount = 0;
obj7599_onLoad_actionGroup0();
});







/*
 *
 *   obj15948: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj15948_onLoad_activeActionGroupIndex != -1) return;
var obj15948_onLoad_runningActionsCount = 0;
var obj15948_onLoad_loopCount = 0;
obj15948_onLoad_actionGroup0();
});





/*
 *
 *   obj16105: Event Touch Down
 *
 */
 
$("#obj16105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16105_onTap_activeActionGroupIndex != -1) return;
var obj16105_onTap_runningActionsCount = 0;
var obj16105_onTap_loopCount = 0;
obj16105_onTap_actionGroup0();
});







/*
 *
 *   obj16107: Event Touch Down
 *
 */
 
$("#obj16107").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16107_onTap_activeActionGroupIndex != -1) return;
var obj16107_onTap_runningActionsCount = 0;
var obj16107_onTap_loopCount = 0;
obj16107_onTap_actionGroup0();
});

/*
 *
 *   obj16107: Event Show
 *
 */
 
$("#obj16107").bind('SCEventShow', function(event) {
	if (window.obj16107_onShow_activeActionGroupIndex != -1) return;
var obj16107_onShow_runningActionsCount = 0;
var obj16107_onShow_loopCount = 0;
obj16107_onShow_actionGroup0();
});


		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		if (askAudioPermission) {
	$("#SCAudioPermissionAllowButton").click(function () {
		$( "audio" ).each(function( index ) {
			this.play();
			this.pause();
		});
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	$("#SCAudioPermissionCancelButton").click(function () {
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	var remodalInst = $('[data-remodal-id=SCAudioPermissionAlert]').remodal().open();
} else {
	setTimeout(function() {
		$(window).trigger(PubCoder.Events.PagePlay);
	}, 200);
}
	 }
});
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
$(window).on(PubCoder.Events.PagePlay, function() {
	
$("#obj5640").trigger('SCEventShow');
$("#obj5686").trigger('SCEventShow');
$("#obj5684").trigger('SCEventShow');
$("#obj5682").trigger('SCEventShow');
$("#obj5680").trigger('SCEventShow');
$("#obj5678").trigger('SCEventShow');
$("#obj5652").trigger('SCEventShow');
$("#obj5655").trigger('SCEventShow');
$("#obj5650").trigger('SCEventShow');
$("#obj5649").trigger('SCEventShow');
$("#obj5653").trigger('SCEventShow');
$("#obj5948").trigger('SCEventShow');
$("#obj5946").trigger('SCEventShow');
$("#obj5944").trigger('SCEventShow');
$("#obj5942").trigger('SCEventShow');
$("#obj5940").trigger('SCEventShow');
$("#obj5961").trigger('SCEventShow');
$("#obj5963").trigger('SCEventShow');
$("#obj5965").trigger('SCEventShow');
$("#obj5967").trigger('SCEventShow');
$("#obj5987").trigger('SCEventShow');
$("#obj7608").trigger('SCEventShow');
$("#obj7599").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});