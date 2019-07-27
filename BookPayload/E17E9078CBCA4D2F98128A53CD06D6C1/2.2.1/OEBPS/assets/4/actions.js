pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 588;
pubcoder.page.title = "4";
pubcoder.page.number = 4;
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
var obj14434_onTap_activeActionGroupIndex = -1;
var obj14434_onTap_runningActionsCount = 0;
var obj14434_onTap_loopCount = 0;
var obj13138_onTap_activeActionGroupIndex = -1;
var obj13138_onTap_runningActionsCount = 0;
var obj13138_onTap_loopCount = 0;
var obj3198_onLoad_activeActionGroupIndex = -1;
var obj3198_onLoad_runningActionsCount = 0;
var obj3198_onLoad_loopCount = 0;
var obj15948_onLoad_activeActionGroupIndex = -1;
var obj15948_onLoad_runningActionsCount = 0;
var obj15948_onLoad_loopCount = 0;
var obj16105_onTap_activeActionGroupIndex = -1;
var obj16105_onTap_runningActionsCount = 0;
var obj16105_onTap_loopCount = 0;
var obj16107_onTap_activeActionGroupIndex = -1;
var obj16107_onTap_runningActionsCount = 0;
var obj16107_onTap_loopCount = 0;
var obj16107_onShow_activeActionGroupIndex = -1;
var obj16107_onShow_runningActionsCount = 0;
var obj16107_onShow_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj3198_counterValue = 0;
var obj3198_counterTargetValue = 2;
var obj3198_counterCanExceedTargetValue = false;
var obj15948_counterValue = 0;
var obj15948_counterTargetValue = 2;
var obj15948_counterCanExceedTargetValue = false;
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
		
obj14434_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14434_onTap_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_onTap_ended");
		
		return;
	}
	window.obj14434_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page5
goToPage_14436();
function goToPage_14436() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
	}
}





















};
obj14434_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14434_onTap_activeActionGroupIndex = -1;
		$("#obj14434").trigger("obj14434_onTap_ended");
		
		return;
	}
	window.obj14434_onTap_activeActionGroupIndex = 1;
	





















};
obj13138_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13138_onTap_activeActionGroupIndex = -1;
		$("#obj13138").trigger("obj13138_onTap_ended");
		
		return;
	}
	window.obj13138_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page5
goToPage_13140();
function goToPage_13140() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
	}
}





















};
obj13138_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13138_onTap_activeActionGroupIndex = -1;
		$("#obj13138").trigger("obj13138_onTap_ended");
		
		return;
	}
	window.obj13138_onTap_activeActionGroupIndex = 1;
	





















};
obj3198_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3198_onLoad_activeActionGroupIndex = -1;
		$("#obj3198").trigger("obj3198_onLoad_ended");
		
		return;
	}
	window.obj3198_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj3223 
show_12114();
function show_12114() {
	window.obj3198_onLoad_runningActionsCount = obj3198_onLoad_runningActionsCount + 1;
	$("#obj3223").fadeIn(0, function() {
			setTimeout(function() {
				window.obj3198_onLoad_runningActionsCount = window.obj3198_onLoad_runningActionsCount - 1;
if (window.obj3198_onLoad_runningActionsCount == 0) {
	obj3198_onLoad_actionGroup1();
}
				$("#obj3223").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj3198_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3198_onLoad_activeActionGroupIndex = -1;
		$("#obj3198").trigger("obj3198_onLoad_ended");
		
		return;
	}
	window.obj3198_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_3201();
function wait_3201() {
	window.obj3198_onLoad_runningActionsCount = obj3198_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj3198_onLoad_runningActionsCount = window.obj3198_onLoad_runningActionsCount - 1;
if (window.obj3198_onLoad_runningActionsCount == 0) {
	obj3198_onLoad_actionGroup2();
}
	}, 10000);
}












};
obj3198_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3198_onLoad_activeActionGroupIndex = -1;
		$("#obj3198").trigger("obj3198_onLoad_ended");
		
		return;
	}
	window.obj3198_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj12110 
