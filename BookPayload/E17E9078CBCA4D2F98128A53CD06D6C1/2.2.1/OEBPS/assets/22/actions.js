pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 6945;
pubcoder.page.title = "22";
pubcoder.page.number = 22;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj6960_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj6960_onLoad_activeActionGroupIndex = -1;
var obj6960_onLoad_runningActionsCount = 0;
var obj6960_onLoad_loopCount = 0;
var obj6988_onDrag_activeActionGroupIndex = -1;
var obj6988_onDrag_runningActionsCount = 0;
var obj6988_onDrag_loopCount = 0;
var obj6988_onTouchDown_activeActionGroupIndex = -1;
var obj6988_onTouchDown_runningActionsCount = 0;
var obj6988_onTouchDown_loopCount = 0;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj6988_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6988_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj6988_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
var obj6996_onDrag_activeActionGroupIndex = -1;
var obj6996_onDrag_runningActionsCount = 0;
var obj6996_onDrag_loopCount = 0;
var obj6996_onTouchDown_activeActionGroupIndex = -1;
var obj6996_onTouchDown_runningActionsCount = 0;
var obj6996_onTouchDown_loopCount = 0;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj6996_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6996_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj6996_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
var obj7004_onDrag_activeActionGroupIndex = -1;
var obj7004_onDrag_runningActionsCount = 0;
var obj7004_onDrag_loopCount = 0;
var obj7004_onTouchDown_activeActionGroupIndex = -1;
var obj7004_onTouchDown_runningActionsCount = 0;
var obj7004_onTouchDown_loopCount = 0;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj7004_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj7004_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj7004_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
var obj7012_onDrag_activeActionGroupIndex = -1;
var obj7012_onDrag_runningActionsCount = 0;
var obj7012_onDrag_loopCount = 0;
var obj7012_onTouchDown_activeActionGroupIndex = -1;
var obj7012_onTouchDown_runningActionsCount = 0;
var obj7012_onTouchDown_loopCount = 0;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj7012_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj7012_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj7012_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
var obj7020_onDrag_activeActionGroupIndex = -1;
var obj7020_onDrag_runningActionsCount = 0;
var obj7020_onDrag_loopCount = 0;
var obj7020_onTouchDown_activeActionGroupIndex = -1;
var obj7020_onTouchDown_runningActionsCount = 0;
var obj7020_onTouchDown_loopCount = 0;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
var obj7020_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj7020_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj7020_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
var obj7028_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj7028_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7028_SCEventCounterReachedTargetValue_loopCount = 0;
var obj7033_onShow_activeActionGroupIndex = -1;
var obj7033_onShow_runningActionsCount = 0;
var obj7033_onShow_loopCount = 0;
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
 
var obj7028_counterValue = 0;
var obj7028_counterTargetValue = 5;
var obj7028_counterCanExceedTargetValue = false;
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
	
initAnimation_6960();
function initAnimation_6960()
{
        var targetObjectId = "#obj6960";
        var widthSCAnimationObject = 360;
        var heightSCAnimationObject = 278;
		var framesPerSecond = 0.1;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj6960 = $("#")[0];
        window.hasAudioTrack_obj6960 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj6960_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj6960 = $(targetObjectId).spritespin("api");
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
		
obj6960_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6960_onLoad_activeActionGroupIndex = -1;
		$("#obj6960").trigger("obj6960_onLoad_ended");
		
		return;
	}
	window.obj6960_onLoad_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj6960 
playAnimation_6973();
function playAnimation_6973() {
	var targetObjectId = "#obj6960";
	var targetObject = $(targetObjectId)[0];
	window.obj6960_onLoad_runningActionsCount = obj6960_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj6960_onLoad_runningActionsCount = window.obj6960_onLoad_runningActionsCount - 1;
if (window.obj6960_onLoad_runningActionsCount == 0) {
	obj6960_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj6960 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj6960;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj6960.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj6960").one("obj6960_animation_ended",function(event) {
		    window.obj6960_onLoad_runningActionsCount = window.obj6960_onLoad_runningActionsCount - 1;
if (window.obj6960_onLoad_runningActionsCount == 0) {
	obj6960_onLoad_actionGroup1();
}
		});
	}
 }


















};
obj6960_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6960_onLoad_activeActionGroupIndex = -1;
		$("#obj6960").trigger("obj6960_onLoad_ended");
		
		return;
	}
	window.obj6960_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_6974();
