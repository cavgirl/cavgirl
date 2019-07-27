pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 15097;
pubcoder.page.title = "29";
pubcoder.page.number = 29;
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
var obj15098_onTap_activeActionGroupIndex = -1;
var obj15098_onTap_runningActionsCount = 0;
var obj15098_onTap_loopCount = 0;
var obj15098_onShow_activeActionGroupIndex = -1;
var obj15098_onShow_runningActionsCount = 0;
var obj15098_onShow_loopCount = 0;
var obj15103_onTap_activeActionGroupIndex = -1;
var obj15103_onTap_runningActionsCount = 0;
var obj15103_onTap_loopCount = 0;
var obj15103_onShow_activeActionGroupIndex = -1;
var obj15103_onShow_runningActionsCount = 0;
var obj15103_onShow_loopCount = 0;
var obj15108_onTap_activeActionGroupIndex = -1;
var obj15108_onTap_runningActionsCount = 0;
var obj15108_onTap_loopCount = 0;
var obj15108_onShow_activeActionGroupIndex = -1;
var obj15108_onShow_runningActionsCount = 0;
var obj15108_onShow_loopCount = 0;
var obj15121_onDrag_activeActionGroupIndex = -1;
var obj15121_onDrag_runningActionsCount = 0;
var obj15121_onDrag_loopCount = 0;
var obj15121_onTouchDown_activeActionGroupIndex = -1;
var obj15121_onTouchDown_runningActionsCount = 0;
var obj15121_onTouchDown_loopCount = 0;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15121_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15121_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15121_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
var obj15134_onDrag_activeActionGroupIndex = -1;
var obj15134_onDrag_runningActionsCount = 0;
var obj15134_onDrag_loopCount = 0;
var obj15134_onTouchDown_activeActionGroupIndex = -1;
var obj15134_onTouchDown_runningActionsCount = 0;
var obj15134_onTouchDown_loopCount = 0;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15134_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15134_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15134_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
var obj15147_onDrag_activeActionGroupIndex = -1;
var obj15147_onDrag_runningActionsCount = 0;
var obj15147_onDrag_loopCount = 0;
var obj15147_onTouchDown_activeActionGroupIndex = -1;
var obj15147_onTouchDown_runningActionsCount = 0;
var obj15147_onTouchDown_loopCount = 0;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15147_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15147_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15147_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
var obj15160_onDrag_activeActionGroupIndex = -1;
var obj15160_onDrag_runningActionsCount = 0;
var obj15160_onDrag_loopCount = 0;
var obj15160_onTouchDown_activeActionGroupIndex = -1;
var obj15160_onTouchDown_runningActionsCount = 0;
var obj15160_onTouchDown_loopCount = 0;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15160_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15160_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15160_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
var obj15173_onDrag_activeActionGroupIndex = -1;
var obj15173_onDrag_runningActionsCount = 0;
var obj15173_onDrag_loopCount = 0;
var obj15173_onTouchDown_activeActionGroupIndex = -1;
var obj15173_onTouchDown_runningActionsCount = 0;
var obj15173_onTouchDown_loopCount = 0;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15173_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15173_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15173_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
var obj15186_onDrag_activeActionGroupIndex = -1;
var obj15186_onDrag_runningActionsCount = 0;
var obj15186_onDrag_loopCount = 0;
var obj15186_onTouchDown_activeActionGroupIndex = -1;
var obj15186_onTouchDown_runningActionsCount = 0;
var obj15186_onTouchDown_loopCount = 0;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15186_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15186_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15186_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
var obj15199_onDrag_activeActionGroupIndex = -1;
var obj15199_onDrag_runningActionsCount = 0;
var obj15199_onDrag_loopCount = 0;
var obj15199_onTouchDown_activeActionGroupIndex = -1;
var obj15199_onTouchDown_runningActionsCount = 0;
var obj15199_onTouchDown_loopCount = 0;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15199_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15199_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15199_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
var obj15212_onDrag_activeActionGroupIndex = -1;
var obj15212_onDrag_runningActionsCount = 0;
var obj15212_onDrag_loopCount = 0;
var obj15212_onTouchDown_activeActionGroupIndex = -1;
var obj15212_onTouchDown_runningActionsCount = 0;
var obj15212_onTouchDown_loopCount = 0;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
var obj15212_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15212_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15212_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
var obj15225_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15225_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15225_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15230_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15230_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15230_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15235_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15235_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15235_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15240_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15240_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15240_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15244_onTap_activeActionGroupIndex = -1;
var obj15244_onTap_runningActionsCount = 0;
var obj15244_onTap_loopCount = 0;
var obj15244_onShow_activeActionGroupIndex = -1;
var obj15244_onShow_runningActionsCount = 0;
var obj15244_onShow_loopCount = 0;
var obj15250_onTap_activeActionGroupIndex = -1;
var obj15250_onTap_runningActionsCount = 0;
var obj15250_onTap_loopCount = 0;
var obj15250_onShow_activeActionGroupIndex = -1;
var obj15250_onShow_runningActionsCount = 0;
var obj15250_onShow_loopCount = 0;
var obj15256_onTap_activeActionGroupIndex = -1;
var obj15256_onTap_runningActionsCount = 0;
var obj15256_onTap_loopCount = 0;
var obj15256_onShow_activeActionGroupIndex = -1;
var obj15256_onShow_runningActionsCount = 0;
var obj15256_onShow_loopCount = 0;
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
 
var obj15225_counterValue = 0;
var obj15225_counterTargetValue = 4;
var obj15225_counterCanExceedTargetValue = false;
var obj15230_counterValue = 0;
var obj15230_counterTargetValue = 1;
var obj15230_counterCanExceedTargetValue = false;
var obj15235_counterValue = 0;
var obj15235_counterTargetValue = 3;
var obj15235_counterCanExceedTargetValue = false;
var obj15240_counterValue = 0;
var obj15240_counterTargetValue = 3;
var obj15240_counterCanExceedTargetValue = false;
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
		
obj15098_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15098_onTap_activeActionGroupIndex = -1;
		$("#obj15098").trigger("obj15098_onTap_ended");
		
		return;
	}
	window.obj15098_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15244 
show_15100();
function show_15100() {
	window.obj15098_onTap_runningActionsCount = obj15098_onTap_runningActionsCount + 1;
	$("#obj15244").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15098_onTap_runningActionsCount = window.obj15098_onTap_runningActionsCount - 1;
if (window.obj15098_onTap_runningActionsCount == 0) {
	obj15098_onTap_actionGroup1();
}
				$("#obj15244").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15098_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15098_onTap_activeActionGroupIndex = -1;
		$("#obj15098").trigger("obj15098_onTap_ended");
		
		return;
	}
	window.obj15098_onTap_activeActionGroupIndex = 1;
	





















};
obj15098_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15098_onShow_activeActionGroupIndex = -1;
		$("#obj15098").trigger("obj15098_onShow_ended");
		
		return;
	}
	window.obj15098_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15240 
incrementCounter_15102();
function incrementCounter_15102() {
	window.obj15098_onShow_runningActionsCount = obj15098_onShow_runningActionsCount + 1;

	var oldValue = obj15240_counterValue;
	obj15240_counterValue = obj15240_counterValue + 1;
	if (! obj15240_counterCanExceedTargetValue && obj15240_counterValue > obj15240_counterTargetValue) {
		obj15240_counterValue = obj15240_counterTargetValue;
	}
	if (oldValue != obj15240_counterValue) {
		$("#obj15240").trigger('SCEventCounterValueChange');
		$("#obj15240").trigger('SCEventCounterIncrease');
		if (obj15240_counterValue == obj15240_counterTargetValue)
			$("#obj15240").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15098_onShow_runningActionsCount = window.obj15098_onShow_runningActionsCount - 1;
if (window.obj15098_onShow_runningActionsCount == 0) {
	obj15098_onShow_actionGroup1();
} }, 1);
}





};
obj15098_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15098_onShow_activeActionGroupIndex = -1;
		$("#obj15098").trigger("obj15098_onShow_ended");
		
		return;
	}
	window.obj15098_onShow_activeActionGroupIndex = 1;
	





















};
obj15103_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15103_onTap_activeActionGroupIndex = -1;
		$("#obj15103").trigger("obj15103_onTap_ended");
		
		return;
	}
	window.obj15103_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15250 
