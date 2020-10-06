pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 4;
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
var obj1081_onShow_activeActionGroupIndex = -1;
var obj1081_onShow_runningActionsCount = 0;
var obj1081_onShow_loopCount = 0;
var obj466_onShow_activeActionGroupIndex = -1;
var obj466_onShow_runningActionsCount = 0;
var obj466_onShow_loopCount = 0;
var obj396_onShow_activeActionGroupIndex = -1;
var obj396_onShow_runningActionsCount = 0;
var obj396_onShow_loopCount = 0;
var obj438_onShow_activeActionGroupIndex = -1;
var obj438_onShow_runningActionsCount = 0;
var obj438_onShow_loopCount = 0;
var obj392_onShow_activeActionGroupIndex = -1;
var obj392_onShow_runningActionsCount = 0;
var obj392_onShow_loopCount = 0;
var obj938_onDrag_activeActionGroupIndex = -1;
var obj938_onDrag_runningActionsCount = 0;
var obj938_onDrag_loopCount = 0;
var obj938_onTouchDown_activeActionGroupIndex = -1;
var obj938_onTouchDown_runningActionsCount = 0;
var obj938_onTouchDown_loopCount = 0;
var obj938_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = 0;
var obj938_SCActionDragDrop407_droppedOutsideTargetActions_loopCount = 0;
var obj938_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj938_droppedInsideTargetActions_runningActionsCount = 0;
var obj938_droppedInsideTargetActions_loopCount = 0;
var obj913_onShow_activeActionGroupIndex = -1;
var obj913_onShow_runningActionsCount = 0;
var obj913_onShow_loopCount = 0;
var obj462_onShow_activeActionGroupIndex = -1;
var obj462_onShow_runningActionsCount = 0;
var obj462_onShow_loopCount = 0;
var obj400_onShow_activeActionGroupIndex = -1;
var obj400_onShow_runningActionsCount = 0;
var obj400_onShow_loopCount = 0;
var obj414_onDrag_activeActionGroupIndex = -1;
var obj414_onDrag_runningActionsCount = 0;
var obj414_onDrag_loopCount = 0;
var obj414_onTouchDown_activeActionGroupIndex = -1;
var obj414_onTouchDown_runningActionsCount = 0;
var obj414_onTouchDown_loopCount = 0;
var obj414_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj414_droppedInsideTargetActions_runningActionsCount = 0;
var obj414_droppedInsideTargetActions_loopCount = 0;
var obj950_onDrag_activeActionGroupIndex = -1;
var obj950_onDrag_runningActionsCount = 0;
var obj950_onDrag_loopCount = 0;
var obj950_onTouchDown_activeActionGroupIndex = -1;
var obj950_onTouchDown_runningActionsCount = 0;
var obj950_onTouchDown_loopCount = 0;
var obj950_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj950_droppedInsideTargetActions_runningActionsCount = 0;
var obj950_droppedInsideTargetActions_loopCount = 0;
var obj430_onDrag_activeActionGroupIndex = -1;
var obj430_onDrag_runningActionsCount = 0;
var obj430_onDrag_loopCount = 0;
var obj430_onTouchDown_activeActionGroupIndex = -1;
var obj430_onTouchDown_runningActionsCount = 0;
var obj430_onTouchDown_loopCount = 0;
var obj430_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj430_droppedInsideTargetActions_runningActionsCount = 0;
var obj430_droppedInsideTargetActions_loopCount = 0;
var obj422_onDrag_activeActionGroupIndex = -1;
var obj422_onDrag_runningActionsCount = 0;
var obj422_onDrag_loopCount = 0;
var obj422_onTouchDown_activeActionGroupIndex = -1;
var obj422_onTouchDown_runningActionsCount = 0;
var obj422_onTouchDown_loopCount = 0;
var obj422_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj422_droppedInsideTargetActions_runningActionsCount = 0;
var obj422_droppedInsideTargetActions_loopCount = 0;
var obj404_onDrag_activeActionGroupIndex = -1;
var obj404_onDrag_runningActionsCount = 0;
var obj404_onDrag_loopCount = 0;
var obj404_onTouchDown_activeActionGroupIndex = -1;
var obj404_onTouchDown_runningActionsCount = 0;
var obj404_onTouchDown_loopCount = 0;
var obj404_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = 0;
var obj404_SCActionDragDrop407_droppedOutsideTargetActions_loopCount = 0;
var obj404_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj404_droppedInsideTargetActions_runningActionsCount = 0;
var obj404_droppedInsideTargetActions_loopCount = 0;
var obj384_onDrag_activeActionGroupIndex = -1;
var obj384_onDrag_runningActionsCount = 0;
var obj384_onDrag_loopCount = 0;
var obj384_onTouchDown_activeActionGroupIndex = -1;
var obj384_onTouchDown_runningActionsCount = 0;
var obj384_onTouchDown_loopCount = 0;
var obj384_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj384_droppedInsideTargetActions_runningActionsCount = 0;
var obj384_droppedInsideTargetActions_loopCount = 0;
var obj377_onDrag_activeActionGroupIndex = -1;
var obj377_onDrag_runningActionsCount = 0;
var obj377_onDrag_loopCount = 0;
var obj377_onTouchDown_activeActionGroupIndex = -1;
var obj377_onTouchDown_runningActionsCount = 0;
var obj377_onTouchDown_loopCount = 0;
var obj377_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj377_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj370_onDrag_activeActionGroupIndex = -1;
var obj370_onDrag_runningActionsCount = 0;
var obj370_onDrag_loopCount = 0;
var obj370_onTouchDown_activeActionGroupIndex = -1;
var obj370_onTouchDown_runningActionsCount = 0;
var obj370_onTouchDown_loopCount = 0;
var obj370_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = 0;
var obj370_SCActionDragDrop373_droppedOutsideTargetActions_loopCount = 0;
var obj363_onDrag_activeActionGroupIndex = -1;
var obj363_onDrag_runningActionsCount = 0;
var obj363_onDrag_loopCount = 0;
var obj363_onTouchDown_activeActionGroupIndex = -1;
var obj363_onTouchDown_runningActionsCount = 0;
var obj363_onTouchDown_loopCount = 0;
var obj363_SCActionDragDrop366_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount = 0;
var obj363_SCActionDragDrop366_droppedOutsideTargetActions_loopCount = 0;
var obj356_onDrag_activeActionGroupIndex = -1;
var obj356_onDrag_runningActionsCount = 0;
var obj356_onDrag_loopCount = 0;
var obj356_onTouchDown_activeActionGroupIndex = -1;
var obj356_onTouchDown_runningActionsCount = 0;
var obj356_onTouchDown_loopCount = 0;
var obj356_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = 0;
var obj356_SCActionDragDrop359_droppedOutsideTargetActions_loopCount = 0;
var obj349_onDrag_activeActionGroupIndex = -1;
var obj349_onDrag_runningActionsCount = 0;
var obj349_onDrag_loopCount = 0;
var obj349_onTouchDown_activeActionGroupIndex = -1;
var obj349_onTouchDown_runningActionsCount = 0;
var obj349_onTouchDown_loopCount = 0;
var obj349_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = 0;
var obj349_SCActionDragDrop352_droppedOutsideTargetActions_loopCount = 0;
var obj342_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj342_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj342_SCEventCounterReachedTargetValue_loopCount = 0;
var obj1085_onDrag_activeActionGroupIndex = -1;
var obj1085_onDrag_runningActionsCount = 0;
var obj1085_onDrag_loopCount = 0;
var obj1085_onTouchDown_activeActionGroupIndex = -1;
var obj1085_onTouchDown_runningActionsCount = 0;
var obj1085_onTouchDown_loopCount = 0;
var obj1085_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1085_droppedInsideTargetActions_runningActionsCount = 0;
var obj1085_droppedInsideTargetActions_loopCount = 0;
var obj1175_onDrag_activeActionGroupIndex = -1;
var obj1175_onDrag_runningActionsCount = 0;
var obj1175_onDrag_loopCount = 0;
var obj1175_onTouchDown_activeActionGroupIndex = -1;
var obj1175_onTouchDown_runningActionsCount = 0;
var obj1175_onTouchDown_loopCount = 0;
var obj1175_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1175_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj1178_onDrag_activeActionGroupIndex = -1;
var obj1178_onDrag_runningActionsCount = 0;
var obj1178_onDrag_loopCount = 0;
var obj1178_onTouchDown_activeActionGroupIndex = -1;
var obj1178_onTouchDown_runningActionsCount = 0;
var obj1178_onTouchDown_loopCount = 0;
var obj1178_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1178_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj1181_onDrag_activeActionGroupIndex = -1;
var obj1181_onDrag_runningActionsCount = 0;
var obj1181_onDrag_loopCount = 0;
var obj1181_onTouchDown_activeActionGroupIndex = -1;
var obj1181_onTouchDown_runningActionsCount = 0;
var obj1181_onTouchDown_loopCount = 0;
var obj1181_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1181_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj1185_onDrag_activeActionGroupIndex = -1;
var obj1185_onDrag_runningActionsCount = 0;
var obj1185_onDrag_loopCount = 0;
var obj1185_onTouchDown_activeActionGroupIndex = -1;
var obj1185_onTouchDown_runningActionsCount = 0;
var obj1185_onTouchDown_loopCount = 0;
var obj1185_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1185_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj1187_onDrag_activeActionGroupIndex = -1;
var obj1187_onDrag_runningActionsCount = 0;
var obj1187_onDrag_loopCount = 0;
var obj1187_onTouchDown_activeActionGroupIndex = -1;
var obj1187_onTouchDown_runningActionsCount = 0;
var obj1187_onTouchDown_loopCount = 0;
var obj1187_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1187_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj2049_onTap_activeActionGroupIndex = -1;
var obj2049_onTap_runningActionsCount = 0;
var obj2049_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj342_counterValue = 0;
var obj342_counterTargetValue = 8;
var obj342_counterCanExceedTargetValue = false;
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
		
