pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 5281;
pubcoder.page.title = "49";
pubcoder.page.number = 49;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj5288_animation_count = 0;
var obj5292_animation_count = 0;
var obj5300_animation_count = 0;
var obj5324_animation_count = 0;
var obj5316_animation_count = 0;
var obj5312_animation_count = 0;
var obj5332_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj5288_onTap_activeActionGroupIndex = -1;
var obj5288_onTap_runningActionsCount = 0;
var obj5288_onTap_loopCount = 0;
var obj5292_onTap_activeActionGroupIndex = -1;
var obj5292_onTap_runningActionsCount = 0;
var obj5292_onTap_loopCount = 0;
var obj5292_onTouchDown_activeActionGroupIndex = -1;
var obj5292_onTouchDown_runningActionsCount = 0;
var obj5292_onTouchDown_loopCount = 0;
var obj5300_onTap_activeActionGroupIndex = -1;
var obj5300_onTap_runningActionsCount = 0;
var obj5300_onTap_loopCount = 0;
var obj5300_onTouchDown_activeActionGroupIndex = -1;
var obj5300_onTouchDown_runningActionsCount = 0;
var obj5300_onTouchDown_loopCount = 0;
var obj5324_onTap_activeActionGroupIndex = -1;
var obj5324_onTap_runningActionsCount = 0;
var obj5324_onTap_loopCount = 0;
var obj5324_onTouchDown_activeActionGroupIndex = -1;
var obj5324_onTouchDown_runningActionsCount = 0;
var obj5324_onTouchDown_loopCount = 0;
var obj5316_onTap_activeActionGroupIndex = -1;
var obj5316_onTap_runningActionsCount = 0;
var obj5316_onTap_loopCount = 0;
var obj5316_onTouchDown_activeActionGroupIndex = -1;
var obj5316_onTouchDown_runningActionsCount = 0;
var obj5316_onTouchDown_loopCount = 0;
var obj5312_onTap_activeActionGroupIndex = -1;
var obj5312_onTap_runningActionsCount = 0;
var obj5312_onTap_loopCount = 0;
var obj5332_onTap_activeActionGroupIndex = -1;
var obj5332_onTap_runningActionsCount = 0;
var obj5332_onTap_loopCount = 0;
var obj5332_onTouchDown_activeActionGroupIndex = -1;
var obj5332_onTouchDown_runningActionsCount = 0;
var obj5332_onTouchDown_loopCount = 0;
var obj5394_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5394_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5394_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5610_onLoad_activeActionGroupIndex = -1;
var obj5610_onLoad_runningActionsCount = 0;
var obj5610_onLoad_loopCount = 0;
var obj5605_onShow_activeActionGroupIndex = -1;
var obj5605_onShow_runningActionsCount = 0;
var obj5605_onShow_loopCount = 0;
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
 
var obj5394_counterValue = 0;
var obj5394_counterTargetValue = 2;
var obj5394_counterCanExceedTargetValue = false;
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
	
initAnimation_5288();
function initAnimation_5288()
{
        var targetObjectId = "#obj5288";
        var widthSCAnimationObject = 254;
        var heightSCAnimationObject = 446;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5288 = $("#")[0];
        window.hasAudioTrack_obj5288 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5288_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5288 = $(targetObjectId).spritespin("api");
}
initAnimation_5292();
function initAnimation_5292()
{
        var targetObjectId = "#obj5292";
        var widthSCAnimationObject = 238;
        var heightSCAnimationObject = 344;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5292 = $("#")[0];
        window.hasAudioTrack_obj5292 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5292_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5292 = $(targetObjectId).spritespin("api");
}
initAnimation_5300();
function initAnimation_5300()
{
        var targetObjectId = "#obj5300";
        var widthSCAnimationObject = 249;
        var heightSCAnimationObject = 262;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5300 = $("#")[0];
        window.hasAudioTrack_obj5300 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5300_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5300 = $(targetObjectId).spritespin("api");
}
initAnimation_5324();
function initAnimation_5324()
{
        var targetObjectId = "#obj5324";
        var widthSCAnimationObject = 418;
        var heightSCAnimationObject = 261;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5324 = $("#")[0];
        window.hasAudioTrack_obj5324 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5324_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5324 = $(targetObjectId).spritespin("api");
}
initAnimation_5316();
function initAnimation_5316()
{
        var targetObjectId = "#obj5316";
        var widthSCAnimationObject = 383;
        var heightSCAnimationObject = 358;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5316 = $("#")[0];
        window.hasAudioTrack_obj5316 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5316_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5316 = $(targetObjectId).spritespin("api");
}
initAnimation_5312();
function initAnimation_5312()
{
        var targetObjectId = "#obj5312";
        var widthSCAnimationObject = 363;
        var heightSCAnimationObject = 485;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5312 = $("#")[0];
        window.hasAudioTrack_obj5312 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5312_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5312 = $(targetObjectId).spritespin("api");
}
initAnimation_5332();
function initAnimation_5332()
{
        var targetObjectId = "#obj5332";
        var widthSCAnimationObject = 252;
        var heightSCAnimationObject = 309;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5332 = $("#")[0];
        window.hasAudioTrack_obj5332 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5332_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5332 = $(targetObjectId).spritespin("api");
}

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
		
