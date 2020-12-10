pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 5;
pubcoder.page.title = "10";
pubcoder.page.number = 10;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj559_onDrag_activeActionGroupIndex = -1;
var obj559_onDrag_runningActionsCount = 0;
var obj559_onDrag_loopCount = 0;
var obj559_onTouchDown_activeActionGroupIndex = -1;
var obj559_onTouchDown_runningActionsCount = 0;
var obj559_onTouchDown_loopCount = 0;
var obj559_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj559_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj559_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
var obj559_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj559_droppedInsideTargetActions_runningActionsCount = 0;
var obj559_droppedInsideTargetActions_loopCount = 0;
var obj569_onDrag_activeActionGroupIndex = -1;
var obj569_onDrag_runningActionsCount = 0;
var obj569_onDrag_loopCount = 0;
var obj569_onTouchDown_activeActionGroupIndex = -1;
var obj569_onTouchDown_runningActionsCount = 0;
var obj569_onTouchDown_loopCount = 0;
var obj569_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj569_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj569_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
var obj569_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj569_droppedInsideTargetActions_runningActionsCount = 0;
var obj569_droppedInsideTargetActions_loopCount = 0;
var obj578_onDrag_activeActionGroupIndex = -1;
var obj578_onDrag_runningActionsCount = 0;
var obj578_onDrag_loopCount = 0;
var obj578_onTouchDown_activeActionGroupIndex = -1;
var obj578_onTouchDown_runningActionsCount = 0;
var obj578_onTouchDown_loopCount = 0;
var obj578_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj578_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj578_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
var obj578_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj578_droppedInsideTargetActions_runningActionsCount = 0;
var obj578_droppedInsideTargetActions_loopCount = 0;
var obj587_onDrag_activeActionGroupIndex = -1;
var obj587_onDrag_runningActionsCount = 0;
var obj587_onDrag_loopCount = 0;
var obj587_onTouchDown_activeActionGroupIndex = -1;
var obj587_onTouchDown_runningActionsCount = 0;
var obj587_onTouchDown_loopCount = 0;
var obj587_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj587_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj587_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
var obj587_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj587_droppedInsideTargetActions_runningActionsCount = 0;
var obj587_droppedInsideTargetActions_loopCount = 0;
var obj596_onDrag_activeActionGroupIndex = -1;
var obj596_onDrag_runningActionsCount = 0;
var obj596_onDrag_loopCount = 0;
var obj596_onTouchDown_activeActionGroupIndex = -1;
var obj596_onTouchDown_runningActionsCount = 0;
var obj596_onTouchDown_loopCount = 0;
var obj596_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj596_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj596_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
var obj596_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj596_droppedInsideTargetActions_runningActionsCount = 0;
var obj596_droppedInsideTargetActions_loopCount = 0;
var obj605_onDrag_activeActionGroupIndex = -1;
var obj605_onDrag_runningActionsCount = 0;
var obj605_onDrag_loopCount = 0;
var obj605_onTouchDown_activeActionGroupIndex = -1;
var obj605_onTouchDown_runningActionsCount = 0;
var obj605_onTouchDown_loopCount = 0;
var obj605_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj605_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj605_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
var obj605_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj605_droppedInsideTargetActions_runningActionsCount = 0;
var obj605_droppedInsideTargetActions_loopCount = 0;
var obj614_onDrag_activeActionGroupIndex = -1;
var obj614_onDrag_runningActionsCount = 0;
var obj614_onDrag_loopCount = 0;
var obj614_onTouchDown_activeActionGroupIndex = -1;
var obj614_onTouchDown_runningActionsCount = 0;
var obj614_onTouchDown_loopCount = 0;
var obj614_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj614_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj614_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
var obj614_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj614_droppedInsideTargetActions_runningActionsCount = 0;
var obj614_droppedInsideTargetActions_loopCount = 0;
var obj623_onDrag_activeActionGroupIndex = -1;
var obj623_onDrag_runningActionsCount = 0;
var obj623_onDrag_loopCount = 0;
var obj623_onTouchDown_activeActionGroupIndex = -1;
var obj623_onTouchDown_runningActionsCount = 0;
var obj623_onTouchDown_loopCount = 0;
var obj623_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj623_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj623_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
var obj623_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj623_droppedInsideTargetActions_runningActionsCount = 0;
var obj623_droppedInsideTargetActions_loopCount = 0;
var obj632_onDrag_activeActionGroupIndex = -1;
var obj632_onDrag_runningActionsCount = 0;
var obj632_onDrag_loopCount = 0;
var obj632_onTouchDown_activeActionGroupIndex = -1;
var obj632_onTouchDown_runningActionsCount = 0;
var obj632_onTouchDown_loopCount = 0;
var obj632_SCActionDragDrop635_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj632_SCActionDragDrop635_droppedOutsideTargetActions_runningActionsCount = 0;
var obj632_SCActionDragDrop635_droppedOutsideTargetActions_loopCount = 0;
var obj632_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj632_droppedInsideTargetActions_runningActionsCount = 0;
var obj632_droppedInsideTargetActions_loopCount = 0;
var obj731_onShow_activeActionGroupIndex = -1;
var obj731_onShow_runningActionsCount = 0;
var obj731_onShow_loopCount = 0;
var obj844_onShow_activeActionGroupIndex = -1;
var obj844_onShow_runningActionsCount = 0;
var obj844_onShow_loopCount = 0;
var obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4208_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4208_SCEventCounterReachedTargetValue_loopCount = 0;
var obj6298_onShow_activeActionGroupIndex = -1;
var obj6298_onShow_runningActionsCount = 0;
var obj6298_onShow_loopCount = 0;
var obj4097_onTap_activeActionGroupIndex = -1;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj4208_counterValue = 0;
var obj4208_counterTargetValue = 9;
var obj4208_counterCanExceedTargetValue = false;
 $(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
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
		
obj559_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj559_onTouchDown_activeActionGroupIndex = -1;
		$("#obj559").trigger("obj559_onTouchDown_ended");
		
		return;
	}
	window.obj559_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj559");
//	action: dragDrop
//	target: obj559 
dragDrop_562();
function dragDrop_562() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj559_onTouchDown_runningActionsCount = obj559_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj559');
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
    	window.obj559_onTouchDown_runningActionsCount = window.obj559_onTouchDown_runningActionsCount - 1;
if (window.obj559_onTouchDown_runningActionsCount == 0) {
	obj559_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj541");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_562 = false;
    	var dropped_id_562;
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
					dropped_562 = true;
					dropped_id_562 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_562) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj559").trigger('SCActionDragDrop5744_droppedOutsideTargetActions');
		}
    });
}











};
obj559_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj559_onTouchDown_activeActionGroupIndex = -1;
		$("#obj559").trigger("obj559_onTouchDown_ended");
		
		return;
	}
	window.obj559_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj559_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj559_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj559").trigger("obj559_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj559_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj559 
