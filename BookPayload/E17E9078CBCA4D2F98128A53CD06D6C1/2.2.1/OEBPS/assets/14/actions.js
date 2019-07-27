pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 7300;
pubcoder.page.title = "14";
pubcoder.page.number = 14;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj7355_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj11669_onTap_activeActionGroupIndex = -1;
var obj11669_onTap_runningActionsCount = 0;
var obj11669_onTap_loopCount = 0;
var obj7304_onTap_activeActionGroupIndex = -1;
var obj7304_onTap_runningActionsCount = 0;
var obj7304_onTap_loopCount = 0;
var obj7355_onLoad_activeActionGroupIndex = -1;
var obj7355_onLoad_runningActionsCount = 0;
var obj7355_onLoad_loopCount = 0;
var obj7405_onShow_activeActionGroupIndex = -1;
var obj7405_onShow_runningActionsCount = 0;
var obj7405_onShow_loopCount = 0;
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
	
initAnimation_7355();
function initAnimation_7355()
{
        var targetObjectId = "#obj7355";
        var widthSCAnimationObject = 360;
        var heightSCAnimationObject = 278;
		var framesPerSecond = 0.8;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj7355 = $("#")[0];
        window.hasAudioTrack_obj7355 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj7355_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj7355 = $(targetObjectId).spritespin("api");
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
		
obj11669_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11669_onTap_activeActionGroupIndex = -1;
		$("#obj11669").trigger("obj11669_onTap_ended");
		
		return;
	}
	window.obj11669_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj7405 
show_11671();
function show_11671() {
	window.obj11669_onTap_runningActionsCount = obj11669_onTap_runningActionsCount + 1;
	$("#obj7405").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11669_onTap_runningActionsCount = window.obj11669_onTap_runningActionsCount - 1;
if (window.obj11669_onTap_runningActionsCount == 0) {
	obj11669_onTap_actionGroup1();
}
				$("#obj7405").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11669_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11669_onTap_activeActionGroupIndex = -1;
		$("#obj11669").trigger("obj11669_onTap_ended");
		
		return;
	}
	window.obj11669_onTap_activeActionGroupIndex = 1;
	





















};
obj7304_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7304_onTap_activeActionGroupIndex = -1;
		$("#obj7304").trigger("obj7304_onTap_ended");
		
		return;
	}
	window.obj7304_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj7301 
show_10325();
function show_10325() {
	window.obj7304_onTap_runningActionsCount = obj7304_onTap_runningActionsCount + 1;
	$("#obj7301").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj7304_onTap_runningActionsCount = window.obj7304_onTap_runningActionsCount - 1;
if (window.obj7304_onTap_runningActionsCount == 0) {
	obj7304_onTap_actionGroup1();
}
				$("#obj7301").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj7304_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7304_onTap_activeActionGroupIndex = -1;
		$("#obj7304").trigger("obj7304_onTap_ended");
		
		return;
	}
	window.obj7304_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_7308();
function wait_7308() {
	window.obj7304_onTap_runningActionsCount = obj7304_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7304_onTap_runningActionsCount = window.obj7304_onTap_runningActionsCount - 1;
if (window.obj7304_onTap_runningActionsCount == 0) {
	obj7304_onTap_actionGroup2();
}
	}, 1000);
}












};
obj7304_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7304_onTap_activeActionGroupIndex = -1;
		$("#obj7304").trigger("obj7304_onTap_ended");
		
		return;
	}
	window.obj7304_onTap_activeActionGroupIndex = 2;
	
//	action: goToPage
//	target: page15
goToPage_7417();
function goToPage_7417() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../15/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(15))},200);
	}
}





















};
obj7304_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7304_onTap_activeActionGroupIndex = -1;
		$("#obj7304").trigger("obj7304_onTap_ended");
		
		return;
	}
	window.obj7304_onTap_activeActionGroupIndex = 3;
	





















};
obj7355_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7355_onLoad_activeActionGroupIndex = -1;
		$("#obj7355").trigger("obj7355_onLoad_ended");
		
		return;
	}
	window.obj7355_onLoad_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj7355 
playAnimation_7368();
function playAnimation_7368() {
	var targetObjectId = "#obj7355";
	var targetObject = $(targetObjectId)[0];
	window.obj7355_onLoad_runningActionsCount = obj7355_onLoad_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj7355_onLoad_runningActionsCount = window.obj7355_onLoad_runningActionsCount - 1;
if (window.obj7355_onLoad_runningActionsCount == 0) {
	obj7355_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj7355 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj7355;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj7355.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj7355").one("obj7355_animation_ended",function(event) {
		    window.obj7355_onLoad_runningActionsCount = window.obj7355_onLoad_runningActionsCount - 1;
if (window.obj7355_onLoad_runningActionsCount == 0) {
	obj7355_onLoad_actionGroup1();
}
		});
	}
 }


















};
obj7355_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7355_onLoad_activeActionGroupIndex = -1;
		$("#obj7355").trigger("obj7355_onLoad_ended");
		
		return;
	}
	window.obj7355_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_7369();
