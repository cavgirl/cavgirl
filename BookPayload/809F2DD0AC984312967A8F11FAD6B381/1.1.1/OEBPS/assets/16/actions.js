pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 8018;
pubcoder.page.title = "16";
pubcoder.page.number = 16;
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
var obj8068_onLoad_activeActionGroupIndex = -1;
var obj8068_onLoad_runningActionsCount = 0;
var obj8068_onLoad_loopCount = 0;
var obj8070_onTap_activeActionGroupIndex = -1;
var obj8070_onTap_runningActionsCount = 0;
var obj8070_onTap_loopCount = 0;
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
		
obj8068_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8068_onLoad_activeActionGroupIndex = -1;
		$("#obj8068").trigger("obj8068_onLoad_ended");
		
		return;
	}
	window.obj8068_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj8074 
show_8077();
function show_8077() {
	var element = "#obj8074";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj8068_onLoad_runningActionsCount = obj8068_onLoad_runningActionsCount + 1;

	var animationType = "bounceIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj8068_onLoad_runningActionsCount = window.obj8068_onLoad_runningActionsCount - 1;
if (window.obj8068_onLoad_runningActionsCount == 0) {
	obj8068_onLoad_actionGroup1();
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
		window.obj8068_onLoad_runningActionsCount = window.obj8068_onLoad_runningActionsCount - 1;
if (window.obj8068_onLoad_runningActionsCount == 0) {
	obj8068_onLoad_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj8068_onLoad_runningActionsCount = window.obj8068_onLoad_runningActionsCount - 1;
if (window.obj8068_onLoad_runningActionsCount == 0) {
	obj8068_onLoad_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj8068_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8068_onLoad_activeActionGroupIndex = -1;
		$("#obj8068").trigger("obj8068_onLoad_ended");
		
		return;
	}
	window.obj8068_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj8065 
show_8078();
function show_8078() {
	var element = "#obj8065";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj8068_onLoad_runningActionsCount = obj8068_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj8068_onLoad_runningActionsCount = window.obj8068_onLoad_runningActionsCount - 1;
if (window.obj8068_onLoad_runningActionsCount == 0) {
	obj8068_onLoad_actionGroup2();
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
		window.obj8068_onLoad_runningActionsCount = window.obj8068_onLoad_runningActionsCount - 1;
if (window.obj8068_onLoad_runningActionsCount == 0) {
	obj8068_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj8068_onLoad_runningActionsCount = window.obj8068_onLoad_runningActionsCount - 1;
if (window.obj8068_onLoad_runningActionsCount == 0) {
	obj8068_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj8068_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8068_onLoad_activeActionGroupIndex = -1;
		$("#obj8068").trigger("obj8068_onLoad_ended");
		
		return;
	}
	window.obj8068_onLoad_activeActionGroupIndex = 2;
	





















};
obj8070_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8070_onTap_activeActionGroupIndex = -1;
		$("#obj8070").trigger("obj8070_onTap_ended");
		
		return;
	}
	window.obj8070_onTap_activeActionGroupIndex = 0;
	









//	action: openURL
openUrl_8079();
function openUrl_8079() {
	window.obj8070_onTap_runningActionsCount = obj8070_onTap_runningActionsCount + 1;
	
		window.open("https://www.midandeastantrim.gov.uk/things-to-do/museums-arts/carrickfergus-museum-and-civic-centre/");
	
	window.obj8070_onTap_runningActionsCount = window.obj8070_onTap_runningActionsCount - 1;
if (window.obj8070_onTap_runningActionsCount == 0) {
	obj8070_onTap_actionGroup1();
}
}












};
obj8070_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8070_onTap_activeActionGroupIndex = -1;
		$("#obj8070").trigger("obj8070_onTap_ended");
		
		return;
	}
	window.obj8070_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj8068: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj8068_onLoad_activeActionGroupIndex != -1) return;
var obj8068_onLoad_runningActionsCount = 0;
var obj8068_onLoad_loopCount = 0;
obj8068_onLoad_actionGroup0();
});





/*
 *
 *   obj8070: Event Touch Down
 *
 */
 
$("#obj8070").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8070_onTap_activeActionGroupIndex != -1) return;
var obj8070_onTap_runningActionsCount = 0;
var obj8070_onTap_loopCount = 0;
obj8070_onTap_actionGroup0();
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
	
$("#obj8021").trigger('SCEventShow');
$("#obj8070").trigger('SCEventShow');
$("#obj4097").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});