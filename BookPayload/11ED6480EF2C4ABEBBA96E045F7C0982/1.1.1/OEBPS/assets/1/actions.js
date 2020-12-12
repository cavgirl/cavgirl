pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 4101;
pubcoder.page.title = "1";
pubcoder.page.number = 1;
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
var obj5682_onLoad_activeActionGroupIndex = -1;
var obj5682_onLoad_runningActionsCount = 0;
var obj5682_onLoad_loopCount = 0;
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
		
obj5682_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5682_onLoad_activeActionGroupIndex = -1;
		$("#obj5682").trigger("obj5682_onLoad_ended");
		
		return;
	}
	window.obj5682_onLoad_activeActionGroupIndex = 0;
	




//	action: playMovie
//	target: obj5682 
playMovie_5685();
function playMovie_5685() {
	window.obj5682_onLoad_runningActionsCount = obj5682_onLoad_runningActionsCount + 1;
	var myVideo = $("#obj5682")[0];
	var playFromBeginning = false;
	var waitForCompletion = true;
	if (playFromBeginning) myVideo.currentTime = 0;
	myVideo.play();
	//myVideo.webkitEnterFullscreen();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj5682_onLoad_runningActionsCount = window.obj5682_onLoad_runningActionsCount - 1;
if (window.obj5682_onLoad_runningActionsCount == 0) {
	obj5682_onLoad_actionGroup1();
}
		};
		// myVideo.addEventListener('pause', actionEnded, false);
		myVideo.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5682_onLoad_runningActionsCount = window.obj5682_onLoad_runningActionsCount - 1;
if (window.obj5682_onLoad_runningActionsCount == 0) {
	obj5682_onLoad_actionGroup1();
}
	}
}

















};
obj5682_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5682_onLoad_activeActionGroupIndex = -1;
		$("#obj5682").trigger("obj5682_onLoad_ended");
		
		return;
	}
	window.obj5682_onLoad_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page2
goToPage_5686();
function goToPage_5686() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../2/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(2))},200);
	}
}





















};
obj5682_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5682_onLoad_activeActionGroupIndex = -1;
		$("#obj5682").trigger("obj5682_onLoad_ended");
		
		return;
	}
	window.obj5682_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		












/*
 *
 *   obj5682: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5682_onLoad_activeActionGroupIndex != -1) return;
var obj5682_onLoad_runningActionsCount = 0;
var obj5682_onLoad_loopCount = 0;
obj5682_onLoad_actionGroup0();
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
	
$("#obj4106").trigger('SCEventShow');
$("#obj5682").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});