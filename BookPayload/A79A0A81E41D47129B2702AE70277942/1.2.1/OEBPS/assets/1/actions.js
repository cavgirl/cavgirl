pubcoder.projectID = "C8F1025BA63743178FCE18A7655DC898";
pubcoder.project.id = "C8F1025BA63743178FCE18A7655DC898";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 4;
pubcoder.page.title = "4";
pubcoder.page.number = 1;
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
var obj18_onTap_activeActionGroupIndex = -1;
var obj18_onTap_runningActionsCount = 0;
var obj18_onTap_loopCount = 0;
var obj18_onDrag_activeActionGroupIndex = -1;
var obj18_onDrag_runningActionsCount = 0;
var obj18_onDrag_loopCount = 0;
var obj18_onTouchDown_activeActionGroupIndex = -1;
var obj18_onTouchDown_runningActionsCount = 0;
var obj18_onTouchDown_loopCount = 0;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj18_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj18_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj33_onDrag_activeActionGroupIndex = -1;
var obj33_onDrag_runningActionsCount = 0;
var obj33_onDrag_loopCount = 0;
var obj33_onTouchDown_activeActionGroupIndex = -1;
var obj33_onTouchDown_runningActionsCount = 0;
var obj33_onTouchDown_loopCount = 0;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj33_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj33_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj57_onTap_activeActionGroupIndex = -1;
var obj57_onTap_runningActionsCount = 0;
var obj57_onTap_loopCount = 0;
var obj57_onDrag_activeActionGroupIndex = -1;
var obj57_onDrag_runningActionsCount = 0;
var obj57_onDrag_loopCount = 0;
var obj57_onTouchDown_activeActionGroupIndex = -1;
var obj57_onTouchDown_runningActionsCount = 0;
var obj57_onTouchDown_loopCount = 0;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj57_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj57_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj72_onTap_activeActionGroupIndex = -1;
var obj72_onTap_runningActionsCount = 0;
var obj72_onTap_loopCount = 0;
var obj72_onDrag_activeActionGroupIndex = -1;
var obj72_onDrag_runningActionsCount = 0;
var obj72_onDrag_loopCount = 0;
var obj72_onTouchDown_activeActionGroupIndex = -1;
var obj72_onTouchDown_runningActionsCount = 0;
var obj72_onTouchDown_loopCount = 0;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj72_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj72_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj97_onTap_activeActionGroupIndex = -1;
var obj97_onTap_runningActionsCount = 0;
var obj97_onTap_loopCount = 0;
var obj97_onDrag_activeActionGroupIndex = -1;
var obj97_onDrag_runningActionsCount = 0;
var obj97_onDrag_loopCount = 0;
var obj97_onTouchDown_activeActionGroupIndex = -1;
var obj97_onTouchDown_runningActionsCount = 0;
var obj97_onTouchDown_loopCount = 0;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj97_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj97_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj112_onTap_activeActionGroupIndex = -1;
var obj112_onTap_runningActionsCount = 0;
var obj112_onTap_loopCount = 0;
var obj112_onDrag_activeActionGroupIndex = -1;
var obj112_onDrag_runningActionsCount = 0;
var obj112_onDrag_loopCount = 0;
var obj112_onTouchDown_activeActionGroupIndex = -1;
var obj112_onTouchDown_runningActionsCount = 0;
var obj112_onTouchDown_loopCount = 0;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj112_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj112_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj137_onTap_activeActionGroupIndex = -1;
var obj137_onTap_runningActionsCount = 0;
var obj137_onTap_loopCount = 0;
var obj137_onDrag_activeActionGroupIndex = -1;
var obj137_onDrag_runningActionsCount = 0;
var obj137_onDrag_loopCount = 0;
var obj137_onTouchDown_activeActionGroupIndex = -1;
var obj137_onTouchDown_runningActionsCount = 0;
var obj137_onTouchDown_loopCount = 0;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj137_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj137_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj162_onTap_activeActionGroupIndex = -1;
var obj162_onTap_runningActionsCount = 0;
var obj162_onTap_loopCount = 0;
var obj162_onDrag_activeActionGroupIndex = -1;
var obj162_onDrag_runningActionsCount = 0;
var obj162_onDrag_loopCount = 0;
var obj162_onTouchDown_activeActionGroupIndex = -1;
var obj162_onTouchDown_runningActionsCount = 0;
var obj162_onTouchDown_loopCount = 0;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj162_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj162_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj177_onTap_activeActionGroupIndex = -1;
var obj177_onTap_runningActionsCount = 0;
var obj177_onTap_loopCount = 0;
var obj177_onDrag_activeActionGroupIndex = -1;
var obj177_onDrag_runningActionsCount = 0;
var obj177_onDrag_loopCount = 0;
var obj177_onTouchDown_activeActionGroupIndex = -1;
var obj177_onTouchDown_runningActionsCount = 0;
var obj177_onTouchDown_loopCount = 0;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj177_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj177_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj193_onTap_activeActionGroupIndex = -1;
var obj193_onTap_runningActionsCount = 0;
var obj193_onTap_loopCount = 0;
var obj193_onDrag_activeActionGroupIndex = -1;
var obj193_onDrag_runningActionsCount = 0;
var obj193_onDrag_loopCount = 0;
var obj193_onTouchDown_activeActionGroupIndex = -1;
var obj193_onTouchDown_runningActionsCount = 0;
var obj193_onTouchDown_loopCount = 0;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj193_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj193_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj218_onShow_activeActionGroupIndex = -1;
var obj218_onShow_runningActionsCount = 0;
var obj218_onShow_loopCount = 0;
var obj230_onTap_activeActionGroupIndex = -1;
var obj230_onTap_runningActionsCount = 0;
var obj230_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj226_counterValue = 0;
var obj226_counterTargetValue = 10;
var obj226_counterCanExceedTargetValue = false;
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
		
