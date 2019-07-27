pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 5222;
pubcoder.page.title = "47";
pubcoder.page.number = 47;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj5233_animation_count = 0;
var obj5225_animation_count = 0;
var obj5249_animation_count = 0;
var obj5245_animation_count = 0;
var obj5261_animation_count = 0;
var obj5265_animation_count = 0;
var obj5277_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj5233_onTap_activeActionGroupIndex = -1;
var obj5233_onTap_runningActionsCount = 0;
var obj5233_onTap_loopCount = 0;
var obj5225_onTap_activeActionGroupIndex = -1;
var obj5225_onTap_runningActionsCount = 0;
var obj5225_onTap_loopCount = 0;
var obj5249_onTap_activeActionGroupIndex = -1;
var obj5249_onTap_runningActionsCount = 0;
var obj5249_onTap_loopCount = 0;
var obj5245_onTap_activeActionGroupIndex = -1;
var obj5245_onTap_runningActionsCount = 0;
var obj5245_onTap_loopCount = 0;
var obj5261_onTap_activeActionGroupIndex = -1;
var obj5261_onTap_runningActionsCount = 0;
var obj5261_onTap_loopCount = 0;
var obj5265_onTap_activeActionGroupIndex = -1;
var obj5265_onTap_runningActionsCount = 0;
var obj5265_onTap_loopCount = 0;
var obj5277_onTap_activeActionGroupIndex = -1;
var obj5277_onTap_runningActionsCount = 0;
var obj5277_onTap_loopCount = 0;
var obj5384_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj5384_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5384_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5560_onLoad_activeActionGroupIndex = -1;
var obj5560_onLoad_runningActionsCount = 0;
var obj5560_onLoad_loopCount = 0;
var obj13051_onShow_activeActionGroupIndex = -1;
var obj13051_onShow_runningActionsCount = 0;
var obj13051_onShow_loopCount = 0;
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
 
var obj5384_counterValue = 0;
var obj5384_counterTargetValue = 3;
var obj5384_counterCanExceedTargetValue = false;
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
	
initAnimation_5233();
function initAnimation_5233()
{
        var targetObjectId = "#obj5233";
        var widthSCAnimationObject = 302;
        var heightSCAnimationObject = 466;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5233 = $("#")[0];
        window.hasAudioTrack_obj5233 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5233_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5233 = $(targetObjectId).spritespin("api");
}
initAnimation_5225();
function initAnimation_5225()
{
        var targetObjectId = "#obj5225";
        var widthSCAnimationObject = 288;
        var heightSCAnimationObject = 483;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5225 = $("#")[0];
        window.hasAudioTrack_obj5225 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5225_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5225 = $(targetObjectId).spritespin("api");
}
initAnimation_5249();
function initAnimation_5249()
{
        var targetObjectId = "#obj5249";
        var widthSCAnimationObject = 329;
        var heightSCAnimationObject = 421;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5249 = $("#")[0];
        window.hasAudioTrack_obj5249 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5249_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5249 = $(targetObjectId).spritespin("api");
}
initAnimation_5245();
function initAnimation_5245()
{
        var targetObjectId = "#obj5245";
        var widthSCAnimationObject = 204;
        var heightSCAnimationObject = 285;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5245 = $("#")[0];
        window.hasAudioTrack_obj5245 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5245_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5245 = $(targetObjectId).spritespin("api");
}
initAnimation_5261();
function initAnimation_5261()
{
        var targetObjectId = "#obj5261";
        var widthSCAnimationObject = 438;
        var heightSCAnimationObject = 415;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5261 = $("#")[0];
        window.hasAudioTrack_obj5261 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5261_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5261 = $(targetObjectId).spritespin("api");
}
initAnimation_5265();
function initAnimation_5265()
{
        var targetObjectId = "#obj5265";
        var widthSCAnimationObject = 418;
        var heightSCAnimationObject = 261;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj5265 = $("#")[0];
        window.hasAudioTrack_obj5265 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5265_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5265 = $(targetObjectId).spritespin("api");
}
initAnimation_5277();
function initAnimation_5277()
{
        var targetObjectId = "#obj5277";
        var widthSCAnimationObject = 294;
        var heightSCAnimationObject = 341;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj5277 = $("#")[0];
        window.hasAudioTrack_obj5277 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5277_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5277 = $(targetObjectId).spritespin("api");
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
		
obj5233_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5233_onTap_activeActionGroupIndex = -1;
		$("#obj5233").trigger("obj5233_onTap_ended");
		
		return;
	}
	window.obj5233_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5233 