show_15105();
function show_15105() {
	window.obj15103_onTap_runningActionsCount = obj15103_onTap_runningActionsCount + 1;
	$("#obj15250").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15103_onTap_runningActionsCount = window.obj15103_onTap_runningActionsCount - 1;
if (window.obj15103_onTap_runningActionsCount == 0) {
	obj15103_onTap_actionGroup1();
}
				$("#obj15250").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15103_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15103_onTap_activeActionGroupIndex = -1;
		$("#obj15103").trigger("obj15103_onTap_ended");
		
		return;
	}
	window.obj15103_onTap_activeActionGroupIndex = 1;
	





















};
obj15103_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15103_onShow_activeActionGroupIndex = -1;
		$("#obj15103").trigger("obj15103_onShow_ended");
		
		return;
	}
	window.obj15103_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15240 
incrementCounter_15107();
function incrementCounter_15107() {
	window.obj15103_onShow_runningActionsCount = obj15103_onShow_runningActionsCount + 1;

	var oldValue = obj15240_counterValue;
	obj15240_counterValue = obj15240_counterValue + 1;
	if (! obj15240_counterCanExceedTargetValue && obj15240_counterValue > obj15240_counterTargetValue) {
		obj15240_counterValue = obj15240_counterTargetValue;
	}
	if (oldValue != obj15240_counterValue) {
		$("#obj15240").trigger('SCEventCounterValueChange');
		$("#obj15240").trigger('SCEventCounterIncrease');
		if (obj15240_counterValue == obj15240_counterTargetValue)
			$("#obj15240").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15103_onShow_runningActionsCount = window.obj15103_onShow_runningActionsCount - 1;
if (window.obj15103_onShow_runningActionsCount == 0) {
	obj15103_onShow_actionGroup1();
} }, 1);
}





};
obj15103_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15103_onShow_activeActionGroupIndex = -1;
		$("#obj15103").trigger("obj15103_onShow_ended");
		
		return;
	}
	window.obj15103_onShow_activeActionGroupIndex = 1;
	





















};
obj15108_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15108_onTap_activeActionGroupIndex = -1;
		$("#obj15108").trigger("obj15108_onTap_ended");
		
		return;
	}
	window.obj15108_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15256 
show_15110();
function show_15110() {
	window.obj15108_onTap_runningActionsCount = obj15108_onTap_runningActionsCount + 1;
	$("#obj15256").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15108_onTap_runningActionsCount = window.obj15108_onTap_runningActionsCount - 1;
if (window.obj15108_onTap_runningActionsCount == 0) {
	obj15108_onTap_actionGroup1();
}
				$("#obj15256").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15108_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15108_onTap_activeActionGroupIndex = -1;
		$("#obj15108").trigger("obj15108_onTap_ended");
		
		return;
	}
	window.obj15108_onTap_activeActionGroupIndex = 1;
	





















};
obj15108_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15108_onShow_activeActionGroupIndex = -1;
		$("#obj15108").trigger("obj15108_onShow_ended");
		
		return;
	}
	window.obj15108_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15240 
incrementCounter_15112();
function incrementCounter_15112() {
	window.obj15108_onShow_runningActionsCount = obj15108_onShow_runningActionsCount + 1;

	var oldValue = obj15240_counterValue;
	obj15240_counterValue = obj15240_counterValue + 1;
	if (! obj15240_counterCanExceedTargetValue && obj15240_counterValue > obj15240_counterTargetValue) {
		obj15240_counterValue = obj15240_counterTargetValue;
	}
	if (oldValue != obj15240_counterValue) {
		$("#obj15240").trigger('SCEventCounterValueChange');
		$("#obj15240").trigger('SCEventCounterIncrease');
		if (obj15240_counterValue == obj15240_counterTargetValue)
			$("#obj15240").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15108_onShow_runningActionsCount = window.obj15108_onShow_runningActionsCount - 1;
if (window.obj15108_onShow_runningActionsCount == 0) {
	obj15108_onShow_actionGroup1();
} }, 1);
}





};
obj15108_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15108_onShow_activeActionGroupIndex = -1;
		$("#obj15108").trigger("obj15108_onShow_ended");
		
		return;
	}
	window.obj15108_onShow_activeActionGroupIndex = 1;
	





















};
obj15121_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15121_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_onTouchDown_ended");
		
		return;
	}
	window.obj15121_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15130();
