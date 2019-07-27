pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 15262;
pubcoder.page.title = "30";
pubcoder.page.number = 30;
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
var obj15267_onTap_activeActionGroupIndex = -1;
var obj15267_onTap_runningActionsCount = 0;
var obj15267_onTap_loopCount = 0;
var obj15277_onTap_activeActionGroupIndex = -1;
var obj15277_onTap_runningActionsCount = 0;
var obj15277_onTap_loopCount = 0;
var obj15286_onTap_activeActionGroupIndex = -1;
var obj15286_onTap_runningActionsCount = 0;
var obj15286_onTap_loopCount = 0;
var obj15295_onShow_activeActionGroupIndex = -1;
var obj15295_onShow_runningActionsCount = 0;
var obj15295_onShow_loopCount = 0;
var obj15307_onTouchDown_activeActionGroupIndex = -1;
var obj15307_onTouchDown_runningActionsCount = 0;
var obj15307_onTouchDown_loopCount = 0;
var obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_loopCount = 0;
var obj15307_onDrag_activeActionGroupIndex = -1;
var obj15307_onDrag_runningActionsCount = 0;
var obj15307_onDrag_loopCount = 0;
var obj15315_onDrag_activeActionGroupIndex = -1;
var obj15315_onDrag_runningActionsCount = 0;
var obj15315_onDrag_loopCount = 0;
var obj15315_onTouchDown_activeActionGroupIndex = -1;
var obj15315_onTouchDown_runningActionsCount = 0;
var obj15315_onTouchDown_loopCount = 0;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_loopCount = 0;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_loopCount = 0;
var obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15315_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
var obj15328_onDrag_activeActionGroupIndex = -1;
var obj15328_onDrag_runningActionsCount = 0;
var obj15328_onDrag_loopCount = 0;
var obj15328_onTouchDown_activeActionGroupIndex = -1;
var obj15328_onTouchDown_runningActionsCount = 0;
var obj15328_onTouchDown_loopCount = 0;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_loopCount = 0;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_loopCount = 0;
var obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15328_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
var obj15342_onDrag_activeActionGroupIndex = -1;
var obj15342_onDrag_runningActionsCount = 0;
var obj15342_onDrag_loopCount = 0;
var obj15342_onTouchDown_activeActionGroupIndex = -1;
var obj15342_onTouchDown_runningActionsCount = 0;
var obj15342_onTouchDown_loopCount = 0;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_loopCount = 0;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_loopCount = 0;
var obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15342_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
var obj15355_onDrag_activeActionGroupIndex = -1;
var obj15355_onDrag_runningActionsCount = 0;
var obj15355_onDrag_loopCount = 0;
var obj15355_onTouchDown_activeActionGroupIndex = -1;
var obj15355_onTouchDown_runningActionsCount = 0;
var obj15355_onTouchDown_loopCount = 0;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_loopCount = 0;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_loopCount = 0;
var obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_loopCount = 0;
var obj15368_onDrag_activeActionGroupIndex = -1;
var obj15368_onDrag_runningActionsCount = 0;
var obj15368_onDrag_loopCount = 0;
var obj15368_onTouchDown_activeActionGroupIndex = -1;
var obj15368_onTouchDown_runningActionsCount = 0;
var obj15368_onTouchDown_loopCount = 0;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_loopCount = 0;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_loopCount = 0;
var obj15368_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15368_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
var obj15381_onDrag_activeActionGroupIndex = -1;
var obj15381_onDrag_runningActionsCount = 0;
var obj15381_onDrag_loopCount = 0;
var obj15381_onTouchDown_activeActionGroupIndex = -1;
var obj15381_onTouchDown_runningActionsCount = 0;
var obj15381_onTouchDown_loopCount = 0;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_loopCount = 0;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_loopCount = 0;
var obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15381_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
var obj15394_onDrag_activeActionGroupIndex = -1;
var obj15394_onDrag_runningActionsCount = 0;
var obj15394_onDrag_loopCount = 0;
var obj15394_onTouchDown_activeActionGroupIndex = -1;
var obj15394_onTouchDown_runningActionsCount = 0;
var obj15394_onTouchDown_loopCount = 0;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_loopCount = 0;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_loopCount = 0;
var obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15394_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
var obj15407_onShow_activeActionGroupIndex = -1;
var obj15407_onShow_runningActionsCount = 0;
var obj15407_onShow_loopCount = 0;
var obj15411_onShow_activeActionGroupIndex = -1;
var obj15411_onShow_runningActionsCount = 0;
var obj15411_onShow_loopCount = 0;
var obj15415_onShow_activeActionGroupIndex = -1;
var obj15415_onShow_runningActionsCount = 0;
var obj15415_onShow_loopCount = 0;
var obj15419_onShow_activeActionGroupIndex = -1;
var obj15419_onShow_runningActionsCount = 0;
var obj15419_onShow_loopCount = 0;
var obj15431_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15431_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15431_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15434_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15434_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15454_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15454_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15474_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15474_SCEventCounterReachedTargetValue_loopCount = 0;
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
 
var obj15431_counterValue = 0;
var obj15431_counterTargetValue = 3;
var obj15431_counterCanExceedTargetValue = false;
var obj15434_counterValue = 0;
var obj15434_counterTargetValue = 2;
var obj15434_counterCanExceedTargetValue = false;
var obj15454_counterValue = 0;
var obj15454_counterTargetValue = 2;
var obj15454_counterCanExceedTargetValue = false;
var obj15474_counterValue = 0;
var obj15474_counterTargetValue = 3;
var obj15474_counterCanExceedTargetValue = false;
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
		
obj15267_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15267_onTap_activeActionGroupIndex = -1;
		$("#obj15267").trigger("obj15267_onTap_ended");
		
		return;
	}
	window.obj15267_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15277 
hide_15269();
function hide_15269() {
	window.obj15267_onTap_runningActionsCount = obj15267_onTap_runningActionsCount + 1;
	$("#obj15277").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15267_onTap_runningActionsCount = window.obj15267_onTap_runningActionsCount - 1;
if (window.obj15267_onTap_runningActionsCount == 0) {
	obj15267_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15286 
hide_15270();
function hide_15270() {
	window.obj15267_onTap_runningActionsCount = obj15267_onTap_runningActionsCount + 1;
	$("#obj15286").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15267_onTap_runningActionsCount = window.obj15267_onTap_runningActionsCount - 1;
if (window.obj15267_onTap_runningActionsCount == 0) {
	obj15267_onTap_actionGroup1();
}
			}, 1);
		}
	);
}

//	action: move
//	target: obj15267 
move_15272();
function move_15272() {
	window.obj15267_onTap_runningActionsCount = obj15267_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj15267");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 66;
	var moveY = 639;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15267_onTap_runningActionsCount = window.obj15267_onTap_runningActionsCount - 1;
if (window.obj15267_onTap_runningActionsCount == 0) {
	obj15267_onTap_actionGroup1();
}
		}, 1);
	});
}













//	action: Run JavaScript
runjs_15271();
function runjs_15271() {
	window.obj15267_onTap_runningActionsCount = obj15267_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15267"));
	setTimeout(function() {
		window.obj15267_onTap_runningActionsCount = window.obj15267_onTap_runningActionsCount - 1;
if (window.obj15267_onTap_runningActionsCount == 0) {
	obj15267_onTap_actionGroup1();
}
	}, 1);
}






};
obj15267_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15267_onTap_activeActionGroupIndex = -1;
		$("#obj15267").trigger("obj15267_onTap_ended");
		
		return;
	}
	window.obj15267_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15425 
show_15273();
function show_15273() {
	window.obj15267_onTap_runningActionsCount = obj15267_onTap_runningActionsCount + 1;
	$("#obj15425").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15267_onTap_runningActionsCount = window.obj15267_onTap_runningActionsCount - 1;
if (window.obj15267_onTap_runningActionsCount == 0) {
	obj15267_onTap_actionGroup2();
}
				$("#obj15425").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15295 
show_15274();
function show_15274() {
	window.obj15267_onTap_runningActionsCount = obj15267_onTap_runningActionsCount + 1;
	$("#obj15295").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15267_onTap_runningActionsCount = window.obj15267_onTap_runningActionsCount - 1;
if (window.obj15267_onTap_runningActionsCount == 0) {
	obj15267_onTap_actionGroup2();
}
				$("#obj15295").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15415 
show_15275();
function show_15275() {
	window.obj15267_onTap_runningActionsCount = obj15267_onTap_runningActionsCount + 1;
	$("#obj15415").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15267_onTap_runningActionsCount = window.obj15267_onTap_runningActionsCount - 1;
if (window.obj15267_onTap_runningActionsCount == 0) {
	obj15267_onTap_actionGroup2();
}
				$("#obj15415").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15267_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15267_onTap_activeActionGroupIndex = -1;
		$("#obj15267").trigger("obj15267_onTap_ended");
		
		return;
	}
	window.obj15267_onTap_activeActionGroupIndex = 2;
	





















};
obj15277_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15277_onTap_activeActionGroupIndex = -1;
		$("#obj15277").trigger("obj15277_onTap_ended");
		
		return;
	}
	window.obj15277_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj15277 
