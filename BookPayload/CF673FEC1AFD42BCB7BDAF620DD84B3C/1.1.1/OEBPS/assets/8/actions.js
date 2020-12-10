pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 6198;
pubcoder.page.title = "8";
pubcoder.page.number = 8;
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
var obj6217_onTap_activeActionGroupIndex = -1;
var obj6217_onTap_runningActionsCount = 0;
var obj6217_onTap_loopCount = 0;
var obj6208_onLoad_activeActionGroupIndex = -1;
var obj6208_onLoad_runningActionsCount = 0;
var obj6208_onLoad_loopCount = 0;
var obj6285_onTap_activeActionGroupIndex = -1;
var obj6285_onTap_runningActionsCount = 0;
var obj6285_onTap_loopCount = 0;
var obj4097_onTap_activeActionGroupIndex = -1;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
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
		
obj6217_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6217_onTap_activeActionGroupIndex = -1;
		$("#obj6217").trigger("obj6217_onTap_ended");
		
		return;
	}
	window.obj6217_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj6208 
hide_6222();
function hide_6222() {
	var element = "#obj6208";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6217_onTap_runningActionsCount = obj6217_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_6222(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj6214 
hide_6223();
function hide_6223() {
	var element = "#obj6214";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6217_onTap_runningActionsCount = obj6217_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_6223(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj6199 
hide_6224();
function hide_6224() {
	var element = "#obj6199";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6217_onTap_runningActionsCount = obj6217_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_6224(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj6217 
hide_6225();
function hide_6225() {
	var element = "#obj6217";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6217_onTap_runningActionsCount = obj6217_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_6225(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
















//	action: Noop
noop_6219();
function noop_6219() {
	window.obj6217_onTap_runningActionsCount = obj6217_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
	}, 1);
}
//	action: Noop
noop_6220();
function noop_6220() {
	window.obj6217_onTap_runningActionsCount = obj6217_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
	}, 1);
}
//	action: Noop
noop_6221();
function noop_6221() {
	window.obj6217_onTap_runningActionsCount = obj6217_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6217_onTap_runningActionsCount = window.obj6217_onTap_runningActionsCount - 1;
if (window.obj6217_onTap_runningActionsCount == 0) {
	obj6217_onTap_actionGroup1();
}
	}, 1);
}



};
obj6217_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6217_onTap_activeActionGroupIndex = -1;
		$("#obj6217").trigger("obj6217_onTap_ended");
		
		return;
	}
	window.obj6217_onTap_activeActionGroupIndex = 1;
	





















};
obj6208_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6208_onLoad_activeActionGroupIndex = -1;
		$("#obj6208").trigger("obj6208_onLoad_ended");
		
		return;
	}
	window.obj6208_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_6212();
function wait_6212() {
	window.obj6208_onLoad_runningActionsCount = obj6208_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6208_onLoad_runningActionsCount = window.obj6208_onLoad_runningActionsCount - 1;
if (window.obj6208_onLoad_runningActionsCount == 0) {
	obj6208_onLoad_actionGroup1();
}
	}, 3000);
}












};
obj6208_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6208_onLoad_activeActionGroupIndex = -1;
		$("#obj6208").trigger("obj6208_onLoad_ended");
		
		return;
	}
	window.obj6208_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj6199 
show_6213();
function show_6213() {
	var element = "#obj6199";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj6208_onLoad_runningActionsCount = obj6208_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj6208_onLoad_runningActionsCount = window.obj6208_onLoad_runningActionsCount - 1;
if (window.obj6208_onLoad_runningActionsCount == 0) {
	obj6208_onLoad_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj6208_onLoad_runningActionsCount = window.obj6208_onLoad_runningActionsCount - 1;
if (window.obj6208_onLoad_runningActionsCount == 0) {
	obj6208_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj6208_onLoad_runningActionsCount = window.obj6208_onLoad_runningActionsCount - 1;
if (window.obj6208_onLoad_runningActionsCount == 0) {
	obj6208_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj6208_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6208_onLoad_activeActionGroupIndex = -1;
		$("#obj6208").trigger("obj6208_onLoad_ended");
		
		return;
	}
	window.obj6208_onLoad_activeActionGroupIndex = 2;
	





















};
obj6285_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6285_onTap_activeActionGroupIndex = -1;
		$("#obj6285").trigger("obj6285_onTap_ended");
		
		return;
	}
	window.obj6285_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page9
goToPage_6287();
function goToPage_6287() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../9/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(9))},200);
	}
}





















};
obj6285_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6285_onTap_activeActionGroupIndex = -1;
		$("#obj6285").trigger("obj6285_onTap_ended");
		
		return;
	}
	window.obj6285_onTap_activeActionGroupIndex = 1;
	





















};
obj4097_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4097_onTap_activeActionGroupIndex = -1;
		$("#obj4097").trigger("obj4097_onTap_ended");
		
		return;
	}
	window.obj4097_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_4099();
function goToPage_4099() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj4097_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4097_onTap_activeActionGroupIndex = -1;
		$("#obj4097").trigger("obj4097_onTap_ended");
		
		return;
	}
	window.obj4097_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj6217: Event Touch Down
 *
 */
 
$("#obj6217").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6217_onTap_activeActionGroupIndex != -1) return;
var obj6217_onTap_runningActionsCount = 0;
var obj6217_onTap_loopCount = 0;
obj6217_onTap_actionGroup0();
});
















/*
 *
 *   obj6208: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj6208_onLoad_activeActionGroupIndex != -1) return;
var obj6208_onLoad_runningActionsCount = 0;
var obj6208_onLoad_loopCount = 0;
obj6208_onLoad_actionGroup0();
});












/*
 *
 *   obj6285: Event Touch Down
 *
 */
 
$("#obj6285").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6285_onTap_activeActionGroupIndex != -1) return;
var obj6285_onTap_runningActionsCount = 0;
var obj6285_onTap_loopCount = 0;
obj6285_onTap_actionGroup0();
});







/*
 *
 *   obj4097: Event Touch Down
 *
 */
 
$("#obj4097").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4097_onTap_activeActionGroupIndex != -1) return;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
obj4097_onTap_actionGroup0();
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
	
$("#obj6217").trigger('SCEventShow');
$("#obj6214").trigger('SCEventShow');
$("#obj6208").trigger('SCEventShow');
$("#obj6199").trigger('SCEventShow');
$("#obj6285").trigger('SCEventShow');
$("#obj4097").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});