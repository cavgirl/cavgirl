pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 5072;
pubcoder.page.title = "45";
pubcoder.page.number = 45;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj5133_animation_count = 0;
var obj5111_animation_count = 0;
var obj5189_animation_count = 0;
var obj5169_animation_count = 0;
var obj5076_animation_count = 0;
var obj5214_animation_count = 0;
var obj5351_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj5133_onTap_activeActionGroupIndex = -1;
var obj5133_onTap_runningActionsCount = 0;
var obj5133_onTap_loopCount = 0;
var obj5111_onTap_activeActionGroupIndex = -1;
var obj5111_onTap_runningActionsCount = 0;
var obj5111_onTap_loopCount = 0;
var obj5189_onTap_activeActionGroupIndex = -1;
var obj5189_onTap_runningActionsCount = 0;
var obj5189_onTap_loopCount = 0;
var obj5169_onTap_activeActionGroupIndex = -1;
var obj5169_onTap_runningActionsCount = 0;
var obj5169_onTap_loopCount = 0;
var obj5076_onTap_activeActionGroupIndex = -1;
var obj5076_onTap_runningActionsCount = 0;
var obj5076_onTap_loopCount = 0;
var obj5214_onTap_activeActionGroupIndex = -1;
var obj5214_onTap_runningActionsCount = 0;
var obj5214_onTap_loopCount = 0;
var obj5340_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5340_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5340_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5351_onTap_activeActionGroupIndex = -1;
var obj5351_onTap_runningActionsCount = 0;
var obj5351_onTap_loopCount = 0;
var obj5448_onLoad_activeActionGroupIndex = -1;
var obj5448_onLoad_runningActionsCount = 0;
var obj5448_onLoad_loopCount = 0;
var obj5455_onShow_activeActionGroupIndex = -1;
var obj5455_onShow_runningActionsCount = 0;
var obj5455_onShow_loopCount = 0;
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
 
var obj5340_counterValue = 0;
var obj5340_counterTargetValue = 2;
var obj5340_counterCanExceedTargetValue = false;
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
	
initAnimation_5133();
function initAnimation_5133()
{
        var targetObjectId = "#obj5133";
        var widthSCAnimationObject = 334;
        var heightSCAnimationObject = 495;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5133 = $("#")[0];
        window.hasAudioTrack_obj5133 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5133_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5133 = $(targetObjectId).spritespin("api");
}
initAnimation_5111();
function initAnimation_5111()
{
        var targetObjectId = "#obj5111";
        var widthSCAnimationObject = 285;
        var heightSCAnimationObject = 480;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5111 = $("#")[0];
        window.hasAudioTrack_obj5111 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5111_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5111 = $(targetObjectId).spritespin("api");
}
initAnimation_5189();
function initAnimation_5189()
{
        var targetObjectId = "#obj5189";
        var widthSCAnimationObject = 204;
        var heightSCAnimationObject = 285;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5189 = $("#")[0];
        window.hasAudioTrack_obj5189 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5189_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5189 = $(targetObjectId).spritespin("api");
}
initAnimation_5169();
function initAnimation_5169()
{
        var targetObjectId = "#obj5169";
        var widthSCAnimationObject = 343;
        var heightSCAnimationObject = 435;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5169 = $("#")[0];
        window.hasAudioTrack_obj5169 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5169_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5169 = $(targetObjectId).spritespin("api");
}
initAnimation_5076();
function initAnimation_5076()
{
        var targetObjectId = "#obj5076";
        var widthSCAnimationObject = 438;
        var heightSCAnimationObject = 415;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5076 = $("#")[0];
        window.hasAudioTrack_obj5076 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5076_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5076 = $(targetObjectId).spritespin("api");
}
initAnimation_5214();
function initAnimation_5214()
{
        var targetObjectId = "#obj5214";
        var widthSCAnimationObject = 418;
        var heightSCAnimationObject = 261;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5214 = $("#")[0];
        window.hasAudioTrack_obj5214 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5214_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5214 = $(targetObjectId).spritespin("api");
}
initAnimation_5351();
function initAnimation_5351()
{
        var targetObjectId = "#obj5351";
        var widthSCAnimationObject = 265;
        var heightSCAnimationObject = 311;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5351 = $("#")[0];
        window.hasAudioTrack_obj5351 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5351_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5351 = $(targetObjectId).spritespin("api");
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
		
obj5133_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5133_onTap_activeActionGroupIndex = -1;
		$("#obj5133").trigger("obj5133_onTap_ended");
		
		return;
	}
	window.obj5133_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5133 