playAnimation_5386();
function playAnimation_5386() {
	var targetObjectId = "#obj5233";
	var targetObject = $(targetObjectId)[0];
	window.obj5233_onTap_runningActionsCount = obj5233_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5233_onTap_runningActionsCount = window.obj5233_onTap_runningActionsCount - 1;
if (window.obj5233_onTap_runningActionsCount == 0) {
	obj5233_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5233 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5233;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5233.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5233").one("obj5233_animation_ended",function(event) {
		    window.obj5233_onTap_runningActionsCount = window.obj5233_onTap_runningActionsCount - 1;
if (window.obj5233_onTap_runningActionsCount == 0) {
	obj5233_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5233_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5233_onTap_activeActionGroupIndex = -1;
		$("#obj5233").trigger("obj5233_onTap_ended");
		
		return;
	}
	window.obj5233_onTap_activeActionGroupIndex = 1;
	





















};
obj5225_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5225_onTap_activeActionGroupIndex = -1;
		$("#obj5225").trigger("obj5225_onTap_ended");
		
		return;
	}
	window.obj5225_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5225 
playAnimation_5387();
function playAnimation_5387() {
	var targetObjectId = "#obj5225";
	var targetObject = $(targetObjectId)[0];
	window.obj5225_onTap_runningActionsCount = obj5225_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5225_onTap_runningActionsCount = window.obj5225_onTap_runningActionsCount - 1;
if (window.obj5225_onTap_runningActionsCount == 0) {
	obj5225_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5225 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5225;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5225.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5225").one("obj5225_animation_ended",function(event) {
		    window.obj5225_onTap_runningActionsCount = window.obj5225_onTap_runningActionsCount - 1;
if (window.obj5225_onTap_runningActionsCount == 0) {
	obj5225_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5225_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5225_onTap_activeActionGroupIndex = -1;
		$("#obj5225").trigger("obj5225_onTap_ended");
		
		return;
	}
	window.obj5225_onTap_activeActionGroupIndex = 1;
	





















};
obj5249_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5249_onTap_activeActionGroupIndex = -1;
		$("#obj5249").trigger("obj5249_onTap_ended");
		
		return;
	}
	window.obj5249_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5249 
playAnimation_5389();
function playAnimation_5389() {
	var targetObjectId = "#obj5249";
	var targetObject = $(targetObjectId)[0];
	window.obj5249_onTap_runningActionsCount = obj5249_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;
if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5249 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5249;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5249.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5249").one("obj5249_animation_ended",function(event) {
		    window.obj5249_onTap_runningActionsCount = window.obj5249_onTap_runningActionsCount - 1;
if (window.obj5249_onTap_runningActionsCount == 0) {
	obj5249_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5249_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5249_onTap_activeActionGroupIndex = -1;
		$("#obj5249").trigger("obj5249_onTap_ended");
		
		return;
	}
	window.obj5249_onTap_activeActionGroupIndex = 1;
	





















};
obj5245_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5245_onTap_activeActionGroupIndex = -1;
		$("#obj5245").trigger("obj5245_onTap_ended");
		
		return;
	}
	window.obj5245_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5245 
playAnimation_5382();
function playAnimation_5382() {
	var targetObjectId = "#obj5245";
	var targetObject = $(targetObjectId)[0];
	window.obj5245_onTap_runningActionsCount = obj5245_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5245_onTap_runningActionsCount = window.obj5245_onTap_runningActionsCount - 1;
if (window.obj5245_onTap_runningActionsCount == 0) {
	obj5245_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5245 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5245;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5245.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5245").one("obj5245_animation_ended",function(event) {
		    window.obj5245_onTap_runningActionsCount = window.obj5245_onTap_runningActionsCount - 1;
if (window.obj5245_onTap_runningActionsCount == 0) {
	obj5245_onTap_actionGroup1();
}
		});
	}
 }












