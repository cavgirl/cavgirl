pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 9811;
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
var obj9817_onLoad_activeActionGroupIndex = -1;
var obj9817_onLoad_runningActionsCount = 0;
var obj9817_onLoad_loopCount = 0;
var obj9824_onLoad_activeActionGroupIndex = -1;
var obj9824_onLoad_runningActionsCount = 0;
var obj9824_onLoad_loopCount = 0;
var obj9837_onTap_activeActionGroupIndex = -1;
var obj9837_onTap_runningActionsCount = 0;
var obj9837_onTap_loopCount = 0;
var obj9840_onShow_activeActionGroupIndex = -1;
var obj9840_onShow_runningActionsCount = 0;
var obj9840_onShow_loopCount = 0;
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
		
obj9817_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9817_onLoad_activeActionGroupIndex = -1;
		$("#obj9817").trigger("obj9817_onLoad_ended");
		
		return;
	}
	window.obj9817_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj9817 
show_9820();
function show_9820() {
	window.obj9817_onLoad_runningActionsCount = obj9817_onLoad_runningActionsCount + 1;
	$("#obj9817").fadeIn(300, function() {
			setTimeout(function() {
				window.obj9817_onLoad_runningActionsCount = window.obj9817_onLoad_runningActionsCount - 1;
if (window.obj9817_onLoad_runningActionsCount == 0) {
	obj9817_onLoad_actionGroup1();
}
				$("#obj9817").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj9817_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9817_onLoad_activeActionGroupIndex = -1;
		$("#obj9817").trigger("obj9817_onLoad_ended");
		
		return;
	}
	window.obj9817_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9817 
hide_9821();
function hide_9821() {
	window.obj9817_onLoad_runningActionsCount = obj9817_onLoad_runningActionsCount + 1;
	$("#obj9817").fadeOut(300, function() {
			setTimeout(function() {
				window.obj9817_onLoad_runningActionsCount = window.obj9817_onLoad_runningActionsCount - 1;
if (window.obj9817_onLoad_runningActionsCount == 0) {
	obj9817_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj9817_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9817_onLoad_activeActionGroupIndex = -1;
		$("#obj9817").trigger("obj9817_onLoad_ended");
		
		return;
	}
	window.obj9817_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj9817 
show_9972();
function show_9972() {
	window.obj9817_onLoad_runningActionsCount = obj9817_onLoad_runningActionsCount + 1;
	$("#obj9817").fadeIn(300, function() {
			setTimeout(function() {
				window.obj9817_onLoad_runningActionsCount = window.obj9817_onLoad_runningActionsCount - 1;
if (window.obj9817_onLoad_runningActionsCount == 0) {
	obj9817_onLoad_actionGroup3();
}
				$("#obj9817").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj9817_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9817_onLoad_activeActionGroupIndex = -1;
		$("#obj9817").trigger("obj9817_onLoad_ended");
		
		return;
	}
	window.obj9817_onLoad_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj9817 
hide_9973();
function hide_9973() {
	window.obj9817_onLoad_runningActionsCount = obj9817_onLoad_runningActionsCount + 1;
	$("#obj9817").fadeOut(300, function() {
			setTimeout(function() {
				window.obj9817_onLoad_runningActionsCount = window.obj9817_onLoad_runningActionsCount - 1;
if (window.obj9817_onLoad_runningActionsCount == 0) {
	obj9817_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj9817_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9817_onLoad_activeActionGroupIndex = -1;
		$("#obj9817").trigger("obj9817_onLoad_ended");
		
		return;
	}
	window.obj9817_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj9817 
show_9974();
function show_9974() {
	window.obj9817_onLoad_runningActionsCount = obj9817_onLoad_runningActionsCount + 1;
	$("#obj9817").fadeIn(300, function() {
			setTimeout(function() {
				window.obj9817_onLoad_runningActionsCount = window.obj9817_onLoad_runningActionsCount - 1;
if (window.obj9817_onLoad_runningActionsCount == 0) {
	obj9817_onLoad_actionGroup5();
}
				$("#obj9817").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj9817_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9817_onLoad_activeActionGroupIndex = -1;
		$("#obj9817").trigger("obj9817_onLoad_ended");
		
		return;
	}
	window.obj9817_onLoad_activeActionGroupIndex = 5;
	





















};
obj9824_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9824_onLoad_activeActionGroupIndex = -1;
		$("#obj9824").trigger("obj9824_onLoad_ended");
		
		return;
	}
	window.obj9824_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj9840 
show_9834();
function show_9834() {
	window.obj9824_onLoad_runningActionsCount = obj9824_onLoad_runningActionsCount + 1;
	$("#obj9840").fadeIn(0, function() {
			setTimeout(function() {
				window.obj9824_onLoad_runningActionsCount = window.obj9824_onLoad_runningActionsCount - 1;
if (window.obj9824_onLoad_runningActionsCount == 0) {
	obj9824_onLoad_actionGroup1();
}
				$("#obj9840").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj9824_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9824_onLoad_activeActionGroupIndex = -1;
		$("#obj9824").trigger("obj9824_onLoad_ended");
		
		return;
	}
	window.obj9824_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_9835();
function wait_9835() {
	window.obj9824_onLoad_runningActionsCount = obj9824_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9824_onLoad_runningActionsCount = window.obj9824_onLoad_runningActionsCount - 1;
if (window.obj9824_onLoad_runningActionsCount == 0) {
	obj9824_onLoad_actionGroup2();
}
	}, 4000);
}












};
obj9824_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9824_onLoad_activeActionGroupIndex = -1;
		$("#obj9824").trigger("obj9824_onLoad_ended");
		
		return;
	}
	window.obj9824_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj9824 
hide_9836();
function hide_9836() {
	window.obj9824_onLoad_runningActionsCount = obj9824_onLoad_runningActionsCount + 1;
	$("#obj9824").fadeOut(0, function() {
			setTimeout(function() {
				window.obj9824_onLoad_runningActionsCount = window.obj9824_onLoad_runningActionsCount - 1;
if (window.obj9824_onLoad_runningActionsCount == 0) {
	obj9824_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj9824_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9824_onLoad_activeActionGroupIndex = -1;
		$("#obj9824").trigger("obj9824_onLoad_ended");
		
		return;
	}
	window.obj9824_onLoad_activeActionGroupIndex = 3;
	





















};
obj9837_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9837_onTap_activeActionGroupIndex = -1;
		$("#obj9837").trigger("obj9837_onTap_ended");
		
		return;
	}
	window.obj9837_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page8
goToPage_9839();
function goToPage_9839() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../8/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(8))},200);
	}
}





















};
obj9837_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9837_onTap_activeActionGroupIndex = -1;
		$("#obj9837").trigger("obj9837_onTap_ended");
		
		return;
	}
	window.obj9837_onTap_activeActionGroupIndex = 1;
	





















};
obj9840_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9840_onShow_activeActionGroupIndex = -1;
		$("#obj9840").trigger("obj9840_onShow_ended");
		
		return;
	}
	window.obj9840_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_11773();
function wait_11773() {
	window.obj9840_onShow_runningActionsCount = obj9840_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj9840_onShow_runningActionsCount = window.obj9840_onShow_runningActionsCount - 1;
if (window.obj9840_onShow_runningActionsCount == 0) {
	obj9840_onShow_actionGroup1();
}
	}, 4000);
}












};
obj9840_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9840_onShow_activeActionGroupIndex = -1;
		$("#obj9840").trigger("obj9840_onShow_ended");
		
		return;
	}
	window.obj9840_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj9840 
hide_11774();
function hide_11774() {
	window.obj9840_onShow_runningActionsCount = obj9840_onShow_runningActionsCount + 1;
	$("#obj9840").fadeOut(300, function() {
			setTimeout(function() {
				window.obj9840_onShow_runningActionsCount = window.obj9840_onShow_runningActionsCount - 1;
if (window.obj9840_onShow_runningActionsCount == 0) {
	obj9840_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj9840_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9840_onShow_activeActionGroupIndex = -1;
		$("#obj9840").trigger("obj9840_onShow_ended");
		
		return;
	}
	window.obj9840_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj9817: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj9817_onLoad_activeActionGroupIndex != -1) return;
var obj9817_onLoad_runningActionsCount = 0;
var obj9817_onLoad_loopCount = 0;
obj9817_onLoad_actionGroup0();
});







/*
 *
 *   obj9824: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj9824_onLoad_activeActionGroupIndex != -1) return;
var obj9824_onLoad_runningActionsCount = 0;
var obj9824_onLoad_loopCount = 0;
obj9824_onLoad_actionGroup0();
});





/*
 *
 *   obj9837: Event Touch Down
 *
 */
 
$("#obj9837").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9837_onTap_activeActionGroupIndex != -1) return;
var obj9837_onTap_runningActionsCount = 0;
var obj9837_onTap_loopCount = 0;
obj9837_onTap_actionGroup0();
});








/*
 *
 *   obj9840: Event Show
 *
 */
 
$("#obj9840").bind('SCEventShow', function(event) {
	if (window.obj9840_onShow_activeActionGroupIndex != -1) return;
var obj9840_onShow_runningActionsCount = 0;
var obj9840_onShow_loopCount = 0;
obj9840_onShow_actionGroup0();
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
	
$("#obj14420").trigger('SCEventShow');
$("#obj9817").trigger('SCEventShow');
$("#obj9824").trigger('SCEventShow');
$("#obj9837").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});