pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 15578;
pubcoder.page.title = "38";
pubcoder.page.number = 38;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj15594_animation_count = 0;
var obj15601_animation_count = 0;
var obj15612_animation_count = 0;
var obj15631_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj15591_onTap_activeActionGroupIndex = -1;
var obj15591_onTap_runningActionsCount = 0;
var obj15591_onTap_loopCount = 0;
var obj15594_onShow_activeActionGroupIndex = -1;
var obj15594_onShow_runningActionsCount = 0;
var obj15594_onShow_loopCount = 0;
var obj15601_onShow_activeActionGroupIndex = -1;
var obj15601_onShow_runningActionsCount = 0;
var obj15601_onShow_loopCount = 0;
var obj15608_onTap_activeActionGroupIndex = -1;
var obj15608_onTap_runningActionsCount = 0;
var obj15608_onTap_loopCount = 0;
var obj15612_onShow_activeActionGroupIndex = -1;
var obj15612_onShow_runningActionsCount = 0;
var obj15612_onShow_loopCount = 0;
var obj15619_onTap_activeActionGroupIndex = -1;
var obj15619_onTap_runningActionsCount = 0;
var obj15619_onTap_loopCount = 0;
var obj15623_onTap_activeActionGroupIndex = -1;
var obj15623_onTap_runningActionsCount = 0;
var obj15623_onTap_loopCount = 0;
var obj15627_onTap_activeActionGroupIndex = -1;
var obj15627_onTap_runningActionsCount = 0;
var obj15627_onTap_loopCount = 0;
var obj15631_onShow_activeActionGroupIndex = -1;
var obj15631_onShow_runningActionsCount = 0;
var obj15631_onShow_loopCount = 0;
var obj15638_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15638_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15638_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15642_onShow_activeActionGroupIndex = -1;
var obj15642_onShow_runningActionsCount = 0;
var obj15642_onShow_loopCount = 0;
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
 
var obj15638_counterValue = 0;
var obj15638_counterTargetValue = 4;
var obj15638_counterCanExceedTargetValue = false;
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
	
initAnimation_15594();
function initAnimation_15594()
{
        var targetObjectId = "#obj15594";
        var widthSCAnimationObject = 384;
        var heightSCAnimationObject = 394;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj15594 = $("#")[0];
        window.hasAudioTrack_obj15594 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj15594_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj15594 = $(targetObjectId).spritespin("api");
}
initAnimation_15601();
function initAnimation_15601()
{
        var targetObjectId = "#obj15601";
        var widthSCAnimationObject = 394;
        var heightSCAnimationObject = 307;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj15601 = $("#")[0];
        window.hasAudioTrack_obj15601 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj15601_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj15601 = $(targetObjectId).spritespin("api");
}
initAnimation_15612();
function initAnimation_15612()
{
        var targetObjectId = "#obj15612";
        var widthSCAnimationObject = 262;
        var heightSCAnimationObject = 410;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj15612 = $("#")[0];
        window.hasAudioTrack_obj15612 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj15612_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj15612 = $(targetObjectId).spritespin("api");
}
initAnimation_15631();
function initAnimation_15631()
{
        var targetObjectId = "#obj15631";
        var widthSCAnimationObject = 286;
        var heightSCAnimationObject = 253;
		var framesPerSecond = 4;
		var howManyLoops = 2;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj15631 = $("#")[0];
        window.hasAudioTrack_obj15631 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj15631_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj15631 = $(targetObjectId).spritespin("api");
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
		
obj15591_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15591_onTap_activeActionGroupIndex = -1;
		$("#obj15591").trigger("obj15591_onTap_ended");
		
		return;
	}
	window.obj15591_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15642 
show_15593();
function show_15593() {
	window.obj15591_onTap_runningActionsCount = obj15591_onTap_runningActionsCount + 1;
	$("#obj15642").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15591_onTap_runningActionsCount = window.obj15591_onTap_runningActionsCount - 1;
if (window.obj15591_onTap_runningActionsCount == 0) {
	obj15591_onTap_actionGroup1();
}
				$("#obj15642").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15591_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15591_onTap_activeActionGroupIndex = -1;
		$("#obj15591").trigger("obj15591_onTap_ended");
		
		return;
	}
	window.obj15591_onTap_activeActionGroupIndex = 1;
	





















};
obj15594_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15594_onShow_activeActionGroupIndex = -1;
		$("#obj15594").trigger("obj15594_onShow_ended");
		
		return;
	}
	window.obj15594_onShow_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj15594 