playAnimation_5342();
function playAnimation_5342() {
	var targetObjectId = "#obj5133";
	var targetObject = $(targetObjectId)[0];
	window.obj5133_onTap_runningActionsCount = obj5133_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5133_onTap_runningActionsCount = window.obj5133_onTap_runningActionsCount - 1;
if (window.obj5133_onTap_runningActionsCount == 0) {
	obj5133_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5133 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5133;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5133.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5133").one("obj5133_animation_ended",function(event) {
		    window.obj5133_onTap_runningActionsCount = window.obj5133_onTap_runningActionsCount - 1;
if (window.obj5133_onTap_runningActionsCount == 0) {
	obj5133_onTap_actionGroup1();
}
		});
	}
 }












//	action: Run JavaScript
runjs_5345();
function runjs_5345() {
	window.obj5133_onTap_runningActionsCount = obj5133_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5133"));
	setTimeout(function() {
		window.obj5133_onTap_runningActionsCount = window.obj5133_onTap_runningActionsCount - 1;
if (window.obj5133_onTap_runningActionsCount == 0) {
	obj5133_onTap_actionGroup1();
}
	}, 1);
}






};
obj5133_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5133_onTap_activeActionGroupIndex = -1;
		$("#obj5133").trigger("obj5133_onTap_ended");
		
		return;
	}
	window.obj5133_onTap_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj5340 
incrementCounter_5369();
function incrementCounter_5369() {
	window.obj5133_onTap_runningActionsCount = obj5133_onTap_runningActionsCount + 1;

	var oldValue = obj5340_counterValue;
	obj5340_counterValue = obj5340_counterValue + 1;
	if (! obj5340_counterCanExceedTargetValue && obj5340_counterValue > obj5340_counterTargetValue) {
		obj5340_counterValue = obj5340_counterTargetValue;
	}
	if (oldValue != obj5340_counterValue) {
		$("#obj5340").trigger('SCEventCounterValueChange');
		$("#obj5340").trigger('SCEventCounterIncrease');
		if (obj5340_counterValue == obj5340_counterTargetValue)
			$("#obj5340").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5133_onTap_runningActionsCount = window.obj5133_onTap_runningActionsCount - 1;
if (window.obj5133_onTap_runningActionsCount == 0) {
	obj5133_onTap_actionGroup2();
} }, 1);
}





};
obj5133_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5133_onTap_activeActionGroupIndex = -1;
		$("#obj5133").trigger("obj5133_onTap_ended");
		
		return;
	}
	window.obj5133_onTap_activeActionGroupIndex = 2;
	





















};
obj5111_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5111_onTap_activeActionGroupIndex = -1;
		$("#obj5111").trigger("obj5111_onTap_ended");
		
		return;
	}
	window.obj5111_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5111 
playAnimation_5347();
function playAnimation_5347() {
	var targetObjectId = "#obj5111";
	var targetObject = $(targetObjectId)[0];
	window.obj5111_onTap_runningActionsCount = obj5111_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5111_onTap_runningActionsCount = window.obj5111_onTap_runningActionsCount - 1;
if (window.obj5111_onTap_runningActionsCount == 0) {
	obj5111_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5111 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5111;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5111.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5111").one("obj5111_animation_ended",function(event) {
		    window.obj5111_onTap_runningActionsCount = window.obj5111_onTap_runningActionsCount - 1;
if (window.obj5111_onTap_runningActionsCount == 0) {
	obj5111_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5111_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5111_onTap_activeActionGroupIndex = -1;
		$("#obj5111").trigger("obj5111_onTap_ended");
		
		return;
	}
	window.obj5111_onTap_activeActionGroupIndex = 1;
	





















};
obj5189_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5189_onTap_activeActionGroupIndex = -1;
		$("#obj5189").trigger("obj5189_onTap_ended");
		
		return;
	}
	window.obj5189_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5189 
