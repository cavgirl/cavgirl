pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 14519;
pubcoder.page.title = "64";
pubcoder.page.number = 64;
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
var obj14528_onLoad_activeActionGroupIndex = -1;
var obj14528_onLoad_runningActionsCount = 0;
var obj14528_onLoad_loopCount = 0;
var obj14532_onTap_activeActionGroupIndex = -1;
var obj14532_onTap_runningActionsCount = 0;
var obj14532_onTap_loopCount = 0;
var obj14543_onShow_activeActionGroupIndex = -1;
var obj14543_onShow_runningActionsCount = 0;
var obj14543_onShow_loopCount = 0;
var obj14559_onTap_activeActionGroupIndex = -1;
var obj14559_onTap_runningActionsCount = 0;
var obj14559_onTap_loopCount = 0;
var obj14562_onTap_activeActionGroupIndex = -1;
var obj14562_onTap_runningActionsCount = 0;
var obj14562_onTap_loopCount = 0;
var obj14565_onTap_activeActionGroupIndex = -1;
var obj14565_onTap_runningActionsCount = 0;
var obj14565_onTap_loopCount = 0;
var obj14568_onTap_activeActionGroupIndex = -1;
var obj14568_onTap_runningActionsCount = 0;
var obj14568_onTap_loopCount = 0;
var obj14571_onTap_activeActionGroupIndex = -1;
var obj14571_onTap_runningActionsCount = 0;
var obj14571_onTap_loopCount = 0;
var obj14574_onTap_activeActionGroupIndex = -1;
var obj14574_onTap_runningActionsCount = 0;
var obj14574_onTap_loopCount = 0;
var obj14577_onTap_activeActionGroupIndex = -1;
var obj14577_onTap_runningActionsCount = 0;
var obj14577_onTap_loopCount = 0;
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
 
var obj14528_counterValue = 0;
var obj14528_counterTargetValue = 7;
var obj14528_counterCanExceedTargetValue = false;
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
		
obj14528_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14528_onLoad_activeActionGroupIndex = -1;
		$("#obj14528").trigger("obj14528_onLoad_ended");
		
		return;
	}
	window.obj14528_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj14543 
show_14531();
function show_14531() {
	window.obj14528_onLoad_runningActionsCount = obj14528_onLoad_runningActionsCount + 1;
	$("#obj14543").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14528_onLoad_runningActionsCount = window.obj14528_onLoad_runningActionsCount - 1;
if (window.obj14528_onLoad_runningActionsCount == 0) {
	obj14528_onLoad_actionGroup1();
}
				$("#obj14543").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj14528_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14528_onLoad_activeActionGroupIndex = -1;
		$("#obj14528").trigger("obj14528_onLoad_ended");
		
		return;
	}
	window.obj14528_onLoad_activeActionGroupIndex = 1;
	





















};
obj14532_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14532_onTap_activeActionGroupIndex = -1;
		$("#obj14532").trigger("obj14532_onTap_ended");
		
		return;
	}
	window.obj14532_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page65
goToPage_14583();
function goToPage_14583() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../65/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(65))},200);
	}
}





















};
obj14532_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14532_onTap_activeActionGroupIndex = -1;
		$("#obj14532").trigger("obj14532_onTap_ended");
		
		return;
	}
	window.obj14532_onTap_activeActionGroupIndex = 1;
	





















};
obj14543_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14543_onShow_activeActionGroupIndex = -1;
		$("#obj14543").trigger("obj14543_onShow_ended");
		
		return;
	}
	window.obj14543_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj14532 
show_14546();
function show_14546() {
	window.obj14543_onShow_runningActionsCount = obj14543_onShow_runningActionsCount + 1;
	$("#obj14532").fadeIn(500, function() {
			setTimeout(function() {
				window.obj14543_onShow_runningActionsCount = window.obj14543_onShow_runningActionsCount - 1;
if (window.obj14543_onShow_runningActionsCount == 0) {
	obj14543_onShow_actionGroup1();
}
				$("#obj14532").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj14543_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14543_onShow_activeActionGroupIndex = -1;
		$("#obj14543").trigger("obj14543_onShow_ended");
		
		return;
	}
	window.obj14543_onShow_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj14543 
rotate_14547();
function rotate_14547() {
	window.obj14543_onShow_runningActionsCount = obj14543_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj14543";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj14543';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '7.048245';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_14547_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_14547_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_14547_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_14547_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_14547_completed() {
	setTimeout(function() {
		window.obj14543_onShow_runningActionsCount = window.obj14543_onShow_runningActionsCount - 1;
if (window.obj14543_onShow_runningActionsCount == 0) {
	obj14543_onShow_actionGroup2();
}
	}, 1);
}














};
obj14543_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14543_onShow_activeActionGroupIndex = -1;
		$("#obj14543").trigger("obj14543_onShow_ended");
		
		return;
	}
	window.obj14543_onShow_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj14543 
rotate_14548();
function rotate_14548() {
	window.obj14543_onShow_runningActionsCount = obj14543_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj14543";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj14543';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-8.970629';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_14548_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_14548_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_14548_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_14548_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_14548_completed() {
	setTimeout(function() {
		window.obj14543_onShow_runningActionsCount = window.obj14543_onShow_runningActionsCount - 1;
if (window.obj14543_onShow_runningActionsCount == 0) {
	obj14543_onShow_actionGroup3();
}
	}, 1);
}














};
obj14543_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14543_onShow_activeActionGroupIndex = -1;
		$("#obj14543").trigger("obj14543_onShow_ended");
		
		return;
	}
	window.obj14543_onShow_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj14543 