playAnimation_15599();
function playAnimation_15599() {
	var targetObjectId = "#obj15594";
	var targetObject = $(targetObjectId)[0];
	window.obj15594_onShow_runningActionsCount = obj15594_onShow_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj15594_onShow_runningActionsCount = window.obj15594_onShow_runningActionsCount - 1;
if (window.obj15594_onShow_runningActionsCount == 0) {
	obj15594_onShow_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj15594 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj15594;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj15594.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj15594").one("obj15594_animation_ended",function(event) {
		    window.obj15594_onShow_runningActionsCount = window.obj15594_onShow_runningActionsCount - 1;
if (window.obj15594_onShow_runningActionsCount == 0) {
	obj15594_onShow_actionGroup1();
}
		});
	}
 }


















};
obj15594_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15594_onShow_activeActionGroupIndex = -1;
		$("#obj15594").trigger("obj15594_onShow_ended");
		
		return;
	}
	window.obj15594_onShow_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj15638 
incrementCounter_15600();
function incrementCounter_15600() {
	window.obj15594_onShow_runningActionsCount = obj15594_onShow_runningActionsCount + 1;

	var oldValue = obj15638_counterValue;
	obj15638_counterValue = obj15638_counterValue + 1;
	if (! obj15638_counterCanExceedTargetValue && obj15638_counterValue > obj15638_counterTargetValue) {
		obj15638_counterValue = obj15638_counterTargetValue;
	}
	if (oldValue != obj15638_counterValue) {
		$("#obj15638").trigger('SCEventCounterValueChange');
		$("#obj15638").trigger('SCEventCounterIncrease');
		if (obj15638_counterValue == obj15638_counterTargetValue)
			$("#obj15638").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15594_onShow_runningActionsCount = window.obj15594_onShow_runningActionsCount - 1;
if (window.obj15594_onShow_runningActionsCount == 0) {
	obj15594_onShow_actionGroup2();
} }, 1);
}





};
obj15594_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15594_onShow_activeActionGroupIndex = -1;
		$("#obj15594").trigger("obj15594_onShow_ended");
		
		return;
	}
	window.obj15594_onShow_activeActionGroupIndex = 2;
	





















};
obj15601_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15601_onShow_activeActionGroupIndex = -1;
		$("#obj15601").trigger("obj15601_onShow_ended");
		
		return;
	}
	window.obj15601_onShow_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj15601 
playAnimation_15606();
function playAnimation_15606() {
	var targetObjectId = "#obj15601";
	var targetObject = $(targetObjectId)[0];
	window.obj15601_onShow_runningActionsCount = obj15601_onShow_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj15601_onShow_runningActionsCount = window.obj15601_onShow_runningActionsCount - 1;
if (window.obj15601_onShow_runningActionsCount == 0) {
	obj15601_onShow_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj15601 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj15601;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj15601.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj15601").one("obj15601_animation_ended",function(event) {
		    window.obj15601_onShow_runningActionsCount = window.obj15601_onShow_runningActionsCount - 1;
if (window.obj15601_onShow_runningActionsCount == 0) {
	obj15601_onShow_actionGroup1();
}
		});
	}
 }


















};
obj15601_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15601_onShow_activeActionGroupIndex = -1;
		$("#obj15601").trigger("obj15601_onShow_ended");
		
		return;
	}
	window.obj15601_onShow_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj15638 