//	action: Run JavaScript
runjs_5381();
function runjs_5381() {
	window.obj5245_onTap_runningActionsCount = obj5245_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5245"));
	setTimeout(function() {
		window.obj5245_onTap_runningActionsCount = window.obj5245_onTap_runningActionsCount - 1;
if (window.obj5245_onTap_runningActionsCount == 0) {
	obj5245_onTap_actionGroup1();
}
	}, 1);
}






};
obj5245_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5245_onTap_activeActionGroupIndex = -1;
		$("#obj5245").trigger("obj5245_onTap_ended");
		
		return;
	}
	window.obj5245_onTap_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj5384 
incrementCounter_5383();
function incrementCounter_5383() {
	window.obj5245_onTap_runningActionsCount = obj5245_onTap_runningActionsCount + 1;

	var oldValue = obj5384_counterValue;
	obj5384_counterValue = obj5384_counterValue + 1;
	if (! obj5384_counterCanExceedTargetValue && obj5384_counterValue > obj5384_counterTargetValue) {
		obj5384_counterValue = obj5384_counterTargetValue;
	}
	if (oldValue != obj5384_counterValue) {
		$("#obj5384").trigger('SCEventCounterValueChange');
		$("#obj5384").trigger('SCEventCounterIncrease');
		if (obj5384_counterValue == obj5384_counterTargetValue)
			$("#obj5384").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5245_onTap_runningActionsCount = window.obj5245_onTap_runningActionsCount - 1;
if (window.obj5245_onTap_runningActionsCount == 0) {
	obj5245_onTap_actionGroup2();
} }, 1);
}





};
obj5245_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5245_onTap_activeActionGroupIndex = -1;
		$("#obj5245").trigger("obj5245_onTap_ended");
		
		return;
	}
	window.obj5245_onTap_activeActionGroupIndex = 2;
	





















};
obj5261_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5261_onTap_activeActionGroupIndex = -1;
		$("#obj5261").trigger("obj5261_onTap_ended");
		
		return;
	}
	window.obj5261_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5261 
playAnimation_5376();
function playAnimation_5376() {
	var targetObjectId = "#obj5261";
	var targetObject = $(targetObjectId)[0];
	window.obj5261_onTap_runningActionsCount = obj5261_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5261_onTap_runningActionsCount = window.obj5261_onTap_runningActionsCount - 1;
if (window.obj5261_onTap_runningActionsCount == 0) {
	obj5261_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5261 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5261;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5261.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5261").one("obj5261_animation_ended",function(event) {
		    window.obj5261_onTap_runningActionsCount = window.obj5261_onTap_runningActionsCount - 1;
if (window.obj5261_onTap_runningActionsCount == 0) {
	obj5261_onTap_actionGroup1();
}
		});
	}
 }












//	action: Run JavaScript
runjs_5375();
function runjs_5375() {
	window.obj5261_onTap_runningActionsCount = obj5261_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5261"));
	setTimeout(function() {
		window.obj5261_onTap_runningActionsCount = window.obj5261_onTap_runningActionsCount - 1;
if (window.obj5261_onTap_runningActionsCount == 0) {
	obj5261_onTap_actionGroup1();
}
	}, 1);
}






};
obj5261_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5261_onTap_activeActionGroupIndex = -1;
		$("#obj5261").trigger("obj5261_onTap_ended");
		
		return;
	}
	window.obj5261_onTap_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj5384 