move_15279();
function move_15279() {
	window.obj15277_onTap_runningActionsCount = obj15277_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj15277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-211";
	var moveY = "+=-30";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15277_onTap_runningActionsCount = window.obj15277_onTap_runningActionsCount - 1;
if (window.obj15277_onTap_runningActionsCount == 0) {
	obj15277_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj15277_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15277_onTap_activeActionGroupIndex = -1;
		$("#obj15277").trigger("obj15277_onTap_ended");
		
		return;
	}
	window.obj15277_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15427 
show_15280();
function show_15280() {
	window.obj15277_onTap_runningActionsCount = obj15277_onTap_runningActionsCount + 1;
	$("#obj15427").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15277_onTap_runningActionsCount = window.obj15277_onTap_runningActionsCount - 1;
if (window.obj15277_onTap_runningActionsCount == 0) {
	obj15277_onTap_actionGroup2();
}
				$("#obj15427").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15295 
show_15281();
function show_15281() {
	window.obj15277_onTap_runningActionsCount = obj15277_onTap_runningActionsCount + 1;
	$("#obj15295").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15277_onTap_runningActionsCount = window.obj15277_onTap_runningActionsCount - 1;
if (window.obj15277_onTap_runningActionsCount == 0) {
	obj15277_onTap_actionGroup2();
}
				$("#obj15295").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15411 
show_15283();
function show_15283() {
	window.obj15277_onTap_runningActionsCount = obj15277_onTap_runningActionsCount + 1;
	$("#obj15411").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15277_onTap_runningActionsCount = window.obj15277_onTap_runningActionsCount - 1;
if (window.obj15277_onTap_runningActionsCount == 0) {
	obj15277_onTap_actionGroup2();
}
				$("#obj15411").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_15282();
function runjs_15282() {
	window.obj15277_onTap_runningActionsCount = obj15277_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15277"));
	setTimeout(function() {
		window.obj15277_onTap_runningActionsCount = window.obj15277_onTap_runningActionsCount - 1;
if (window.obj15277_onTap_runningActionsCount == 0) {
	obj15277_onTap_actionGroup2();
}
	}, 1);
}






};
obj15277_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15277_onTap_activeActionGroupIndex = -1;
		$("#obj15277").trigger("obj15277_onTap_ended");
		
		return;
	}
	window.obj15277_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj15286 
hide_15284();
function hide_15284() {
	window.obj15277_onTap_runningActionsCount = obj15277_onTap_runningActionsCount + 1;
	$("#obj15286").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15277_onTap_runningActionsCount = window.obj15277_onTap_runningActionsCount - 1;
if (window.obj15277_onTap_runningActionsCount == 0) {
	obj15277_onTap_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15267 
hide_15285();
function hide_15285() {
	window.obj15277_onTap_runningActionsCount = obj15277_onTap_runningActionsCount + 1;
	$("#obj15267").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15277_onTap_runningActionsCount = window.obj15277_onTap_runningActionsCount - 1;
if (window.obj15277_onTap_runningActionsCount == 0) {
	obj15277_onTap_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj15277_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15277_onTap_activeActionGroupIndex = -1;
		$("#obj15277").trigger("obj15277_onTap_ended");
		
		return;
	}
	window.obj15277_onTap_activeActionGroupIndex = 3;
	





















};
obj15286_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15286_onTap_activeActionGroupIndex = -1;
		$("#obj15286").trigger("obj15286_onTap_ended");
		
		return;
	}
	window.obj15286_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj15286 
move_15288();
function move_15288() {
	window.obj15286_onTap_runningActionsCount = obj15286_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj15286");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-378";
	var moveY = "+=-357";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15286_onTap_runningActionsCount = window.obj15286_onTap_runningActionsCount - 1;
if (window.obj15286_onTap_runningActionsCount == 0) {
	obj15286_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj15286_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15286_onTap_activeActionGroupIndex = -1;
		$("#obj15286").trigger("obj15286_onTap_ended");
		
		return;
	}
	window.obj15286_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15429 
show_15289();
function show_15289() {
	window.obj15286_onTap_runningActionsCount = obj15286_onTap_runningActionsCount + 1;
	$("#obj15429").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15286_onTap_runningActionsCount = window.obj15286_onTap_runningActionsCount - 1;
if (window.obj15286_onTap_runningActionsCount == 0) {
	obj15286_onTap_actionGroup2();
}
				$("#obj15429").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15295 
show_15290();
function show_15290() {
	window.obj15286_onTap_runningActionsCount = obj15286_onTap_runningActionsCount + 1;
	$("#obj15295").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15286_onTap_runningActionsCount = window.obj15286_onTap_runningActionsCount - 1;
if (window.obj15286_onTap_runningActionsCount == 0) {
	obj15286_onTap_actionGroup2();
}
				$("#obj15295").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15407 
show_15292();
function show_15292() {
	window.obj15286_onTap_runningActionsCount = obj15286_onTap_runningActionsCount + 1;
	$("#obj15407").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15286_onTap_runningActionsCount = window.obj15286_onTap_runningActionsCount - 1;
if (window.obj15286_onTap_runningActionsCount == 0) {
	obj15286_onTap_actionGroup2();
}
				$("#obj15407").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_15291();
function runjs_15291() {
	window.obj15286_onTap_runningActionsCount = obj15286_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15286"));
	setTimeout(function() {
		window.obj15286_onTap_runningActionsCount = window.obj15286_onTap_runningActionsCount - 1;
if (window.obj15286_onTap_runningActionsCount == 0) {
	obj15286_onTap_actionGroup2();
}
	}, 1);
}






};
obj15286_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15286_onTap_activeActionGroupIndex = -1;
		$("#obj15286").trigger("obj15286_onTap_ended");
		
		return;
	}
	window.obj15286_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj15277 
hide_15293();
function hide_15293() {
	window.obj15286_onTap_runningActionsCount = obj15286_onTap_runningActionsCount + 1;
	$("#obj15277").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15286_onTap_runningActionsCount = window.obj15286_onTap_runningActionsCount - 1;
if (window.obj15286_onTap_runningActionsCount == 0) {
	obj15286_onTap_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15267 
hide_15294();
function hide_15294() {
	window.obj15286_onTap_runningActionsCount = obj15286_onTap_runningActionsCount + 1;
	$("#obj15267").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15286_onTap_runningActionsCount = window.obj15286_onTap_runningActionsCount - 1;
if (window.obj15286_onTap_runningActionsCount == 0) {
	obj15286_onTap_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj15286_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15286_onTap_activeActionGroupIndex = -1;
		$("#obj15286").trigger("obj15286_onTap_ended");
		
		return;
	}
	window.obj15286_onTap_activeActionGroupIndex = 3;
	





















};
obj15295_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15295_onShow_activeActionGroupIndex = -1;
		$("#obj15295").trigger("obj15295_onShow_ended");
		
		return;
	}
	window.obj15295_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15295 
show_15298();
function show_15298() {
	window.obj15295_onShow_runningActionsCount = obj15295_onShow_runningActionsCount + 1;
	$("#obj15295").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15295_onShow_runningActionsCount = window.obj15295_onShow_runningActionsCount - 1;
if (window.obj15295_onShow_runningActionsCount == 0) {
	obj15295_onShow_actionGroup1();
}
				$("#obj15295").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15295_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15295_onShow_activeActionGroupIndex = -1;
		$("#obj15295").trigger("obj15295_onShow_ended");
		
		return;
	}
	window.obj15295_onShow_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15315 
show_15299();
function show_15299() {
	window.obj15295_onShow_runningActionsCount = obj15295_onShow_runningActionsCount + 1;
	$("#obj15315").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15295_onShow_runningActionsCount = window.obj15295_onShow_runningActionsCount - 1;
if (window.obj15295_onShow_runningActionsCount == 0) {
	obj15295_onShow_actionGroup2();
}
				$("#obj15315").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15328 
show_15300();
function show_15300() {
	window.obj15295_onShow_runningActionsCount = obj15295_onShow_runningActionsCount + 1;
	$("#obj15328").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15295_onShow_runningActionsCount = window.obj15295_onShow_runningActionsCount - 1;
if (window.obj15295_onShow_runningActionsCount == 0) {
	obj15295_onShow_actionGroup2();
}
				$("#obj15328").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15394 
show_15301();
function show_15301() {
	window.obj15295_onShow_runningActionsCount = obj15295_onShow_runningActionsCount + 1;
	$("#obj15394").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15295_onShow_runningActionsCount = window.obj15295_onShow_runningActionsCount - 1;
if (window.obj15295_onShow_runningActionsCount == 0) {
	obj15295_onShow_actionGroup2();
}
				$("#obj15394").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15381 
show_15302();
function show_15302() {
	window.obj15295_onShow_runningActionsCount = obj15295_onShow_runningActionsCount + 1;
	$("#obj15381").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15295_onShow_runningActionsCount = window.obj15295_onShow_runningActionsCount - 1;
if (window.obj15295_onShow_runningActionsCount == 0) {
	obj15295_onShow_actionGroup2();
}
				$("#obj15381").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15355 
show_15303();
function show_15303() {
	window.obj15295_onShow_runningActionsCount = obj15295_onShow_runningActionsCount + 1;
	$("#obj15355").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15295_onShow_runningActionsCount = window.obj15295_onShow_runningActionsCount - 1;
if (window.obj15295_onShow_runningActionsCount == 0) {
	obj15295_onShow_actionGroup2();
}
				$("#obj15355").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15368 
show_15304();
function show_15304() {
	window.obj15295_onShow_runningActionsCount = obj15295_onShow_runningActionsCount + 1;
	$("#obj15368").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15295_onShow_runningActionsCount = window.obj15295_onShow_runningActionsCount - 1;
if (window.obj15295_onShow_runningActionsCount == 0) {
	obj15295_onShow_actionGroup2();
}
				$("#obj15368").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15342 
show_15305();
function show_15305() {
	window.obj15295_onShow_runningActionsCount = obj15295_onShow_runningActionsCount + 1;
	$("#obj15342").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15295_onShow_runningActionsCount = window.obj15295_onShow_runningActionsCount - 1;
if (window.obj15295_onShow_runningActionsCount == 0) {
	obj15295_onShow_actionGroup2();
}
				$("#obj15342").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15307 
show_15306();
function show_15306() {
	window.obj15295_onShow_runningActionsCount = obj15295_onShow_runningActionsCount + 1;
	$("#obj15307").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15295_onShow_runningActionsCount = window.obj15295_onShow_runningActionsCount - 1;
if (window.obj15295_onShow_runningActionsCount == 0) {
	obj15295_onShow_actionGroup2();
}
				$("#obj15307").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15295_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15295_onShow_activeActionGroupIndex = -1;
		$("#obj15295").trigger("obj15295_onShow_ended");
		
		return;
	}
	window.obj15295_onShow_activeActionGroupIndex = 2;
	





















};
obj15307_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15307_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15307").trigger("obj15307_onTouchDown_ended");
		
		return;
	}
	window.obj15307_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15310();
function runjs_15310() {
	window.obj15307_onTouchDown_runningActionsCount = obj15307_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15307"));
	setTimeout(function() {
		window.obj15307_onTouchDown_runningActionsCount = window.obj15307_onTouchDown_runningActionsCount - 1;
if (window.obj15307_onTouchDown_runningActionsCount == 0) {
	obj15307_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15307_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15307_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15307").trigger("obj15307_onTouchDown_ended");
		
		return;
	}
	window.obj15307_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15307");
//	action: dragDrop
//	target: obj15307 
dragDrop_15312();
function dragDrop_15312() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15307_onTouchDown_runningActionsCount = obj15307_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15307');
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
    	window.obj15307_onTouchDown_runningActionsCount = window.obj15307_onTouchDown_runningActionsCount - 1;
if (window.obj15307_onTouchDown_runningActionsCount == 0) {
	obj15307_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15312 = false;
    	var dropped_id_15312;
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
					dropped_15312 = true;
					dropped_id_15312 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15312) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15307").trigger('SCActionDragDrop9943_droppedOutsideTargetActions');
		}
    });
}











};
obj15307_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15307_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15307").trigger("obj15307_onTouchDown_ended");
		
		return;
	}
	window.obj15307_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15307").trigger("obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15307 
rotate_15314();
function rotate_15314() {
	window.obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_runningActionsCount = obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15307";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15307';
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
	if (isInfinite) { rotate_15314_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15314_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15314_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15314_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15314_completed() {
	setTimeout(function() {
		window.obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_runningActionsCount = window.obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15307").trigger("obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15315_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15315_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_onTouchDown_ended");
		
		return;
	}
	window.obj15315_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15327();
function runjs_15327() {
	window.obj15315_onTouchDown_runningActionsCount = obj15315_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15315"));
	setTimeout(function() {
		window.obj15315_onTouchDown_runningActionsCount = window.obj15315_onTouchDown_runningActionsCount - 1;
if (window.obj15315_onTouchDown_runningActionsCount == 0) {
	obj15315_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15315_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15315_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_onTouchDown_ended");
		
		return;
	}
	window.obj15315_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15315");
//	action: dragDrop
//	target: obj15315 
dragDrop_15318();
function dragDrop_15318() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15315_onTouchDown_runningActionsCount = obj15315_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15315');
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
    	window.obj15315_onTouchDown_runningActionsCount = window.obj15315_onTouchDown_runningActionsCount - 1;
if (window.obj15315_onTouchDown_runningActionsCount == 0) {
	obj15315_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15425");
    	var actionsOnDrop = new Array("SCActionDragDrop7796_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15318 = false;
    	var dropped_id_15318;
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
					dropped_15318 = true;
					dropped_id_15318 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15318) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15315").trigger('SCActionDragDrop9909_droppedOutsideTargetActions');
$("#obj15315").trigger('SCActionDragDrop9909_droppedOutsideTargetActions');
		}
    });
}











};
obj15315_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15315_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_onTouchDown_ended");
		
		return;
	}
	window.obj15315_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15315 
rotate_15325();
function rotate_15325() {
	window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount = obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15315";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15315';
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
	if (isInfinite) { rotate_15325_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15325_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15325_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15325_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15325_completed() {
	setTimeout(function() {
		window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount = window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15315 
rotate_15325();
function rotate_15325() {
	window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount = obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15315";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15315';
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
	if (isInfinite) { rotate_15325_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15325_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15325_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15325_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15325_completed() {
	setTimeout(function() {
		window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount = window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15315_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15320();
function runjs_15320() {
	window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15425"));
	setTimeout(function() {
		window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15315_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: increment counter
//	target: obj15474 
incrementCounter_15321();
function incrementCounter_15321() {
	window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15474_counterValue;
	obj15474_counterValue = obj15474_counterValue + 1;
	if (! obj15474_counterCanExceedTargetValue && obj15474_counterValue > obj15474_counterTargetValue) {
		obj15474_counterValue = obj15474_counterTargetValue;
	}
	if (oldValue != obj15474_counterValue) {
		$("#obj15474").trigger('SCEventCounterValueChange');
		$("#obj15474").trigger('SCEventCounterIncrease');
		if (obj15474_counterValue == obj15474_counterTargetValue)
			$("#obj15474").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15315_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15315_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15315 
hide_15322();
function hide_15322() {
	window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj15315").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15315_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15315_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj15315 
move_15323();
function move_15323() {
	window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj15315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 18;
	var moveY = 1068;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15315_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	});
}



















};
obj15315_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15315").trigger("obj15315_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj15328_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15328_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_onTouchDown_ended");
		
		return;
	}
	window.obj15328_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15341();
function runjs_15341() {
	window.obj15328_onTouchDown_runningActionsCount = obj15328_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15328"));
	setTimeout(function() {
		window.obj15328_onTouchDown_runningActionsCount = window.obj15328_onTouchDown_runningActionsCount - 1;
if (window.obj15328_onTouchDown_runningActionsCount == 0) {
	obj15328_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15328_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15328_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_onTouchDown_ended");
		
		return;
	}
	window.obj15328_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15328");
//	action: dragDrop
//	target: obj15328 
dragDrop_15332();
function dragDrop_15332() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15328_onTouchDown_runningActionsCount = obj15328_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15328');
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
    	window.obj15328_onTouchDown_runningActionsCount = window.obj15328_onTouchDown_runningActionsCount - 1;
if (window.obj15328_onTouchDown_runningActionsCount == 0) {
	obj15328_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15429");
    	var actionsOnDrop = new Array("SCActionDragDrop7796_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15332 = false;
    	var dropped_id_15332;
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
					dropped_15332 = true;
					dropped_id_15332 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15332) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15328").trigger('SCActionDragDrop9707_droppedOutsideTargetActions');
$("#obj15328").trigger('SCActionDragDrop9707_droppedOutsideTargetActions');
		}
    });
}











};
obj15328_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15328_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_onTouchDown_ended");
		
		return;
	}
	window.obj15328_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15328 
rotate_15339();
function rotate_15339() {
	window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount = obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15328";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15328';
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
	if (isInfinite) { rotate_15339_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15339_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15339_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15339_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15339_completed() {
	setTimeout(function() {
		window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount = window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15328 
rotate_15339();
function rotate_15339() {
	window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount = obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15328";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15328';
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
	if (isInfinite) { rotate_15339_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15339_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15339_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15339_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15339_completed() {
	setTimeout(function() {
		window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount = window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15328_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15334();
function runjs_15334() {
	window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15429"));
	setTimeout(function() {
		window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15328_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: increment counter
//	target: obj15454 
incrementCounter_15335();
function incrementCounter_15335() {
	window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15454_counterValue;
	obj15454_counterValue = obj15454_counterValue + 1;
	if (! obj15454_counterCanExceedTargetValue && obj15454_counterValue > obj15454_counterTargetValue) {
		obj15454_counterValue = obj15454_counterTargetValue;
	}
	if (oldValue != obj15454_counterValue) {
		$("#obj15454").trigger('SCEventCounterValueChange');
		$("#obj15454").trigger('SCEventCounterIncrease');
		if (obj15454_counterValue == obj15454_counterTargetValue)
			$("#obj15454").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15328_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15328_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15328 
hide_15336();
function hide_15336() {
	window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj15328").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15328_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15328_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj15328 
move_15337();
function move_15337() {
	window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj15328");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 524;
	var moveY = 815;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15328_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	});
}



















};
obj15328_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15328").trigger("obj15328_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj15342_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15342_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_onTouchDown_ended");
		
		return;
	}
	window.obj15342_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15354();
function runjs_15354() {
	window.obj15342_onTouchDown_runningActionsCount = obj15342_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15342"));
	setTimeout(function() {
		window.obj15342_onTouchDown_runningActionsCount = window.obj15342_onTouchDown_runningActionsCount - 1;
if (window.obj15342_onTouchDown_runningActionsCount == 0) {
	obj15342_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15342_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15342_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_onTouchDown_ended");
		
		return;
	}
	window.obj15342_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15342");
//	action: dragDrop
//	target: obj15342 
dragDrop_15345();
function dragDrop_15345() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15342_onTouchDown_runningActionsCount = obj15342_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15342');
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
    	window.obj15342_onTouchDown_runningActionsCount = window.obj15342_onTouchDown_runningActionsCount - 1;
if (window.obj15342_onTouchDown_runningActionsCount == 0) {
	obj15342_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15429");
    	var actionsOnDrop = new Array("SCActionDragDrop7796_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15345 = false;
    	var dropped_id_15345;
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
					dropped_15345 = true;
					dropped_id_15345 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15345) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15342").trigger('SCActionDragDrop9866_droppedOutsideTargetActions');
$("#obj15342").trigger('SCActionDragDrop9866_droppedOutsideTargetActions');
		}
    });
}











};
obj15342_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15342_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_onTouchDown_ended");
		
		return;
	}
	window.obj15342_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15342 
rotate_15352();
function rotate_15352() {
	window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount = obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15342";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15342';
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
	if (isInfinite) { rotate_15352_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15352_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15352_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15352_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15352_completed() {
	setTimeout(function() {
		window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount = window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15342 
rotate_15352();
function rotate_15352() {
	window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount = obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15342";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15342';
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
	if (isInfinite) { rotate_15352_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15352_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15352_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15352_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15352_completed() {
	setTimeout(function() {
		window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount = window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15342_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15347();
function runjs_15347() {
	window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15429"));
	setTimeout(function() {
		window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15342_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: increment counter
//	target: obj15454 
incrementCounter_15348();
function incrementCounter_15348() {
	window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15454_counterValue;
	obj15454_counterValue = obj15454_counterValue + 1;
	if (! obj15454_counterCanExceedTargetValue && obj15454_counterValue > obj15454_counterTargetValue) {
		obj15454_counterValue = obj15454_counterTargetValue;
	}
	if (oldValue != obj15454_counterValue) {
		$("#obj15454").trigger('SCEventCounterValueChange');
		$("#obj15454").trigger('SCEventCounterIncrease');
		if (obj15454_counterValue == obj15454_counterTargetValue)
			$("#obj15454").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15342_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15342_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15342 
hide_15349();
function hide_15349() {
	window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj15342").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15342_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15342_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj15342 
move_15350();
function move_15350() {
	window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj15342");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 208;
	var moveY = 915;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15342_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	});
}



















};
obj15342_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15342").trigger("obj15342_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj15355_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15355_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_onTouchDown_ended");
		
		return;
	}
	window.obj15355_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15367();
function runjs_15367() {
	window.obj15355_onTouchDown_runningActionsCount = obj15355_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15355"));
	setTimeout(function() {
		window.obj15355_onTouchDown_runningActionsCount = window.obj15355_onTouchDown_runningActionsCount - 1;
if (window.obj15355_onTouchDown_runningActionsCount == 0) {
	obj15355_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15355_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15355_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_onTouchDown_ended");
		
		return;
	}
	window.obj15355_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15355");
//	action: dragDrop
//	target: obj15355 
dragDrop_15358();
function dragDrop_15358() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15355_onTouchDown_runningActionsCount = obj15355_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15355');
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
    	window.obj15355_onTouchDown_runningActionsCount = window.obj15355_onTouchDown_runningActionsCount - 1;
if (window.obj15355_onTouchDown_runningActionsCount == 0) {
	obj15355_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15427");
    	var actionsOnDrop = new Array("SCActionDragDrop7857_droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15358 = false;
    	var dropped_id_15358;
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
					dropped_15358 = true;
					dropped_id_15358 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15358) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15355").trigger('SCActionDragDrop9661_droppedOutsideTargetActions');
$("#obj15355").trigger('SCActionDragDrop9661_droppedOutsideTargetActions');
		}
    });
}











};
obj15355_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15355_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_onTouchDown_ended");
		
		return;
	}
	window.obj15355_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15355 
rotate_15365();
function rotate_15365() {
	window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount = obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15355";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15355';
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
	if (isInfinite) { rotate_15365_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15365_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15365_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15365_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15365_completed() {
	setTimeout(function() {
		window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount = window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15355 
rotate_15365();
function rotate_15365() {
	window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount = obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15355";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15355';
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
	if (isInfinite) { rotate_15365_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15365_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15365_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15365_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15365_completed() {
	setTimeout(function() {
		window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount = window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15360();
function runjs_15360() {
	window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15427"));
	setTimeout(function() {
		window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}

//	action: increment counter
//	target: obj15434 
incrementCounter_15361();
function incrementCounter_15361() {
	window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj15434_counterValue;
	obj15434_counterValue = obj15434_counterValue + 1;
	if (! obj15434_counterCanExceedTargetValue && obj15434_counterValue > obj15434_counterTargetValue) {
		obj15434_counterValue = obj15434_counterTargetValue;
	}
	if (oldValue != obj15434_counterValue) {
		$("#obj15434").trigger('SCEventCounterValueChange');
		$("#obj15434").trigger('SCEventCounterIncrease');
		if (obj15434_counterValue == obj15434_counterTargetValue)
			$("#obj15434").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}





};
obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15355 
hide_15362();
function hide_15362() {
	window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount + 1;
	$("#obj15355").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: move
//	target: obj15355 
move_15363();
function move_15363() {
	window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj15355");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 315;
	var moveY = 933;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	});
}



















};
obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj15355").trigger("obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	





















};
obj15368_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15368_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_onTouchDown_ended");
		
		return;
	}
	window.obj15368_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15380();
function runjs_15380() {
	window.obj15368_onTouchDown_runningActionsCount = obj15368_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15368"));
	setTimeout(function() {
		window.obj15368_onTouchDown_runningActionsCount = window.obj15368_onTouchDown_runningActionsCount - 1;
if (window.obj15368_onTouchDown_runningActionsCount == 0) {
	obj15368_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15368_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15368_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_onTouchDown_ended");
		
		return;
	}
	window.obj15368_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15368");
//	action: dragDrop
//	target: obj15368 
dragDrop_15371();
function dragDrop_15371() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15368_onTouchDown_runningActionsCount = obj15368_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15368');
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
    	window.obj15368_onTouchDown_runningActionsCount = window.obj15368_onTouchDown_runningActionsCount - 1;
if (window.obj15368_onTouchDown_runningActionsCount == 0) {
	obj15368_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15427");
    	var actionsOnDrop = new Array("SCActionDragDrop7796_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15371 = false;
    	var dropped_id_15371;
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
					dropped_15371 = true;
					dropped_id_15371 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15371) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15368").trigger('SCActionDragDrop9652_droppedOutsideTargetActions');
$("#obj15368").trigger('SCActionDragDrop9652_droppedOutsideTargetActions');
		}
    });
}











};
obj15368_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15368_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_onTouchDown_ended");
		
		return;
	}
	window.obj15368_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15368 
rotate_15378();
function rotate_15378() {
	window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount = obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15368";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15368';
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
	if (isInfinite) { rotate_15378_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15378_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15378_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15378_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15378_completed() {
	setTimeout(function() {
		window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount = window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15368 
rotate_15378();
function rotate_15378() {
	window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount = obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15368";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15368';
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
	if (isInfinite) { rotate_15378_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15378_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15378_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15378_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15378_completed() {
	setTimeout(function() {
		window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount = window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15368_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15373();
function runjs_15373() {
	window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15427"));
	setTimeout(function() {
		window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15368_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: increment counter
//	target: obj15434 
incrementCounter_15374();
function incrementCounter_15374() {
	window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15434_counterValue;
	obj15434_counterValue = obj15434_counterValue + 1;
	if (! obj15434_counterCanExceedTargetValue && obj15434_counterValue > obj15434_counterTargetValue) {
		obj15434_counterValue = obj15434_counterTargetValue;
	}
	if (oldValue != obj15434_counterValue) {
		$("#obj15434").trigger('SCEventCounterValueChange');
		$("#obj15434").trigger('SCEventCounterIncrease');
		if (obj15434_counterValue == obj15434_counterTargetValue)
			$("#obj15434").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15368_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15368_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15368 
hide_15375();
function hide_15375() {
	window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj15368").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15368_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}

//	action: move
//	target: obj15368 
move_15376();
function move_15376() {
	window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj15368");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 1018;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15368_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	});
}



















};
obj15368_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15368").trigger("obj15368_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj15381_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15381_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_onTouchDown_ended");
		
		return;
	}
	window.obj15381_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15393();
function runjs_15393() {
	window.obj15381_onTouchDown_runningActionsCount = obj15381_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15381"));
	setTimeout(function() {
		window.obj15381_onTouchDown_runningActionsCount = window.obj15381_onTouchDown_runningActionsCount - 1;
if (window.obj15381_onTouchDown_runningActionsCount == 0) {
	obj15381_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15381_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15381_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_onTouchDown_ended");
		
		return;
	}
	window.obj15381_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15381");
//	action: dragDrop
//	target: obj15381 
dragDrop_15384();
function dragDrop_15384() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15381_onTouchDown_runningActionsCount = obj15381_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15381');
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
    	window.obj15381_onTouchDown_runningActionsCount = window.obj15381_onTouchDown_runningActionsCount - 1;
if (window.obj15381_onTouchDown_runningActionsCount == 0) {
	obj15381_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15425");
    	var actionsOnDrop = new Array("SCActionDragDrop7796_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15384 = false;
    	var dropped_id_15384;
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
					dropped_15384 = true;
					dropped_id_15384 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15384) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15381").trigger('SCActionDragDrop9915_droppedOutsideTargetActions');
$("#obj15381").trigger('SCActionDragDrop9915_droppedOutsideTargetActions');
		}
    });
}











};
obj15381_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15381_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_onTouchDown_ended");
		
		return;
	}
	window.obj15381_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15381 
rotate_15391();
function rotate_15391() {
	window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount = obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15381";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15381';
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
	if (isInfinite) { rotate_15391_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15391_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15391_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15391_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15391_completed() {
	setTimeout(function() {
		window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount = window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15381 
rotate_15391();
function rotate_15391() {
	window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount = obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15381";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15381';
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
	if (isInfinite) { rotate_15391_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15391_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15391_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15391_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15391_completed() {
	setTimeout(function() {
		window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount = window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15381_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15386();
function runjs_15386() {
	window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15425"));
	setTimeout(function() {
		window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15381_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: increment counter
//	target: obj15474 
incrementCounter_15387();
function incrementCounter_15387() {
	window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15474_counterValue;
	obj15474_counterValue = obj15474_counterValue + 1;
	if (! obj15474_counterCanExceedTargetValue && obj15474_counterValue > obj15474_counterTargetValue) {
		obj15474_counterValue = obj15474_counterTargetValue;
	}
	if (oldValue != obj15474_counterValue) {
		$("#obj15474").trigger('SCEventCounterValueChange');
		$("#obj15474").trigger('SCEventCounterIncrease');
		if (obj15474_counterValue == obj15474_counterTargetValue)
			$("#obj15474").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15381_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15381_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15381 
hide_15388();
function hide_15388() {
	window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj15381").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15381_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15381_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj15381 
move_15389();
function move_15389() {
	window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj15381");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 460;
	var moveY = 992;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15381_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	});
}



















};
obj15381_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15381").trigger("obj15381_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj15394_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15394_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_onTouchDown_ended");
		
		return;
	}
	window.obj15394_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15406();
function runjs_15406() {
	window.obj15394_onTouchDown_runningActionsCount = obj15394_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15394"));
	setTimeout(function() {
		window.obj15394_onTouchDown_runningActionsCount = window.obj15394_onTouchDown_runningActionsCount - 1;
if (window.obj15394_onTouchDown_runningActionsCount == 0) {
	obj15394_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj15394_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15394_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_onTouchDown_ended");
		
		return;
	}
	window.obj15394_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj15394");
//	action: dragDrop
//	target: obj15394 
dragDrop_15397();
function dragDrop_15397() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj15394_onTouchDown_runningActionsCount = obj15394_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj15394');
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
    	window.obj15394_onTouchDown_runningActionsCount = window.obj15394_onTouchDown_runningActionsCount - 1;
if (window.obj15394_onTouchDown_runningActionsCount == 0) {
	obj15394_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj15425");
    	var actionsOnDrop = new Array("SCActionDragDrop7796_droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_15397 = false;
    	var dropped_id_15397;
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
					dropped_15397 = true;
					dropped_id_15397 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_15397) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj15394").trigger('SCActionDragDrop9903_droppedOutsideTargetActions');
$("#obj15394").trigger('SCActionDragDrop9903_droppedOutsideTargetActions');
		}
    });
}











};
obj15394_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15394_onTouchDown_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_onTouchDown_ended");
		
		return;
	}
	window.obj15394_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15394 
rotate_15404();
function rotate_15404() {
	window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount = obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15394";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15394';
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
	if (isInfinite) { rotate_15404_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15404_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15404_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15404_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15404_completed() {
	setTimeout(function() {
		window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount = window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj15394 
rotate_15404();
function rotate_15404() {
	window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount = obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj15394";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15394';
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
	if (isInfinite) { rotate_15404_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15404_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15404_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15404_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15404_completed() {
	setTimeout(function() {
		window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount = window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj15394_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15399();
function runjs_15399() {
	window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15425"));
	setTimeout(function() {
		window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15394_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: increment counter
//	target: obj15474 
incrementCounter_15400();
function incrementCounter_15400() {
	window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj15474_counterValue;
	obj15474_counterValue = obj15474_counterValue + 1;
	if (! obj15474_counterCanExceedTargetValue && obj15474_counterValue > obj15474_counterTargetValue) {
		obj15474_counterValue = obj15474_counterTargetValue;
	}
	if (oldValue != obj15474_counterValue) {
		$("#obj15474").trigger('SCEventCounterValueChange');
		$("#obj15474").trigger('SCEventCounterIncrease');
		if (obj15474_counterValue == obj15474_counterTargetValue)
			$("#obj15474").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15394_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj15394_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15394 
hide_15401();
function hide_15401() {
	window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj15394").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15394_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15394_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj15394 
move_15402();
function move_15402() {
	window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj15394");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 460;
	var moveY = 992;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount == 0) {
	obj15394_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	});
}



















};
obj15394_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj15394").trigger("obj15394_SCActionDragDrop7796_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj15407_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15407_onShow_activeActionGroupIndex = -1;
		$("#obj15407").trigger("obj15407_onShow_ended");
		
		return;
	}
	window.obj15407_onShow_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15410();
function runjs_15410() {
	window.obj15407_onShow_runningActionsCount = obj15407_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15407"));
	setTimeout(function() {
		window.obj15407_onShow_runningActionsCount = window.obj15407_onShow_runningActionsCount - 1;
if (window.obj15407_onShow_runningActionsCount == 0) {
	obj15407_onShow_actionGroup1();
}
	}, 1);
}






};
obj15407_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15407_onShow_activeActionGroupIndex = -1;
		$("#obj15407").trigger("obj15407_onShow_ended");
		
		return;
	}
	window.obj15407_onShow_activeActionGroupIndex = 1;
	





















};
obj15411_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15411_onShow_activeActionGroupIndex = -1;
		$("#obj15411").trigger("obj15411_onShow_ended");
		
		return;
	}
	window.obj15411_onShow_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15414();
function runjs_15414() {
	window.obj15411_onShow_runningActionsCount = obj15411_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15411"));
	setTimeout(function() {
		window.obj15411_onShow_runningActionsCount = window.obj15411_onShow_runningActionsCount - 1;
if (window.obj15411_onShow_runningActionsCount == 0) {
	obj15411_onShow_actionGroup1();
}
	}, 1);
}






};
obj15411_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15411_onShow_activeActionGroupIndex = -1;
		$("#obj15411").trigger("obj15411_onShow_ended");
		
		return;
	}
	window.obj15411_onShow_activeActionGroupIndex = 1;
	





















};
obj15415_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15415_onShow_activeActionGroupIndex = -1;
		$("#obj15415").trigger("obj15415_onShow_ended");
		
		return;
	}
	window.obj15415_onShow_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_15418();
function runjs_15418() {
	window.obj15415_onShow_runningActionsCount = obj15415_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15415"));
	setTimeout(function() {
		window.obj15415_onShow_runningActionsCount = window.obj15415_onShow_runningActionsCount - 1;
if (window.obj15415_onShow_runningActionsCount == 0) {
	obj15415_onShow_actionGroup1();
}
	}, 1);
}






};
obj15415_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15415_onShow_activeActionGroupIndex = -1;
		$("#obj15415").trigger("obj15415_onShow_ended");
		
		return;
	}
	window.obj15415_onShow_activeActionGroupIndex = 1;
	





















};
obj15419_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15419_onShow_activeActionGroupIndex = -1;
		$("#obj15419").trigger("obj15419_onShow_ended");
		
		return;
	}
	window.obj15419_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15419 
show_15422();
function show_15422() {
	window.obj15419_onShow_runningActionsCount = obj15419_onShow_runningActionsCount + 1;
	$("#obj15419").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj15419_onShow_runningActionsCount = window.obj15419_onShow_runningActionsCount - 1;
if (window.obj15419_onShow_runningActionsCount == 0) {
	obj15419_onShow_actionGroup1();
}
				$("#obj15419").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15419_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15419_onShow_activeActionGroupIndex = -1;
		$("#obj15419").trigger("obj15419_onShow_ended");
		
		return;
	}
	window.obj15419_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15419 
hide_15423();
function hide_15423() {
	window.obj15419_onShow_runningActionsCount = obj15419_onShow_runningActionsCount + 1;
	$("#obj15419").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj15419_onShow_runningActionsCount = window.obj15419_onShow_runningActionsCount - 1;
if (window.obj15419_onShow_runningActionsCount == 0) {
	obj15419_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15419_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15419_onShow_activeActionGroupIndex = -1;
		$("#obj15419").trigger("obj15419_onShow_ended");
		
		return;
	}
	window.obj15419_onShow_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj15419_onShow();
function loop_obj15419_onShow() {
	var loopCount = 1;
	window.obj15419_onShow_loopCount = window.obj15419_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj15419_onShow_loopCount > loopCount) {
		window.obj15419_onShow_loopCount = 0
		obj15419_onShow_actionGroup3();
	} else {
		obj15419_onShow_actionGroup0();
	}
}













};
obj15419_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15419_onShow_activeActionGroupIndex = -1;
		$("#obj15419").trigger("obj15419_onShow_ended");
		
		return;
	}
	window.obj15419_onShow_activeActionGroupIndex = 3;
	





















};
obj15431_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15431_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15431").trigger("obj15431_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15431_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page31
goToPage_15433();
function goToPage_15433() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../31/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(31))},200);
	}
}





















};
obj15431_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15431_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15431").trigger("obj15431_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15431_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	





















};
obj15434_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15419 
show_15437();
function show_15437() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15419").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup1();
}
				$("#obj15419").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_15436();
function runjs_15436() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15419"));
	setTimeout(function() {
		window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1);
}






};
obj15434_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15427 
hide_15438();
function hide_15438() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15427").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15434_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj15411 
hide_15439();
function hide_15439() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15411").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj15434_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj15295 
hide_15440();
function hide_15440() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15295").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj15434_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	target: obj15394 
hide_15441();
function hide_15441() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15394").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15381 
hide_15442();
function hide_15442() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15381").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15368 
hide_15443();
function hide_15443() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15368").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15355 
hide_15444();
function hide_15444() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15355").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15342 
hide_15445();
function hide_15445() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15342").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15315 
hide_15446();
function hide_15446() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15315").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15328 
hide_15447();
function hide_15447() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15328").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15307 
hide_15448();
function hide_15448() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15307").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}




















};
obj15434_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj15277 
move_15449();
function move_15449() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;

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
	var targetObject = $("#obj15277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=150";
	var moveY = "+=812";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup6();
}
		}, 1);
	});
}



















};
obj15434_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	

//	action: hide
//	target: obj15277 
hide_15450();
function hide_15450() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15277").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup7();
}
			}, 1);
		}
	);
}




















};
obj15434_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	

//	action: show 
//	target: obj15286 
show_15451();
function show_15451() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15286").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup8();
}
				$("#obj15286").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15267 
show_15452();
function show_15452() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15267").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup8();
}
				$("#obj15267").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15434_SCEventCounterReachedTargetValue_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 8;
	
















//	action: increment counter
//	target: obj15431 
incrementCounter_15453();
function incrementCounter_15453() {
	window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = obj15434_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var oldValue = obj15431_counterValue;
	obj15431_counterValue = obj15431_counterValue + 1;
	if (! obj15431_counterCanExceedTargetValue && obj15431_counterValue > obj15431_counterTargetValue) {
		obj15431_counterValue = obj15431_counterTargetValue;
	}
	if (oldValue != obj15431_counterValue) {
		$("#obj15431").trigger('SCEventCounterValueChange');
		$("#obj15431").trigger('SCEventCounterIncrease');
		if (obj15431_counterValue == obj15431_counterTargetValue)
			$("#obj15431").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15434_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15434_SCEventCounterReachedTargetValue_actionGroup9();
} }, 1);
}





};
obj15434_SCEventCounterReachedTargetValue_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15434").trigger("obj15434_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex = 9;
	





















};
obj15454_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15419 
show_15457();
function show_15457() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15419").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup1();
}
				$("#obj15419").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_15456();
function runjs_15456() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15419"));
	setTimeout(function() {
		window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1);
}






};
obj15454_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15429 
hide_15458();
function hide_15458() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15429").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15454_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj15407 
hide_15459();
function hide_15459() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15407").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj15454_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj15295 
hide_15460();
function hide_15460() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15295").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj15454_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	target: obj15394 
hide_15461();
function hide_15461() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15394").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15381 
hide_15462();
function hide_15462() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15381").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15368 
hide_15463();
function hide_15463() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15368").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15355 
hide_15464();
function hide_15464() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15355").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15342 
hide_15465();
function hide_15465() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15342").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15315 
hide_15466();
function hide_15466() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15315").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15328 
hide_15467();
function hide_15467() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15328").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15307 
hide_15468();
function hide_15468() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15307").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}




















};
obj15454_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj15286 
move_15469();
function move_15469() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;

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
	var targetObject = $("#obj15286");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=92";
	var moveY = "+=1041";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup6();
}
		}, 1);
	});
}



















};
obj15454_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	

//	action: hide
//	target: obj15286 
hide_15470();
function hide_15470() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15286").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup7();
}
			}, 1);
		}
	);
}




















};
obj15454_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	

//	action: show 
//	target: obj15277 
show_15471();
function show_15471() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15277").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup8();
}
				$("#obj15277").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15267 
show_15472();
function show_15472() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15267").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup8();
}
				$("#obj15267").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15454_SCEventCounterReachedTargetValue_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 8;
	
















//	action: increment counter
//	target: obj15431 
incrementCounter_15473();
function incrementCounter_15473() {
	window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = obj15454_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var oldValue = obj15431_counterValue;
	obj15431_counterValue = obj15431_counterValue + 1;
	if (! obj15431_counterCanExceedTargetValue && obj15431_counterValue > obj15431_counterTargetValue) {
		obj15431_counterValue = obj15431_counterTargetValue;
	}
	if (oldValue != obj15431_counterValue) {
		$("#obj15431").trigger('SCEventCounterValueChange');
		$("#obj15431").trigger('SCEventCounterIncrease');
		if (obj15431_counterValue == obj15431_counterTargetValue)
			$("#obj15431").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15454_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15454_SCEventCounterReachedTargetValue_actionGroup9();
} }, 1);
}





};
obj15454_SCEventCounterReachedTargetValue_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex = 9;
	





















};
obj15474_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15419 
show_15477();
function show_15477() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15419").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup1();
}
				$("#obj15419").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_15476();
function runjs_15476() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15419"));
	setTimeout(function() {
		window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1);
}






};
obj15474_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15425 
hide_15478();
function hide_15478() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15425").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15474_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj15415 
hide_15479();
function hide_15479() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15415").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj15474_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj15295 
hide_15480();
function hide_15480() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15295").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj15474_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	target: obj15394 
hide_15481();
function hide_15481() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15394").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15381 
hide_15482();
function hide_15482() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15381").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15368 
hide_15483();
function hide_15483() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15368").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15355 
hide_15484();
function hide_15484() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15355").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15342 
hide_15485();
function hide_15485() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15342").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15315 
hide_15486();
function hide_15486() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15315").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15328 
hide_15487();
function hide_15487() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15328").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15307 
hide_15488();
function hide_15488() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15307").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup5();
}
			}, 1);
		}
	);
}




















};
obj15474_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj15267 
move_15489();
function move_15489() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;

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
	var targetObject = $("#obj15267");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=150";
	var moveY = "+=812";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup6();
}
		}, 1);
	});
}



















};
obj15474_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	

