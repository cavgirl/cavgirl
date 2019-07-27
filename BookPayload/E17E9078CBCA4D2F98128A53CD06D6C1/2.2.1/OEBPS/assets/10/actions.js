pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 13373;
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
var obj13381_onTap_activeActionGroupIndex = -1;
var obj13381_onTap_runningActionsCount = 0;
var obj13381_onTap_loopCount = 0;
var obj13389_onTap_activeActionGroupIndex = -1;
var obj13389_onTap_runningActionsCount = 0;
var obj13389_onTap_loopCount = 0;
var obj15958_onTap_activeActionGroupIndex = -1;
var obj15958_onTap_runningActionsCount = 0;
var obj15958_onTap_loopCount = 0;
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
		
obj13381_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13381_onTap_activeActionGroupIndex = -1;
		$("#obj13381").trigger("obj13381_onTap_ended");
		
		return;
	}
	window.obj13381_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj13381 
move_13384();
function move_13384() {
	window.obj13381_onTap_runningActionsCount = obj13381_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj13381");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 335;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj13381_onTap_runningActionsCount = window.obj13381_onTap_runningActionsCount - 1;
if (window.obj13381_onTap_runningActionsCount == 0) {
	obj13381_onTap_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj13381 
scale_13385();
function scale_13385() {
	window.obj13381_onTap_runningActionsCount = obj13381_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj13381";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj13381';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '4';
	var scaleYValue = '4';
	var effectDuration = '0';
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
		scale_13385_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_13385_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_13385_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_13385_completed() {
	setTimeout(function() {
		window.obj13381_onTap_runningActionsCount = window.obj13381_onTap_runningActionsCount - 1;
if (window.obj13381_onTap_runningActionsCount == 0) {
	obj13381_onTap_actionGroup1();
}
	}, 1);
}






//	action: Run JavaScript
runjs_13383();
function runjs_13383() {
	window.obj13381_onTap_runningActionsCount = obj13381_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj13381"));
	setTimeout(function() {
		window.obj13381_onTap_runningActionsCount = window.obj13381_onTap_runningActionsCount - 1;
if (window.obj13381_onTap_runningActionsCount == 0) {
	obj13381_onTap_actionGroup1();
}
	}, 1);
}






};
obj13381_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13381_onTap_activeActionGroupIndex = -1;
		$("#obj13381").trigger("obj13381_onTap_ended");
		
		return;
	}
	window.obj13381_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_13386();
function wait_13386() {
	window.obj13381_onTap_runningActionsCount = obj13381_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj13381_onTap_runningActionsCount = window.obj13381_onTap_runningActionsCount - 1;
if (window.obj13381_onTap_runningActionsCount == 0) {
	obj13381_onTap_actionGroup2();
}
	}, 3000);
}












};
obj13381_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13381_onTap_activeActionGroupIndex = -1;
		$("#obj13381").trigger("obj13381_onTap_ended");
		
		return;
	}
	window.obj13381_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj13381 
move_13387();
function move_13387() {
	window.obj13381_onTap_runningActionsCount = obj13381_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj13381");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 244;
	var moveY = 127;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj13381_onTap_runningActionsCount = window.obj13381_onTap_runningActionsCount - 1;
if (window.obj13381_onTap_runningActionsCount == 0) {
	obj13381_onTap_actionGroup3();
}
		}, 1);
	});
}







//	action: scale
//	target: obj13381 
scale_13388();
function scale_13388() {
	window.obj13381_onTap_runningActionsCount = obj13381_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj13381";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj13381';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_13388_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_13388_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_13388_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_13388_completed() {
	setTimeout(function() {
		window.obj13381_onTap_runningActionsCount = window.obj13381_onTap_runningActionsCount - 1;
if (window.obj13381_onTap_runningActionsCount == 0) {
	obj13381_onTap_actionGroup3();
}
	}, 1);
}












};
obj13381_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13381_onTap_activeActionGroupIndex = -1;
		$("#obj13381").trigger("obj13381_onTap_ended");
		
		return;
	}
	window.obj13381_onTap_activeActionGroupIndex = 3;
	





















};
obj13389_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13389_onTap_activeActionGroupIndex = -1;
		$("#obj13389").trigger("obj13389_onTap_ended");
		
		return;
	}
	window.obj13389_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj13389 