obj5288_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5288_onTap_activeActionGroupIndex = -1;
		$("#obj5288").trigger("obj5288_onTap_ended");
		
		return;
	}
	window.obj5288_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5288 
playAnimation_5397();
function playAnimation_5397() {
	var targetObjectId = "#obj5288";
	var targetObject = $(targetObjectId)[0];
	window.obj5288_onTap_runningActionsCount = obj5288_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5288_onTap_runningActionsCount = window.obj5288_onTap_runningActionsCount - 1;
if (window.obj5288_onTap_runningActionsCount == 0) {
	obj5288_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5288 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5288;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5288.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5288").one("obj5288_animation_ended",function(event) {
		    window.obj5288_onTap_runningActionsCount = window.obj5288_onTap_runningActionsCount - 1;
if (window.obj5288_onTap_runningActionsCount == 0) {
	obj5288_onTap_actionGroup1();
}
		});
	}
 }












//	action: Run JavaScript
runjs_5396();
function runjs_5396() {
	window.obj5288_onTap_runningActionsCount = obj5288_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5288"));
	setTimeout(function() {
		window.obj5288_onTap_runningActionsCount = window.obj5288_onTap_runningActionsCount - 1;
if (window.obj5288_onTap_runningActionsCount == 0) {
	obj5288_onTap_actionGroup1();
}
	}, 1);
}






};
obj5288_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5288_onTap_activeActionGroupIndex = -1;
		$("#obj5288").trigger("obj5288_onTap_ended");
		
		return;
	}
	window.obj5288_onTap_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj5394 
incrementCounter_5398();
function incrementCounter_5398() {
	window.obj5288_onTap_runningActionsCount = obj5288_onTap_runningActionsCount + 1;

	var oldValue = obj5394_counterValue;
	obj5394_counterValue = obj5394_counterValue + 1;
	if (! obj5394_counterCanExceedTargetValue && obj5394_counterValue > obj5394_counterTargetValue) {
		obj5394_counterValue = obj5394_counterTargetValue;
	}
	if (oldValue != obj5394_counterValue) {
		$("#obj5394").trigger('SCEventCounterValueChange');
		$("#obj5394").trigger('SCEventCounterIncrease');
		if (obj5394_counterValue == obj5394_counterTargetValue)
			$("#obj5394").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5288_onTap_runningActionsCount = window.obj5288_onTap_runningActionsCount - 1;
if (window.obj5288_onTap_runningActionsCount == 0) {
	obj5288_onTap_actionGroup2();
} }, 1);
}





};
obj5288_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5288_onTap_activeActionGroupIndex = -1;
		$("#obj5288").trigger("obj5288_onTap_ended");
		
		return;
	}
	window.obj5288_onTap_activeActionGroupIndex = 2;
	





















};
obj5292_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5292_onTap_activeActionGroupIndex = -1;
		$("#obj5292").trigger("obj5292_onTap_ended");
		
		return;
	}
	window.obj5292_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5292 