rotate_14549();
function rotate_14549() {
	window.obj14543_onShow_runningActionsCount = obj14543_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj14543";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj14543';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-0.1925747';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_14549_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_14549_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_14549_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_14549_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_14549_completed() {
	setTimeout(function() {
		window.obj14543_onShow_runningActionsCount = window.obj14543_onShow_runningActionsCount - 1;
if (window.obj14543_onShow_runningActionsCount == 0) {
	obj14543_onShow_actionGroup4();
}
	}, 1);
}














};
obj14543_onShow_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14543_onShow_activeActionGroupIndex = -1;
		$("#obj14543").trigger("obj14543_onShow_ended");
		
		return;
	}
	window.obj14543_onShow_activeActionGroupIndex = 4;
	








//	action: loop
loop_obj14543_onShow();
function loop_obj14543_onShow() {
	var loopCount = 1;
	window.obj14543_onShow_loopCount = window.obj14543_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj14543_onShow_loopCount > loopCount) {
		window.obj14543_onShow_loopCount = 0
		obj14543_onShow_actionGroup5();
	} else {
		obj14543_onShow_actionGroup0();
	}
}













};
obj14543_onShow_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14543_onShow_activeActionGroupIndex = -1;
		$("#obj14543").trigger("obj14543_onShow_ended");
		
		return;
	}
	window.obj14543_onShow_activeActionGroupIndex = 5;
	





















};
obj14559_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14559_onTap_activeActionGroupIndex = -1;
		$("#obj14559").trigger("obj14559_onTap_ended");
		
		return;
	}
	window.obj14559_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page10
goToPage_14561();
function goToPage_14561() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../10/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(10))},200);
	}
}





















};
obj14559_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14559_onTap_activeActionGroupIndex = -1;
		$("#obj14559").trigger("obj14559_onTap_ended");
		
		return;
	}
	window.obj14559_onTap_activeActionGroupIndex = 1;
	





















};
obj14562_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14562_onTap_activeActionGroupIndex = -1;
		$("#obj14562").trigger("obj14562_onTap_ended");
		
		return;
	}
	window.obj14562_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page19
goToPage_14564();
function goToPage_14564() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../19/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(19))},200);
	}
}





















};
obj14562_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14562_onTap_activeActionGroupIndex = -1;
		$("#obj14562").trigger("obj14562_onTap_ended");
		
		return;
	}
	window.obj14562_onTap_activeActionGroupIndex = 1;
	





















};
obj14565_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14565_onTap_activeActionGroupIndex = -1;
		$("#obj14565").trigger("obj14565_onTap_ended");
		
		return;
	}
	window.obj14565_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page26
goToPage_14567();
function goToPage_14567() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../26/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(26))},200);
	}
}





















};
obj14565_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14565_onTap_activeActionGroupIndex = -1;
		$("#obj14565").trigger("obj14565_onTap_ended");
		
		return;
	}
	window.obj14565_onTap_activeActionGroupIndex = 1;
	





















};
obj14568_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14568_onTap_activeActionGroupIndex = -1;
		$("#obj14568").trigger("obj14568_onTap_ended");
		
		return;
	}
	window.obj14568_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page35
goToPage_14570();
function goToPage_14570() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../35/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(35))},200);
	}
}





















};
obj14568_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14568_onTap_activeActionGroupIndex = -1;
		$("#obj14568").trigger("obj14568_onTap_ended");
		
		return;
	}
	window.obj14568_onTap_activeActionGroupIndex = 1;
	





















};
obj14571_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14571_onTap_activeActionGroupIndex = -1;
		$("#obj14571").trigger("obj14571_onTap_ended");
		
		return;
	}
	window.obj14571_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page42