playAnimation_5350();
function playAnimation_5350() {
	var targetObjectId = "#obj5189";
	var targetObject = $(targetObjectId)[0];
	window.obj5189_onTap_runningActionsCount = obj5189_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5189_onTap_runningActionsCount = window.obj5189_onTap_runningActionsCount - 1;
if (window.obj5189_onTap_runningActionsCount == 0) {
	obj5189_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5189 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5189;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5189.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5189").one("obj5189_animation_ended",function(event) {
		    window.obj5189_onTap_runningActionsCount = window.obj5189_onTap_runningActionsCount - 1;
if (window.obj5189_onTap_runningActionsCount == 0) {
	obj5189_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5189_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5189_onTap_activeActionGroupIndex = -1;
		$("#obj5189").trigger("obj5189_onTap_ended");
		
		return;
	}
	window.obj5189_onTap_activeActionGroupIndex = 1;
	





















};
obj5169_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5169_onTap_activeActionGroupIndex = -1;
		$("#obj5169").trigger("obj5169_onTap_ended");
		
		return;
	}
	window.obj5169_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5169 
playAnimation_5348();
function playAnimation_5348() {
	var targetObjectId = "#obj5169";
	var targetObject = $(targetObjectId)[0];
	window.obj5169_onTap_runningActionsCount = obj5169_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5169_onTap_runningActionsCount = window.obj5169_onTap_runningActionsCount - 1;
if (window.obj5169_onTap_runningActionsCount == 0) {
	obj5169_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5169 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5169;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5169.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5169").one("obj5169_animation_ended",function(event) {
		    window.obj5169_onTap_runningActionsCount = window.obj5169_onTap_runningActionsCount - 1;
if (window.obj5169_onTap_runningActionsCount == 0) {
	obj5169_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5169_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5169_onTap_activeActionGroupIndex = -1;
		$("#obj5169").trigger("obj5169_onTap_ended");
		
		return;
	}
	window.obj5169_onTap_activeActionGroupIndex = 1;
	





















};
obj5076_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5076_onTap_activeActionGroupIndex = -1;
		$("#obj5076").trigger("obj5076_onTap_ended");
		
		return;
	}
	window.obj5076_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5076 
playAnimation_5349();
function playAnimation_5349() {
	var targetObjectId = "#obj5076";
	var targetObject = $(targetObjectId)[0];
	window.obj5076_onTap_runningActionsCount = obj5076_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5076_onTap_runningActionsCount = window.obj5076_onTap_runningActionsCount - 1;
if (window.obj5076_onTap_runningActionsCount == 0) {
	obj5076_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5076 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5076;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5076.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5076").one("obj5076_animation_ended",function(event) {
		    window.obj5076_onTap_runningActionsCount = window.obj5076_onTap_runningActionsCount - 1;
if (window.obj5076_onTap_runningActionsCount == 0) {
	obj5076_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5076_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5076_onTap_activeActionGroupIndex = -1;
		$("#obj5076").trigger("obj5076_onTap_ended");
		
		return;
	}
	window.obj5076_onTap_activeActionGroupIndex = 1;
	





















};
obj5214_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5214_onTap_activeActionGroupIndex = -1;
		$("#obj5214").trigger("obj5214_onTap_ended");
		
		return;
	}
	window.obj5214_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5214 