playAnimation_5403();
function playAnimation_5403() {
	var targetObjectId = "#obj5292";
	var targetObject = $(targetObjectId)[0];
	window.obj5292_onTap_runningActionsCount = obj5292_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5292_onTap_runningActionsCount = window.obj5292_onTap_runningActionsCount - 1;
if (window.obj5292_onTap_runningActionsCount == 0) {
	obj5292_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5292 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5292;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5292.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5292").one("obj5292_animation_ended",function(event) {
		    window.obj5292_onTap_runningActionsCount = window.obj5292_onTap_runningActionsCount - 1;
if (window.obj5292_onTap_runningActionsCount == 0) {
	obj5292_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5292_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5292_onTap_activeActionGroupIndex = -1;
		$("#obj5292").trigger("obj5292_onTap_ended");
		
		return;
	}
	window.obj5292_onTap_activeActionGroupIndex = 1;
	





















};
obj5292_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5292_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5292").trigger("obj5292_onTouchDown_ended");
		
		return;
	}
	window.obj5292_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5422();
function runjs_5422() {
	window.obj5292_onTouchDown_runningActionsCount = obj5292_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5292"));
	setTimeout(function() {
		window.obj5292_onTouchDown_runningActionsCount = window.obj5292_onTouchDown_runningActionsCount - 1;
if (window.obj5292_onTouchDown_runningActionsCount == 0) {
	obj5292_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj5292_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5292_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5292").trigger("obj5292_onTouchDown_ended");
		
		return;
	}
	window.obj5292_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5300_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5300_onTap_activeActionGroupIndex = -1;
		$("#obj5300").trigger("obj5300_onTap_ended");
		
		return;
	}
	window.obj5300_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5300 
playAnimation_5402();
function playAnimation_5402() {
	var targetObjectId = "#obj5300";
	var targetObject = $(targetObjectId)[0];
	window.obj5300_onTap_runningActionsCount = obj5300_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5300_onTap_runningActionsCount = window.obj5300_onTap_runningActionsCount - 1;
if (window.obj5300_onTap_runningActionsCount == 0) {
	obj5300_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5300 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5300;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5300.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5300").one("obj5300_animation_ended",function(event) {
		    window.obj5300_onTap_runningActionsCount = window.obj5300_onTap_runningActionsCount - 1;
if (window.obj5300_onTap_runningActionsCount == 0) {
	obj5300_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5300_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5300_onTap_activeActionGroupIndex = -1;
		$("#obj5300").trigger("obj5300_onTap_ended");
		
		return;
	}
	window.obj5300_onTap_activeActionGroupIndex = 1;
	





















};
obj5300_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5300_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5300").trigger("obj5300_onTouchDown_ended");
		
		return;
	}
	window.obj5300_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5431();
function runjs_5431() {
	window.obj5300_onTouchDown_runningActionsCount = obj5300_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5300"));
	setTimeout(function() {
		window.obj5300_onTouchDown_runningActionsCount = window.obj5300_onTouchDown_runningActionsCount - 1;
if (window.obj5300_onTouchDown_runningActionsCount == 0) {
	obj5300_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj5300_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5300_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5300").trigger("obj5300_onTouchDown_ended");
		
		return;
	}
	window.obj5300_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5324_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5324_onTap_activeActionGroupIndex = -1;
		$("#obj5324").trigger("obj5324_onTap_ended");
		
		return;
	}
	window.obj5324_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5324 
playAnimation_5406();
function playAnimation_5406() {
	var targetObjectId = "#obj5324";
	var targetObject = $(targetObjectId)[0];
	window.obj5324_onTap_runningActionsCount = obj5324_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5324_onTap_runningActionsCount = window.obj5324_onTap_runningActionsCount - 1;
if (window.obj5324_onTap_runningActionsCount == 0) {
	obj5324_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5324 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5324;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5324.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5324").one("obj5324_animation_ended",function(event) {
		    window.obj5324_onTap_runningActionsCount = window.obj5324_onTap_runningActionsCount - 1;
if (window.obj5324_onTap_runningActionsCount == 0) {
	obj5324_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5324_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5324_onTap_activeActionGroupIndex = -1;
		$("#obj5324").trigger("obj5324_onTap_ended");
		
		return;
	}
	window.obj5324_onTap_activeActionGroupIndex = 1;
	





















};
obj5324_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5324_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5324").trigger("obj5324_onTouchDown_ended");
		
		return;
	}
	window.obj5324_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5426();
function runjs_5426() {
	window.obj5324_onTouchDown_runningActionsCount = obj5324_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5324"));
	setTimeout(function() {
		window.obj5324_onTouchDown_runningActionsCount = window.obj5324_onTouchDown_runningActionsCount - 1;
if (window.obj5324_onTouchDown_runningActionsCount == 0) {
	obj5324_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj5324_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5324_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5324").trigger("obj5324_onTouchDown_ended");
		
		return;
	}
	window.obj5324_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5316_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5316_onTap_activeActionGroupIndex = -1;
		$("#obj5316").trigger("obj5316_onTap_ended");
		
		return;
	}
	window.obj5316_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5316 
playAnimation_5404();
function playAnimation_5404() {
	var targetObjectId = "#obj5316";
	var targetObject = $(targetObjectId)[0];
	window.obj5316_onTap_runningActionsCount = obj5316_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5316_onTap_runningActionsCount = window.obj5316_onTap_runningActionsCount - 1;
if (window.obj5316_onTap_runningActionsCount == 0) {
	obj5316_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5316 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5316;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5316.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5316").one("obj5316_animation_ended",function(event) {
		    window.obj5316_onTap_runningActionsCount = window.obj5316_onTap_runningActionsCount - 1;
if (window.obj5316_onTap_runningActionsCount == 0) {
	obj5316_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5316_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5316_onTap_activeActionGroupIndex = -1;
		$("#obj5316").trigger("obj5316_onTap_ended");
		
		return;
	}
	window.obj5316_onTap_activeActionGroupIndex = 1;
	





















};
obj5316_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5316_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5316").trigger("obj5316_onTouchDown_ended");
		
		return;
	}
	window.obj5316_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5420();
function runjs_5420() {
	window.obj5316_onTouchDown_runningActionsCount = obj5316_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5316"));
	setTimeout(function() {
		window.obj5316_onTouchDown_runningActionsCount = window.obj5316_onTouchDown_runningActionsCount - 1;
if (window.obj5316_onTouchDown_runningActionsCount == 0) {
	obj5316_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj5316_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5316_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5316").trigger("obj5316_onTouchDown_ended");
		
		return;
	}
	window.obj5316_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5312_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5312_onTap_activeActionGroupIndex = -1;
		$("#obj5312").trigger("obj5312_onTap_ended");
		
		return;
	}
	window.obj5312_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5312 
playAnimation_5400();
function playAnimation_5400() {
	var targetObjectId = "#obj5312";
	var targetObject = $(targetObjectId)[0];
	window.obj5312_onTap_runningActionsCount = obj5312_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5312_onTap_runningActionsCount = window.obj5312_onTap_runningActionsCount - 1;
if (window.obj5312_onTap_runningActionsCount == 0) {
	obj5312_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5312 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5312;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5312.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5312").one("obj5312_animation_ended",function(event) {
		    window.obj5312_onTap_runningActionsCount = window.obj5312_onTap_runningActionsCount - 1;
if (window.obj5312_onTap_runningActionsCount == 0) {
	obj5312_onTap_actionGroup1();
}
		});
	}
 }












//	action: Run JavaScript
runjs_5399();
function runjs_5399() {
	window.obj5312_onTap_runningActionsCount = obj5312_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5312"));
	setTimeout(function() {
		window.obj5312_onTap_runningActionsCount = window.obj5312_onTap_runningActionsCount - 1;
if (window.obj5312_onTap_runningActionsCount == 0) {
	obj5312_onTap_actionGroup1();
}
	}, 1);
}






};
obj5312_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5312_onTap_activeActionGroupIndex = -1;
		$("#obj5312").trigger("obj5312_onTap_ended");
		
		return;
	}
	window.obj5312_onTap_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj5394 
incrementCounter_5401();
function incrementCounter_5401() {
	window.obj5312_onTap_runningActionsCount = obj5312_onTap_runningActionsCount + 1;

	var oldValue = obj5394_counterValue;
	obj5394_counterValue = obj5394_counterValue + 1;
	if (! obj5394_counterCanExceedTargetValue && obj5394_counterValue > obj5394_counterTargetValue) {
		obj5394_counterValue = obj5394_counterTargetValue;
	}
	if (oldValue != obj5394_counterValue) {
		$("#obj5394").trigger('SCEventCounterValueChange');
		$("#obj5394").trigger('SCEventCounterIncrease');
		if (obj5394_counterValue == obj5394_counterTargetValue)
			$("#obj5394").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5312_onTap_runningActionsCount = window.obj5312_onTap_runningActionsCount - 1;
if (window.obj5312_onTap_runningActionsCount == 0) {
	obj5312_onTap_actionGroup2();
} }, 1);
}





};
obj5312_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5312_onTap_activeActionGroupIndex = -1;
		$("#obj5312").trigger("obj5312_onTap_ended");
		
		return;
	}
	window.obj5312_onTap_activeActionGroupIndex = 2;
	





















};
obj5332_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5332_onTap_activeActionGroupIndex = -1;
		$("#obj5332").trigger("obj5332_onTap_ended");
		
		return;
	}
	window.obj5332_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5332 