goToPage_14573();
function goToPage_14573() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../42/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(42))},200);
	}
}





















};
obj14571_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14571_onTap_activeActionGroupIndex = -1;
		$("#obj14571").trigger("obj14571_onTap_ended");
		
		return;
	}
	window.obj14571_onTap_activeActionGroupIndex = 1;
	





















};
obj14574_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14574_onTap_activeActionGroupIndex = -1;
		$("#obj14574").trigger("obj14574_onTap_ended");
		
		return;
	}
	window.obj14574_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page54
goToPage_14576();
function goToPage_14576() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../54/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(54))},200);
	}
}





















};
obj14574_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14574_onTap_activeActionGroupIndex = -1;
		$("#obj14574").trigger("obj14574_onTap_ended");
		
		return;
	}
	window.obj14574_onTap_activeActionGroupIndex = 1;
	





















};
obj14577_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14577_onTap_activeActionGroupIndex = -1;
		$("#obj14577").trigger("obj14577_onTap_ended");
		
		return;
	}
	window.obj14577_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page61
goToPage_14579();
function goToPage_14579() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../61/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(61))},200);
	}
}





















};
obj14577_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14577_onTap_activeActionGroupIndex = -1;
		$("#obj14577").trigger("obj14577_onTap_ended");
		
		return;
	}
	window.obj14577_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj14528: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj14528_onLoad_activeActionGroupIndex != -1) return;
var obj14528_onLoad_runningActionsCount = 0;
var obj14528_onLoad_loopCount = 0;
obj14528_onLoad_actionGroup0();
});





/*
 *
 *   obj14532: Event Touch Down
 *
 */
 
$("#obj14532").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14532_onTap_activeActionGroupIndex != -1) return;
var obj14532_onTap_runningActionsCount = 0;
var obj14532_onTap_loopCount = 0;
obj14532_onTap_actionGroup0();
});








/*
 *
 *   obj14543: Event Show
 *
 */
 
$("#obj14543").bind('SCEventShow', function(event) {
	if (window.obj14543_onShow_activeActionGroupIndex != -1) return;
var obj14543_onShow_runningActionsCount = 0;
var obj14543_onShow_loopCount = 0;
obj14543_onShow_actionGroup0();
});





/*
 *
 *   obj14559: Event Touch Down
 *
 */
 
$("#obj14559").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14559_onTap_activeActionGroupIndex != -1) return;
var obj14559_onTap_runningActionsCount = 0;
var obj14559_onTap_loopCount = 0;
obj14559_onTap_actionGroup0();
});







/*
 *
 *   obj14562: Event Touch Down
 *
 */
 
$("#obj14562").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14562_onTap_activeActionGroupIndex != -1) return;
var obj14562_onTap_runningActionsCount = 0;
var obj14562_onTap_loopCount = 0;
obj14562_onTap_actionGroup0();
});







/*
 *
 *   obj14565: Event Touch Down
 *
 */
 
$("#obj14565").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14565_onTap_activeActionGroupIndex != -1) return;
var obj14565_onTap_runningActionsCount = 0;
var obj14565_onTap_loopCount = 0;
obj14565_onTap_actionGroup0();
});







/*
 *
 *   obj14568: Event Touch Down
 *
 */
 
$("#obj14568").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14568_onTap_activeActionGroupIndex != -1) return;
var obj14568_onTap_runningActionsCount = 0;
var obj14568_onTap_loopCount = 0;
obj14568_onTap_actionGroup0();
});







/*
 *
 *   obj14571: Event Touch Down
 *
 */
 
$("#obj14571").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14571_onTap_activeActionGroupIndex != -1) return;
var obj14571_onTap_runningActionsCount = 0;
var obj14571_onTap_loopCount = 0;
obj14571_onTap_actionGroup0();
});







/*
 *
 *   obj14574: Event Touch Down
 *
 */
 
$("#obj14574").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14574_onTap_activeActionGroupIndex != -1) return;
var obj14574_onTap_runningActionsCount = 0;
var obj14574_onTap_loopCount = 0;
obj14574_onTap_actionGroup0();
});







/*
 *
 *   obj14577: Event Touch Down
 *
 */
 
$("#obj14577").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14577_onTap_activeActionGroupIndex != -1) return;
var obj14577_onTap_runningActionsCount = 0;
var obj14577_onTap_loopCount = 0;
obj14577_onTap_actionGroup0();
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
	
$("#obj14523").trigger('SCEventShow');
$("#obj14525").trigger('SCEventShow');
$("#obj14532").trigger('SCEventShow');
$("#obj14559").trigger('SCEventShow');
$("#obj14562").trigger('SCEventShow');
$("#obj14565").trigger('SCEventShow');
$("#obj14568").trigger('SCEventShow');
$("#obj14571").trigger('SCEventShow');
$("#obj14574").trigger('SCEventShow');
$("#obj14577").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});