incrementCounter_15607();
function incrementCounter_15607() {
	window.obj15601_onShow_runningActionsCount = obj15601_onShow_runningActionsCount + 1;

	var oldValue = obj15638_counterValue;
	obj15638_counterValue = obj15638_counterValue + 1;
	if (! obj15638_counterCanExceedTargetValue && obj15638_counterValue > obj15638_counterTargetValue) {
		obj15638_counterValue = obj15638_counterTargetValue;
	}
	if (oldValue != obj15638_counterValue) {
		$("#obj15638").trigger('SCEventCounterValueChange');
		$("#obj15638").trigger('SCEventCounterIncrease');
		if (obj15638_counterValue == obj15638_counterTargetValue)
			$("#obj15638").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15601_onShow_runningActionsCount = window.obj15601_onShow_runningActionsCount - 1;
if (window.obj15601_onShow_runningActionsCount == 0) {
	obj15601_onShow_actionGroup2();
} }, 1);
}





};
obj15601_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15601_onShow_activeActionGroupIndex = -1;
		$("#obj15601").trigger("obj15601_onShow_ended");
		
		return;
	}
	window.obj15601_onShow_activeActionGroupIndex = 2;
	





















};
obj15608_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15608_onTap_activeActionGroupIndex = -1;
		$("#obj15608").trigger("obj15608_onTap_ended");
		
		return;
	}
	window.obj15608_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15608 
hide_15610();
function hide_15610() {
	window.obj15608_onTap_runningActionsCount = obj15608_onTap_runningActionsCount + 1;
	$("#obj15608").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15608_onTap_runningActionsCount = window.obj15608_onTap_runningActionsCount - 1;
if (window.obj15608_onTap_runningActionsCount == 0) {
	obj15608_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15608_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15608_onTap_activeActionGroupIndex = -1;
		$("#obj15608").trigger("obj15608_onTap_ended");
		
		return;
	}
	window.obj15608_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15601 
show_15611();
function show_15611() {
	window.obj15608_onTap_runningActionsCount = obj15608_onTap_runningActionsCount + 1;
	$("#obj15601").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15608_onTap_runningActionsCount = window.obj15608_onTap_runningActionsCount - 1;
if (window.obj15608_onTap_runningActionsCount == 0) {
	obj15608_onTap_actionGroup2();
}
				$("#obj15601").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15608_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15608_onTap_activeActionGroupIndex = -1;
		$("#obj15608").trigger("obj15608_onTap_ended");
		
		return;
	}
	window.obj15608_onTap_activeActionGroupIndex = 2;
	





















};
obj15612_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15612_onShow_activeActionGroupIndex = -1;
		$("#obj15612").trigger("obj15612_onShow_ended");
		
		return;
	}
	window.obj15612_onShow_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj15612 
playAnimation_15617();
function playAnimation_15617() {
	var targetObjectId = "#obj15612";
	var targetObject = $(targetObjectId)[0];
	window.obj15612_onShow_runningActionsCount = obj15612_onShow_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj15612_onShow_runningActionsCount = window.obj15612_onShow_runningActionsCount - 1;
if (window.obj15612_onShow_runningActionsCount == 0) {
	obj15612_onShow_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj15612 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj15612;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj15612.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj15612").one("obj15612_animation_ended",function(event) {
		    window.obj15612_onShow_runningActionsCount = window.obj15612_onShow_runningActionsCount - 1;
if (window.obj15612_onShow_runningActionsCount == 0) {
	obj15612_onShow_actionGroup1();
}
		});
	}
 }


















};
obj15612_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15612_onShow_activeActionGroupIndex = -1;
		$("#obj15612").trigger("obj15612_onShow_ended");
		
		return;
	}
	window.obj15612_onShow_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj15638 
incrementCounter_15618();
function incrementCounter_15618() {
	window.obj15612_onShow_runningActionsCount = obj15612_onShow_runningActionsCount + 1;

	var oldValue = obj15638_counterValue;
	obj15638_counterValue = obj15638_counterValue + 1;
	if (! obj15638_counterCanExceedTargetValue && obj15638_counterValue > obj15638_counterTargetValue) {
		obj15638_counterValue = obj15638_counterTargetValue;
	}
	if (oldValue != obj15638_counterValue) {
		$("#obj15638").trigger('SCEventCounterValueChange');
		$("#obj15638").trigger('SCEventCounterIncrease');
		if (obj15638_counterValue == obj15638_counterTargetValue)
			$("#obj15638").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15612_onShow_runningActionsCount = window.obj15612_onShow_runningActionsCount - 1;
if (window.obj15612_onShow_runningActionsCount == 0) {
	obj15612_onShow_actionGroup2();
} }, 1);
}





};
obj15612_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15612_onShow_activeActionGroupIndex = -1;
		$("#obj15612").trigger("obj15612_onShow_ended");
		
		return;
	}
	window.obj15612_onShow_activeActionGroupIndex = 2;
	





















};
obj15619_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15619_onTap_activeActionGroupIndex = -1;
		$("#obj15619").trigger("obj15619_onTap_ended");
		
		return;
	}
	window.obj15619_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15619 