playAnimation_5405();
function playAnimation_5405() {
	var targetObjectId = "#obj5332";
	var targetObject = $(targetObjectId)[0];
	window.obj5332_onTap_runningActionsCount = obj5332_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5332_onTap_runningActionsCount = window.obj5332_onTap_runningActionsCount - 1;
if (window.obj5332_onTap_runningActionsCount == 0) {
	obj5332_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5332 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5332;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5332.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5332").one("obj5332_animation_ended",function(event) {
		    window.obj5332_onTap_runningActionsCount = window.obj5332_onTap_runningActionsCount - 1;
if (window.obj5332_onTap_runningActionsCount == 0) {
	obj5332_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5332_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5332_onTap_activeActionGroupIndex = -1;
		$("#obj5332").trigger("obj5332_onTap_ended");
		
		return;
	}
	window.obj5332_onTap_activeActionGroupIndex = 1;
	





















};
obj5332_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5332_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5332").trigger("obj5332_onTouchDown_ended");
		
		return;
	}
	window.obj5332_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5429();
function runjs_5429() {
	window.obj5332_onTouchDown_runningActionsCount = obj5332_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5332"));
	setTimeout(function() {
		window.obj5332_onTouchDown_runningActionsCount = window.obj5332_onTouchDown_runningActionsCount - 1;
if (window.obj5332_onTouchDown_runningActionsCount == 0) {
	obj5332_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj5332_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5332_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5332").trigger("obj5332_onTouchDown_ended");
		
		return;
	}
	window.obj5332_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5394_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5394_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5394").trigger("obj5394_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj5394_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_5434();
function wait_5434() {
	window.obj5394_SCEventCounterReachedTargetValue_runningActionsCount = obj5394_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj5394_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5394_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj5394_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5394_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}












};
obj5394_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5394_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5394").trigger("obj5394_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj5394_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page50
goToPage_5620();
function goToPage_5620() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../50/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(50))},200);
	}
}





















};
obj5394_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5394_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5394").trigger("obj5394_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj5394_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj5610_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5610_onLoad_activeActionGroupIndex = -1;
		$("#obj5610").trigger("obj5610_onLoad_ended");
		
		return;
	}
	window.obj5610_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj5610 
