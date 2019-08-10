pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 205;
pubcoder.page.title = "3";
pubcoder.page.number = 3;
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
var obj794_onTap_activeActionGroupIndex = -1;
var obj794_onTap_runningActionsCount = 0;
var obj794_onTap_loopCount = 0;
var obj794_onDrag_activeActionGroupIndex = -1;
var obj794_onDrag_runningActionsCount = 0;
var obj794_onDrag_loopCount = 0;
var obj794_onTouchDown_activeActionGroupIndex = -1;
var obj794_onTouchDown_runningActionsCount = 0;
var obj794_onTouchDown_loopCount = 0;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj794_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj794_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj239_onDrag_activeActionGroupIndex = -1;
var obj239_onDrag_runningActionsCount = 0;
var obj239_onDrag_loopCount = 0;
var obj239_onTouchDown_activeActionGroupIndex = -1;
var obj239_onTouchDown_runningActionsCount = 0;
var obj239_onTouchDown_loopCount = 0;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj239_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj239_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj220_onTap_activeActionGroupIndex = -1;
var obj220_onTap_runningActionsCount = 0;
var obj220_onTap_loopCount = 0;
var obj220_onDrag_activeActionGroupIndex = -1;
var obj220_onDrag_runningActionsCount = 0;
var obj220_onDrag_loopCount = 0;
var obj220_onTouchDown_activeActionGroupIndex = -1;
var obj220_onTouchDown_runningActionsCount = 0;
var obj220_onTouchDown_loopCount = 0;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj220_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj220_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj772_onTap_activeActionGroupIndex = -1;
var obj772_onTap_runningActionsCount = 0;
var obj772_onTap_loopCount = 0;
var obj772_onDrag_activeActionGroupIndex = -1;
var obj772_onDrag_runningActionsCount = 0;
var obj772_onDrag_loopCount = 0;
var obj772_onTouchDown_activeActionGroupIndex = -1;
var obj772_onTouchDown_runningActionsCount = 0;
var obj772_onTouchDown_loopCount = 0;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj772_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj772_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj827_onTap_activeActionGroupIndex = -1;
var obj827_onTap_runningActionsCount = 0;
var obj827_onTap_loopCount = 0;
var obj827_onDrag_activeActionGroupIndex = -1;
var obj827_onDrag_runningActionsCount = 0;
var obj827_onDrag_loopCount = 0;
var obj827_onTouchDown_activeActionGroupIndex = -1;
var obj827_onTouchDown_runningActionsCount = 0;
var obj827_onTouchDown_loopCount = 0;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj827_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj827_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj871_onTap_activeActionGroupIndex = -1;
var obj871_onTap_runningActionsCount = 0;
var obj871_onTap_loopCount = 0;
var obj871_onDrag_activeActionGroupIndex = -1;
var obj871_onDrag_runningActionsCount = 0;
var obj871_onDrag_loopCount = 0;
var obj871_onTouchDown_activeActionGroupIndex = -1;
var obj871_onTouchDown_runningActionsCount = 0;
var obj871_onTouchDown_loopCount = 0;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj871_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj871_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj838_onTap_activeActionGroupIndex = -1;
var obj838_onTap_runningActionsCount = 0;
var obj838_onTap_loopCount = 0;
var obj838_onDrag_activeActionGroupIndex = -1;
var obj838_onDrag_runningActionsCount = 0;
var obj838_onDrag_loopCount = 0;
var obj838_onTouchDown_activeActionGroupIndex = -1;
var obj838_onTouchDown_runningActionsCount = 0;
var obj838_onTouchDown_loopCount = 0;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj838_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj838_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj893_onTap_activeActionGroupIndex = -1;
var obj893_onTap_runningActionsCount = 0;
var obj893_onTap_loopCount = 0;
var obj893_onDrag_activeActionGroupIndex = -1;
var obj893_onDrag_runningActionsCount = 0;
var obj893_onDrag_loopCount = 0;
var obj893_onTouchDown_activeActionGroupIndex = -1;
var obj893_onTouchDown_runningActionsCount = 0;
var obj893_onTouchDown_loopCount = 0;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj893_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj893_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj860_onTap_activeActionGroupIndex = -1;
var obj860_onTap_runningActionsCount = 0;
var obj860_onTap_loopCount = 0;
var obj860_onDrag_activeActionGroupIndex = -1;
var obj860_onDrag_runningActionsCount = 0;
var obj860_onDrag_loopCount = 0;
var obj860_onTouchDown_activeActionGroupIndex = -1;
var obj860_onTouchDown_runningActionsCount = 0;
var obj860_onTouchDown_loopCount = 0;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj860_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj860_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj805_onTap_activeActionGroupIndex = -1;
var obj805_onTap_runningActionsCount = 0;
var obj805_onTap_loopCount = 0;
var obj805_onDrag_activeActionGroupIndex = -1;
var obj805_onDrag_runningActionsCount = 0;
var obj805_onDrag_loopCount = 0;
var obj805_onTouchDown_activeActionGroupIndex = -1;
var obj805_onTouchDown_runningActionsCount = 0;
var obj805_onTouchDown_loopCount = 0;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj805_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj805_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj752_onShow_activeActionGroupIndex = -1;
var obj752_onShow_runningActionsCount = 0;
var obj752_onShow_loopCount = 0;
var obj954_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj954_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj954_SCEventCounterReachedTargetValue_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj954_counterValue = 0;
var obj954_counterTargetValue = 10;
var obj954_counterCanExceedTargetValue = false;
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
		