incrementCounter_5377();
function incrementCounter_5377() {
	window.obj5261_onTap_runningActionsCount = obj5261_onTap_runningActionsCount + 1;

	var oldValue = obj5384_counterValue;
	obj5384_counterValue = obj5384_counterValue + 1;
	if (! obj5384_counterCanExceedTargetValue && obj5384_counterValue > obj5384_counterTargetValue) {
		obj5384_counterValue = obj5384_counterTargetValue;
	}
	if (oldValue != obj5384_counterValue) {
		$("#obj5384").trigger('SCEventCounterValueChange');
		$("#obj5384").trigger('SCEventCounterIncrease');
		if (obj5384_counterValue == obj5384_counterTargetValue)
			$("#obj5384").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5261_onTap_runningActionsCount = window.obj5261_onTap_runningActionsCount - 1;
if (window.obj5261_onTap_runningActionsCount == 0) {
	obj5261_onTap_actionGroup2();
} }, 1);
}





};
obj5261_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5261_onTap_activeActionGroupIndex = -1;
		$("#obj5261").trigger("obj5261_onTap_ended");
		
		return;
	}
	window.obj5261_onTap_activeActionGroupIndex = 2;
	





















};
obj5265_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5265_onTap_activeActionGroupIndex = -1;
		$("#obj5265").trigger("obj5265_onTap_ended");
		
		return;
	}
	window.obj5265_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5265 
playAnimation_5388();
function playAnimation_5388() {
	var targetObjectId = "#obj5265";
	var targetObject = $(targetObjectId)[0];
	window.obj5265_onTap_runningActionsCount = obj5265_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5265_onTap_runningActionsCount = window.obj5265_onTap_runningActionsCount - 1;
if (window.obj5265_onTap_runningActionsCount == 0) {
	obj5265_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5265 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5265;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5265.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5265").one("obj5265_animation_ended",function(event) {
		    window.obj5265_onTap_runningActionsCount = window.obj5265_onTap_runningActionsCount - 1;
if (window.obj5265_onTap_runningActionsCount == 0) {
	obj5265_onTap_actionGroup1();
}
		});
	}
 }


















};
obj5265_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5265_onTap_activeActionGroupIndex = -1;
		$("#obj5265").trigger("obj5265_onTap_ended");
		
		return;
	}
	window.obj5265_onTap_activeActionGroupIndex = 1;
	





















};
obj5277_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5277_onTap_activeActionGroupIndex = -1;
		$("#obj5277").trigger("obj5277_onTap_ended");
		
		return;
	}
	window.obj5277_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj5277 
playAnimation_5379();
function playAnimation_5379() {
	var targetObjectId = "#obj5277";
	var targetObject = $(targetObjectId)[0];
	window.obj5277_onTap_runningActionsCount = obj5277_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj5277_onTap_runningActionsCount = window.obj5277_onTap_runningActionsCount - 1;
if (window.obj5277_onTap_runningActionsCount == 0) {
	obj5277_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5277 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5277;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj5277.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj5277").one("obj5277_animation_ended",function(event) {
		    window.obj5277_onTap_runningActionsCount = window.obj5277_onTap_runningActionsCount - 1;
if (window.obj5277_onTap_runningActionsCount == 0) {
	obj5277_onTap_actionGroup1();
}
		});
	}
 }












//	action: Run JavaScript
runjs_5378();
function runjs_5378() {
	window.obj5277_onTap_runningActionsCount = obj5277_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj5277"));
	setTimeout(function() {
		window.obj5277_onTap_runningActionsCount = window.obj5277_onTap_runningActionsCount - 1;
if (window.obj5277_onTap_runningActionsCount == 0) {
	obj5277_onTap_actionGroup1();
}
	}, 1);
}






};
obj5277_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5277_onTap_activeActionGroupIndex = -1;
		$("#obj5277").trigger("obj5277_onTap_ended");
		
		return;
	}
	window.obj5277_onTap_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj5384 