hide_5613();
function hide_5613() {
	window.obj5610_onLoad_runningActionsCount = obj5610_onLoad_runningActionsCount + 1;
	$("#obj5610").fadeOut(200, function() {
			setTimeout(function() {
				window.obj5610_onLoad_runningActionsCount = window.obj5610_onLoad_runningActionsCount - 1;
if (window.obj5610_onLoad_runningActionsCount == 0) {
	obj5610_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj5610_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5610_onLoad_activeActionGroupIndex = -1;
		$("#obj5610").trigger("obj5610_onLoad_ended");
		
		return;
	}
	window.obj5610_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj5610 
show_5614();
function show_5614() {
	window.obj5610_onLoad_runningActionsCount = obj5610_onLoad_runningActionsCount + 1;
	$("#obj5610").fadeIn(200, function() {
			setTimeout(function() {
				window.obj5610_onLoad_runningActionsCount = window.obj5610_onLoad_runningActionsCount - 1;
if (window.obj5610_onLoad_runningActionsCount == 0) {
	obj5610_onLoad_actionGroup2();
}
				$("#obj5610").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj5610_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5610_onLoad_activeActionGroupIndex = -1;
		$("#obj5610").trigger("obj5610_onLoad_ended");
		
		return;
	}
	window.obj5610_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj5610_onLoad();
function loop_obj5610_onLoad() {
	var loopCount = 1;
	window.obj5610_onLoad_loopCount = window.obj5610_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5610_onLoad_loopCount > loopCount) {
		window.obj5610_onLoad_loopCount = 0
		obj5610_onLoad_actionGroup3();
	} else {
		obj5610_onLoad_actionGroup0();
	}
}













};
obj5610_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5610_onLoad_activeActionGroupIndex = -1;
		$("#obj5610").trigger("obj5610_onLoad_ended");
		
		return;
	}
	window.obj5610_onLoad_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj5610 
hide_5616();
function hide_5616() {
	window.obj5610_onLoad_runningActionsCount = obj5610_onLoad_runningActionsCount + 1;
	$("#obj5610").fadeOut(0, function() {
			setTimeout(function() {
				window.obj5610_onLoad_runningActionsCount = window.obj5610_onLoad_runningActionsCount - 1;
if (window.obj5610_onLoad_runningActionsCount == 0) {
	obj5610_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj5610_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5610_onLoad_activeActionGroupIndex = -1;
		$("#obj5610").trigger("obj5610_onLoad_ended");
		
		return;
	}
	window.obj5610_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj5605 
show_5617();
function show_5617() {
	window.obj5610_onLoad_runningActionsCount = obj5610_onLoad_runningActionsCount + 1;
	$("#obj5605").fadeIn(500, function() {
			setTimeout(function() {
				window.obj5610_onLoad_runningActionsCount = window.obj5610_onLoad_runningActionsCount - 1;
if (window.obj5610_onLoad_runningActionsCount == 0) {
	obj5610_onLoad_actionGroup5();
}
				$("#obj5605").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj5610_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5610_onLoad_activeActionGroupIndex = -1;
		$("#obj5610").trigger("obj5610_onLoad_ended");
		
		return;
	}
	window.obj5610_onLoad_activeActionGroupIndex = 5;
	





















};
obj5605_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5605_onShow_activeActionGroupIndex = -1;
		$("#obj5605").trigger("obj5605_onShow_ended");
		
		return;
	}
	window.obj5605_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_5608();
function wait_5608() {
	window.obj5605_onShow_runningActionsCount = obj5605_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj5605_onShow_runningActionsCount = window.obj5605_onShow_runningActionsCount - 1;
if (window.obj5605_onShow_runningActionsCount == 0) {
	obj5605_onShow_actionGroup1();
}
	}, 2000);
}












};
obj5605_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5605_onShow_activeActionGroupIndex = -1;
		$("#obj5605").trigger("obj5605_onShow_ended");
		
		return;
	}
	window.obj5605_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj5605 
hide_5609();
function hide_5609() {
	window.obj5605_onShow_runningActionsCount = obj5605_onShow_runningActionsCount + 1;
	$("#obj5605").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj5605_onShow_runningActionsCount = window.obj5605_onShow_runningActionsCount - 1;
if (window.obj5605_onShow_runningActionsCount == 0) {
	obj5605_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj5605_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5605_onShow_activeActionGroupIndex = -1;
		$("#obj5605").trigger("obj5605_onShow_ended");
		
		return;
	}
	window.obj5605_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj5288: Event Touch Down
 *
 */
 
$("#obj5288").one(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5288_onTap_activeActionGroupIndex != -1) return;
var obj5288_onTap_runningActionsCount = 0;
var obj5288_onTap_loopCount = 0;
obj5288_onTap_actionGroup0();
});







/*
 *
 *   obj5292: Event Touch Down
 *
 */
 
$("#obj5292").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5292_onTap_activeActionGroupIndex != -1) return;
var obj5292_onTap_runningActionsCount = 0;
var obj5292_onTap_loopCount = 0;
obj5292_onTap_actionGroup0();
});

/*
 *
 *   obj5292: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5292");
	var winTarget = document.getElementById("obj5292");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5292").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5292_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5292_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5292_onTouchDown_activeActionGroupIndex != -1) return;
var obj5292_onTouchDown_runningActionsCount = 0;
var obj5292_onTouchDown_loopCount = 0;
obj5292_onTouchDown_actionGroup0();
});






/*
 *
 *   obj5300: Event Touch Down
 *
 */
 
$("#obj5300").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5300_onTap_activeActionGroupIndex != -1) return;
var obj5300_onTap_runningActionsCount = 0;
var obj5300_onTap_loopCount = 0;
obj5300_onTap_actionGroup0();
});

/*
 *
 *   obj5300: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5300");
	var winTarget = document.getElementById("obj5300");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5300").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5300_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5300_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5300_onTouchDown_activeActionGroupIndex != -1) return;
var obj5300_onTouchDown_runningActionsCount = 0;
var obj5300_onTouchDown_loopCount = 0;
obj5300_onTouchDown_actionGroup0();
});






/*
 *
 *   obj5324: Event Touch Down
 *
 */
 
$("#obj5324").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5324_onTap_activeActionGroupIndex != -1) return;
var obj5324_onTap_runningActionsCount = 0;
var obj5324_onTap_loopCount = 0;
obj5324_onTap_actionGroup0();
});