//	action: hide
//	target: obj15267 
hide_15490();
function hide_15490() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15267").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup7();
}
			}, 1);
		}
	);
}




















};
obj15474_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	

//	action: show 
//	target: obj15286 
show_15491();
function show_15491() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15286").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup8();
}
				$("#obj15286").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15277 
show_15492();
function show_15492() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj15277").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup8();
}
				$("#obj15277").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15474_SCEventCounterReachedTargetValue_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 8;
	
















//	action: increment counter
//	target: obj15431 
incrementCounter_15493();
function incrementCounter_15493() {
	window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = obj15474_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var oldValue = obj15431_counterValue;
	obj15431_counterValue = obj15431_counterValue + 1;
	if (! obj15431_counterCanExceedTargetValue && obj15431_counterValue > obj15431_counterTargetValue) {
		obj15431_counterValue = obj15431_counterTargetValue;
	}
	if (oldValue != obj15431_counterValue) {
		$("#obj15431").trigger('SCEventCounterValueChange');
		$("#obj15431").trigger('SCEventCounterIncrease');
		if (obj15431_counterValue == obj15431_counterTargetValue)
			$("#obj15431").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15474_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15474_SCEventCounterReachedTargetValue_actionGroup9();
} }, 1);
}





};
obj15474_SCEventCounterReachedTargetValue_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15474").trigger("obj15474_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex = 9;
	





















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
 *   obj15267: Event Touch Down
 *
 */
 