incrementCounter_5380();
function incrementCounter_5380() {
	window.obj5277_onTap_runningActionsCount = obj5277_onTap_runningActionsCount + 1;

	var oldValue = obj5384_counterValue;
	obj5384_counterValue = obj5384_counterValue + 1;
	if (! obj5384_counterCanExceedTargetValue && obj5384_counterValue > obj5384_counterTargetValue) {
		obj5384_counterValue = obj5384_counterTargetValue;
	}
	if (oldValue != obj5384_counterValue) {
		$("#obj5384").trigger('SCEventCounterValueChange');
		$("#obj5384").trigger('SCEventCounterIncrease');
		if (obj5384_counterValue == obj5384_counterTargetValue)
			$("#obj5384").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj5277_onTap_runningActionsCount = window.obj5277_onTap_runningActionsCount - 1;
if (window.obj5277_onTap_runningActionsCount == 0) {
	obj5277_onTap_actionGroup2();
} }, 1);
}





};
obj5277_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5277_onTap_activeActionGroupIndex = -1;
		$("#obj5277").trigger("obj5277_onTap_ended");
		
		return;
	}
	window.obj5277_onTap_activeActionGroupIndex = 2;
	





















};
obj5384_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5384_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5384").trigger("obj5384_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj5384_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_5433();
function wait_5433() {
	window.obj5384_SCEventCounterReachedTargetValue_runningActionsCount = obj5384_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj5384_SCEventCounterReachedTargetValue_runningActionsCount = window.obj5384_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj5384_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj5384_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}












};
obj5384_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5384_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5384").trigger("obj5384_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj5384_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page48
goToPage_5570();
function goToPage_5570() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../48/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(48))},200);
	}
}





















};
obj5384_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5384_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj5384").trigger("obj5384_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj5384_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj5560_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5560_onLoad_activeActionGroupIndex = -1;
		$("#obj5560").trigger("obj5560_onLoad_ended");
		
		return;
	}
	window.obj5560_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj5560 
hide_5563();
function hide_5563() {
	window.obj5560_onLoad_runningActionsCount = obj5560_onLoad_runningActionsCount + 1;
	$("#obj5560").fadeOut(200, function() {
			setTimeout(function() {
				window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj5560_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5560_onLoad_activeActionGroupIndex = -1;
		$("#obj5560").trigger("obj5560_onLoad_ended");
		
		return;
	}
	window.obj5560_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj5560 
show_5564();
function show_5564() {
	window.obj5560_onLoad_runningActionsCount = obj5560_onLoad_runningActionsCount + 1;
	$("#obj5560").fadeIn(200, function() {
			setTimeout(function() {
				window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup2();
}
				$("#obj5560").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj5560_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5560_onLoad_activeActionGroupIndex = -1;
		$("#obj5560").trigger("obj5560_onLoad_ended");
		
		return;
	}
	window.obj5560_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj5560_onLoad();
function loop_obj5560_onLoad() {
	var loopCount = 1;
	window.obj5560_onLoad_loopCount = window.obj5560_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5560_onLoad_loopCount > loopCount) {
		window.obj5560_onLoad_loopCount = 0
		obj5560_onLoad_actionGroup3();
	} else {
		obj5560_onLoad_actionGroup0();
	}
}













};
obj5560_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5560_onLoad_activeActionGroupIndex = -1;
		$("#obj5560").trigger("obj5560_onLoad_ended");
		
		return;
	}
	window.obj5560_onLoad_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj5560 
hide_5566();
function hide_5566() {
	window.obj5560_onLoad_runningActionsCount = obj5560_onLoad_runningActionsCount + 1;
	$("#obj5560").fadeOut(0, function() {
			setTimeout(function() {
				window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj5560_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5560_onLoad_activeActionGroupIndex = -1;
		$("#obj5560").trigger("obj5560_onLoad_ended");
		
		return;
	}
	window.obj5560_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj13051 
show_5567();
function show_5567() {
	window.obj5560_onLoad_runningActionsCount = obj5560_onLoad_runningActionsCount + 1;
	$("#obj13051").fadeIn(500, function() {
			setTimeout(function() {
				window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup5();
}
				$("#obj13051").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj5560_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5560_onLoad_activeActionGroupIndex = -1;
		$("#obj5560").trigger("obj5560_onLoad_ended");
		
		return;
	}
	window.obj5560_onLoad_activeActionGroupIndex = 5;
	





















};
obj13051_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13051_onShow_activeActionGroupIndex = -1;
		$("#obj13051").trigger("obj13051_onShow_ended");
		
		return;
	}
	window.obj13051_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_13054();
function wait_13054() {
	window.obj13051_onShow_runningActionsCount = obj13051_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj13051_onShow_runningActionsCount = window.obj13051_onShow_runningActionsCount - 1;
if (window.obj13051_onShow_runningActionsCount == 0) {
	obj13051_onShow_actionGroup1();
}
	}, 2000);
}












};
obj13051_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13051_onShow_activeActionGroupIndex = -1;
		$("#obj13051").trigger("obj13051_onShow_ended");
		
		return;
	}
	window.obj13051_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj13051 
hide_13055();
function hide_13055() {
	window.obj13051_onShow_runningActionsCount = obj13051_onShow_runningActionsCount + 1;
	$("#obj13051").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj13051_onShow_runningActionsCount = window.obj13051_onShow_runningActionsCount - 1;
if (window.obj13051_onShow_runningActionsCount == 0) {
	obj13051_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj13051_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13051_onShow_activeActionGroupIndex = -1;
		$("#obj13051").trigger("obj13051_onShow_ended");
		
		return;
	}
	window.obj13051_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj5233: Event Touch Down
 *
 */
 
$("#obj5233").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5233_onTap_activeActionGroupIndex != -1) return;
var obj5233_onTap_runningActionsCount = 0;
var obj5233_onTap_loopCount = 0;
obj5233_onTap_actionGroup0();
});







/*
 *
 *   obj5225: Event Touch Down
 *
 */
 
$("#obj5225").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5225_onTap_activeActionGroupIndex != -1) return;
var obj5225_onTap_runningActionsCount = 0;
var obj5225_onTap_loopCount = 0;
obj5225_onTap_actionGroup0();
});