hide_15621();
function hide_15621() {
	window.obj15619_onTap_runningActionsCount = obj15619_onTap_runningActionsCount + 1;
	$("#obj15619").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15619_onTap_runningActionsCount = window.obj15619_onTap_runningActionsCount - 1;
if (window.obj15619_onTap_runningActionsCount == 0) {
	obj15619_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15619_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15619_onTap_activeActionGroupIndex = -1;
		$("#obj15619").trigger("obj15619_onTap_ended");
		
		return;
	}
	window.obj15619_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15594 
show_15622();
function show_15622() {
	window.obj15619_onTap_runningActionsCount = obj15619_onTap_runningActionsCount + 1;
	$("#obj15594").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15619_onTap_runningActionsCount = window.obj15619_onTap_runningActionsCount - 1;
if (window.obj15619_onTap_runningActionsCount == 0) {
	obj15619_onTap_actionGroup2();
}
				$("#obj15594").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15619_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15619_onTap_activeActionGroupIndex = -1;
		$("#obj15619").trigger("obj15619_onTap_ended");
		
		return;
	}
	window.obj15619_onTap_activeActionGroupIndex = 2;
	





















};
obj15623_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15623_onTap_activeActionGroupIndex = -1;
		$("#obj15623").trigger("obj15623_onTap_ended");
		
		return;
	}
	window.obj15623_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15623 
hide_15625();
function hide_15625() {
	window.obj15623_onTap_runningActionsCount = obj15623_onTap_runningActionsCount + 1;
	$("#obj15623").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15623_onTap_runningActionsCount = window.obj15623_onTap_runningActionsCount - 1;
if (window.obj15623_onTap_runningActionsCount == 0) {
	obj15623_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15623_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15623_onTap_activeActionGroupIndex = -1;
		$("#obj15623").trigger("obj15623_onTap_ended");
		
		return;
	}
	window.obj15623_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15612 
show_15626();
function show_15626() {
	window.obj15623_onTap_runningActionsCount = obj15623_onTap_runningActionsCount + 1;
	$("#obj15612").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15623_onTap_runningActionsCount = window.obj15623_onTap_runningActionsCount - 1;
if (window.obj15623_onTap_runningActionsCount == 0) {
	obj15623_onTap_actionGroup2();
}
				$("#obj15612").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15623_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15623_onTap_activeActionGroupIndex = -1;
		$("#obj15623").trigger("obj15623_onTap_ended");
		
		return;
	}
	window.obj15623_onTap_activeActionGroupIndex = 2;
	





















};
obj15627_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15627_onTap_activeActionGroupIndex = -1;
		$("#obj15627").trigger("obj15627_onTap_ended");
		
		return;
	}
	window.obj15627_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15627 