/*
 *
 *   obj5324: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5324");
	var winTarget = document.getElementById("obj5324");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5324").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5324_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5324_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5324_onTouchDown_activeActionGroupIndex != -1) return;
var obj5324_onTouchDown_runningActionsCount = 0;
var obj5324_onTouchDown_loopCount = 0;
obj5324_onTouchDown_actionGroup0();
});






/*
 *
 *   obj5316: Event Touch Down
 *
 */
 
$("#obj5316").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5316_onTap_activeActionGroupIndex != -1) return;
var obj5316_onTap_runningActionsCount = 0;
var obj5316_onTap_loopCount = 0;
obj5316_onTap_actionGroup0();
});

/*
 *
 *   obj5316: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5316");
	var winTarget = document.getElementById("obj5316");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5316").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5316_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5316_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5316_onTouchDown_activeActionGroupIndex != -1) return;
var obj5316_onTouchDown_runningActionsCount = 0;
var obj5316_onTouchDown_loopCount = 0;
obj5316_onTouchDown_actionGroup0();
});






/*
 *
 *   obj5312: Event Touch Down
 *
 */
 
$("#obj5312").one(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5312_onTap_activeActionGroupIndex != -1) return;
var obj5312_onTap_runningActionsCount = 0;
var obj5312_onTap_loopCount = 0;
obj5312_onTap_actionGroup0();
});







