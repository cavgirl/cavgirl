pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 5359;
pubcoder.page.title = "5";
pubcoder.page.number = 5;
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
var obj5376_onTap_activeActionGroupIndex = -1;
var obj5376_onTap_runningActionsCount = 0;
var obj5376_onTap_loopCount = 0;
var obj5369_onShow_activeActionGroupIndex = -1;
var obj5369_onShow_runningActionsCount = 0;
var obj5369_onShow_loopCount = 0;
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
		
obj5376_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5376_onTap_activeActionGroupIndex = -1;
		$("#obj5376").trigger("obj5376_onTap_ended");
		
		return;
	}
	window.obj5376_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page6
goToPage_5792();
function goToPage_5792() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../6/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(6))},200);
	}
}





















};
obj5376_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5376_onTap_activeActionGroupIndex = -1;
		$("#obj5376").trigger("obj5376_onTap_ended");
		
		return;
	}
	window.obj5376_onTap_activeActionGroupIndex = 1;
	





















};
obj5369_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5369_onShow_activeActionGroupIndex = -1;
		$("#obj5369").trigger("obj5369_onShow_ended");
		
		return;
	}
	window.obj5369_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj5367 
show_5372();
function show_5372() {
	var element = "#obj5367";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5369_onShow_runningActionsCount = obj5369_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5369_onShow_runningActionsCount = window.obj5369_onShow_runningActionsCount - 1;
if (window.obj5369_onShow_runningActionsCount == 0) {
	obj5369_onShow_actionGroup1();
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
		window.obj5369_onShow_runningActionsCount = window.obj5369_onShow_runningActionsCount - 1;
if (window.obj5369_onShow_runningActionsCount == 0) {
	obj5369_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj5369_onShow_runningActionsCount = window.obj5369_onShow_runningActionsCount - 1;
if (window.obj5369_onShow_runningActionsCount == 0) {
	obj5369_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5369_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5369_onShow_activeActionGroupIndex = -1;
		$("#obj5369").trigger("obj5369_onShow_ended");
		
		return;
	}
	window.obj5369_onShow_activeActionGroupIndex = 1;
	








//	action: wait
wait_5373();
function wait_5373() {
	window.obj5369_onShow_runningActionsCount = obj5369_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj5369_onShow_runningActionsCount = window.obj5369_onShow_runningActionsCount - 1;
if (window.obj5369_onShow_runningActionsCount == 0) {
	obj5369_onShow_actionGroup2();
}
	}, 1000);
}












};
obj5369_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5369_onShow_activeActionGroupIndex = -1;
		$("#obj5369").trigger("obj5369_onShow_ended");
		
		return;
	}
	window.obj5369_onShow_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj5360 
show_5793();
function show_5793() {
	var element = "#obj5360";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5369_onShow_runningActionsCount = obj5369_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5369_onShow_runningActionsCount = window.obj5369_onShow_runningActionsCount - 1;
if (window.obj5369_onShow_runningActionsCount == 0) {
	obj5369_onShow_actionGroup3();
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
		window.obj5369_onShow_runningActionsCount = window.obj5369_onShow_runningActionsCount - 1;
if (window.obj5369_onShow_runningActionsCount == 0) {
	obj5369_onShow_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj5369_onShow_runningActionsCount = window.obj5369_onShow_runningActionsCount - 1;
if (window.obj5369_onShow_runningActionsCount == 0) {
	obj5369_onShow_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5369_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5369_onShow_activeActionGroupIndex = -1;
		$("#obj5369").trigger("obj5369_onShow_ended");
		
		return;
	}
	window.obj5369_onShow_activeActionGroupIndex = 3;
	





















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
 *   obj5376: Event Touch Down
 *
 */
 
$("#obj5376").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5376_onTap_activeActionGroupIndex != -1) return;
var obj5376_onTap_runningActionsCount = 0;
var obj5376_onTap_loopCount = 0;
obj5376_onTap_actionGroup0();
});








/*
 *
 *   obj5369: Event Show
 *
 */
 
$("#obj5369").bind('SCEventShow', function(event) {
	if (window.obj5369_onShow_activeActionGroupIndex != -1) return;
var obj5369_onShow_runningActionsCount = 0;
var obj5369_onShow_loopCount = 0;
obj5369_onShow_actionGroup0();
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
	
$("#obj5376").trigger('SCEventShow');
$("#obj5369").trigger('SCEventShow');
$("#obj5367").trigger('SCEventShow');
$("#obj5360").trigger('SCEventShow');
$("#obj4097").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});