playAnimation_5343();
function playAnimation_5343() {
	var targetObjectId = "#obj5214";
	var targetObject = $(targetObjectId)[0];
	window.obj5214_onTap_runningActionsCount = obj5214_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5214_onTap_runningActionsCount = window.obj5214_onTap_runningActionsCount - 1;
if (window.obj5214_onTap_runningActionsCount == 0) {
	obj5214_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5214 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5214;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5214.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5214").one("obj5214_animation_ended",function(event) {
		    window.obj5214_onTap_runningActionsCount = window.obj5214_onTap_runningActionsCount - 1;
if (window.obj5214_onTap_runningActionsCount == 0) {
	obj5214_onTap_actionGroup1();
}
		});
	}
 }












//	action: Run JavaScript
runjs_5344();
function runjs_5344() {
	window.obj5214_onTap_runningActionsCount = obj5214_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5214"));
	setTimeout(function() {
		window.obj5214_onTap_runningActionsCount = window.obj5214_onTap_runningActionsCount - 1;
if (window.obj5214_onTap_runningActionsCount == 0) {
	obj5214_onTap_actionGroup1();
}
	}, 1);
}






};
obj5214_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5214_onTap_activeActionGroupIndex = -1;
		$("#obj5214").trigger("obj5214_onTap_ended");
		
		return;
	}
	window.obj5214_onTap_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj5340 
incrementCounter_5370();
function incrementCounter_5370() {
	window.obj5214_onTap_runningActionsCount = obj5214_onTap_runningActionsCount + 1;

	var oldValue = obj5340_counterValue;
	obj5340_counterValue = obj5340_counterValue + 1;
	if (! obj5340_counterCanExceedTargetValue && obj5340_counterValue > obj5340_counterTargetValue) {
		obj5340_counterValue = obj5340_counterTargetValue;
	}
	if (oldValue != obj5340_counterValue) {
		$("#obj5340").trigger('SCEventCounterValueChange');
		$("#obj5340").trigger('SCEventCounterIncrease');
		if (obj5340_counterValue == obj5340_counterTargetValue)
			$("#obj5340").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5214_onTap_runningActionsCount = window.obj5214_onTap_runningActionsCount - 1;
if (window.obj5214_onTap_runningActionsCount == 0) {
	obj5214_onTap_actionGroup2();
} }, 1);
}





};
obj5214_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5214_onTap_activeActionGroupIndex = -1;
		$("#obj5214").trigger("obj5214_onTap_ended");
		
		return;
	}
	window.obj5214_onTap_activeActionGroupIndex = 2;
	





















};
obj5340_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5340_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5340").trigger("obj5340_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj5340_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_5432();
function wait_5432() {
	window.obj5340_SCEventCounterReachedTargetValue_runningActionsCount = obj5340_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj5340_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5340_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj5340_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5340_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}












};
obj5340_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5340_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5340").trigger("obj5340_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj5340_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page46
goToPage_5466();
function goToPage_5466() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../46/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(46))},200);
	}
}





















};
obj5340_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5340_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5340").trigger("obj5340_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj5340_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj5351_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5351_onTap_activeActionGroupIndex = -1;
		$("#obj5351").trigger("obj5351_onTap_ended");
		
		return;
	}
	window.obj5351_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5351 
playAnimation_5355();
function playAnimation_5355() {
	var targetObjectId = "#obj5351";
	var targetObject = $(targetObjectId)[0];
	window.obj5351_onTap_runningActionsCount = obj5351_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5351_onTap_runningActionsCount = window.obj5351_onTap_runningActionsCount - 1;
if (window.obj5351_onTap_runningActionsCount == 0) {
	obj5351_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5351 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5351;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5351.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5351").one("obj5351_animation_ended",function(event) {
		    window.obj5351_onTap_runningActionsCount = window.obj5351_onTap_runningActionsCount - 1;
if (window.obj5351_onTap_runningActionsCount == 0) {
	obj5351_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5351_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5351_onTap_activeActionGroupIndex = -1;
		$("#obj5351").trigger("obj5351_onTap_ended");
		
		return;
	}
	window.obj5351_onTap_activeActionGroupIndex = 1;
	





















};
obj5448_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5448_onLoad_activeActionGroupIndex = -1;
		$("#obj5448").trigger("obj5448_onLoad_ended");
		
		return;
	}
	window.obj5448_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj5448 