obj1081_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1081_onShow_activeActionGroupIndex = -1;
		$("#obj1081").trigger("obj1081_onShow_ended");
		
		return;
	}
	window.obj1081_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj342 
incrementCounter_1084();
function incrementCounter_1084() {
	window.obj1081_onShow_runningActionsCount = obj1081_onShow_runningActionsCount + 1;

	var oldValue = obj342_counterValue;
	obj342_counterValue = obj342_counterValue + 1;
	if (! obj342_counterCanExceedTargetValue && obj342_counterValue > obj342_counterTargetValue) {
		obj342_counterValue = obj342_counterTargetValue;
	}
	if (oldValue != obj342_counterValue) {
		$("#obj342").trigger('SCEventCounterValueChange');
		$("#obj342").trigger('SCEventCounterIncrease');
		if (obj342_counterValue == obj342_counterTargetValue)
			$("#obj342").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1081_onShow_runningActionsCount = window.obj1081_onShow_runningActionsCount - 1;
if (window.obj1081_onShow_runningActionsCount == 0) {
	obj1081_onShow_actionGroup1();
} }, 1);
}





};
obj1081_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1081_onShow_activeActionGroupIndex = -1;
		$("#obj1081").trigger("obj1081_onShow_ended");
		
		return;
	}
	window.obj1081_onShow_activeActionGroupIndex = 1;
	





















};
obj466_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj466_onShow_activeActionGroupIndex = -1;
		$("#obj466").trigger("obj466_onShow_ended");
		
		return;
	}
	window.obj466_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj342 
incrementCounter_469();
function incrementCounter_469() {
	window.obj466_onShow_runningActionsCount = obj466_onShow_runningActionsCount + 1;

	var oldValue = obj342_counterValue;
	obj342_counterValue = obj342_counterValue + 1;
	if (! obj342_counterCanExceedTargetValue && obj342_counterValue > obj342_counterTargetValue) {
		obj342_counterValue = obj342_counterTargetValue;
	}
	if (oldValue != obj342_counterValue) {
		$("#obj342").trigger('SCEventCounterValueChange');
		$("#obj342").trigger('SCEventCounterIncrease');
		if (obj342_counterValue == obj342_counterTargetValue)
			$("#obj342").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj466_onShow_runningActionsCount = window.obj466_onShow_runningActionsCount - 1;
if (window.obj466_onShow_runningActionsCount == 0) {
	obj466_onShow_actionGroup1();
} }, 1);
}





};
obj466_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj466_onShow_activeActionGroupIndex = -1;
		$("#obj466").trigger("obj466_onShow_ended");
		
		return;
	}
	window.obj466_onShow_activeActionGroupIndex = 1;
	





















};
obj396_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj396_onShow_activeActionGroupIndex = -1;
		$("#obj396").trigger("obj396_onShow_ended");
		
		return;
	}
	window.obj396_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj342 
incrementCounter_399();
function incrementCounter_399() {
	window.obj396_onShow_runningActionsCount = obj396_onShow_runningActionsCount + 1;

	var oldValue = obj342_counterValue;
	obj342_counterValue = obj342_counterValue + 1;
	if (! obj342_counterCanExceedTargetValue && obj342_counterValue > obj342_counterTargetValue) {
		obj342_counterValue = obj342_counterTargetValue;
	}
	if (oldValue != obj342_counterValue) {
		$("#obj342").trigger('SCEventCounterValueChange');
		$("#obj342").trigger('SCEventCounterIncrease');
		if (obj342_counterValue == obj342_counterTargetValue)
			$("#obj342").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj396_onShow_runningActionsCount = window.obj396_onShow_runningActionsCount - 1;
if (window.obj396_onShow_runningActionsCount == 0) {
	obj396_onShow_actionGroup1();
} }, 1);
}





};
obj396_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj396_onShow_activeActionGroupIndex = -1;
		$("#obj396").trigger("obj396_onShow_ended");
		
		return;
	}
	window.obj396_onShow_activeActionGroupIndex = 1;
	





















};
obj438_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj438_onShow_activeActionGroupIndex = -1;
		$("#obj438").trigger("obj438_onShow_ended");
		
		return;
	}
	window.obj438_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj342 
incrementCounter_959();
function incrementCounter_959() {
	window.obj438_onShow_runningActionsCount = obj438_onShow_runningActionsCount + 1;

	var oldValue = obj342_counterValue;
	obj342_counterValue = obj342_counterValue + 1;
	if (! obj342_counterCanExceedTargetValue && obj342_counterValue > obj342_counterTargetValue) {
		obj342_counterValue = obj342_counterTargetValue;
	}
	if (oldValue != obj342_counterValue) {
		$("#obj342").trigger('SCEventCounterValueChange');
		$("#obj342").trigger('SCEventCounterIncrease');
		if (obj342_counterValue == obj342_counterTargetValue)
			$("#obj342").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj438_onShow_runningActionsCount = window.obj438_onShow_runningActionsCount - 1;
if (window.obj438_onShow_runningActionsCount == 0) {
	obj438_onShow_actionGroup1();
} }, 1);
}





};
obj438_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj438_onShow_activeActionGroupIndex = -1;
		$("#obj438").trigger("obj438_onShow_ended");
		
		return;
	}
	window.obj438_onShow_activeActionGroupIndex = 1;
	





















};
obj392_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj392_onShow_activeActionGroupIndex = -1;
		$("#obj392").trigger("obj392_onShow_ended");
		
		return;
	}
	window.obj392_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj342 
incrementCounter_395();
function incrementCounter_395() {
	window.obj392_onShow_runningActionsCount = obj392_onShow_runningActionsCount + 1;

	var oldValue = obj342_counterValue;
	obj342_counterValue = obj342_counterValue + 1;
	if (! obj342_counterCanExceedTargetValue && obj342_counterValue > obj342_counterTargetValue) {
		obj342_counterValue = obj342_counterTargetValue;
	}
	if (oldValue != obj342_counterValue) {
		$("#obj342").trigger('SCEventCounterValueChange');
		$("#obj342").trigger('SCEventCounterIncrease');
		if (obj342_counterValue == obj342_counterTargetValue)
			$("#obj342").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj392_onShow_runningActionsCount = window.obj392_onShow_runningActionsCount - 1;
if (window.obj392_onShow_runningActionsCount == 0) {
	obj392_onShow_actionGroup1();
} }, 1);
}





};
obj392_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj392_onShow_activeActionGroupIndex = -1;
		$("#obj392").trigger("obj392_onShow_ended");
		
		return;
	}
	window.obj392_onShow_activeActionGroupIndex = 1;
	





















};
obj938_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj938_onTouchDown_activeActionGroupIndex = -1;
		$("#obj938").trigger("obj938_onTouchDown_ended");
		
		return;
	}
	window.obj938_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj938");
//	action: dragDrop
//	target: obj938 
dragDrop_941();
function dragDrop_941() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj938_onTouchDown_runningActionsCount = obj938_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj938');
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
    	window.obj938_onTouchDown_runningActionsCount = window.obj938_onTouchDown_runningActionsCount - 1;
if (window.obj938_onTouchDown_runningActionsCount == 0) {
	obj938_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj924");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_941 = false;
    	var dropped_id_941;
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
					dropped_941 = true;
					dropped_id_941 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_941) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj938").trigger('SCActionDragDrop407_droppedOutsideTargetActions');
		}
    });
}











};
obj938_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj938_onTouchDown_activeActionGroupIndex = -1;
		$("#obj938").trigger("obj938_onTouchDown_ended");
		
		return;
	}
	window.obj938_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj938_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj938").trigger("obj938_SCActionDragDrop407_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj938 