/*
 *
 *   obj5249: Event Touch Down
 *
 */
 
$("#obj5249").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5249_onTap_activeActionGroupIndex != -1) return;
var obj5249_onTap_runningActionsCount = 0;
var obj5249_onTap_loopCount = 0;
obj5249_onTap_actionGroup0();
});







/*
 *
 *   obj5245: Event Touch Down
 *
 */
 
$("#obj5245").one(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5245_onTap_activeActionGroupIndex != -1) return;
var obj5245_onTap_runningActionsCount = 0;
var obj5245_onTap_loopCount = 0;
obj5245_onTap_actionGroup0();
});







/*
 *
 *   obj5261: Event Touch Down
 *
 */
 
$("#obj5261").one(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5261_onTap_activeActionGroupIndex != -1) return;
var obj5261_onTap_runningActionsCount = 0;
var obj5261_onTap_loopCount = 0;
obj5261_onTap_actionGroup0();
});







/*
 *
 *   obj5265: Event Touch Down
 *
 */
 
$("#obj5265").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5265_onTap_activeActionGroupIndex != -1) return;
var obj5265_onTap_runningActionsCount = 0;
var obj5265_onTap_loopCount = 0;
obj5265_onTap_actionGroup0();
});







/*
 *
 *   obj5277: Event Touch Down
 *
 */
 
$("#obj5277").one(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5277_onTap_activeActionGroupIndex != -1) return;
var obj5277_onTap_runningActionsCount = 0;
var obj5277_onTap_loopCount = 0;
obj5277_onTap_actionGroup0();
});










/*
 *
 *   obj5384: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj5384").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj5384_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj5384_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj5384_SCEventCounterReachedTargetValue_loopCount = 0;
obj5384_SCEventCounterReachedTargetValue_actionGroup0();
});












/*
 *
 *   obj5560: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5560_onLoad_activeActionGroupIndex != -1) return;
var obj5560_onLoad_runningActionsCount = 0;
var obj5560_onLoad_loopCount = 0;
obj5560_onLoad_actionGroup0();
});






/*
 *
 *   obj13051: Event Show
 *
 */
 
$("#obj13051").bind('SCEventShow', function(event) {
	if (window.obj13051_onShow_activeActionGroupIndex != -1) return;
var obj13051_onShow_runningActionsCount = 0;
var obj13051_onShow_loopCount = 0;
obj13051_onShow_actionGroup0();
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
	
$("#obj5223").trigger('SCEventShow');
$("#obj5233").trigger('SCEventShow');
$("#obj5225").trigger('SCEventShow');
$("#obj5249").trigger('SCEventShow');
$("#obj5245").trigger('SCEventShow');
$("#obj5261").trigger('SCEventShow');
$("#obj5265").trigger('SCEventShow');
$("#obj5277").trigger('SCEventShow');
$("#obj5568").trigger('SCEventShow');
$("#obj5560").trigger('SCEventShow');
$("#obj13051").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});