rotate_568();
function rotate_568() {
	window.obj559_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = obj559_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj559";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj559';
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
	if (isInfinite) { rotate_568_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_568_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_568_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_568_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_568_completed() {
	setTimeout(function() {
		window.obj559_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = window.obj559_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj559_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj559_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj559_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj559_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj559").trigger("obj559_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj559_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj559_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj559").trigger("obj559_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj559_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj557 
show_564();
function show_564() {
	var element = "#obj557";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj559_droppedInsideTargetActions_runningActionsCount = obj559_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj559_droppedInsideTargetActions_runningActionsCount = window.obj559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj559_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj559_droppedInsideTargetActions_runningActionsCount = window.obj559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj559_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj559_droppedInsideTargetActions_runningActionsCount = window.obj559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj559_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj559_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj559").trigger("obj559_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj559_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj559 
hide_566();
function hide_566() {
	var element = "#obj559";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj559_droppedInsideTargetActions_runningActionsCount = obj559_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj559_droppedInsideTargetActions_runningActionsCount = window.obj559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj559_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_566(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj559_droppedInsideTargetActions_runningActionsCount = window.obj559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj559_droppedInsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj505 
show_565();
function show_565() {
	var element = "#obj505";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj559_droppedInsideTargetActions_runningActionsCount = obj559_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj559_droppedInsideTargetActions_runningActionsCount = window.obj559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj559_droppedInsideTargetActions_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj559_droppedInsideTargetActions_runningActionsCount = window.obj559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj559_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj559_droppedInsideTargetActions_runningActionsCount = window.obj559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj559_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj559_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj559").trigger("obj559_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj559_droppedInsideTargetActions_activeActionGroupIndex = 2;
	
















//	action: increment counter
//	target: obj4208 
incrementCounter_4218();
function incrementCounter_4218() {
	window.obj559_droppedInsideTargetActions_runningActionsCount = obj559_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4208_counterValue;
	obj4208_counterValue = obj4208_counterValue + 1;
	if (! obj4208_counterCanExceedTargetValue && obj4208_counterValue > obj4208_counterTargetValue) {
		obj4208_counterValue = obj4208_counterTargetValue;
	}
	if (oldValue != obj4208_counterValue) {
		$("#obj4208").trigger('SCEventCounterValueChange');
		$("#obj4208").trigger('SCEventCounterIncrease');
		if (obj4208_counterValue == obj4208_counterTargetValue)
			$("#obj4208").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj559_droppedInsideTargetActions_runningActionsCount = window.obj559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj559_droppedInsideTargetActions_actionGroup3();
} }, 1);
}





};
obj559_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj559").trigger("obj559_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj559_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj569_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj569_onTouchDown_activeActionGroupIndex = -1;
		$("#obj569").trigger("obj569_onTouchDown_ended");
		
		return;
	}
	window.obj569_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj569");
//	action: dragDrop
//	target: obj569 
dragDrop_572();
function dragDrop_572() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj569_onTouchDown_runningActionsCount = obj569_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj569');
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
    	window.obj569_onTouchDown_runningActionsCount = window.obj569_onTouchDown_runningActionsCount - 1;
if (window.obj569_onTouchDown_runningActionsCount == 0) {
	obj569_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj543");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_572 = false;
    	var dropped_id_572;
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
					dropped_572 = true;
					dropped_id_572 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_572) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj569").trigger('SCActionDragDrop5744_droppedOutsideTargetActions');
		}
    });
}











};
obj569_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj569_onTouchDown_activeActionGroupIndex = -1;
		$("#obj569").trigger("obj569_onTouchDown_ended");
		
		return;
	}
	window.obj569_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj569_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj569_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj569").trigger("obj569_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj569_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj569 
