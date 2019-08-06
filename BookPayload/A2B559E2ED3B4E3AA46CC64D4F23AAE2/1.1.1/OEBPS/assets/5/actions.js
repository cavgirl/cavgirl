pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 1330;
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
var obj1336_onTap_activeActionGroupIndex = -1;
var obj1336_onTap_runningActionsCount = 0;
var obj1336_onTap_loopCount = 0;
var obj1343_onLoad_activeActionGroupIndex = -1;
var obj1343_onLoad_runningActionsCount = 0;
var obj1343_onLoad_loopCount = 0;
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
		
obj1336_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1336_onTap_activeActionGroupIndex = -1;
		$("#obj1336").trigger("obj1336_onTap_ended");
		
		return;
	}
	window.obj1336_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1338 
show_1342();
function show_1342() {
	window.obj1336_onTap_runningActionsCount = obj1336_onTap_runningActionsCount + 1;
	$("#obj1338").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;
if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup1();
}
				$("#obj1338").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_1341();
function runjs_1341() {
	window.obj1336_onTap_runningActionsCount = obj1336_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1338"));
	setTimeout(function() {
		window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;
if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup1();
}
	}, 1);
}






};
obj1336_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1336_onTap_activeActionGroupIndex = -1;
		$("#obj1336").trigger("obj1336_onTap_ended");
		
		return;
	}
	window.obj1336_onTap_activeActionGroupIndex = 1;
	





















};
obj1343_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1343_onLoad_activeActionGroupIndex = -1;
		$("#obj1343").trigger("obj1343_onLoad_ended");
		
		return;
	}
	window.obj1343_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1333 
show_1346();
function show_1346() {
	window.obj1343_onLoad_runningActionsCount = obj1343_onLoad_runningActionsCount + 1;
	$("#obj1333").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj1343_onLoad_runningActionsCount = window.obj1343_onLoad_runningActionsCount - 1;
if (window.obj1343_onLoad_runningActionsCount == 0) {
	obj1343_onLoad_actionGroup1();
}
				$("#obj1333").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1343_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1343_onLoad_activeActionGroupIndex = -1;
		$("#obj1343").trigger("obj1343_onLoad_ended");
		
		return;
	}
	window.obj1343_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1336 
show_1347();
function show_1347() {
	window.obj1343_onLoad_runningActionsCount = obj1343_onLoad_runningActionsCount + 1;
	$("#obj1336").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1343_onLoad_runningActionsCount = window.obj1343_onLoad_runningActionsCount - 1;
if (window.obj1343_onLoad_runningActionsCount == 0) {
	obj1343_onLoad_actionGroup2();
}
				$("#obj1336").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1343_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1343_onLoad_activeActionGroupIndex = -1;
		$("#obj1343").trigger("obj1343_onLoad_ended");
		
		return;
	}
	window.obj1343_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj1336: Event Touch Down
 *
 */
 
$("#obj1336").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1336_onTap_activeActionGroupIndex != -1) return;
var obj1336_onTap_runningActionsCount = 0;
var obj1336_onTap_loopCount = 0;
obj1336_onTap_actionGroup0();
});









/*
 *
 *   obj1343: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1343_onLoad_activeActionGroupIndex != -1) return;
var obj1343_onLoad_runningActionsCount = 0;
var obj1343_onLoad_loopCount = 0;
obj1343_onLoad_actionGroup0();
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
	
$("#obj1331").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});