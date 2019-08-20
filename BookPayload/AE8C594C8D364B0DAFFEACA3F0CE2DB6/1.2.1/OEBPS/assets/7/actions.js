pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 1970;
pubcoder.page.title = "7";
pubcoder.page.number = 7;
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
var obj1993_onTap_activeActionGroupIndex = -1;
var obj1993_onTap_runningActionsCount = 0;
var obj1993_onTap_loopCount = 0;
var obj1981_onTap_activeActionGroupIndex = -1;
var obj1981_onTap_runningActionsCount = 0;
var obj1981_onTap_loopCount = 0;
var obj1975_onLoad_activeActionGroupIndex = -1;
var obj1975_onLoad_runningActionsCount = 0;
var obj1975_onLoad_loopCount = 0;
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
	
SCPhotoGallery('#obj1986', 720, 1280, false, true, true, false, 3); 
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
		
obj1993_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_onTap_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onTap_ended");
		
		return;
	}
	window.obj1993_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page7
goToPage_1995();
function goToPage_1995() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../7/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(7))},200);
	}
}





















};
obj1993_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1993_onTap_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onTap_ended");
		
		return;
	}
	window.obj1993_onTap_activeActionGroupIndex = 1;
	





















};
obj1981_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1981_onTap_activeActionGroupIndex = -1;
		$("#obj1981").trigger("obj1981_onTap_ended");
		
		return;
	}
	window.obj1981_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1981 
hide_1983();
function hide_1983() {
	window.obj1981_onTap_runningActionsCount = obj1981_onTap_runningActionsCount + 1;
	$("#obj1981").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj1981_onTap_runningActionsCount = window.obj1981_onTap_runningActionsCount - 1;
if (window.obj1981_onTap_runningActionsCount == 0) {
	obj1981_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj1971 
hide_1984();
function hide_1984() {
	window.obj1981_onTap_runningActionsCount = obj1981_onTap_runningActionsCount + 1;
	$("#obj1971").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj1981_onTap_runningActionsCount = window.obj1981_onTap_runningActionsCount - 1;
if (window.obj1981_onTap_runningActionsCount == 0) {
	obj1981_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1981_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1981_onTap_activeActionGroupIndex = -1;
		$("#obj1981").trigger("obj1981_onTap_ended");
		
		return;
	}
	window.obj1981_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1993 
show_1997();
function show_1997() {
	window.obj1981_onTap_runningActionsCount = obj1981_onTap_runningActionsCount + 1;
	$("#obj1993").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1981_onTap_runningActionsCount = window.obj1981_onTap_runningActionsCount - 1;
if (window.obj1981_onTap_runningActionsCount == 0) {
	obj1981_onTap_actionGroup2();
}
				$("#obj1993").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1981_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1981_onTap_activeActionGroupIndex = -1;
		$("#obj1981").trigger("obj1981_onTap_ended");
		
		return;
	}
	window.obj1981_onTap_activeActionGroupIndex = 2;
	





















};
obj1975_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1975_onLoad_activeActionGroupIndex = -1;
		$("#obj1975").trigger("obj1975_onLoad_ended");
		
		return;
	}
	window.obj1975_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_1978();
function wait_1978() {
	window.obj1975_onLoad_runningActionsCount = obj1975_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1975_onLoad_runningActionsCount = window.obj1975_onLoad_runningActionsCount - 1;
if (window.obj1975_onLoad_runningActionsCount == 0) {
	obj1975_onLoad_actionGroup1();
}
	}, 5000);
}












};
obj1975_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1975_onLoad_activeActionGroupIndex = -1;
		$("#obj1975").trigger("obj1975_onLoad_ended");
		
		return;
	}
	window.obj1975_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1981 
hide_1979();
function hide_1979() {
	window.obj1975_onLoad_runningActionsCount = obj1975_onLoad_runningActionsCount + 1;
	$("#obj1981").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj1975_onLoad_runningActionsCount = window.obj1975_onLoad_runningActionsCount - 1;
if (window.obj1975_onLoad_runningActionsCount == 0) {
	obj1975_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj1971 
hide_1980();
function hide_1980() {
	window.obj1975_onLoad_runningActionsCount = obj1975_onLoad_runningActionsCount + 1;
	$("#obj1971").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj1975_onLoad_runningActionsCount = window.obj1975_onLoad_runningActionsCount - 1;
if (window.obj1975_onLoad_runningActionsCount == 0) {
	obj1975_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj1975_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1975_onLoad_activeActionGroupIndex = -1;
		$("#obj1975").trigger("obj1975_onLoad_ended");
		
		return;
	}
	window.obj1975_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj1993 
show_1996();
function show_1996() {
	window.obj1975_onLoad_runningActionsCount = obj1975_onLoad_runningActionsCount + 1;
	$("#obj1993").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1975_onLoad_runningActionsCount = window.obj1975_onLoad_runningActionsCount - 1;
if (window.obj1975_onLoad_runningActionsCount == 0) {
	obj1975_onLoad_actionGroup3();
}
				$("#obj1993").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1975_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1975_onLoad_activeActionGroupIndex = -1;
		$("#obj1975").trigger("obj1975_onLoad_ended");
		
		return;
	}
	window.obj1975_onLoad_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















/*
 *
 *   obj1993: Event Touch Down
 *
 */
 
$("#obj1993").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1993_onTap_activeActionGroupIndex != -1) return;
var obj1993_onTap_runningActionsCount = 0;
var obj1993_onTap_loopCount = 0;
obj1993_onTap_actionGroup0();
});














/*
 *
 *   obj1981: Event Touch Down
 *
 */
 
$("#obj1981").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1981_onTap_activeActionGroupIndex != -1) return;
var obj1981_onTap_runningActionsCount = 0;
var obj1981_onTap_loopCount = 0;
obj1981_onTap_actionGroup0();
});









/*
 *
 *   obj1975: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1975_onLoad_activeActionGroupIndex != -1) return;
var obj1975_onLoad_runningActionsCount = 0;
var obj1975_onLoad_loopCount = 0;
obj1975_onLoad_actionGroup0();
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
	
$("#obj1991").trigger('SCEventShow');
$("#obj1986").trigger('SCEventShow');
$("#obj1971").trigger('SCEventShow');
$("#obj1981").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});