pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 2585;
pubcoder.page.title = "32";
pubcoder.page.number = 32;
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
var obj2647_onTap_activeActionGroupIndex = -1;
var obj2647_onTap_runningActionsCount = 0;
var obj2647_onTap_loopCount = 0;
var obj4107_onLoad_activeActionGroupIndex = -1;
var obj4107_onLoad_runningActionsCount = 0;
var obj4107_onLoad_loopCount = 0;
var obj11815_onLoad_activeActionGroupIndex = -1;
var obj11815_onLoad_runningActionsCount = 0;
var obj11815_onLoad_loopCount = 0;
var obj11809_onShow_activeActionGroupIndex = -1;
var obj11809_onShow_runningActionsCount = 0;
var obj11809_onShow_loopCount = 0;
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
		
obj2647_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2647_onTap_activeActionGroupIndex = -1;
		$("#obj2647").trigger("obj2647_onTap_ended");
		
		return;
	}
	window.obj2647_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page33
goToPage_2649();
function goToPage_2649() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../33/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(33))},200);
	}
}





















};
obj2647_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2647_onTap_activeActionGroupIndex = -1;
		$("#obj2647").trigger("obj2647_onTap_ended");
		
		return;
	}
	window.obj2647_onTap_activeActionGroupIndex = 1;
	





















};
obj4107_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4107_onLoad_activeActionGroupIndex = -1;
		$("#obj4107").trigger("obj4107_onLoad_ended");
		
		return;
	}
	window.obj4107_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj4107 