$("#obj15267").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15267_onTap_activeActionGroupIndex != -1) return;
var obj15267_onTap_runningActionsCount = 0;
var obj15267_onTap_loopCount = 0;
obj15267_onTap_actionGroup0();
});







/*
 *
 *   obj15277: Event Touch Down
 *
 */
 
$("#obj15277").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15277_onTap_activeActionGroupIndex != -1) return;
var obj15277_onTap_runningActionsCount = 0;
var obj15277_onTap_loopCount = 0;
obj15277_onTap_actionGroup0();
});







/*
 *
 *   obj15286: Event Touch Down
 *
 */
 
$("#obj15286").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15286_onTap_activeActionGroupIndex != -1) return;
var obj15286_onTap_runningActionsCount = 0;
var obj15286_onTap_loopCount = 0;
obj15286_onTap_actionGroup0();
});








/*
 *
 *   obj15295: Event Show
 *
 */
 
$("#obj15295").bind('SCEventShow', function(event) {
	if (window.obj15295_onShow_activeActionGroupIndex != -1) return;
var obj15295_onShow_runningActionsCount = 0;
var obj15295_onShow_loopCount = 0;
obj15295_onShow_actionGroup0();
});






/*
 *
 *   obj15307: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15307");
	var winTarget = document.getElementById("obj15307");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15307").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15307_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15307_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15307_onTouchDown_activeActionGroupIndex != -1) return;
var obj15307_onTouchDown_runningActionsCount = 0;
var obj15307_onTouchDown_loopCount = 0;
obj15307_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15307: Event SCActionDragDrop9943_droppedOutsideTargetActions
 *
 */