hide_5451();
function hide_5451() {
	window.obj5448_onLoad_runningActionsCount = obj5448_onLoad_runningActionsCount + 1;
	$("#obj5448").fadeOut(200, function() {
			setTimeout(function() {
				window.obj5448_onLoad_runningActionsCount = window.obj5448_onLoad_runningActionsCount - 1;
if (window.obj5448_onLoad_runningActionsCount == 0) {
	obj5448_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj5448_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5448_onLoad_activeActionGroupIndex = -1;
		$("#obj5448").trigger("obj5448_onLoad_ended");
		
		return;
	}
	window.obj5448_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj5448 
show_5452();
function show_5452() {
	window.obj5448_onLoad_runningActionsCount = obj5448_onLoad_runningActionsCount + 1;
	$("#obj5448").fadeIn(200, function() {
			setTimeout(function() {
				window.obj5448_onLoad_runningActionsCount = window.obj5448_onLoad_runningActionsCount - 1;
if (window.obj5448_onLoad_runningActionsCount == 0) {
	obj5448_onLoad_actionGroup2();
}
				$("#obj5448").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj5448_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5448_onLoad_activeActionGroupIndex = -1;
		$("#obj5448").trigger("obj5448_onLoad_ended");
		
		return;
	}
	window.obj5448_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj5448_onLoad();
function loop_obj5448_onLoad() {
	var loopCount = 1;
	window.obj5448_onLoad_loopCount = window.obj5448_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5448_onLoad_loopCount > loopCount) {
		window.obj5448_onLoad_loopCount = 0
		obj5448_onLoad_actionGroup3();
	} else {
		obj5448_onLoad_actionGroup0();
	}
}













};
obj5448_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5448_onLoad_activeActionGroupIndex = -1;
		$("#obj5448").trigger("obj5448_onLoad_ended");
		
		return;
	}
	window.obj5448_onLoad_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj5448 
hide_5454();
function hide_5454() {
	window.obj5448_onLoad_runningActionsCount = obj5448_onLoad_runningActionsCount + 1;
	$("#obj5448").fadeOut(0, function() {
			setTimeout(function() {
				window.obj5448_onLoad_runningActionsCount = window.obj5448_onLoad_runningActionsCount - 1;
if (window.obj5448_onLoad_runningActionsCount == 0) {
	obj5448_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj5448_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5448_onLoad_activeActionGroupIndex = -1;
		$("#obj5448").trigger("obj5448_onLoad_ended");
		
		return;
	}
	window.obj5448_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj5455 
show_5457();
function show_5457() {
	window.obj5448_onLoad_runningActionsCount = obj5448_onLoad_runningActionsCount + 1;
	$("#obj5455").fadeIn(500, function() {
			setTimeout(function() {
				window.obj5448_onLoad_runningActionsCount = window.obj5448_onLoad_runningActionsCount - 1;
if (window.obj5448_onLoad_runningActionsCount == 0) {
	obj5448_onLoad_actionGroup5();
}
				$("#obj5455").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj5448_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5448_onLoad_activeActionGroupIndex = -1;
		$("#obj5448").trigger("obj5448_onLoad_ended");
		
		return;
	}
	window.obj5448_onLoad_activeActionGroupIndex = 5;
	





















};
obj5455_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5455_onShow_activeActionGroupIndex = -1;
		$("#obj5455").trigger("obj5455_onShow_ended");
		
		return;
	}
	window.obj5455_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_5459();
function wait_5459() {
	window.obj5455_onShow_runningActionsCount = obj5455_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj5455_onShow_runningActionsCount = window.obj5455_onShow_runningActionsCount - 1;
if (window.obj5455_onShow_runningActionsCount == 0) {
	obj5455_onShow_actionGroup1();
}
	}, 2000);
}












};
obj5455_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5455_onShow_activeActionGroupIndex = -1;
		$("#obj5455").trigger("obj5455_onShow_ended");
		
		return;
	}
	window.obj5455_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj5455 
hide_5460();
function hide_5460() {
	window.obj5455_onShow_runningActionsCount = obj5455_onShow_runningActionsCount + 1;
	$("#obj5455").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj5455_onShow_runningActionsCount = window.obj5455_onShow_runningActionsCount - 1;
if (window.obj5455_onShow_runningActionsCount == 0) {
	obj5455_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj5455_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5455_onShow_activeActionGroupIndex = -1;
		$("#obj5455").trigger("obj5455_onShow_ended");
		
		return;
	}
	window.obj5455_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj5133: Event Touch Down
 *
 */
 
$("#obj5133").one(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5133_onTap_activeActionGroupIndex != -1) return;
var obj5133_onTap_runningActionsCount = 0;
var obj5133_onTap_loopCount = 0;
obj5133_onTap_actionGroup0();
});







/*
 *
 *   obj5111: Event Touch Down
 *
 */
 
$("#obj5111").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5111_onTap_activeActionGroupIndex != -1) return;
var obj5111_onTap_runningActionsCount = 0;
var obj5111_onTap_loopCount = 0;
obj5111_onTap_actionGroup0();
});







/*
 *
 *   obj5189: Event Touch Down
 *
 */
 
$("#obj5189").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5189_onTap_activeActionGroupIndex != -1) return;
var obj5189_onTap_runningActionsCount = 0;
var obj5189_onTap_loopCount = 0;
obj5189_onTap_actionGroup0();
});







/*
 *
 *   obj5169: Event Touch Down
 *
 */
 
$("#obj5169").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5169_onTap_activeActionGroupIndex != -1) return;
var obj5169_onTap_runningActionsCount = 0;
var obj5169_onTap_loopCount = 0;
obj5169_onTap_actionGroup0();
});