show_9983();
function show_9983() {
	window.obj4107_onLoad_runningActionsCount = obj4107_onLoad_runningActionsCount + 1;
	$("#obj4107").fadeIn(300, function() {
			setTimeout(function() {
				window.obj4107_onLoad_runningActionsCount = window.obj4107_onLoad_runningActionsCount - 1;
if (window.obj4107_onLoad_runningActionsCount == 0) {
	obj4107_onLoad_actionGroup1();
}
				$("#obj4107").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj4107_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4107_onLoad_activeActionGroupIndex = -1;
		$("#obj4107").trigger("obj4107_onLoad_ended");
		
		return;
	}
	window.obj4107_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj4107 
hide_9984();
function hide_9984() {
	window.obj4107_onLoad_runningActionsCount = obj4107_onLoad_runningActionsCount + 1;
	$("#obj4107").fadeOut(300, function() {
			setTimeout(function() {
				window.obj4107_onLoad_runningActionsCount = window.obj4107_onLoad_runningActionsCount - 1;
if (window.obj4107_onLoad_runningActionsCount == 0) {
	obj4107_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj4107_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4107_onLoad_activeActionGroupIndex = -1;
		$("#obj4107").trigger("obj4107_onLoad_ended");
		
		return;
	}
	window.obj4107_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj4107 
show_9985();
function show_9985() {
	window.obj4107_onLoad_runningActionsCount = obj4107_onLoad_runningActionsCount + 1;
	$("#obj4107").fadeIn(300, function() {
			setTimeout(function() {
				window.obj4107_onLoad_runningActionsCount = window.obj4107_onLoad_runningActionsCount - 1;
if (window.obj4107_onLoad_runningActionsCount == 0) {
	obj4107_onLoad_actionGroup3();
}
				$("#obj4107").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj4107_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4107_onLoad_activeActionGroupIndex = -1;
		$("#obj4107").trigger("obj4107_onLoad_ended");
		
		return;
	}
	window.obj4107_onLoad_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj4107 
hide_9986();
function hide_9986() {
	window.obj4107_onLoad_runningActionsCount = obj4107_onLoad_runningActionsCount + 1;
	$("#obj4107").fadeOut(300, function() {
			setTimeout(function() {
				window.obj4107_onLoad_runningActionsCount = window.obj4107_onLoad_runningActionsCount - 1;
if (window.obj4107_onLoad_runningActionsCount == 0) {
	obj4107_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj4107_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4107_onLoad_activeActionGroupIndex = -1;
		$("#obj4107").trigger("obj4107_onLoad_ended");
		
		return;
	}
	window.obj4107_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj4107 
show_9987();
function show_9987() {
	window.obj4107_onLoad_runningActionsCount = obj4107_onLoad_runningActionsCount + 1;
	$("#obj4107").fadeIn(300, function() {
			setTimeout(function() {
				window.obj4107_onLoad_runningActionsCount = window.obj4107_onLoad_runningActionsCount - 1;
if (window.obj4107_onLoad_runningActionsCount == 0) {
	obj4107_onLoad_actionGroup5();
}
				$("#obj4107").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj4107_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4107_onLoad_activeActionGroupIndex = -1;
		$("#obj4107").trigger("obj4107_onLoad_ended");
		
		return;
	}
	window.obj4107_onLoad_activeActionGroupIndex = 5;
	





















};
obj11815_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11815_onLoad_activeActionGroupIndex = -1;
		$("#obj11815").trigger("obj11815_onLoad_ended");
		
		return;
	}
	window.obj11815_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj11809 
show_11823();
function show_11823() {
	window.obj11815_onLoad_runningActionsCount = obj11815_onLoad_runningActionsCount + 1;
	$("#obj11809").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11815_onLoad_runningActionsCount = window.obj11815_onLoad_runningActionsCount - 1;
if (window.obj11815_onLoad_runningActionsCount == 0) {
	obj11815_onLoad_actionGroup1();
}
				$("#obj11809").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11815_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11815_onLoad_activeActionGroupIndex = -1;
		$("#obj11815").trigger("obj11815_onLoad_ended");
		
		return;
	}
	window.obj11815_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_11824();
function wait_11824() {
	window.obj11815_onLoad_runningActionsCount = obj11815_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11815_onLoad_runningActionsCount = window.obj11815_onLoad_runningActionsCount - 1;
if (window.obj11815_onLoad_runningActionsCount == 0) {
	obj11815_onLoad_actionGroup2();
}
	}, 4000);
}












};
obj11815_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11815_onLoad_activeActionGroupIndex = -1;
		$("#obj11815").trigger("obj11815_onLoad_ended");
		
		return;
	}
	window.obj11815_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj11815 
hide_11825();
function hide_11825() {
	window.obj11815_onLoad_runningActionsCount = obj11815_onLoad_runningActionsCount + 1;
	$("#obj11815").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11815_onLoad_runningActionsCount = window.obj11815_onLoad_runningActionsCount - 1;
if (window.obj11815_onLoad_runningActionsCount == 0) {
	obj11815_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj11815_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11815_onLoad_activeActionGroupIndex = -1;
		$("#obj11815").trigger("obj11815_onLoad_ended");
		
		return;
	}
	window.obj11815_onLoad_activeActionGroupIndex = 3;
	





















};
obj11809_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11809_onShow_activeActionGroupIndex = -1;
		$("#obj11809").trigger("obj11809_onShow_ended");
		
		return;
	}
	window.obj11809_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_11813();
function wait_11813() {
	window.obj11809_onShow_runningActionsCount = obj11809_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11809_onShow_runningActionsCount = window.obj11809_onShow_runningActionsCount - 1;
if (window.obj11809_onShow_runningActionsCount == 0) {
	obj11809_onShow_actionGroup1();
}
	}, 4000);
}












};
obj11809_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11809_onShow_activeActionGroupIndex = -1;
		$("#obj11809").trigger("obj11809_onShow_ended");
		
		return;
	}
	window.obj11809_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj11809 
hide_11814();
function hide_11814() {
	window.obj11809_onShow_runningActionsCount = obj11809_onShow_runningActionsCount + 1;
	$("#obj11809").fadeOut(300, function() {
			setTimeout(function() {
				window.obj11809_onShow_runningActionsCount = window.obj11809_onShow_runningActionsCount - 1;
if (window.obj11809_onShow_runningActionsCount == 0) {
	obj11809_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj11809_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11809_onShow_activeActionGroupIndex = -1;
		$("#obj11809").trigger("obj11809_onShow_ended");
		
		return;
	}
	window.obj11809_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj2647: Event Touch Down
 *
 */
 
$("#obj2647").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2647_onTap_activeActionGroupIndex != -1) return;
var obj2647_onTap_runningActionsCount = 0;
var obj2647_onTap_loopCount = 0;
obj2647_onTap_actionGroup0();
});









/*
 *
 *   obj4107: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4107_onLoad_activeActionGroupIndex != -1) return;
var obj4107_onLoad_runningActionsCount = 0;
var obj4107_onLoad_loopCount = 0;
obj4107_onLoad_actionGroup0();
});







/*
 *
 *   obj11815: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj11815_onLoad_activeActionGroupIndex != -1) return;
var obj11815_onLoad_runningActionsCount = 0;
var obj11815_onLoad_loopCount = 0;
obj11815_onLoad_actionGroup0();
});






/*
 *
 *   obj11809: Event Show
 *
 */
 
$("#obj11809").bind('SCEventShow', function(event) {
	if (window.obj11809_onShow_activeActionGroupIndex != -1) return;
var obj11809_onShow_runningActionsCount = 0;
var obj11809_onShow_loopCount = 0;
obj11809_onShow_actionGroup0();
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
	
$("#obj9988").trigger('SCEventShow');
$("#obj2647").trigger('SCEventShow');
$("#obj4107").trigger('SCEventShow');
$("#obj11815").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});