move_13392();
function move_13392() {
	window.obj13389_onTap_runningActionsCount = obj13389_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj13389");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 563;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj13389_onTap_runningActionsCount = window.obj13389_onTap_runningActionsCount - 1;
if (window.obj13389_onTap_runningActionsCount == 0) {
	obj13389_onTap_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj13389 
scale_13393();
function scale_13393() {
	window.obj13389_onTap_runningActionsCount = obj13389_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj13389";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj13389';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '4';
	var scaleYValue = '4';
	var effectDuration = '0';
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
		scale_13393_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_13393_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_13393_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_13393_completed() {
	setTimeout(function() {
		window.obj13389_onTap_runningActionsCount = window.obj13389_onTap_runningActionsCount - 1;
if (window.obj13389_onTap_runningActionsCount == 0) {
	obj13389_onTap_actionGroup1();
}
	}, 1);
}






//	action: Run JavaScript
runjs_13391();
function runjs_13391() {
	window.obj13389_onTap_runningActionsCount = obj13389_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj13389"));
	setTimeout(function() {
		window.obj13389_onTap_runningActionsCount = window.obj13389_onTap_runningActionsCount - 1;
if (window.obj13389_onTap_runningActionsCount == 0) {
	obj13389_onTap_actionGroup1();
}
	}, 1);
}






};
obj13389_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13389_onTap_activeActionGroupIndex = -1;
		$("#obj13389").trigger("obj13389_onTap_ended");
		
		return;
	}
	window.obj13389_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_13394();
function wait_13394() {
	window.obj13389_onTap_runningActionsCount = obj13389_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj13389_onTap_runningActionsCount = window.obj13389_onTap_runningActionsCount - 1;
if (window.obj13389_onTap_runningActionsCount == 0) {
	obj13389_onTap_actionGroup2();
}
	}, 3000);
}












};
obj13389_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13389_onTap_activeActionGroupIndex = -1;
		$("#obj13389").trigger("obj13389_onTap_ended");
		
		return;
	}
	window.obj13389_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj13389 
move_13395();
function move_13395() {
	window.obj13389_onTap_runningActionsCount = obj13389_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj13389");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 446;
	var moveY = 124;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj13389_onTap_runningActionsCount = window.obj13389_onTap_runningActionsCount - 1;
if (window.obj13389_onTap_runningActionsCount == 0) {
	obj13389_onTap_actionGroup3();
}
		}, 1);
	});
}







//	action: scale
//	target: obj13389 
scale_13396();
function scale_13396() {
	window.obj13389_onTap_runningActionsCount = obj13389_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj13389";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj13389';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_13396_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_13396_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_13396_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_13396_completed() {
	setTimeout(function() {
		window.obj13389_onTap_runningActionsCount = window.obj13389_onTap_runningActionsCount - 1;
if (window.obj13389_onTap_runningActionsCount == 0) {
	obj13389_onTap_actionGroup3();
}
	}, 1);
}












};
obj13389_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13389_onTap_activeActionGroupIndex = -1;
		$("#obj13389").trigger("obj13389_onTap_ended");
		
		return;
	}
	window.obj13389_onTap_activeActionGroupIndex = 3;
	





















};
obj15958_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15958_onTap_activeActionGroupIndex = -1;
		$("#obj15958").trigger("obj15958_onTap_ended");
		
		return;
	}
	window.obj15958_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page64
goToPage_15960();
function goToPage_15960() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../64/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(64))},200);
	}
}





















};
obj15958_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15958_onTap_activeActionGroupIndex = -1;
		$("#obj15958").trigger("obj15958_onTap_ended");
		
		return;
	}
	window.obj15958_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj13381: Event Touch Down
 *
 */
 
$("#obj13381").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13381_onTap_activeActionGroupIndex != -1) return;
var obj13381_onTap_runningActionsCount = 0;
var obj13381_onTap_loopCount = 0;
obj13381_onTap_actionGroup0();
});







/*
 *
 *   obj13389: Event Touch Down
 *
 */
 
$("#obj13389").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13389_onTap_activeActionGroupIndex != -1) return;
var obj13389_onTap_runningActionsCount = 0;
var obj13389_onTap_loopCount = 0;
obj13389_onTap_actionGroup0();
});







/*
 *
 *   obj15958: Event Touch Down
 *
 */
 
$("#obj15958").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15958_onTap_activeActionGroupIndex != -1) return;
var obj15958_onTap_runningActionsCount = 0;
var obj15958_onTap_loopCount = 0;
obj15958_onTap_actionGroup0();
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
	
$("#obj13374").trigger('SCEventShow');
$("#obj13377").trigger('SCEventShow');
$("#obj13379").trigger('SCEventShow');
$("#obj13381").trigger('SCEventShow');
$("#obj13389").trigger('SCEventShow');
$("#obj15958").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});