$("#obj15307").bind("SCActionDragDrop9943_droppedOutsideTargetActions", function(event) {
	if (window.obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_loopCount = 0;
obj15307_SCActionDragDrop9943_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15315: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15315");
	var winTarget = document.getElementById("obj15315");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15315").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15315_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15315_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15315_onTouchDown_activeActionGroupIndex != -1) return;
var obj15315_onTouchDown_runningActionsCount = 0;
var obj15315_onTouchDown_loopCount = 0;
obj15315_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15315: Event SCActionDragDrop9909_droppedOutsideTargetActions
 *
 */
$("#obj15315").bind("SCActionDragDrop9909_droppedOutsideTargetActions", function(event) {
	if (window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_loopCount = 0;
obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15315: Event SCActionDragDrop9909_droppedOutsideTargetActions
 *
 */
$("#obj15315").bind("SCActionDragDrop9909_droppedOutsideTargetActions", function(event) {
	if (window.obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_loopCount = 0;
obj15315_SCActionDragDrop9909_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15315: Event SCActionDragDrop7796_droppedInsideTargetActions
 *
 */
$("#obj15315").bind("SCActionDragDrop7796_droppedInsideTargetActions", function(event) {
	if (window.obj15315_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15315_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15315_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
obj15315_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15328: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15328");
	var winTarget = document.getElementById("obj15328");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15328").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15328_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15328_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15328_onTouchDown_activeActionGroupIndex != -1) return;
var obj15328_onTouchDown_runningActionsCount = 0;
var obj15328_onTouchDown_loopCount = 0;
obj15328_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15328: Event SCActionDragDrop9707_droppedOutsideTargetActions
 *
 */
$("#obj15328").bind("SCActionDragDrop9707_droppedOutsideTargetActions", function(event) {
	if (window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_loopCount = 0;
obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15328: Event SCActionDragDrop9707_droppedOutsideTargetActions
 *
 */
$("#obj15328").bind("SCActionDragDrop9707_droppedOutsideTargetActions", function(event) {
	if (window.obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_loopCount = 0;
obj15328_SCActionDragDrop9707_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15328: Event SCActionDragDrop7796_droppedInsideTargetActions
 *
 */
$("#obj15328").bind("SCActionDragDrop7796_droppedInsideTargetActions", function(event) {
	if (window.obj15328_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15328_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15328_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
obj15328_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15342: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15342");
	var winTarget = document.getElementById("obj15342");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15342").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15342_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15342_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15342_onTouchDown_activeActionGroupIndex != -1) return;
var obj15342_onTouchDown_runningActionsCount = 0;
var obj15342_onTouchDown_loopCount = 0;
obj15342_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15342: Event SCActionDragDrop9866_droppedOutsideTargetActions
 *
 */
$("#obj15342").bind("SCActionDragDrop9866_droppedOutsideTargetActions", function(event) {
	if (window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_loopCount = 0;
obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15342: Event SCActionDragDrop9866_droppedOutsideTargetActions
 *
 */
$("#obj15342").bind("SCActionDragDrop9866_droppedOutsideTargetActions", function(event) {
	if (window.obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_loopCount = 0;
obj15342_SCActionDragDrop9866_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15342: Event SCActionDragDrop7796_droppedInsideTargetActions
 *
 */
$("#obj15342").bind("SCActionDragDrop7796_droppedInsideTargetActions", function(event) {
	if (window.obj15342_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15342_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15342_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
obj15342_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15355: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15355");
	var winTarget = document.getElementById("obj15355");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15355").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15355_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15355_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15355_onTouchDown_activeActionGroupIndex != -1) return;
var obj15355_onTouchDown_runningActionsCount = 0;
var obj15355_onTouchDown_loopCount = 0;
obj15355_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15355: Event SCActionDragDrop9661_droppedOutsideTargetActions
 *
 */
$("#obj15355").bind("SCActionDragDrop9661_droppedOutsideTargetActions", function(event) {
	if (window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_loopCount = 0;
obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15355: Event SCActionDragDrop9661_droppedOutsideTargetActions
 *
 */
$("#obj15355").bind("SCActionDragDrop9661_droppedOutsideTargetActions", function(event) {
	if (window.obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_loopCount = 0;
obj15355_SCActionDragDrop9661_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15355: Event SCActionDragDrop7857_droppedInsideTargetActions_2
 *
 */
$("#obj15355").bind("SCActionDragDrop7857_droppedInsideTargetActions_2", function(event) {
	if (window.obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_loopCount = 0;
obj15355_SCActionDragDrop7857_droppedInsideTargetActions_2_actionGroup0();
});




/*
 *
 *   obj15368: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15368");
	var winTarget = document.getElementById("obj15368");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15368").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15368_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15368_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15368_onTouchDown_activeActionGroupIndex != -1) return;
var obj15368_onTouchDown_runningActionsCount = 0;
var obj15368_onTouchDown_loopCount = 0;
obj15368_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15368: Event SCActionDragDrop9652_droppedOutsideTargetActions
 *
 */
$("#obj15368").bind("SCActionDragDrop9652_droppedOutsideTargetActions", function(event) {
	if (window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_loopCount = 0;
obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15368: Event SCActionDragDrop9652_droppedOutsideTargetActions
 *
 */
$("#obj15368").bind("SCActionDragDrop9652_droppedOutsideTargetActions", function(event) {
	if (window.obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_loopCount = 0;
obj15368_SCActionDragDrop9652_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15368: Event SCActionDragDrop7796_droppedInsideTargetActions
 *
 */
$("#obj15368").bind("SCActionDragDrop7796_droppedInsideTargetActions", function(event) {
	if (window.obj15368_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15368_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15368_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
obj15368_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15381: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15381");
	var winTarget = document.getElementById("obj15381");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15381").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15381_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15381_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15381_onTouchDown_activeActionGroupIndex != -1) return;
var obj15381_onTouchDown_runningActionsCount = 0;
var obj15381_onTouchDown_loopCount = 0;
obj15381_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15381: Event SCActionDragDrop9915_droppedOutsideTargetActions
 *
 */
$("#obj15381").bind("SCActionDragDrop9915_droppedOutsideTargetActions", function(event) {
	if (window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_loopCount = 0;
obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15381: Event SCActionDragDrop9915_droppedOutsideTargetActions
 *
 */
$("#obj15381").bind("SCActionDragDrop9915_droppedOutsideTargetActions", function(event) {
	if (window.obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_loopCount = 0;
obj15381_SCActionDragDrop9915_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15381: Event SCActionDragDrop7796_droppedInsideTargetActions
 *
 */
$("#obj15381").bind("SCActionDragDrop7796_droppedInsideTargetActions", function(event) {
	if (window.obj15381_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15381_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15381_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
obj15381_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj15394: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj15394");
	var winTarget = document.getElementById("obj15394");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj15394").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj15394_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj15394_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj15394_onTouchDown_activeActionGroupIndex != -1) return;
var obj15394_onTouchDown_runningActionsCount = 0;
var obj15394_onTouchDown_loopCount = 0;
obj15394_onTouchDown_actionGroup0();
});


/*
 *
 *   obj15394: Event SCActionDragDrop9903_droppedOutsideTargetActions
 *
 */
$("#obj15394").bind("SCActionDragDrop9903_droppedOutsideTargetActions", function(event) {
	if (window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_loopCount = 0;
obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15394: Event SCActionDragDrop9903_droppedOutsideTargetActions
 *
 */
$("#obj15394").bind("SCActionDragDrop9903_droppedOutsideTargetActions", function(event) {
	if (window.obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_runningActionsCount = 0;
var obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_loopCount = 0;
obj15394_SCActionDragDrop9903_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj15394: Event SCActionDragDrop7796_droppedInsideTargetActions
 *
 */
$("#obj15394").bind("SCActionDragDrop7796_droppedInsideTargetActions", function(event) {
	if (window.obj15394_SCActionDragDrop7796_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj15394_SCActionDragDrop7796_droppedInsideTargetActions_runningActionsCount = 0;
var obj15394_SCActionDragDrop7796_droppedInsideTargetActions_loopCount = 0;
obj15394_SCActionDragDrop7796_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj15407: Event Show
 *
 */
 
$("#obj15407").bind('SCEventShow', function(event) {
	if (window.obj15407_onShow_activeActionGroupIndex != -1) return;
var obj15407_onShow_runningActionsCount = 0;
var obj15407_onShow_loopCount = 0;
obj15407_onShow_actionGroup0();
});







/*
 *
 *   obj15411: Event Show
 *
 */
 
$("#obj15411").bind('SCEventShow', function(event) {
	if (window.obj15411_onShow_activeActionGroupIndex != -1) return;
var obj15411_onShow_runningActionsCount = 0;
var obj15411_onShow_loopCount = 0;
obj15411_onShow_actionGroup0();
});







/*
 *
 *   obj15415: Event Show
 *
 */
 
$("#obj15415").bind('SCEventShow', function(event) {
	if (window.obj15415_onShow_activeActionGroupIndex != -1) return;
var obj15415_onShow_runningActionsCount = 0;
var obj15415_onShow_loopCount = 0;
obj15415_onShow_actionGroup0();
});







/*
 *
 *   obj15419: Event Show
 *
 */
 
$("#obj15419").bind('SCEventShow', function(event) {
	if (window.obj15419_onShow_activeActionGroupIndex != -1) return;
var obj15419_onShow_runningActionsCount = 0;
var obj15419_onShow_loopCount = 0;
obj15419_onShow_actionGroup0();
});






























/*
 *
 *   obj15431: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj15431").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15431_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj15431_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15431_SCEventCounterReachedTargetValue_loopCount = 0;
obj15431_SCEventCounterReachedTargetValue_actionGroup0();
});







/*
 *
 *   obj15434: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj15434").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15434_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj15434_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15434_SCEventCounterReachedTargetValue_loopCount = 0;
obj15434_SCEventCounterReachedTargetValue_actionGroup0();
});







/*
 *
 *   obj15454: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj15454").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15454_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj15454_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15454_SCEventCounterReachedTargetValue_loopCount = 0;
obj15454_SCEventCounterReachedTargetValue_actionGroup0();
});







/*
 *
 *   obj15474: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj15474").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15474_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj15474_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15474_SCEventCounterReachedTargetValue_loopCount = 0;
obj15474_SCEventCounterReachedTargetValue_actionGroup0();
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
	
$("#obj15263").trigger('SCEventShow');
$("#obj15265").trigger('SCEventShow');
$("#obj15267").trigger('SCEventShow');
$("#obj15277").trigger('SCEventShow');
$("#obj15286").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});