function runjs_15130() {
	window.obj15121_onTouchDown_runningActionsCount = obj15121_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15121"));
	setTimeout(function() {
		window.obj15121_onTouchDown_runningActionsCount = window.obj15121_onTouchDown_runningActionsCount - 1;
if (window.obj15121_onTouchDown_runningActionsCount == 0) {
	obj15121_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15121_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15121_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_onTouchDown_ended");
		
		return;
	}
	window.obj15121_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15256 
hide_15131();
function hide_15131() {
	window.obj15121_onTouchDown_runningActionsCount = obj15121_onTouchDown_runningActionsCount + 1;
	$("#obj15256").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15121_onTouchDown_runningActionsCount = window.obj15121_onTouchDown_runningActionsCount - 1;
if (window.obj15121_onTouchDown_runningActionsCount == 0) {
	obj15121_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15250 
hide_15132();
function hide_15132() {
	window.obj15121_onTouchDown_runningActionsCount = obj15121_onTouchDown_runningActionsCount + 1;
	$("#obj15250").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15121_onTouchDown_runningActionsCount = window.obj15121_onTouchDown_runningActionsCount - 1;
if (window.obj15121_onTouchDown_runningActionsCount == 0) {
	obj15121_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15244 
hide_15133();
function hide_15133() {
	window.obj15121_onTouchDown_runningActionsCount = obj15121_onTouchDown_runningActionsCount + 1;
	$("#obj15244").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15121_onTouchDown_runningActionsCount = window.obj15121_onTouchDown_runningActionsCount - 1;
if (window.obj15121_onTouchDown_runningActionsCount == 0) {
	obj15121_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15121_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15121_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_onTouchDown_ended");
		
		return;
	}
	window.obj15121_onTouchDown_activeActionGroupIndex = 2;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15121");
//	action: dragDrop
//	target: obj15121 
dragDrop_15124();
function dragDrop_15124() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15121_onTouchDown_runningActionsCount = obj15121_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15121');
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
    	window.obj15121_onTouchDown_runningActionsCount = window.obj15121_onTouchDown_runningActionsCount - 1;
if (window.obj15121_onTouchDown_runningActionsCount == 0) {
	obj15121_onTouchDown_actionGroup3();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15117");
    	var actionsOnDrop = new Array("SCActionDragDrop6498_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15124 = false;
    	var dropped_id_15124;
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
					dropped_15124 = true;
					dropped_id_15124 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15124) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15121").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
$("#obj15121").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
		}
    });
}











};
obj15121_onTouchDown_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15121_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_onTouchDown_ended");
		
		return;
	}
	window.obj15121_onTouchDown_activeActionGroupIndex = 3;
	





















};
obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15121 
rotate_15128();
function rotate_15128() {
	window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15121";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15121';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15128_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15128_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15128_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15128_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15128_completed() {
	setTimeout(function() {
		window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15121 
rotate_15128();
function rotate_15128() {
	window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15121";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15121';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15128_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15128_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15128_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15128_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15128_completed() {
	setTimeout(function() {
		window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15121_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15121_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15121_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15235 
incrementCounter_15126();
function incrementCounter_15126() {
	window.obj15121_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = obj15121_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15235_counterValue;
	obj15235_counterValue = obj15235_counterValue + 1;
	if (! obj15235_counterCanExceedTargetValue && obj15235_counterValue > obj15235_counterTargetValue) {
		obj15235_counterValue = obj15235_counterTargetValue;
	}
	if (oldValue != obj15235_counterValue) {
		$("#obj15235").trigger('SCEventCounterValueChange');
		$("#obj15235").trigger('SCEventCounterIncrease');
		if (obj15235_counterValue == obj15235_counterTargetValue)
			$("#obj15235").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15121_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = window.obj15121_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15121_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15121_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15121_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15121_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15121").trigger("obj15121_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15121_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15134_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15134_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_onTouchDown_ended");
		
		return;
	}
	window.obj15134_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15143();
function runjs_15143() {
	window.obj15134_onTouchDown_runningActionsCount = obj15134_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15134"));
	setTimeout(function() {
		window.obj15134_onTouchDown_runningActionsCount = window.obj15134_onTouchDown_runningActionsCount - 1;
if (window.obj15134_onTouchDown_runningActionsCount == 0) {
	obj15134_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15134_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15134_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_onTouchDown_ended");
		
		return;
	}
	window.obj15134_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15256 
hide_15144();
function hide_15144() {
	window.obj15134_onTouchDown_runningActionsCount = obj15134_onTouchDown_runningActionsCount + 1;
	$("#obj15256").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15134_onTouchDown_runningActionsCount = window.obj15134_onTouchDown_runningActionsCount - 1;
if (window.obj15134_onTouchDown_runningActionsCount == 0) {
	obj15134_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15250 
hide_15145();
function hide_15145() {
	window.obj15134_onTouchDown_runningActionsCount = obj15134_onTouchDown_runningActionsCount + 1;
	$("#obj15250").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15134_onTouchDown_runningActionsCount = window.obj15134_onTouchDown_runningActionsCount - 1;
if (window.obj15134_onTouchDown_runningActionsCount == 0) {
	obj15134_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15244 
hide_15146();
function hide_15146() {
	window.obj15134_onTouchDown_runningActionsCount = obj15134_onTouchDown_runningActionsCount + 1;
	$("#obj15244").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15134_onTouchDown_runningActionsCount = window.obj15134_onTouchDown_runningActionsCount - 1;
if (window.obj15134_onTouchDown_runningActionsCount == 0) {
	obj15134_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15134_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15134_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_onTouchDown_ended");
		
		return;
	}
	window.obj15134_onTouchDown_activeActionGroupIndex = 2;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15134");
//	action: dragDrop
//	target: obj15134 
dragDrop_15137();
function dragDrop_15137() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15134_onTouchDown_runningActionsCount = obj15134_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15134');
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
    	window.obj15134_onTouchDown_runningActionsCount = window.obj15134_onTouchDown_runningActionsCount - 1;
if (window.obj15134_onTouchDown_runningActionsCount == 0) {
	obj15134_onTouchDown_actionGroup3();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15117");
    	var actionsOnDrop = new Array("SCActionDragDrop6498_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15137 = false;
    	var dropped_id_15137;
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
					dropped_15137 = true;
					dropped_id_15137 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15137) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15134").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
$("#obj15134").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
		}
    });
}











};
obj15134_onTouchDown_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15134_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_onTouchDown_ended");
		
		return;
	}
	window.obj15134_onTouchDown_activeActionGroupIndex = 3;
	





















};
obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15134 
rotate_15141();
function rotate_15141() {
	window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15134";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15134';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15141_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15141_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15141_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15141_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15141_completed() {
	setTimeout(function() {
		window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15134 
rotate_15141();
function rotate_15141() {
	window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15134";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15134';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15141_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15141_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15141_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15141_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15141_completed() {
	setTimeout(function() {
		window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15134_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15134_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15134_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15235 
incrementCounter_15139();
function incrementCounter_15139() {
	window.obj15134_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = obj15134_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15235_counterValue;
	obj15235_counterValue = obj15235_counterValue + 1;
	if (! obj15235_counterCanExceedTargetValue && obj15235_counterValue > obj15235_counterTargetValue) {
		obj15235_counterValue = obj15235_counterTargetValue;
	}
	if (oldValue != obj15235_counterValue) {
		$("#obj15235").trigger('SCEventCounterValueChange');
		$("#obj15235").trigger('SCEventCounterIncrease');
		if (obj15235_counterValue == obj15235_counterTargetValue)
			$("#obj15235").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15134_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = window.obj15134_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15134_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15134_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15134_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15134_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15134").trigger("obj15134_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15134_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15147_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15147_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_onTouchDown_ended");
		
		return;
	}
	window.obj15147_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15156();
function runjs_15156() {
	window.obj15147_onTouchDown_runningActionsCount = obj15147_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15147"));
	setTimeout(function() {
		window.obj15147_onTouchDown_runningActionsCount = window.obj15147_onTouchDown_runningActionsCount - 1;
if (window.obj15147_onTouchDown_runningActionsCount == 0) {
	obj15147_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15147_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15147_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_onTouchDown_ended");
		
		return;
	}
	window.obj15147_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15256 
hide_15157();
function hide_15157() {
	window.obj15147_onTouchDown_runningActionsCount = obj15147_onTouchDown_runningActionsCount + 1;
	$("#obj15256").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15147_onTouchDown_runningActionsCount = window.obj15147_onTouchDown_runningActionsCount - 1;
if (window.obj15147_onTouchDown_runningActionsCount == 0) {
	obj15147_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15250 
hide_15158();
function hide_15158() {
	window.obj15147_onTouchDown_runningActionsCount = obj15147_onTouchDown_runningActionsCount + 1;
	$("#obj15250").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15147_onTouchDown_runningActionsCount = window.obj15147_onTouchDown_runningActionsCount - 1;
if (window.obj15147_onTouchDown_runningActionsCount == 0) {
	obj15147_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15244 
hide_15159();
function hide_15159() {
	window.obj15147_onTouchDown_runningActionsCount = obj15147_onTouchDown_runningActionsCount + 1;
	$("#obj15244").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15147_onTouchDown_runningActionsCount = window.obj15147_onTouchDown_runningActionsCount - 1;
if (window.obj15147_onTouchDown_runningActionsCount == 0) {
	obj15147_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15147_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15147_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_onTouchDown_ended");
		
		return;
	}
	window.obj15147_onTouchDown_activeActionGroupIndex = 2;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15147");
//	action: dragDrop
//	target: obj15147 
dragDrop_15150();
function dragDrop_15150() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15147_onTouchDown_runningActionsCount = obj15147_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15147');
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
    	window.obj15147_onTouchDown_runningActionsCount = window.obj15147_onTouchDown_runningActionsCount - 1;
if (window.obj15147_onTouchDown_runningActionsCount == 0) {
	obj15147_onTouchDown_actionGroup3();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15119");
    	var actionsOnDrop = new Array("SCActionDragDrop6498_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15150 = false;
    	var dropped_id_15150;
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
					dropped_15150 = true;
					dropped_id_15150 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15150) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15147").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
$("#obj15147").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
		}
    });
}











};
obj15147_onTouchDown_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15147_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_onTouchDown_ended");
		
		return;
	}
	window.obj15147_onTouchDown_activeActionGroupIndex = 3;
	





















};
obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15147 
rotate_15154();
function rotate_15154() {
	window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15147";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15147';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15154_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15154_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15154_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15154_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15154_completed() {
	setTimeout(function() {
		window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15147 
rotate_15154();
function rotate_15154() {
	window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15147";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15147';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15154_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15154_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15154_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15154_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15154_completed() {
	setTimeout(function() {
		window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15147_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15147_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15147_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15230 
incrementCounter_15152();
function incrementCounter_15152() {
	window.obj15147_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = obj15147_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15230_counterValue;
	obj15230_counterValue = obj15230_counterValue + 1;
	if (! obj15230_counterCanExceedTargetValue && obj15230_counterValue > obj15230_counterTargetValue) {
		obj15230_counterValue = obj15230_counterTargetValue;
	}
	if (oldValue != obj15230_counterValue) {
		$("#obj15230").trigger('SCEventCounterValueChange');
		$("#obj15230").trigger('SCEventCounterIncrease');
		if (obj15230_counterValue == obj15230_counterTargetValue)
			$("#obj15230").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15147_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = window.obj15147_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15147_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15147_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15147_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15147_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15147").trigger("obj15147_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15147_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15160_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15160_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_onTouchDown_ended");
		
		return;
	}
	window.obj15160_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15169();
function runjs_15169() {
	window.obj15160_onTouchDown_runningActionsCount = obj15160_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15160"));
	setTimeout(function() {
		window.obj15160_onTouchDown_runningActionsCount = window.obj15160_onTouchDown_runningActionsCount - 1;
if (window.obj15160_onTouchDown_runningActionsCount == 0) {
	obj15160_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15160_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15160_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_onTouchDown_ended");
		
		return;
	}
	window.obj15160_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15256 
hide_15170();
function hide_15170() {
	window.obj15160_onTouchDown_runningActionsCount = obj15160_onTouchDown_runningActionsCount + 1;
	$("#obj15256").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15160_onTouchDown_runningActionsCount = window.obj15160_onTouchDown_runningActionsCount - 1;
if (window.obj15160_onTouchDown_runningActionsCount == 0) {
	obj15160_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15250 
hide_15171();
function hide_15171() {
	window.obj15160_onTouchDown_runningActionsCount = obj15160_onTouchDown_runningActionsCount + 1;
	$("#obj15250").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15160_onTouchDown_runningActionsCount = window.obj15160_onTouchDown_runningActionsCount - 1;
if (window.obj15160_onTouchDown_runningActionsCount == 0) {
	obj15160_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15244 
hide_15172();
function hide_15172() {
	window.obj15160_onTouchDown_runningActionsCount = obj15160_onTouchDown_runningActionsCount + 1;
	$("#obj15244").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15160_onTouchDown_runningActionsCount = window.obj15160_onTouchDown_runningActionsCount - 1;
if (window.obj15160_onTouchDown_runningActionsCount == 0) {
	obj15160_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15160_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15160_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_onTouchDown_ended");
		
		return;
	}
	window.obj15160_onTouchDown_activeActionGroupIndex = 2;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15160");
//	action: dragDrop
//	target: obj15160 
dragDrop_15163();
function dragDrop_15163() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15160_onTouchDown_runningActionsCount = obj15160_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15160');
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
    	window.obj15160_onTouchDown_runningActionsCount = window.obj15160_onTouchDown_runningActionsCount - 1;
if (window.obj15160_onTouchDown_runningActionsCount == 0) {
	obj15160_onTouchDown_actionGroup3();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15115");
    	var actionsOnDrop = new Array("SCActionDragDrop6498_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15163 = false;
    	var dropped_id_15163;
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
					dropped_15163 = true;
					dropped_id_15163 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15163) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15160").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
$("#obj15160").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
		}
    });
}











};
obj15160_onTouchDown_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15160_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_onTouchDown_ended");
		
		return;
	}
	window.obj15160_onTouchDown_activeActionGroupIndex = 3;
	





















};
obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15160 
rotate_15167();
function rotate_15167() {
	window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15160";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15160';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15167_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15167_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15167_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15167_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15167_completed() {
	setTimeout(function() {
		window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15160 
rotate_15167();
function rotate_15167() {
	window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15160";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15160';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15167_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15167_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15167_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15167_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15167_completed() {
	setTimeout(function() {
		window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15160_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15160_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15160_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15225 
incrementCounter_15165();
function incrementCounter_15165() {
	window.obj15160_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = obj15160_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15225_counterValue;
	obj15225_counterValue = obj15225_counterValue + 1;
	if (! obj15225_counterCanExceedTargetValue && obj15225_counterValue > obj15225_counterTargetValue) {
		obj15225_counterValue = obj15225_counterTargetValue;
	}
	if (oldValue != obj15225_counterValue) {
		$("#obj15225").trigger('SCEventCounterValueChange');
		$("#obj15225").trigger('SCEventCounterIncrease');
		if (obj15225_counterValue == obj15225_counterTargetValue)
			$("#obj15225").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15160_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = window.obj15160_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15160_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15160_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15160_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15160_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15160").trigger("obj15160_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15160_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15173_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15173_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_onTouchDown_ended");
		
		return;
	}
	window.obj15173_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15182();
function runjs_15182() {
	window.obj15173_onTouchDown_runningActionsCount = obj15173_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15173"));
	setTimeout(function() {
		window.obj15173_onTouchDown_runningActionsCount = window.obj15173_onTouchDown_runningActionsCount - 1;
if (window.obj15173_onTouchDown_runningActionsCount == 0) {
	obj15173_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15173_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15173_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_onTouchDown_ended");
		
		return;
	}
	window.obj15173_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15256 
hide_15183();
function hide_15183() {
	window.obj15173_onTouchDown_runningActionsCount = obj15173_onTouchDown_runningActionsCount + 1;
	$("#obj15256").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15173_onTouchDown_runningActionsCount = window.obj15173_onTouchDown_runningActionsCount - 1;
if (window.obj15173_onTouchDown_runningActionsCount == 0) {
	obj15173_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15250 
hide_15184();
function hide_15184() {
	window.obj15173_onTouchDown_runningActionsCount = obj15173_onTouchDown_runningActionsCount + 1;
	$("#obj15250").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15173_onTouchDown_runningActionsCount = window.obj15173_onTouchDown_runningActionsCount - 1;
if (window.obj15173_onTouchDown_runningActionsCount == 0) {
	obj15173_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15244 
hide_15185();
function hide_15185() {
	window.obj15173_onTouchDown_runningActionsCount = obj15173_onTouchDown_runningActionsCount + 1;
	$("#obj15244").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15173_onTouchDown_runningActionsCount = window.obj15173_onTouchDown_runningActionsCount - 1;
if (window.obj15173_onTouchDown_runningActionsCount == 0) {
	obj15173_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15173_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15173_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_onTouchDown_ended");
		
		return;
	}
	window.obj15173_onTouchDown_activeActionGroupIndex = 2;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15173");
//	action: dragDrop
//	target: obj15173 
dragDrop_15176();
function dragDrop_15176() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15173_onTouchDown_runningActionsCount = obj15173_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15173');
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
    	window.obj15173_onTouchDown_runningActionsCount = window.obj15173_onTouchDown_runningActionsCount - 1;
if (window.obj15173_onTouchDown_runningActionsCount == 0) {
	obj15173_onTouchDown_actionGroup3();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15115");
    	var actionsOnDrop = new Array("SCActionDragDrop6498_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15176 = false;
    	var dropped_id_15176;
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
					dropped_15176 = true;
					dropped_id_15176 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15176) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15173").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
$("#obj15173").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
		}
    });
}











};
obj15173_onTouchDown_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15173_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_onTouchDown_ended");
		
		return;
	}
	window.obj15173_onTouchDown_activeActionGroupIndex = 3;
	





















};
obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15173 
rotate_15180();
function rotate_15180() {
	window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15173";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15173';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15180_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15180_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15180_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15180_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15180_completed() {
	setTimeout(function() {
		window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15173 
rotate_15180();
function rotate_15180() {
	window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15173";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15173';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15180_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15180_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15180_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15180_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15180_completed() {
	setTimeout(function() {
		window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15173_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15173_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15173_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15225 
incrementCounter_15178();
function incrementCounter_15178() {
	window.obj15173_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = obj15173_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15225_counterValue;
	obj15225_counterValue = obj15225_counterValue + 1;
	if (! obj15225_counterCanExceedTargetValue && obj15225_counterValue > obj15225_counterTargetValue) {
		obj15225_counterValue = obj15225_counterTargetValue;
	}
	if (oldValue != obj15225_counterValue) {
		$("#obj15225").trigger('SCEventCounterValueChange');
		$("#obj15225").trigger('SCEventCounterIncrease');
		if (obj15225_counterValue == obj15225_counterTargetValue)
			$("#obj15225").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15173_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = window.obj15173_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15173_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15173_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15173_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15173_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15173").trigger("obj15173_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15173_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15186_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15186_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_onTouchDown_ended");
		
		return;
	}
	window.obj15186_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15195();
function runjs_15195() {
	window.obj15186_onTouchDown_runningActionsCount = obj15186_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15186"));
	setTimeout(function() {
		window.obj15186_onTouchDown_runningActionsCount = window.obj15186_onTouchDown_runningActionsCount - 1;
if (window.obj15186_onTouchDown_runningActionsCount == 0) {
	obj15186_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15186_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15186_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_onTouchDown_ended");
		
		return;
	}
	window.obj15186_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15256 
hide_15196();
function hide_15196() {
	window.obj15186_onTouchDown_runningActionsCount = obj15186_onTouchDown_runningActionsCount + 1;
	$("#obj15256").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15186_onTouchDown_runningActionsCount = window.obj15186_onTouchDown_runningActionsCount - 1;
if (window.obj15186_onTouchDown_runningActionsCount == 0) {
	obj15186_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15250 
hide_15197();
function hide_15197() {
	window.obj15186_onTouchDown_runningActionsCount = obj15186_onTouchDown_runningActionsCount + 1;
	$("#obj15250").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15186_onTouchDown_runningActionsCount = window.obj15186_onTouchDown_runningActionsCount - 1;
if (window.obj15186_onTouchDown_runningActionsCount == 0) {
	obj15186_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15244 
hide_15198();
function hide_15198() {
	window.obj15186_onTouchDown_runningActionsCount = obj15186_onTouchDown_runningActionsCount + 1;
	$("#obj15244").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15186_onTouchDown_runningActionsCount = window.obj15186_onTouchDown_runningActionsCount - 1;
if (window.obj15186_onTouchDown_runningActionsCount == 0) {
	obj15186_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15186_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15186_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_onTouchDown_ended");
		
		return;
	}
	window.obj15186_onTouchDown_activeActionGroupIndex = 2;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15186");
//	action: dragDrop
//	target: obj15186 
dragDrop_15189();
function dragDrop_15189() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15186_onTouchDown_runningActionsCount = obj15186_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15186');
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
    	window.obj15186_onTouchDown_runningActionsCount = window.obj15186_onTouchDown_runningActionsCount - 1;
if (window.obj15186_onTouchDown_runningActionsCount == 0) {
	obj15186_onTouchDown_actionGroup3();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15115");
    	var actionsOnDrop = new Array("SCActionDragDrop6498_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15189 = false;
    	var dropped_id_15189;
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
					dropped_15189 = true;
					dropped_id_15189 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15189) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15186").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
$("#obj15186").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
		}
    });
}











};
obj15186_onTouchDown_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15186_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_onTouchDown_ended");
		
		return;
	}
	window.obj15186_onTouchDown_activeActionGroupIndex = 3;
	





















};
obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15186 
rotate_15193();
function rotate_15193() {
	window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15186";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15186';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15193_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15193_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15193_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15193_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15193_completed() {
	setTimeout(function() {
		window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15186 
rotate_15193();
function rotate_15193() {
	window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15186";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15186';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15193_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15193_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15193_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15193_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15193_completed() {
	setTimeout(function() {
		window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15186_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15186_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15186_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15225 
incrementCounter_15191();
function incrementCounter_15191() {
	window.obj15186_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = obj15186_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15225_counterValue;
	obj15225_counterValue = obj15225_counterValue + 1;
	if (! obj15225_counterCanExceedTargetValue && obj15225_counterValue > obj15225_counterTargetValue) {
		obj15225_counterValue = obj15225_counterTargetValue;
	}
	if (oldValue != obj15225_counterValue) {
		$("#obj15225").trigger('SCEventCounterValueChange');
		$("#obj15225").trigger('SCEventCounterIncrease');
		if (obj15225_counterValue == obj15225_counterTargetValue)
			$("#obj15225").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15186_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = window.obj15186_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15186_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15186_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15186_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15186_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15186").trigger("obj15186_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15186_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15199_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15199_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_onTouchDown_ended");
		
		return;
	}
	window.obj15199_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15208();
function runjs_15208() {
	window.obj15199_onTouchDown_runningActionsCount = obj15199_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15199"));
	setTimeout(function() {
		window.obj15199_onTouchDown_runningActionsCount = window.obj15199_onTouchDown_runningActionsCount - 1;
if (window.obj15199_onTouchDown_runningActionsCount == 0) {
	obj15199_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15199_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15199_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_onTouchDown_ended");
		
		return;
	}
	window.obj15199_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15256 
hide_15209();
function hide_15209() {
	window.obj15199_onTouchDown_runningActionsCount = obj15199_onTouchDown_runningActionsCount + 1;
	$("#obj15256").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15199_onTouchDown_runningActionsCount = window.obj15199_onTouchDown_runningActionsCount - 1;
if (window.obj15199_onTouchDown_runningActionsCount == 0) {
	obj15199_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15250 
hide_15210();
function hide_15210() {
	window.obj15199_onTouchDown_runningActionsCount = obj15199_onTouchDown_runningActionsCount + 1;
	$("#obj15250").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15199_onTouchDown_runningActionsCount = window.obj15199_onTouchDown_runningActionsCount - 1;
if (window.obj15199_onTouchDown_runningActionsCount == 0) {
	obj15199_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15244 
hide_15211();
function hide_15211() {
	window.obj15199_onTouchDown_runningActionsCount = obj15199_onTouchDown_runningActionsCount + 1;
	$("#obj15244").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15199_onTouchDown_runningActionsCount = window.obj15199_onTouchDown_runningActionsCount - 1;
if (window.obj15199_onTouchDown_runningActionsCount == 0) {
	obj15199_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15199_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15199_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_onTouchDown_ended");
		
		return;
	}
	window.obj15199_onTouchDown_activeActionGroupIndex = 2;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15199");
//	action: dragDrop
//	target: obj15199 
dragDrop_15202();
function dragDrop_15202() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15199_onTouchDown_runningActionsCount = obj15199_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15199');
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
    	window.obj15199_onTouchDown_runningActionsCount = window.obj15199_onTouchDown_runningActionsCount - 1;
if (window.obj15199_onTouchDown_runningActionsCount == 0) {
	obj15199_onTouchDown_actionGroup3();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15115");
    	var actionsOnDrop = new Array("SCActionDragDrop6498_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15202 = false;
    	var dropped_id_15202;
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
					dropped_15202 = true;
					dropped_id_15202 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15202) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15199").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
$("#obj15199").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
		}
    });
}











};
obj15199_onTouchDown_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15199_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_onTouchDown_ended");
		
		return;
	}
	window.obj15199_onTouchDown_activeActionGroupIndex = 3;
	





















};
obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15199 
rotate_15206();
function rotate_15206() {
	window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15199";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15199';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15206_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15206_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15206_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15206_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15206_completed() {
	setTimeout(function() {
		window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15199 
rotate_15206();
function rotate_15206() {
	window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15199";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15199';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15206_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15206_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15206_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15206_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15206_completed() {
	setTimeout(function() {
		window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15199_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15199_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15199_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15225 
incrementCounter_15204();
function incrementCounter_15204() {
	window.obj15199_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = obj15199_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15225_counterValue;
	obj15225_counterValue = obj15225_counterValue + 1;
	if (! obj15225_counterCanExceedTargetValue && obj15225_counterValue > obj15225_counterTargetValue) {
		obj15225_counterValue = obj15225_counterTargetValue;
	}
	if (oldValue != obj15225_counterValue) {
		$("#obj15225").trigger('SCEventCounterValueChange');
		$("#obj15225").trigger('SCEventCounterIncrease');
		if (obj15225_counterValue == obj15225_counterTargetValue)
			$("#obj15225").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15199_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = window.obj15199_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15199_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15199_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15199_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15199_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15199").trigger("obj15199_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15199_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15212_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15212_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_onTouchDown_ended");
		
		return;
	}
	window.obj15212_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15221();
function runjs_15221() {
	window.obj15212_onTouchDown_runningActionsCount = obj15212_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15212"));
	setTimeout(function() {
		window.obj15212_onTouchDown_runningActionsCount = window.obj15212_onTouchDown_runningActionsCount - 1;
if (window.obj15212_onTouchDown_runningActionsCount == 0) {
	obj15212_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15212_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15212_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_onTouchDown_ended");
		
		return;
	}
	window.obj15212_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15256 
hide_15222();
function hide_15222() {
	window.obj15212_onTouchDown_runningActionsCount = obj15212_onTouchDown_runningActionsCount + 1;
	$("#obj15256").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15212_onTouchDown_runningActionsCount = window.obj15212_onTouchDown_runningActionsCount - 1;
if (window.obj15212_onTouchDown_runningActionsCount == 0) {
	obj15212_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15250 
hide_15223();
function hide_15223() {
	window.obj15212_onTouchDown_runningActionsCount = obj15212_onTouchDown_runningActionsCount + 1;
	$("#obj15250").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15212_onTouchDown_runningActionsCount = window.obj15212_onTouchDown_runningActionsCount - 1;
if (window.obj15212_onTouchDown_runningActionsCount == 0) {
	obj15212_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15244 
hide_15224();
function hide_15224() {
	window.obj15212_onTouchDown_runningActionsCount = obj15212_onTouchDown_runningActionsCount + 1;
	$("#obj15244").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15212_onTouchDown_runningActionsCount = window.obj15212_onTouchDown_runningActionsCount - 1;
if (window.obj15212_onTouchDown_runningActionsCount == 0) {
	obj15212_onTouchDown_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15212_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15212_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_onTouchDown_ended");
		
		return;
	}
	window.obj15212_onTouchDown_activeActionGroupIndex = 2;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15212");
//	action: dragDrop
//	target: obj15212 
dragDrop_15215();
function dragDrop_15215() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15212_onTouchDown_runningActionsCount = obj15212_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15212');
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
    	window.obj15212_onTouchDown_runningActionsCount = window.obj15212_onTouchDown_runningActionsCount - 1;
if (window.obj15212_onTouchDown_runningActionsCount == 0) {
	obj15212_onTouchDown_actionGroup3();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15117");
    	var actionsOnDrop = new Array("SCActionDragDrop6498_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15215 = false;
    	var dropped_id_15215;
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
					dropped_15215 = true;
					dropped_id_15215 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15215) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15212").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
$("#obj15212").trigger('SCActionDragDrop6498_droppedOutsideTargetActions');
		}
    });
}











};
obj15212_onTouchDown_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15212_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_onTouchDown_ended");
		
		return;
	}
	window.obj15212_onTouchDown_activeActionGroupIndex = 3;
	





















};
obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15212 
rotate_15219();
function rotate_15219() {
	window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15212";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15212';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15219_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15219_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15219_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15219_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15219_completed() {
	setTimeout(function() {
		window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15212 
rotate_15219();
function rotate_15219() {
	window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15212";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15212';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15219_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15219_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15219_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15219_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15219_completed() {
	setTimeout(function() {
		window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15212_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15212_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15212_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj15235 
incrementCounter_15217();
function incrementCounter_15217() {
	window.obj15212_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = obj15212_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15235_counterValue;
	obj15235_counterValue = obj15235_counterValue + 1;
	if (! obj15235_counterCanExceedTargetValue && obj15235_counterValue > obj15235_counterTargetValue) {
		obj15235_counterValue = obj15235_counterTargetValue;
	}
	if (oldValue != obj15235_counterValue) {
		$("#obj15235").trigger('SCEventCounterValueChange');
		$("#obj15235").trigger('SCEventCounterIncrease');
		if (obj15235_counterValue == obj15235_counterTargetValue)
			$("#obj15235").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15212_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = window.obj15212_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15212_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15212_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15212_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15212_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15212").trigger("obj15212_SCActionDragDrop6498_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15212_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15225_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15225_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15225").trigger("obj15225_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15225_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15108 
show_15228();
function show_15228() {
	window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount = obj15225_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15108").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15225_SCEventCounterReachedTargetValue_actionGroup1();
}
				$("#obj15108").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_15227();
function runjs_15227() {
	window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount = obj15225_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15108"));
	setTimeout(function() {
		window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15225_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1);
}






};
obj15225_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15225_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15225").trigger("obj15225_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15225_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15256 
show_15229();
function show_15229() {
	window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount = obj15225_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15256").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15225_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15225_SCEventCounterReachedTargetValue_actionGroup2();
}
				$("#obj15256").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15225_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15225_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15225").trigger("obj15225_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15225_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj15230_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15230_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15230").trigger("obj15230_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15230_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15098 
show_15233();
function show_15233() {
	window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount = obj15230_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15098").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15230_SCEventCounterReachedTargetValue_actionGroup1();
}
				$("#obj15098").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_15232();
function runjs_15232() {
	window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount = obj15230_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15098"));
	setTimeout(function() {
		window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15230_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1);
}






};
obj15230_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15230_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15230").trigger("obj15230_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15230_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15244 
show_15234();
function show_15234() {
	window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount = obj15230_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15244").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15230_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15230_SCEventCounterReachedTargetValue_actionGroup2();
}
				$("#obj15244").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15230_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15230_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15230").trigger("obj15230_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15230_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj15235_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15235_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15235").trigger("obj15235_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15235_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15103 
show_15238();
function show_15238() {
	window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount = obj15235_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15103").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15235_SCEventCounterReachedTargetValue_actionGroup1();
}
				$("#obj15103").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_15237();
function runjs_15237() {
	window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount = obj15235_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15103"));
	setTimeout(function() {
		window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15235_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1);
}






};
obj15235_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15235_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15235").trigger("obj15235_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15235_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15250 
show_15239();
function show_15239() {
	window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount = obj15235_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15250").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15235_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15235_SCEventCounterReachedTargetValue_actionGroup2();
}
				$("#obj15250").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15235_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15235_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15235").trigger("obj15235_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15235_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj15240_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15240_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15240").trigger("obj15240_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15240_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_15242();
function wait_15242() {
	window.obj15240_SCEventCounterReachedTargetValue_runningActionsCount = obj15240_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15240_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15240_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15240_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15240_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 6000);
}












};
obj15240_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15240_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15240").trigger("obj15240_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15240_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page30
goToPage_15243();
function goToPage_15243() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../30/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(30))},200);
	}
}





















};
obj15240_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15240_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15240").trigger("obj15240_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15240_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj15244_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15244_onTap_activeActionGroupIndex = -1;
		$("#obj15244").trigger("obj15244_onTap_ended");
		
		return;
	}
	window.obj15244_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15244 
hide_15246();
function hide_15246() {
	window.obj15244_onTap_runningActionsCount = obj15244_onTap_runningActionsCount + 1;
	$("#obj15244").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15244_onTap_runningActionsCount = window.obj15244_onTap_runningActionsCount - 1;
if (window.obj15244_onTap_runningActionsCount == 0) {
	obj15244_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15244_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15244_onTap_activeActionGroupIndex = -1;
		$("#obj15244").trigger("obj15244_onTap_ended");
		
		return;
	}
	window.obj15244_onTap_activeActionGroupIndex = 1;
	





















};
obj15244_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15244_onShow_activeActionGroupIndex = -1;
		$("#obj15244").trigger("obj15244_onShow_ended");
		
		return;
	}
	window.obj15244_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_15248();
function wait_15248() {
	window.obj15244_onShow_runningActionsCount = obj15244_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15244_onShow_runningActionsCount = window.obj15244_onShow_runningActionsCount - 1;
if (window.obj15244_onShow_runningActionsCount == 0) {
	obj15244_onShow_actionGroup1();
}
	}, 5000);
}












};
obj15244_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15244_onShow_activeActionGroupIndex = -1;
		$("#obj15244").trigger("obj15244_onShow_ended");
		
		return;
	}
	window.obj15244_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15244 
hide_15249();
function hide_15249() {
	window.obj15244_onShow_runningActionsCount = obj15244_onShow_runningActionsCount + 1;
	$("#obj15244").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj15244_onShow_runningActionsCount = window.obj15244_onShow_runningActionsCount - 1;
if (window.obj15244_onShow_runningActionsCount == 0) {
	obj15244_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15244_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15244_onShow_activeActionGroupIndex = -1;
		$("#obj15244").trigger("obj15244_onShow_ended");
		
		return;
	}
	window.obj15244_onShow_activeActionGroupIndex = 2;
	





















};
obj15250_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15250_onTap_activeActionGroupIndex = -1;
		$("#obj15250").trigger("obj15250_onTap_ended");
		
		return;
	}
	window.obj15250_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15250 
hide_15252();
function hide_15252() {
	window.obj15250_onTap_runningActionsCount = obj15250_onTap_runningActionsCount + 1;
	$("#obj15250").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15250_onTap_runningActionsCount = window.obj15250_onTap_runningActionsCount - 1;
if (window.obj15250_onTap_runningActionsCount == 0) {
	obj15250_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15250_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15250_onTap_activeActionGroupIndex = -1;
		$("#obj15250").trigger("obj15250_onTap_ended");
		
		return;
	}
	window.obj15250_onTap_activeActionGroupIndex = 1;
	





















};
obj15250_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15250_onShow_activeActionGroupIndex = -1;
		$("#obj15250").trigger("obj15250_onShow_ended");
		
		return;
	}
	window.obj15250_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_15254();
function wait_15254() {
	window.obj15250_onShow_runningActionsCount = obj15250_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15250_onShow_runningActionsCount = window.obj15250_onShow_runningActionsCount - 1;
if (window.obj15250_onShow_runningActionsCount == 0) {
	obj15250_onShow_actionGroup1();
}
	}, 5000);
}












};
obj15250_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15250_onShow_activeActionGroupIndex = -1;
		$("#obj15250").trigger("obj15250_onShow_ended");
		
		return;
	}
	window.obj15250_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15250 
hide_15255();
function hide_15255() {
	window.obj15250_onShow_runningActionsCount = obj15250_onShow_runningActionsCount + 1;
	$("#obj15250").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj15250_onShow_runningActionsCount = window.obj15250_onShow_runningActionsCount - 1;
if (window.obj15250_onShow_runningActionsCount == 0) {
	obj15250_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15250_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15250_onShow_activeActionGroupIndex = -1;
		$("#obj15250").trigger("obj15250_onShow_ended");
		
		return;
	}
	window.obj15250_onShow_activeActionGroupIndex = 2;
	





















};
obj15256_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15256_onTap_activeActionGroupIndex = -1;
		$("#obj15256").trigger("obj15256_onTap_ended");
		
		return;
	}
	window.obj15256_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15256 
hide_15258();
function hide_15258() {
	window.obj15256_onTap_runningActionsCount = obj15256_onTap_runningActionsCount + 1;
	$("#obj15256").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15256_onTap_runningActionsCount = window.obj15256_onTap_runningActionsCount - 1;
if (window.obj15256_onTap_runningActionsCount == 0) {
	obj15256_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15256_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15256_onTap_activeActionGroupIndex = -1;
		$("#obj15256").trigger("obj15256_onTap_ended");
		
		return;
	}
	window.obj15256_onTap_activeActionGroupIndex = 1;
	





















};
obj15256_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15256_onShow_activeActionGroupIndex = -1;
		$("#obj15256").trigger("obj15256_onShow_ended");
		
		return;
	}
	window.obj15256_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_15260();
function wait_15260() {
	window.obj15256_onShow_runningActionsCount = obj15256_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15256_onShow_runningActionsCount = window.obj15256_onShow_runningActionsCount - 1;
if (window.obj15256_onShow_runningActionsCount == 0) {
	obj15256_onShow_actionGroup1();
}
	}, 5000);
}












};
obj15256_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15256_onShow_activeActionGroupIndex = -1;
		$("#obj15256").trigger("obj15256_onShow_ended");
		
		return;
	}
	window.obj15256_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15256 
hide_15261();
function hide_15261() {
	window.obj15256_onShow_runningActionsCount = obj15256_onShow_runningActionsCount + 1;
	$("#obj15256").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj15256_onShow_runningActionsCount = window.obj15256_onShow_runningActionsCount - 1;
if (window.obj15256_onShow_runningActionsCount == 0) {
	obj15256_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15256_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15256_onShow_activeActionGroupIndex = -1;
		$("#obj15256").trigger("obj15256_onShow_ended");
		
		return;
	}
	window.obj15256_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj15098: Event Touch Down
 *
 */
 
$("#obj15098").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15098_onTap_activeActionGroupIndex != -1) return;
var obj15098_onTap_runningActionsCount = 0;
var obj15098_onTap_loopCount = 0;
obj15098_onTap_actionGroup0();
});

/*
 *
 *   obj15098: Event Show
 *
 */
 
$("#obj15098").one('SCEventShow', function(event) {
	if (window.obj15098_onShow_activeActionGroupIndex != -1) return;
var obj15098_onShow_runningActionsCount = 0;
var obj15098_onShow_loopCount = 0;
obj15098_onShow_actionGroup0();
});





/*
 *
 *   obj15103: Event Touch Down
 *
 */
 
$("#obj15103").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15103_onTap_activeActionGroupIndex != -1) return;
var obj15103_onTap_runningActionsCount = 0;
var obj15103_onTap_loopCount = 0;
obj15103_onTap_actionGroup0();
});

/*
 *
 *   obj15103: Event Show
 *
 */
 
$("#obj15103").one('SCEventShow', function(event) {
	if (window.obj15103_onShow_activeActionGroupIndex != -1) return;
var obj15103_onShow_runningActionsCount = 0;
var obj15103_onShow_loopCount = 0;
obj15103_onShow_actionGroup0();
});





/*
 *
 *   obj15108: Event Touch Down
 *
 */
 
$("#obj15108").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15108_onTap_activeActionGroupIndex != -1) return;
var obj15108_onTap_runningActionsCount = 0;
var obj15108_onTap_loopCount = 0;
obj15108_onTap_actionGroup0();
});

/*
 *
 *   obj15108: Event Show
 *
 */
 
$("#obj15108").one('SCEventShow', function(event) {
	if (window.obj15108_onShow_activeActionGroupIndex != -1) return;
var obj15108_onShow_runningActionsCount = 0;
var obj15108_onShow_loopCount = 0;
obj15108_onShow_actionGroup0();
});


































/*
 *
 *   obj15121: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15121");
	var winTarget = document.getElementById("obj15121");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15121").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15121_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15121_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15121_onTouchDown_activeActionGroupIndex != -1) return;
var obj15121_onTouchDown_runningActionsCount = 0;
var obj15121_onTouchDown_loopCount = 0;
obj15121_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15121: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15121").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15121: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15121").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15121_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15121: Event SCActionDragDrop6498_droppedInsideTargetActions
 *
 */
$("#obj15121").bind("SCActionDragDrop6498_droppedInsideTargetActions", function(event) {
	if (window.obj15121_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15121_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15121_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
obj15121_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15134: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15134");
	var winTarget = document.getElementById("obj15134");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15134").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15134_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15134_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15134_onTouchDown_activeActionGroupIndex != -1) return;
var obj15134_onTouchDown_runningActionsCount = 0;
var obj15134_onTouchDown_loopCount = 0;
obj15134_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15134: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15134").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15134: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15134").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15134_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15134: Event SCActionDragDrop6498_droppedInsideTargetActions
 *
 */
$("#obj15134").one("SCActionDragDrop6498_droppedInsideTargetActions", function(event) {
	if (window.obj15134_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15134_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15134_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
obj15134_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15147: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15147");
	var winTarget = document.getElementById("obj15147");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15147").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15147_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15147_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15147_onTouchDown_activeActionGroupIndex != -1) return;
var obj15147_onTouchDown_runningActionsCount = 0;
var obj15147_onTouchDown_loopCount = 0;
obj15147_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15147: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15147").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15147: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15147").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15147_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15147: Event SCActionDragDrop6498_droppedInsideTargetActions
 *
 */
$("#obj15147").one("SCActionDragDrop6498_droppedInsideTargetActions", function(event) {
	if (window.obj15147_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15147_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15147_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
obj15147_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15160: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15160");
	var winTarget = document.getElementById("obj15160");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15160").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15160_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15160_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15160_onTouchDown_activeActionGroupIndex != -1) return;
var obj15160_onTouchDown_runningActionsCount = 0;
var obj15160_onTouchDown_loopCount = 0;
obj15160_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15160: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15160").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15160: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15160").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15160_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15160: Event SCActionDragDrop6498_droppedInsideTargetActions
 *
 */
$("#obj15160").one("SCActionDragDrop6498_droppedInsideTargetActions", function(event) {
	if (window.obj15160_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15160_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15160_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
obj15160_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15173: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15173");
	var winTarget = document.getElementById("obj15173");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15173").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15173_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15173_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15173_onTouchDown_activeActionGroupIndex != -1) return;
var obj15173_onTouchDown_runningActionsCount = 0;
var obj15173_onTouchDown_loopCount = 0;
obj15173_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15173: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15173").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15173: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15173").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15173_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15173: Event SCActionDragDrop6498_droppedInsideTargetActions
 *
 */
$("#obj15173").one("SCActionDragDrop6498_droppedInsideTargetActions", function(event) {
	if (window.obj15173_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15173_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15173_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
obj15173_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15186: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15186");
	var winTarget = document.getElementById("obj15186");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15186").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15186_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15186_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15186_onTouchDown_activeActionGroupIndex != -1) return;
var obj15186_onTouchDown_runningActionsCount = 0;
var obj15186_onTouchDown_loopCount = 0;
obj15186_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15186: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15186").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15186: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15186").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15186_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15186: Event SCActionDragDrop6498_droppedInsideTargetActions
 *
 */
$("#obj15186").one("SCActionDragDrop6498_droppedInsideTargetActions", function(event) {
	if (window.obj15186_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15186_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15186_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
obj15186_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15199: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15199");
	var winTarget = document.getElementById("obj15199");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15199").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15199_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15199_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15199_onTouchDown_activeActionGroupIndex != -1) return;
var obj15199_onTouchDown_runningActionsCount = 0;
var obj15199_onTouchDown_loopCount = 0;
obj15199_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15199: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15199").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15199: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15199").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15199_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15199: Event SCActionDragDrop6498_droppedInsideTargetActions
 *
 */
$("#obj15199").one("SCActionDragDrop6498_droppedInsideTargetActions", function(event) {
	if (window.obj15199_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15199_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15199_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
obj15199_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15212: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15212");
	var winTarget = document.getElementById("obj15212");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15212").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15212_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15212_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15212_onTouchDown_activeActionGroupIndex != -1) return;
var obj15212_onTouchDown_runningActionsCount = 0;
var obj15212_onTouchDown_loopCount = 0;
obj15212_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15212: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15212").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15212: Event SCActionDragDrop6498_droppedOutsideTargetActions
 *
 */
$("#obj15212").bind("SCActionDragDrop6498_droppedOutsideTargetActions", function(event) {
	if (window.obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_loopCount = 0;
obj15212_SCActionDragDrop6498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15212: Event SCActionDragDrop6498_droppedInsideTargetActions
 *
 */
$("#obj15212").one("SCActionDragDrop6498_droppedInsideTargetActions", function(event) {
	if (window.obj15212_SCActionDragDrop6498_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15212_SCActionDragDrop6498_droppedInsideTargetActions_runningActionsCount = 0;
var obj15212_SCActionDragDrop6498_droppedInsideTargetActions_loopCount = 0;
obj15212_SCActionDragDrop6498_droppedInsideTargetActions_actionGroup0();
});







/*
 *
 *   obj15225: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj15225").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15225_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj15225_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15225_SCEventCounterReachedTargetValue_loopCount = 0;
obj15225_SCEventCounterReachedTargetValue_actionGroup0();
});







/*
 *
 *   obj15230: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj15230").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15230_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj15230_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15230_SCEventCounterReachedTargetValue_loopCount = 0;
obj15230_SCEventCounterReachedTargetValue_actionGroup0();
});







/*
 *
 *   obj15235: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj15235").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15235_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj15235_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15235_SCEventCounterReachedTargetValue_loopCount = 0;
obj15235_SCEventCounterReachedTargetValue_actionGroup0();
});







/*
 *
 *   obj15240: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj15240").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15240_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj15240_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15240_SCEventCounterReachedTargetValue_loopCount = 0;
obj15240_SCEventCounterReachedTargetValue_actionGroup0();
});



/*
 *
 *   obj15244: Event Touch Down
 *
 */
 
$("#obj15244").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15244_onTap_activeActionGroupIndex != -1) return;
var obj15244_onTap_runningActionsCount = 0;
var obj15244_onTap_loopCount = 0;
obj15244_onTap_actionGroup0();
});

/*
 *
 *   obj15244: Event Show
 *
 */
 
$("#obj15244").bind('SCEventShow', function(event) {
	if (window.obj15244_onShow_activeActionGroupIndex != -1) return;
var obj15244_onShow_runningActionsCount = 0;
var obj15244_onShow_loopCount = 0;
obj15244_onShow_actionGroup0();
});





/*
 *
 *   obj15250: Event Touch Down
 *
 */
 
$("#obj15250").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15250_onTap_activeActionGroupIndex != -1) return;
var obj15250_onTap_runningActionsCount = 0;
var obj15250_onTap_loopCount = 0;
obj15250_onTap_actionGroup0();
});

/*
 *
 *   obj15250: Event Show
 *
 */
 
$("#obj15250").bind('SCEventShow', function(event) {
	if (window.obj15250_onShow_activeActionGroupIndex != -1) return;
var obj15250_onShow_runningActionsCount = 0;
var obj15250_onShow_loopCount = 0;
obj15250_onShow_actionGroup0();
});





/*
 *
 *   obj15256: Event Touch Down
 *
 */
 
$("#obj15256").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15256_onTap_activeActionGroupIndex != -1) return;
var obj15256_onTap_runningActionsCount = 0;
var obj15256_onTap_loopCount = 0;
obj15256_onTap_actionGroup0();
});

/*
 *
 *   obj15256: Event Show
 *
 */
 
$("#obj15256").bind('SCEventShow', function(event) {
	if (window.obj15256_onShow_activeActionGroupIndex != -1) return;
var obj15256_onShow_runningActionsCount = 0;
var obj15256_onShow_loopCount = 0;
obj15256_onShow_actionGroup0();
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
	
$("#obj15113").trigger('SCEventShow');
$("#obj15115").trigger('SCEventShow');
$("#obj15117").trigger('SCEventShow');
$("#obj15119").trigger('SCEventShow');
$("#obj15121").trigger('SCEventShow');
$("#obj15134").trigger('SCEventShow');
$("#obj15147").trigger('SCEventShow');
$("#obj15160").trigger('SCEventShow');
$("#obj15173").trigger('SCEventShow');
$("#obj15186").trigger('SCEventShow');
$("#obj15199").trigger('SCEventShow');
$("#obj15212").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});