function wait_6974() {
	window.obj6960_onLoad_runningActionsCount = obj6960_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6960_onLoad_runningActionsCount = window.obj6960_onLoad_runningActionsCount - 1;
if (window.obj6960_onLoad_runningActionsCount == 0) {
	obj6960_onLoad_actionGroup2();
}
	}, 1000);
}












};
obj6960_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6960_onLoad_activeActionGroupIndex = -1;
		$("#obj6960").trigger("obj6960_onLoad_ended");
		
		return;
	}
	window.obj6960_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj7033 
show_6975();
function show_6975() {
	window.obj6960_onLoad_runningActionsCount = obj6960_onLoad_runningActionsCount + 1;
	$("#obj7033").fadeIn(500, function() {
			setTimeout(function() {
				window.obj6960_onLoad_runningActionsCount = window.obj6960_onLoad_runningActionsCount - 1;
if (window.obj6960_onLoad_runningActionsCount == 0) {
	obj6960_onLoad_actionGroup3();
}
				$("#obj7033").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj6960_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6960_onLoad_activeActionGroupIndex = -1;
		$("#obj6960").trigger("obj6960_onLoad_ended");
		
		return;
	}
	window.obj6960_onLoad_activeActionGroupIndex = 3;
	








//	action: wait
wait_6976();
function wait_6976() {
	window.obj6960_onLoad_runningActionsCount = obj6960_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6960_onLoad_runningActionsCount = window.obj6960_onLoad_runningActionsCount - 1;
if (window.obj6960_onLoad_runningActionsCount == 0) {
	obj6960_onLoad_actionGroup4();
}
	}, 2500);
}












};
obj6960_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6960_onLoad_activeActionGroupIndex = -1;
		$("#obj6960").trigger("obj6960_onLoad_ended");
		
		return;
	}
	window.obj6960_onLoad_activeActionGroupIndex = 4;
	
//	action: goToPage
//	target: page22
goToPage_6977();
function goToPage_6977() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../22/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(22))},200);
	}
}





















};
obj6960_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6960_onLoad_activeActionGroupIndex = -1;
		$("#obj6960").trigger("obj6960_onLoad_ended");
		
		return;
	}
	window.obj6960_onLoad_activeActionGroupIndex = 5;
	





















};
obj6988_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6988_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_onTouchDown_ended");
		
		return;
	}
	window.obj6988_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6988");
//	action: dragDrop
//	target: obj6988 
dragDrop_6991();
function dragDrop_6991() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6988_onTouchDown_runningActionsCount = obj6988_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6988');
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
    	window.obj6988_onTouchDown_runningActionsCount = window.obj6988_onTouchDown_runningActionsCount - 1;
if (window.obj6988_onTouchDown_runningActionsCount == 0) {
	obj6988_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6986");
    	var actionsOnDrop = new Array("SCActionDragDrop4182_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6991 = false;
    	var dropped_id_6991;
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
					dropped_6991 = true;
					dropped_id_6991 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6991) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj6988").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
$("#obj6988").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
		}
    });
}











};
obj6988_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6988_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_onTouchDown_ended");
		
		return;
	}
	window.obj6988_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj6988 