hide_15629();
function hide_15629() {
	window.obj15627_onTap_runningActionsCount = obj15627_onTap_runningActionsCount + 1;
	$("#obj15627").fadeOut(500, function() {
			setTimeout(function() {
				window.obj15627_onTap_runningActionsCount = window.obj15627_onTap_runningActionsCount - 1;
if (window.obj15627_onTap_runningActionsCount == 0) {
	obj15627_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15627_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15627_onTap_activeActionGroupIndex = -1;
		$("#obj15627").trigger("obj15627_onTap_ended");
		
		return;
	}
	window.obj15627_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15631 
show_15630();
function show_15630() {
	window.obj15627_onTap_runningActionsCount = obj15627_onTap_runningActionsCount + 1;
	$("#obj15631").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15627_onTap_runningActionsCount = window.obj15627_onTap_runningActionsCount - 1;
if (window.obj15627_onTap_runningActionsCount == 0) {
	obj15627_onTap_actionGroup2();
}
				$("#obj15631").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15627_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15627_onTap_activeActionGroupIndex = -1;
		$("#obj15627").trigger("obj15627_onTap_ended");
		
		return;
	}
	window.obj15627_onTap_activeActionGroupIndex = 2;
	





















};
obj15631_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15631_onShow_activeActionGroupIndex = -1;
		$("#obj15631").trigger("obj15631_onShow_ended");
		
		return;
	}
	window.obj15631_onShow_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj15631 
playAnimation_15636();
function playAnimation_15636() {
	var targetObjectId = "#obj15631";
	var targetObject = $(targetObjectId)[0];
	window.obj15631_onShow_runningActionsCount = obj15631_onShow_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj15631_onShow_runningActionsCount = window.obj15631_onShow_runningActionsCount - 1;
if (window.obj15631_onShow_runningActionsCount == 0) {
	obj15631_onShow_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj15631 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj15631;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj15631.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj15631").one("obj15631_animation_ended",function(event) {
		    window.obj15631_onShow_runningActionsCount = window.obj15631_onShow_runningActionsCount - 1;
if (window.obj15631_onShow_runningActionsCount == 0) {
	obj15631_onShow_actionGroup1();
}
		});
	}
 }


















};
obj15631_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15631_onShow_activeActionGroupIndex = -1;
		$("#obj15631").trigger("obj15631_onShow_ended");
		
		return;
	}
	window.obj15631_onShow_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj15638 
incrementCounter_15637();
function incrementCounter_15637() {
	window.obj15631_onShow_runningActionsCount = obj15631_onShow_runningActionsCount + 1;

	var oldValue = obj15638_counterValue;
	obj15638_counterValue = obj15638_counterValue + 1;
	if (! obj15638_counterCanExceedTargetValue && obj15638_counterValue > obj15638_counterTargetValue) {
		obj15638_counterValue = obj15638_counterTargetValue;
	}
	if (oldValue != obj15638_counterValue) {
		$("#obj15638").trigger('SCEventCounterValueChange');
		$("#obj15638").trigger('SCEventCounterIncrease');
		if (obj15638_counterValue == obj15638_counterTargetValue)
			$("#obj15638").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj15631_onShow_runningActionsCount = window.obj15631_onShow_runningActionsCount - 1;
if (window.obj15631_onShow_runningActionsCount == 0) {
	obj15631_onShow_actionGroup2();
} }, 1);
}





};
obj15631_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15631_onShow_activeActionGroupIndex = -1;
		$("#obj15631").trigger("obj15631_onShow_ended");
		
		return;
	}
	window.obj15631_onShow_activeActionGroupIndex = 2;
	





















};
obj15638_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15638_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15638").trigger("obj15638_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15638_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_15640();
function wait_15640() {
	window.obj15638_SCEventCounterReachedTargetValue_runningActionsCount = obj15638_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15638_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15638_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj15638_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15638_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}












};
obj15638_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15638_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15638").trigger("obj15638_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15638_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page39
goToPage_15641();
function goToPage_15641() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../39/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(39))},200);
	}
}





















};
obj15638_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15638_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15638").trigger("obj15638_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj15638_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj15642_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15642_onShow_activeActionGroupIndex = -1;
		$("#obj15642").trigger("obj15642_onShow_ended");
		
		return;
	}
	window.obj15642_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_15645();
function wait_15645() {
	window.obj15642_onShow_runningActionsCount = obj15642_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15642_onShow_runningActionsCount = window.obj15642_onShow_runningActionsCount - 1;
if (window.obj15642_onShow_runningActionsCount == 0) {
	obj15642_onShow_actionGroup1();
}
	}, 500);
}












};
obj15642_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15642_onShow_activeActionGroupIndex = -1;
		$("#obj15642").trigger("obj15642_onShow_ended");
		
		return;
	}
	window.obj15642_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj15642 