obj18_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18_onTap_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_onTap_ended");
		
		return;
	}
	window.obj18_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_20();
function runjs_20() {
	window.obj18_onTap_runningActionsCount = obj18_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj18"));
	setTimeout(function() {
		window.obj18_onTap_runningActionsCount = window.obj18_onTap_runningActionsCount - 1;
if (window.obj18_onTap_runningActionsCount == 0) {
	obj18_onTap_actionGroup1();
}
	}, 1);
}






};
obj18_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18_onTap_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_onTap_ended");
		
		return;
	}
	window.obj18_onTap_activeActionGroupIndex = 1;
	





















};
obj18_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_onTouchDown_ended");
		
		return;
	}
	window.obj18_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_32();
function runjs_32() {
	window.obj18_onTouchDown_runningActionsCount = obj18_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj18"));
	setTimeout(function() {
		window.obj18_onTouchDown_runningActionsCount = window.obj18_onTouchDown_runningActionsCount - 1;
if (window.obj18_onTouchDown_runningActionsCount == 0) {
	obj18_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj18_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_onTouchDown_ended");
		
		return;
	}
	window.obj18_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj18");
//	action: dragDrop
//	target: obj18 
dragDrop_23();
function dragDrop_23() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj18_onTouchDown_runningActionsCount = obj18_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj18');
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
    	window.obj18_onTouchDown_runningActionsCount = window.obj18_onTouchDown_runningActionsCount - 1;
if (window.obj18_onTouchDown_runningActionsCount == 0) {
	obj18_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_23 = false;
    	var dropped_id_23;
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
					dropped_23 = true;
					dropped_id_23 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_23) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj18").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj18").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj18_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18_onTouchDown_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_onTouchDown_ended");
		
		return;
	}
	window.obj18_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj18 
move_29();
function move_29() {
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj18");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 229;
	var moveY = 1069;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_30();
function show_30() {
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj18 
move_29();
function move_29() {
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj18");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 229;
	var moveY = 1069;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_30();
function show_30() {
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj18_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj18_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_25();
function runjs_25() {
	window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj18"));
	setTimeout(function() {
		window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_26();
function runjs_26() {
	window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj18").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj18_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj18_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_27();
function incrementCounter_27() {
	window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj18_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj18_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj18").trigger("obj18_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj18_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj33_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj33_onTouchDown_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_onTouchDown_ended");
		
		return;
	}
	window.obj33_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55();
function runjs_55() {
	window.obj33_onTouchDown_runningActionsCount = obj33_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj33"));
	setTimeout(function() {
		window.obj33_onTouchDown_runningActionsCount = window.obj33_onTouchDown_runningActionsCount - 1;
if (window.obj33_onTouchDown_runningActionsCount == 0) {
	obj33_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj33_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj33_onTouchDown_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_onTouchDown_ended");
		
		return;
	}
	window.obj33_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj33");
//	action: dragDrop
//	target: obj33 
dragDrop_39();
function dragDrop_39() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj33_onTouchDown_runningActionsCount = obj33_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj33');
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
    	window.obj33_onTouchDown_runningActionsCount = window.obj33_onTouchDown_runningActionsCount - 1;
if (window.obj33_onTouchDown_runningActionsCount == 0) {
	obj33_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_39 = false;
    	var dropped_id_39;
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
					dropped_39 = true;
					dropped_id_39 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_39) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj33").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj33").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj33_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj33_onTouchDown_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_onTouchDown_ended");
		
		return;
	}
	window.obj33_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj33 
move_45();
function move_45() {
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj33");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 235;
	var moveY = 1090;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_46();
function show_46() {
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj33 
move_45();
function move_45() {
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj33");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 235;
	var moveY = 1090;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_46();
function show_46() {
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj33_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj33_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj33_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41();
function runjs_41() {
	window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj33"));
	setTimeout(function() {
		window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj33_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_42();
function runjs_42() {
	window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj33").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj33_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj33_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj33_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj33_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_43();
function incrementCounter_43() {
	window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj33_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj33_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj33_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj33").trigger("obj33_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj33_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj57_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj57_onTap_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_onTap_ended");
		
		return;
	}
	window.obj57_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_59();
function runjs_59() {
	window.obj57_onTap_runningActionsCount = obj57_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj57"));
	setTimeout(function() {
		window.obj57_onTap_runningActionsCount = window.obj57_onTap_runningActionsCount - 1;
if (window.obj57_onTap_runningActionsCount == 0) {
	obj57_onTap_actionGroup1();
}
	}, 1);
}






};
obj57_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj57_onTap_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_onTap_ended");
		
		return;
	}
	window.obj57_onTap_activeActionGroupIndex = 1;
	





















};
obj57_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj57_onTouchDown_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_onTouchDown_ended");
		
		return;
	}
	window.obj57_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71();
function runjs_71() {
	window.obj57_onTouchDown_runningActionsCount = obj57_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj57"));
	setTimeout(function() {
		window.obj57_onTouchDown_runningActionsCount = window.obj57_onTouchDown_runningActionsCount - 1;
if (window.obj57_onTouchDown_runningActionsCount == 0) {
	obj57_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj57_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj57_onTouchDown_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_onTouchDown_ended");
		
		return;
	}
	window.obj57_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj57");
//	action: dragDrop
//	target: obj57 
dragDrop_62();
function dragDrop_62() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj57_onTouchDown_runningActionsCount = obj57_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj57');
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
    	window.obj57_onTouchDown_runningActionsCount = window.obj57_onTouchDown_runningActionsCount - 1;
if (window.obj57_onTouchDown_runningActionsCount == 0) {
	obj57_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_62 = false;
    	var dropped_id_62;
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
					dropped_62 = true;
					dropped_id_62 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_62) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj57").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj57").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj57_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj57_onTouchDown_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_onTouchDown_ended");
		
		return;
	}
	window.obj57_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj57 
move_68();
function move_68() {
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj57");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 218;
	var moveY = 1105;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_69();
function show_69() {
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj57 
move_68();
function move_68() {
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj57");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 218;
	var moveY = 1105;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_69();
function show_69() {
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj57_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj57_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj57_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_64();
function runjs_64() {
	window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj57"));
	setTimeout(function() {
		window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj57_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_65();
function runjs_65() {
	window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj57").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj57_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj57_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj57_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj57_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_66();
function incrementCounter_66() {
	window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj57_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj57_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj57_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj57").trigger("obj57_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj57_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj72_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj72_onTap_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_onTap_ended");
		
		return;
	}
	window.obj72_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74();
function runjs_74() {
	window.obj72_onTap_runningActionsCount = obj72_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj72"));
	setTimeout(function() {
		window.obj72_onTap_runningActionsCount = window.obj72_onTap_runningActionsCount - 1;
if (window.obj72_onTap_runningActionsCount == 0) {
	obj72_onTap_actionGroup1();
}
	}, 1);
}






};
obj72_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj72_onTap_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_onTap_ended");
		
		return;
	}
	window.obj72_onTap_activeActionGroupIndex = 1;
	





















};
obj72_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj72_onTouchDown_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_onTouchDown_ended");
		
		return;
	}
	window.obj72_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_95();
function runjs_95() {
	window.obj72_onTouchDown_runningActionsCount = obj72_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj72"));
	setTimeout(function() {
		window.obj72_onTouchDown_runningActionsCount = window.obj72_onTouchDown_runningActionsCount - 1;
if (window.obj72_onTouchDown_runningActionsCount == 0) {
	obj72_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj72_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj72_onTouchDown_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_onTouchDown_ended");
		
		return;
	}
	window.obj72_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj72");
//	action: dragDrop
//	target: obj72 
dragDrop_79();
function dragDrop_79() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj72_onTouchDown_runningActionsCount = obj72_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj72');
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
    	window.obj72_onTouchDown_runningActionsCount = window.obj72_onTouchDown_runningActionsCount - 1;
if (window.obj72_onTouchDown_runningActionsCount == 0) {
	obj72_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_79 = false;
    	var dropped_id_79;
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
					dropped_79 = true;
					dropped_id_79 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_79) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj72").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj72").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj72_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj72_onTouchDown_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_onTouchDown_ended");
		
		return;
	}
	window.obj72_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj72 
move_85();
function move_85() {
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj72");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 229;
	var moveY = 1098;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_86();
function show_86() {
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj72 
move_85();
function move_85() {
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj72");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 229;
	var moveY = 1098;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_86();
function show_86() {
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj72_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj72_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj72_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81();
function runjs_81() {
	window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj72"));
	setTimeout(function() {
		window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj72_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_82();
function runjs_82() {
	window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj72").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj72_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj72_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj72_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj72_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_83();
function incrementCounter_83() {
	window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj72_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj72_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj72_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj72").trigger("obj72_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj72_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj97_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj97_onTap_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_onTap_ended");
		
		return;
	}
	window.obj97_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_99();
function runjs_99() {
	window.obj97_onTap_runningActionsCount = obj97_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj97"));
	setTimeout(function() {
		window.obj97_onTap_runningActionsCount = window.obj97_onTap_runningActionsCount - 1;
if (window.obj97_onTap_runningActionsCount == 0) {
	obj97_onTap_actionGroup1();
}
	}, 1);
}






};
obj97_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj97_onTap_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_onTap_ended");
		
		return;
	}
	window.obj97_onTap_activeActionGroupIndex = 1;
	





















};
obj97_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj97_onTouchDown_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_onTouchDown_ended");
		
		return;
	}
	window.obj97_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_111();
function runjs_111() {
	window.obj97_onTouchDown_runningActionsCount = obj97_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj97"));
	setTimeout(function() {
		window.obj97_onTouchDown_runningActionsCount = window.obj97_onTouchDown_runningActionsCount - 1;
if (window.obj97_onTouchDown_runningActionsCount == 0) {
	obj97_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj97_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj97_onTouchDown_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_onTouchDown_ended");
		
		return;
	}
	window.obj97_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj97");
//	action: dragDrop
//	target: obj97 
dragDrop_102();
function dragDrop_102() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj97_onTouchDown_runningActionsCount = obj97_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj97');
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
    	window.obj97_onTouchDown_runningActionsCount = window.obj97_onTouchDown_runningActionsCount - 1;
if (window.obj97_onTouchDown_runningActionsCount == 0) {
	obj97_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_102 = false;
    	var dropped_id_102;
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
					dropped_102 = true;
					dropped_id_102 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_102) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj97").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj97").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj97_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj97_onTouchDown_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_onTouchDown_ended");
		
		return;
	}
	window.obj97_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj97 
move_108();
function move_108() {
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj97");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 244;
	var moveY = 1075;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_109();
function show_109() {
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj97 
move_108();
function move_108() {
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj97");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 244;
	var moveY = 1075;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_109();
function show_109() {
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj97_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj97_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj97_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_104();
function runjs_104() {
	window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj97"));
	setTimeout(function() {
		window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj97_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_105();
function runjs_105() {
	window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj97").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj97_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj97_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj97_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj97_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_106();
function incrementCounter_106() {
	window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj97_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj97_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj97_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj97").trigger("obj97_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj97_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj112_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj112_onTap_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_onTap_ended");
		
		return;
	}
	window.obj112_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_114();
function runjs_114() {
	window.obj112_onTap_runningActionsCount = obj112_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj112"));
	setTimeout(function() {
		window.obj112_onTap_runningActionsCount = window.obj112_onTap_runningActionsCount - 1;
if (window.obj112_onTap_runningActionsCount == 0) {
	obj112_onTap_actionGroup1();
}
	}, 1);
}






};
obj112_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj112_onTap_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_onTap_ended");
		
		return;
	}
	window.obj112_onTap_activeActionGroupIndex = 1;
	





















};
obj112_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj112_onTouchDown_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_onTouchDown_ended");
		
		return;
	}
	window.obj112_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_135();
function runjs_135() {
	window.obj112_onTouchDown_runningActionsCount = obj112_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj112"));
	setTimeout(function() {
		window.obj112_onTouchDown_runningActionsCount = window.obj112_onTouchDown_runningActionsCount - 1;
if (window.obj112_onTouchDown_runningActionsCount == 0) {
	obj112_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj112_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj112_onTouchDown_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_onTouchDown_ended");
		
		return;
	}
	window.obj112_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj112");
//	action: dragDrop
//	target: obj112 
dragDrop_119();
function dragDrop_119() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj112_onTouchDown_runningActionsCount = obj112_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj112');
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
    	window.obj112_onTouchDown_runningActionsCount = window.obj112_onTouchDown_runningActionsCount - 1;
if (window.obj112_onTouchDown_runningActionsCount == 0) {
	obj112_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_119 = false;
    	var dropped_id_119;
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
					dropped_119 = true;
					dropped_id_119 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_119) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj112").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj112").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj112_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj112_onTouchDown_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_onTouchDown_ended");
		
		return;
	}
	window.obj112_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj112 
move_125();
function move_125() {
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj112");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 226;
	var moveY = 1075;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_126();
function show_126() {
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj112 
move_125();
function move_125() {
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj112");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 226;
	var moveY = 1075;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_126();
function show_126() {
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj112_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj112_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj112_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_121();
function runjs_121() {
	window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj112"));
	setTimeout(function() {
		window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj112_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_122();
function runjs_122() {
	window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj112").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj112_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj112_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj112_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj112_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_123();
function incrementCounter_123() {
	window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj112_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj112_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj112_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj112").trigger("obj112_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj112_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj137_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_onTap_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_onTap_ended");
		
		return;
	}
	window.obj137_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_139();
function runjs_139() {
	window.obj137_onTap_runningActionsCount = obj137_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj137"));
	setTimeout(function() {
		window.obj137_onTap_runningActionsCount = window.obj137_onTap_runningActionsCount - 1;
if (window.obj137_onTap_runningActionsCount == 0) {
	obj137_onTap_actionGroup1();
}
	}, 1);
}






};
obj137_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj137_onTap_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_onTap_ended");
		
		return;
	}
	window.obj137_onTap_activeActionGroupIndex = 1;
	





















};
obj137_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_onTouchDown_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_onTouchDown_ended");
		
		return;
	}
	window.obj137_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_160();
function runjs_160() {
	window.obj137_onTouchDown_runningActionsCount = obj137_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj137"));
	setTimeout(function() {
		window.obj137_onTouchDown_runningActionsCount = window.obj137_onTouchDown_runningActionsCount - 1;
if (window.obj137_onTouchDown_runningActionsCount == 0) {
	obj137_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj137_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_onTouchDown_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_onTouchDown_ended");
		
		return;
	}
	window.obj137_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj137");
//	action: dragDrop
//	target: obj137 
dragDrop_144();
function dragDrop_144() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj137_onTouchDown_runningActionsCount = obj137_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj137');
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
    	window.obj137_onTouchDown_runningActionsCount = window.obj137_onTouchDown_runningActionsCount - 1;
if (window.obj137_onTouchDown_runningActionsCount == 0) {
	obj137_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_144 = false;
    	var dropped_id_144;
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
					dropped_144 = true;
					dropped_id_144 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_144) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj137").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj137").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj137_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj137_onTouchDown_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_onTouchDown_ended");
		
		return;
	}
	window.obj137_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj137 
move_150();
function move_150() {
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj137");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 225;
	var moveY = 1097;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_151();
function show_151() {
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj137 
move_150();
function move_150() {
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj137");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 225;
	var moveY = 1097;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_151();
function show_151() {
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj137_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj137_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_146();
function runjs_146() {
	window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj137"));
	setTimeout(function() {
		window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj137_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_147();
function runjs_147() {
	window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj137").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj137_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj137_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj137_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj137_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_148();
function incrementCounter_148() {
	window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj137_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj137_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj137_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj137").trigger("obj137_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj137_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj162_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_onTap_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_onTap_ended");
		
		return;
	}
	window.obj162_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_164();
function runjs_164() {
	window.obj162_onTap_runningActionsCount = obj162_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj162"));
	setTimeout(function() {
		window.obj162_onTap_runningActionsCount = window.obj162_onTap_runningActionsCount - 1;
if (window.obj162_onTap_runningActionsCount == 0) {
	obj162_onTap_actionGroup1();
}
	}, 1);
}






};
obj162_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj162_onTap_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_onTap_ended");
		
		return;
	}
	window.obj162_onTap_activeActionGroupIndex = 1;
	





















};
obj162_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_onTouchDown_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_onTouchDown_ended");
		
		return;
	}
	window.obj162_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_176();
function runjs_176() {
	window.obj162_onTouchDown_runningActionsCount = obj162_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj162"));
	setTimeout(function() {
		window.obj162_onTouchDown_runningActionsCount = window.obj162_onTouchDown_runningActionsCount - 1;
if (window.obj162_onTouchDown_runningActionsCount == 0) {
	obj162_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj162_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_onTouchDown_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_onTouchDown_ended");
		
		return;
	}
	window.obj162_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj162");
//	action: dragDrop
//	target: obj162 
dragDrop_167();
function dragDrop_167() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj162_onTouchDown_runningActionsCount = obj162_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj162');
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
    	window.obj162_onTouchDown_runningActionsCount = window.obj162_onTouchDown_runningActionsCount - 1;
if (window.obj162_onTouchDown_runningActionsCount == 0) {
	obj162_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_167 = false;
    	var dropped_id_167;
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
					dropped_167 = true;
					dropped_id_167 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_167) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj162").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj162").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj162_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj162_onTouchDown_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_onTouchDown_ended");
		
		return;
	}
	window.obj162_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj162 
move_173();
function move_173() {
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj162");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 218;
	var moveY = 1112;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_174();
function show_174() {
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj162 
move_173();
function move_173() {
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj162");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 218;
	var moveY = 1112;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_174();
function show_174() {
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj162_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj162_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_169();
function runjs_169() {
	window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj162"));
	setTimeout(function() {
		window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj162_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_170();
function runjs_170() {
	window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj162").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj162_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj162_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj162_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj162_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_171();
function incrementCounter_171() {
	window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj162_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj162_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj162_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj162").trigger("obj162_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj162_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj177_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj177_onTap_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_onTap_ended");
		
		return;
	}
	window.obj177_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_179();
function runjs_179() {
	window.obj177_onTap_runningActionsCount = obj177_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj177"));
	setTimeout(function() {
		window.obj177_onTap_runningActionsCount = window.obj177_onTap_runningActionsCount - 1;
if (window.obj177_onTap_runningActionsCount == 0) {
	obj177_onTap_actionGroup1();
}
	}, 1);
}






};
obj177_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj177_onTap_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_onTap_ended");
		
		return;
	}
	window.obj177_onTap_activeActionGroupIndex = 1;
	





















};
obj177_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj177_onTouchDown_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_onTouchDown_ended");
		
		return;
	}
	window.obj177_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_192();
function runjs_192() {
	window.obj177_onTouchDown_runningActionsCount = obj177_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj177"));
	setTimeout(function() {
		window.obj177_onTouchDown_runningActionsCount = window.obj177_onTouchDown_runningActionsCount - 1;
if (window.obj177_onTouchDown_runningActionsCount == 0) {
	obj177_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj177_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj177_onTouchDown_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_onTouchDown_ended");
		
		return;
	}
	window.obj177_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj177");
//	action: dragDrop
//	target: obj177 
dragDrop_182();
function dragDrop_182() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj177_onTouchDown_runningActionsCount = obj177_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj177');
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
    	window.obj177_onTouchDown_runningActionsCount = window.obj177_onTouchDown_runningActionsCount - 1;
if (window.obj177_onTouchDown_runningActionsCount == 0) {
	obj177_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj16");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_182 = false;
    	var dropped_id_182;
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
					dropped_182 = true;
					dropped_id_182 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_182) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj177").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj177").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj177_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj177_onTouchDown_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_onTouchDown_ended");
		
		return;
	}
	window.obj177_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj177 
move_188();
function move_188() {
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj177");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 1086;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_189();
function show_189() {
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj177 
move_188();
function move_188() {
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj177");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 1086;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_189();
function show_189() {
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj177_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj177_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj177_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_184();
function runjs_184() {
	window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj177"));
	setTimeout(function() {
		window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj177_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_185();
function runjs_185() {
	window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj177").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj177_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj177_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj177_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj177_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_186();
function incrementCounter_186() {
	window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj177_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj177_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj177_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj177").trigger("obj177_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj177_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj193_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_onTap_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_onTap_ended");
		
		return;
	}
	window.obj193_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_195();
function runjs_195() {
	window.obj193_onTap_runningActionsCount = obj193_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj193"));
	setTimeout(function() {
		window.obj193_onTap_runningActionsCount = window.obj193_onTap_runningActionsCount - 1;
if (window.obj193_onTap_runningActionsCount == 0) {
	obj193_onTap_actionGroup1();
}
	}, 1);
}






};
obj193_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj193_onTap_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_onTap_ended");
		
		return;
	}
	window.obj193_onTap_activeActionGroupIndex = 1;
	





















};
obj193_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_onTouchDown_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_onTouchDown_ended");
		
		return;
	}
	window.obj193_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_216();
function runjs_216() {
	window.obj193_onTouchDown_runningActionsCount = obj193_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj193"));
	setTimeout(function() {
		window.obj193_onTouchDown_runningActionsCount = window.obj193_onTouchDown_runningActionsCount - 1;
if (window.obj193_onTouchDown_runningActionsCount == 0) {
	obj193_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj193_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_onTouchDown_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_onTouchDown_ended");
		
		return;
	}
	window.obj193_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj193");
//	action: dragDrop
//	target: obj193 
dragDrop_200();
function dragDrop_200() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj193_onTouchDown_runningActionsCount = obj193_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj193');
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
    	window.obj193_onTouchDown_runningActionsCount = window.obj193_onTouchDown_runningActionsCount - 1;
if (window.obj193_onTouchDown_runningActionsCount == 0) {
	obj193_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj14");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_200 = false;
    	var dropped_id_200;
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
					dropped_200 = true;
					dropped_id_200 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_200) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj193").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj193").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj193_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj193_onTouchDown_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_onTouchDown_ended");
		
		return;
	}
	window.obj193_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj193 
move_206();
function move_206() {
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj193");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 229;
	var moveY = 1086;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_207();
function show_207() {
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj193 
move_206();
function move_206() {
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj193");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 229;
	var moveY = 1086;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj218 
show_207();
function show_207() {
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj218").fadeIn(0, function() {
			setTimeout(function() {
				window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj193_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj193_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_202();
function runjs_202() {
	window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj193"));
	setTimeout(function() {
		window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj193_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_203();
function runjs_203() {
	window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj193").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj193_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj193_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj193_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj193_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj226 
incrementCounter_204();
function incrementCounter_204() {
	window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj226_counterValue;
	obj226_counterValue = obj226_counterValue + 1;
	if (! obj226_counterCanExceedTargetValue && obj226_counterValue > obj226_counterTargetValue) {
		obj226_counterValue = obj226_counterTargetValue;
	}
	if (oldValue != obj226_counterValue) {
		$("#obj226").trigger('SCEventCounterValueChange');
		$("#obj226").trigger('SCEventCounterIncrease');
		if (obj226_counterValue == obj226_counterTargetValue)
			$("#obj226").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj193_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj193_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj193_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj193").trigger("obj193_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj193_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj218_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj218_onShow_activeActionGroupIndex = -1;
		$("#obj218").trigger("obj218_onShow_ended");
		
		return;
	}
	window.obj218_onShow_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_221();
function runjs_221() {
	window.obj218_onShow_runningActionsCount = obj218_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj218"));
	setTimeout(function() {
		window.obj218_onShow_runningActionsCount = window.obj218_onShow_runningActionsCount - 1;
if (window.obj218_onShow_runningActionsCount == 0) {
	obj218_onShow_actionGroup1();
}
	}, 1);
}






};
obj218_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj218_onShow_activeActionGroupIndex = -1;
		$("#obj218").trigger("obj218_onShow_ended");
		
		return;
	}
	window.obj218_onShow_activeActionGroupIndex = 1;
	








//	action: wait
wait_222();
function wait_222() {
	window.obj218_onShow_runningActionsCount = obj218_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj218_onShow_runningActionsCount = window.obj218_onShow_runningActionsCount - 1;
if (window.obj218_onShow_runningActionsCount == 0) {
	obj218_onShow_actionGroup2();
}
	}, 1000);
}












};
obj218_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj218_onShow_activeActionGroupIndex = -1;
		$("#obj218").trigger("obj218_onShow_ended");
		
		return;
	}
	window.obj218_onShow_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj218 
hide_223();
function hide_223() {
	window.obj218_onShow_runningActionsCount = obj218_onShow_runningActionsCount + 1;
	$("#obj218").fadeOut(500, function() {
			setTimeout(function() {
				window.obj218_onShow_runningActionsCount = window.obj218_onShow_runningActionsCount - 1;
if (window.obj218_onShow_runningActionsCount == 0) {
	obj218_onShow_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj218_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj218_onShow_activeActionGroupIndex = -1;
		$("#obj218").trigger("obj218_onShow_ended");
		
		return;
	}
	window.obj218_onShow_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj218 
show_224();
function show_224() {
	window.obj218_onShow_runningActionsCount = obj218_onShow_runningActionsCount + 1;
	$("#obj218").fadeIn(500, function() {
			setTimeout(function() {
				window.obj218_onShow_runningActionsCount = window.obj218_onShow_runningActionsCount - 1;
if (window.obj218_onShow_runningActionsCount == 0) {
	obj218_onShow_actionGroup4();
}
				$("#obj218").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj218_onShow_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj218_onShow_activeActionGroupIndex = -1;
		$("#obj218").trigger("obj218_onShow_ended");
		
		return;
	}
	window.obj218_onShow_activeActionGroupIndex = 4;
	

//	action: hide
//	target: obj218 
hide_225();
function hide_225() {
	window.obj218_onShow_runningActionsCount = obj218_onShow_runningActionsCount + 1;
	$("#obj218").fadeOut(500, function() {
			setTimeout(function() {
				window.obj218_onShow_runningActionsCount = window.obj218_onShow_runningActionsCount - 1;
if (window.obj218_onShow_runningActionsCount == 0) {
	obj218_onShow_actionGroup5();
}
			}, 1);
		}
	);
}




















};
obj218_onShow_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj218_onShow_activeActionGroupIndex = -1;
		$("#obj218").trigger("obj218_onShow_ended");
		
		return;
	}
	window.obj218_onShow_activeActionGroupIndex = 5;
	





















};
obj230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj230_onTap_activeActionGroupIndex = -1;
		$("#obj230").trigger("obj230_onTap_ended");
		
		return;
	}
	window.obj230_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj236 
hide_232();
function hide_232() {
	window.obj230_onTap_runningActionsCount = obj230_onTap_runningActionsCount + 1;
	$("#obj236").fadeOut(0, function() {
			setTimeout(function() {
				window.obj230_onTap_runningActionsCount = window.obj230_onTap_runningActionsCount - 1;
if (window.obj230_onTap_runningActionsCount == 0) {
	obj230_onTap_actionGroup1();
}
			}, 1);
		}
	);
}

//	action: move
//	target: obj230 
move_233();
function move_233() {
	window.obj230_onTap_runningActionsCount = obj230_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj230");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1";
	var moveY = "+=-1312";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj230_onTap_runningActionsCount = window.obj230_onTap_runningActionsCount - 1;
if (window.obj230_onTap_runningActionsCount == 0) {
	obj230_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj230_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj230_onTap_activeActionGroupIndex = -1;
		$("#obj230").trigger("obj230_onTap_ended");
		
		return;
	}
	window.obj230_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj230 
hide_234();
function hide_234() {
	window.obj230_onTap_runningActionsCount = obj230_onTap_runningActionsCount + 1;
	$("#obj230").fadeOut(0, function() {
			setTimeout(function() {
				window.obj230_onTap_runningActionsCount = window.obj230_onTap_runningActionsCount - 1;
if (window.obj230_onTap_runningActionsCount == 0) {
	obj230_onTap_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj230_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj230_onTap_activeActionGroupIndex = -1;
		$("#obj230").trigger("obj230_onTap_ended");
		
		return;
	}
	window.obj230_onTap_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













































/*
 *
 *   obj18: Event Touch Down
 *
 */
 
$("#obj18").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj18_onTap_activeActionGroupIndex != -1) return;
var obj18_onTap_runningActionsCount = 0;
var obj18_onTap_loopCount = 0;
obj18_onTap_actionGroup0();
});

/*
 *
 *   obj18: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj18");
	var winTarget = document.getElementById("obj18");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj18").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj18_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj18_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj18_onTouchDown_activeActionGroupIndex != -1) return;
var obj18_onTouchDown_runningActionsCount = 0;
var obj18_onTouchDown_loopCount = 0;
obj18_onTouchDown_actionGroup0();
});


/*
 *
 *   obj18: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj18").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj18").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj18_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj18_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj18_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj18: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj18").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj18_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj18_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj18_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj18_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj33: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj33");
	var winTarget = document.getElementById("obj33");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj33").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj33_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj33_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj33_onTouchDown_activeActionGroupIndex != -1) return;
var obj33_onTouchDown_runningActionsCount = 0;
var obj33_onTouchDown_loopCount = 0;
obj33_onTouchDown_actionGroup0();
});


/*
 *
 *   obj33: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj33").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj33: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj33").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj33_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj33_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj33_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj33: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj33").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj33_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj33_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj33_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj33_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj57: Event Touch Down
 *
 */
 
$("#obj57").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj57_onTap_activeActionGroupIndex != -1) return;
var obj57_onTap_runningActionsCount = 0;
var obj57_onTap_loopCount = 0;
obj57_onTap_actionGroup0();
});

/*
 *
 *   obj57: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj57");
	var winTarget = document.getElementById("obj57");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj57").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj57_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj57_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj57_onTouchDown_activeActionGroupIndex != -1) return;
var obj57_onTouchDown_runningActionsCount = 0;
var obj57_onTouchDown_loopCount = 0;
obj57_onTouchDown_actionGroup0();
});


/*
 *
 *   obj57: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj57").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj57: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj57").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj57_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj57_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj57_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj57: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj57").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj57_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj57_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj57_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj57_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj72: Event Touch Down
 *
 */
 
$("#obj72").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj72_onTap_activeActionGroupIndex != -1) return;
var obj72_onTap_runningActionsCount = 0;
var obj72_onTap_loopCount = 0;
obj72_onTap_actionGroup0();
});

/*
 *
 *   obj72: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj72");
	var winTarget = document.getElementById("obj72");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj72").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj72_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj72_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj72_onTouchDown_activeActionGroupIndex != -1) return;
var obj72_onTouchDown_runningActionsCount = 0;
var obj72_onTouchDown_loopCount = 0;
obj72_onTouchDown_actionGroup0();
});


/*
 *
 *   obj72: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj72").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj72: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj72").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj72_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj72_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj72_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj72: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj72").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj72_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj72_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj72_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj72_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj97: Event Touch Down
 *
 */
 
$("#obj97").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj97_onTap_activeActionGroupIndex != -1) return;
var obj97_onTap_runningActionsCount = 0;
var obj97_onTap_loopCount = 0;
obj97_onTap_actionGroup0();
});

/*
 *
 *   obj97: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj97");
	var winTarget = document.getElementById("obj97");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj97").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj97_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj97_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj97_onTouchDown_activeActionGroupIndex != -1) return;
var obj97_onTouchDown_runningActionsCount = 0;
var obj97_onTouchDown_loopCount = 0;
obj97_onTouchDown_actionGroup0();
});


/*
 *
 *   obj97: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj97").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj97: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj97").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj97_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj97_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj97_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj97: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj97").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj97_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj97_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj97_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj97_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj112: Event Touch Down
 *
 */
 
$("#obj112").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj112_onTap_activeActionGroupIndex != -1) return;
var obj112_onTap_runningActionsCount = 0;
var obj112_onTap_loopCount = 0;
obj112_onTap_actionGroup0();
});

/*
 *
 *   obj112: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj112");
	var winTarget = document.getElementById("obj112");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj112").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj112_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj112_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj112_onTouchDown_activeActionGroupIndex != -1) return;
var obj112_onTouchDown_runningActionsCount = 0;
var obj112_onTouchDown_loopCount = 0;
obj112_onTouchDown_actionGroup0();
});


/*
 *
 *   obj112: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj112").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj112: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj112").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj112_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj112_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj112_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj112: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj112").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj112_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj112_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj112_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj112_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj137: Event Touch Down
 *
 */
 
$("#obj137").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj137_onTap_activeActionGroupIndex != -1) return;
var obj137_onTap_runningActionsCount = 0;
var obj137_onTap_loopCount = 0;
obj137_onTap_actionGroup0();
});

/*
 *
 *   obj137: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj137");
	var winTarget = document.getElementById("obj137");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj137").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj137_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj137_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj137_onTouchDown_activeActionGroupIndex != -1) return;
var obj137_onTouchDown_runningActionsCount = 0;
var obj137_onTouchDown_loopCount = 0;
obj137_onTouchDown_actionGroup0();
});


/*
 *
 *   obj137: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj137").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj137: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj137").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj137_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj137_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj137_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj137: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj137").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj137_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj137_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj137_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj137_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj162: Event Touch Down
 *
 */
 
$("#obj162").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj162_onTap_activeActionGroupIndex != -1) return;
var obj162_onTap_runningActionsCount = 0;
var obj162_onTap_loopCount = 0;
obj162_onTap_actionGroup0();
});

/*
 *
 *   obj162: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj162");
	var winTarget = document.getElementById("obj162");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj162").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj162_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj162_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj162_onTouchDown_activeActionGroupIndex != -1) return;
var obj162_onTouchDown_runningActionsCount = 0;
var obj162_onTouchDown_loopCount = 0;
obj162_onTouchDown_actionGroup0();
});


/*
 *
 *   obj162: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj162").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj162: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj162").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj162_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj162_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj162_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj162: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj162").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj162_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj162_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj162_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj162_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj177: Event Touch Down
 *
 */
 
$("#obj177").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj177_onTap_activeActionGroupIndex != -1) return;
var obj177_onTap_runningActionsCount = 0;
var obj177_onTap_loopCount = 0;
obj177_onTap_actionGroup0();
});

/*
 *
 *   obj177: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj177");
	var winTarget = document.getElementById("obj177");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj177").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj177_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj177_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj177_onTouchDown_activeActionGroupIndex != -1) return;
var obj177_onTouchDown_runningActionsCount = 0;
var obj177_onTouchDown_loopCount = 0;
obj177_onTouchDown_actionGroup0();
});


/*
 *
 *   obj177: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj177").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj177: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj177").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj177_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj177_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj177_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj177: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj177").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj177_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj177_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj177_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj177_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj193: Event Touch Down
 *
 */
 
$("#obj193").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj193_onTap_activeActionGroupIndex != -1) return;
var obj193_onTap_runningActionsCount = 0;
var obj193_onTap_loopCount = 0;
obj193_onTap_actionGroup0();
});

/*
 *
 *   obj193: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj193");
	var winTarget = document.getElementById("obj193");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj193").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj193_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj193_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj193_onTouchDown_activeActionGroupIndex != -1) return;
var obj193_onTouchDown_runningActionsCount = 0;
var obj193_onTouchDown_loopCount = 0;
obj193_onTouchDown_actionGroup0();
});


/*
 *
 *   obj193: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj193").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj193: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj193").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj193_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj193_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj193_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj193: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj193").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj193_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj193_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj193_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj193_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj218: Event Show
 *
 */
 
$("#obj218").bind('SCEventShow', function(event) {
	if (window.obj218_onShow_activeActionGroupIndex != -1) return;
var obj218_onShow_runningActionsCount = 0;
var obj218_onShow_loopCount = 0;
obj218_onShow_actionGroup0();
});












/*
 *
 *   obj230: Event Touch Down
 *
 */
 
$("#obj230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj230_onTap_activeActionGroupIndex != -1) return;
var obj230_onTap_runningActionsCount = 0;
var obj230_onTap_loopCount = 0;
obj230_onTap_actionGroup0();
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
	
$("#obj5").trigger('SCEventShow');
$("#obj8").trigger('SCEventShow');
$("#obj10").trigger('SCEventShow');
$("#obj12").trigger('SCEventShow');
$("#obj14").trigger('SCEventShow');
$("#obj16").trigger('SCEventShow');
$("#obj18").trigger('SCEventShow');
$("#obj33").trigger('SCEventShow');
$("#obj57").trigger('SCEventShow');
$("#obj72").trigger('SCEventShow');
$("#obj97").trigger('SCEventShow');
$("#obj112").trigger('SCEventShow');
$("#obj137").trigger('SCEventShow');
$("#obj162").trigger('SCEventShow');
$("#obj177").trigger('SCEventShow');
$("#obj193").trigger('SCEventShow');
$("#obj230").trigger('SCEventShow');
$("#obj236").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});