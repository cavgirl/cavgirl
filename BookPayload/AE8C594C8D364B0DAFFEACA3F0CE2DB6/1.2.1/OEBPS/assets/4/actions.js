pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 1501;
pubcoder.page.title = "4";
pubcoder.page.number = 4;
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
var obj1709_onTap_activeActionGroupIndex = -1;
var obj1709_onTap_runningActionsCount = 0;
var obj1709_onTap_loopCount = 0;
var obj1709_onDrag_activeActionGroupIndex = -1;
var obj1709_onDrag_runningActionsCount = 0;
var obj1709_onDrag_loopCount = 0;
var obj1709_onTouchDown_activeActionGroupIndex = -1;
var obj1709_onTouchDown_runningActionsCount = 0;
var obj1709_onTouchDown_loopCount = 0;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1709_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1709_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1685_onDrag_activeActionGroupIndex = -1;
var obj1685_onDrag_runningActionsCount = 0;
var obj1685_onDrag_loopCount = 0;
var obj1685_onTouchDown_activeActionGroupIndex = -1;
var obj1685_onTouchDown_runningActionsCount = 0;
var obj1685_onTouchDown_loopCount = 0;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1685_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1685_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1670_onTap_activeActionGroupIndex = -1;
var obj1670_onTap_runningActionsCount = 0;
var obj1670_onTap_loopCount = 0;
var obj1670_onDrag_activeActionGroupIndex = -1;
var obj1670_onDrag_runningActionsCount = 0;
var obj1670_onDrag_loopCount = 0;
var obj1670_onTouchDown_activeActionGroupIndex = -1;
var obj1670_onTouchDown_runningActionsCount = 0;
var obj1670_onTouchDown_loopCount = 0;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1670_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1670_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1645_onTap_activeActionGroupIndex = -1;
var obj1645_onTap_runningActionsCount = 0;
var obj1645_onTap_loopCount = 0;
var obj1645_onDrag_activeActionGroupIndex = -1;
var obj1645_onDrag_runningActionsCount = 0;
var obj1645_onDrag_loopCount = 0;
var obj1645_onTouchDown_activeActionGroupIndex = -1;
var obj1645_onTouchDown_runningActionsCount = 0;
var obj1645_onTouchDown_loopCount = 0;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1645_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1645_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1630_onTap_activeActionGroupIndex = -1;
var obj1630_onTap_runningActionsCount = 0;
var obj1630_onTap_loopCount = 0;
var obj1630_onDrag_activeActionGroupIndex = -1;
var obj1630_onDrag_runningActionsCount = 0;
var obj1630_onDrag_loopCount = 0;
var obj1630_onTouchDown_activeActionGroupIndex = -1;
var obj1630_onTouchDown_runningActionsCount = 0;
var obj1630_onTouchDown_loopCount = 0;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1630_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1630_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1605_onTap_activeActionGroupIndex = -1;
var obj1605_onTap_runningActionsCount = 0;
var obj1605_onTap_loopCount = 0;
var obj1605_onDrag_activeActionGroupIndex = -1;
var obj1605_onDrag_runningActionsCount = 0;
var obj1605_onDrag_loopCount = 0;
var obj1605_onTouchDown_activeActionGroupIndex = -1;
var obj1605_onTouchDown_runningActionsCount = 0;
var obj1605_onTouchDown_loopCount = 0;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1605_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1605_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1580_onTap_activeActionGroupIndex = -1;
var obj1580_onTap_runningActionsCount = 0;
var obj1580_onTap_loopCount = 0;
var obj1580_onDrag_activeActionGroupIndex = -1;
var obj1580_onDrag_runningActionsCount = 0;
var obj1580_onDrag_loopCount = 0;
var obj1580_onTouchDown_activeActionGroupIndex = -1;
var obj1580_onTouchDown_runningActionsCount = 0;
var obj1580_onTouchDown_loopCount = 0;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1580_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1580_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1565_onTap_activeActionGroupIndex = -1;
var obj1565_onTap_runningActionsCount = 0;
var obj1565_onTap_loopCount = 0;
var obj1565_onDrag_activeActionGroupIndex = -1;
var obj1565_onDrag_runningActionsCount = 0;
var obj1565_onDrag_loopCount = 0;
var obj1565_onTouchDown_activeActionGroupIndex = -1;
var obj1565_onTouchDown_runningActionsCount = 0;
var obj1565_onTouchDown_loopCount = 0;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1565_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1565_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1549_onTap_activeActionGroupIndex = -1;
var obj1549_onTap_runningActionsCount = 0;
var obj1549_onTap_loopCount = 0;
var obj1549_onDrag_activeActionGroupIndex = -1;
var obj1549_onDrag_runningActionsCount = 0;
var obj1549_onDrag_loopCount = 0;
var obj1549_onTouchDown_activeActionGroupIndex = -1;
var obj1549_onTouchDown_runningActionsCount = 0;
var obj1549_onTouchDown_loopCount = 0;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1549_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1549_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1524_onTap_activeActionGroupIndex = -1;
var obj1524_onTap_runningActionsCount = 0;
var obj1524_onTap_loopCount = 0;
var obj1524_onDrag_activeActionGroupIndex = -1;
var obj1524_onDrag_runningActionsCount = 0;
var obj1524_onDrag_loopCount = 0;
var obj1524_onTouchDown_activeActionGroupIndex = -1;
var obj1524_onTouchDown_runningActionsCount = 0;
var obj1524_onTouchDown_loopCount = 0;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
var obj1524_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1524_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
var obj1517_onShow_activeActionGroupIndex = -1;
var obj1517_onShow_runningActionsCount = 0;
var obj1517_onShow_loopCount = 0;
var obj1513_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj1513_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1513_SCEventCounterReachedTargetValue_loopCount = 0;
var obj2008_onTap_activeActionGroupIndex = -1;
var obj2008_onTap_runningActionsCount = 0;
var obj2008_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj1513_counterValue = 0;
var obj1513_counterTargetValue = 10;
var obj1513_counterCanExceedTargetValue = false;
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
		