obj794_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj794_onTap_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_onTap_ended");
		
		return;
	}
	window.obj794_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_932();
function runjs_932() {
	window.obj794_onTap_runningActionsCount = obj794_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj794"));
	setTimeout(function() {
		window.obj794_onTap_runningActionsCount = window.obj794_onTap_runningActionsCount - 1;
if (window.obj794_onTap_runningActionsCount == 0) {
	obj794_onTap_actionGroup1();
}
	}, 1);
}






};
obj794_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj794_onTap_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_onTap_ended");
		
		return;
	}
	window.obj794_onTap_activeActionGroupIndex = 1;
	





















};
obj794_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj794_onTouchDown_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_onTouchDown_ended");
		
		return;
	}
	window.obj794_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_925();
function runjs_925() {
	window.obj794_onTouchDown_runningActionsCount = obj794_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj794"));
	setTimeout(function() {
		window.obj794_onTouchDown_runningActionsCount = window.obj794_onTouchDown_runningActionsCount - 1;
if (window.obj794_onTouchDown_runningActionsCount == 0) {
	obj794_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj794_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj794_onTouchDown_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_onTouchDown_ended");
		
		return;
	}
	window.obj794_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj794");
//	action: dragDrop
//	target: obj794 
dragDrop_798();
function dragDrop_798() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj794_onTouchDown_runningActionsCount = obj794_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj794');
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
    	window.obj794_onTouchDown_runningActionsCount = window.obj794_onTouchDown_runningActionsCount - 1;
if (window.obj794_onTouchDown_runningActionsCount == 0) {
	obj794_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj744");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_798 = false;
    	var dropped_id_798;
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
					dropped_798 = true;
					dropped_id_798 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_798) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj794").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj794").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj794_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj794_onTouchDown_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_onTouchDown_ended");
		
		return;
	}
	window.obj794_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj794 
move_803();
function move_803() {
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj794");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 256;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_804();
function show_804() {
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj794 
move_803();
function move_803() {
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj794");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 256;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_804();
function show_804() {
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj794_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj794_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj794_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1389();
function runjs_1389() {
	window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj794"));
	setTimeout(function() {
		window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj794_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_800();
function runjs_800() {
	window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj794").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj794_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj794_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj794_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj794_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_965();
function incrementCounter_965() {
	window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj794_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj794_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj794_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj794").trigger("obj794_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj794_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj239_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_onTouchDown_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_onTouchDown_ended");
		
		return;
	}
	window.obj239_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_926();
function runjs_926() {
	window.obj239_onTouchDown_runningActionsCount = obj239_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj239"));
	setTimeout(function() {
		window.obj239_onTouchDown_runningActionsCount = window.obj239_onTouchDown_runningActionsCount - 1;
if (window.obj239_onTouchDown_runningActionsCount == 0) {
	obj239_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj239_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_onTouchDown_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_onTouchDown_ended");
		
		return;
	}
	window.obj239_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj239");
//	action: dragDrop
//	target: obj239 
dragDrop_764();
function dragDrop_764() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj239_onTouchDown_runningActionsCount = obj239_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj239');
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
    	window.obj239_onTouchDown_runningActionsCount = window.obj239_onTouchDown_runningActionsCount - 1;
if (window.obj239_onTouchDown_runningActionsCount == 0) {
	obj239_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj742");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_764 = false;
    	var dropped_id_764;
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
					dropped_764 = true;
					dropped_id_764 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_764) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj239").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj239").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj239_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj239_onTouchDown_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_onTouchDown_ended");
		
		return;
	}
	window.obj239_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj239 
move_769();
function move_769() {
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 199;
	var moveY = 273;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_770();
function show_770() {
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj239 
move_769();
function move_769() {
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 199;
	var moveY = 273;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_770();
function show_770() {
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj239_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj239_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1390();
function runjs_1390() {
	window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj239"));
	setTimeout(function() {
		window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj239_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_766();
function runjs_766() {
	window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj239").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj239_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj239_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj239_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_964();
function incrementCounter_964() {
	window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj239_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj239_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj239_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj239_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj220_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_onTap_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onTap_ended");
		
		return;
	}
	window.obj220_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_950();
function runjs_950() {
	window.obj220_onTap_runningActionsCount = obj220_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj220"));
	setTimeout(function() {
		window.obj220_onTap_runningActionsCount = window.obj220_onTap_runningActionsCount - 1;
if (window.obj220_onTap_runningActionsCount == 0) {
	obj220_onTap_actionGroup1();
}
	}, 1);
}






};
obj220_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj220_onTap_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onTap_ended");
		
		return;
	}
	window.obj220_onTap_activeActionGroupIndex = 1;
	





















};
obj220_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_onTouchDown_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onTouchDown_ended");
		
		return;
	}
	window.obj220_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_951();
function runjs_951() {
	window.obj220_onTouchDown_runningActionsCount = obj220_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj220"));
	setTimeout(function() {
		window.obj220_onTouchDown_runningActionsCount = window.obj220_onTouchDown_runningActionsCount - 1;
if (window.obj220_onTouchDown_runningActionsCount == 0) {
	obj220_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj220_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_onTouchDown_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onTouchDown_ended");
		
		return;
	}
	window.obj220_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj220");
//	action: dragDrop
//	target: obj220 
dragDrop_747();
function dragDrop_747() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj220_onTouchDown_runningActionsCount = obj220_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj220');
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
    	window.obj220_onTouchDown_runningActionsCount = window.obj220_onTouchDown_runningActionsCount - 1;
if (window.obj220_onTouchDown_runningActionsCount == 0) {
	obj220_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj744");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_747 = false;
    	var dropped_id_747;
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
					dropped_747 = true;
					dropped_id_747 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_747) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj220").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj220").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj220_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj220_onTouchDown_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onTouchDown_ended");
		
		return;
	}
	window.obj220_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj220 
move_755();
function move_755() {
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj220");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 195;
	var moveY = 266;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_756();
function show_756() {
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj220 
move_755();
function move_755() {
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj220");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 195;
	var moveY = 266;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_756();
function show_756() {
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj220_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj220_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1391();
function runjs_1391() {
	window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj220"));
	setTimeout(function() {
		window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj220_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_749();
function runjs_749() {
	window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj220").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj220_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj220_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj220_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_963();
function incrementCounter_963() {
	window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj220_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj220_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj220_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj220_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj772_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj772_onTap_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_onTap_ended");
		
		return;
	}
	window.obj772_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_948();
function runjs_948() {
	window.obj772_onTap_runningActionsCount = obj772_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj772"));
	setTimeout(function() {
		window.obj772_onTap_runningActionsCount = window.obj772_onTap_runningActionsCount - 1;
if (window.obj772_onTap_runningActionsCount == 0) {
	obj772_onTap_actionGroup1();
}
	}, 1);
}






};
obj772_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj772_onTap_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_onTap_ended");
		
		return;
	}
	window.obj772_onTap_activeActionGroupIndex = 1;
	





















};
obj772_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj772_onTouchDown_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_onTouchDown_ended");
		
		return;
	}
	window.obj772_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_949();
function runjs_949() {
	window.obj772_onTouchDown_runningActionsCount = obj772_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj772"));
	setTimeout(function() {
		window.obj772_onTouchDown_runningActionsCount = window.obj772_onTouchDown_runningActionsCount - 1;
if (window.obj772_onTouchDown_runningActionsCount == 0) {
	obj772_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj772_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj772_onTouchDown_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_onTouchDown_ended");
		
		return;
	}
	window.obj772_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj772");
//	action: dragDrop
//	target: obj772 
dragDrop_778();
function dragDrop_778() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj772_onTouchDown_runningActionsCount = obj772_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj772');
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
    	window.obj772_onTouchDown_runningActionsCount = window.obj772_onTouchDown_runningActionsCount - 1;
if (window.obj772_onTouchDown_runningActionsCount == 0) {
	obj772_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj742");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_778 = false;
    	var dropped_id_778;
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
					dropped_778 = true;
					dropped_id_778 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_778) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj772").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj772").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj772_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj772_onTouchDown_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_onTouchDown_ended");
		
		return;
	}
	window.obj772_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj772 
move_783();
function move_783() {
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj772");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 198;
	var moveY = 271;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_784();
function show_784() {
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj772 
move_783();
function move_783() {
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj772");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 198;
	var moveY = 271;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_784();
function show_784() {
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj772_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj772_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj772_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1392();
function runjs_1392() {
	window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj772"));
	setTimeout(function() {
		window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj772_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_780();
function runjs_780() {
	window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj772").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj772_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj772_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj772_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj772_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_962();
function incrementCounter_962() {
	window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj772_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj772_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj772_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj772").trigger("obj772_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj772_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj827_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onTap_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTap_ended");
		
		return;
	}
	window.obj827_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_945();
function runjs_945() {
	window.obj827_onTap_runningActionsCount = obj827_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj827"));
	setTimeout(function() {
		window.obj827_onTap_runningActionsCount = window.obj827_onTap_runningActionsCount - 1;
if (window.obj827_onTap_runningActionsCount == 0) {
	obj827_onTap_actionGroup1();
}
	}, 1);
}






};
obj827_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj827_onTap_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTap_ended");
		
		return;
	}
	window.obj827_onTap_activeActionGroupIndex = 1;
	





















};
obj827_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onTouchDown_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTouchDown_ended");
		
		return;
	}
	window.obj827_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_947();
function runjs_947() {
	window.obj827_onTouchDown_runningActionsCount = obj827_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj827"));
	setTimeout(function() {
		window.obj827_onTouchDown_runningActionsCount = window.obj827_onTouchDown_runningActionsCount - 1;
if (window.obj827_onTouchDown_runningActionsCount == 0) {
	obj827_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj827_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onTouchDown_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTouchDown_ended");
		
		return;
	}
	window.obj827_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj827");
//	action: dragDrop
//	target: obj827 
dragDrop_831();
function dragDrop_831() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj827_onTouchDown_runningActionsCount = obj827_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj827');
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
    	window.obj827_onTouchDown_runningActionsCount = window.obj827_onTouchDown_runningActionsCount - 1;
if (window.obj827_onTouchDown_runningActionsCount == 0) {
	obj827_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj744");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_831 = false;
    	var dropped_id_831;
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
					dropped_831 = true;
					dropped_id_831 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_831) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj827").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj827").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj827_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj827_onTouchDown_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onTouchDown_ended");
		
		return;
	}
	window.obj827_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj827 
move_836();
function move_836() {
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj827");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 260;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_837();
function show_837() {
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj827 
move_836();
function move_836() {
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj827");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 260;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_837();
function show_837() {
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj827_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj827_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1393();
function runjs_1393() {
	window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj827"));
	setTimeout(function() {
		window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj827_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_833();
function runjs_833() {
	window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj827").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj827_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj827_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj827_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_961();
function incrementCounter_961() {
	window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj827_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj827_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj827_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj827_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj871_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj871_onTap_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_onTap_ended");
		
		return;
	}
	window.obj871_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_943();
function runjs_943() {
	window.obj871_onTap_runningActionsCount = obj871_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj871"));
	setTimeout(function() {
		window.obj871_onTap_runningActionsCount = window.obj871_onTap_runningActionsCount - 1;
if (window.obj871_onTap_runningActionsCount == 0) {
	obj871_onTap_actionGroup1();
}
	}, 1);
}






};
obj871_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj871_onTap_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_onTap_ended");
		
		return;
	}
	window.obj871_onTap_activeActionGroupIndex = 1;
	





















};
obj871_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj871_onTouchDown_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_onTouchDown_ended");
		
		return;
	}
	window.obj871_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_944();
function runjs_944() {
	window.obj871_onTouchDown_runningActionsCount = obj871_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj871"));
	setTimeout(function() {
		window.obj871_onTouchDown_runningActionsCount = window.obj871_onTouchDown_runningActionsCount - 1;
if (window.obj871_onTouchDown_runningActionsCount == 0) {
	obj871_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj871_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj871_onTouchDown_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_onTouchDown_ended");
		
		return;
	}
	window.obj871_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj871");
//	action: dragDrop
//	target: obj871 
dragDrop_877();
function dragDrop_877() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj871_onTouchDown_runningActionsCount = obj871_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj871');
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
    	window.obj871_onTouchDown_runningActionsCount = window.obj871_onTouchDown_runningActionsCount - 1;
if (window.obj871_onTouchDown_runningActionsCount == 0) {
	obj871_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj742");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_877 = false;
    	var dropped_id_877;
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
					dropped_877 = true;
					dropped_id_877 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_877) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj871").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj871").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj871_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj871_onTouchDown_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_onTouchDown_ended");
		
		return;
	}
	window.obj871_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj871 
move_882();
function move_882() {
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj871");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 198;
	var moveY = 273;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_883();
function show_883() {
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj871 
move_882();
function move_882() {
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj871");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 198;
	var moveY = 273;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_883();
function show_883() {
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj871_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj871_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj871_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1394();
function runjs_1394() {
	window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj871"));
	setTimeout(function() {
		window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj871_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_879();
function runjs_879() {
	window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj871").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj871_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj871_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj871_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj871_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_960();
function incrementCounter_960() {
	window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj871_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj871_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj871_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj871").trigger("obj871_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj871_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj838_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj838_onTap_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_onTap_ended");
		
		return;
	}
	window.obj838_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_941();
function runjs_941() {
	window.obj838_onTap_runningActionsCount = obj838_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj838"));
	setTimeout(function() {
		window.obj838_onTap_runningActionsCount = window.obj838_onTap_runningActionsCount - 1;
if (window.obj838_onTap_runningActionsCount == 0) {
	obj838_onTap_actionGroup1();
}
	}, 1);
}






};
obj838_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj838_onTap_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_onTap_ended");
		
		return;
	}
	window.obj838_onTap_activeActionGroupIndex = 1;
	





















};
obj838_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj838_onTouchDown_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_onTouchDown_ended");
		
		return;
	}
	window.obj838_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_942();
function runjs_942() {
	window.obj838_onTouchDown_runningActionsCount = obj838_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj838"));
	setTimeout(function() {
		window.obj838_onTouchDown_runningActionsCount = window.obj838_onTouchDown_runningActionsCount - 1;
if (window.obj838_onTouchDown_runningActionsCount == 0) {
	obj838_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj838_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj838_onTouchDown_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_onTouchDown_ended");
		
		return;
	}
	window.obj838_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj838");
//	action: dragDrop
//	target: obj838 
dragDrop_844();
function dragDrop_844() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj838_onTouchDown_runningActionsCount = obj838_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj838');
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
    	window.obj838_onTouchDown_runningActionsCount = window.obj838_onTouchDown_runningActionsCount - 1;
if (window.obj838_onTouchDown_runningActionsCount == 0) {
	obj838_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj742");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_844 = false;
    	var dropped_id_844;
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
					dropped_844 = true;
					dropped_id_844 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_844) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj838").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj838").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj838_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj838_onTouchDown_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_onTouchDown_ended");
		
		return;
	}
	window.obj838_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj838 
move_849();
function move_849() {
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj838");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 199;
	var moveY = 274;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_850();
function show_850() {
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj838 
move_849();
function move_849() {
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj838");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 199;
	var moveY = 274;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_850();
function show_850() {
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj838_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj838_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj838_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1395();
function runjs_1395() {
	window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj838"));
	setTimeout(function() {
		window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj838_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_846();
function runjs_846() {
	window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj838").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj838_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj838_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj838_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj838_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_959();
function incrementCounter_959() {
	window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj838_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj838_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj838_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj838").trigger("obj838_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj838_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj893_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj893_onTap_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_onTap_ended");
		
		return;
	}
	window.obj893_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_938();
function runjs_938() {
	window.obj893_onTap_runningActionsCount = obj893_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj893"));
	setTimeout(function() {
		window.obj893_onTap_runningActionsCount = window.obj893_onTap_runningActionsCount - 1;
if (window.obj893_onTap_runningActionsCount == 0) {
	obj893_onTap_actionGroup1();
}
	}, 1);
}






};
obj893_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj893_onTap_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_onTap_ended");
		
		return;
	}
	window.obj893_onTap_activeActionGroupIndex = 1;
	





















};
obj893_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj893_onTouchDown_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_onTouchDown_ended");
		
		return;
	}
	window.obj893_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_940();
function runjs_940() {
	window.obj893_onTouchDown_runningActionsCount = obj893_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj893"));
	setTimeout(function() {
		window.obj893_onTouchDown_runningActionsCount = window.obj893_onTouchDown_runningActionsCount - 1;
if (window.obj893_onTouchDown_runningActionsCount == 0) {
	obj893_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj893_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj893_onTouchDown_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_onTouchDown_ended");
		
		return;
	}
	window.obj893_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj893");
//	action: dragDrop
//	target: obj893 
dragDrop_897();
function dragDrop_897() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj893_onTouchDown_runningActionsCount = obj893_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj893');
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
    	window.obj893_onTouchDown_runningActionsCount = window.obj893_onTouchDown_runningActionsCount - 1;
if (window.obj893_onTouchDown_runningActionsCount == 0) {
	obj893_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj744");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_897 = false;
    	var dropped_id_897;
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
					dropped_897 = true;
					dropped_id_897 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_897) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj893").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj893").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj893_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj893_onTouchDown_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_onTouchDown_ended");
		
		return;
	}
	window.obj893_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj893 
move_902();
function move_902() {
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj893");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 279;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_903();
function show_903() {
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj893 
move_902();
function move_902() {
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj893");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 279;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_903();
function show_903() {
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj893_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj893_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj893_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1396();
function runjs_1396() {
	window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj893"));
	setTimeout(function() {
		window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj893_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_899();
function runjs_899() {
	window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj893").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj893_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj893_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj893_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj893_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_958();
function incrementCounter_958() {
	window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj893_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj893_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj893_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj893").trigger("obj893_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj893_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj860_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj860_onTap_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_onTap_ended");
		
		return;
	}
	window.obj860_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_935();
function runjs_935() {
	window.obj860_onTap_runningActionsCount = obj860_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj860"));
	setTimeout(function() {
		window.obj860_onTap_runningActionsCount = window.obj860_onTap_runningActionsCount - 1;
if (window.obj860_onTap_runningActionsCount == 0) {
	obj860_onTap_actionGroup1();
}
	}, 1);
}






};
obj860_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj860_onTap_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_onTap_ended");
		
		return;
	}
	window.obj860_onTap_activeActionGroupIndex = 1;
	





















};
obj860_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj860_onTouchDown_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_onTouchDown_ended");
		
		return;
	}
	window.obj860_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_937();
function runjs_937() {
	window.obj860_onTouchDown_runningActionsCount = obj860_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj860"));
	setTimeout(function() {
		window.obj860_onTouchDown_runningActionsCount = window.obj860_onTouchDown_runningActionsCount - 1;
if (window.obj860_onTouchDown_runningActionsCount == 0) {
	obj860_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj860_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj860_onTouchDown_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_onTouchDown_ended");
		
		return;
	}
	window.obj860_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj860");
//	action: dragDrop
//	target: obj860 
dragDrop_864();
function dragDrop_864() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj860_onTouchDown_runningActionsCount = obj860_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj860');
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
    	window.obj860_onTouchDown_runningActionsCount = window.obj860_onTouchDown_runningActionsCount - 1;
if (window.obj860_onTouchDown_runningActionsCount == 0) {
	obj860_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj744");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_864 = false;
    	var dropped_id_864;
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
					dropped_864 = true;
					dropped_id_864 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_864) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj860").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj860").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj860_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj860_onTouchDown_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_onTouchDown_ended");
		
		return;
	}
	window.obj860_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj860 
move_869();
function move_869() {
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj860");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 195;
	var moveY = 259;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_870();
function show_870() {
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj860 
move_869();
function move_869() {
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj860");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 195;
	var moveY = 259;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_870();
function show_870() {
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj860_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj860_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj860_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1397();
function runjs_1397() {
	window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj860"));
	setTimeout(function() {
		window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj860_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_866();
function runjs_866() {
	window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj860").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj860_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj860_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj860_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj860_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_957();
function incrementCounter_957() {
	window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj860_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj860_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj860_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj860").trigger("obj860_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj860_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj805_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj805_onTap_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_onTap_ended");
		
		return;
	}
	window.obj805_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_933();
function runjs_933() {
	window.obj805_onTap_runningActionsCount = obj805_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj805"));
	setTimeout(function() {
		window.obj805_onTap_runningActionsCount = window.obj805_onTap_runningActionsCount - 1;
if (window.obj805_onTap_runningActionsCount == 0) {
	obj805_onTap_actionGroup1();
}
	}, 1);
}






};
obj805_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj805_onTap_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_onTap_ended");
		
		return;
	}
	window.obj805_onTap_activeActionGroupIndex = 1;
	





















};
obj805_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj805_onTouchDown_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_onTouchDown_ended");
		
		return;
	}
	window.obj805_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_934();
function runjs_934() {
	window.obj805_onTouchDown_runningActionsCount = obj805_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj805"));
	setTimeout(function() {
		window.obj805_onTouchDown_runningActionsCount = window.obj805_onTouchDown_runningActionsCount - 1;
if (window.obj805_onTouchDown_runningActionsCount == 0) {
	obj805_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj805_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj805_onTouchDown_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_onTouchDown_ended");
		
		return;
	}
	window.obj805_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj805");
//	action: dragDrop
//	target: obj805 
dragDrop_811();
function dragDrop_811() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj805_onTouchDown_runningActionsCount = obj805_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj805');
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
    	window.obj805_onTouchDown_runningActionsCount = window.obj805_onTouchDown_runningActionsCount - 1;
if (window.obj805_onTouchDown_runningActionsCount == 0) {
	obj805_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj742");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_811 = false;
    	var dropped_id_811;
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
					dropped_811 = true;
					dropped_id_811 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_811) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj805").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj805").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj805_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj805_onTouchDown_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_onTouchDown_ended");
		
		return;
	}
	window.obj805_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj805 
move_816();
function move_816() {
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj805");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 198;
	var moveY = 270;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_817();
function show_817() {
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj805 
move_816();
function move_816() {
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj805");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 198;
	var moveY = 270;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj752 
show_817();
function show_817() {
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj752").fadeIn(0, function() {
			setTimeout(function() {
				window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj805_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj805_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj805_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1398();
function runjs_1398() {
	window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj805"));
	setTimeout(function() {
		window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj805_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_813();
function runjs_813() {
	window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj805").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj805_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj805_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj805_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj805_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj954 
incrementCounter_956();
function incrementCounter_956() {
	window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj954_counterValue;
	obj954_counterValue = obj954_counterValue + 1;
	if (! obj954_counterCanExceedTargetValue && obj954_counterValue > obj954_counterTargetValue) {
		obj954_counterValue = obj954_counterTargetValue;
	}
	if (oldValue != obj954_counterValue) {
		$("#obj954").trigger('SCEventCounterValueChange');
		$("#obj954").trigger('SCEventCounterIncrease');
		if (obj954_counterValue == obj954_counterTargetValue)
			$("#obj954").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj805_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj805_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj805_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj805").trigger("obj805_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj805_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj752_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj752_onShow_activeActionGroupIndex = -1;
		$("#obj752").trigger("obj752_onShow_ended");
		
		return;
	}
	window.obj752_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_758();
function wait_758() {
	window.obj752_onShow_runningActionsCount = obj752_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj752_onShow_runningActionsCount = window.obj752_onShow_runningActionsCount - 1;
if (window.obj752_onShow_runningActionsCount == 0) {
	obj752_onShow_actionGroup1();
}
	}, 1000);
}












};
obj752_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj752_onShow_activeActionGroupIndex = -1;
		$("#obj752").trigger("obj752_onShow_ended");
		
		return;
	}
	window.obj752_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj752 
hide_759();
function hide_759() {
	window.obj752_onShow_runningActionsCount = obj752_onShow_runningActionsCount + 1;
	$("#obj752").fadeOut(500, function() {
			setTimeout(function() {
				window.obj752_onShow_runningActionsCount = window.obj752_onShow_runningActionsCount - 1;
if (window.obj752_onShow_runningActionsCount == 0) {
	obj752_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj752_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj752_onShow_activeActionGroupIndex = -1;
		$("#obj752").trigger("obj752_onShow_ended");
		
		return;
	}
	window.obj752_onShow_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj752 
show_760();
function show_760() {
	window.obj752_onShow_runningActionsCount = obj752_onShow_runningActionsCount + 1;
	$("#obj752").fadeIn(500, function() {
			setTimeout(function() {
				window.obj752_onShow_runningActionsCount = window.obj752_onShow_runningActionsCount - 1;
if (window.obj752_onShow_runningActionsCount == 0) {
	obj752_onShow_actionGroup3();
}
				$("#obj752").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj752_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj752_onShow_activeActionGroupIndex = -1;
		$("#obj752").trigger("obj752_onShow_ended");
		
		return;
	}
	window.obj752_onShow_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj752 
hide_761();
function hide_761() {
	window.obj752_onShow_runningActionsCount = obj752_onShow_runningActionsCount + 1;
	$("#obj752").fadeOut(500, function() {
			setTimeout(function() {
				window.obj752_onShow_runningActionsCount = window.obj752_onShow_runningActionsCount - 1;
if (window.obj752_onShow_runningActionsCount == 0) {
	obj752_onShow_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj752_onShow_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj752_onShow_activeActionGroupIndex = -1;
		$("#obj752").trigger("obj752_onShow_ended");
		
		return;
	}
	window.obj752_onShow_activeActionGroupIndex = 4;
	





















};
obj954_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj954_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj954").trigger("obj954_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj954_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_966();
function wait_966() {
	window.obj954_SCEventCounterReachedTargetValue_runningActionsCount = obj954_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj954_SCEventCounterReachedTargetValue_runningActionsCount = window.obj954_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj954_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj954_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}












};
obj954_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj954_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj954").trigger("obj954_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj954_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page4
goToPage_967();
function goToPage_967() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../4/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(4))},200);
	}
}





















};
obj954_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj954_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj954").trigger("obj954_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj954_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













































/*
 *
 *   obj794: Event Touch Down
 *
 */
 
$("#obj794").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj794_onTap_activeActionGroupIndex != -1) return;
var obj794_onTap_runningActionsCount = 0;
var obj794_onTap_loopCount = 0;
obj794_onTap_actionGroup0();
});

/*
 *
 *   obj794: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj794");
	var winTarget = document.getElementById("obj794");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj794").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj794_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj794_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj794_onTouchDown_activeActionGroupIndex != -1) return;
var obj794_onTouchDown_runningActionsCount = 0;
var obj794_onTouchDown_loopCount = 0;
obj794_onTouchDown_actionGroup0();
});


/*
 *
 *   obj794: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj794").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj794: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj794").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj794_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj794_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj794_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj794: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj794").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj794_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj794_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj794_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj794_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj239: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj239");
	var winTarget = document.getElementById("obj239");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj239").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj239_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj239_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj239_onTouchDown_activeActionGroupIndex != -1) return;
var obj239_onTouchDown_runningActionsCount = 0;
var obj239_onTouchDown_loopCount = 0;
obj239_onTouchDown_actionGroup0();
});


/*
 *
 *   obj239: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj239").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj239: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj239").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj239_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj239_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj239_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj239: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj239").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj239_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj239_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj239_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj239_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj220: Event Touch Down
 *
 */
 
$("#obj220").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj220_onTap_activeActionGroupIndex != -1) return;
var obj220_onTap_runningActionsCount = 0;
var obj220_onTap_loopCount = 0;
obj220_onTap_actionGroup0();
});

/*
 *
 *   obj220: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj220");
	var winTarget = document.getElementById("obj220");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj220").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj220_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj220_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj220_onTouchDown_activeActionGroupIndex != -1) return;
var obj220_onTouchDown_runningActionsCount = 0;
var obj220_onTouchDown_loopCount = 0;
obj220_onTouchDown_actionGroup0();
});


/*
 *
 *   obj220: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj220").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj220: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj220").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj220_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj220_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj220_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj220: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj220").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj220_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj220_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj220_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj220_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj772: Event Touch Down
 *
 */
 
$("#obj772").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj772_onTap_activeActionGroupIndex != -1) return;
var obj772_onTap_runningActionsCount = 0;
var obj772_onTap_loopCount = 0;
obj772_onTap_actionGroup0();
});

/*
 *
 *   obj772: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj772");
	var winTarget = document.getElementById("obj772");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj772").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj772_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj772_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj772_onTouchDown_activeActionGroupIndex != -1) return;
var obj772_onTouchDown_runningActionsCount = 0;
var obj772_onTouchDown_loopCount = 0;
obj772_onTouchDown_actionGroup0();
});


/*
 *
 *   obj772: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj772").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj772: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj772").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj772_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj772_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj772_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj772: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj772").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj772_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj772_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj772_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj772_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj827: Event Touch Down
 *
 */
 
$("#obj827").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj827_onTap_activeActionGroupIndex != -1) return;
var obj827_onTap_runningActionsCount = 0;
var obj827_onTap_loopCount = 0;
obj827_onTap_actionGroup0();
});

/*
 *
 *   obj827: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj827");
	var winTarget = document.getElementById("obj827");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj827").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj827_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj827_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj827_onTouchDown_activeActionGroupIndex != -1) return;
var obj827_onTouchDown_runningActionsCount = 0;
var obj827_onTouchDown_loopCount = 0;
obj827_onTouchDown_actionGroup0();
});


/*
 *
 *   obj827: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj827").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj827: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj827").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj827_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj827_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj827_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj827: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj827").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj827_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj827_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj827_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj827_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj871: Event Touch Down
 *
 */
 
$("#obj871").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj871_onTap_activeActionGroupIndex != -1) return;
var obj871_onTap_runningActionsCount = 0;
var obj871_onTap_loopCount = 0;
obj871_onTap_actionGroup0();
});

/*
 *
 *   obj871: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj871");
	var winTarget = document.getElementById("obj871");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj871").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj871_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj871_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj871_onTouchDown_activeActionGroupIndex != -1) return;
var obj871_onTouchDown_runningActionsCount = 0;
var obj871_onTouchDown_loopCount = 0;
obj871_onTouchDown_actionGroup0();
});


/*
 *
 *   obj871: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj871").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj871: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj871").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj871_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj871_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj871_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj871: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj871").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj871_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj871_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj871_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj871_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj838: Event Touch Down
 *
 */
 
$("#obj838").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj838_onTap_activeActionGroupIndex != -1) return;
var obj838_onTap_runningActionsCount = 0;
var obj838_onTap_loopCount = 0;
obj838_onTap_actionGroup0();
});

/*
 *
 *   obj838: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj838");
	var winTarget = document.getElementById("obj838");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj838").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj838_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj838_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj838_onTouchDown_activeActionGroupIndex != -1) return;
var obj838_onTouchDown_runningActionsCount = 0;
var obj838_onTouchDown_loopCount = 0;
obj838_onTouchDown_actionGroup0();
});


/*
 *
 *   obj838: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj838").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj838: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj838").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj838_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj838_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj838_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj838: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj838").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj838_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj838_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj838_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj838_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj893: Event Touch Down
 *
 */
 
$("#obj893").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj893_onTap_activeActionGroupIndex != -1) return;
var obj893_onTap_runningActionsCount = 0;
var obj893_onTap_loopCount = 0;
obj893_onTap_actionGroup0();
});

/*
 *
 *   obj893: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj893");
	var winTarget = document.getElementById("obj893");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj893").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj893_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj893_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj893_onTouchDown_activeActionGroupIndex != -1) return;
var obj893_onTouchDown_runningActionsCount = 0;
var obj893_onTouchDown_loopCount = 0;
obj893_onTouchDown_actionGroup0();
});


/*
 *
 *   obj893: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj893").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj893: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj893").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj893_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj893_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj893_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj893: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj893").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj893_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj893_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj893_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj893_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj860: Event Touch Down
 *
 */
 
$("#obj860").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj860_onTap_activeActionGroupIndex != -1) return;
var obj860_onTap_runningActionsCount = 0;
var obj860_onTap_loopCount = 0;
obj860_onTap_actionGroup0();
});

/*
 *
 *   obj860: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj860");
	var winTarget = document.getElementById("obj860");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj860").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj860_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj860_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj860_onTouchDown_activeActionGroupIndex != -1) return;
var obj860_onTouchDown_runningActionsCount = 0;
var obj860_onTouchDown_loopCount = 0;
obj860_onTouchDown_actionGroup0();
});


/*
 *
 *   obj860: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj860").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj860: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj860").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj860_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj860_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj860_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj860: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj860").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj860_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj860_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj860_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj860_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj805: Event Touch Down
 *
 */
 
$("#obj805").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj805_onTap_activeActionGroupIndex != -1) return;
var obj805_onTap_runningActionsCount = 0;
var obj805_onTap_loopCount = 0;
obj805_onTap_actionGroup0();
});

/*
 *
 *   obj805: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj805");
	var winTarget = document.getElementById("obj805");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj805").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj805_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj805_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj805_onTouchDown_activeActionGroupIndex != -1) return;
var obj805_onTouchDown_runningActionsCount = 0;
var obj805_onTouchDown_loopCount = 0;
obj805_onTouchDown_actionGroup0();
});


/*
 *
 *   obj805: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj805").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj805: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj805").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj805_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj805_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj805_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj805: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj805").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj805_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj805_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj805_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj805_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj752: Event Show
 *
 */
 
$("#obj752").bind('SCEventShow', function(event) {
	if (window.obj752_onShow_activeActionGroupIndex != -1) return;
var obj752_onShow_runningActionsCount = 0;
var obj752_onShow_loopCount = 0;
obj752_onShow_actionGroup0();
});









/*
 *
 *   obj954: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj954").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj954_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj954_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj954_SCEventCounterReachedTargetValue_loopCount = 0;
obj954_SCEventCounterReachedTargetValue_actionGroup0();
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
	
$("#obj1196").trigger('SCEventShow');
$("#obj1399").trigger('SCEventShow');
$("#obj1401").trigger('SCEventShow');
$("#obj742").trigger('SCEventShow');
$("#obj744").trigger('SCEventShow');
$("#obj952").trigger('SCEventShow');
$("#obj794").trigger('SCEventShow');
$("#obj239").trigger('SCEventShow');
$("#obj220").trigger('SCEventShow');
$("#obj772").trigger('SCEventShow');
$("#obj827").trigger('SCEventShow');
$("#obj871").trigger('SCEventShow');
$("#obj838").trigger('SCEventShow');
$("#obj893").trigger('SCEventShow');
$("#obj860").trigger('SCEventShow');
$("#obj805").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});