/*
 *
 *   obj5076: Event Touch Down
 *
 */
 
$("#obj5076").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5076_onTap_activeActionGroupIndex != -1) return;
var obj5076_onTap_runningActionsCount = 0;
var obj5076_onTap_loopCount = 0;
obj5076_onTap_actionGroup0();
});







/*
 *
 *   obj5214: Event Touch Down
 *
 */
 
$("#obj5214").one(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5214_onTap_activeActionGroupIndex != -1) return;
var obj5214_onTap_runningActionsCount = 0;
var obj5214_onTap_loopCount = 0;
obj5214_onTap_actionGroup0();
});










/*
 *
 *   obj5340: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj5340").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5340_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj5340_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5340_SCEventCounterReachedTargetValue_loopCount = 0;
obj5340_SCEventCounterReachedTargetValue_actionGroup0();
});



/*
 *
 *   obj5351: Event Touch Down
 *
 */
 
$("#obj5351").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5351_onTap_activeActionGroupIndex != -1) return;
var obj5351_onTap_runningActionsCount = 0;
var obj5351_onTap_loopCount = 0;
obj5351_onTap_actionGroup0();
});









/*
 *
 *   obj5448: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5448_onLoad_activeActionGroupIndex != -1) return;
var obj5448_onLoad_runningActionsCount = 0;
var obj5448_onLoad_loopCount = 0;
obj5448_onLoad_actionGroup0();
});






/*
 *
 *   obj5455: Event Show
 *
 */
 
$("#obj5455").bind('SCEventShow', function(event) {
	if (window.obj5455_onShow_activeActionGroupIndex != -1) return;
var obj5455_onShow_runningActionsCount = 0;
var obj5455_onShow_loopCount = 0;
obj5455_onShow_actionGroup0();
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
	
$("#obj5219").trigger('SCEventShow');
$("#obj5446").trigger('SCEventShow');
$("#obj5133").trigger('SCEventShow');
$("#obj5111").trigger('SCEventShow');
$("#obj5189").trigger('SCEventShow');
$("#obj5169").trigger('SCEventShow');
$("#obj5076").trigger('SCEventShow');
$("#obj5214").trigger('SCEventShow');
$("#obj5351").trigger('SCEventShow');
$("#obj5448").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});