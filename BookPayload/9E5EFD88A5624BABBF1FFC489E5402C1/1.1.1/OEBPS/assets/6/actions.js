pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 1424;
pubcoder.page.title = "6";
pubcoder.page.number = 6;
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
var obj1464_onLoad_activeActionGroupIndex = -1;
var obj1464_onLoad_runningActionsCount = 0;
var obj1464_onLoad_loopCount = 0;
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
		
obj1464_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1464_onLoad_activeActionGroupIndex = -1;
		$("#obj1464").trigger("obj1464_onLoad_ended");
		
		return;
	}
	window.obj1464_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1449 
show_1467();
function show_1467() {
	window.obj1464_onLoad_runningActionsCount = obj1464_onLoad_runningActionsCount + 1;
	$("#obj1449").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1464_onLoad_runningActionsCount = window.obj1464_onLoad_runningActionsCount - 1;
if (window.obj1464_onLoad_runningActionsCount == 0) {
	obj1464_onLoad_actionGroup1();
}
				$("#obj1449").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1464_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1464_onLoad_activeActionGroupIndex = -1;
		$("#obj1464").trigger("obj1464_onLoad_ended");
		
		return;
	}
	window.obj1464_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		








































/*
 *
 *   obj1464: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1464_onLoad_activeActionGroupIndex != -1) return;
var obj1464_onLoad_runningActionsCount = 0;
var obj1464_onLoad_loopCount = 0;
obj1464_onLoad_actionGroup0();
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
	
$("#obj1429").trigger('SCEventShow');
$("#obj1447").trigger('SCEventShow');
$("#obj1457").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});