/*
 *
 *   obj5332: Event Touch Down
 *
 */
 
$("#obj5332").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5332_onTap_activeActionGroupIndex != -1) return;
var obj5332_onTap_runningActionsCount = 0;
var obj5332_onTap_loopCount = 0;
obj5332_onTap_actionGroup0();
});

/*
 *
 *   obj5332: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5332");
	var winTarget = document.getElementById("obj5332");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5332").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5332_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5332_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5332_onTouchDown_activeActionGroupIndex != -1) return;
var obj5332_onTouchDown_runningActionsCount = 0;
var obj5332_onTouchDown_loopCount = 0;
obj5332_onTouchDown_actionGroup0();
});









/*
 *
 *   obj5394: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj5394").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5394_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj5394_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5394_SCEventCounterReachedTargetValue_loopCount = 0;
obj5394_SCEventCounterReachedTargetValue_actionGroup0();
});












/*
 *
 *   obj5610: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5610_onLoad_activeActionGroupIndex != -1) return;
var obj5610_onLoad_runningActionsCount = 0;
var obj5610_onLoad_loopCount = 0;
obj5610_onLoad_actionGroup0();
});






/*
 *
 *   obj5605: Event Show
 *
 */
 
$("#obj5605").bind('SCEventShow', function(event) {
	if (window.obj5605_onShow_activeActionGroupIndex != -1) return;
var obj5605_onShow_runningActionsCount = 0;
var obj5605_onShow_loopCount = 0;
obj5605_onShow_actionGroup0();
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
	
$("#obj5282").trigger('SCEventShow');
$("#obj5288").trigger('SCEventShow');
$("#obj5292").trigger('SCEventShow');
$("#obj5300").trigger('SCEventShow');
$("#obj5324").trigger('SCEventShow');
$("#obj5316").trigger('SCEventShow');
$("#obj5312").trigger('SCEventShow');
$("#obj5332").trigger('SCEventShow');
$("#obj5618").trigger('SCEventShow');
$("#obj5610").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});