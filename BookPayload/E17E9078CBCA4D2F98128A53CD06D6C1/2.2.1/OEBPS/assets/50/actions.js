pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 5576;
pubcoder.page.title = "50";
pubcoder.page.number = 50;
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
var obj5585_onTap_activeActionGroupIndex = -1;
var obj5585_onTap_runningActionsCount = 0;
var obj5585_onTap_loopCount = 0;
var obj5588_onTap_activeActionGroupIndex = -1;
var obj5588_onTap_runningActionsCount = 0;
var obj5588_onTap_loopCount = 0;
var obj5592_onShow_activeActionGroupIndex = -1;
var obj5592_onShow_runningActionsCount = 0;
var obj5592_onShow_loopCount = 0;
var obj10346_onShow_activeActionGroupIndex = -1;
var obj10346_onShow_runningActionsCount = 0;
var obj10346_onShow_loopCount = 0;
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
		
obj5585_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5585_onTap_activeActionGroupIndex = -1;
		$("#obj5585").trigger("obj5585_onTap_ended");
		
		return;
	}
	window.obj5585_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj5592 
show_5587();
function show_5587() {
	window.obj5585_onTap_runningActionsCount = obj5585_onTap_runningActionsCount + 1;
	$("#obj5592").fadeIn(0, function() {
			setTimeout(function() {
				window.obj5585_onTap_runningActionsCount = window.obj5585_onTap_runningActionsCount - 1;
if (window.obj5585_onTap_runningActionsCount == 0) {
	obj5585_onTap_actionGroup1();
}
				$("#obj5592").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj5585_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5585_onTap_activeActionGroupIndex = -1;
		$("#obj5585").trigger("obj5585_onTap_ended");
		
		return;
	}
	window.obj5585_onTap_activeActionGroupIndex = 1;
	





















};
obj5588_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5588_onTap_activeActionGroupIndex = -1;
		$("#obj5588").trigger("obj5588_onTap_ended");
		
		return;
	}
	window.obj5588_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj5581 
show_10357();
function show_10357() {
	window.obj5588_onTap_runningActionsCount = obj5588_onTap_runningActionsCount + 1;
	$("#obj5581").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj5588_onTap_runningActionsCount = window.obj5588_onTap_runningActionsCount - 1;
if (window.obj5588_onTap_runningActionsCount == 0) {
	obj5588_onTap_actionGroup1();
}
				$("#obj5581").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj5588_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5588_onTap_activeActionGroupIndex = -1;
		$("#obj5588").trigger("obj5588_onTap_ended");
		
		return;
	}
	window.obj5588_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj10346 
show_5591();
function show_5591() {
	window.obj5588_onTap_runningActionsCount = obj5588_onTap_runningActionsCount + 1;
	$("#obj10346").fadeIn(500, function() {
			setTimeout(function() {
				window.obj5588_onTap_runningActionsCount = window.obj5588_onTap_runningActionsCount - 1;
if (window.obj5588_onTap_runningActionsCount == 0) {
	obj5588_onTap_actionGroup2();
}
				$("#obj10346").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj5588_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5588_onTap_activeActionGroupIndex = -1;
		$("#obj5588").trigger("obj5588_onTap_ended");
		
		return;
	}
	window.obj5588_onTap_activeActionGroupIndex = 2;
	





















};
obj5592_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5592_onShow_activeActionGroupIndex = -1;
		$("#obj5592").trigger("obj5592_onShow_ended");
		
		return;
	}
	window.obj5592_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_5595();
function wait_5595() {
	window.obj5592_onShow_runningActionsCount = obj5592_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj5592_onShow_runningActionsCount = window.obj5592_onShow_runningActionsCount - 1;
if (window.obj5592_onShow_runningActionsCount == 0) {
	obj5592_onShow_actionGroup1();
}
	}, 1000);
}












};
obj5592_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5592_onShow_activeActionGroupIndex = -1;
		$("#obj5592").trigger("obj5592_onShow_ended");
		
		return;
	}
	window.obj5592_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj5592 