function wait_7369() {
	window.obj7355_onLoad_runningActionsCount = obj7355_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7355_onLoad_runningActionsCount = window.obj7355_onLoad_runningActionsCount - 1;
if (window.obj7355_onLoad_runningActionsCount == 0) {
	obj7355_onLoad_actionGroup2();
}
	}, 1000);
}












};
obj7355_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7355_onLoad_activeActionGroupIndex = -1;
		$("#obj7355").trigger("obj7355_onLoad_ended");
		
		return;
	}
	window.obj7355_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj7405 
show_7410();
function show_7410() {
	window.obj7355_onLoad_runningActionsCount = obj7355_onLoad_runningActionsCount + 1;
	$("#obj7405").fadeIn(0, function() {
			setTimeout(function() {
				window.obj7355_onLoad_runningActionsCount = window.obj7355_onLoad_runningActionsCount - 1;
if (window.obj7355_onLoad_runningActionsCount == 0) {
	obj7355_onLoad_actionGroup3();
}
				$("#obj7405").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj7355_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7355_onLoad_activeActionGroupIndex = -1;
		$("#obj7355").trigger("obj7355_onLoad_ended");
		
		return;
	}
	window.obj7355_onLoad_activeActionGroupIndex = 3;
	








//	action: wait
wait_7411();
function wait_7411() {
	window.obj7355_onLoad_runningActionsCount = obj7355_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7355_onLoad_runningActionsCount = window.obj7355_onLoad_runningActionsCount - 1;
if (window.obj7355_onLoad_runningActionsCount == 0) {
	obj7355_onLoad_actionGroup4();
}
	}, 1000);
}












};
obj7355_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7355_onLoad_activeActionGroupIndex = -1;
		$("#obj7355").trigger("obj7355_onLoad_ended");
		
		return;
	}
	window.obj7355_onLoad_activeActionGroupIndex = 4;
	
//	action: goToPage
//	target: page14
goToPage_7412();
function goToPage_7412() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../14/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(14))},200);
	}
}





















};
obj7355_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7355_onLoad_activeActionGroupIndex = -1;
		$("#obj7355").trigger("obj7355_onLoad_ended");
		
		return;
	}
	window.obj7355_onLoad_activeActionGroupIndex = 5;
	





















};
obj7405_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7405_onShow_activeActionGroupIndex = -1;
		$("#obj7405").trigger("obj7405_onShow_ended");
		
		return;
	}
	window.obj7405_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_11673();
function wait_11673() {
	window.obj7405_onShow_runningActionsCount = obj7405_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7405_onShow_runningActionsCount = window.obj7405_onShow_runningActionsCount - 1;
if (window.obj7405_onShow_runningActionsCount == 0) {
	obj7405_onShow_actionGroup1();
}
	}, 1000);
}












};
obj7405_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7405_onShow_activeActionGroupIndex = -1;
		$("#obj7405").trigger("obj7405_onShow_ended");
		
		return;
	}
	window.obj7405_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj7405 
hide_11674();
function hide_11674() {
	window.obj7405_onShow_runningActionsCount = obj7405_onShow_runningActionsCount + 1;
	$("#obj7405").fadeOut(0, function() {
			setTimeout(function() {
				window.obj7405_onShow_runningActionsCount = window.obj7405_onShow_runningActionsCount - 1;
if (window.obj7405_onShow_runningActionsCount == 0) {
	obj7405_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj7405_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7405_onShow_activeActionGroupIndex = -1;
		$("#obj7405").trigger("obj7405_onShow_ended");
		
		return;
	}
	window.obj7405_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj11669: Event Touch Down
 *
 */
 
$("#obj11669").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj11669_onTap_activeActionGroupIndex != -1) return;
var obj11669_onTap_runningActionsCount = 0;
var obj11669_onTap_loopCount = 0;
obj11669_onTap_actionGroup0();
});







/*
 *
 *   obj7304: Event Touch Down
 *
 */
 
$("#obj7304").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7304_onTap_activeActionGroupIndex != -1) return;
var obj7304_onTap_runningActionsCount = 0;
var obj7304_onTap_loopCount = 0;
obj7304_onTap_actionGroup0();
});









/*
 *
 *   obj7355: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj7355_onLoad_activeActionGroupIndex != -1) return;
var obj7355_onLoad_runningActionsCount = 0;
var obj7355_onLoad_loopCount = 0;
obj7355_onLoad_actionGroup0();
});






/*
 *
 *   obj7405: Event Show
 *
 */
 
$("#obj7405").bind('SCEventShow', function(event) {
	if (window.obj7405_onShow_activeActionGroupIndex != -1) return;
var obj7405_onShow_runningActionsCount = 0;
var obj7405_onShow_loopCount = 0;
obj7405_onShow_actionGroup0();
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
	
$("#obj10322").trigger('SCEventShow');
$("#obj11669").trigger('SCEventShow');
$("#obj7304").trigger('SCEventShow');
$("#obj7355").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});