rotate_6995();
function rotate_6995() {
	window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj6988";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6988';
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
	if (isInfinite) { rotate_6995_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6995_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6995_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6995_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6995_completed() {
	setTimeout(function() {
		window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj6988 
rotate_6995();
function rotate_6995() {
	window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj6988";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6988';
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
	if (isInfinite) { rotate_6995_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_6995_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6995_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_6995_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_6995_completed() {
	setTimeout(function() {
		window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6988_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6988_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6988_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj7028 
incrementCounter_6993();
function incrementCounter_6993() {
	window.obj6988_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = obj6988_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj7028_counterValue;
	obj7028_counterValue = obj7028_counterValue + 1;
	if (! obj7028_counterCanExceedTargetValue && obj7028_counterValue > obj7028_counterTargetValue) {
		obj7028_counterValue = obj7028_counterTargetValue;
	}
	if (oldValue != obj7028_counterValue) {
		$("#obj7028").trigger('SCEventCounterValueChange');
		$("#obj7028").trigger('SCEventCounterIncrease');
		if (obj7028_counterValue == obj7028_counterTargetValue)
			$("#obj7028").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6988_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = window.obj6988_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6988_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6988_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj6988_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6988_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6988_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6996_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6996_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6996").trigger("obj6996_onTouchDown_ended");
		
		return;
	}
	window.obj6996_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6996");
//	action: dragDrop
//	target: obj6996 
dragDrop_6999();
function dragDrop_6999() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6996_onTouchDown_runningActionsCount = obj6996_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6996');
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
    	window.obj6996_onTouchDown_runningActionsCount = window.obj6996_onTouchDown_runningActionsCount - 1;
if (window.obj6996_onTouchDown_runningActionsCount == 0) {
	obj6996_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6984");
    	var actionsOnDrop = new Array("SCActionDragDrop4182_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6999 = false;
    	var dropped_id_6999;
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
					dropped_6999 = true;
					dropped_id_6999 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6999) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj6996").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
$("#obj6996").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
		}
    });
}











};
obj6996_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6996_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6996").trigger("obj6996_onTouchDown_ended");
		
		return;
	}
	window.obj6996_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6996").trigger("obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj6996 
rotate_7003();
function rotate_7003() {
	window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj6996";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6996';
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
	if (isInfinite) { rotate_7003_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_7003_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7003_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7003_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_7003_completed() {
	setTimeout(function() {
		window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6996").trigger("obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6996").trigger("obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj6996 
rotate_7003();
function rotate_7003() {
	window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj6996";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6996';
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
	if (isInfinite) { rotate_7003_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_7003_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7003_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7003_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_7003_completed() {
	setTimeout(function() {
		window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6996").trigger("obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6996_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6996_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6996").trigger("obj6996_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6996_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj7028 
incrementCounter_7001();
function incrementCounter_7001() {
	window.obj6996_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = obj6996_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj7028_counterValue;
	obj7028_counterValue = obj7028_counterValue + 1;
	if (! obj7028_counterCanExceedTargetValue && obj7028_counterValue > obj7028_counterTargetValue) {
		obj7028_counterValue = obj7028_counterTargetValue;
	}
	if (oldValue != obj7028_counterValue) {
		$("#obj7028").trigger('SCEventCounterValueChange');
		$("#obj7028").trigger('SCEventCounterIncrease');
		if (obj7028_counterValue == obj7028_counterTargetValue)
			$("#obj7028").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6996_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = window.obj6996_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6996_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6996_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj6996_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6996_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6996").trigger("obj6996_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6996_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7004_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7004_onTouchDown_activeActionGroupIndex = -1;
		$("#obj7004").trigger("obj7004_onTouchDown_ended");
		
		return;
	}
	window.obj7004_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj7004");
//	action: dragDrop
//	target: obj7004 
dragDrop_7007();
function dragDrop_7007() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj7004_onTouchDown_runningActionsCount = obj7004_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj7004');
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
    	window.obj7004_onTouchDown_runningActionsCount = window.obj7004_onTouchDown_runningActionsCount - 1;
if (window.obj7004_onTouchDown_runningActionsCount == 0) {
	obj7004_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6982");
    	var actionsOnDrop = new Array("SCActionDragDrop4182_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_7007 = false;
    	var dropped_id_7007;
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
					dropped_7007 = true;
					dropped_id_7007 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_7007) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj7004").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
$("#obj7004").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
		}
    });
}











};
obj7004_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7004_onTouchDown_activeActionGroupIndex = -1;
		$("#obj7004").trigger("obj7004_onTouchDown_ended");
		
		return;
	}
	window.obj7004_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7004").trigger("obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj7004 
rotate_7011();
function rotate_7011() {
	window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj7004";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj7004';
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
	if (isInfinite) { rotate_7011_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_7011_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7011_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7011_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_7011_completed() {
	setTimeout(function() {
		window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7004").trigger("obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7004").trigger("obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj7004 
rotate_7011();
function rotate_7011() {
	window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj7004";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj7004';
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
	if (isInfinite) { rotate_7011_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_7011_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7011_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7011_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_7011_completed() {
	setTimeout(function() {
		window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7004").trigger("obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7004_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7004_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7004").trigger("obj7004_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj7004_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj7028 
incrementCounter_7009();
function incrementCounter_7009() {
	window.obj7004_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = obj7004_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj7028_counterValue;
	obj7028_counterValue = obj7028_counterValue + 1;
	if (! obj7028_counterCanExceedTargetValue && obj7028_counterValue > obj7028_counterTargetValue) {
		obj7028_counterValue = obj7028_counterTargetValue;
	}
	if (oldValue != obj7028_counterValue) {
		$("#obj7028").trigger('SCEventCounterValueChange');
		$("#obj7028").trigger('SCEventCounterIncrease');
		if (obj7028_counterValue == obj7028_counterTargetValue)
			$("#obj7028").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj7004_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = window.obj7004_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj7004_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount == 0) {
	obj7004_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj7004_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7004_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7004").trigger("obj7004_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj7004_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7012_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7012_onTouchDown_activeActionGroupIndex = -1;
		$("#obj7012").trigger("obj7012_onTouchDown_ended");
		
		return;
	}
	window.obj7012_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj7012");
//	action: dragDrop
//	target: obj7012 
dragDrop_7015();
function dragDrop_7015() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj7012_onTouchDown_runningActionsCount = obj7012_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj7012');
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
    	window.obj7012_onTouchDown_runningActionsCount = window.obj7012_onTouchDown_runningActionsCount - 1;
if (window.obj7012_onTouchDown_runningActionsCount == 0) {
	obj7012_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6978");
    	var actionsOnDrop = new Array("SCActionDragDrop4182_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_7015 = false;
    	var dropped_id_7015;
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
					dropped_7015 = true;
					dropped_id_7015 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_7015) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj7012").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
$("#obj7012").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
		}
    });
}











};
obj7012_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7012_onTouchDown_activeActionGroupIndex = -1;
		$("#obj7012").trigger("obj7012_onTouchDown_ended");
		
		return;
	}
	window.obj7012_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7012").trigger("obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj7012 
rotate_7019();
function rotate_7019() {
	window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj7012";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj7012';
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
	if (isInfinite) { rotate_7019_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_7019_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7019_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7019_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_7019_completed() {
	setTimeout(function() {
		window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7012").trigger("obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7012").trigger("obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj7012 
rotate_7019();
function rotate_7019() {
	window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj7012";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj7012';
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
	if (isInfinite) { rotate_7019_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_7019_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7019_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7019_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_7019_completed() {
	setTimeout(function() {
		window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7012").trigger("obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7012_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7012_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7012").trigger("obj7012_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj7012_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj7028 
incrementCounter_7017();
function incrementCounter_7017() {
	window.obj7012_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = obj7012_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj7028_counterValue;
	obj7028_counterValue = obj7028_counterValue + 1;
	if (! obj7028_counterCanExceedTargetValue && obj7028_counterValue > obj7028_counterTargetValue) {
		obj7028_counterValue = obj7028_counterTargetValue;
	}
	if (oldValue != obj7028_counterValue) {
		$("#obj7028").trigger('SCEventCounterValueChange');
		$("#obj7028").trigger('SCEventCounterIncrease');
		if (obj7028_counterValue == obj7028_counterTargetValue)
			$("#obj7028").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj7012_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = window.obj7012_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj7012_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount == 0) {
	obj7012_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj7012_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7012_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7012").trigger("obj7012_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj7012_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7020_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7020_onTouchDown_activeActionGroupIndex = -1;
		$("#obj7020").trigger("obj7020_onTouchDown_ended");
		
		return;
	}
	window.obj7020_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj7020");
//	action: dragDrop
//	target: obj7020 
dragDrop_7023();
function dragDrop_7023() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj7020_onTouchDown_runningActionsCount = obj7020_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj7020');
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
    	window.obj7020_onTouchDown_runningActionsCount = window.obj7020_onTouchDown_runningActionsCount - 1;
if (window.obj7020_onTouchDown_runningActionsCount == 0) {
	obj7020_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6980");
    	var actionsOnDrop = new Array("SCActionDragDrop4182_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_7023 = false;
    	var dropped_id_7023;
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
					dropped_7023 = true;
					dropped_id_7023 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_7023) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj7020").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
$("#obj7020").trigger('SCActionDragDrop4182_droppedOutsideTargetActions');
		}
    });
}











};
obj7020_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7020_onTouchDown_activeActionGroupIndex = -1;
		$("#obj7020").trigger("obj7020_onTouchDown_ended");
		
		return;
	}
	window.obj7020_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7020").trigger("obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj7020 
rotate_7027();
function rotate_7027() {
	window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj7020";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj7020';
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
	if (isInfinite) { rotate_7027_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_7027_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7027_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7027_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_7027_completed() {
	setTimeout(function() {
		window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7020").trigger("obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7020").trigger("obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj7020 
rotate_7027();
function rotate_7027() {
	window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj7020";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj7020';
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
	if (isInfinite) { rotate_7027_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_7027_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7027_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_7027_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_7027_completed() {
	setTimeout(function() {
		window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7020").trigger("obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7020_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7020_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7020").trigger("obj7020_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj7020_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj7028 
incrementCounter_7025();
function incrementCounter_7025() {
	window.obj7020_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = obj7020_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj7028_counterValue;
	obj7028_counterValue = obj7028_counterValue + 1;
	if (! obj7028_counterCanExceedTargetValue && obj7028_counterValue > obj7028_counterTargetValue) {
		obj7028_counterValue = obj7028_counterTargetValue;
	}
	if (oldValue != obj7028_counterValue) {
		$("#obj7028").trigger('SCEventCounterValueChange');
		$("#obj7028").trigger('SCEventCounterIncrease');
		if (obj7028_counterValue == obj7028_counterTargetValue)
			$("#obj7028").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj7020_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = window.obj7020_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj7020_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount == 0) {
	obj7020_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj7020_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7020_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj7020").trigger("obj7020_SCActionDragDrop4182_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj7020_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj7028_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7028_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7028").trigger("obj7028_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj7028_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_7030();
function wait_7030() {
	window.obj7028_SCEventCounterReachedTargetValue_runningActionsCount = obj7028_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7028_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7028_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj7028_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7028_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 500);
}












};
obj7028_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7028_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7028").trigger("obj7028_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj7028_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page23
goToPage_7031();
function goToPage_7031() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../23/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(23))},200);
	}
}





















};
obj7028_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7028_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7028").trigger("obj7028_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj7028_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj7033_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7033_onShow_activeActionGroupIndex = -1;
		$("#obj7033").trigger("obj7033_onShow_ended");
		
		return;
	}
	window.obj7033_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj7052 
show_7036();
function show_7036() {
	window.obj7033_onShow_runningActionsCount = obj7033_onShow_runningActionsCount + 1;
	$("#obj7052").fadeIn(0, function() {
			setTimeout(function() {
				window.obj7033_onShow_runningActionsCount = window.obj7033_onShow_runningActionsCount - 1;
if (window.obj7033_onShow_runningActionsCount == 0) {
	obj7033_onShow_actionGroup1();
}
				$("#obj7052").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj7039 
show_7037();
function show_7037() {
	window.obj7033_onShow_runningActionsCount = obj7033_onShow_runningActionsCount + 1;
	$("#obj7039").fadeIn(0, function() {
			setTimeout(function() {
				window.obj7033_onShow_runningActionsCount = window.obj7033_onShow_runningActionsCount - 1;
if (window.obj7033_onShow_runningActionsCount == 0) {
	obj7033_onShow_actionGroup1();
}
				$("#obj7039").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj7049 
show_7038();
function show_7038() {
	window.obj7033_onShow_runningActionsCount = obj7033_onShow_runningActionsCount + 1;
	$("#obj7049").fadeIn(0, function() {
			setTimeout(function() {
				window.obj7033_onShow_runningActionsCount = window.obj7033_onShow_runningActionsCount - 1;
if (window.obj7033_onShow_runningActionsCount == 0) {
	obj7033_onShow_actionGroup1();
}
				$("#obj7049").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj7033_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7033_onShow_activeActionGroupIndex = -1;
		$("#obj7033").trigger("obj7033_onShow_ended");
		
		return;
	}
	window.obj7033_onShow_activeActionGroupIndex = 1;
	





















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
 *   obj6960: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj6960_onLoad_activeActionGroupIndex != -1) return;
var obj6960_onLoad_runningActionsCount = 0;
var obj6960_onLoad_loopCount = 0;
obj6960_onLoad_actionGroup0();
});









































/*
 *
 *   obj6988: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6988");
	var winTarget = document.getElementById("obj6988");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6988").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6988_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6988_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6988_onTouchDown_activeActionGroupIndex != -1) return;
var obj6988_onTouchDown_runningActionsCount = 0;
var obj6988_onTouchDown_loopCount = 0;
obj6988_onTouchDown_actionGroup0();
});


/*
 *
 *   obj6988: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj6988").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj6988: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj6988").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj6988_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj6988: Event SCActionDragDrop4182_droppedInsideTargetActions
 *
 */
$("#obj6988").one("SCActionDragDrop4182_droppedInsideTargetActions", function(event) {
	if (window.obj6988_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj6988_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj6988_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
obj6988_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj6996: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6996");
	var winTarget = document.getElementById("obj6996");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6996").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6996_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6996_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6996_onTouchDown_activeActionGroupIndex != -1) return;
var obj6996_onTouchDown_runningActionsCount = 0;
var obj6996_onTouchDown_loopCount = 0;
obj6996_onTouchDown_actionGroup0();
});


/*
 *
 *   obj6996: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj6996").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj6996: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj6996").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj6996_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj6996: Event SCActionDragDrop4182_droppedInsideTargetActions
 *
 */
$("#obj6996").one("SCActionDragDrop4182_droppedInsideTargetActions", function(event) {
	if (window.obj6996_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj6996_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj6996_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
obj6996_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj7004: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj7004");
	var winTarget = document.getElementById("obj7004");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj7004").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj7004_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj7004_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj7004_onTouchDown_activeActionGroupIndex != -1) return;
var obj7004_onTouchDown_runningActionsCount = 0;
var obj7004_onTouchDown_loopCount = 0;
obj7004_onTouchDown_actionGroup0();
});


/*
 *
 *   obj7004: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj7004").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj7004: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj7004").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj7004_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj7004: Event SCActionDragDrop4182_droppedInsideTargetActions
 *
 */
$("#obj7004").one("SCActionDragDrop4182_droppedInsideTargetActions", function(event) {
	if (window.obj7004_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj7004_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj7004_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
obj7004_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj7012: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj7012");
	var winTarget = document.getElementById("obj7012");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj7012").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj7012_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj7012_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj7012_onTouchDown_activeActionGroupIndex != -1) return;
var obj7012_onTouchDown_runningActionsCount = 0;
var obj7012_onTouchDown_loopCount = 0;
obj7012_onTouchDown_actionGroup0();
});


/*
 *
 *   obj7012: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj7012").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj7012: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj7012").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj7012_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj7012: Event SCActionDragDrop4182_droppedInsideTargetActions
 *
 */
$("#obj7012").one("SCActionDragDrop4182_droppedInsideTargetActions", function(event) {
	if (window.obj7012_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj7012_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj7012_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
obj7012_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj7020: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj7020");
	var winTarget = document.getElementById("obj7020");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj7020").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj7020_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj7020_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj7020_onTouchDown_activeActionGroupIndex != -1) return;
var obj7020_onTouchDown_runningActionsCount = 0;
var obj7020_onTouchDown_loopCount = 0;
obj7020_onTouchDown_actionGroup0();
});


/*
 *
 *   obj7020: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj7020").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj7020: Event SCActionDragDrop4182_droppedOutsideTargetActions
 *
 */
$("#obj7020").bind("SCActionDragDrop4182_droppedOutsideTargetActions", function(event) {
	if (window.obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_loopCount = 0;
obj7020_SCActionDragDrop4182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj7020: Event SCActionDragDrop4182_droppedInsideTargetActions
 *
 */
$("#obj7020").one("SCActionDragDrop4182_droppedInsideTargetActions", function(event) {
	if (window.obj7020_SCActionDragDrop4182_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj7020_SCActionDragDrop4182_droppedInsideTargetActions_runningActionsCount = 0;
var obj7020_SCActionDragDrop4182_droppedInsideTargetActions_loopCount = 0;
obj7020_SCActionDragDrop4182_droppedInsideTargetActions_actionGroup0();
});







/*
 *
 *   obj7028: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj7028").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj7028_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj7028_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7028_SCEventCounterReachedTargetValue_loopCount = 0;
obj7028_SCEventCounterReachedTargetValue_actionGroup0();
});





/*
 *
 *   obj7033: Event Show
 *
 */
 
$("#obj7033").bind('SCEventShow', function(event) {
	if (window.obj7033_onShow_activeActionGroupIndex != -1) return;
var obj7033_onShow_runningActionsCount = 0;
var obj7033_onShow_loopCount = 0;
obj7033_onShow_actionGroup0();
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
	
$("#obj6946").trigger('SCEventShow');
$("#obj6948").trigger('SCEventShow');
$("#obj6951").trigger('SCEventShow');
$("#obj6953").trigger('SCEventShow');
$("#obj6957").trigger('SCEventShow');
$("#obj6955").trigger('SCEventShow');
$("#obj6960").trigger('SCEventShow');
$("#obj6978").trigger('SCEventShow');
$("#obj6980").trigger('SCEventShow');
$("#obj6982").trigger('SCEventShow');
$("#obj6984").trigger('SCEventShow');
$("#obj6986").trigger('SCEventShow');
$("#obj6988").trigger('SCEventShow');
$("#obj6996").trigger('SCEventShow');
$("#obj7004").trigger('SCEventShow');
$("#obj7012").trigger('SCEventShow');
$("#obj7020").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});