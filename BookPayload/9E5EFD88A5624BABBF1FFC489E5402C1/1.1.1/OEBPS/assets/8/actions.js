pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 1348;
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
var obj1353_onTap_activeActionGroupIndex = -1;
var obj1353_onTap_runningActionsCount = 0;
var obj1353_onTap_loopCount = 0;
var obj1369_onLoad_activeActionGroupIndex = -1;
var obj1369_onLoad_runningActionsCount = 0;
var obj1369_onLoad_loopCount = 0;
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
	
SCPhotoGallery('#obj1356', 667, 375, false, false, true, true, 3); 
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
		
obj1353_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1353_onTap_activeActionGroupIndex = -1;
		$("#obj1353").trigger("obj1353_onTap_ended");
		
		return;
	}
	window.obj1353_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1353 
hide_1376();
function hide_1376() {
	window.obj1353_onTap_runningActionsCount = obj1353_onTap_runningActionsCount + 1;
	$("#obj1353").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj1353_onTap_runningActionsCount = window.obj1353_onTap_runningActionsCount - 1;
if (window.obj1353_onTap_runningActionsCount == 0) {
	obj1353_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj1351 
hide_1377();
function hide_1377() {
	window.obj1353_onTap_runningActionsCount = obj1353_onTap_runningActionsCount + 1;
	$("#obj1351").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj1353_onTap_runningActionsCount = window.obj1353_onTap_runningActionsCount - 1;
if (window.obj1353_onTap_runningActionsCount == 0) {
	obj1353_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1353_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1353_onTap_activeActionGroupIndex = -1;
		$("#obj1353").trigger("obj1353_onTap_ended");
		
		return;
	}
	window.obj1353_onTap_activeActionGroupIndex = 1;
	





















};
obj1369_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1369_onLoad_activeActionGroupIndex = -1;
		$("#obj1369").trigger("obj1369_onLoad_ended");
		
		return;
	}
	window.obj1369_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_1372();
function wait_1372() {
	window.obj1369_onLoad_runningActionsCount = obj1369_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1369_onLoad_runningActionsCount = window.obj1369_onLoad_runningActionsCount - 1;
if (window.obj1369_onLoad_runningActionsCount == 0) {
	obj1369_onLoad_actionGroup1();
}
	}, 5000);
}












};
obj1369_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1369_onLoad_activeActionGroupIndex = -1;
		$("#obj1369").trigger("obj1369_onLoad_ended");
		
		return;
	}
	window.obj1369_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1353 
hide_1373();
function hide_1373() {
	window.obj1369_onLoad_runningActionsCount = obj1369_onLoad_runningActionsCount + 1;
	$("#obj1353").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj1369_onLoad_runningActionsCount = window.obj1369_onLoad_runningActionsCount - 1;
if (window.obj1369_onLoad_runningActionsCount == 0) {
	obj1369_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj1351 
hide_1374();
function hide_1374() {
	window.obj1369_onLoad_runningActionsCount = obj1369_onLoad_runningActionsCount + 1;
	$("#obj1351").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj1369_onLoad_runningActionsCount = window.obj1369_onLoad_runningActionsCount - 1;
if (window.obj1369_onLoad_runningActionsCount == 0) {
	obj1369_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj1369_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1369_onLoad_activeActionGroupIndex = -1;
		$("#obj1369").trigger("obj1369_onLoad_ended");
		
		return;
	}
	window.obj1369_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj1353: Event Touch Down
 *
 */
 
$("#obj1353").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1353_onTap_activeActionGroupIndex != -1) return;
var obj1353_onTap_runningActionsCount = 0;
var obj1353_onTap_loopCount = 0;
obj1353_onTap_actionGroup0();
});









/*
 *
 *   obj1369: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1369_onLoad_activeActionGroupIndex != -1) return;
var obj1369_onLoad_runningActionsCount = 0;
var obj1369_onLoad_loopCount = 0;
obj1369_onLoad_actionGroup0();
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
	
$("#obj1365").trigger('SCEventShow');
$("#obj1356").trigger('SCEventShow');
$("#obj1351").trigger('SCEventShow');
$("#obj1353").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});