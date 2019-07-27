pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 7307;
pubcoder.page.title = "15";
pubcoder.page.number = 15;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj7371_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj11675_onTap_activeActionGroupIndex = -1;
var obj11675_onTap_runningActionsCount = 0;
var obj11675_onTap_loopCount = 0;
var obj7393_onTap_activeActionGroupIndex = -1;
var obj7393_onTap_runningActionsCount = 0;
var obj7393_onTap_loopCount = 0;
var obj7371_onLoad_activeActionGroupIndex = -1;
var obj7371_onLoad_runningActionsCount = 0;
var obj7371_onLoad_loopCount = 0;
var obj7398_onShow_activeActionGroupIndex = -1;
var obj7398_onShow_runningActionsCount = 0;
var obj7398_onShow_loopCount = 0;
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
	
initAnimation_7371();
function initAnimation_7371()
{
        var targetObjectId = "#obj7371";
        var widthSCAnimationObject = 360;
        var heightSCAnimationObject = 278;
		var framesPerSecond = 0.8;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj7371 = $("#")[0];
        window.hasAudioTrack_obj7371 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj7371_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj7371 = $(targetObjectId).spritespin("api");
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
		
obj11675_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11675_onTap_activeActionGroupIndex = -1;
		$("#obj11675").trigger("obj11675_onTap_ended");
		
		return;
	}
	window.obj11675_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj7398 
show_11677();
function show_11677() {
	window.obj11675_onTap_runningActionsCount = obj11675_onTap_runningActionsCount + 1;
	$("#obj7398").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11675_onTap_runningActionsCount = window.obj11675_onTap_runningActionsCount - 1;
if (window.obj11675_onTap_runningActionsCount == 0) {
	obj11675_onTap_actionGroup1();
}
				$("#obj7398").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11675_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11675_onTap_activeActionGroupIndex = -1;
		$("#obj11675").trigger("obj11675_onTap_ended");
		
		return;
	}
	window.obj11675_onTap_activeActionGroupIndex = 1;
	





















};
obj7393_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7393_onTap_activeActionGroupIndex = -1;
		$("#obj7393").trigger("obj7393_onTap_ended");
		
		return;
	}
	window.obj7393_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj7312 
show_10329();
function show_10329() {
	window.obj7393_onTap_runningActionsCount = obj7393_onTap_runningActionsCount + 1;
	$("#obj7312").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj7393_onTap_runningActionsCount = window.obj7393_onTap_runningActionsCount - 1;
if (window.obj7393_onTap_runningActionsCount == 0) {
	obj7393_onTap_actionGroup1();
}
				$("#obj7312").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj7393_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7393_onTap_activeActionGroupIndex = -1;
		$("#obj7393").trigger("obj7393_onTap_ended");
		
		return;
	}
	window.obj7393_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_7403();
function wait_7403() {
	window.obj7393_onTap_runningActionsCount = obj7393_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7393_onTap_runningActionsCount = window.obj7393_onTap_runningActionsCount - 1;
if (window.obj7393_onTap_runningActionsCount == 0) {
	obj7393_onTap_actionGroup2();
}
	}, 1000);
}












};
obj7393_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7393_onTap_activeActionGroupIndex = -1;
		$("#obj7393").trigger("obj7393_onTap_ended");
		
		return;
	}
	window.obj7393_onTap_activeActionGroupIndex = 2;
	
//	action: goToPage
//	target: page16
goToPage_7404();
function goToPage_7404() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../16/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(16))},200);
	}
}





















};
obj7393_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7393_onTap_activeActionGroupIndex = -1;
		$("#obj7393").trigger("obj7393_onTap_ended");
		
		return;
	}
	window.obj7393_onTap_activeActionGroupIndex = 3;
	





















};
obj7371_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7371_onLoad_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_onLoad_ended");
		
		return;
	}
	window.obj7371_onLoad_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj7371 
playAnimation_7384();
function playAnimation_7384() {
	var targetObjectId = "#obj7371";
	var targetObject = $(targetObjectId)[0];
	window.obj7371_onLoad_runningActionsCount = obj7371_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj7371_onLoad_runningActionsCount = window.obj7371_onLoad_runningActionsCount - 1;
if (window.obj7371_onLoad_runningActionsCount == 0) {
	obj7371_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj7371 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj7371;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj7371.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj7371").one("obj7371_animation_ended",function(event) {
		    window.obj7371_onLoad_runningActionsCount = window.obj7371_onLoad_runningActionsCount - 1;
if (window.obj7371_onLoad_runningActionsCount == 0) {
	obj7371_onLoad_actionGroup1();
}
		});
	}
 }


















};
obj7371_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7371_onLoad_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_onLoad_ended");
		
		return;
	}
	window.obj7371_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_7385();