hide_15646();
function hide_15646() {
	window.obj15642_onShow_runningActionsCount = obj15642_onShow_runningActionsCount + 1;
	$("#obj15642").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15642_onShow_runningActionsCount = window.obj15642_onShow_runningActionsCount - 1;
if (window.obj15642_onShow_runningActionsCount == 0) {
	obj15642_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj15642_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15642_onShow_activeActionGroupIndex = -1;
		$("#obj15642").trigger("obj15642_onShow_ended");
		
		return;
	}
	window.obj15642_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj15591: Event Touch Down
 *
 */
 
$("#obj15591").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15591_onTap_activeActionGroupIndex != -1) return;
var obj15591_onTap_runningActionsCount = 0;
var obj15591_onTap_loopCount = 0;
obj15591_onTap_actionGroup0();
});








/*
 *
 *   obj15594: Event Show
 *
 */
 
$("#obj15594").one('SCEventShow', function(event) {
	if (window.obj15594_onShow_activeActionGroupIndex != -1) return;
var obj15594_onShow_runningActionsCount = 0;
var obj15594_onShow_loopCount = 0;
obj15594_onShow_actionGroup0();
});







/*
 *
 *   obj15601: Event Show
 *
 */
 
$("#obj15601").one('SCEventShow', function(event) {
	if (window.obj15601_onShow_activeActionGroupIndex != -1) return;
var obj15601_onShow_runningActionsCount = 0;
var obj15601_onShow_loopCount = 0;
obj15601_onShow_actionGroup0();
});





/*
 *
 *   obj15608: Event Touch Down
 *
 */
 
$("#obj15608").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15608_onTap_activeActionGroupIndex != -1) return;
var obj15608_onTap_runningActionsCount = 0;
var obj15608_onTap_loopCount = 0;
obj15608_onTap_actionGroup0();
});








/*
 *
 *   obj15612: Event Show
 *
 */
 
$("#obj15612").one('SCEventShow', function(event) {
	if (window.obj15612_onShow_activeActionGroupIndex != -1) return;
var obj15612_onShow_runningActionsCount = 0;
var obj15612_onShow_loopCount = 0;
obj15612_onShow_actionGroup0();
});





/*
 *
 *   obj15619: Event Touch Down
 *
 */
 
$("#obj15619").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15619_onTap_activeActionGroupIndex != -1) return;
var obj15619_onTap_runningActionsCount = 0;
var obj15619_onTap_loopCount = 0;
obj15619_onTap_actionGroup0();
});







/*
 *
 *   obj15623: Event Touch Down
 *
 */
 
$("#obj15623").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15623_onTap_activeActionGroupIndex != -1) return;
var obj15623_onTap_runningActionsCount = 0;
var obj15623_onTap_loopCount = 0;
obj15623_onTap_actionGroup0();
});







/*
 *
 *   obj15627: Event Touch Down
 *
 */
 
$("#obj15627").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15627_onTap_activeActionGroupIndex != -1) return;
var obj15627_onTap_runningActionsCount = 0;
var obj15627_onTap_loopCount = 0;
obj15627_onTap_actionGroup0();
});








/*
 *
 *   obj15631: Event Show
 *
 */
 
$("#obj15631").one('SCEventShow', function(event) {
	if (window.obj15631_onShow_activeActionGroupIndex != -1) return;
var obj15631_onShow_runningActionsCount = 0;
var obj15631_onShow_loopCount = 0;
obj15631_onShow_actionGroup0();
});









/*
 *
 *   obj15638: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj15638").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15638_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj15638_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15638_SCEventCounterReachedTargetValue_loopCount = 0;
obj15638_SCEventCounterReachedTargetValue_actionGroup0();
});





/*
 *
 *   obj15642: Event Show
 *
 */
 
$("#obj15642").bind('SCEventShow', function(event) {
	if (window.obj15642_onShow_activeActionGroupIndex != -1) return;
var obj15642_onShow_runningActionsCount = 0;
var obj15642_onShow_loopCount = 0;
obj15642_onShow_actionGroup0();
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
	
$("#obj15579").trigger('SCEventShow');
$("#obj15581").trigger('SCEventShow');
$("#obj15583").trigger('SCEventShow');
$("#obj15585").trigger('SCEventShow');
$("#obj15587").trigger('SCEventShow');
$("#obj15589").trigger('SCEventShow');
$("#obj15591").trigger('SCEventShow');
$("#obj15608").trigger('SCEventShow');
$("#obj15619").trigger('SCEventShow');
$("#obj15623").trigger('SCEventShow');
$("#obj15627").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});