hide_3207();
function hide_3207() {
	window.obj3198_onLoad_runningActionsCount = obj3198_onLoad_runningActionsCount + 1;
	$("#obj12110").fadeOut(0, function() {
			setTimeout(function() {
				window.obj3198_onLoad_runningActionsCount = window.obj3198_onLoad_runningActionsCount - 1;
if (window.obj3198_onLoad_runningActionsCount == 0) {
	obj3198_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj3223 
hide_3226();
function hide_3226() {
	window.obj3198_onLoad_runningActionsCount = obj3198_onLoad_runningActionsCount + 1;
	$("#obj3223").fadeOut(500, function() {
			setTimeout(function() {
				window.obj3198_onLoad_runningActionsCount = window.obj3198_onLoad_runningActionsCount - 1;
if (window.obj3198_onLoad_runningActionsCount == 0) {
	obj3198_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14346 
show_3205();
function show_3205() {
	window.obj3198_onLoad_runningActionsCount = obj3198_onLoad_runningActionsCount + 1;
	$("#obj14346").fadeIn(0, function() {
			setTimeout(function() {
				window.obj3198_onLoad_runningActionsCount = window.obj3198_onLoad_runningActionsCount - 1;
if (window.obj3198_onLoad_runningActionsCount == 0) {
	obj3198_onLoad_actionGroup3();
}
				$("#obj14346").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj3198_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3198_onLoad_activeActionGroupIndex = -1;
		$("#obj3198").trigger("obj3198_onLoad_ended");
		
		return;
	}
	window.obj3198_onLoad_activeActionGroupIndex = 3;
	





















};
obj15948_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15948_onLoad_activeActionGroupIndex = -1;
		$("#obj15948").trigger("obj15948_onLoad_ended");
		
		return;
	}
	window.obj15948_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_15951();
function wait_15951() {
	window.obj15948_onLoad_runningActionsCount = obj15948_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15948_onLoad_runningActionsCount = window.obj15948_onLoad_runningActionsCount - 1;
if (window.obj15948_onLoad_runningActionsCount == 0) {
	obj15948_onLoad_actionGroup1();
}
	}, 600000);
}












};
obj15948_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15948_onLoad_activeActionGroupIndex = -1;
		$("#obj15948").trigger("obj15948_onLoad_ended");
		
		return;
	}
	window.obj15948_onLoad_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page1
goToPage_15952();
function goToPage_15952() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
	}
}





















};
obj15948_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15948_onLoad_activeActionGroupIndex = -1;
		$("#obj15948").trigger("obj15948_onLoad_ended");
		
		return;
	}
	window.obj15948_onLoad_activeActionGroupIndex = 2;
	





















};
obj16105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16105_onTap_activeActionGroupIndex = -1;
		$("#obj16105").trigger("obj16105_onTap_ended");
		
		return;
	}
	window.obj16105_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj16105 
hide_16111();
function hide_16111() {
	window.obj16105_onTap_runningActionsCount = obj16105_onTap_runningActionsCount + 1;
	$("#obj16105").fadeOut(0, function() {
			setTimeout(function() {
				window.obj16105_onTap_runningActionsCount = window.obj16105_onTap_runningActionsCount - 1;
if (window.obj16105_onTap_runningActionsCount == 0) {
	obj16105_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj16107 
show_16112();
function show_16112() {
	window.obj16105_onTap_runningActionsCount = obj16105_onTap_runningActionsCount + 1;
	$("#obj16107").fadeIn(0, function() {
			setTimeout(function() {
				window.obj16105_onTap_runningActionsCount = window.obj16105_onTap_runningActionsCount - 1;
if (window.obj16105_onTap_runningActionsCount == 0) {
	obj16105_onTap_actionGroup1();
}
				$("#obj16107").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj16105_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16105_onTap_activeActionGroupIndex = -1;
		$("#obj16105").trigger("obj16105_onTap_ended");
		
		return;
	}
	window.obj16105_onTap_activeActionGroupIndex = 1;
	





















};
obj16107_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onTap_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onTap_ended");
		
		return;
	}
	window.obj16107_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page1
goToPage_16109();
function goToPage_16109() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
	}
}





















};
obj16107_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onTap_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onTap_ended");
		
		return;
	}
	window.obj16107_onTap_activeActionGroupIndex = 1;
	





















};
obj16107_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16107_onTap_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onTap_ended");
		
		return;
	}
	window.obj16107_onTap_activeActionGroupIndex = 2;
	





















};
obj16107_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onShow_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onShow_ended");
		
		return;
	}
	window.obj16107_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_16136();
function wait_16136() {
	window.obj16107_onShow_runningActionsCount = obj16107_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj16107_onShow_runningActionsCount = window.obj16107_onShow_runningActionsCount - 1;
if (window.obj16107_onShow_runningActionsCount == 0) {
	obj16107_onShow_actionGroup1();
}
	}, 3000);
}












};
obj16107_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onShow_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onShow_ended");
		
		return;
	}
	window.obj16107_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj16107 
