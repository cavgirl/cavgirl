pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 3455;
pubcoder.page.title = "36";
pubcoder.page.number = 36;
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
var obj12173_onLoad_activeActionGroupIndex = -1;
var obj12173_onLoad_runningActionsCount = 0;
var obj12173_onLoad_loopCount = 0;
var obj12170_onTap_activeActionGroupIndex = -1;
var obj12170_onTap_runningActionsCount = 0;
var obj12170_onTap_loopCount = 0;
var obj12182_onTap_activeActionGroupIndex = -1;
var obj12182_onTap_runningActionsCount = 0;
var obj12182_onTap_loopCount = 0;
var obj14446_onTap_activeActionGroupIndex = -1;
var obj14446_onTap_runningActionsCount = 0;
var obj14446_onTap_loopCount = 0;
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
 
var obj12173_counterValue = 0;
var obj12173_counterTargetValue = 2;
var obj12173_counterCanExceedTargetValue = false;
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
		
obj12173_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12173_onLoad_activeActionGroupIndex = -1;
		$("#obj12173").trigger("obj12173_onLoad_ended");
		
		return;
	}
	window.obj12173_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj12168 
show_12176();
function show_12176() {
	window.obj12173_onLoad_runningActionsCount = obj12173_onLoad_runningActionsCount + 1;
	$("#obj12168").fadeIn(0, function() {
			setTimeout(function() {
				window.obj12173_onLoad_runningActionsCount = window.obj12173_onLoad_runningActionsCount - 1;
if (window.obj12173_onLoad_runningActionsCount == 0) {
	obj12173_onLoad_actionGroup1();
}
				$("#obj12168").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj12173_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12173_onLoad_activeActionGroupIndex = -1;
		$("#obj12173").trigger("obj12173_onLoad_ended");
		
		return;
	}
	window.obj12173_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_12177();
function wait_12177() {
	window.obj12173_onLoad_runningActionsCount = obj12173_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj12173_onLoad_runningActionsCount = window.obj12173_onLoad_runningActionsCount - 1;
if (window.obj12173_onLoad_runningActionsCount == 0) {
	obj12173_onLoad_actionGroup2();
}
	}, 10000);
}












};
obj12173_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12173_onLoad_activeActionGroupIndex = -1;
		$("#obj12173").trigger("obj12173_onLoad_ended");
		
		return;
	}
	window.obj12173_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj12168 
hide_12178();
function hide_12178() {
	window.obj12173_onLoad_runningActionsCount = obj12173_onLoad_runningActionsCount + 1;
	$("#obj12168").fadeOut(0, function() {
			setTimeout(function() {
				window.obj12173_onLoad_runningActionsCount = window.obj12173_onLoad_runningActionsCount - 1;
if (window.obj12173_onLoad_runningActionsCount == 0) {
	obj12173_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj12182 
hide_12179();
function hide_12179() {
	window.obj12173_onLoad_runningActionsCount = obj12173_onLoad_runningActionsCount + 1;
	$("#obj12182").fadeOut(200, function() {
			setTimeout(function() {
				window.obj12173_onLoad_runningActionsCount = window.obj12173_onLoad_runningActionsCount - 1;
if (window.obj12173_onLoad_runningActionsCount == 0) {
	obj12173_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj12170 
show_12180();
function show_12180() {
	window.obj12173_onLoad_runningActionsCount = obj12173_onLoad_runningActionsCount + 1;
	$("#obj12170").fadeIn(200, function() {
			setTimeout(function() {
				window.obj12173_onLoad_runningActionsCount = window.obj12173_onLoad_runningActionsCount - 1;
if (window.obj12173_onLoad_runningActionsCount == 0) {
	obj12173_onLoad_actionGroup3();
}
				$("#obj12170").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj12173_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12173_onLoad_activeActionGroupIndex = -1;
		$("#obj12173").trigger("obj12173_onLoad_ended");
		
		return;
	}
	window.obj12173_onLoad_activeActionGroupIndex = 3;
	





















};
obj12170_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12170_onTap_activeActionGroupIndex = -1;
		$("#obj12170").trigger("obj12170_onTap_ended");
		
		return;
	}
	window.obj12170_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page37
goToPage_12172();
function goToPage_12172() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../37/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(37))},200);
	}
}





















};
obj12170_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12170_onTap_activeActionGroupIndex = -1;
		$("#obj12170").trigger("obj12170_onTap_ended");
		
		return;
	}
	window.obj12170_onTap_activeActionGroupIndex = 1;
	





















};
obj12182_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12182_onTap_activeActionGroupIndex = -1;
		$("#obj12182").trigger("obj12182_onTap_ended");
		
		return;
	}
	window.obj12182_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page37
goToPage_12201();
function goToPage_12201() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../37/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(37))},200);
	}
}





















};
obj12182_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12182_onTap_activeActionGroupIndex = -1;
		$("#obj12182").trigger("obj12182_onTap_ended");
		
		return;
	}
	window.obj12182_onTap_activeActionGroupIndex = 1;
	





















};
obj14446_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14446_onTap_activeActionGroupIndex = -1;
		$("#obj14446").trigger("obj14446_onTap_ended");
		
		return;
	}
	window.obj14446_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page37
goToPage_14448();
function goToPage_14448() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../37/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(37))},200);
	}
}





















};
obj14446_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14446_onTap_activeActionGroupIndex = -1;
		$("#obj14446").trigger("obj14446_onTap_ended");
		
		return;
	}
	window.obj14446_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj12173: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj12173_onLoad_activeActionGroupIndex != -1) return;
var obj12173_onLoad_runningActionsCount = 0;
var obj12173_onLoad_loopCount = 0;
obj12173_onLoad_actionGroup0();
});





/*
 *
 *   obj12170: Event Touch Down
 *
 */
 
$("#obj12170").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12170_onTap_activeActionGroupIndex != -1) return;
var obj12170_onTap_runningActionsCount = 0;
var obj12170_onTap_loopCount = 0;
obj12170_onTap_actionGroup0();
});







/*
 *
 *   obj12182: Event Touch Down
 *
 */
 
$("#obj12182").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12182_onTap_activeActionGroupIndex != -1) return;
var obj12182_onTap_runningActionsCount = 0;
var obj12182_onTap_loopCount = 0;
obj12182_onTap_actionGroup0();
});














/*
 *
 *   obj14446: Event Touch Down
 *
 */
 
$("#obj14446").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj14446_onTap_activeActionGroupIndex != -1) return;
var obj14446_onTap_runningActionsCount = 0;
var obj14446_onTap_loopCount = 0;
obj14446_onTap_actionGroup0();
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
	
$("#obj12182").trigger('SCEventShow');
$("#obj14446").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});