show_947();
function show_947() {
	var element = "#obj938";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj938_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1();
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
		window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj938_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj938_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj938 
move_1251();
function move_1251() {
	window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj938");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 417;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj938_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj938_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj938").trigger("obj938_SCActionDragDrop407_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj938_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj938").trigger("obj938_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj938_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj938 
hide_944();
function hide_944() {
	var element = "#obj938";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj938_droppedInsideTargetActions_runningActionsCount = obj938_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj938_droppedInsideTargetActions_runningActionsCount = window.obj938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj938_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_944(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj938_droppedInsideTargetActions_runningActionsCount = window.obj938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj938_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_943();
function runjs_943() {
	window.obj938_droppedInsideTargetActions_runningActionsCount = obj938_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj924"));
	setTimeout(function() {
		window.obj938_droppedInsideTargetActions_runningActionsCount = window.obj938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj938_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj938_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj938").trigger("obj938_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj938_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj913 
show_945();
function show_945() {
	var element = "#obj913";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj938_droppedInsideTargetActions_runningActionsCount = obj938_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj938_droppedInsideTargetActions_runningActionsCount = window.obj938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj938_droppedInsideTargetActions_actionGroup2();
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
		window.obj938_droppedInsideTargetActions_runningActionsCount = window.obj938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj938_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj938_droppedInsideTargetActions_runningActionsCount = window.obj938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj938_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj938_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj938").trigger("obj938_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj938_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj913_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj913_onShow_activeActionGroupIndex = -1;
		$("#obj913").trigger("obj913_onShow_ended");
		
		return;
	}
	window.obj913_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj342 
incrementCounter_949();
function incrementCounter_949() {
	window.obj913_onShow_runningActionsCount = obj913_onShow_runningActionsCount + 1;

	var oldValue = obj342_counterValue;
	obj342_counterValue = obj342_counterValue + 1;
	if (! obj342_counterCanExceedTargetValue && obj342_counterValue > obj342_counterTargetValue) {
		obj342_counterValue = obj342_counterTargetValue;
	}
	if (oldValue != obj342_counterValue) {
		$("#obj342").trigger('SCEventCounterValueChange');
		$("#obj342").trigger('SCEventCounterIncrease');
		if (obj342_counterValue == obj342_counterTargetValue)
			$("#obj342").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj913_onShow_runningActionsCount = window.obj913_onShow_runningActionsCount - 1;
if (window.obj913_onShow_runningActionsCount == 0) {
	obj913_onShow_actionGroup1();
} }, 1);
}





};
obj913_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj913_onShow_activeActionGroupIndex = -1;
		$("#obj913").trigger("obj913_onShow_ended");
		
		return;
	}
	window.obj913_onShow_activeActionGroupIndex = 1;
	





















};
obj462_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj462_onShow_activeActionGroupIndex = -1;
		$("#obj462").trigger("obj462_onShow_ended");
		
		return;
	}
	window.obj462_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj342 
incrementCounter_465();
function incrementCounter_465() {
	window.obj462_onShow_runningActionsCount = obj462_onShow_runningActionsCount + 1;

	var oldValue = obj342_counterValue;
	obj342_counterValue = obj342_counterValue + 1;
	if (! obj342_counterCanExceedTargetValue && obj342_counterValue > obj342_counterTargetValue) {
		obj342_counterValue = obj342_counterTargetValue;
	}
	if (oldValue != obj342_counterValue) {
		$("#obj342").trigger('SCEventCounterValueChange');
		$("#obj342").trigger('SCEventCounterIncrease');
		if (obj342_counterValue == obj342_counterTargetValue)
			$("#obj342").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj462_onShow_runningActionsCount = window.obj462_onShow_runningActionsCount - 1;
if (window.obj462_onShow_runningActionsCount == 0) {
	obj462_onShow_actionGroup1();
} }, 1);
}





};
obj462_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj462_onShow_activeActionGroupIndex = -1;
		$("#obj462").trigger("obj462_onShow_ended");
		
		return;
	}
	window.obj462_onShow_activeActionGroupIndex = 1;
	





















};
obj400_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj400_onShow_activeActionGroupIndex = -1;
		$("#obj400").trigger("obj400_onShow_ended");
		
		return;
	}
	window.obj400_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj342 
incrementCounter_403();
function incrementCounter_403() {
	window.obj400_onShow_runningActionsCount = obj400_onShow_runningActionsCount + 1;

	var oldValue = obj342_counterValue;
	obj342_counterValue = obj342_counterValue + 1;
	if (! obj342_counterCanExceedTargetValue && obj342_counterValue > obj342_counterTargetValue) {
		obj342_counterValue = obj342_counterTargetValue;
	}
	if (oldValue != obj342_counterValue) {
		$("#obj342").trigger('SCEventCounterValueChange');
		$("#obj342").trigger('SCEventCounterIncrease');
		if (obj342_counterValue == obj342_counterTargetValue)
			$("#obj342").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj400_onShow_runningActionsCount = window.obj400_onShow_runningActionsCount - 1;
if (window.obj400_onShow_runningActionsCount == 0) {
	obj400_onShow_actionGroup1();
} }, 1);
}





};
obj400_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj400_onShow_activeActionGroupIndex = -1;
		$("#obj400").trigger("obj400_onShow_ended");
		
		return;
	}
	window.obj400_onShow_activeActionGroupIndex = 1;
	





















};
obj414_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj414_onTouchDown_activeActionGroupIndex = -1;
		$("#obj414").trigger("obj414_onTouchDown_ended");
		
		return;
	}
	window.obj414_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj414");
//	action: dragDrop
//	target: obj414 
dragDrop_417();
function dragDrop_417() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj414_onTouchDown_runningActionsCount = obj414_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj414');
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
    	window.obj414_onTouchDown_runningActionsCount = window.obj414_onTouchDown_runningActionsCount - 1;
if (window.obj414_onTouchDown_runningActionsCount == 0) {
	obj414_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj454");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_417 = false;
    	var dropped_id_417;
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
					dropped_417 = true;
					dropped_id_417 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_417) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj414_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj414_onTouchDown_activeActionGroupIndex = -1;
		$("#obj414").trigger("obj414_onTouchDown_ended");
		
		return;
	}
	window.obj414_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj414_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj414").trigger("obj414_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj414_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj414 