hide_5596();
function hide_5596() {
	window.obj5592_onShow_runningActionsCount = obj5592_onShow_runningActionsCount + 1;
	$("#obj5592").fadeOut(0, function() {
			setTimeout(function() {
				window.obj5592_onShow_runningActionsCount = window.obj5592_onShow_runningActionsCount - 1;
if (window.obj5592_onShow_runningActionsCount == 0) {
	obj5592_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj5592_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5592_onShow_activeActionGroupIndex = -1;
		$("#obj5592").trigger("obj5592_onShow_ended");
		
		return;
	}
	window.obj5592_onShow_activeActionGroupIndex = 2;
	





















};
obj10346_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10346_onShow_activeActionGroupIndex = -1;
		$("#obj10346").trigger("obj10346_onShow_ended");
		
		return;
	}
	window.obj10346_onShow_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj10346 
hide_10349();
function hide_10349() {
	window.obj10346_onShow_runningActionsCount = obj10346_onShow_runningActionsCount + 1;
	$("#obj10346").fadeOut(500, function() {
			setTimeout(function() {
				window.obj10346_onShow_runningActionsCount = window.obj10346_onShow_runningActionsCount - 1;
if (window.obj10346_onShow_runningActionsCount == 0) {
	obj10346_onShow_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj10346_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10346_onShow_activeActionGroupIndex = -1;
		$("#obj10346").trigger("obj10346_onShow_ended");
		
		return;
	}
	window.obj10346_onShow_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj10346 
show_10350();
function show_10350() {
	window.obj10346_onShow_runningActionsCount = obj10346_onShow_runningActionsCount + 1;
	$("#obj10346").fadeIn(500, function() {
			setTimeout(function() {
				window.obj10346_onShow_runningActionsCount = window.obj10346_onShow_runningActionsCount - 1;
if (window.obj10346_onShow_runningActionsCount == 0) {
	obj10346_onShow_actionGroup2();
}
				$("#obj10346").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj10346_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10346_onShow_activeActionGroupIndex = -1;
		$("#obj10346").trigger("obj10346_onShow_ended");
		
		return;
	}
	window.obj10346_onShow_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj10346_onShow();
function loop_obj10346_onShow() {
	var loopCount = 1;
	window.obj10346_onShow_loopCount = window.obj10346_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj10346_onShow_loopCount > loopCount) {
		window.obj10346_onShow_loopCount = 0
		obj10346_onShow_actionGroup3();
	} else {
		obj10346_onShow_actionGroup0();
	}
}













};
obj10346_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10346_onShow_activeActionGroupIndex = -1;
		$("#obj10346").trigger("obj10346_onShow_ended");
		
		return;
	}
	window.obj10346_onShow_activeActionGroupIndex = 3;
	








//	action: wait
wait_10352();
function wait_10352() {
	window.obj10346_onShow_runningActionsCount = obj10346_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj10346_onShow_runningActionsCount = window.obj10346_onShow_runningActionsCount - 1;
if (window.obj10346_onShow_runningActionsCount == 0) {
	obj10346_onShow_actionGroup4();
}
	}, 1000);
}












};
obj10346_onShow_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10346_onShow_activeActionGroupIndex = -1;
		$("#obj10346").trigger("obj10346_onShow_ended");
		
		return;
	}
	window.obj10346_onShow_activeActionGroupIndex = 4;
	
//	action: goToPage
//	target: page51
goToPage_10353();
function goToPage_10353() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../51/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(51))},200);
	}
}





















};
obj10346_onShow_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10346_onShow_activeActionGroupIndex = -1;
		$("#obj10346").trigger("obj10346_onShow_ended");
		
		return;
	}
	window.obj10346_onShow_activeActionGroupIndex = 5;
	





















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
 *   obj5585: Event Touch Down
 *
 */
 
$("#obj5585").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5585_onTap_activeActionGroupIndex != -1) return;
var obj5585_onTap_runningActionsCount = 0;
var obj5585_onTap_loopCount = 0;
obj5585_onTap_actionGroup0();
});







/*
 *
 *   obj5588: Event Touch Down
 *
 */
 
$("#obj5588").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5588_onTap_activeActionGroupIndex != -1) return;
var obj5588_onTap_runningActionsCount = 0;
var obj5588_onTap_loopCount = 0;
obj5588_onTap_actionGroup0();
});








/*
 *
 *   obj5592: Event Show
 *
 */
 
$("#obj5592").bind('SCEventShow', function(event) {
	if (window.obj5592_onShow_activeActionGroupIndex != -1) return;
var obj5592_onShow_runningActionsCount = 0;
var obj5592_onShow_loopCount = 0;
obj5592_onShow_actionGroup0();
});







/*
 *
 *   obj10346: Event Show
 *
 */
 
$("#obj10346").bind('SCEventShow', function(event) {
	if (window.obj10346_onShow_activeActionGroupIndex != -1) return;
var obj10346_onShow_runningActionsCount = 0;
var obj10346_onShow_loopCount = 0;
obj10346_onShow_actionGroup0();
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
	
$("#obj10355").trigger('SCEventShow');
$("#obj5585").trigger('SCEventShow');
$("#obj5588").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});