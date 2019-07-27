pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 15667;
pubcoder.page.title = "60";
pubcoder.page.number = 60;
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
var obj15714_onShow_activeActionGroupIndex = -1;
var obj15714_onShow_runningActionsCount = 0;
var obj15714_onShow_loopCount = 0;
var obj15736_onShow_activeActionGroupIndex = -1;
var obj15736_onShow_runningActionsCount = 0;
var obj15736_onShow_loopCount = 0;
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
		
obj15714_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj15714 
move_15717();
function move_15717() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;

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
	var targetObject = $("#obj15714");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=8";
	var moveY = "+=-121";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup1();
}
		}, 1);
	});
}



















};
obj15714_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj15714 
rotate_15718();
function rotate_15718() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj15714";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15714';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15718_completed(); }
	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15718_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15718_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15718_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15718_completed() {
	setTimeout(function() {
		window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup2();
}
	}, 1);
}


//	action: scale
//	target: obj15714 
scale_15719();
function scale_15719() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj15714";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15714';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '2';
	var scaleYValue = '2';
	var effectDuration = '0.3';
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
		scale_15719_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15719_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15719_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_15719_completed() {
	setTimeout(function() {
		window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup2();
}
	}, 1);
}












};
obj15714_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj15714 
rotate_15721();
function rotate_15721() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj15714";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15714';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '29.66315';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_15721_completed(); }
	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_15721_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15721_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_15721_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_15721_completed() {
	setTimeout(function() {
		window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup3();
}
	}, 1);
}








//	action: Run JavaScript
runjs_15720();
function runjs_15720() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj15714"));
	setTimeout(function() {
		window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup3();
}
	}, 1);
}






};
obj15714_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj15736 
show_15722();
function show_15722() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	$("#obj15736").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup4();
}
				$("#obj15736").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15714_onShow_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 4;
	









//	action: scale
//	target: obj15714 
scale_15723();
function scale_15723() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj15714";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15714';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.5';
	var scaleYValue = '1.5';
	var effectDuration = '0.3';
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
		scale_15723_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15723_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15723_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_15723_completed() {
	setTimeout(function() {
		window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup5();
}
	}, 1);
}












};
obj15714_onShow_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 5;
	









//	action: scale
//	target: obj15714 
scale_15724();
function scale_15724() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj15714";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15714';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '2';
	var scaleYValue = '2';
	var effectDuration = '0.3';
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
		scale_15724_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15724_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15724_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_15724_completed() {
	setTimeout(function() {
		window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup6();
}
	}, 1);
}












};
obj15714_onShow_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 6;
	









//	action: scale
//	target: obj15714 
scale_15725();
function scale_15725() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj15714";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15714';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.5';
	var scaleYValue = '1.5';
	var effectDuration = '0.3';
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
		scale_15725_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15725_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15725_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_15725_completed() {
	setTimeout(function() {
		window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup7();
}
	}, 1);
}












};
obj15714_onShow_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 7;
	









//	action: scale
//	target: obj15714 
scale_15726();
function scale_15726() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj15714";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj15714';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '2';
	var scaleYValue = '2';
	var effectDuration = '0.3';
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
		scale_15726_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15726_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_15726_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_15726_completed() {
	setTimeout(function() {
		window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup8();
}
	}, 1);
}












};
obj15714_onShow_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 8;
	

//	action: hide
//	target: obj15714 
hide_15727();
function hide_15727() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	$("#obj15714").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup9();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15747 
hide_15728();
function hide_15728() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	$("#obj15747").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup9();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15736 
hide_15729();
function hide_15729() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	$("#obj15736").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup9();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15732 
hide_15730();
function hide_15730() {
	window.obj15714_onShow_runningActionsCount = obj15714_onShow_runningActionsCount + 1;
	$("#obj15732").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15714_onShow_runningActionsCount = window.obj15714_onShow_runningActionsCount - 1;
if (window.obj15714_onShow_runningActionsCount == 0) {
	obj15714_onShow_actionGroup9();
}
			}, 1);
		}
	);
}




















};
obj15714_onShow_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 9;
	
//	action: goToPage
//	target: page61
goToPage_15787();
function goToPage_15787() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../61/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(61))},200);
	}
}





















};
obj15714_onShow_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15714_onShow_activeActionGroupIndex = -1;
		$("#obj15714").trigger("obj15714_onShow_ended");
		
		return;
	}
	window.obj15714_onShow_activeActionGroupIndex = 10;
	





















};
obj15736_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15736_onShow_activeActionGroupIndex = -1;
		$("#obj15736").trigger("obj15736_onShow_ended");
		
		return;
	}
	window.obj15736_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15747 
show_15743();
function show_15743() {
	window.obj15736_onShow_runningActionsCount = obj15736_onShow_runningActionsCount + 1;
	$("#obj15747").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15736_onShow_runningActionsCount = window.obj15736_onShow_runningActionsCount - 1;
if (window.obj15736_onShow_runningActionsCount == 0) {
	obj15736_onShow_actionGroup1();
}
				$("#obj15747").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15736_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15736_onShow_activeActionGroupIndex = -1;
		$("#obj15736").trigger("obj15736_onShow_ended");
		
		return;
	}
	window.obj15736_onShow_activeActionGroupIndex = 1;
	





















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
 *   obj15714: Event Show
 *
 */
 
$("#obj15714").bind('SCEventShow', function(event) {
	if (window.obj15714_onShow_activeActionGroupIndex != -1) return;
var obj15714_onShow_runningActionsCount = 0;
var obj15714_onShow_loopCount = 0;
obj15714_onShow_actionGroup0();
});














/*
 *
 *   obj15736: Event Show
 *
 */
 
$("#obj15736").bind('SCEventShow', function(event) {
	if (window.obj15736_onShow_activeActionGroupIndex != -1) return;
var obj15736_onShow_runningActionsCount = 0;
var obj15736_onShow_loopCount = 0;
obj15736_onShow_actionGroup0();
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
	
$("#obj15712").trigger('SCEventShow');
$("#obj15714").trigger('SCEventShow');
$("#obj15732").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});