function wait_7385() {
	window.obj7371_onLoad_runningActionsCount = obj7371_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7371_onLoad_runningActionsCount = window.obj7371_onLoad_runningActionsCount - 1;
if (window.obj7371_onLoad_runningActionsCount == 0) {
	obj7371_onLoad_actionGroup2();
}
	}, 1000);
}












};
obj7371_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7371_onLoad_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_onLoad_ended");
		
		return;
	}
	window.obj7371_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj7398 
show_7400();
function show_7400() {
	window.obj7371_onLoad_runningActionsCount = obj7371_onLoad_runningActionsCount + 1;
	$("#obj7398").fadeIn(0, function() {
			setTimeout(function() {
				window.obj7371_onLoad_runningActionsCount = window.obj7371_onLoad_runningActionsCount - 1;
if (window.obj7371_onLoad_runningActionsCount == 0) {
	obj7371_onLoad_actionGroup3();
}
				$("#obj7398").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj7371_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7371_onLoad_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_onLoad_ended");
		
		return;
	}
	window.obj7371_onLoad_activeActionGroupIndex = 3;
	








//	action: wait
wait_7401();
function wait_7401() {
	window.obj7371_onLoad_runningActionsCount = obj7371_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7371_onLoad_runningActionsCount = window.obj7371_onLoad_runningActionsCount - 1;
if (window.obj7371_onLoad_runningActionsCount == 0) {
	obj7371_onLoad_actionGroup4();
}
	}, 1000);
}












};
obj7371_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7371_onLoad_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_onLoad_ended");
		
		return;
	}
	window.obj7371_onLoad_activeActionGroupIndex = 4;
	
//	action: goToPage
//	target: page15
goToPage_7402();
function goToPage_7402() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../15/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(15))},200);
	}
}





















};
obj7371_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7371_onLoad_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_onLoad_ended");
		
		return;
	}
	window.obj7371_onLoad_activeActionGroupIndex = 5;
	





















};
obj7398_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7398_onShow_activeActionGroupIndex = -1;
		$("#obj7398").trigger("obj7398_onShow_ended");
		
		return;
	}
	window.obj7398_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_11679();
function wait_11679() {
	window.obj7398_onShow_runningActionsCount = obj7398_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7398_onShow_runningActionsCount = window.obj7398_onShow_runningActionsCount - 1;
if (window.obj7398_onShow_runningActionsCount == 0) {
	obj7398_onShow_actionGroup1();
}
	}, 1000);
}












};
obj7398_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7398_onShow_activeActionGroupIndex = -1;
		$("#obj7398").trigger("obj7398_onShow_ended");
		
		return;
	}
	window.obj7398_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj7398 
hide_11680();
function hide_11680() {
	window.obj7398_onShow_runningActionsCount = obj7398_onShow_runningActionsCount + 1;
	$("#obj7398").fadeOut(0, function() {
			setTimeout(function() {
				window.obj7398_onShow_runningActionsCount = window.obj7398_onShow_runningActionsCount - 1;
if (window.obj7398_onShow_runningActionsCount == 0) {
	obj7398_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj7398_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7398_onShow_activeActionGroupIndex = -1;
		$("#obj7398").trigger("obj7398_onShow_ended");
		
		return;
	}
	window.obj7398_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj11675: Event Touch Down
 *
 */
 
$("#obj11675").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj11675_onTap_activeActionGroupIndex != -1) return;
var obj11675_onTap_runningActionsCount = 0;
var obj11675_onTap_loopCount = 0;
obj11675_onTap_actionGroup0();
});







/*
 *
 *   obj7393: Event Touch Down
 *
 */
 
$("#obj7393").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7393_onTap_activeActionGroupIndex != -1) return;
var obj7393_onTap_runningActionsCount = 0;
var obj7393_onTap_loopCount = 0;
obj7393_onTap_actionGroup0();
});









/*
 *
 *   obj7371: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj7371_onLoad_activeActionGroupIndex != -1) return;
var obj7371_onLoad_runningActionsCount = 0;
var obj7371_onLoad_loopCount = 0;
obj7371_onLoad_actionGroup0();
});






/*
 *
 *   obj7398: Event Show
 *
 */
 
$("#obj7398").bind('SCEventShow', function(event) {
	if (window.obj7398_onShow_activeActionGroupIndex != -1) return;
var obj7398_onShow_runningActionsCount = 0;
var obj7398_onShow_loopCount = 0;
obj7398_onShow_actionGroup0();
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
	
$("#obj10327").trigger('SCEventShow');
$("#obj11675").trigger('SCEventShow');
$("#obj7393").trigger('SCEventShow');
$("#obj7371").trigger('SCEventShow');
$("#obj14263").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});