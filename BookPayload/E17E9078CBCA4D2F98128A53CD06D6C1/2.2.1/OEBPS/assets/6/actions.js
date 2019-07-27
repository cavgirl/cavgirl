pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 9335;
pubcoder.page.title = "6";
pubcoder.page.number = 6;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj9340_animation_count = 0;
var obj9348_animation_count = 0;
var obj9356_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj9370_onDrag_activeActionGroupIndex = -1;
var obj9370_onDrag_runningActionsCount = 0;
var obj9370_onDrag_loopCount = 0;
var obj9370_onTouchDown_activeActionGroupIndex = -1;
var obj9370_onTouchDown_runningActionsCount = 0;
var obj9370_onTouchDown_loopCount = 0;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9370_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
var obj9384_onDrag_activeActionGroupIndex = -1;
var obj9384_onDrag_runningActionsCount = 0;
var obj9384_onDrag_loopCount = 0;
var obj9384_onTouchDown_activeActionGroupIndex = -1;
var obj9384_onTouchDown_runningActionsCount = 0;
var obj9384_onTouchDown_loopCount = 0;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9384_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
var obj9398_onDrag_activeActionGroupIndex = -1;
var obj9398_onDrag_runningActionsCount = 0;
var obj9398_onDrag_loopCount = 0;
var obj9398_onTouchDown_activeActionGroupIndex = -1;
var obj9398_onTouchDown_runningActionsCount = 0;
var obj9398_onTouchDown_loopCount = 0;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9398_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
var obj9412_onDrag_activeActionGroupIndex = -1;
var obj9412_onDrag_runningActionsCount = 0;
var obj9412_onDrag_loopCount = 0;
var obj9412_onTouchDown_activeActionGroupIndex = -1;
var obj9412_onTouchDown_runningActionsCount = 0;
var obj9412_onTouchDown_loopCount = 0;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9412_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
var obj9426_onDrag_activeActionGroupIndex = -1;
var obj9426_onDrag_runningActionsCount = 0;
var obj9426_onDrag_loopCount = 0;
var obj9426_onTouchDown_activeActionGroupIndex = -1;
var obj9426_onTouchDown_runningActionsCount = 0;
var obj9426_onTouchDown_loopCount = 0;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9426_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
var obj9440_onDrag_activeActionGroupIndex = -1;
var obj9440_onDrag_runningActionsCount = 0;
var obj9440_onDrag_loopCount = 0;
var obj9440_onTouchDown_activeActionGroupIndex = -1;
var obj9440_onTouchDown_runningActionsCount = 0;
var obj9440_onTouchDown_loopCount = 0;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9440_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
var obj9454_onDrag_activeActionGroupIndex = -1;
var obj9454_onDrag_runningActionsCount = 0;
var obj9454_onDrag_loopCount = 0;
var obj9454_onTouchDown_activeActionGroupIndex = -1;
var obj9454_onTouchDown_runningActionsCount = 0;
var obj9454_onTouchDown_loopCount = 0;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9454_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
var obj9469_onDrag_activeActionGroupIndex = -1;
var obj9469_onDrag_runningActionsCount = 0;
var obj9469_onDrag_loopCount = 0;
var obj9469_onTouchDown_activeActionGroupIndex = -1;
var obj9469_onTouchDown_runningActionsCount = 0;
var obj9469_onTouchDown_loopCount = 0;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9469_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
var obj9483_onDrag_activeActionGroupIndex = -1;
var obj9483_onDrag_runningActionsCount = 0;
var obj9483_onDrag_loopCount = 0;
var obj9483_onTouchDown_activeActionGroupIndex = -1;
var obj9483_onTouchDown_runningActionsCount = 0;
var obj9483_onTouchDown_loopCount = 0;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
var obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9483_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
var obj9501_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj9501_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj9501_SCEventCounterReachedTargetValue_loopCount = 0;
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
 
var obj9501_counterValue = 0;
var obj9501_counterTargetValue = 9;
var obj9501_counterCanExceedTargetValue = false;
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
	
initAnimation_9340();
function initAnimation_9340()
{
        var targetObjectId = "#obj9340";
        var widthSCAnimationObject = 233;
        var heightSCAnimationObject = 280;
		var framesPerSecond = 4;
		var howManyLoops = 3;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj9340 = $("#")[0];
        window.hasAudioTrack_obj9340 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj9340_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj9340 = $(targetObjectId).spritespin("api");
}
initAnimation_9348();
function initAnimation_9348()
{
        var targetObjectId = "#obj9348";
        var widthSCAnimationObject = 233;
        var heightSCAnimationObject = 280;
		var framesPerSecond = 4;
		var howManyLoops = 3;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj9348 = $("#")[0];
        window.hasAudioTrack_obj9348 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj9348_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj9348 = $(targetObjectId).spritespin("api");
}
initAnimation_9356();
function initAnimation_9356()
{
        var targetObjectId = "#obj9356";
        var widthSCAnimationObject = 233;
        var heightSCAnimationObject = 280;
		var framesPerSecond = 4;
		var howManyLoops = 3;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj9356 = $("#")[0];
        window.hasAudioTrack_obj9356 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj9356_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj9356 = $(targetObjectId).spritespin("api");
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
		
obj9370_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_onTouchDown_ended");
		
		return;
	}
	window.obj9370_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9370");