obj1709_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_onTap_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_onTap_ended");
		
		return;
	}
	window.obj1709_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1711();
function runjs_1711() {
	window.obj1709_onTap_runningActionsCount = obj1709_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1709"));
	setTimeout(function() {
		window.obj1709_onTap_runningActionsCount = window.obj1709_onTap_runningActionsCount - 1;
if (window.obj1709_onTap_runningActionsCount == 0) {
	obj1709_onTap_actionGroup1();
}
	}, 1);
}






};
obj1709_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1709_onTap_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_onTap_ended");
		
		return;
	}
	window.obj1709_onTap_activeActionGroupIndex = 1;
	





















};
obj1709_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_onTouchDown_ended");
		
		return;
	}
	window.obj1709_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1723();
function runjs_1723() {
	window.obj1709_onTouchDown_runningActionsCount = obj1709_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1709"));
	setTimeout(function() {
		window.obj1709_onTouchDown_runningActionsCount = window.obj1709_onTouchDown_runningActionsCount - 1;
if (window.obj1709_onTouchDown_runningActionsCount == 0) {
	obj1709_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1709_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_onTouchDown_ended");
		
		return;
	}
	window.obj1709_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1709");
//	action: dragDrop
//	target: obj1709 
dragDrop_1714();
function dragDrop_1714() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1709_onTouchDown_runningActionsCount = obj1709_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1709');
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
    	window.obj1709_onTouchDown_runningActionsCount = window.obj1709_onTouchDown_runningActionsCount - 1;
if (window.obj1709_onTouchDown_runningActionsCount == 0) {
	obj1709_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1726");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1714 = false;
    	var dropped_id_1714;
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
					dropped_1714 = true;
					dropped_id_1714 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1714) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1709").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1709").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1709_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1709_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_onTouchDown_ended");
		
		return;
	}
	window.obj1709_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1709 
move_1720();
function move_1720() {
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1709");
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
			window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1721();
function show_1721() {
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1709 
move_1720();
function move_1720() {
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1709");
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
			window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1721();
function show_1721() {
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1709_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1716();
function runjs_1716() {
	window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1709"));
	setTimeout(function() {
		window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1717();
function runjs_1717() {
	window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1709").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1709_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1718();
function incrementCounter_1718() {
	window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1709_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1685_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1685_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_onTouchDown_ended");
		
		return;
	}
	window.obj1685_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1707();
function runjs_1707() {
	window.obj1685_onTouchDown_runningActionsCount = obj1685_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1685"));
	setTimeout(function() {
		window.obj1685_onTouchDown_runningActionsCount = window.obj1685_onTouchDown_runningActionsCount - 1;
if (window.obj1685_onTouchDown_runningActionsCount == 0) {
	obj1685_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1685_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1685_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_onTouchDown_ended");
		
		return;
	}
	window.obj1685_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1685");
//	action: dragDrop
//	target: obj1685 
dragDrop_1691();
function dragDrop_1691() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1685_onTouchDown_runningActionsCount = obj1685_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1685');
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
    	window.obj1685_onTouchDown_runningActionsCount = window.obj1685_onTouchDown_runningActionsCount - 1;
if (window.obj1685_onTouchDown_runningActionsCount == 0) {
	obj1685_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1728");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1691 = false;
    	var dropped_id_1691;
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
					dropped_1691 = true;
					dropped_id_1691 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1691) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1685").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1685").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1685_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1685_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_onTouchDown_ended");
		
		return;
	}
	window.obj1685_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1685 
move_1697();
function move_1697() {
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1685");
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
			window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1698();
function show_1698() {
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1685 
move_1697();
function move_1697() {
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1685");
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
			window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1698();
function show_1698() {
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1685_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1693();
function runjs_1693() {
	window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1685"));
	setTimeout(function() {
		window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1685_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1694();
function runjs_1694() {
	window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1685").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1685_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1685_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1695();
function incrementCounter_1695() {
	window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1685_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1685_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1685").trigger("obj1685_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1670_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_onTap_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onTap_ended");
		
		return;
	}
	window.obj1670_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1672();
function runjs_1672() {
	window.obj1670_onTap_runningActionsCount = obj1670_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1670"));
	setTimeout(function() {
		window.obj1670_onTap_runningActionsCount = window.obj1670_onTap_runningActionsCount - 1;
if (window.obj1670_onTap_runningActionsCount == 0) {
	obj1670_onTap_actionGroup1();
}
	}, 1);
}






};
obj1670_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1670_onTap_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onTap_ended");
		
		return;
	}
	window.obj1670_onTap_activeActionGroupIndex = 1;
	





















};
obj1670_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onTouchDown_ended");
		
		return;
	}
	window.obj1670_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1684();
function runjs_1684() {
	window.obj1670_onTouchDown_runningActionsCount = obj1670_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1670"));
	setTimeout(function() {
		window.obj1670_onTouchDown_runningActionsCount = window.obj1670_onTouchDown_runningActionsCount - 1;
if (window.obj1670_onTouchDown_runningActionsCount == 0) {
	obj1670_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1670_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onTouchDown_ended");
		
		return;
	}
	window.obj1670_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1670");
//	action: dragDrop
//	target: obj1670 
dragDrop_1675();
function dragDrop_1675() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1670_onTouchDown_runningActionsCount = obj1670_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1670');
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
    	window.obj1670_onTouchDown_runningActionsCount = window.obj1670_onTouchDown_runningActionsCount - 1;
if (window.obj1670_onTouchDown_runningActionsCount == 0) {
	obj1670_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1726");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1675 = false;
    	var dropped_id_1675;
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
					dropped_1675 = true;
					dropped_id_1675 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1675) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1670").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1670").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1670_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1670_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onTouchDown_ended");
		
		return;
	}
	window.obj1670_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1670 
move_1681();
function move_1681() {
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1670");
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
			window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1682();
function show_1682() {
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1670 
move_1681();
function move_1681() {
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1670");
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
			window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1682();
function show_1682() {
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1670_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1677();
function runjs_1677() {
	window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1670"));
	setTimeout(function() {
		window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1670_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1678();
function runjs_1678() {
	window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1670").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1670_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1670_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1679();
function incrementCounter_1679() {
	window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1670_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1670_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1645_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1645_onTap_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_onTap_ended");
		
		return;
	}
	window.obj1645_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1647();
function runjs_1647() {
	window.obj1645_onTap_runningActionsCount = obj1645_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1645"));
	setTimeout(function() {
		window.obj1645_onTap_runningActionsCount = window.obj1645_onTap_runningActionsCount - 1;
if (window.obj1645_onTap_runningActionsCount == 0) {
	obj1645_onTap_actionGroup1();
}
	}, 1);
}






};
obj1645_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1645_onTap_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_onTap_ended");
		
		return;
	}
	window.obj1645_onTap_activeActionGroupIndex = 1;
	





















};
obj1645_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1645_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_onTouchDown_ended");
		
		return;
	}
	window.obj1645_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1668();
function runjs_1668() {
	window.obj1645_onTouchDown_runningActionsCount = obj1645_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1645"));
	setTimeout(function() {
		window.obj1645_onTouchDown_runningActionsCount = window.obj1645_onTouchDown_runningActionsCount - 1;
if (window.obj1645_onTouchDown_runningActionsCount == 0) {
	obj1645_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1645_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1645_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_onTouchDown_ended");
		
		return;
	}
	window.obj1645_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1645");
//	action: dragDrop
//	target: obj1645 
dragDrop_1652();
function dragDrop_1652() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1645_onTouchDown_runningActionsCount = obj1645_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1645');
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
    	window.obj1645_onTouchDown_runningActionsCount = window.obj1645_onTouchDown_runningActionsCount - 1;
if (window.obj1645_onTouchDown_runningActionsCount == 0) {
	obj1645_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1728");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1652 = false;
    	var dropped_id_1652;
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
					dropped_1652 = true;
					dropped_id_1652 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1652) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1645").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1645").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1645_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1645_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_onTouchDown_ended");
		
		return;
	}
	window.obj1645_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1645 
move_1658();
function move_1658() {
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1645");
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
			window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1659();
function show_1659() {
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1645 
move_1658();
function move_1658() {
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1645");
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
			window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1659();
function show_1659() {
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1645_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1654();
function runjs_1654() {
	window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1645"));
	setTimeout(function() {
		window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1645_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1655();
function runjs_1655() {
	window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1645").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1645_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1645_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1656();
function incrementCounter_1656() {
	window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1645_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1645_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1645").trigger("obj1645_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1630_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_onTap_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_onTap_ended");
		
		return;
	}
	window.obj1630_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1632();
function runjs_1632() {
	window.obj1630_onTap_runningActionsCount = obj1630_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1630"));
	setTimeout(function() {
		window.obj1630_onTap_runningActionsCount = window.obj1630_onTap_runningActionsCount - 1;
if (window.obj1630_onTap_runningActionsCount == 0) {
	obj1630_onTap_actionGroup1();
}
	}, 1);
}






};
obj1630_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1630_onTap_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_onTap_ended");
		
		return;
	}
	window.obj1630_onTap_activeActionGroupIndex = 1;
	





















};
obj1630_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_onTouchDown_ended");
		
		return;
	}
	window.obj1630_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1644();
function runjs_1644() {
	window.obj1630_onTouchDown_runningActionsCount = obj1630_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1630"));
	setTimeout(function() {
		window.obj1630_onTouchDown_runningActionsCount = window.obj1630_onTouchDown_runningActionsCount - 1;
if (window.obj1630_onTouchDown_runningActionsCount == 0) {
	obj1630_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1630_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_onTouchDown_ended");
		
		return;
	}
	window.obj1630_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1630");
//	action: dragDrop
//	target: obj1630 
dragDrop_1635();
function dragDrop_1635() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1630_onTouchDown_runningActionsCount = obj1630_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1630');
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
    	window.obj1630_onTouchDown_runningActionsCount = window.obj1630_onTouchDown_runningActionsCount - 1;
if (window.obj1630_onTouchDown_runningActionsCount == 0) {
	obj1630_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1726");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1635 = false;
    	var dropped_id_1635;
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
					dropped_1635 = true;
					dropped_id_1635 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1635) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1630").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1630").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1630_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1630_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_onTouchDown_ended");
		
		return;
	}
	window.obj1630_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1630 
move_1641();
function move_1641() {
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1630");
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
			window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1642();
function show_1642() {
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1630 
move_1641();
function move_1641() {
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1630");
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
			window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1642();
function show_1642() {
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1630_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1637();
function runjs_1637() {
	window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1630"));
	setTimeout(function() {
		window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1638();
function runjs_1638() {
	window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1630").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1630_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1639();
function incrementCounter_1639() {
	window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1630_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1605_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1605_onTap_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_onTap_ended");
		
		return;
	}
	window.obj1605_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1607();
function runjs_1607() {
	window.obj1605_onTap_runningActionsCount = obj1605_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1605"));
	setTimeout(function() {
		window.obj1605_onTap_runningActionsCount = window.obj1605_onTap_runningActionsCount - 1;
if (window.obj1605_onTap_runningActionsCount == 0) {
	obj1605_onTap_actionGroup1();
}
	}, 1);
}






};
obj1605_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1605_onTap_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_onTap_ended");
		
		return;
	}
	window.obj1605_onTap_activeActionGroupIndex = 1;
	





















};
obj1605_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1605_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_onTouchDown_ended");
		
		return;
	}
	window.obj1605_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1628();
function runjs_1628() {
	window.obj1605_onTouchDown_runningActionsCount = obj1605_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1605"));
	setTimeout(function() {
		window.obj1605_onTouchDown_runningActionsCount = window.obj1605_onTouchDown_runningActionsCount - 1;
if (window.obj1605_onTouchDown_runningActionsCount == 0) {
	obj1605_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1605_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1605_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_onTouchDown_ended");
		
		return;
	}
	window.obj1605_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1605");
//	action: dragDrop
//	target: obj1605 
dragDrop_1612();
function dragDrop_1612() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1605_onTouchDown_runningActionsCount = obj1605_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1605');
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
    	window.obj1605_onTouchDown_runningActionsCount = window.obj1605_onTouchDown_runningActionsCount - 1;
if (window.obj1605_onTouchDown_runningActionsCount == 0) {
	obj1605_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1728");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1612 = false;
    	var dropped_id_1612;
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
					dropped_1612 = true;
					dropped_id_1612 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1612) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1605").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1605").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1605_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1605_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_onTouchDown_ended");
		
		return;
	}
	window.obj1605_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1605 
move_1618();
function move_1618() {
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1605");
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
			window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1619();
function show_1619() {
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1605 
move_1618();
function move_1618() {
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1605");
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
			window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1619();
function show_1619() {
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1605_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1614();
function runjs_1614() {
	window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1605"));
	setTimeout(function() {
		window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1605_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1615();
function runjs_1615() {
	window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1605").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1605_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1605_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1616();
function incrementCounter_1616() {
	window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1605_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1605_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1605").trigger("obj1605_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1580_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1580_onTap_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_onTap_ended");
		
		return;
	}
	window.obj1580_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1582();
function runjs_1582() {
	window.obj1580_onTap_runningActionsCount = obj1580_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1580"));
	setTimeout(function() {
		window.obj1580_onTap_runningActionsCount = window.obj1580_onTap_runningActionsCount - 1;
if (window.obj1580_onTap_runningActionsCount == 0) {
	obj1580_onTap_actionGroup1();
}
	}, 1);
}






};
obj1580_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1580_onTap_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_onTap_ended");
		
		return;
	}
	window.obj1580_onTap_activeActionGroupIndex = 1;
	





















};
obj1580_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1580_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_onTouchDown_ended");
		
		return;
	}
	window.obj1580_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1603();
function runjs_1603() {
	window.obj1580_onTouchDown_runningActionsCount = obj1580_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1580"));
	setTimeout(function() {
		window.obj1580_onTouchDown_runningActionsCount = window.obj1580_onTouchDown_runningActionsCount - 1;
if (window.obj1580_onTouchDown_runningActionsCount == 0) {
	obj1580_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1580_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1580_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_onTouchDown_ended");
		
		return;
	}
	window.obj1580_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1580");
//	action: dragDrop
//	target: obj1580 
dragDrop_1587();
function dragDrop_1587() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1580_onTouchDown_runningActionsCount = obj1580_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1580');
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
    	window.obj1580_onTouchDown_runningActionsCount = window.obj1580_onTouchDown_runningActionsCount - 1;
if (window.obj1580_onTouchDown_runningActionsCount == 0) {
	obj1580_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1728");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1587 = false;
    	var dropped_id_1587;
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
					dropped_1587 = true;
					dropped_id_1587 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1587) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1580").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1580").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1580_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1580_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_onTouchDown_ended");
		
		return;
	}
	window.obj1580_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1580 
move_1593();
function move_1593() {
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1580");
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
			window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1594();
function show_1594() {
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1580 
move_1593();
function move_1593() {
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1580");
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
			window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1594();
function show_1594() {
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1580_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1589();
function runjs_1589() {
	window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1580"));
	setTimeout(function() {
		window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1580_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1590();
function runjs_1590() {
	window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1580").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1580_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1580_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1591();
function incrementCounter_1591() {
	window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1580_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1580_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1580").trigger("obj1580_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1565_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_onTap_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_onTap_ended");
		
		return;
	}
	window.obj1565_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1567();
function runjs_1567() {
	window.obj1565_onTap_runningActionsCount = obj1565_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1565"));
	setTimeout(function() {
		window.obj1565_onTap_runningActionsCount = window.obj1565_onTap_runningActionsCount - 1;
if (window.obj1565_onTap_runningActionsCount == 0) {
	obj1565_onTap_actionGroup1();
}
	}, 1);
}






};
obj1565_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1565_onTap_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_onTap_ended");
		
		return;
	}
	window.obj1565_onTap_activeActionGroupIndex = 1;
	





















};
obj1565_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_onTouchDown_ended");
		
		return;
	}
	window.obj1565_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1579();
function runjs_1579() {
	window.obj1565_onTouchDown_runningActionsCount = obj1565_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1565"));
	setTimeout(function() {
		window.obj1565_onTouchDown_runningActionsCount = window.obj1565_onTouchDown_runningActionsCount - 1;
if (window.obj1565_onTouchDown_runningActionsCount == 0) {
	obj1565_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1565_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_onTouchDown_ended");
		
		return;
	}
	window.obj1565_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1565");
//	action: dragDrop
//	target: obj1565 
dragDrop_1570();
function dragDrop_1570() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1565_onTouchDown_runningActionsCount = obj1565_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1565');
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
    	window.obj1565_onTouchDown_runningActionsCount = window.obj1565_onTouchDown_runningActionsCount - 1;
if (window.obj1565_onTouchDown_runningActionsCount == 0) {
	obj1565_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1726");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1570 = false;
    	var dropped_id_1570;
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
					dropped_1570 = true;
					dropped_id_1570 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1570) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1565").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1565").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1565_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1565_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_onTouchDown_ended");
		
		return;
	}
	window.obj1565_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1565 
move_1576();
function move_1576() {
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1565");
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
			window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1577();
function show_1577() {
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1565 
move_1576();
function move_1576() {
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1565");
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
			window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1577();
function show_1577() {
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1565_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1572();
function runjs_1572() {
	window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1565"));
	setTimeout(function() {
		window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1565_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1573();
function runjs_1573() {
	window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1565").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1565_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1565_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1574();
function incrementCounter_1574() {
	window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1565_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1565_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1549_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1549_onTap_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_onTap_ended");
		
		return;
	}
	window.obj1549_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1551();
function runjs_1551() {
	window.obj1549_onTap_runningActionsCount = obj1549_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1549"));
	setTimeout(function() {
		window.obj1549_onTap_runningActionsCount = window.obj1549_onTap_runningActionsCount - 1;
if (window.obj1549_onTap_runningActionsCount == 0) {
	obj1549_onTap_actionGroup1();
}
	}, 1);
}






};
obj1549_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1549_onTap_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_onTap_ended");
		
		return;
	}
	window.obj1549_onTap_activeActionGroupIndex = 1;
	





















};
obj1549_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1549_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_onTouchDown_ended");
		
		return;
	}
	window.obj1549_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1564();
function runjs_1564() {
	window.obj1549_onTouchDown_runningActionsCount = obj1549_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1549"));
	setTimeout(function() {
		window.obj1549_onTouchDown_runningActionsCount = window.obj1549_onTouchDown_runningActionsCount - 1;
if (window.obj1549_onTouchDown_runningActionsCount == 0) {
	obj1549_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1549_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1549_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_onTouchDown_ended");
		
		return;
	}
	window.obj1549_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1549");
//	action: dragDrop
//	target: obj1549 
dragDrop_1554();
function dragDrop_1554() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1549_onTouchDown_runningActionsCount = obj1549_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1549');
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
    	window.obj1549_onTouchDown_runningActionsCount = window.obj1549_onTouchDown_runningActionsCount - 1;
if (window.obj1549_onTouchDown_runningActionsCount == 0) {
	obj1549_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1726");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1554 = false;
    	var dropped_id_1554;
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
					dropped_1554 = true;
					dropped_id_1554 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1554) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1549").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1549").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1549_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1549_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_onTouchDown_ended");
		
		return;
	}
	window.obj1549_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1549 
move_1560();
function move_1560() {
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1549");
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
			window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1561();
function show_1561() {
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1549 
move_1560();
function move_1560() {
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1549");
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
			window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1561();
function show_1561() {
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1549_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1556();
function runjs_1556() {
	window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1549"));
	setTimeout(function() {
		window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1549_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1557();
function runjs_1557() {
	window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1549").css("background-color", "#C6ACA9");
	setTimeout(function() {
		window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1549_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1549_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1558();
function incrementCounter_1558() {
	window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1549_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1549_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1549").trigger("obj1549_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1524_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1524_onTap_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_onTap_ended");
		
		return;
	}
	window.obj1524_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1526();
function runjs_1526() {
	window.obj1524_onTap_runningActionsCount = obj1524_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1524"));
	setTimeout(function() {
		window.obj1524_onTap_runningActionsCount = window.obj1524_onTap_runningActionsCount - 1;
if (window.obj1524_onTap_runningActionsCount == 0) {
	obj1524_onTap_actionGroup1();
}
	}, 1);
}






};
obj1524_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1524_onTap_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_onTap_ended");
		
		return;
	}
	window.obj1524_onTap_activeActionGroupIndex = 1;
	





















};
obj1524_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1524_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_onTouchDown_ended");
		
		return;
	}
	window.obj1524_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1547();
function runjs_1547() {
	window.obj1524_onTouchDown_runningActionsCount = obj1524_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1524"));
	setTimeout(function() {
		window.obj1524_onTouchDown_runningActionsCount = window.obj1524_onTouchDown_runningActionsCount - 1;
if (window.obj1524_onTouchDown_runningActionsCount == 0) {
	obj1524_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1524_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1524_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_onTouchDown_ended");
		
		return;
	}
	window.obj1524_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1524");
//	action: dragDrop
//	target: obj1524 
dragDrop_1531();
function dragDrop_1531() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1524_onTouchDown_runningActionsCount = obj1524_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1524');
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
    	window.obj1524_onTouchDown_runningActionsCount = window.obj1524_onTouchDown_runningActionsCount - 1;
if (window.obj1524_onTouchDown_runningActionsCount == 0) {
	obj1524_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1728");
    	var actionsOnDrop = new Array("SCActionDragDrop747_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1531 = false;
    	var dropped_id_1531;
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
					dropped_1531 = true;
					dropped_id_1531 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1531) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1524").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
$("#obj1524").trigger('SCActionDragDrop747_droppedOutsideTargetActions');
		}
    });
}











};
obj1524_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1524_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_onTouchDown_ended");
		
		return;
	}
	window.obj1524_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1524 
move_1537();
function move_1537() {
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1524");
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
			window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1538();
function show_1538() {
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1524 
move_1537();
function move_1537() {
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1524");
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
			window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1517 
show_1538();
function show_1538() {
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount + 1;
	$("#obj1517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_SCActionDragDrop747_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1524_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1533();
function runjs_1533() {
	window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1524"));
	setTimeout(function() {
		window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1524_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1534();
function runjs_1534() {
	window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1524").css("background-color", "#3D737E");
	setTimeout(function() {
		window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1524_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1524_SCActionDragDrop747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj1513 
incrementCounter_1535();
function incrementCounter_1535() {
	window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1513_counterValue;
	obj1513_counterValue = obj1513_counterValue + 1;
	if (! obj1513_counterCanExceedTargetValue && obj1513_counterValue > obj1513_counterTargetValue) {
		obj1513_counterValue = obj1513_counterTargetValue;
	}
	if (oldValue != obj1513_counterValue) {
		$("#obj1513").trigger('SCEventCounterValueChange');
		$("#obj1513").trigger('SCEventCounterIncrease');
		if (obj1513_counterValue == obj1513_counterTargetValue)
			$("#obj1513").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1524_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj1524_SCActionDragDrop747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1524").trigger("obj1524_SCActionDragDrop747_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1517_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1517_onShow_activeActionGroupIndex = -1;
		$("#obj1517").trigger("obj1517_onShow_ended");
		
		return;
	}
	window.obj1517_onShow_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2019();
function runjs_2019() {
	window.obj1517_onShow_runningActionsCount = obj1517_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1517"));
	setTimeout(function() {
		window.obj1517_onShow_runningActionsCount = window.obj1517_onShow_runningActionsCount - 1;
if (window.obj1517_onShow_runningActionsCount == 0) {
	obj1517_onShow_actionGroup1();
}
	}, 1);
}






};
obj1517_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1517_onShow_activeActionGroupIndex = -1;
		$("#obj1517").trigger("obj1517_onShow_ended");
		
		return;
	}
	window.obj1517_onShow_activeActionGroupIndex = 1;
	








//	action: wait
wait_1520();
function wait_1520() {
	window.obj1517_onShow_runningActionsCount = obj1517_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1517_onShow_runningActionsCount = window.obj1517_onShow_runningActionsCount - 1;
if (window.obj1517_onShow_runningActionsCount == 0) {
	obj1517_onShow_actionGroup2();
}
	}, 1000);
}












};
obj1517_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1517_onShow_activeActionGroupIndex = -1;
		$("#obj1517").trigger("obj1517_onShow_ended");
		
		return;
	}
	window.obj1517_onShow_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1517 
hide_1521();
function hide_1521() {
	window.obj1517_onShow_runningActionsCount = obj1517_onShow_runningActionsCount + 1;
	$("#obj1517").fadeOut(500, function() {
			setTimeout(function() {
				window.obj1517_onShow_runningActionsCount = window.obj1517_onShow_runningActionsCount - 1;
if (window.obj1517_onShow_runningActionsCount == 0) {
	obj1517_onShow_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj1517_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1517_onShow_activeActionGroupIndex = -1;
		$("#obj1517").trigger("obj1517_onShow_ended");
		
		return;
	}
	window.obj1517_onShow_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj1517 
show_1522();
function show_1522() {
	window.obj1517_onShow_runningActionsCount = obj1517_onShow_runningActionsCount + 1;
	$("#obj1517").fadeIn(500, function() {
			setTimeout(function() {
				window.obj1517_onShow_runningActionsCount = window.obj1517_onShow_runningActionsCount - 1;
if (window.obj1517_onShow_runningActionsCount == 0) {
	obj1517_onShow_actionGroup4();
}
				$("#obj1517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1517_onShow_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1517_onShow_activeActionGroupIndex = -1;
		$("#obj1517").trigger("obj1517_onShow_ended");
		
		return;
	}
	window.obj1517_onShow_activeActionGroupIndex = 4;
	

//	action: hide
//	target: obj1517 
hide_1523();
function hide_1523() {
	window.obj1517_onShow_runningActionsCount = obj1517_onShow_runningActionsCount + 1;
	$("#obj1517").fadeOut(500, function() {
			setTimeout(function() {
				window.obj1517_onShow_runningActionsCount = window.obj1517_onShow_runningActionsCount - 1;
if (window.obj1517_onShow_runningActionsCount == 0) {
	obj1517_onShow_actionGroup5();
}
			}, 1);
		}
	);
}




















};
obj1517_onShow_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1517_onShow_activeActionGroupIndex = -1;
		$("#obj1517").trigger("obj1517_onShow_ended");
		
		return;
	}
	window.obj1517_onShow_activeActionGroupIndex = 5;
	





















};
obj1513_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1513_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1513").trigger("obj1513_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1513_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_1515();
function wait_1515() {
	window.obj1513_SCEventCounterReachedTargetValue_runningActionsCount = obj1513_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1513_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1513_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1513_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1513_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}












};
obj1513_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1513_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1513").trigger("obj1513_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1513_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page5
goToPage_1516();
function goToPage_1516() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
	}
}





















};
obj1513_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1513_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1513").trigger("obj1513_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1513_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj2008_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onTap_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onTap_ended");
		
		return;
	}
	window.obj2008_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2012 
hide_2014();
function hide_2014() {
	window.obj2008_onTap_runningActionsCount = obj2008_onTap_runningActionsCount + 1;
	$("#obj2012").fadeOut(0, function() {
			setTimeout(function() {
				window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup1();
}
			}, 1);
		}
	);
}

//	action: move
//	target: obj2008 
move_2015();
function move_2015() {
	window.obj2008_onTap_runningActionsCount = obj2008_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2008");
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
			window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj2008_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onTap_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onTap_ended");
		
		return;
	}
	window.obj2008_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2008 
hide_2016();
function hide_2016() {
	window.obj2008_onTap_runningActionsCount = obj2008_onTap_runningActionsCount + 1;
	$("#obj2008").fadeOut(0, function() {
			setTimeout(function() {
				window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj2008_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2008_onTap_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onTap_ended");
		
		return;
	}
	window.obj2008_onTap_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













































/*
 *
 *   obj1709: Event Touch Down
 *
 */
 
$("#obj1709").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1709_onTap_activeActionGroupIndex != -1) return;
var obj1709_onTap_runningActionsCount = 0;
var obj1709_onTap_loopCount = 0;
obj1709_onTap_actionGroup0();
});

/*
 *
 *   obj1709: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1709");
	var winTarget = document.getElementById("obj1709");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1709").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1709_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1709_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1709_onTouchDown_activeActionGroupIndex != -1) return;
var obj1709_onTouchDown_runningActionsCount = 0;
var obj1709_onTouchDown_loopCount = 0;
obj1709_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1709: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1709").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1709: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1709").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1709_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1709_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1709_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1709: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1709").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1709_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1709_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1709_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1709_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1685: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1685");
	var winTarget = document.getElementById("obj1685");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1685").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1685_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1685_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1685_onTouchDown_activeActionGroupIndex != -1) return;
var obj1685_onTouchDown_runningActionsCount = 0;
var obj1685_onTouchDown_loopCount = 0;
obj1685_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1685: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1685").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1685: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1685").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1685_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1685_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1685_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1685: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1685").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1685_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1685_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1685_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1685_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj1670: Event Touch Down
 *
 */
 
$("#obj1670").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1670_onTap_activeActionGroupIndex != -1) return;
var obj1670_onTap_runningActionsCount = 0;
var obj1670_onTap_loopCount = 0;
obj1670_onTap_actionGroup0();
});

/*
 *
 *   obj1670: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1670");
	var winTarget = document.getElementById("obj1670");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1670").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1670_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1670_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1670_onTouchDown_activeActionGroupIndex != -1) return;
var obj1670_onTouchDown_runningActionsCount = 0;
var obj1670_onTouchDown_loopCount = 0;
obj1670_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1670: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1670").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1670: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1670").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1670_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1670_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1670_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1670: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1670").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1670_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1670_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1670_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1670_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj1645: Event Touch Down
 *
 */
 
$("#obj1645").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1645_onTap_activeActionGroupIndex != -1) return;
var obj1645_onTap_runningActionsCount = 0;
var obj1645_onTap_loopCount = 0;
obj1645_onTap_actionGroup0();
});

/*
 *
 *   obj1645: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1645");
	var winTarget = document.getElementById("obj1645");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1645").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1645_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1645_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1645_onTouchDown_activeActionGroupIndex != -1) return;
var obj1645_onTouchDown_runningActionsCount = 0;
var obj1645_onTouchDown_loopCount = 0;
obj1645_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1645: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1645").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1645: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1645").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1645_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1645_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1645_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1645: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1645").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1645_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1645_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1645_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1645_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj1630: Event Touch Down
 *
 */
 
$("#obj1630").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1630_onTap_activeActionGroupIndex != -1) return;
var obj1630_onTap_runningActionsCount = 0;
var obj1630_onTap_loopCount = 0;
obj1630_onTap_actionGroup0();
});

/*
 *
 *   obj1630: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1630");
	var winTarget = document.getElementById("obj1630");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1630").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1630_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1630_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1630_onTouchDown_activeActionGroupIndex != -1) return;
var obj1630_onTouchDown_runningActionsCount = 0;
var obj1630_onTouchDown_loopCount = 0;
obj1630_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1630: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1630").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1630: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1630").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1630_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1630_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1630_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1630: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1630").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1630_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1630_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1630_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1630_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj1605: Event Touch Down
 *
 */
 
$("#obj1605").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1605_onTap_activeActionGroupIndex != -1) return;
var obj1605_onTap_runningActionsCount = 0;
var obj1605_onTap_loopCount = 0;
obj1605_onTap_actionGroup0();
});

/*
 *
 *   obj1605: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1605");
	var winTarget = document.getElementById("obj1605");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1605").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1605_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1605_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1605_onTouchDown_activeActionGroupIndex != -1) return;
var obj1605_onTouchDown_runningActionsCount = 0;
var obj1605_onTouchDown_loopCount = 0;
obj1605_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1605: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1605").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1605: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1605").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1605_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1605_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1605_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1605: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1605").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1605_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1605_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1605_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1605_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj1580: Event Touch Down
 *
 */
 
$("#obj1580").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1580_onTap_activeActionGroupIndex != -1) return;
var obj1580_onTap_runningActionsCount = 0;
var obj1580_onTap_loopCount = 0;
obj1580_onTap_actionGroup0();
});

/*
 *
 *   obj1580: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1580");
	var winTarget = document.getElementById("obj1580");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1580").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1580_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1580_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1580_onTouchDown_activeActionGroupIndex != -1) return;
var obj1580_onTouchDown_runningActionsCount = 0;
var obj1580_onTouchDown_loopCount = 0;
obj1580_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1580: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1580").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1580: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1580").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1580_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1580_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1580_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1580: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1580").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1580_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1580_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1580_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1580_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj1565: Event Touch Down
 *
 */
 
$("#obj1565").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1565_onTap_activeActionGroupIndex != -1) return;
var obj1565_onTap_runningActionsCount = 0;
var obj1565_onTap_loopCount = 0;
obj1565_onTap_actionGroup0();
});

/*
 *
 *   obj1565: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1565");
	var winTarget = document.getElementById("obj1565");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1565").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1565_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1565_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1565_onTouchDown_activeActionGroupIndex != -1) return;
var obj1565_onTouchDown_runningActionsCount = 0;
var obj1565_onTouchDown_loopCount = 0;
obj1565_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1565: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1565").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1565: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1565").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1565_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1565_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1565_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1565: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1565").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1565_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1565_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1565_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1565_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj1549: Event Touch Down
 *
 */
 
$("#obj1549").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1549_onTap_activeActionGroupIndex != -1) return;
var obj1549_onTap_runningActionsCount = 0;
var obj1549_onTap_loopCount = 0;
obj1549_onTap_actionGroup0();
});

/*
 *
 *   obj1549: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1549");
	var winTarget = document.getElementById("obj1549");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1549").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1549_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1549_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1549_onTouchDown_activeActionGroupIndex != -1) return;
var obj1549_onTouchDown_runningActionsCount = 0;
var obj1549_onTouchDown_loopCount = 0;
obj1549_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1549: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1549").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1549: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1549").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1549_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1549_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1549_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1549: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1549").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1549_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1549_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1549_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1549_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});



/*
 *
 *   obj1524: Event Touch Down
 *
 */
 
$("#obj1524").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1524_onTap_activeActionGroupIndex != -1) return;
var obj1524_onTap_runningActionsCount = 0;
var obj1524_onTap_loopCount = 0;
obj1524_onTap_actionGroup0();
});

/*
 *
 *   obj1524: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1524");
	var winTarget = document.getElementById("obj1524");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1524").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1524_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1524_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1524_onTouchDown_activeActionGroupIndex != -1) return;
var obj1524_onTouchDown_runningActionsCount = 0;
var obj1524_onTouchDown_loopCount = 0;
obj1524_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1524: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1524").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1524: Event SCActionDragDrop747_droppedOutsideTargetActions
 *
 */
$("#obj1524").bind("SCActionDragDrop747_droppedOutsideTargetActions", function(event) {
	if (window.obj1524_SCActionDragDrop747_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1524_SCActionDragDrop747_droppedOutsideTargetActions_loopCount = 0;
obj1524_SCActionDragDrop747_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1524: Event SCActionDragDrop747_droppedInsideTargetActions
 *
 */
$("#obj1524").one("SCActionDragDrop747_droppedInsideTargetActions", function(event) {
	if (window.obj1524_SCActionDragDrop747_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1524_SCActionDragDrop747_droppedInsideTargetActions_runningActionsCount = 0;
var obj1524_SCActionDragDrop747_droppedInsideTargetActions_loopCount = 0;
obj1524_SCActionDragDrop747_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj1517: Event Show
 *
 */
 
$("#obj1517").bind('SCEventShow', function(event) {
	if (window.obj1517_onShow_activeActionGroupIndex != -1) return;
var obj1517_onShow_runningActionsCount = 0;
var obj1517_onShow_loopCount = 0;
obj1517_onShow_actionGroup0();
});









/*
 *
 *   obj1513: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj1513").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj1513_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj1513_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1513_SCEventCounterReachedTargetValue_loopCount = 0;
obj1513_SCEventCounterReachedTargetValue_actionGroup0();
});



/*
 *
 *   obj2008: Event Touch Down
 *
 */
 
$("#obj2008").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2008_onTap_activeActionGroupIndex != -1) return;
var obj2008_onTap_runningActionsCount = 0;
var obj2008_onTap_loopCount = 0;
obj2008_onTap_actionGroup0();
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
	
$("#obj1502").trigger('SCEventShow');
$("#obj2017").trigger('SCEventShow');
$("#obj1732").trigger('SCEventShow');
$("#obj1730").trigger('SCEventShow');
$("#obj1728").trigger('SCEventShow');
$("#obj1726").trigger('SCEventShow');
$("#obj1709").trigger('SCEventShow');
$("#obj1685").trigger('SCEventShow');
$("#obj1670").trigger('SCEventShow');
$("#obj1645").trigger('SCEventShow');
$("#obj1630").trigger('SCEventShow');
$("#obj1605").trigger('SCEventShow');
$("#obj1580").trigger('SCEventShow');
$("#obj1565").trigger('SCEventShow');
$("#obj1549").trigger('SCEventShow');
$("#obj1524").trigger('SCEventShow');
$("#obj2008").trigger('SCEventShow');
$("#obj2012").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});