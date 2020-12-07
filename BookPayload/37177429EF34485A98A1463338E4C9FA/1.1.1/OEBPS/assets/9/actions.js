pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 4638;
pubcoder.page.title = "9";
pubcoder.page.number = 9;
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
var obj4653_onLoad_activeActionGroupIndex = -1;
var obj4653_onLoad_runningActionsCount = 0;
var obj4653_onLoad_loopCount = 0;
var obj4669_onTap_activeActionGroupIndex = -1;
var obj4669_onTap_runningActionsCount = 0;
var obj4669_onTap_loopCount = 0;
var obj4639_onTap_activeActionGroupIndex = -1;
var obj4639_onTap_runningActionsCount = 0;
var obj4639_onTap_loopCount = 0;
var obj4097_onTap_activeActionGroupIndex = -1;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj4566_counterValue = 0;
var obj4566_counterTargetValue = 2;
var obj4566_counterCanExceedTargetValue = false;
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
		
obj4653_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4653_onLoad_activeActionGroupIndex = -1;
		$("#obj4653").trigger("obj4653_onLoad_ended");
		
		return;
	}
	window.obj4653_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_4668();
function wait_4668() {
	window.obj4653_onLoad_runningActionsCount = obj4653_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj4653_onLoad_runningActionsCount = window.obj4653_onLoad_runningActionsCount - 1;
if (window.obj4653_onLoad_runningActionsCount == 0) {
	obj4653_onLoad_actionGroup1();
}
	}, 3000);
}












};
obj4653_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4653_onLoad_activeActionGroupIndex = -1;
		$("#obj4653").trigger("obj4653_onLoad_ended");
		
		return;
	}
	window.obj4653_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj4639 
show_4658();
function show_4658() {
	var element = "#obj4639";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4653_onLoad_runningActionsCount = obj4653_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4653_onLoad_runningActionsCount = window.obj4653_onLoad_runningActionsCount - 1;
if (window.obj4653_onLoad_runningActionsCount == 0) {
	obj4653_onLoad_actionGroup2();
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
		window.obj4653_onLoad_runningActionsCount = window.obj4653_onLoad_runningActionsCount - 1;
if (window.obj4653_onLoad_runningActionsCount == 0) {
	obj4653_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4653_onLoad_runningActionsCount = window.obj4653_onLoad_runningActionsCount - 1;
if (window.obj4653_onLoad_runningActionsCount == 0) {
	obj4653_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4653_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4653_onLoad_activeActionGroupIndex = -1;
		$("#obj4653").trigger("obj4653_onLoad_ended");
		
		return;
	}
	window.obj4653_onLoad_activeActionGroupIndex = 2;
	





















};
obj4669_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4669_onTap_activeActionGroupIndex = -1;
		$("#obj4669").trigger("obj4669_onTap_ended");
		
		return;
	}
	window.obj4669_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page10
goToPage_4671();
function goToPage_4671() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../10/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(10))},200);
	}
}





















};
obj4669_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4669_onTap_activeActionGroupIndex = -1;
		$("#obj4669").trigger("obj4669_onTap_ended");
		
		return;
	}
	window.obj4669_onTap_activeActionGroupIndex = 1;
	





















};
obj4639_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4639_onTap_activeActionGroupIndex = -1;
		$("#obj4639").trigger("obj4639_onTap_ended");
		
		return;
	}
	window.obj4639_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page10
goToPage_4672();
function goToPage_4672() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../10/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(10))},200);
	}
}





















};
obj4639_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4639_onTap_activeActionGroupIndex = -1;
		$("#obj4639").trigger("obj4639_onTap_ended");
		
		return;
	}
	window.obj4639_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj4653: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4653_onLoad_activeActionGroupIndex != -1) return;
var obj4653_onLoad_runningActionsCount = 0;
var obj4653_onLoad_loopCount = 0;
obj4653_onLoad_actionGroup0();
});





/*
 *
 *   obj4669: Event Touch Down
 *
 */
 
$("#obj4669").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4669_onTap_activeActionGroupIndex != -1) return;
var obj4669_onTap_runningActionsCount = 0;
var obj4669_onTap_loopCount = 0;
obj4669_onTap_actionGroup0();
});







/*
 *
 *   obj4639: Event Touch Down
 *
 */
 
$("#obj4639").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4639_onTap_activeActionGroupIndex != -1) return;
var obj4639_onTap_runningActionsCount = 0;
var obj4639_onTap_loopCount = 0;
obj4639_onTap_actionGroup0();
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
	
$("#obj4662").trigger('SCEventShow');
$("#obj4659").trigger('SCEventShow');
$("#obj4653").trigger('SCEventShow');
$("#obj4669").trigger('SCEventShow');
$("#obj4097").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});