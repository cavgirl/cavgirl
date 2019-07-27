pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 3545;
pubcoder.page.title = "55";
pubcoder.page.number = 55;
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
var obj12207_onLoad_activeActionGroupIndex = -1;
var obj12207_onLoad_runningActionsCount = 0;
var obj12207_onLoad_loopCount = 0;
var obj12204_onTap_activeActionGroupIndex = -1;
var obj12204_onTap_runningActionsCount = 0;
var obj12204_onTap_loopCount = 0;
var obj12216_onTap_activeActionGroupIndex = -1;
var obj12216_onTap_runningActionsCount = 0;
var obj12216_onTap_loopCount = 0;
var obj14454_onTap_activeActionGroupIndex = -1;
var obj14454_onTap_runningActionsCount = 0;
var obj14454_onTap_loopCount = 0;
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
 
var obj12207_counterValue = 0;
var obj12207_counterTargetValue = 2;
var obj12207_counterCanExceedTargetValue = false;
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
		
obj12207_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12207_onLoad_activeActionGroupIndex = -1;
		$("#obj12207").trigger("obj12207_onLoad_ended");
		
		return;
	}
	window.obj12207_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj12202 
show_12210();
function show_12210() {
	window.obj12207_onLoad_runningActionsCount = obj12207_onLoad_runningActionsCount + 1;
	$("#obj12202").fadeIn(0, function() {
			setTimeout(function() {
				window.obj12207_onLoad_runningActionsCount = window.obj12207_onLoad_runningActionsCount - 1;
if (window.obj12207_onLoad_runningActionsCount == 0) {
	obj12207_onLoad_actionGroup1();
}
				$("#obj12202").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj12207_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12207_onLoad_activeActionGroupIndex = -1;
		$("#obj12207").trigger("obj12207_onLoad_ended");
		
		return;
	}
	window.obj12207_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_12211();
function wait_12211() {
	window.obj12207_onLoad_runningActionsCount = obj12207_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj12207_onLoad_runningActionsCount = window.obj12207_onLoad_runningActionsCount - 1;
if (window.obj12207_onLoad_runningActionsCount == 0) {
	obj12207_onLoad_actionGroup2();
}
	}, 10000);
}












};
obj12207_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12207_onLoad_activeActionGroupIndex = -1;
		$("#obj12207").trigger("obj12207_onLoad_ended");
		
		return;
	}
	window.obj12207_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj12202 
hide_12212();
function hide_12212() {
	window.obj12207_onLoad_runningActionsCount = obj12207_onLoad_runningActionsCount + 1;
	$("#obj12202").fadeOut(0, function() {
			setTimeout(function() {
				window.obj12207_onLoad_runningActionsCount = window.obj12207_onLoad_runningActionsCount - 1;
if (window.obj12207_onLoad_runningActionsCount == 0) {
	obj12207_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj12216 
hide_12213();
function hide_12213() {
	window.obj12207_onLoad_runningActionsCount = obj12207_onLoad_runningActionsCount + 1;
	$("#obj12216").fadeOut(200, function() {
			setTimeout(function() {
				window.obj12207_onLoad_runningActionsCount = window.obj12207_onLoad_runningActionsCount - 1;
if (window.obj12207_onLoad_runningActionsCount == 0) {
	obj12207_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj12204 
show_12214();
function show_12214() {
	window.obj12207_onLoad_runningActionsCount = obj12207_onLoad_runningActionsCount + 1;
	$("#obj12204").fadeIn(200, function() {
			setTimeout(function() {
				window.obj12207_onLoad_runningActionsCount = window.obj12207_onLoad_runningActionsCount - 1;
if (window.obj12207_onLoad_runningActionsCount == 0) {
	obj12207_onLoad_actionGroup3();
}
				$("#obj12204").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj12207_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12207_onLoad_activeActionGroupIndex = -1;
		$("#obj12207").trigger("obj12207_onLoad_ended");
		
		return;
	}
	window.obj12207_onLoad_activeActionGroupIndex = 3;
	





















};
obj12204_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12204_onTap_activeActionGroupIndex = -1;
		$("#obj12204").trigger("obj12204_onTap_ended");
		
		return;
	}
	window.obj12204_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page56
goToPage_12206();
function goToPage_12206() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../56/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(56))},200);
	}
}





















};
obj12204_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12204_onTap_activeActionGroupIndex = -1;
		$("#obj12204").trigger("obj12204_onTap_ended");
		
		return;
	}
	window.obj12204_onTap_activeActionGroupIndex = 1;
	





















};
obj12216_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12216_onTap_activeActionGroupIndex = -1;
		$("#obj12216").trigger("obj12216_onTap_ended");
		
		return;
	}
	window.obj12216_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page56
goToPage_12218();
function goToPage_12218() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../56/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(56))},200);
	}
}





















};
obj12216_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12216_onTap_activeActionGroupIndex = -1;
		$("#obj12216").trigger("obj12216_onTap_ended");
		
		return;
	}
	window.obj12216_onTap_activeActionGroupIndex = 1;
	





















};
obj14454_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14454_onTap_activeActionGroupIndex = -1;
		$("#obj14454").trigger("obj14454_onTap_ended");
		
		return;
	}
	window.obj14454_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page56
goToPage_14456();
function goToPage_14456() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../56/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(56))},200);
	}
}





















};
obj14454_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14454_onTap_activeActionGroupIndex = -1;
		$("#obj14454").trigger("obj14454_onTap_ended");
		
		return;
	}
	window.obj14454_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj12207: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj12207_onLoad_activeActionGroupIndex != -1) return;
var obj12207_onLoad_runningActionsCount = 0;
var obj12207_onLoad_loopCount = 0;
obj12207_onLoad_actionGroup0();
});





/*
 *
 *   obj12204: Event Touch Down
 *
 */
 
$("#obj12204").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12204_onTap_activeActionGroupIndex != -1) return;
var obj12204_onTap_runningActionsCount = 0;
var obj12204_onTap_loopCount = 0;
obj12204_onTap_actionGroup0();
});







/*
 *
 *   obj12216: Event Touch Down
 *
 */
 
$("#obj12216").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12216_onTap_activeActionGroupIndex != -1) return;
var obj12216_onTap_runningActionsCount = 0;
var obj12216_onTap_loopCount = 0;
obj12216_onTap_actionGroup0();
});














/*
 *
 *   obj14454: Event Touch Down
 *
 */
 
$("#obj14454").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14454_onTap_activeActionGroupIndex != -1) return;
var obj14454_onTap_runningActionsCount = 0;
var obj14454_onTap_loopCount = 0;
obj14454_onTap_actionGroup0();
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
	
$("#obj12216").trigger('SCEventShow');
$("#obj14454").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});