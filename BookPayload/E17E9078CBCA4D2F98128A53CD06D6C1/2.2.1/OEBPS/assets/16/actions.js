pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 1142;
pubcoder.page.title = "16";
pubcoder.page.number = 16;
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
var obj3251_onLoad_activeActionGroupIndex = -1;
var obj3251_onLoad_runningActionsCount = 0;
var obj3251_onLoad_loopCount = 0;
var obj1205_onTap_activeActionGroupIndex = -1;
var obj1205_onTap_runningActionsCount = 0;
var obj1205_onTap_loopCount = 0;
var obj11781_onLoad_activeActionGroupIndex = -1;
var obj11781_onLoad_runningActionsCount = 0;
var obj11781_onLoad_loopCount = 0;
var obj11775_onShow_activeActionGroupIndex = -1;
var obj11775_onShow_runningActionsCount = 0;
var obj11775_onShow_loopCount = 0;
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
		
obj3251_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3251_onLoad_activeActionGroupIndex = -1;
		$("#obj3251").trigger("obj3251_onLoad_ended");
		
		return;
	}
	window.obj3251_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj3251 
show_3254();
function show_3254() {
	window.obj3251_onLoad_runningActionsCount = obj3251_onLoad_runningActionsCount + 1;
	$("#obj3251").fadeIn(300, function() {
			setTimeout(function() {
				window.obj3251_onLoad_runningActionsCount = window.obj3251_onLoad_runningActionsCount - 1;
if (window.obj3251_onLoad_runningActionsCount == 0) {
	obj3251_onLoad_actionGroup1();
}
				$("#obj3251").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj3251_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3251_onLoad_activeActionGroupIndex = -1;
		$("#obj3251").trigger("obj3251_onLoad_ended");
		
		return;
	}
	window.obj3251_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj3251 
hide_3255();
function hide_3255() {
	window.obj3251_onLoad_runningActionsCount = obj3251_onLoad_runningActionsCount + 1;
	$("#obj3251").fadeOut(300, function() {
			setTimeout(function() {
				window.obj3251_onLoad_runningActionsCount = window.obj3251_onLoad_runningActionsCount - 1;
if (window.obj3251_onLoad_runningActionsCount == 0) {
	obj3251_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj3251_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3251_onLoad_activeActionGroupIndex = -1;
		$("#obj3251").trigger("obj3251_onLoad_ended");
		
		return;
	}
	window.obj3251_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj3251 
show_3256();
function show_3256() {
	window.obj3251_onLoad_runningActionsCount = obj3251_onLoad_runningActionsCount + 1;
	$("#obj3251").fadeIn(300, function() {
			setTimeout(function() {
				window.obj3251_onLoad_runningActionsCount = window.obj3251_onLoad_runningActionsCount - 1;
if (window.obj3251_onLoad_runningActionsCount == 0) {
	obj3251_onLoad_actionGroup3();
}
				$("#obj3251").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj3251_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3251_onLoad_activeActionGroupIndex = -1;
		$("#obj3251").trigger("obj3251_onLoad_ended");
		
		return;
	}
	window.obj3251_onLoad_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj3251 
hide_9965();
function hide_9965() {
	window.obj3251_onLoad_runningActionsCount = obj3251_onLoad_runningActionsCount + 1;
	$("#obj3251").fadeOut(300, function() {
			setTimeout(function() {
				window.obj3251_onLoad_runningActionsCount = window.obj3251_onLoad_runningActionsCount - 1;
if (window.obj3251_onLoad_runningActionsCount == 0) {
	obj3251_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj3251_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3251_onLoad_activeActionGroupIndex = -1;
		$("#obj3251").trigger("obj3251_onLoad_ended");
		
		return;
	}
	window.obj3251_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj3251 
show_9966();
function show_9966() {
	window.obj3251_onLoad_runningActionsCount = obj3251_onLoad_runningActionsCount + 1;
	$("#obj3251").fadeIn(300, function() {
			setTimeout(function() {
				window.obj3251_onLoad_runningActionsCount = window.obj3251_onLoad_runningActionsCount - 1;
if (window.obj3251_onLoad_runningActionsCount == 0) {
	obj3251_onLoad_actionGroup5();
}
				$("#obj3251").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj3251_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3251_onLoad_activeActionGroupIndex = -1;
		$("#obj3251").trigger("obj3251_onLoad_ended");
		
		return;
	}
	window.obj3251_onLoad_activeActionGroupIndex = 5;
	





















};
obj1205_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1205_onTap_activeActionGroupIndex = -1;
		$("#obj1205").trigger("obj1205_onTap_ended");
		
		return;
	}
	window.obj1205_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page17
goToPage_1207();
function goToPage_1207() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../17/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(17))},200);
	}
}





















};
obj1205_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1205_onTap_activeActionGroupIndex = -1;
		$("#obj1205").trigger("obj1205_onTap_ended");
		
		return;
	}
	window.obj1205_onTap_activeActionGroupIndex = 1;
	





















};
obj11781_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11781_onLoad_activeActionGroupIndex = -1;
		$("#obj11781").trigger("obj11781_onLoad_ended");
		
		return;
	}
	window.obj11781_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj11775 
show_11789();
function show_11789() {
	window.obj11781_onLoad_runningActionsCount = obj11781_onLoad_runningActionsCount + 1;
	$("#obj11775").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11781_onLoad_runningActionsCount = window.obj11781_onLoad_runningActionsCount - 1;
if (window.obj11781_onLoad_runningActionsCount == 0) {
	obj11781_onLoad_actionGroup1();
}
				$("#obj11775").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11781_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11781_onLoad_activeActionGroupIndex = -1;
		$("#obj11781").trigger("obj11781_onLoad_ended");
		
		return;
	}
	window.obj11781_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_11790();
function wait_11790() {
	window.obj11781_onLoad_runningActionsCount = obj11781_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11781_onLoad_runningActionsCount = window.obj11781_onLoad_runningActionsCount - 1;
if (window.obj11781_onLoad_runningActionsCount == 0) {
	obj11781_onLoad_actionGroup2();
}
	}, 4000);
}












};
obj11781_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11781_onLoad_activeActionGroupIndex = -1;
		$("#obj11781").trigger("obj11781_onLoad_ended");
		
		return;
	}
	window.obj11781_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj11781 
hide_11791();
function hide_11791() {
	window.obj11781_onLoad_runningActionsCount = obj11781_onLoad_runningActionsCount + 1;
	$("#obj11781").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11781_onLoad_runningActionsCount = window.obj11781_onLoad_runningActionsCount - 1;
if (window.obj11781_onLoad_runningActionsCount == 0) {
	obj11781_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj11781_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11781_onLoad_activeActionGroupIndex = -1;
		$("#obj11781").trigger("obj11781_onLoad_ended");
		
		return;
	}
	window.obj11781_onLoad_activeActionGroupIndex = 3;
	





















};
obj11775_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11775_onShow_activeActionGroupIndex = -1;
		$("#obj11775").trigger("obj11775_onShow_ended");
		
		return;
	}
	window.obj11775_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_11779();
function wait_11779() {
	window.obj11775_onShow_runningActionsCount = obj11775_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11775_onShow_runningActionsCount = window.obj11775_onShow_runningActionsCount - 1;
if (window.obj11775_onShow_runningActionsCount == 0) {
	obj11775_onShow_actionGroup1();
}
	}, 4000);
}












};
obj11775_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11775_onShow_activeActionGroupIndex = -1;
		$("#obj11775").trigger("obj11775_onShow_ended");
		
		return;
	}
	window.obj11775_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj11775 
hide_11780();
function hide_11780() {
	window.obj11775_onShow_runningActionsCount = obj11775_onShow_runningActionsCount + 1;
	$("#obj11775").fadeOut(300, function() {
			setTimeout(function() {
				window.obj11775_onShow_runningActionsCount = window.obj11775_onShow_runningActionsCount - 1;
if (window.obj11775_onShow_runningActionsCount == 0) {
	obj11775_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj11775_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11775_onShow_activeActionGroupIndex = -1;
		$("#obj11775").trigger("obj11775_onShow_ended");
		
		return;
	}
	window.obj11775_onShow_activeActionGroupIndex = 2;
	





















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
 *   obj3251: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3251_onLoad_activeActionGroupIndex != -1) return;
var obj3251_onLoad_runningActionsCount = 0;
var obj3251_onLoad_loopCount = 0;
obj3251_onLoad_actionGroup0();
});





/*
 *
 *   obj1205: Event Touch Down
 *
 */
 
$("#obj1205").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1205_onTap_activeActionGroupIndex != -1) return;
var obj1205_onTap_runningActionsCount = 0;
var obj1205_onTap_loopCount = 0;
obj1205_onTap_actionGroup0();
});









/*
 *
 *   obj11781: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj11781_onLoad_activeActionGroupIndex != -1) return;
var obj11781_onLoad_runningActionsCount = 0;
var obj11781_onLoad_loopCount = 0;
obj11781_onLoad_actionGroup0();
});






/*
 *
 *   obj11775: Event Show
 *
 */
 
$("#obj11775").bind('SCEventShow', function(event) {
	if (window.obj11775_onShow_activeActionGroupIndex != -1) return;
var obj11775_onShow_runningActionsCount = 0;
var obj11775_onShow_loopCount = 0;
obj11775_onShow_actionGroup0();
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
	
$("#obj14371").trigger('SCEventShow');
$("#obj3251").trigger('SCEventShow');
$("#obj1205").trigger('SCEventShow');
$("#obj11781").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});