//	action: dragDrop
//	target: obj9370 
dragDrop_9623();
function dragDrop_9623() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9370_onTouchDown_runningActionsCount = obj9370_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9370');
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
    	window.obj9370_onTouchDown_runningActionsCount = window.obj9370_onTouchDown_runningActionsCount - 1;
if (window.obj9370_onTouchDown_runningActionsCount == 0) {
	obj9370_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj9505");
    	var actionsOnDrop = new Array("SCActionDragDrop4883_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9623 = false;
    	var dropped_id_9623;
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
					dropped_9623 = true;
					dropped_id_9623 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9623) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9370").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
$("#obj9370").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
		}
    });
}











};
obj9370_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_onTouchDown_ended");
		
		return;
	}
	window.obj9370_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9370 
rotate_9631();
function rotate_9631() {
	window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9370";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9370';
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
	if (isInfinite) { rotate_9631_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9631_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9631_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9631_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9631_completed() {
	setTimeout(function() {
		window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9632();
function runjs_9632() {
	window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9370"));
	setTimeout(function() {
		window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9370 
rotate_9631();
function rotate_9631() {
	window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9370";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9370';
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
	if (isInfinite) { rotate_9631_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9631_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9631_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9631_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9631_completed() {
	setTimeout(function() {
		window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9632();
function runjs_9632() {
	window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9370"));
	setTimeout(function() {
		window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9625();
function runjs_9625() {
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9370"));
	setTimeout(function() {
		window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9370 
hide_9626();
function hide_9626() {
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj9370").fadeOut(500, function() {
			setTimeout(function() {
				window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: playAnimation 
//	target: obj9348 
playAnimation_9627();
function playAnimation_9627() {
	var targetObjectId = "#obj9348";
	var targetObject = $(targetObjectId)[0];
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj9348 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj9348;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj9348.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj9348").one("obj9348_animation_ended",function(event) {
		    window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }


















};
obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 2;
	








//	action: wait
wait_9628();
function wait_9628() {
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3();
}
	}, 500);
}












};
obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj9501 
incrementCounter_9629();
function incrementCounter_9629() {
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj9501_counterValue;
	obj9501_counterValue = obj9501_counterValue + 1;
	if (! obj9501_counterCanExceedTargetValue && obj9501_counterValue > obj9501_counterTargetValue) {
		obj9501_counterValue = obj9501_counterTargetValue;
	}
	if (oldValue != obj9501_counterValue) {
		$("#obj9501").trigger('SCEventCounterValueChange');
		$("#obj9501").trigger('SCEventCounterIncrease');
		if (obj9501_counterValue == obj9501_counterTargetValue)
			$("#obj9501").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9370").trigger("obj9370_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj9384_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9384_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_onTouchDown_ended");
		
		return;
	}
	window.obj9384_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9384");
//	action: dragDrop
//	target: obj9384 
dragDrop_9594();
function dragDrop_9594() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9384_onTouchDown_runningActionsCount = obj9384_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9384');
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
    	window.obj9384_onTouchDown_runningActionsCount = window.obj9384_onTouchDown_runningActionsCount - 1;
if (window.obj9384_onTouchDown_runningActionsCount == 0) {
	obj9384_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj9497");
    	var actionsOnDrop = new Array("SCActionDragDrop4883_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9594 = false;
    	var dropped_id_9594;
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
					dropped_9594 = true;
					dropped_id_9594 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9594) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9384").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
$("#obj9384").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
		}
    });
}











};
obj9384_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9384_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_onTouchDown_ended");
		
		return;
	}
	window.obj9384_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9384 
rotate_9602();
function rotate_9602() {
	window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9384";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9384';
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
	if (isInfinite) { rotate_9602_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9602_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9602_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9602_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9602_completed() {
	setTimeout(function() {
		window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9603();
function runjs_9603() {
	window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9384"));
	setTimeout(function() {
		window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9384 
rotate_9602();
function rotate_9602() {
	window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9384";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9384';
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
	if (isInfinite) { rotate_9602_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9602_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9602_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9602_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9602_completed() {
	setTimeout(function() {
		window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9603();
function runjs_9603() {
	window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9384"));
	setTimeout(function() {
		window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9596();
function runjs_9596() {
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9384"));
	setTimeout(function() {
		window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9384 
hide_9597();
function hide_9597() {
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj9384").fadeOut(500, function() {
			setTimeout(function() {
				window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: playAnimation 
//	target: obj9340 
playAnimation_9598();
function playAnimation_9598() {
	var targetObjectId = "#obj9340";
	var targetObject = $(targetObjectId)[0];
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj9340 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj9340;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj9340.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj9340").one("obj9340_animation_ended",function(event) {
		    window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }


















};
obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 2;
	








//	action: wait
wait_9599();
function wait_9599() {
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3();
}
	}, 500);
}












};
obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj9501 
incrementCounter_9600();
function incrementCounter_9600() {
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj9501_counterValue;
	obj9501_counterValue = obj9501_counterValue + 1;
	if (! obj9501_counterCanExceedTargetValue && obj9501_counterValue > obj9501_counterTargetValue) {
		obj9501_counterValue = obj9501_counterTargetValue;
	}
	if (oldValue != obj9501_counterValue) {
		$("#obj9501").trigger('SCEventCounterValueChange');
		$("#obj9501").trigger('SCEventCounterIncrease');
		if (obj9501_counterValue == obj9501_counterTargetValue)
			$("#obj9501").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9384").trigger("obj9384_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj9398_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_onTouchDown_ended");
		
		return;
	}
	window.obj9398_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9398");
//	action: dragDrop
//	target: obj9398 
dragDrop_9555();
function dragDrop_9555() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9398_onTouchDown_runningActionsCount = obj9398_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9398');
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
    	window.obj9398_onTouchDown_runningActionsCount = window.obj9398_onTouchDown_runningActionsCount - 1;
if (window.obj9398_onTouchDown_runningActionsCount == 0) {
	obj9398_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj9499");
    	var actionsOnDrop = new Array("SCActionDragDrop4883_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9555 = false;
    	var dropped_id_9555;
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
					dropped_9555 = true;
					dropped_id_9555 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9555) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9398").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
$("#obj9398").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
		}
    });
}











};
obj9398_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9398_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_onTouchDown_ended");
		
		return;
	}
	window.obj9398_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9398 
rotate_9563();
function rotate_9563() {
	window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9398";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9398';
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
	if (isInfinite) { rotate_9563_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9563_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9563_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9563_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9563_completed() {
	setTimeout(function() {
		window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9564();
function runjs_9564() {
	window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9398"));
	setTimeout(function() {
		window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9398 
rotate_9563();
function rotate_9563() {
	window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9398";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9398';
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
	if (isInfinite) { rotate_9563_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9563_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9563_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9563_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9563_completed() {
	setTimeout(function() {
		window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9564();
function runjs_9564() {
	window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9398"));
	setTimeout(function() {
		window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9557();
function runjs_9557() {
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9398"));
	setTimeout(function() {
		window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9398 
hide_9558();
function hide_9558() {
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj9398").fadeOut(500, function() {
			setTimeout(function() {
				window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: playAnimation 
//	target: obj9356 
playAnimation_9559();
function playAnimation_9559() {
	var targetObjectId = "#obj9356";
	var targetObject = $(targetObjectId)[0];
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj9356 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj9356;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj9356.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj9356").one("obj9356_animation_ended",function(event) {
		    window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }


















};
obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 2;
	








//	action: wait
wait_9560();
function wait_9560() {
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3();
}
	}, 500);
}












};
obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj9501 
incrementCounter_9561();
function incrementCounter_9561() {
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj9501_counterValue;
	obj9501_counterValue = obj9501_counterValue + 1;
	if (! obj9501_counterCanExceedTargetValue && obj9501_counterValue > obj9501_counterTargetValue) {
		obj9501_counterValue = obj9501_counterTargetValue;
	}
	if (oldValue != obj9501_counterValue) {
		$("#obj9501").trigger('SCEventCounterValueChange');
		$("#obj9501").trigger('SCEventCounterIncrease');
		if (obj9501_counterValue == obj9501_counterTargetValue)
			$("#obj9501").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9398").trigger("obj9398_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj9412_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_onTouchDown_ended");
		
		return;
	}
	window.obj9412_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9412");
//	action: dragDrop
//	target: obj9412 
dragDrop_9584();
function dragDrop_9584() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9412_onTouchDown_runningActionsCount = obj9412_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9412');
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
    	window.obj9412_onTouchDown_runningActionsCount = window.obj9412_onTouchDown_runningActionsCount - 1;
if (window.obj9412_onTouchDown_runningActionsCount == 0) {
	obj9412_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj9497");
    	var actionsOnDrop = new Array("SCActionDragDrop4883_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9584 = false;
    	var dropped_id_9584;
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
					dropped_9584 = true;
					dropped_id_9584 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9584) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9412").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
$("#obj9412").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
		}
    });
}











};
obj9412_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9412_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_onTouchDown_ended");
		
		return;
	}
	window.obj9412_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9412 
rotate_9592();
function rotate_9592() {
	window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9412";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9412';
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
	if (isInfinite) { rotate_9592_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9592_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9592_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9592_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9592_completed() {
	setTimeout(function() {
		window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9593();
function runjs_9593() {
	window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9412"));
	setTimeout(function() {
		window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9412 
rotate_9592();
function rotate_9592() {
	window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9412";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9412';
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
	if (isInfinite) { rotate_9592_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9592_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9592_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9592_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9592_completed() {
	setTimeout(function() {
		window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9593();
function runjs_9593() {
	window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9412"));
	setTimeout(function() {
		window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9586();
function runjs_9586() {
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9412"));
	setTimeout(function() {
		window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9412 
hide_9587();
function hide_9587() {
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj9412").fadeOut(500, function() {
			setTimeout(function() {
				window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: playAnimation 
//	target: obj9340 
playAnimation_9588();
function playAnimation_9588() {
	var targetObjectId = "#obj9340";
	var targetObject = $(targetObjectId)[0];
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj9340 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj9340;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj9340.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj9340").one("obj9340_animation_ended",function(event) {
		    window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }


















};
obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 2;
	








//	action: wait
wait_9589();
function wait_9589() {
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3();
}
	}, 500);
}












};
obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj9501 
incrementCounter_9590();
function incrementCounter_9590() {
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj9501_counterValue;
	obj9501_counterValue = obj9501_counterValue + 1;
	if (! obj9501_counterCanExceedTargetValue && obj9501_counterValue > obj9501_counterTargetValue) {
		obj9501_counterValue = obj9501_counterTargetValue;
	}
	if (oldValue != obj9501_counterValue) {
		$("#obj9501").trigger('SCEventCounterValueChange');
		$("#obj9501").trigger('SCEventCounterIncrease');
		if (obj9501_counterValue == obj9501_counterTargetValue)
			$("#obj9501").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9412").trigger("obj9412_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj9426_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9426_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_onTouchDown_ended");
		
		return;
	}
	window.obj9426_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9426");
//	action: dragDrop
//	target: obj9426 
dragDrop_9545();
function dragDrop_9545() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9426_onTouchDown_runningActionsCount = obj9426_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9426');
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
    	window.obj9426_onTouchDown_runningActionsCount = window.obj9426_onTouchDown_runningActionsCount - 1;
if (window.obj9426_onTouchDown_runningActionsCount == 0) {
	obj9426_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj9499");
    	var actionsOnDrop = new Array("SCActionDragDrop4883_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9545 = false;
    	var dropped_id_9545;
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
					dropped_9545 = true;
					dropped_id_9545 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9545) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9426").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
$("#obj9426").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
		}
    });
}











};
obj9426_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9426_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_onTouchDown_ended");
		
		return;
	}
	window.obj9426_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9426 
rotate_9553();
function rotate_9553() {
	window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9426";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9426';
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
	if (isInfinite) { rotate_9553_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9553_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9553_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9553_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9553_completed() {
	setTimeout(function() {
		window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9554();
function runjs_9554() {
	window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9426"));
	setTimeout(function() {
		window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9426 
rotate_9553();
function rotate_9553() {
	window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9426";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9426';
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
	if (isInfinite) { rotate_9553_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9553_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9553_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9553_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9553_completed() {
	setTimeout(function() {
		window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9554();
function runjs_9554() {
	window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9426"));
	setTimeout(function() {
		window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9547();
function runjs_9547() {
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9426"));
	setTimeout(function() {
		window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9426 
hide_9548();
function hide_9548() {
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj9426").fadeOut(500, function() {
			setTimeout(function() {
				window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: playAnimation 
//	target: obj9356 
playAnimation_9549();
function playAnimation_9549() {
	var targetObjectId = "#obj9356";
	var targetObject = $(targetObjectId)[0];
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj9356 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj9356;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj9356.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj9356").one("obj9356_animation_ended",function(event) {
		    window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }


















};
obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 2;
	








//	action: wait
wait_9550();
function wait_9550() {
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3();
}
	}, 500);
}












};
obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj9501 
incrementCounter_9551();
function incrementCounter_9551() {
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj9501_counterValue;
	obj9501_counterValue = obj9501_counterValue + 1;
	if (! obj9501_counterCanExceedTargetValue && obj9501_counterValue > obj9501_counterTargetValue) {
		obj9501_counterValue = obj9501_counterTargetValue;
	}
	if (oldValue != obj9501_counterValue) {
		$("#obj9501").trigger('SCEventCounterValueChange');
		$("#obj9501").trigger('SCEventCounterIncrease');
		if (obj9501_counterValue == obj9501_counterTargetValue)
			$("#obj9501").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9426").trigger("obj9426_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj9440_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9440_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_onTouchDown_ended");
		
		return;
	}
	window.obj9440_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9440");
//	action: dragDrop
//	target: obj9440 
dragDrop_9613();
function dragDrop_9613() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9440_onTouchDown_runningActionsCount = obj9440_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9440');
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
    	window.obj9440_onTouchDown_runningActionsCount = window.obj9440_onTouchDown_runningActionsCount - 1;
if (window.obj9440_onTouchDown_runningActionsCount == 0) {
	obj9440_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj9505");
    	var actionsOnDrop = new Array("SCActionDragDrop4883_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9613 = false;
    	var dropped_id_9613;
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
					dropped_9613 = true;
					dropped_id_9613 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9613) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9440").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
$("#obj9440").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
		}
    });
}











};
obj9440_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9440_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_onTouchDown_ended");
		
		return;
	}
	window.obj9440_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9440 
rotate_9621();
function rotate_9621() {
	window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9440";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9440';
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
	if (isInfinite) { rotate_9621_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9621_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9621_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9621_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9621_completed() {
	setTimeout(function() {
		window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9622();
function runjs_9622() {
	window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9440"));
	setTimeout(function() {
		window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9440 
rotate_9621();
function rotate_9621() {
	window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9440";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9440';
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
	if (isInfinite) { rotate_9621_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9621_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9621_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9621_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9621_completed() {
	setTimeout(function() {
		window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9622();
function runjs_9622() {
	window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9440"));
	setTimeout(function() {
		window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9615();
function runjs_9615() {
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9440"));
	setTimeout(function() {
		window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9440 
hide_9616();
function hide_9616() {
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj9440").fadeOut(500, function() {
			setTimeout(function() {
				window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: playAnimation 
//	target: obj9348 
playAnimation_9617();
function playAnimation_9617() {
	var targetObjectId = "#obj9348";
	var targetObject = $(targetObjectId)[0];
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj9348 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj9348;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj9348.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj9348").one("obj9348_animation_ended",function(event) {
		    window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }


















};
obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 2;
	








//	action: wait
wait_9618();
function wait_9618() {
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3();
}
	}, 500);
}












};
obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj9501 
incrementCounter_9619();
function incrementCounter_9619() {
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj9501_counterValue;
	obj9501_counterValue = obj9501_counterValue + 1;
	if (! obj9501_counterCanExceedTargetValue && obj9501_counterValue > obj9501_counterTargetValue) {
		obj9501_counterValue = obj9501_counterTargetValue;
	}
	if (oldValue != obj9501_counterValue) {
		$("#obj9501").trigger('SCEventCounterValueChange');
		$("#obj9501").trigger('SCEventCounterIncrease');
		if (obj9501_counterValue == obj9501_counterTargetValue)
			$("#obj9501").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9440").trigger("obj9440_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj9454_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9454_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_onTouchDown_ended");
		
		return;
	}
	window.obj9454_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9454");
//	action: dragDrop
//	target: obj9454 
dragDrop_9535();
function dragDrop_9535() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9454_onTouchDown_runningActionsCount = obj9454_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9454');
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
    	window.obj9454_onTouchDown_runningActionsCount = window.obj9454_onTouchDown_runningActionsCount - 1;
if (window.obj9454_onTouchDown_runningActionsCount == 0) {
	obj9454_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj9499");
    	var actionsOnDrop = new Array("SCActionDragDrop4883_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9535 = false;
    	var dropped_id_9535;
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
					dropped_9535 = true;
					dropped_id_9535 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9535) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9454").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
$("#obj9454").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
		}
    });
}











};
obj9454_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9454_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_onTouchDown_ended");
		
		return;
	}
	window.obj9454_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9454 
rotate_9543();
function rotate_9543() {
	window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9454";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9454';
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
	if (isInfinite) { rotate_9543_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9543_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9543_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9543_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9543_completed() {
	setTimeout(function() {
		window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9544();
function runjs_9544() {
	window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9454"));
	setTimeout(function() {
		window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9454 
rotate_9543();
function rotate_9543() {
	window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9454";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9454';
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
	if (isInfinite) { rotate_9543_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9543_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9543_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9543_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9543_completed() {
	setTimeout(function() {
		window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9544();
function runjs_9544() {
	window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9454"));
	setTimeout(function() {
		window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9537();
function runjs_9537() {
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9454"));
	setTimeout(function() {
		window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9454 
hide_9538();
function hide_9538() {
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj9454").fadeOut(500, function() {
			setTimeout(function() {
				window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: playAnimation 
//	target: obj9356 
playAnimation_9539();
function playAnimation_9539() {
	var targetObjectId = "#obj9356";
	var targetObject = $(targetObjectId)[0];
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj9356 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj9356;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj9356.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj9356").one("obj9356_animation_ended",function(event) {
		    window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }


















};
obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 2;
	








//	action: wait
wait_9540();
function wait_9540() {
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3();
}
	}, 500);
}












};
obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj9501 
incrementCounter_9541();
function incrementCounter_9541() {
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj9501_counterValue;
	obj9501_counterValue = obj9501_counterValue + 1;
	if (! obj9501_counterCanExceedTargetValue && obj9501_counterValue > obj9501_counterTargetValue) {
		obj9501_counterValue = obj9501_counterTargetValue;
	}
	if (oldValue != obj9501_counterValue) {
		$("#obj9501").trigger('SCEventCounterValueChange');
		$("#obj9501").trigger('SCEventCounterIncrease');
		if (obj9501_counterValue == obj9501_counterTargetValue)
			$("#obj9501").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9454").trigger("obj9454_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj9469_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9469_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_onTouchDown_ended");
		
		return;
	}
	window.obj9469_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9469");
//	action: dragDrop
//	target: obj9469 
dragDrop_9574();
function dragDrop_9574() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9469_onTouchDown_runningActionsCount = obj9469_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9469');
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
    	window.obj9469_onTouchDown_runningActionsCount = window.obj9469_onTouchDown_runningActionsCount - 1;
if (window.obj9469_onTouchDown_runningActionsCount == 0) {
	obj9469_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj9497");
    	var actionsOnDrop = new Array("SCActionDragDrop4883_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9574 = false;
    	var dropped_id_9574;
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
					dropped_9574 = true;
					dropped_id_9574 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9574) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9469").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
$("#obj9469").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
		}
    });
}











};
obj9469_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9469_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_onTouchDown_ended");
		
		return;
	}
	window.obj9469_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9469 
rotate_9582();
function rotate_9582() {
	window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9469";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9469';
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
	if (isInfinite) { rotate_9582_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9582_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9582_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9582_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9582_completed() {
	setTimeout(function() {
		window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9583();
function runjs_9583() {
	window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9469"));
	setTimeout(function() {
		window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9469 
rotate_9582();
function rotate_9582() {
	window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9469";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9469';
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
	if (isInfinite) { rotate_9582_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9582_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9582_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9582_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9582_completed() {
	setTimeout(function() {
		window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9583();
function runjs_9583() {
	window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9469"));
	setTimeout(function() {
		window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9576();
function runjs_9576() {
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9469"));
	setTimeout(function() {
		window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9469 
hide_9577();
function hide_9577() {
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj9469").fadeOut(500, function() {
			setTimeout(function() {
				window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: playAnimation 
//	target: obj9340 
playAnimation_9578();
function playAnimation_9578() {
	var targetObjectId = "#obj9340";
	var targetObject = $(targetObjectId)[0];
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj9340 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj9340;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj9340.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj9340").one("obj9340_animation_ended",function(event) {
		    window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }


















};
obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 2;
	








//	action: wait
wait_9579();
function wait_9579() {
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3();
}
	}, 500);
}












};
obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj9501 
incrementCounter_9580();
function incrementCounter_9580() {
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj9501_counterValue;
	obj9501_counterValue = obj9501_counterValue + 1;
	if (! obj9501_counterCanExceedTargetValue && obj9501_counterValue > obj9501_counterTargetValue) {
		obj9501_counterValue = obj9501_counterTargetValue;
	}
	if (oldValue != obj9501_counterValue) {
		$("#obj9501").trigger('SCEventCounterValueChange');
		$("#obj9501").trigger('SCEventCounterIncrease');
		if (obj9501_counterValue == obj9501_counterTargetValue)
			$("#obj9501").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9469").trigger("obj9469_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj9483_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9483_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_onTouchDown_ended");
		
		return;
	}
	window.obj9483_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj9483");
//	action: dragDrop
//	target: obj9483 
dragDrop_9486();
function dragDrop_9486() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj9483_onTouchDown_runningActionsCount = obj9483_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj9483');
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
    	window.obj9483_onTouchDown_runningActionsCount = window.obj9483_onTouchDown_runningActionsCount - 1;
if (window.obj9483_onTouchDown_runningActionsCount == 0) {
	obj9483_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj9499");
    	var actionsOnDrop = new Array("SCActionDragDrop4883_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_9486 = false;
    	var dropped_id_9486;
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
					dropped_9486 = true;
					dropped_id_9486 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_9486) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj9483").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
$("#obj9483").trigger('SCActionDragDrop4883_droppedOutsideTargetActions');
		}
    });
}











};
obj9483_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9483_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_onTouchDown_ended");
		
		return;
	}
	window.obj9483_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9483 
rotate_9495();
function rotate_9495() {
	window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9483";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9483';
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
	if (isInfinite) { rotate_9495_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9495_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9495_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9495_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9495_completed() {
	setTimeout(function() {
		window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9496();
function runjs_9496() {
	window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9483"));
	setTimeout(function() {
		window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj9483 
rotate_9495();
function rotate_9495() {
	window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj9483";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj9483';
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
	if (isInfinite) { rotate_9495_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_9495_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9495_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_9495_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_9495_completed() {
	setTimeout(function() {
		window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}








//	action: Run JavaScript
runjs_9496();
function runjs_9496() {
	window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9483"));
	setTimeout(function() {
		window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9488();
function runjs_9488() {
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj9483"));
	setTimeout(function() {
		window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9483 
hide_9489();
function hide_9489() {
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj9483").fadeOut(500, function() {
			setTimeout(function() {
				window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: playAnimation 
//	target: obj9356 
playAnimation_9525();
function playAnimation_9525() {
	var targetObjectId = "#obj9356";
	var targetObject = $(targetObjectId)[0];
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj9356 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj9356;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj9356.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj9356").one("obj9356_animation_ended",function(event) {
		    window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2();
}
		});
	}
 }


















};
obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 2;
	








//	action: wait
wait_9491();
function wait_9491() {
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3();
}
	}, 500);
}












};
obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj9501 
incrementCounter_9493();
function incrementCounter_9493() {
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj9501_counterValue;
	obj9501_counterValue = obj9501_counterValue + 1;
	if (! obj9501_counterCanExceedTargetValue && obj9501_counterValue > obj9501_counterTargetValue) {
		obj9501_counterValue = obj9501_counterTargetValue;
	}
	if (oldValue != obj9501_counterValue) {
		$("#obj9501").trigger('SCEventCounterValueChange');
		$("#obj9501").trigger('SCEventCounterIncrease');
		if (obj9501_counterValue == obj9501_counterTargetValue)
			$("#obj9501").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount == 0) {
	obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj9483").trigger("obj9483_SCActionDragDrop4883_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj9501_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9501_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj9501").trigger("obj9501_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj9501_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page7
goToPage_9861();
function goToPage_9861() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../7/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(7))},200);
	}
}





















};
obj9501_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9501_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj9501").trigger("obj9501_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj9501_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	





















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
 *   obj9370: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9370");
	var winTarget = document.getElementById("obj9370");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9370").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9370_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9370_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9370_onTouchDown_activeActionGroupIndex != -1) return;
var obj9370_onTouchDown_runningActionsCount = 0;
var obj9370_onTouchDown_loopCount = 0;
obj9370_onTouchDown_actionGroup0();
});


/*
 *
 *   obj9370: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9370").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9370: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9370").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9370_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9370: Event SCActionDragDrop4883_droppedInsideTargetActions
 *
 */
$("#obj9370").bind("SCActionDragDrop4883_droppedInsideTargetActions", function(event) {
	if (window.obj9370_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj9370_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9370_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
obj9370_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj9384: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9384");
	var winTarget = document.getElementById("obj9384");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9384").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9384_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9384_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9384_onTouchDown_activeActionGroupIndex != -1) return;
var obj9384_onTouchDown_runningActionsCount = 0;
var obj9384_onTouchDown_loopCount = 0;
obj9384_onTouchDown_actionGroup0();
});


/*
 *
 *   obj9384: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9384").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9384: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9384").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9384_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9384: Event SCActionDragDrop4883_droppedInsideTargetActions
 *
 */
$("#obj9384").bind("SCActionDragDrop4883_droppedInsideTargetActions", function(event) {
	if (window.obj9384_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj9384_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9384_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
obj9384_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj9398: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9398");
	var winTarget = document.getElementById("obj9398");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9398").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9398_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9398_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9398_onTouchDown_activeActionGroupIndex != -1) return;
var obj9398_onTouchDown_runningActionsCount = 0;
var obj9398_onTouchDown_loopCount = 0;
obj9398_onTouchDown_actionGroup0();
});


/*
 *
 *   obj9398: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9398").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9398: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9398").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9398_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9398: Event SCActionDragDrop4883_droppedInsideTargetActions
 *
 */
$("#obj9398").bind("SCActionDragDrop4883_droppedInsideTargetActions", function(event) {
	if (window.obj9398_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj9398_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9398_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
obj9398_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj9412: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9412");
	var winTarget = document.getElementById("obj9412");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9412").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9412_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9412_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9412_onTouchDown_activeActionGroupIndex != -1) return;
var obj9412_onTouchDown_runningActionsCount = 0;
var obj9412_onTouchDown_loopCount = 0;
obj9412_onTouchDown_actionGroup0();
});


/*
 *
 *   obj9412: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9412").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9412: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9412").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9412_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9412: Event SCActionDragDrop4883_droppedInsideTargetActions
 *
 */
$("#obj9412").bind("SCActionDragDrop4883_droppedInsideTargetActions", function(event) {
	if (window.obj9412_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj9412_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9412_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
obj9412_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj9426: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9426");
	var winTarget = document.getElementById("obj9426");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9426").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9426_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9426_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9426_onTouchDown_activeActionGroupIndex != -1) return;
var obj9426_onTouchDown_runningActionsCount = 0;
var obj9426_onTouchDown_loopCount = 0;
obj9426_onTouchDown_actionGroup0();
});


/*
 *
 *   obj9426: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9426").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9426: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9426").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9426_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9426: Event SCActionDragDrop4883_droppedInsideTargetActions
 *
 */
$("#obj9426").bind("SCActionDragDrop4883_droppedInsideTargetActions", function(event) {
	if (window.obj9426_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj9426_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9426_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
obj9426_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj9440: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9440");
	var winTarget = document.getElementById("obj9440");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9440").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9440_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9440_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9440_onTouchDown_activeActionGroupIndex != -1) return;
var obj9440_onTouchDown_runningActionsCount = 0;
var obj9440_onTouchDown_loopCount = 0;
obj9440_onTouchDown_actionGroup0();
});


/*
 *
 *   obj9440: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9440").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9440: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9440").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9440_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9440: Event SCActionDragDrop4883_droppedInsideTargetActions
 *
 */
$("#obj9440").bind("SCActionDragDrop4883_droppedInsideTargetActions", function(event) {
	if (window.obj9440_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj9440_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9440_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
obj9440_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj9454: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9454");
	var winTarget = document.getElementById("obj9454");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9454").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9454_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9454_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9454_onTouchDown_activeActionGroupIndex != -1) return;
var obj9454_onTouchDown_runningActionsCount = 0;
var obj9454_onTouchDown_loopCount = 0;
obj9454_onTouchDown_actionGroup0();
});


/*
 *
 *   obj9454: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9454").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9454: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9454").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9454_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9454: Event SCActionDragDrop4883_droppedInsideTargetActions
 *
 */
$("#obj9454").bind("SCActionDragDrop4883_droppedInsideTargetActions", function(event) {
	if (window.obj9454_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj9454_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9454_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
obj9454_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj9469: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9469");
	var winTarget = document.getElementById("obj9469");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9469").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9469_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9469_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9469_onTouchDown_activeActionGroupIndex != -1) return;
var obj9469_onTouchDown_runningActionsCount = 0;
var obj9469_onTouchDown_loopCount = 0;
obj9469_onTouchDown_actionGroup0();
});


/*
 *
 *   obj9469: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9469").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9469: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9469").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9469_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9469: Event SCActionDragDrop4883_droppedInsideTargetActions
 *
 */
$("#obj9469").bind("SCActionDragDrop4883_droppedInsideTargetActions", function(event) {
	if (window.obj9469_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj9469_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9469_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
obj9469_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj9483: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9483");
	var winTarget = document.getElementById("obj9483");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9483").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9483_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9483_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9483_onTouchDown_activeActionGroupIndex != -1) return;
var obj9483_onTouchDown_runningActionsCount = 0;
var obj9483_onTouchDown_loopCount = 0;
obj9483_onTouchDown_actionGroup0();
});


/*
 *
 *   obj9483: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9483").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9483: Event SCActionDragDrop4883_droppedOutsideTargetActions
 *
 */
$("#obj9483").bind("SCActionDragDrop4883_droppedOutsideTargetActions", function(event) {
	if (window.obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_runningActionsCount = 0;
var obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_loopCount = 0;
obj9483_SCActionDragDrop4883_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj9483: Event SCActionDragDrop4883_droppedInsideTargetActions
 *
 */
$("#obj9483").bind("SCActionDragDrop4883_droppedInsideTargetActions", function(event) {
	if (window.obj9483_SCActionDragDrop4883_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj9483_SCActionDragDrop4883_droppedInsideTargetActions_runningActionsCount = 0;
var obj9483_SCActionDragDrop4883_droppedInsideTargetActions_loopCount = 0;
obj9483_SCActionDragDrop4883_droppedInsideTargetActions_actionGroup0();
});





















/*
 *
 *   obj9501: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj9501").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj9501_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj9501_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj9501_SCEventCounterReachedTargetValue_loopCount = 0;
obj9501_SCEventCounterReachedTargetValue_actionGroup0();
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
	
$("#obj9678").trigger('SCEventShow');
$("#obj9340").trigger('SCEventShow');
$("#obj9348").trigger('SCEventShow');
$("#obj9356").trigger('SCEventShow');
$("#obj9370").trigger('SCEventShow');
$("#obj9384").trigger('SCEventShow');
$("#obj9398").trigger('SCEventShow');
$("#obj9412").trigger('SCEventShow');
$("#obj9426").trigger('SCEventShow');
$("#obj9440").trigger('SCEventShow');
$("#obj9454").trigger('SCEventShow');
$("#obj9469").trigger('SCEventShow');
$("#obj9483").trigger('SCEventShow');
$("#obj9497").trigger('SCEventShow');
$("#obj9499").trigger('SCEventShow');
$("#obj9505").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});