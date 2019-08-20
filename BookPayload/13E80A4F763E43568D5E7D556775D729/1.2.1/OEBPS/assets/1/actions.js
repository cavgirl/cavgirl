pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 2;
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
var obj2032_onLoad_activeActionGroupIndex = -1;
var obj2032_onLoad_runningActionsCount = 0;
var obj2032_onLoad_loopCount = 0;
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
		
obj2032_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2032_onLoad_activeActionGroupIndex = -1;
		$("#obj2032").trigger("obj2032_onLoad_ended");
		
		return;
	}
	window.obj2032_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2032 
show_2077();
function show_2077() {
	window.obj2032_onLoad_runningActionsCount = obj2032_onLoad_runningActionsCount + 1;
	$("#obj2032").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2032_onLoad_runningActionsCount = window.obj2032_onLoad_runningActionsCount - 1;
if (window.obj2032_onLoad_runningActionsCount == 0) {
	obj2032_onLoad_actionGroup1();
}
				$("#obj2032").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj2032_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2032_onLoad_activeActionGroupIndex = -1;
		$("#obj2032").trigger("obj2032_onLoad_ended");
		
		return;
	}
	window.obj2032_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		


























/*
 *
 *   obj2032: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2032_onLoad_activeActionGroupIndex != -1) return;
var obj2032_onLoad_runningActionsCount = 0;
var obj2032_onLoad_loopCount = 0;
obj2032_onLoad_actionGroup0();
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
	
$("#obj1202").trigger('SCEventShow');
$("#obj2078").trigger('SCEventShow');
$("#obj2075").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});