hide_16137();
function hide_16137() {
	window.obj16107_onShow_runningActionsCount = obj16107_onShow_runningActionsCount + 1;
	$("#obj16107").fadeOut(0, function() {
			setTimeout(function() {
				window.obj16107_onShow_runningActionsCount = window.obj16107_onShow_runningActionsCount - 1;
if (window.obj16107_onShow_runningActionsCount == 0) {
	obj16107_onShow_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj16105 
show_16138();
function show_16138() {
	window.obj16107_onShow_runningActionsCount = obj16107_onShow_runningActionsCount + 1;
	$("#obj16105").fadeIn(0, function() {
			setTimeout(function() {
				window.obj16107_onShow_runningActionsCount = window.obj16107_onShow_runningActionsCount - 1;
if (window.obj16107_onShow_runningActionsCount == 0) {
	obj16107_onShow_actionGroup2();
}
				$("#obj16105").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj16107_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16107_onShow_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onShow_ended");
		
		return;
	}
	window.obj16107_onShow_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















/*
 *
 *   obj14434: Event Touch Down
 *
 */
 
$("#obj14434").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14434_onTap_activeActionGroupIndex != -1) return;
var obj14434_onTap_runningActionsCount = 0;
var obj14434_onTap_loopCount = 0;
obj14434_onTap_actionGroup0();
});







/*
 *
 *   obj13138: Event Touch Down
 *
 */
 
$("#obj13138").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13138_onTap_activeActionGroupIndex != -1) return;
var obj13138_onTap_runningActionsCount = 0;
var obj13138_onTap_loopCount = 0;
obj13138_onTap_actionGroup0();
});









/*
 *
 *   obj3198: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3198_onLoad_activeActionGroupIndex != -1) return;
var obj3198_onLoad_runningActionsCount = 0;
var obj3198_onLoad_loopCount = 0;
obj3198_onLoad_actionGroup0();
});














/*
 *
 *   obj15948: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj15948_onLoad_activeActionGroupIndex != -1) return;
var obj15948_onLoad_runningActionsCount = 0;
var obj15948_onLoad_loopCount = 0;
obj15948_onLoad_actionGroup0();
});





/*
 *
 *   obj16105: Event Touch Down
 *
 */
 
$("#obj16105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16105_onTap_activeActionGroupIndex != -1) return;
var obj16105_onTap_runningActionsCount = 0;
var obj16105_onTap_loopCount = 0;
obj16105_onTap_actionGroup0();
});







/*
 *
 *   obj16107: Event Touch Down
 *
 */
 
$("#obj16107").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16107_onTap_activeActionGroupIndex != -1) return;
var obj16107_onTap_runningActionsCount = 0;
var obj16107_onTap_loopCount = 0;
obj16107_onTap_actionGroup0();
});

/*
 *
 *   obj16107: Event Show
 *
 */
 
$("#obj16107").bind('SCEventShow', function(event) {
	if (window.obj16107_onShow_activeActionGroupIndex != -1) return;
var obj16107_onShow_runningActionsCount = 0;
var obj16107_onShow_loopCount = 0;
obj16107_onShow_actionGroup0();
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
	
$("#obj12110").trigger('SCEventShow');
$("#obj14434").trigger('SCEventShow');
$("#obj13138").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});