hide_420();
function hide_420() {
	var element = "#obj414";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj414_droppedInsideTargetActions_runningActionsCount = obj414_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj414_droppedInsideTargetActions_runningActionsCount = window.obj414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj414_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_420(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj414_droppedInsideTargetActions_runningActionsCount = window.obj414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj414_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_419();
function runjs_419() {
	window.obj414_droppedInsideTargetActions_runningActionsCount = obj414_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj454"));
	setTimeout(function() {
		window.obj414_droppedInsideTargetActions_runningActionsCount = window.obj414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj414_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj414_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj414").trigger("obj414_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj414_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj396 
show_421();
function show_421() {
	var element = "#obj396";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj414_droppedInsideTargetActions_runningActionsCount = obj414_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj414_droppedInsideTargetActions_runningActionsCount = window.obj414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj414_droppedInsideTargetActions_actionGroup2();
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
		window.obj414_droppedInsideTargetActions_runningActionsCount = window.obj414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj414_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj414_droppedInsideTargetActions_runningActionsCount = window.obj414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj414_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj414_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj414").trigger("obj414_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj414_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj950_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj950_onTouchDown_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_onTouchDown_ended");
		
		return;
	}
	window.obj950_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj950");
//	action: dragDrop
//	target: obj950 
dragDrop_953();
function dragDrop_953() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj950_onTouchDown_runningActionsCount = obj950_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj950');
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
    	window.obj950_onTouchDown_runningActionsCount = window.obj950_onTouchDown_runningActionsCount - 1;
if (window.obj950_onTouchDown_runningActionsCount == 0) {
	obj950_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj456");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_953 = false;
    	var dropped_id_953;
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
					dropped_953 = true;
					dropped_id_953 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_953) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj950_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj950_onTouchDown_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_onTouchDown_ended");
		
		return;
	}
	window.obj950_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj950_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj950_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj950_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj950 
hide_956();
function hide_956() {
	var element = "#obj950";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj950_droppedInsideTargetActions_runningActionsCount = obj950_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj950_droppedInsideTargetActions_runningActionsCount = window.obj950_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj950_droppedInsideTargetActions_runningActionsCount == 0) {
	obj950_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_956(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj950_droppedInsideTargetActions_runningActionsCount = window.obj950_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj950_droppedInsideTargetActions_runningActionsCount == 0) {
	obj950_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_955();
function runjs_955() {
	window.obj950_droppedInsideTargetActions_runningActionsCount = obj950_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj456"));
	setTimeout(function() {
		window.obj950_droppedInsideTargetActions_runningActionsCount = window.obj950_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj950_droppedInsideTargetActions_runningActionsCount == 0) {
	obj950_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj950_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj950_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj950_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj438 
show_957();
function show_957() {
	var element = "#obj438";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj950_droppedInsideTargetActions_runningActionsCount = obj950_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj950_droppedInsideTargetActions_runningActionsCount = window.obj950_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj950_droppedInsideTargetActions_runningActionsCount == 0) {
	obj950_droppedInsideTargetActions_actionGroup2();
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
		window.obj950_droppedInsideTargetActions_runningActionsCount = window.obj950_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj950_droppedInsideTargetActions_runningActionsCount == 0) {
	obj950_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj950_droppedInsideTargetActions_runningActionsCount = window.obj950_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj950_droppedInsideTargetActions_runningActionsCount == 0) {
	obj950_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj950_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj950_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj950").trigger("obj950_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj950_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj430_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj430_onTouchDown_activeActionGroupIndex = -1;
		$("#obj430").trigger("obj430_onTouchDown_ended");
		
		return;
	}
	window.obj430_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj430");
//	action: dragDrop
//	target: obj430 
dragDrop_433();
function dragDrop_433() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj430_onTouchDown_runningActionsCount = obj430_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj430');
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
    	window.obj430_onTouchDown_runningActionsCount = window.obj430_onTouchDown_runningActionsCount - 1;
if (window.obj430_onTouchDown_runningActionsCount == 0) {
	obj430_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj448");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_433 = false;
    	var dropped_id_433;
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
					dropped_433 = true;
					dropped_id_433 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_433) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj430_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj430_onTouchDown_activeActionGroupIndex = -1;
		$("#obj430").trigger("obj430_onTouchDown_ended");
		
		return;
	}
	window.obj430_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj430_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj430_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj430").trigger("obj430_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj430_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj430 
hide_436();
function hide_436() {
	var element = "#obj430";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj430_droppedInsideTargetActions_runningActionsCount = obj430_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj430_droppedInsideTargetActions_runningActionsCount = window.obj430_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj430_droppedInsideTargetActions_runningActionsCount == 0) {
	obj430_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_436(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj430_droppedInsideTargetActions_runningActionsCount = window.obj430_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj430_droppedInsideTargetActions_runningActionsCount == 0) {
	obj430_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_435();
function runjs_435() {
	window.obj430_droppedInsideTargetActions_runningActionsCount = obj430_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj448"));
	setTimeout(function() {
		window.obj430_droppedInsideTargetActions_runningActionsCount = window.obj430_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj430_droppedInsideTargetActions_runningActionsCount == 0) {
	obj430_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj430_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj430_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj430").trigger("obj430_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj430_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj466 
show_437();
function show_437() {
	var element = "#obj466";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj430_droppedInsideTargetActions_runningActionsCount = obj430_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj430_droppedInsideTargetActions_runningActionsCount = window.obj430_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj430_droppedInsideTargetActions_runningActionsCount == 0) {
	obj430_droppedInsideTargetActions_actionGroup2();
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
		window.obj430_droppedInsideTargetActions_runningActionsCount = window.obj430_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj430_droppedInsideTargetActions_runningActionsCount == 0) {
	obj430_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj430_droppedInsideTargetActions_runningActionsCount = window.obj430_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj430_droppedInsideTargetActions_runningActionsCount == 0) {
	obj430_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj430_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj430_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj430").trigger("obj430_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj430_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj422_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj422_onTouchDown_activeActionGroupIndex = -1;
		$("#obj422").trigger("obj422_onTouchDown_ended");
		
		return;
	}
	window.obj422_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj422");
//	action: dragDrop
//	target: obj422 
dragDrop_425();
function dragDrop_425() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj422_onTouchDown_runningActionsCount = obj422_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj422');
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
    	window.obj422_onTouchDown_runningActionsCount = window.obj422_onTouchDown_runningActionsCount - 1;
if (window.obj422_onTouchDown_runningActionsCount == 0) {
	obj422_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj452");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_425 = false;
    	var dropped_id_425;
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
					dropped_425 = true;
					dropped_id_425 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_425) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj422_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj422_onTouchDown_activeActionGroupIndex = -1;
		$("#obj422").trigger("obj422_onTouchDown_ended");
		
		return;
	}
	window.obj422_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj422_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj422_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj422").trigger("obj422_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj422_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj422 
hide_428();
function hide_428() {
	var element = "#obj422";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj422_droppedInsideTargetActions_runningActionsCount = obj422_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj422_droppedInsideTargetActions_runningActionsCount = window.obj422_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj422_droppedInsideTargetActions_runningActionsCount == 0) {
	obj422_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_428(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj422_droppedInsideTargetActions_runningActionsCount = window.obj422_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj422_droppedInsideTargetActions_runningActionsCount == 0) {
	obj422_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_427();
function runjs_427() {
	window.obj422_droppedInsideTargetActions_runningActionsCount = obj422_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj452"));
	setTimeout(function() {
		window.obj422_droppedInsideTargetActions_runningActionsCount = window.obj422_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj422_droppedInsideTargetActions_runningActionsCount == 0) {
	obj422_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj422_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj422_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj422").trigger("obj422_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj422_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj462 
show_429();
function show_429() {
	var element = "#obj462";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj422_droppedInsideTargetActions_runningActionsCount = obj422_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj422_droppedInsideTargetActions_runningActionsCount = window.obj422_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj422_droppedInsideTargetActions_runningActionsCount == 0) {
	obj422_droppedInsideTargetActions_actionGroup2();
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
		window.obj422_droppedInsideTargetActions_runningActionsCount = window.obj422_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj422_droppedInsideTargetActions_runningActionsCount == 0) {
	obj422_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj422_droppedInsideTargetActions_runningActionsCount = window.obj422_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj422_droppedInsideTargetActions_runningActionsCount == 0) {
	obj422_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj422_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj422_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj422").trigger("obj422_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj422_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj404_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj404_onTouchDown_activeActionGroupIndex = -1;
		$("#obj404").trigger("obj404_onTouchDown_ended");
		
		return;
	}
	window.obj404_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj404");
//	action: dragDrop
//	target: obj404 
dragDrop_407();
function dragDrop_407() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj404_onTouchDown_runningActionsCount = obj404_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj404');
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
    	window.obj404_onTouchDown_runningActionsCount = window.obj404_onTouchDown_runningActionsCount - 1;
if (window.obj404_onTouchDown_runningActionsCount == 0) {
	obj404_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj450");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_407 = false;
    	var dropped_id_407;
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
					dropped_407 = true;
					dropped_id_407 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_407) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj404").trigger('SCActionDragDrop407_droppedOutsideTargetActions');
		}
    });
}











};
obj404_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj404_onTouchDown_activeActionGroupIndex = -1;
		$("#obj404").trigger("obj404_onTouchDown_ended");
		
		return;
	}
	window.obj404_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj404_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj404").trigger("obj404_SCActionDragDrop407_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj404 
show_413();
function show_413() {
	var element = "#obj404";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj404_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1();
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
		window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj404_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj404_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj404 
move_1232();
function move_1232() {
	window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj404");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1219;
	var moveY = 203;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj404_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj404_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj404").trigger("obj404_SCActionDragDrop407_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj404_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj404_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj404").trigger("obj404_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj404_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj404 
hide_410();
function hide_410() {
	var element = "#obj404";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj404_droppedInsideTargetActions_runningActionsCount = obj404_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj404_droppedInsideTargetActions_runningActionsCount = window.obj404_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj404_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_410(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj404_droppedInsideTargetActions_runningActionsCount = window.obj404_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj404_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_409();
function runjs_409() {
	window.obj404_droppedInsideTargetActions_runningActionsCount = obj404_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj450"));
	setTimeout(function() {
		window.obj404_droppedInsideTargetActions_runningActionsCount = window.obj404_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj404_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj404_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj404_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj404").trigger("obj404_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj404_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj400 
show_411();
function show_411() {
	var element = "#obj400";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj404_droppedInsideTargetActions_runningActionsCount = obj404_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj404_droppedInsideTargetActions_runningActionsCount = window.obj404_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj404_droppedInsideTargetActions_actionGroup2();
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
		window.obj404_droppedInsideTargetActions_runningActionsCount = window.obj404_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj404_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj404_droppedInsideTargetActions_runningActionsCount = window.obj404_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj404_droppedInsideTargetActions_runningActionsCount == 0) {
	obj404_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj404_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj404_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj404").trigger("obj404_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj404_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj384_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj384_onTouchDown_activeActionGroupIndex = -1;
		$("#obj384").trigger("obj384_onTouchDown_ended");
		
		return;
	}
	window.obj384_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj384");
//	action: dragDrop
//	target: obj384 
dragDrop_387();
function dragDrop_387() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj384_onTouchDown_runningActionsCount = obj384_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj384');
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
    	window.obj384_onTouchDown_runningActionsCount = window.obj384_onTouchDown_runningActionsCount - 1;
if (window.obj384_onTouchDown_runningActionsCount == 0) {
	obj384_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj446");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_387 = false;
    	var dropped_id_387;
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
					dropped_387 = true;
					dropped_id_387 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_387) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj384_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj384_onTouchDown_activeActionGroupIndex = -1;
		$("#obj384").trigger("obj384_onTouchDown_ended");
		
		return;
	}
	window.obj384_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj384_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj384_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj384").trigger("obj384_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj384_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj384 
hide_390();
function hide_390() {
	var element = "#obj384";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj384_droppedInsideTargetActions_runningActionsCount = obj384_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj384_droppedInsideTargetActions_runningActionsCount = window.obj384_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj384_droppedInsideTargetActions_runningActionsCount == 0) {
	obj384_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_390(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj384_droppedInsideTargetActions_runningActionsCount = window.obj384_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj384_droppedInsideTargetActions_runningActionsCount == 0) {
	obj384_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_389();
function runjs_389() {
	window.obj384_droppedInsideTargetActions_runningActionsCount = obj384_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj446"));
	setTimeout(function() {
		window.obj384_droppedInsideTargetActions_runningActionsCount = window.obj384_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj384_droppedInsideTargetActions_runningActionsCount == 0) {
	obj384_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj384_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj384_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj384").trigger("obj384_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj384_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj392 
show_391();
function show_391() {
	var element = "#obj392";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj384_droppedInsideTargetActions_runningActionsCount = obj384_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj384_droppedInsideTargetActions_runningActionsCount = window.obj384_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj384_droppedInsideTargetActions_runningActionsCount == 0) {
	obj384_droppedInsideTargetActions_actionGroup2();
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
		window.obj384_droppedInsideTargetActions_runningActionsCount = window.obj384_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj384_droppedInsideTargetActions_runningActionsCount == 0) {
	obj384_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj384_droppedInsideTargetActions_runningActionsCount = window.obj384_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj384_droppedInsideTargetActions_runningActionsCount == 0) {
	obj384_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj384_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj384_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj384").trigger("obj384_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj384_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj377_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj377_onTouchDown_activeActionGroupIndex = -1;
		$("#obj377").trigger("obj377_onTouchDown_ended");
		
		return;
	}
	window.obj377_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj377");
//	action: dragDrop
//	target: obj377 
dragDrop_380();
function dragDrop_380() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj377_onTouchDown_runningActionsCount = obj377_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj377');
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
    	window.obj377_onTouchDown_runningActionsCount = window.obj377_onTouchDown_runningActionsCount - 1;
if (window.obj377_onTouchDown_runningActionsCount == 0) {
	obj377_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_380 = false;
    	var dropped_id_380;
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
					dropped_380 = true;
					dropped_id_380 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_380) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj377").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj377_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj377_onTouchDown_activeActionGroupIndex = -1;
		$("#obj377").trigger("obj377_onTouchDown_ended");
		
		return;
	}
	window.obj377_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj377_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj377").trigger("obj377_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj377 
rotate_382();
function rotate_382() {
	window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj377";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj377';
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
	if (isInfinite) { rotate_382_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_382_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_382_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_382_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_382_completed() {
	setTimeout(function() {
		window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj377_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj377_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj377").trigger("obj377_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj377 
hide_383();
function hide_383() {
	var element = "#obj377";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj377_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_383(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj377_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj377_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj377").trigger("obj377_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj370_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj370_onTouchDown_activeActionGroupIndex = -1;
		$("#obj370").trigger("obj370_onTouchDown_ended");
		
		return;
	}
	window.obj370_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj370");
//	action: dragDrop
//	target: obj370 
dragDrop_373();
function dragDrop_373() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj370_onTouchDown_runningActionsCount = obj370_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj370');
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
    	window.obj370_onTouchDown_runningActionsCount = window.obj370_onTouchDown_runningActionsCount - 1;
if (window.obj370_onTouchDown_runningActionsCount == 0) {
	obj370_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_373 = false;
    	var dropped_id_373;
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
					dropped_373 = true;
					dropped_id_373 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_373) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj370").trigger('SCActionDragDrop373_droppedOutsideTargetActions');
		}
    });
}











};
obj370_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj370_onTouchDown_activeActionGroupIndex = -1;
		$("#obj370").trigger("obj370_onTouchDown_ended");
		
		return;
	}
	window.obj370_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj370_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj370").trigger("obj370_SCActionDragDrop373_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj370 
rotate_375();
function rotate_375() {
	window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj370";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj370';
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
	if (isInfinite) { rotate_375_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_375_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_375_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_375_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_375_completed() {
	setTimeout(function() {
		window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj370_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj370_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj370").trigger("obj370_SCActionDragDrop373_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj370 
hide_376();
function hide_376() {
	var element = "#obj370";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj370_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_376(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj370_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj370_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj370").trigger("obj370_SCActionDragDrop373_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj363_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj363_onTouchDown_activeActionGroupIndex = -1;
		$("#obj363").trigger("obj363_onTouchDown_ended");
		
		return;
	}
	window.obj363_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj363");
//	action: dragDrop
//	target: obj363 
dragDrop_366();
function dragDrop_366() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj363_onTouchDown_runningActionsCount = obj363_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj363');
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
    	window.obj363_onTouchDown_runningActionsCount = window.obj363_onTouchDown_runningActionsCount - 1;
if (window.obj363_onTouchDown_runningActionsCount == 0) {
	obj363_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_366 = false;
    	var dropped_id_366;
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
					dropped_366 = true;
					dropped_id_366 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_366) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj363").trigger('SCActionDragDrop366_droppedOutsideTargetActions');
		}
    });
}











};
obj363_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj363_onTouchDown_activeActionGroupIndex = -1;
		$("#obj363").trigger("obj363_onTouchDown_ended");
		
		return;
	}
	window.obj363_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj363_SCActionDragDrop366_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj363").trigger("obj363_SCActionDragDrop366_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj363 
rotate_368();
function rotate_368() {
	window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount = obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj363";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj363';
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
	if (isInfinite) { rotate_368_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_368_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_368_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_368_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_368_completed() {
	setTimeout(function() {
		window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount = window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj363_SCActionDragDrop366_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj363_SCActionDragDrop366_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj363").trigger("obj363_SCActionDragDrop366_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj363 
hide_369();
function hide_369() {
	var element = "#obj363";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount = obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount = window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj363_SCActionDragDrop366_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_369(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount = window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj363_SCActionDragDrop366_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj363_SCActionDragDrop366_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj363").trigger("obj363_SCActionDragDrop366_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj356_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj356_onTouchDown_activeActionGroupIndex = -1;
		$("#obj356").trigger("obj356_onTouchDown_ended");
		
		return;
	}
	window.obj356_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj356");
//	action: dragDrop
//	target: obj356 
dragDrop_359();
function dragDrop_359() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj356_onTouchDown_runningActionsCount = obj356_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj356');
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
    	window.obj356_onTouchDown_runningActionsCount = window.obj356_onTouchDown_runningActionsCount - 1;
if (window.obj356_onTouchDown_runningActionsCount == 0) {
	obj356_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_359 = false;
    	var dropped_id_359;
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
					dropped_359 = true;
					dropped_id_359 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_359) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj356").trigger('SCActionDragDrop359_droppedOutsideTargetActions');
		}
    });
}











};
obj356_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj356_onTouchDown_activeActionGroupIndex = -1;
		$("#obj356").trigger("obj356_onTouchDown_ended");
		
		return;
	}
	window.obj356_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj356_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj356").trigger("obj356_SCActionDragDrop359_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj356 
rotate_361();
function rotate_361() {
	window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj356";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj356';
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
	if (isInfinite) { rotate_361_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_361_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_361_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_361_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_361_completed() {
	setTimeout(function() {
		window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj356_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj356_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj356").trigger("obj356_SCActionDragDrop359_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj356 
hide_362();
function hide_362() {
	var element = "#obj356";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj356_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_362(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj356_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj356_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj356").trigger("obj356_SCActionDragDrop359_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj349_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj349_onTouchDown_activeActionGroupIndex = -1;
		$("#obj349").trigger("obj349_onTouchDown_ended");
		
		return;
	}
	window.obj349_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj349");
//	action: dragDrop
//	target: obj349 
dragDrop_352();
function dragDrop_352() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj349_onTouchDown_runningActionsCount = obj349_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj349');
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
    	window.obj349_onTouchDown_runningActionsCount = window.obj349_onTouchDown_runningActionsCount - 1;
if (window.obj349_onTouchDown_runningActionsCount == 0) {
	obj349_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_352 = false;
    	var dropped_id_352;
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
					dropped_352 = true;
					dropped_id_352 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_352) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj349").trigger('SCActionDragDrop352_droppedOutsideTargetActions');
		}
    });
}











};
obj349_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj349_onTouchDown_activeActionGroupIndex = -1;
		$("#obj349").trigger("obj349_onTouchDown_ended");
		
		return;
	}
	window.obj349_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj349_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj349").trigger("obj349_SCActionDragDrop352_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj349 
rotate_354();
function rotate_354() {
	window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj349";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj349';
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
	if (isInfinite) { rotate_354_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_354_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_354_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_354_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_354_completed() {
	setTimeout(function() {
		window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj349_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj349_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj349").trigger("obj349_SCActionDragDrop352_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj349 
hide_355();
function hide_355() {
	var element = "#obj349";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj349_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_355(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj349_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj349_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj349").trigger("obj349_SCActionDragDrop352_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj342_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj342_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj342").trigger("obj342_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj342_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj472 
hide_1137();
function hide_1137() {
	var element = "#obj472";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1137(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1081 
hide_1138();
function hide_1138() {
	var element = "#obj1081";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1138(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj466 
hide_1139();
function hide_1139() {
	var element = "#obj466";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1139(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj396 
hide_1140();
function hide_1140() {
	var element = "#obj396";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1140(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj438 
hide_1141();
function hide_1141() {
	var element = "#obj438";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1141(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj392 
hide_1142();
function hide_1142() {
	var element = "#obj392";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1142(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj913 
hide_1144();
function hide_1144() {
	var element = "#obj913";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1144(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj462 
hide_1145();
function hide_1145() {
	var element = "#obj462";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1145(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj400 
hide_1146();
function hide_1146() {
	var element = "#obj400";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1146(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj400 
hide_1147();
function hide_1147() {
	var element = "#obj400";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_1147(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj342_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj342_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj342").trigger("obj342_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj342_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1135 
show_345();
function show_345() {
	var element = "#obj1135";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = obj342_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup2();
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
		window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(2000, function() {
	// 		setTimeout(function() {
	// 			window.obj342_SCEventCounterReachedTargetValue_runningActionsCount = window.obj342_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj342_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj342_SCEventCounterReachedTargetValue_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj342_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj342_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj342").trigger("obj342_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj342_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj1085_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1085_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1085").trigger("obj1085_onTouchDown_ended");
		
		return;
	}
	window.obj1085_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1085");
//	action: dragDrop
//	target: obj1085 
dragDrop_1090();
function dragDrop_1090() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1085_onTouchDown_runningActionsCount = obj1085_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1085');
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
    	window.obj1085_onTouchDown_runningActionsCount = window.obj1085_onTouchDown_runningActionsCount - 1;
if (window.obj1085_onTouchDown_runningActionsCount == 0) {
	obj1085_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1078");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1090 = false;
    	var dropped_id_1090;
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
					dropped_1090 = true;
					dropped_id_1090 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1090) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj1085_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1085_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1085").trigger("obj1085_onTouchDown_ended");
		
		return;
	}
	window.obj1085_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1085_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1085_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1085").trigger("obj1085_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1085_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1085 
hide_1093();
function hide_1093() {
	var element = "#obj1085";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1085_droppedInsideTargetActions_runningActionsCount = obj1085_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1085_droppedInsideTargetActions_runningActionsCount = window.obj1085_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1085_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1085_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_1093(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1085_droppedInsideTargetActions_runningActionsCount = window.obj1085_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1085_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1085_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_1092();
function runjs_1092() {
	window.obj1085_droppedInsideTargetActions_runningActionsCount = obj1085_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1078"));
	setTimeout(function() {
		window.obj1085_droppedInsideTargetActions_runningActionsCount = window.obj1085_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1085_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1085_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1085_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1085_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1085").trigger("obj1085_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1085_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1081 
show_1094();
function show_1094() {
	var element = "#obj1081";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1085_droppedInsideTargetActions_runningActionsCount = obj1085_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1085_droppedInsideTargetActions_runningActionsCount = window.obj1085_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1085_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1085_droppedInsideTargetActions_actionGroup2();
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
		window.obj1085_droppedInsideTargetActions_runningActionsCount = window.obj1085_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1085_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1085_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj1085_droppedInsideTargetActions_runningActionsCount = window.obj1085_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1085_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1085_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1085_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1085_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1085").trigger("obj1085_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1085_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1175_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1175_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1175").trigger("obj1175_onTouchDown_ended");
		
		return;
	}
	window.obj1175_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1175");
//	action: dragDrop
//	target: obj1175 
dragDrop_1195();
function dragDrop_1195() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1175_onTouchDown_runningActionsCount = obj1175_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1175');
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
    	window.obj1175_onTouchDown_runningActionsCount = window.obj1175_onTouchDown_runningActionsCount - 1;
if (window.obj1175_onTouchDown_runningActionsCount == 0) {
	obj1175_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1195 = false;
    	var dropped_id_1195;
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
					dropped_1195 = true;
					dropped_id_1195 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1195) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1175").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj1175_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1175_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1175").trigger("obj1175_onTouchDown_ended");
		
		return;
	}
	window.obj1175_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1175_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1175").trigger("obj1175_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1175 
rotate_1197();
function rotate_1197() {
	window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj1175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1175';
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
	if (isInfinite) { rotate_1197_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1197_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1197_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1197_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1197_completed() {
	setTimeout(function() {
		window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1175_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj1175_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1175").trigger("obj1175_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1175 
hide_1198();
function hide_1198() {
	var element = "#obj1175";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1175_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_1198(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1175_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1175_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1175").trigger("obj1175_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1178_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1178_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1178").trigger("obj1178_onTouchDown_ended");
		
		return;
	}
	window.obj1178_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1178");
//	action: dragDrop
//	target: obj1178 
dragDrop_1190();
function dragDrop_1190() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1178_onTouchDown_runningActionsCount = obj1178_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1178');
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
    	window.obj1178_onTouchDown_runningActionsCount = window.obj1178_onTouchDown_runningActionsCount - 1;
if (window.obj1178_onTouchDown_runningActionsCount == 0) {
	obj1178_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1190 = false;
    	var dropped_id_1190;
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
					dropped_1190 = true;
					dropped_id_1190 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1190) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1178").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj1178_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1178_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1178").trigger("obj1178_onTouchDown_ended");
		
		return;
	}
	window.obj1178_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1178_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1178").trigger("obj1178_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1178 
rotate_1192();
function rotate_1192() {
	window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj1178";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1178';
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
	if (isInfinite) { rotate_1192_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1192_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1192_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1192_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1192_completed() {
	setTimeout(function() {
		window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1178_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj1178_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1178").trigger("obj1178_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1178 
hide_1193();
function hide_1193() {
	var element = "#obj1178";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1178_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_1193(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1178_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1178_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1178").trigger("obj1178_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1181_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1181_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_onTouchDown_ended");
		
		return;
	}
	window.obj1181_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1181");
//	action: dragDrop
//	target: obj1181 
dragDrop_1200();
function dragDrop_1200() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1181_onTouchDown_runningActionsCount = obj1181_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1181');
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
    	window.obj1181_onTouchDown_runningActionsCount = window.obj1181_onTouchDown_runningActionsCount - 1;
if (window.obj1181_onTouchDown_runningActionsCount == 0) {
	obj1181_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1200 = false;
    	var dropped_id_1200;
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
					dropped_1200 = true;
					dropped_id_1200 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1200) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1181").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj1181_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1181_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_onTouchDown_ended");
		
		return;
	}
	window.obj1181_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1181_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1181 
rotate_1202();
function rotate_1202() {
	window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj1181";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1181';
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
	if (isInfinite) { rotate_1202_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1202_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1202_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1202_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1202_completed() {
	setTimeout(function() {
		window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1181_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj1181_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1181 
hide_1203();
function hide_1203() {
	var element = "#obj1181";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1181_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_1203(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1181_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1181_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1185_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1185_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_onTouchDown_ended");
		
		return;
	}
	window.obj1185_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1185");
//	action: dragDrop
//	target: obj1185 
dragDrop_1210();
function dragDrop_1210() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1185_onTouchDown_runningActionsCount = obj1185_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1185');
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
    	window.obj1185_onTouchDown_runningActionsCount = window.obj1185_onTouchDown_runningActionsCount - 1;
if (window.obj1185_onTouchDown_runningActionsCount == 0) {
	obj1185_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1210 = false;
    	var dropped_id_1210;
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
					dropped_1210 = true;
					dropped_id_1210 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1210) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1185").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj1185_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1185_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_onTouchDown_ended");
		
		return;
	}
	window.obj1185_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1185_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1185 
rotate_1212();
function rotate_1212() {
	window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj1185";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1185';
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
	if (isInfinite) { rotate_1212_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1212_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1212_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1212_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1212_completed() {
	setTimeout(function() {
		window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1185_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj1185_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1185 
hide_1213();
function hide_1213() {
	var element = "#obj1185";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1185_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_1213(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1185_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1185_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1187_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1187_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1187").trigger("obj1187_onTouchDown_ended");
		
		return;
	}
	window.obj1187_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1187");
//	action: dragDrop
//	target: obj1187 
dragDrop_1205();
function dragDrop_1205() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1187_onTouchDown_runningActionsCount = obj1187_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1187');
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
    	window.obj1187_onTouchDown_runningActionsCount = window.obj1187_onTouchDown_runningActionsCount - 1;
if (window.obj1187_onTouchDown_runningActionsCount == 0) {
	obj1187_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1205 = false;
    	var dropped_id_1205;
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
					dropped_1205 = true;
					dropped_id_1205 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1205) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1187").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj1187_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1187_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1187").trigger("obj1187_onTouchDown_ended");
		
		return;
	}
	window.obj1187_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1187_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1187").trigger("obj1187_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1187 
rotate_1207();
function rotate_1207() {
	window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj1187";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1187';
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
	if (isInfinite) { rotate_1207_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1207_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1207_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1207_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1207_completed() {
	setTimeout(function() {
		window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1187_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj1187_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1187").trigger("obj1187_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1187 
hide_1208();
function hide_1208() {
	var element = "#obj1187";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1187_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_1208(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1187_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1187_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1187").trigger("obj1187_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2049_onTap_activeActionGroupIndex = -1;
		$("#obj2049").trigger("obj2049_onTap_ended");
		
		return;
	}
	window.obj2049_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page1
goToPage_2051();
function goToPage_2051() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
	}
}





















};
obj2049_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2049_onTap_activeActionGroupIndex = -1;
		$("#obj2049").trigger("obj2049_onTap_ended");
		
		return;
	}
	window.obj2049_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		










































































/*
 *
 *   obj1081: Event Show
 *
 */
 
$("#obj1081").bind('SCEventShow', function(event) {
	if (window.obj1081_onShow_activeActionGroupIndex != -1) return;
var obj1081_onShow_runningActionsCount = 0;
var obj1081_onShow_loopCount = 0;
obj1081_onShow_actionGroup0();
});







/*
 *
 *   obj466: Event Show
 *
 */
 
$("#obj466").bind('SCEventShow', function(event) {
	if (window.obj466_onShow_activeActionGroupIndex != -1) return;
var obj466_onShow_runningActionsCount = 0;
var obj466_onShow_loopCount = 0;
obj466_onShow_actionGroup0();
});







/*
 *
 *   obj396: Event Show
 *
 */
 
$("#obj396").bind('SCEventShow', function(event) {
	if (window.obj396_onShow_activeActionGroupIndex != -1) return;
var obj396_onShow_runningActionsCount = 0;
var obj396_onShow_loopCount = 0;
obj396_onShow_actionGroup0();
});







/*
 *
 *   obj438: Event Show
 *
 */
 
$("#obj438").bind('SCEventShow', function(event) {
	if (window.obj438_onShow_activeActionGroupIndex != -1) return;
var obj438_onShow_runningActionsCount = 0;
var obj438_onShow_loopCount = 0;
obj438_onShow_actionGroup0();
});







/*
 *
 *   obj392: Event Show
 *
 */
 
$("#obj392").bind('SCEventShow', function(event) {
	if (window.obj392_onShow_activeActionGroupIndex != -1) return;
var obj392_onShow_runningActionsCount = 0;
var obj392_onShow_loopCount = 0;
obj392_onShow_actionGroup0();
});






/*
 *
 *   obj938: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj938");
	var winTarget = document.getElementById("obj938");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj938").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj938_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj938_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj938_onTouchDown_activeActionGroupIndex != -1) return;
var obj938_onTouchDown_runningActionsCount = 0;
var obj938_onTouchDown_loopCount = 0;
obj938_onTouchDown_actionGroup0();
});


/*
 *
 *   obj938: Event SCActionDragDrop407_droppedOutsideTargetActions
 *
 */
$("#obj938").bind("SCActionDragDrop407_droppedOutsideTargetActions", function(event) {
	if (window.obj938_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj938_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = 0;
var obj938_SCActionDragDrop407_droppedOutsideTargetActions_loopCount = 0;
obj938_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj938: Event droppedInsideTargetActions
 *
 */
$("#obj938").bind("droppedInsideTargetActions", function(event) {
	if (window.obj938_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj938_droppedInsideTargetActions_runningActionsCount = 0;
var obj938_droppedInsideTargetActions_loopCount = 0;
obj938_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj913: Event Show
 *
 */
 
$("#obj913").bind('SCEventShow', function(event) {
	if (window.obj913_onShow_activeActionGroupIndex != -1) return;
var obj913_onShow_runningActionsCount = 0;
var obj913_onShow_loopCount = 0;
obj913_onShow_actionGroup0();
});







/*
 *
 *   obj462: Event Show
 *
 */
 
$("#obj462").bind('SCEventShow', function(event) {
	if (window.obj462_onShow_activeActionGroupIndex != -1) return;
var obj462_onShow_runningActionsCount = 0;
var obj462_onShow_loopCount = 0;
obj462_onShow_actionGroup0();
});







/*
 *
 *   obj400: Event Show
 *
 */
 
$("#obj400").bind('SCEventShow', function(event) {
	if (window.obj400_onShow_activeActionGroupIndex != -1) return;
var obj400_onShow_runningActionsCount = 0;
var obj400_onShow_loopCount = 0;
obj400_onShow_actionGroup0();
});






/*
 *
 *   obj414: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj414");
	var winTarget = document.getElementById("obj414");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj414").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj414_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj414_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj414_onTouchDown_activeActionGroupIndex != -1) return;
var obj414_onTouchDown_runningActionsCount = 0;
var obj414_onTouchDown_loopCount = 0;
obj414_onTouchDown_actionGroup0();
});


/*
 *
 *   obj414: Event droppedInsideTargetActions
 *
 */
$("#obj414").bind("droppedInsideTargetActions", function(event) {
	if (window.obj414_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj414_droppedInsideTargetActions_runningActionsCount = 0;
var obj414_droppedInsideTargetActions_loopCount = 0;
obj414_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj950: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj950");
	var winTarget = document.getElementById("obj950");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj950").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj950_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj950_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj950_onTouchDown_activeActionGroupIndex != -1) return;
var obj950_onTouchDown_runningActionsCount = 0;
var obj950_onTouchDown_loopCount = 0;
obj950_onTouchDown_actionGroup0();
});


/*
 *
 *   obj950: Event droppedInsideTargetActions
 *
 */
$("#obj950").bind("droppedInsideTargetActions", function(event) {
	if (window.obj950_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj950_droppedInsideTargetActions_runningActionsCount = 0;
var obj950_droppedInsideTargetActions_loopCount = 0;
obj950_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj430: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj430");
	var winTarget = document.getElementById("obj430");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj430").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj430_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj430_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj430_onTouchDown_activeActionGroupIndex != -1) return;
var obj430_onTouchDown_runningActionsCount = 0;
var obj430_onTouchDown_loopCount = 0;
obj430_onTouchDown_actionGroup0();
});


/*
 *
 *   obj430: Event droppedInsideTargetActions
 *
 */
$("#obj430").bind("droppedInsideTargetActions", function(event) {
	if (window.obj430_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj430_droppedInsideTargetActions_runningActionsCount = 0;
var obj430_droppedInsideTargetActions_loopCount = 0;
obj430_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj422: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj422");
	var winTarget = document.getElementById("obj422");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj422").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj422_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj422_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj422_onTouchDown_activeActionGroupIndex != -1) return;
var obj422_onTouchDown_runningActionsCount = 0;
var obj422_onTouchDown_loopCount = 0;
obj422_onTouchDown_actionGroup0();
});


/*
 *
 *   obj422: Event droppedInsideTargetActions
 *
 */
$("#obj422").bind("droppedInsideTargetActions", function(event) {
	if (window.obj422_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj422_droppedInsideTargetActions_runningActionsCount = 0;
var obj422_droppedInsideTargetActions_loopCount = 0;
obj422_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj404: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj404");
	var winTarget = document.getElementById("obj404");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj404").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj404_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj404_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj404_onTouchDown_activeActionGroupIndex != -1) return;
var obj404_onTouchDown_runningActionsCount = 0;
var obj404_onTouchDown_loopCount = 0;
obj404_onTouchDown_actionGroup0();
});


/*
 *
 *   obj404: Event SCActionDragDrop407_droppedOutsideTargetActions
 *
 */
$("#obj404").bind("SCActionDragDrop407_droppedOutsideTargetActions", function(event) {
	if (window.obj404_SCActionDragDrop407_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj404_SCActionDragDrop407_droppedOutsideTargetActions_runningActionsCount = 0;
var obj404_SCActionDragDrop407_droppedOutsideTargetActions_loopCount = 0;
obj404_SCActionDragDrop407_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj404: Event droppedInsideTargetActions
 *
 */
$("#obj404").bind("droppedInsideTargetActions", function(event) {
	if (window.obj404_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj404_droppedInsideTargetActions_runningActionsCount = 0;
var obj404_droppedInsideTargetActions_loopCount = 0;
obj404_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj384: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj384");
	var winTarget = document.getElementById("obj384");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj384").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj384_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj384_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj384_onTouchDown_activeActionGroupIndex != -1) return;
var obj384_onTouchDown_runningActionsCount = 0;
var obj384_onTouchDown_loopCount = 0;
obj384_onTouchDown_actionGroup0();
});


/*
 *
 *   obj384: Event droppedInsideTargetActions
 *
 */
$("#obj384").bind("droppedInsideTargetActions", function(event) {
	if (window.obj384_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj384_droppedInsideTargetActions_runningActionsCount = 0;
var obj384_droppedInsideTargetActions_loopCount = 0;
obj384_droppedInsideTargetActions_actionGroup0();
});




























































/*
 *
 *   obj377: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj377");
	var winTarget = document.getElementById("obj377");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj377").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj377_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj377_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj377_onTouchDown_activeActionGroupIndex != -1) return;
var obj377_onTouchDown_runningActionsCount = 0;
var obj377_onTouchDown_loopCount = 0;
obj377_onTouchDown_actionGroup0();
});


/*
 *
 *   obj377: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj377").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj377_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj377_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj377_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj377_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj370: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj370");
	var winTarget = document.getElementById("obj370");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj370").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj370_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj370_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj370_onTouchDown_activeActionGroupIndex != -1) return;
var obj370_onTouchDown_runningActionsCount = 0;
var obj370_onTouchDown_loopCount = 0;
obj370_onTouchDown_actionGroup0();
});


/*
 *
 *   obj370: Event SCActionDragDrop373_droppedOutsideTargetActions
 *
 */
$("#obj370").bind("SCActionDragDrop373_droppedOutsideTargetActions", function(event) {
	if (window.obj370_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj370_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = 0;
var obj370_SCActionDragDrop373_droppedOutsideTargetActions_loopCount = 0;
obj370_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj363: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj363");
	var winTarget = document.getElementById("obj363");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj363").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj363_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj363_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj363_onTouchDown_activeActionGroupIndex != -1) return;
var obj363_onTouchDown_runningActionsCount = 0;
var obj363_onTouchDown_loopCount = 0;
obj363_onTouchDown_actionGroup0();
});


/*
 *
 *   obj363: Event SCActionDragDrop366_droppedOutsideTargetActions
 *
 */
$("#obj363").bind("SCActionDragDrop366_droppedOutsideTargetActions", function(event) {
	if (window.obj363_SCActionDragDrop366_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj363_SCActionDragDrop366_droppedOutsideTargetActions_runningActionsCount = 0;
var obj363_SCActionDragDrop366_droppedOutsideTargetActions_loopCount = 0;
obj363_SCActionDragDrop366_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj356: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj356");
	var winTarget = document.getElementById("obj356");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj356").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj356_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj356_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj356_onTouchDown_activeActionGroupIndex != -1) return;
var obj356_onTouchDown_runningActionsCount = 0;
var obj356_onTouchDown_loopCount = 0;
obj356_onTouchDown_actionGroup0();
});


/*
 *
 *   obj356: Event SCActionDragDrop359_droppedOutsideTargetActions
 *
 */
$("#obj356").bind("SCActionDragDrop359_droppedOutsideTargetActions", function(event) {
	if (window.obj356_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj356_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = 0;
var obj356_SCActionDragDrop359_droppedOutsideTargetActions_loopCount = 0;
obj356_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj349: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj349");
	var winTarget = document.getElementById("obj349");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj349").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj349_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj349_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj349_onTouchDown_activeActionGroupIndex != -1) return;
var obj349_onTouchDown_runningActionsCount = 0;
var obj349_onTouchDown_loopCount = 0;
obj349_onTouchDown_actionGroup0();
});


/*
 *
 *   obj349: Event SCActionDragDrop352_droppedOutsideTargetActions
 *
 */
$("#obj349").bind("SCActionDragDrop352_droppedOutsideTargetActions", function(event) {
	if (window.obj349_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj349_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = 0;
var obj349_SCActionDragDrop352_droppedOutsideTargetActions_loopCount = 0;
obj349_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup0();
});







/*
 *
 *   obj342: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj342").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj342_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj342_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj342_SCEventCounterReachedTargetValue_loopCount = 0;
obj342_SCEventCounterReachedTargetValue_actionGroup0();
});











/*
 *
 *   obj1085: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1085");
	var winTarget = document.getElementById("obj1085");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1085").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1085_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1085_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1085_onTouchDown_activeActionGroupIndex != -1) return;
var obj1085_onTouchDown_runningActionsCount = 0;
var obj1085_onTouchDown_loopCount = 0;
obj1085_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1085: Event droppedInsideTargetActions
 *
 */
$("#obj1085").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1085_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1085_droppedInsideTargetActions_runningActionsCount = 0;
var obj1085_droppedInsideTargetActions_loopCount = 0;
obj1085_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj1175: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1175");
	var winTarget = document.getElementById("obj1175");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1175").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1175_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1175_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1175_onTouchDown_activeActionGroupIndex != -1) return;
var obj1175_onTouchDown_runningActionsCount = 0;
var obj1175_onTouchDown_loopCount = 0;
obj1175_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1175: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj1175").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj1175_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1175_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1175_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj1175_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1178: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1178");
	var winTarget = document.getElementById("obj1178");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1178").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1178_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1178_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1178_onTouchDown_activeActionGroupIndex != -1) return;
var obj1178_onTouchDown_runningActionsCount = 0;
var obj1178_onTouchDown_loopCount = 0;
obj1178_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1178: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj1178").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj1178_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1178_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1178_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj1178_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1181: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1181");
	var winTarget = document.getElementById("obj1181");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1181").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1181_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1181_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1181_onTouchDown_activeActionGroupIndex != -1) return;
var obj1181_onTouchDown_runningActionsCount = 0;
var obj1181_onTouchDown_loopCount = 0;
obj1181_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1181: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj1181").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj1181_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1181_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1181_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj1181_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1185: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1185");
	var winTarget = document.getElementById("obj1185");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1185").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1185_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1185_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1185_onTouchDown_activeActionGroupIndex != -1) return;
var obj1185_onTouchDown_runningActionsCount = 0;
var obj1185_onTouchDown_loopCount = 0;
obj1185_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1185: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj1185").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj1185_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1185_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1185_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj1185_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1187: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1187");
	var winTarget = document.getElementById("obj1187");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1187").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1187_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1187_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1187_onTouchDown_activeActionGroupIndex != -1) return;
var obj1187_onTouchDown_runningActionsCount = 0;
var obj1187_onTouchDown_loopCount = 0;
obj1187_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1187: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj1187").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj1187_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1187_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1187_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj1187_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});



/*
 *
 *   obj2049: Event Touch Down
 *
 */
 
$("#obj2049").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2049_onTap_activeActionGroupIndex != -1) return;
var obj2049_onTap_runningActionsCount = 0;
var obj2049_onTap_loopCount = 0;
obj2049_onTap_actionGroup0();
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
	
$("#obj480").trigger('SCEventShow');
$("#obj478").trigger('SCEventShow');
$("#obj476").trigger('SCEventShow');
$("#obj474").trigger('SCEventShow');
$("#obj672").trigger('SCEventShow');
$("#obj670").trigger('SCEventShow');
$("#obj859").trigger('SCEventShow');
$("#obj861").trigger('SCEventShow');
$("#obj863").trigger('SCEventShow');
$("#obj472").trigger('SCEventShow');
$("#obj938").trigger('SCEventShow');
$("#obj414").trigger('SCEventShow');
$("#obj950").trigger('SCEventShow');
$("#obj430").trigger('SCEventShow');
$("#obj422").trigger('SCEventShow');
$("#obj404").trigger('SCEventShow');
$("#obj384").trigger('SCEventShow');
$("#obj1078").trigger('SCEventShow');
$("#obj456").trigger('SCEventShow');
$("#obj454").trigger('SCEventShow');
$("#obj452").trigger('SCEventShow');
$("#obj450").trigger('SCEventShow');
$("#obj448").trigger('SCEventShow');
$("#obj446").trigger('SCEventShow');
$("#obj924").trigger('SCEventShow');
$("#obj377").trigger('SCEventShow');
$("#obj370").trigger('SCEventShow');
$("#obj363").trigger('SCEventShow');
$("#obj356").trigger('SCEventShow');
$("#obj349").trigger('SCEventShow');
$("#obj1085").trigger('SCEventShow');
$("#obj1175").trigger('SCEventShow');
$("#obj1178").trigger('SCEventShow');
$("#obj1181").trigger('SCEventShow');
$("#obj1185").trigger('SCEventShow');
$("#obj1187").trigger('SCEventShow');
$("#obj2049").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});