rotate_577();
function rotate_577() {
	window.obj569_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = obj569_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj569";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj569';
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
	if (isInfinite) { rotate_577_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_577_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_577_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_577_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_577_completed() {
	setTimeout(function() {
		window.obj569_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = window.obj569_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj569_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj569_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj569_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj569_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj569").trigger("obj569_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj569_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj569_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj569_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj569").trigger("obj569_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj569_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj569 
hide_575();
function hide_575() {
	var element = "#obj569";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj569_droppedInsideTargetActions_runningActionsCount = obj569_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj569_droppedInsideTargetActions_runningActionsCount = window.obj569_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj569_droppedInsideTargetActions_runningActionsCount == 0) {
	obj569_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_575(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj569_droppedInsideTargetActions_runningActionsCount = window.obj569_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj569_droppedInsideTargetActions_runningActionsCount == 0) {
	obj569_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj509 
show_574();
function show_574() {
	var element = "#obj509";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj569_droppedInsideTargetActions_runningActionsCount = obj569_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj569_droppedInsideTargetActions_runningActionsCount = window.obj569_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj569_droppedInsideTargetActions_runningActionsCount == 0) {
	obj569_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj569_droppedInsideTargetActions_runningActionsCount = window.obj569_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj569_droppedInsideTargetActions_runningActionsCount == 0) {
	obj569_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj569_droppedInsideTargetActions_runningActionsCount = window.obj569_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj569_droppedInsideTargetActions_runningActionsCount == 0) {
	obj569_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj569_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj569_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj569").trigger("obj569_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj569_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4208 
incrementCounter_4217();
function incrementCounter_4217() {
	window.obj569_droppedInsideTargetActions_runningActionsCount = obj569_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4208_counterValue;
	obj4208_counterValue = obj4208_counterValue + 1;
	if (! obj4208_counterCanExceedTargetValue && obj4208_counterValue > obj4208_counterTargetValue) {
		obj4208_counterValue = obj4208_counterTargetValue;
	}
	if (oldValue != obj4208_counterValue) {
		$("#obj4208").trigger('SCEventCounterValueChange');
		$("#obj4208").trigger('SCEventCounterIncrease');
		if (obj4208_counterValue == obj4208_counterTargetValue)
			$("#obj4208").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj569_droppedInsideTargetActions_runningActionsCount = window.obj569_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj569_droppedInsideTargetActions_runningActionsCount == 0) {
	obj569_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj569_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj569_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj569").trigger("obj569_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj569_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj578_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj578_onTouchDown_activeActionGroupIndex = -1;
		$("#obj578").trigger("obj578_onTouchDown_ended");
		
		return;
	}
	window.obj578_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj578");
//	action: dragDrop
//	target: obj578 
dragDrop_581();
function dragDrop_581() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj578_onTouchDown_runningActionsCount = obj578_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj578');
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
    	window.obj578_onTouchDown_runningActionsCount = window.obj578_onTouchDown_runningActionsCount - 1;
if (window.obj578_onTouchDown_runningActionsCount == 0) {
	obj578_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj545");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_581 = false;
    	var dropped_id_581;
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
					dropped_581 = true;
					dropped_id_581 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_581) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj578").trigger('SCActionDragDrop5744_droppedOutsideTargetActions');
		}
    });
}











};
obj578_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj578_onTouchDown_activeActionGroupIndex = -1;
		$("#obj578").trigger("obj578_onTouchDown_ended");
		
		return;
	}
	window.obj578_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj578_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj578_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj578").trigger("obj578_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj578_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj578 
rotate_586();
function rotate_586() {
	window.obj578_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = obj578_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj578";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj578';
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
	if (isInfinite) { rotate_586_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_586_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_586_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_586_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_586_completed() {
	setTimeout(function() {
		window.obj578_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = window.obj578_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj578_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj578_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj578_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj578_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj578").trigger("obj578_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj578_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj578_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj578_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj578").trigger("obj578_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj578_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj578 
hide_584();
function hide_584() {
	var element = "#obj578";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj578_droppedInsideTargetActions_runningActionsCount = obj578_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj578_droppedInsideTargetActions_runningActionsCount = window.obj578_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj578_droppedInsideTargetActions_runningActionsCount == 0) {
	obj578_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_584(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj578_droppedInsideTargetActions_runningActionsCount = window.obj578_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj578_droppedInsideTargetActions_runningActionsCount == 0) {
	obj578_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj513 
show_583();
function show_583() {
	var element = "#obj513";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj578_droppedInsideTargetActions_runningActionsCount = obj578_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj578_droppedInsideTargetActions_runningActionsCount = window.obj578_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj578_droppedInsideTargetActions_runningActionsCount == 0) {
	obj578_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj578_droppedInsideTargetActions_runningActionsCount = window.obj578_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj578_droppedInsideTargetActions_runningActionsCount == 0) {
	obj578_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj578_droppedInsideTargetActions_runningActionsCount = window.obj578_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj578_droppedInsideTargetActions_runningActionsCount == 0) {
	obj578_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj578_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj578_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj578").trigger("obj578_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj578_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4208 
incrementCounter_4216();
function incrementCounter_4216() {
	window.obj578_droppedInsideTargetActions_runningActionsCount = obj578_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4208_counterValue;
	obj4208_counterValue = obj4208_counterValue + 1;
	if (! obj4208_counterCanExceedTargetValue && obj4208_counterValue > obj4208_counterTargetValue) {
		obj4208_counterValue = obj4208_counterTargetValue;
	}
	if (oldValue != obj4208_counterValue) {
		$("#obj4208").trigger('SCEventCounterValueChange');
		$("#obj4208").trigger('SCEventCounterIncrease');
		if (obj4208_counterValue == obj4208_counterTargetValue)
			$("#obj4208").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj578_droppedInsideTargetActions_runningActionsCount = window.obj578_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj578_droppedInsideTargetActions_runningActionsCount == 0) {
	obj578_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj578_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj578_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj578").trigger("obj578_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj578_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj587_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj587_onTouchDown_activeActionGroupIndex = -1;
		$("#obj587").trigger("obj587_onTouchDown_ended");
		
		return;
	}
	window.obj587_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj587");
//	action: dragDrop
//	target: obj587 
dragDrop_590();
function dragDrop_590() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj587_onTouchDown_runningActionsCount = obj587_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj587');
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
    	window.obj587_onTouchDown_runningActionsCount = window.obj587_onTouchDown_runningActionsCount - 1;
if (window.obj587_onTouchDown_runningActionsCount == 0) {
	obj587_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj547");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_590 = false;
    	var dropped_id_590;
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
					dropped_590 = true;
					dropped_id_590 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_590) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj587").trigger('SCActionDragDrop5744_droppedOutsideTargetActions');
		}
    });
}











};
obj587_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj587_onTouchDown_activeActionGroupIndex = -1;
		$("#obj587").trigger("obj587_onTouchDown_ended");
		
		return;
	}
	window.obj587_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj587_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj587_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj587").trigger("obj587_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj587_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj587 
rotate_595();
function rotate_595() {
	window.obj587_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = obj587_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj587";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj587';
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
	if (isInfinite) { rotate_595_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_595_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_595_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_595_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_595_completed() {
	setTimeout(function() {
		window.obj587_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = window.obj587_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj587_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj587_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj587_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj587_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj587").trigger("obj587_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj587_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj587_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj587_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj587").trigger("obj587_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj587_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj587 
hide_593();
function hide_593() {
	var element = "#obj587";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj587_droppedInsideTargetActions_runningActionsCount = obj587_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj587_droppedInsideTargetActions_runningActionsCount = window.obj587_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj587_droppedInsideTargetActions_runningActionsCount == 0) {
	obj587_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_593(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj587_droppedInsideTargetActions_runningActionsCount = window.obj587_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj587_droppedInsideTargetActions_runningActionsCount == 0) {
	obj587_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj517 
show_592();
function show_592() {
	var element = "#obj517";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj587_droppedInsideTargetActions_runningActionsCount = obj587_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj587_droppedInsideTargetActions_runningActionsCount = window.obj587_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj587_droppedInsideTargetActions_runningActionsCount == 0) {
	obj587_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj587_droppedInsideTargetActions_runningActionsCount = window.obj587_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj587_droppedInsideTargetActions_runningActionsCount == 0) {
	obj587_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj587_droppedInsideTargetActions_runningActionsCount = window.obj587_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj587_droppedInsideTargetActions_runningActionsCount == 0) {
	obj587_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj587_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj587_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj587").trigger("obj587_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj587_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4208 
incrementCounter_4215();
function incrementCounter_4215() {
	window.obj587_droppedInsideTargetActions_runningActionsCount = obj587_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4208_counterValue;
	obj4208_counterValue = obj4208_counterValue + 1;
	if (! obj4208_counterCanExceedTargetValue && obj4208_counterValue > obj4208_counterTargetValue) {
		obj4208_counterValue = obj4208_counterTargetValue;
	}
	if (oldValue != obj4208_counterValue) {
		$("#obj4208").trigger('SCEventCounterValueChange');
		$("#obj4208").trigger('SCEventCounterIncrease');
		if (obj4208_counterValue == obj4208_counterTargetValue)
			$("#obj4208").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj587_droppedInsideTargetActions_runningActionsCount = window.obj587_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj587_droppedInsideTargetActions_runningActionsCount == 0) {
	obj587_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj587_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj587_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj587").trigger("obj587_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj587_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj596_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj596_onTouchDown_activeActionGroupIndex = -1;
		$("#obj596").trigger("obj596_onTouchDown_ended");
		
		return;
	}
	window.obj596_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj596");
//	action: dragDrop
//	target: obj596 
dragDrop_599();
function dragDrop_599() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj596_onTouchDown_runningActionsCount = obj596_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj596');
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
    	window.obj596_onTouchDown_runningActionsCount = window.obj596_onTouchDown_runningActionsCount - 1;
if (window.obj596_onTouchDown_runningActionsCount == 0) {
	obj596_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj549");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_599 = false;
    	var dropped_id_599;
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
					dropped_599 = true;
					dropped_id_599 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_599) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj596").trigger('SCActionDragDrop5744_droppedOutsideTargetActions');
		}
    });
}











};
obj596_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj596_onTouchDown_activeActionGroupIndex = -1;
		$("#obj596").trigger("obj596_onTouchDown_ended");
		
		return;
	}
	window.obj596_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj596_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj596_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj596").trigger("obj596_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj596_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj596 
rotate_604();
function rotate_604() {
	window.obj596_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = obj596_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj596";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj596';
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
	if (isInfinite) { rotate_604_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_604_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_604_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_604_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_604_completed() {
	setTimeout(function() {
		window.obj596_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = window.obj596_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj596_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj596_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj596_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj596_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj596").trigger("obj596_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj596_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj596_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj596").trigger("obj596_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj596_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj596 
hide_602();
function hide_602() {
	var element = "#obj596";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj596_droppedInsideTargetActions_runningActionsCount = obj596_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj596_droppedInsideTargetActions_runningActionsCount = window.obj596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj596_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_602(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj596_droppedInsideTargetActions_runningActionsCount = window.obj596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj596_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj525 
show_601();
function show_601() {
	var element = "#obj525";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj596_droppedInsideTargetActions_runningActionsCount = obj596_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj596_droppedInsideTargetActions_runningActionsCount = window.obj596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj596_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj596_droppedInsideTargetActions_runningActionsCount = window.obj596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj596_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj596_droppedInsideTargetActions_runningActionsCount = window.obj596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj596_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj596_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj596").trigger("obj596_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj596_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4208 
incrementCounter_4214();
function incrementCounter_4214() {
	window.obj596_droppedInsideTargetActions_runningActionsCount = obj596_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4208_counterValue;
	obj4208_counterValue = obj4208_counterValue + 1;
	if (! obj4208_counterCanExceedTargetValue && obj4208_counterValue > obj4208_counterTargetValue) {
		obj4208_counterValue = obj4208_counterTargetValue;
	}
	if (oldValue != obj4208_counterValue) {
		$("#obj4208").trigger('SCEventCounterValueChange');
		$("#obj4208").trigger('SCEventCounterIncrease');
		if (obj4208_counterValue == obj4208_counterTargetValue)
			$("#obj4208").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj596_droppedInsideTargetActions_runningActionsCount = window.obj596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj596_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj596_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj596").trigger("obj596_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj596_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj605_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj605_onTouchDown_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_onTouchDown_ended");
		
		return;
	}
	window.obj605_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj605");
//	action: dragDrop
//	target: obj605 
dragDrop_608();
function dragDrop_608() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj605_onTouchDown_runningActionsCount = obj605_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj605');
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
    	window.obj605_onTouchDown_runningActionsCount = window.obj605_onTouchDown_runningActionsCount - 1;
if (window.obj605_onTouchDown_runningActionsCount == 0) {
	obj605_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj551");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_608 = false;
    	var dropped_id_608;
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
					dropped_608 = true;
					dropped_id_608 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_608) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj605").trigger('SCActionDragDrop5744_droppedOutsideTargetActions');
		}
    });
}











};
obj605_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj605_onTouchDown_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_onTouchDown_ended");
		
		return;
	}
	window.obj605_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj605_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj605_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj605_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj605 
rotate_613();
function rotate_613() {
	window.obj605_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = obj605_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj605";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj605';
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
	if (isInfinite) { rotate_613_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_613_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_613_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_613_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_613_completed() {
	setTimeout(function() {
		window.obj605_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = window.obj605_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj605_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj605_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj605_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj605_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj605_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj605_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj605_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj605 
hide_611();
function hide_611() {
	var element = "#obj605";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj605_droppedInsideTargetActions_runningActionsCount = obj605_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj605_droppedInsideTargetActions_runningActionsCount = window.obj605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj605_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_611(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj605_droppedInsideTargetActions_runningActionsCount = window.obj605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj605_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj521 
show_610();
function show_610() {
	var element = "#obj521";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj605_droppedInsideTargetActions_runningActionsCount = obj605_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj605_droppedInsideTargetActions_runningActionsCount = window.obj605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj605_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj605_droppedInsideTargetActions_runningActionsCount = window.obj605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj605_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj605_droppedInsideTargetActions_runningActionsCount = window.obj605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj605_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj605_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj605_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4208 
incrementCounter_4213();
function incrementCounter_4213() {
	window.obj605_droppedInsideTargetActions_runningActionsCount = obj605_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4208_counterValue;
	obj4208_counterValue = obj4208_counterValue + 1;
	if (! obj4208_counterCanExceedTargetValue && obj4208_counterValue > obj4208_counterTargetValue) {
		obj4208_counterValue = obj4208_counterTargetValue;
	}
	if (oldValue != obj4208_counterValue) {
		$("#obj4208").trigger('SCEventCounterValueChange');
		$("#obj4208").trigger('SCEventCounterIncrease');
		if (obj4208_counterValue == obj4208_counterTargetValue)
			$("#obj4208").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj605_droppedInsideTargetActions_runningActionsCount = window.obj605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj605_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj605_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj605_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj614_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj614_onTouchDown_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_onTouchDown_ended");
		
		return;
	}
	window.obj614_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj614");
//	action: dragDrop
//	target: obj614 
dragDrop_617();
function dragDrop_617() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj614_onTouchDown_runningActionsCount = obj614_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj614');
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
    	window.obj614_onTouchDown_runningActionsCount = window.obj614_onTouchDown_runningActionsCount - 1;
if (window.obj614_onTouchDown_runningActionsCount == 0) {
	obj614_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj553");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_617 = false;
    	var dropped_id_617;
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
					dropped_617 = true;
					dropped_id_617 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_617) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj614").trigger('SCActionDragDrop5744_droppedOutsideTargetActions');
		}
    });
}











};
obj614_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj614_onTouchDown_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_onTouchDown_ended");
		
		return;
	}
	window.obj614_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj614_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj614_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj614_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj614 
rotate_622();
function rotate_622() {
	window.obj614_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = obj614_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj614";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj614';
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
	if (isInfinite) { rotate_622_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_622_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_622_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_622_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_622_completed() {
	setTimeout(function() {
		window.obj614_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = window.obj614_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj614_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj614_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj614_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj614_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj614_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj614_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj614_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj614_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj614 
hide_620();
function hide_620() {
	var element = "#obj614";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj614_droppedInsideTargetActions_runningActionsCount = obj614_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj614_droppedInsideTargetActions_runningActionsCount = window.obj614_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj614_droppedInsideTargetActions_runningActionsCount == 0) {
	obj614_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_620(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj614_droppedInsideTargetActions_runningActionsCount = window.obj614_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj614_droppedInsideTargetActions_runningActionsCount == 0) {
	obj614_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj529 
show_619();
function show_619() {
	var element = "#obj529";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj614_droppedInsideTargetActions_runningActionsCount = obj614_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj614_droppedInsideTargetActions_runningActionsCount = window.obj614_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj614_droppedInsideTargetActions_runningActionsCount == 0) {
	obj614_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj614_droppedInsideTargetActions_runningActionsCount = window.obj614_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj614_droppedInsideTargetActions_runningActionsCount == 0) {
	obj614_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj614_droppedInsideTargetActions_runningActionsCount = window.obj614_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj614_droppedInsideTargetActions_runningActionsCount == 0) {
	obj614_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj614_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj614_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj614_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4208 
incrementCounter_4212();
function incrementCounter_4212() {
	window.obj614_droppedInsideTargetActions_runningActionsCount = obj614_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4208_counterValue;
	obj4208_counterValue = obj4208_counterValue + 1;
	if (! obj4208_counterCanExceedTargetValue && obj4208_counterValue > obj4208_counterTargetValue) {
		obj4208_counterValue = obj4208_counterTargetValue;
	}
	if (oldValue != obj4208_counterValue) {
		$("#obj4208").trigger('SCEventCounterValueChange');
		$("#obj4208").trigger('SCEventCounterIncrease');
		if (obj4208_counterValue == obj4208_counterTargetValue)
			$("#obj4208").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj614_droppedInsideTargetActions_runningActionsCount = window.obj614_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj614_droppedInsideTargetActions_runningActionsCount == 0) {
	obj614_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj614_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj614_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj614_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj623_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj623_onTouchDown_activeActionGroupIndex = -1;
		$("#obj623").trigger("obj623_onTouchDown_ended");
		
		return;
	}
	window.obj623_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj623");
//	action: dragDrop
//	target: obj623 
dragDrop_626();
function dragDrop_626() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj623_onTouchDown_runningActionsCount = obj623_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj623');
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
    	window.obj623_onTouchDown_runningActionsCount = window.obj623_onTouchDown_runningActionsCount - 1;
if (window.obj623_onTouchDown_runningActionsCount == 0) {
	obj623_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj555");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_626 = false;
    	var dropped_id_626;
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
					dropped_626 = true;
					dropped_id_626 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_626) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj623").trigger('SCActionDragDrop5744_droppedOutsideTargetActions');
		}
    });
}











};
obj623_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj623_onTouchDown_activeActionGroupIndex = -1;
		$("#obj623").trigger("obj623_onTouchDown_ended");
		
		return;
	}
	window.obj623_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj623_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj623_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj623").trigger("obj623_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj623_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj623 
rotate_631();
function rotate_631() {
	window.obj623_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = obj623_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj623";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj623';
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
	if (isInfinite) { rotate_631_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_631_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_631_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_631_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_631_completed() {
	setTimeout(function() {
		window.obj623_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = window.obj623_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj623_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj623_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj623_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj623_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj623").trigger("obj623_SCActionDragDrop5744_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj623_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj623_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj623_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj623").trigger("obj623_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj623_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj623 
hide_629();
function hide_629() {
	var element = "#obj623";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj623_droppedInsideTargetActions_runningActionsCount = obj623_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj623_droppedInsideTargetActions_runningActionsCount = window.obj623_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj623_droppedInsideTargetActions_runningActionsCount == 0) {
	obj623_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_629(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj623_droppedInsideTargetActions_runningActionsCount = window.obj623_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj623_droppedInsideTargetActions_runningActionsCount == 0) {
	obj623_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj533 
show_628();
function show_628() {
	var element = "#obj533";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj623_droppedInsideTargetActions_runningActionsCount = obj623_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj623_droppedInsideTargetActions_runningActionsCount = window.obj623_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj623_droppedInsideTargetActions_runningActionsCount == 0) {
	obj623_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj623_droppedInsideTargetActions_runningActionsCount = window.obj623_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj623_droppedInsideTargetActions_runningActionsCount == 0) {
	obj623_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj623_droppedInsideTargetActions_runningActionsCount = window.obj623_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj623_droppedInsideTargetActions_runningActionsCount == 0) {
	obj623_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj623_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj623_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj623").trigger("obj623_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj623_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4208 
incrementCounter_4211();
function incrementCounter_4211() {
	window.obj623_droppedInsideTargetActions_runningActionsCount = obj623_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4208_counterValue;
	obj4208_counterValue = obj4208_counterValue + 1;
	if (! obj4208_counterCanExceedTargetValue && obj4208_counterValue > obj4208_counterTargetValue) {
		obj4208_counterValue = obj4208_counterTargetValue;
	}
	if (oldValue != obj4208_counterValue) {
		$("#obj4208").trigger('SCEventCounterValueChange');
		$("#obj4208").trigger('SCEventCounterIncrease');
		if (obj4208_counterValue == obj4208_counterTargetValue)
			$("#obj4208").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj623_droppedInsideTargetActions_runningActionsCount = window.obj623_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj623_droppedInsideTargetActions_runningActionsCount == 0) {
	obj623_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj623_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj623_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj623").trigger("obj623_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj623_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj632_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj632_onTouchDown_activeActionGroupIndex = -1;
		$("#obj632").trigger("obj632_onTouchDown_ended");
		
		return;
	}
	window.obj632_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj632");
//	action: dragDrop
//	target: obj632 
dragDrop_635();
function dragDrop_635() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj632_onTouchDown_runningActionsCount = obj632_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj632');
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
    	window.obj632_onTouchDown_runningActionsCount = window.obj632_onTouchDown_runningActionsCount - 1;
if (window.obj632_onTouchDown_runningActionsCount == 0) {
	obj632_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj557");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_635 = false;
    	var dropped_id_635;
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
					dropped_635 = true;
					dropped_id_635 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_635) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj632").trigger('SCActionDragDrop635_droppedOutsideTargetActions');
		}
    });
}











};
obj632_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj632_onTouchDown_activeActionGroupIndex = -1;
		$("#obj632").trigger("obj632_onTouchDown_ended");
		
		return;
	}
	window.obj632_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj632_SCActionDragDrop635_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj632_SCActionDragDrop635_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj632").trigger("obj632_SCActionDragDrop635_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj632_SCActionDragDrop635_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj632 
rotate_641();
function rotate_641() {
	window.obj632_SCActionDragDrop635_droppedOutsideTargetActions_runningActionsCount = obj632_SCActionDragDrop635_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj632";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj632';
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
	if (isInfinite) { rotate_641_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_641_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_641_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_641_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_641_completed() {
	setTimeout(function() {
		window.obj632_SCActionDragDrop635_droppedOutsideTargetActions_runningActionsCount = window.obj632_SCActionDragDrop635_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj632_SCActionDragDrop635_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj632_SCActionDragDrop635_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj632_SCActionDragDrop635_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj632_SCActionDragDrop635_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj632").trigger("obj632_SCActionDragDrop635_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj632_SCActionDragDrop635_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj632_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj632_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj632").trigger("obj632_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj632_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj557 
show_637();
function show_637() {
	var element = "#obj557";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj632_droppedInsideTargetActions_runningActionsCount = obj632_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj632_droppedInsideTargetActions_runningActionsCount = window.obj632_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj632_droppedInsideTargetActions_runningActionsCount == 0) {
	obj632_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj632_droppedInsideTargetActions_runningActionsCount = window.obj632_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj632_droppedInsideTargetActions_runningActionsCount == 0) {
	obj632_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj632_droppedInsideTargetActions_runningActionsCount = window.obj632_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj632_droppedInsideTargetActions_runningActionsCount == 0) {
	obj632_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj632_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj632_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj632").trigger("obj632_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj632_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj632 
hide_639();
function hide_639() {
	var element = "#obj632";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj632_droppedInsideTargetActions_runningActionsCount = obj632_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj632_droppedInsideTargetActions_runningActionsCount = window.obj632_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj632_droppedInsideTargetActions_runningActionsCount == 0) {
	obj632_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_639(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj632_droppedInsideTargetActions_runningActionsCount = window.obj632_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj632_droppedInsideTargetActions_runningActionsCount == 0) {
	obj632_droppedInsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj537 
show_638();
function show_638() {
	var element = "#obj537";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj632_droppedInsideTargetActions_runningActionsCount = obj632_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj632_droppedInsideTargetActions_runningActionsCount = window.obj632_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj632_droppedInsideTargetActions_runningActionsCount == 0) {
	obj632_droppedInsideTargetActions_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj632_droppedInsideTargetActions_runningActionsCount = window.obj632_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj632_droppedInsideTargetActions_runningActionsCount == 0) {
	obj632_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj632_droppedInsideTargetActions_runningActionsCount = window.obj632_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj632_droppedInsideTargetActions_runningActionsCount == 0) {
	obj632_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj632_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj632_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj632").trigger("obj632_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj632_droppedInsideTargetActions_activeActionGroupIndex = 2;
	
















//	action: increment counter
//	target: obj4208 
incrementCounter_4210();
function incrementCounter_4210() {
	window.obj632_droppedInsideTargetActions_runningActionsCount = obj632_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4208_counterValue;
	obj4208_counterValue = obj4208_counterValue + 1;
	if (! obj4208_counterCanExceedTargetValue && obj4208_counterValue > obj4208_counterTargetValue) {
		obj4208_counterValue = obj4208_counterTargetValue;
	}
	if (oldValue != obj4208_counterValue) {
		$("#obj4208").trigger('SCEventCounterValueChange');
		$("#obj4208").trigger('SCEventCounterIncrease');
		if (obj4208_counterValue == obj4208_counterTargetValue)
			$("#obj4208").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj632_droppedInsideTargetActions_runningActionsCount = window.obj632_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj632_droppedInsideTargetActions_runningActionsCount == 0) {
	obj632_droppedInsideTargetActions_actionGroup3();
} }, 1);
}





};
obj632_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj632_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj632").trigger("obj632_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj632_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj731_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj731_onShow_activeActionGroupIndex = -1;
		$("#obj731").trigger("obj731_onShow_ended");
		
		return;
	}
	window.obj731_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_822();
function wait_822() {
	window.obj731_onShow_runningActionsCount = obj731_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj731_onShow_runningActionsCount = window.obj731_onShow_runningActionsCount - 1;
if (window.obj731_onShow_runningActionsCount == 0) {
	obj731_onShow_actionGroup1();
}
	}, 5000);
}












};
obj731_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj731_onShow_activeActionGroupIndex = -1;
		$("#obj731").trigger("obj731_onShow_ended");
		
		return;
	}
	window.obj731_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj731 
hide_823();
function hide_823() {
	var element = "#obj731";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj731_onShow_runningActionsCount = obj731_onShow_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 60000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj731_onShow_runningActionsCount = window.obj731_onShow_runningActionsCount - 1;
if (window.obj731_onShow_runningActionsCount == 0) {
	obj731_onShow_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_823(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj731_onShow_runningActionsCount = window.obj731_onShow_runningActionsCount - 1;
if (window.obj731_onShow_runningActionsCount == 0) {
	obj731_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj731_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj731_onShow_activeActionGroupIndex = -1;
		$("#obj731").trigger("obj731_onShow_ended");
		
		return;
	}
	window.obj731_onShow_activeActionGroupIndex = 2;
	





















};
obj844_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj844_onShow_activeActionGroupIndex = -1;
		$("#obj844").trigger("obj844_onShow_ended");
		
		return;
	}
	window.obj844_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_847();
function wait_847() {
	window.obj844_onShow_runningActionsCount = obj844_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj844_onShow_runningActionsCount = window.obj844_onShow_runningActionsCount - 1;
if (window.obj844_onShow_runningActionsCount == 0) {
	obj844_onShow_actionGroup1();
}
	}, 5000);
}












};
obj844_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj844_onShow_activeActionGroupIndex = -1;
		$("#obj844").trigger("obj844_onShow_ended");
		
		return;
	}
	window.obj844_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj844 
hide_848();
function hide_848() {
	var element = "#obj844";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj844_onShow_runningActionsCount = obj844_onShow_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 10000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj844_onShow_runningActionsCount = window.obj844_onShow_runningActionsCount - 1;
if (window.obj844_onShow_runningActionsCount == 0) {
	obj844_onShow_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_848(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj844_onShow_runningActionsCount = window.obj844_onShow_runningActionsCount - 1;
if (window.obj844_onShow_runningActionsCount == 0) {
	obj844_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj844_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj844_onShow_activeActionGroupIndex = -1;
		$("#obj844").trigger("obj844_onShow_ended");
		
		return;
	}
	window.obj844_onShow_activeActionGroupIndex = 2;
	





















};
obj4208_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4208").trigger("obj4208_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj4221 
show_4223();
function show_4223() {
	var element = "#obj4221";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = obj4208_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4208_SCEventCounterReachedTargetValue_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4208_SCEventCounterReachedTargetValue_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4208_SCEventCounterReachedTargetValue_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4208_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4208").trigger("obj4208_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj6298 
show_4224();
function show_4224() {
	var element = "#obj6298";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = obj4208_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "bounceInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4208_SCEventCounterReachedTargetValue_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4208_SCEventCounterReachedTargetValue_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4208_SCEventCounterReachedTargetValue_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4208_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4208").trigger("obj4208_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	








//	action: wait
wait_4243();
function wait_4243() {
	window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = obj4208_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4208_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4208_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 2000);
}












};
obj4208_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4208").trigger("obj4208_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	
//	action: goToPage
//	target: page3
goToPage_4244();
function goToPage_4244() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj4208_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4208").trigger("obj4208_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	





















};
obj6298_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6298_onShow_activeActionGroupIndex = -1;
		$("#obj6298").trigger("obj6298_onShow_ended");
		
		return;
	}
	window.obj6298_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_6349();
function wait_6349() {
	window.obj6298_onShow_runningActionsCount = obj6298_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6298_onShow_runningActionsCount = window.obj6298_onShow_runningActionsCount - 1;
if (window.obj6298_onShow_runningActionsCount == 0) {
	obj6298_onShow_actionGroup1();
}
	}, 1700);
}












};
obj6298_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6298_onShow_activeActionGroupIndex = -1;
		$("#obj6298").trigger("obj6298_onShow_ended");
		
		return;
	}
	window.obj6298_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj6298 
hide_6350();
function hide_6350() {
	var element = "#obj6298";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6298_onShow_runningActionsCount = obj6298_onShow_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6298_onShow_runningActionsCount = window.obj6298_onShow_runningActionsCount - 1;
if (window.obj6298_onShow_runningActionsCount == 0) {
	obj6298_onShow_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_6350(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6298_onShow_runningActionsCount = window.obj6298_onShow_runningActionsCount - 1;
if (window.obj6298_onShow_runningActionsCount == 0) {
	obj6298_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj6298_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6298_onShow_activeActionGroupIndex = -1;
		$("#obj6298").trigger("obj6298_onShow_ended");
		
		return;
	}
	window.obj6298_onShow_activeActionGroupIndex = 2;
	





















};
obj4097_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4097_onTap_activeActionGroupIndex = -1;
		$("#obj4097").trigger("obj4097_onTap_ended");
		
		return;
	}
	window.obj4097_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_4099();
function goToPage_4099() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj4097_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4097_onTap_activeActionGroupIndex = -1;
		$("#obj4097").trigger("obj4097_onTap_ended");
		
		return;
	}
	window.obj4097_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		









































































































































/*
 *
 *   obj559: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj559");
	var winTarget = document.getElementById("obj559");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj559").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj559_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj559_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj559_onTouchDown_activeActionGroupIndex != -1) return;
var obj559_onTouchDown_runningActionsCount = 0;
var obj559_onTouchDown_loopCount = 0;
obj559_onTouchDown_actionGroup0();
});


/*
 *
 *   obj559: Event SCActionDragDrop5744_droppedOutsideTargetActions
 *
 */
$("#obj559").bind("SCActionDragDrop5744_droppedOutsideTargetActions", function(event) {
	if (window.obj559_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj559_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj559_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
obj559_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj559: Event droppedInsideTargetActions
 *
 */
$("#obj559").bind("droppedInsideTargetActions", function(event) {
	if (window.obj559_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj559_droppedInsideTargetActions_runningActionsCount = 0;
var obj559_droppedInsideTargetActions_loopCount = 0;
obj559_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj569: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj569");
	var winTarget = document.getElementById("obj569");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj569").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj569_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj569_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj569_onTouchDown_activeActionGroupIndex != -1) return;
var obj569_onTouchDown_runningActionsCount = 0;
var obj569_onTouchDown_loopCount = 0;
obj569_onTouchDown_actionGroup0();
});


/*
 *
 *   obj569: Event SCActionDragDrop5744_droppedOutsideTargetActions
 *
 */
$("#obj569").bind("SCActionDragDrop5744_droppedOutsideTargetActions", function(event) {
	if (window.obj569_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj569_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj569_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
obj569_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj569: Event droppedInsideTargetActions
 *
 */
$("#obj569").bind("droppedInsideTargetActions", function(event) {
	if (window.obj569_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj569_droppedInsideTargetActions_runningActionsCount = 0;
var obj569_droppedInsideTargetActions_loopCount = 0;
obj569_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj578: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj578");
	var winTarget = document.getElementById("obj578");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj578").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj578_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj578_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj578_onTouchDown_activeActionGroupIndex != -1) return;
var obj578_onTouchDown_runningActionsCount = 0;
var obj578_onTouchDown_loopCount = 0;
obj578_onTouchDown_actionGroup0();
});


/*
 *
 *   obj578: Event SCActionDragDrop5744_droppedOutsideTargetActions
 *
 */
$("#obj578").bind("SCActionDragDrop5744_droppedOutsideTargetActions", function(event) {
	if (window.obj578_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj578_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj578_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
obj578_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj578: Event droppedInsideTargetActions
 *
 */
$("#obj578").bind("droppedInsideTargetActions", function(event) {
	if (window.obj578_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj578_droppedInsideTargetActions_runningActionsCount = 0;
var obj578_droppedInsideTargetActions_loopCount = 0;
obj578_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj587: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj587");
	var winTarget = document.getElementById("obj587");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj587").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj587_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj587_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj587_onTouchDown_activeActionGroupIndex != -1) return;
var obj587_onTouchDown_runningActionsCount = 0;
var obj587_onTouchDown_loopCount = 0;
obj587_onTouchDown_actionGroup0();
});


/*
 *
 *   obj587: Event SCActionDragDrop5744_droppedOutsideTargetActions
 *
 */
$("#obj587").bind("SCActionDragDrop5744_droppedOutsideTargetActions", function(event) {
	if (window.obj587_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj587_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj587_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
obj587_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj587: Event droppedInsideTargetActions
 *
 */
$("#obj587").bind("droppedInsideTargetActions", function(event) {
	if (window.obj587_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj587_droppedInsideTargetActions_runningActionsCount = 0;
var obj587_droppedInsideTargetActions_loopCount = 0;
obj587_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj596: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj596");
	var winTarget = document.getElementById("obj596");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj596").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj596_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj596_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj596_onTouchDown_activeActionGroupIndex != -1) return;
var obj596_onTouchDown_runningActionsCount = 0;
var obj596_onTouchDown_loopCount = 0;
obj596_onTouchDown_actionGroup0();
});


/*
 *
 *   obj596: Event SCActionDragDrop5744_droppedOutsideTargetActions
 *
 */
$("#obj596").bind("SCActionDragDrop5744_droppedOutsideTargetActions", function(event) {
	if (window.obj596_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj596_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj596_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
obj596_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj596: Event droppedInsideTargetActions
 *
 */
$("#obj596").bind("droppedInsideTargetActions", function(event) {
	if (window.obj596_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj596_droppedInsideTargetActions_runningActionsCount = 0;
var obj596_droppedInsideTargetActions_loopCount = 0;
obj596_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj605: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj605");
	var winTarget = document.getElementById("obj605");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj605").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj605_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj605_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj605_onTouchDown_activeActionGroupIndex != -1) return;
var obj605_onTouchDown_runningActionsCount = 0;
var obj605_onTouchDown_loopCount = 0;
obj605_onTouchDown_actionGroup0();
});


/*
 *
 *   obj605: Event SCActionDragDrop5744_droppedOutsideTargetActions
 *
 */
$("#obj605").bind("SCActionDragDrop5744_droppedOutsideTargetActions", function(event) {
	if (window.obj605_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj605_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj605_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
obj605_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj605: Event droppedInsideTargetActions
 *
 */
$("#obj605").bind("droppedInsideTargetActions", function(event) {
	if (window.obj605_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj605_droppedInsideTargetActions_runningActionsCount = 0;
var obj605_droppedInsideTargetActions_loopCount = 0;
obj605_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj614: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj614");
	var winTarget = document.getElementById("obj614");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj614").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj614_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj614_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj614_onTouchDown_activeActionGroupIndex != -1) return;
var obj614_onTouchDown_runningActionsCount = 0;
var obj614_onTouchDown_loopCount = 0;
obj614_onTouchDown_actionGroup0();
});


/*
 *
 *   obj614: Event SCActionDragDrop5744_droppedOutsideTargetActions
 *
 */
$("#obj614").bind("SCActionDragDrop5744_droppedOutsideTargetActions", function(event) {
	if (window.obj614_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj614_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj614_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
obj614_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj614: Event droppedInsideTargetActions
 *
 */
$("#obj614").bind("droppedInsideTargetActions", function(event) {
	if (window.obj614_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj614_droppedInsideTargetActions_runningActionsCount = 0;
var obj614_droppedInsideTargetActions_loopCount = 0;
obj614_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj623: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj623");
	var winTarget = document.getElementById("obj623");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj623").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj623_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj623_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj623_onTouchDown_activeActionGroupIndex != -1) return;
var obj623_onTouchDown_runningActionsCount = 0;
var obj623_onTouchDown_loopCount = 0;
obj623_onTouchDown_actionGroup0();
});


/*
 *
 *   obj623: Event SCActionDragDrop5744_droppedOutsideTargetActions
 *
 */
$("#obj623").bind("SCActionDragDrop5744_droppedOutsideTargetActions", function(event) {
	if (window.obj623_SCActionDragDrop5744_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj623_SCActionDragDrop5744_droppedOutsideTargetActions_runningActionsCount = 0;
var obj623_SCActionDragDrop5744_droppedOutsideTargetActions_loopCount = 0;
obj623_SCActionDragDrop5744_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj623: Event droppedInsideTargetActions
 *
 */
$("#obj623").bind("droppedInsideTargetActions", function(event) {
	if (window.obj623_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj623_droppedInsideTargetActions_runningActionsCount = 0;
var obj623_droppedInsideTargetActions_loopCount = 0;
obj623_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj632: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj632");
	var winTarget = document.getElementById("obj632");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj632").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj632_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj632_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj632_onTouchDown_activeActionGroupIndex != -1) return;
var obj632_onTouchDown_runningActionsCount = 0;
var obj632_onTouchDown_loopCount = 0;
obj632_onTouchDown_actionGroup0();
});


/*
 *
 *   obj632: Event SCActionDragDrop635_droppedOutsideTargetActions
 *
 */
$("#obj632").bind("SCActionDragDrop635_droppedOutsideTargetActions", function(event) {
	if (window.obj632_SCActionDragDrop635_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj632_SCActionDragDrop635_droppedOutsideTargetActions_runningActionsCount = 0;
var obj632_SCActionDragDrop635_droppedOutsideTargetActions_loopCount = 0;
obj632_SCActionDragDrop635_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj632: Event droppedInsideTargetActions
 *
 */
$("#obj632").bind("droppedInsideTargetActions", function(event) {
	if (window.obj632_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj632_droppedInsideTargetActions_runningActionsCount = 0;
var obj632_droppedInsideTargetActions_loopCount = 0;
obj632_droppedInsideTargetActions_actionGroup0();
});












/*
 *
 *   obj731: Event Show
 *
 */
 
$("#obj731").bind('SCEventShow', function(event) {
	if (window.obj731_onShow_activeActionGroupIndex != -1) return;
var obj731_onShow_runningActionsCount = 0;
var obj731_onShow_loopCount = 0;
obj731_onShow_actionGroup0();
});







/*
 *
 *   obj844: Event Show
 *
 */
 
$("#obj844").bind('SCEventShow', function(event) {
	if (window.obj844_onShow_activeActionGroupIndex != -1) return;
var obj844_onShow_runningActionsCount = 0;
var obj844_onShow_loopCount = 0;
obj844_onShow_actionGroup0();
});









/*
 *
 *   obj4208: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj4208").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4208_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj4208_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4208_SCEventCounterReachedTargetValue_loopCount = 0;
obj4208_SCEventCounterReachedTargetValue_actionGroup0();
});












/*
 *
 *   obj6298: Event Show
 *
 */
 
$("#obj6298").bind('SCEventShow', function(event) {
	if (window.obj6298_onShow_activeActionGroupIndex != -1) return;
var obj6298_onShow_runningActionsCount = 0;
var obj6298_onShow_loopCount = 0;
obj6298_onShow_actionGroup0();
});





/*
 *
 *   obj4097: Event Touch Down
 *
 */
 
$("#obj4097").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4097_onTap_activeActionGroupIndex != -1) return;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
obj4097_onTap_actionGroup0();
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
	
$("#obj3263").trigger('SCEventShow');
$("#obj541").trigger('SCEventShow');
$("#obj543").trigger('SCEventShow');
$("#obj545").trigger('SCEventShow');
$("#obj547").trigger('SCEventShow');
$("#obj549").trigger('SCEventShow');
$("#obj551").trigger('SCEventShow');
$("#obj553").trigger('SCEventShow');
$("#obj555").trigger('SCEventShow');
$("#obj557").trigger('SCEventShow');
$("#obj559").trigger('SCEventShow');
$("#obj569").trigger('SCEventShow');
$("#obj578").trigger('SCEventShow');
$("#obj587").trigger('SCEventShow');
$("#obj596").trigger('SCEventShow');
$("#obj605").trigger('SCEventShow');
$("#obj614").trigger('SCEventShow');
$("#obj623").trigger('SCEventShow');
$("#obj632").trigger('SCEventShow');
$("#obj729").trigger('SCEventShow');
$("#obj731").trigger('SCEventShow');
$("#obj844").trigger('SCEventShow');
$("#obj4097").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});